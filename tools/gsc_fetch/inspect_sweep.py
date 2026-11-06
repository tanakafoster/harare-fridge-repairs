#!/usr/bin/env python3
"""Run a URL Inspection API sweep over a sitemap and diff it against the previous sweep.

For every URL in a sitemap (or sitemap index; nested indexes are followed) the script calls
``urlInspection.index.inspect`` and stores one row per URL with the index-status fields:
``verdict, coverageState, indexingState, robotsTxtState, pageFetchState, googleCanonical,
userCanonical, lastCrawlTime, crawledAs, referringUrls, sitemap`` (field names and enums from the
``UrlInspectionResult`` reference, research note 10 section 9; ``coverageState`` is free text, so the
diff keys on the enums ``verdict``/``indexingState`` too). It then compares the new sweep to the previous
one (``--previous``, or the newest file matching ``--out-dir/inspection_*.csv``) and prints
every URL whose verdict / coverage / canonical / indexing state changed, plus URLs that
were added or removed from the sitemap.

Quota handling (Search Console API limits page, recorded in research note 04 line 21):
URL Inspection is 2,000 calls per day and 600 per minute per property. The sweep refuses
to start more than ``--daily-budget`` (default 2,000) inspections and paces requests to
``--per-minute`` (default 500, under the 600 cap) with a token bucket.

Scope: ``https://www.googleapis.com/auth/webmasters.readonly`` is sufficient for
``index.inspect`` (the method page lists both ``webmasters`` and ``webmasters.readonly``;
research note 03 line 88 / note 08 line 255). There is no live test via the API.

Examples::

    python3 -I inspect_sweep.py --site https://www.example.co.za/ --sitemap https://www.example.co.za/sitemap.xml \
        --service-account sa.json --out-dir sweeps
    python3 -I inspect_sweep.py --site https://www.example.co.za/ --urls urls.txt --dry-run --out-dir /tmp/sweeps
"""
from __future__ import annotations

import argparse
import csv
import datetime as dt
import re
import sys
import time
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))  # sibling imports under python3 -I

FIELDS = ["url", "inspected_at", "verdict", "coverageState", "indexingState", "robotsTxtState",
          "pageFetchState", "googleCanonical", "userCanonical", "lastCrawlTime", "crawledAs", "referringUrls", "sitemap", "error"]
LIST_FIELDS = {"referringUrls", "sitemap"}  # joined with " | " in the CSV
DIFF_FIELDS = ["verdict", "coverageState", "indexingState", "googleCanonical", "userCanonical", "robotsTxtState", "pageFetchState"]


def fetch_text(url: str) -> str:
    import urllib.request
    with urllib.request.urlopen(url, timeout=30) as resp:  # noqa: S310 (sitemap URL supplied by the operator)
        return resp.read().decode("utf-8", "replace")


def sitemap_urls(xml_text: str, loader=fetch_text, depth: int = 0) -> list[str]:
    """Return page URLs from a sitemap or sitemap index (regex parse; follows nested indexes)."""
    locs = re.findall(r"<loc>\s*([^<\s]+)\s*</loc>", xml_text)
    if "<sitemapindex" in xml_text and depth < 3:
        urls: list[str] = []
        for child in locs:
            urls.extend(sitemap_urls(loader(child), loader, depth + 1))
        return urls
    return locs


class Pacer:
    """Token bucket: at most ``per_minute`` calls in any 60-second window."""

    def __init__(self, per_minute: int, clock=time.monotonic, sleeper=time.sleep):
        self.per_minute, self.clock, self.sleeper = per_minute, clock, sleeper
        self.stamps: list[float] = []

    def wait(self) -> None:
        now = self.clock()
        self.stamps = [t for t in self.stamps if now - t < 60]
        if len(self.stamps) >= self.per_minute:
            self.sleeper(60 - (now - self.stamps[0]) + 0.01)
            now = self.clock()
            self.stamps = [t for t in self.stamps if now - t < 60]
        self.stamps.append(now)


def inspect_one(service, site: str, url: str) -> dict:
    try:
        resp = service.urlInspection().index().inspect(body={"inspectionUrl": url, "siteUrl": site}).execute()
        idx = resp.get("inspectionResult", {}).get("indexStatusResult", {})
        row = {k: idx.get(k, "") for k in FIELDS if k not in ("url", "inspected_at", "error")}
        for k in LIST_FIELDS:
            row[k] = " | ".join(row[k]) if isinstance(row[k], list) else row[k]
        row["error"] = ""
    except Exception as exc:  # HttpError (403 quota, 400 not in property) or transport
        row = {k: "" for k in FIELDS}
        row["error"] = repr(exc)[:200]
    row["url"] = url
    row["inspected_at"] = dt.datetime.now(dt.timezone.utc).isoformat(timespec="seconds")
    return row


def sweep(service, site: str, urls: list[str], pacer: Pacer, log=print) -> list[dict]:
    rows = []
    for i, url in enumerate(urls, 1):
        pacer.wait()
        row = inspect_one(service, site, url)
        rows.append(row)
        if i % 50 == 0 or i == len(urls):
            log(f"  inspected {i}/{len(urls)}")
    return rows


def load_sweep(path: Path) -> dict[str, dict]:
    with path.open(newline="") as fh:
        return {r["url"]: r for r in csv.DictReader(fh)}


