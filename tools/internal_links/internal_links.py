#!/usr/bin/env python3
"""Internal link graph analysis for a built HTML directory (or a crawl of URLs).

Builds a directed graph page -> page from every ``<a href>`` that resolves to an internal route,
then reports:

* orphans: pages with no inbound link from a *different* page (prerendered but unreachable);
* click depth from the homepage (BFS; ``None`` when unreachable);
* inbound-link counts (distinct source pages) and PageRank (networkx, damping 0.85);
* "high demand, few links": pages whose GSC impressions are high but inbound links are low
  (``--gsc`` CSV with ``page,impressions[,clicks]`` columns), ranked by impressions / (inbound+1);
* broken internal links (href to a route that does not exist in the build);
* a second "body link" graph built from links inside ``<main>`` (for pages without ``<main>``,
  all links minus targets that appear on more than ``--boilerplate-threshold`` of pages), because
  a page that is only linked from the footer is reachable but not endorsed.

Input modes:
  --dir .next/server/app        prerendered HTML (route = file path minus .html; index.html = /)
  --urls urls.txt --site https://host   crawl the listed pages (no discovery beyond the list)

Outputs (``--out-dir``): ``pages.csv`` (one row per page with all metrics), ``broken_links.csv``,
``orphans.csv`` and a console summary.

Example:
    python3 -I internal_links.py --dir site --site https://www.example-generators.co.za --gsc site/gsc_pages.csv --out-dir out
"""
from __future__ import annotations

import argparse
import csv
import sys
from collections import Counter, defaultdict
from pathlib import Path
from urllib.parse import urljoin, urlsplit

import networkx as nx
from bs4 import BeautifulSoup

SKIP_DIRS = {"_not-found", "_global-error", "api", "sitemaps", "sitemap.xml"}
NON_PAGE = {"/sitemap.xml", "/robots.txt", "/llms.txt", "/manifest.webmanifest", "/favicon.ico"}


def route_of(file: Path, root: Path) -> str:
    rel = file.relative_to(root).with_suffix("").as_posix()
    return "/" if rel == "index" else f"/{rel}"


def html_files(root: Path):
    for p in sorted(root.rglob("*.html")):
        parts = p.relative_to(root).parts
        if parts[0] in SKIP_DIRS or parts[0].startswith("_"):
            continue
        yield p


def normalise(href: str, site: str, base_path: str) -> str | None:
    """Return an internal route for href, or None for external/non-page links."""
    href = href.strip()
    if not href or href.startswith(("mailto:", "tel:", "javascript:", "#")):
        return None
    full = urljoin(site + base_path, href)
    parts = urlsplit(full)
    site_parts = urlsplit(site)
    if parts.scheme not in ("http", "https") or parts.netloc != site_parts.netloc:
        return None
    path = parts.path or "/"
    if path != "/" and path.endswith("/"):
        path = path[:-1]
    if path in NON_PAGE or "." in path.rsplit("/", 1)[-1]:
        return None
    return path


def extract_links(html: str, site: str, route: str) -> tuple[list[str], list[str] | None]:
    """Return (all internal links, links inside <main> or None when the page has no <main>)."""
    soup = BeautifulSoup(html, "html.parser")

    def collect(scope):
        links = []
        for a in scope.find_all("a", href=True):
            r = normalise(a["href"], site, route)
            if r and r != route:
                links.append(r)
        return links

    main = soup.find("main")
    return collect(soup), (collect(main) if main else None)


def load_pages(args) -> dict[str, tuple[list[str], list[str] | None]]:
    pages: dict[str, tuple[list[str], list[str] | None]] = {}
    if args.dir:
        for f in html_files(args.dir):
            route = route_of(f, args.dir)
            pages[route] = extract_links(f.read_text(encoding="utf-8", errors="replace"), args.site, route)
    else:
        import urllib.request
        for line in args.urls.read_text().splitlines():
            url = line.strip()
            if not url or url.startswith("#"):
                continue
            route = normalise(url, args.site, "/") or "/"
            try:
                with urllib.request.urlopen(url, timeout=30) as resp:  # noqa: S310
                    html = resp.read().decode("utf-8", "replace")
            except Exception as exc:
                print(f"fetch failed {url}: {exc}", file=sys.stderr)
                continue
            pages[route] = extract_links(html, args.site, route)
    return pages


def analyse(pages: dict[str, tuple[list[str], list[str] | None]], boilerplate_threshold: float):
    """Build the full graph and a body-link graph.

    Body links are the links inside <main>; for pages without <main> the fallback is "all links
    except targets that appear on more than ``boilerplate_threshold`` of pages" (nav/footer heuristic,
    the same idea the user's seo-duplication script applies to text).
    """
    routes = set(pages)
    n = len(routes)
    sources_per_target: dict[str, set[str]] = defaultdict(set)
    for src, (targets, _) in pages.items():
        for t in targets:
            sources_per_target[t].add(src)
    boilerplate = {t for t, s in sources_per_target.items() if len(s) > boilerplate_threshold * n}
    g = nx.DiGraph()
    g.add_nodes_from(routes)
    body = nx.DiGraph()
    body.add_nodes_from(routes)
    broken = []
    for src, (targets, main_links) in pages.items():
        for t in set(targets):
            if t not in routes:
                broken.append((src, t))
                continue
            g.add_edge(src, t)
        body_targets = set(main_links) if main_links is not None else {t for t in targets if t not in boilerplate}
        for t in body_targets:
            if t in routes:
                body.add_edge(src, t)
    depth = nx.single_source_shortest_path_length(g, "/") if "/" in routes else {}
    pr = nx.pagerank(g, alpha=0.85)
    rows = []
    for r in sorted(routes):
        inbound = g.in_degree(r)
        rows.append({"page": r, "inbound": inbound, "inbound_body": body.in_degree(r), "outbound": g.out_degree(r),
                     "depth": depth.get(r), "pagerank": round(pr[r], 5), "orphan": inbound == 0 and r != "/",
                     "boilerplate_target": r in boilerplate})
    return rows, broken, boilerplate