def diff_sweeps(prev: dict[str, dict], cur: dict[str, dict]) -> list[dict]:
    """Return change records: added/removed URLs and per-field transitions."""
    changes = []
    for url in sorted(set(prev) | set(cur)):
        if url not in prev:
            changes.append({"url": url, "change": "added", "field": "", "before": "", "after": cur[url].get("verdict", "")})
            continue
        if url not in cur:
            changes.append({"url": url, "change": "removed", "field": "", "before": prev[url].get("verdict", ""), "after": ""})
            continue
        if cur[url].get("error"):
            changes.append({"url": url, "change": "error", "field": "error", "before": "", "after": cur[url]["error"]})
            continue
        for f in DIFF_FIELDS:
            b, a = prev[url].get(f, ""), cur[url].get(f, "")
            if b != a:
                changes.append({"url": url, "change": "changed", "field": f, "before": b, "after": a})
    return changes


def summarise(rows: list[dict]) -> dict[str, int]:
    out: dict[str, int] = {}
    for r in rows:
        key = r["verdict"] or "ERROR"
        if r["coverageState"]:
            key += " / " + r["coverageState"]
        out[key] = out.get(key, 0) + 1
    canon_mismatch = sum(1 for r in rows if r["googleCanonical"] and r["userCanonical"] and r["googleCanonical"] != r["userCanonical"])
    out["google canonical != user canonical"] = canon_mismatch
    return out


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--site", required=True, help="property exactly as in Search Console: https://www.example.co.za/ or sc-domain:example.co.za")
    src = ap.add_mutually_exclusive_group(required=True)
    src.add_argument("--sitemap", help="sitemap or sitemap index URL")
    src.add_argument("--urls", type=Path, help="text file, one URL per line")
    ap.add_argument("--out-dir", type=Path, default=Path("sweeps"))
    ap.add_argument("--previous", type=Path, help="previous sweep CSV to diff against (default: newest in --out-dir)")
    ap.add_argument("--daily-budget", type=int, default=2000, help="refuse to inspect more URLs than this (API quota 2,000/day)")
    ap.add_argument("--per-minute", type=int, default=500, help="pace requests under the 600/min quota")
    ap.add_argument("--service-account")
    ap.add_argument("--oauth-client")
    ap.add_argument("--token-file", default="gsc_token.json")
    ap.add_argument("--dry-run", action="store_true", help="fake client; no network, no credentials")
    args = ap.parse_args()

    if args.urls:
        urls = [u.strip() for u in args.urls.read_text().splitlines() if u.strip() and not u.startswith("#")]
    elif args.dry_run:
        urls = [f"{args.site.rstrip('/')}/page-{i}" for i in range(12)]
        print(f"dry run: --sitemap ignored, using {len(urls)} synthetic URLs")
    else:
        urls = sitemap_urls(fetch_text(args.sitemap))
    urls = list(dict.fromkeys(urls))
    if len(urls) > args.daily_budget:
        sys.exit(f"{len(urls)} URLs exceed --daily-budget {args.daily_budget}; split the list across days")

    if args.dry_run:
        from fake_gsc import FakeUrlInspection
        # first dry run: one URL not indexed; later dry runs: it recovers and another URL's canonical moves,
        # so the diff output has something to show
        first = not list(args.out_dir.glob("inspection_*.csv"))
        verdicts = ({urls[1]: {"verdict": "NEUTRAL", "coverageState": "Crawled - currently not indexed"}} if first
                    else {urls[2]: {"googleCanonical": urls[0], "coverageState": "Duplicate, Google chose different canonical than user"}})
        service = FakeUrlInspection(verdicts)
        pacer = Pacer(args.per_minute, sleeper=lambda s: None)
    else:
        from gsc_auth import build_service, load_credentials
        service = build_service("searchconsole", "v1", load_credentials(args.service_account, args.oauth_client, args.token_file))
        pacer = Pacer(args.per_minute)

    args.out_dir.mkdir(parents=True, exist_ok=True)
    previous = args.previous or max(args.out_dir.glob("inspection_*.csv"), default=None)
    print(f"inspecting {len(urls)} URLs on {args.site} (budget {args.daily_budget}/day, {args.per_minute}/min)")
    rows = sweep(service, args.site, urls, pacer)
    out = args.out_dir / f"inspection_{dt.datetime.now(dt.timezone.utc):%Y%m%dT%H%M%SZ}.csv"
    with out.open("w", newline="") as fh:
        w = csv.DictWriter(fh, fieldnames=FIELDS)
        w.writeheader()
        w.writerows(rows)
    print(f"wrote {out}")
    for k, v in sorted(summarise(rows).items()):
        print(f"  {v:5d}  {k}")
    if previous and previous != out:
        changes = diff_sweeps(load_sweep(previous), {r["url"]: r for r in rows})
        print(f"\nchanges vs {previous.name}: {len(changes)}")
        for c in changes:
            print(f"  {c['change']:8s} {c['url']}  {c['field']}: {c['before']!r} -> {c['after']!r}")
        diff_path = out.with_name(out.stem + "_diff.csv")
        with diff_path.open("w", newline="") as fh:
            w = csv.DictWriter(fh, fieldnames=["url", "change", "field", "before", "after"])
            w.writeheader()
            w.writerows(changes)
    else:
        print("no previous sweep to diff against")


if __name__ == "__main__":
    main()