def join_gsc(rows: list[dict], gsc_path: Path, site: str) -> None:
    impressions: dict[str, int] = Counter()
    clicks: dict[str, int] = Counter()
    with gsc_path.open(newline="") as fh:
        for rec in csv.DictReader(fh):
            route = normalise(rec["page"], site, "/") or "/"
            impressions[route] += int(float(rec.get("impressions", 0) or 0))
            clicks[route] += int(float(rec.get("clicks", 0) or 0))
    for row in rows:
        row["impressions"] = impressions.get(row["page"], 0)
        row["clicks"] = clicks.get(row["page"], 0)
        row["demand_per_link"] = round(row["impressions"] / (row["inbound_body"] + 1), 1)


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    src = ap.add_mutually_exclusive_group(required=True)
    src.add_argument("--dir", type=Path, help="built HTML directory (e.g. .next/server/app)")
    src.add_argument("--urls", type=Path, help="text file of URLs to crawl (no link discovery)")
    ap.add_argument("--site", required=True, help="origin used to resolve absolute internal links, e.g. https://www.example.co.za")
    ap.add_argument("--gsc", type=Path, help="CSV with page,impressions[,clicks] to join (e.g. GSC page export)")
    ap.add_argument("--boilerplate-threshold", type=float, default=0.5,
                    help="for pages without <main>: targets linked from > this share of pages count as nav/footer (default 0.5)")
    ap.add_argument("--max-depth", type=int, default=3, help="pages deeper than this are listed")
    ap.add_argument("--out-dir", type=Path, default=Path("out"))
    args = ap.parse_args()
    args.site = args.site.rstrip("/")

    pages = load_pages(args)
    if not pages:
        sys.exit("no pages loaded")
    rows, broken, boilerplate = analyse(pages, args.boilerplate_threshold)
    if args.gsc:
        join_gsc(rows, args.gsc, args.site)
    args.out_dir.mkdir(parents=True, exist_ok=True)
    fields = list(rows[0].keys())
    with (args.out_dir / "pages.csv").open("w", newline="") as fh:
        w = csv.DictWriter(fh, fieldnames=fields)
        w.writeheader()
        w.writerows(rows)
    with (args.out_dir / "broken_links.csv").open("w", newline="") as fh:
        w = csv.writer(fh)
        w.writerow(["source", "target"])
        w.writerows(broken)
    orphans = [r for r in rows if r["orphan"]]
    with (args.out_dir / "orphans.csv").open("w", newline="") as fh:
        w = csv.writer(fh)
        w.writerow(["page"])
        w.writerows([[r["page"]] for r in orphans])

    print(f"pages={len(rows)} edges={sum(r['inbound'] for r in rows)} boilerplate targets={len(boilerplate)} ({sorted(boilerplate)})")
    print(f"orphans ({len(orphans)}): {[r['page'] for r in orphans]}")
    deep = [r for r in rows if r["depth"] is None or r["depth"] > args.max_depth]
    print(f"unreachable or deeper than {args.max_depth} ({len(deep)}): {[(r['page'], r['depth']) for r in deep]}")
    print(f"broken internal links ({len(broken)}): {broken}")
    depth_hist = Counter(r["depth"] for r in rows)
    print("depth histogram:", dict(sorted(depth_hist.items(), key=lambda kv: (kv[0] is None, kv[0]))))
    print("\nlowest inbound (body links) pages:")
    for r in sorted(rows, key=lambda r: (r["inbound_body"], r["pagerank"]))[:8]:
        print(f"  {r['page']:40s} inbound={r['inbound']:2d} body={r['inbound_body']:2d} depth={r['depth']} pr={r['pagerank']}")
    print("\ntop PageRank:")
    for r in sorted(rows, key=lambda r: -r["pagerank"])[:5]:
        print(f"  {r['page']:40s} pr={r['pagerank']} inbound={r['inbound']}")
    if args.gsc:
        print("\nhigh demand, few body links (impressions / (inbound_body+1)):")
        for r in sorted(rows, key=lambda r: -r["demand_per_link"])[:6]:
            print(f"  {r['page']:40s} impressions={r['impressions']:5d} inbound_body={r['inbound_body']} score={r['demand_per_link']}")
    print(f"\nwrote {args.out_dir}/pages.csv, broken_links.csv, orphans.csv")


if __name__ == "__main__":
    main()
