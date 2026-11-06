#!/usr/bin/env python3
"""Quality gate for location (suburb) pages based on a local evidence record.

Google's doorway-abuse policy covers "multiple pages aimed at specific regions or cities that funnel
users to one page" and pages that are "substantially similar"; the practitioner test is "swap/remove the
city name — does anything specific remain?" (research notes 05, 06, 08). This script makes that test
measurable per page and emits a recommendation. **All thresholds are heuristics** (no Google-confirmed
numbers exist); they are configurable and documented in README.md.

Inputs
  --records  JSON or YAML: list (or dict keyed by slug) of per-suburb evidence records with fields such as
             jobs_completed, landmarks[], testimonial_ids[], photo_ids[], technician_coverage,
             typical_response_minutes, notes. Unknown fields are ignored; a field counts as "present"
             when it is a non-empty list/string or a number > 0.
  --html-dir rendered HTML per suburb page, named <slug>.html (or <slug>/index.html).

Per page scores
  evidence_fields   number of evidence fields present (0..len(EVIDENCE_FIELDS))
  unique_ratio      with the suburb name masked out, the share of the page's non-template word shingles
                    (template = shingles on more than --boilerplate-share of pages) that occur on no other
                    page; a city-swapped page scores ~0 because its masked text matches its siblings
  template_share    share of all shingles that are template text (high = mostly boilerplate)
  specific_sentences  sentences in <main> that still contain a suburb-specific entity after the suburb
                    name itself is removed (entities = landmarks/areas from the record + a suburb-local
                    phrase list), as a count and a share of all sentences
  words             word count of <main>

Recommendation
  keep-index     evidence >= --min-evidence AND unique >= --min-unique AND specific >= --min-specific
  improve        close to the thresholds (within --grace of each) or exactly one criterion failing
  improve-first  otherwise: the page needs local evidence most urgently. Harare Fridge Repairs keeps every
                 page indexed (owner rule, Nov 2026), so the original "fold-into-hub" outcome is replaced by
                 a priority label for adding real local detail; never noindex, redirect or delete on this basis.

Example
  python3 -I location_page_gate.py --records fixtures/records.json --html-dir fixtures/pages --out gate.csv
"""
from __future__ import annotations

import argparse
import csv
import json
import re
import sys
from collections import Counter
from pathlib import Path

EVIDENCE_FIELDS = ["jobs_completed", "landmarks", "testimonial_ids", "photo_ids", "technician_coverage",
                   "typical_response_minutes", "notes", "local_faults"]
WORD_RE = re.compile(r"[a-z0-9']+")
SENT_RE = re.compile(r"(?<=[.!?])\s+")


def load_records(path: Path) -> dict[str, dict]:
    text = path.read_text()
    if path.suffix.lower() in (".yaml", ".yml"):
        import yaml  # PyYAML
        data = yaml.safe_load(text)
    else:
        data = json.loads(text)
    if isinstance(data, list):
        data = {r["slug"]: r for r in data}
    return data


def main_text(html: str) -> str:
    """Visible text of <main> (falls back to <body>) with tags removed."""
    m = re.search(r"<main\b[^>]*>([\s\S]*?)</main>", html, re.I) or re.search(r"<body\b[^>]*>([\s\S]*?)</body>", html, re.I)
    body = m.group(1) if m else html
    body = re.sub(r"<(script|style|nav|footer|header)\b[\s\S]*?</\1>", " ", body, flags=re.I)
    body = re.sub(r"<(p|li|h[1-6]|div|br|tr)\b[^>]*>", "\n", body, flags=re.I)
    text = re.sub(r"<[^>]+>", " ", body)
    text = re.sub(r"&amp;", "&", text).replace("&nbsp;", " ").replace("&#x27;", "'").replace("&#39;", "'")
    return re.sub(r"[ \t]+", " ", text)


def shingles(text: str, k: int) -> set[str]:
    words = WORD_RE.findall(text.lower())
    return {" ".join(words[i:i + k]) for i in range(max(0, len(words) - k + 1))}


def present(value) -> bool:
    if value is None:
        return False
    if isinstance(value, (list, dict, str)):
        return len(value) > 0
    if isinstance(value, (int, float)):
        return value > 0
    return bool(value)


def entity_terms(record: dict, slug: str) -> list[str]:
    terms = []
    for key in ("landmarks", "areas", "estates", "local_faults"):
        v = record.get(key) or []
        terms += [str(x) for x in (v if isinstance(v, list) else [v])]
    for key in ("technician_coverage", "notes"):
        v = record.get(key)
        if isinstance(v, str):
            terms += [w for w in re.findall(r"\b[A-Z][a-zA-Z]+(?: [A-Z][a-zA-Z]+)*\b", v) if len(w) > 3]
    return sorted({t.lower() for t in terms if t and t.lower() != slug.replace("-", " ")})


def specificity(text: str, suburb_name: str, terms: list[str]) -> tuple[int, int]:
    """Sentences that keep a suburb-specific entity after the suburb name is removed."""
    name_rx = re.compile(re.escape(suburb_name), re.I)
    sentences = [s.strip() for s in SENT_RE.split(re.sub(r"\n+", ". ", text)) if len(s.strip().split()) >= 4]
    hits = 0
    generic_local = ["minutes", "km", "response time", "jobs", "photo", "technician", "last month", "this year"]
    for s in sentences:
        stripped = name_rx.sub("", s).lower()
        if any(t in stripped for t in terms) or (re.search(r"\b\d+\b", stripped) and any(g in stripped for g in generic_local)):
            hits += 1
    return hits, len(sentences)


def evaluate(pages: dict[str, str], records: dict[str, dict], args) -> list[dict]:
    texts = {slug: main_text(html) for slug, html in pages.items()}
    names = {slug: (records.get(slug, {}).get("name") or slug.replace("-", " ").title()) for slug in pages}
    # mask the suburb name so "swap the city name" pages collapse onto each other
    masked = {slug: re.sub(re.escape(names[slug]), " suburb ", t, flags=re.I) for slug, t in texts.items()}
    sh = {slug: shingles(t, args.shingle) for slug, t in masked.items()}
    df = Counter(s for v in sh.values() for s in v)
    n = len(sh)
    template_cut = args.boilerplate_share * n  # df strictly greater than this = template
    rows = []
    for slug, text in texts.items():
        all_sh = sh[slug]
        own = {s for s in all_sh if df[s] <= template_cut}
        unique = {s for s in own if df[s] == 1}
        unique_ratio = len(unique) / len(own) if own else 0.0
        template_share = 1 - len(own) / len(all_sh) if all_sh else 1.0
        rec = records.get(slug, {})
        fields = [f for f in EVIDENCE_FIELDS if present(rec.get(f))]
        name = names[slug]
        hits, total = specificity(text, name, entity_terms(rec, slug))
        spec_share = hits / total if total else 0.0
        words = len(WORD_RE.findall(text.lower()))
        checks = {"evidence": len(fields) >= args.min_evidence, "unique": unique_ratio >= args.min_unique,
                  "specific": hits >= args.min_specific}
        near = {"evidence": len(fields) >= args.min_evidence - 1, "unique": unique_ratio >= args.min_unique - args.grace,
                "specific": hits >= max(1, args.min_specific - 2)}
        failing = [k for k, ok in checks.items() if not ok]
        if not failing and words >= args.min_words:
            rec_label = "keep-index"
        elif len(failing) <= 1 and all(near.values()) and words >= args.min_words * 0.6:
            rec_label = "improve"
        else:
            rec_label = "improve-first"
        rows.append({"slug": slug, "name": name, "words": words, "evidence_fields": len(fields), "evidence_present": ",".join(fields),
                     "unique_ratio": round(unique_ratio, 3), "template_share": round(template_share, 3), "own_shingles": len(own),
                     "specific_sentences": hits,
                     "sentences": total, "specific_share": round(spec_share, 3), "failing": ",".join(failing) or "-",
                     "recommendation": rec_label, "hub": rec.get("hub", "")})
    return rows


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--records", type=Path, required=True, help="JSON or YAML evidence records")
    ap.add_argument("--html-dir", type=Path, required=True, help="directory with <slug>.html or <slug>/index.html")
    ap.add_argument("--out", type=Path, default=Path("gate.csv"))
    ap.add_argument("--shingle", type=int, default=6, help="words per shingle (default 6, as in seo-duplication.mjs)")
    ap.add_argument("--boilerplate-share", type=float, default=0.5, help="shingles on >= this share of pages are template text (default 0.5)")
    ap.add_argument("--min-evidence", type=int, default=4, help="evidence fields needed for keep-index (default 4 of %d)" % len(EVIDENCE_FIELDS))
    ap.add_argument("--min-unique", type=float, default=0.5, help="unique shingle ratio needed (default 0.5)")
    ap.add_argument("--min-specific", type=int, default=4, help="sentences with suburb-specific entities needed (default 4)")
    ap.add_argument("--min-words", type=int, default=300, help="minimum <main> word count (default 300)")
    ap.add_argument("--grace", type=float, default=0.15, help="unique-ratio slack for 'improve' (default 0.15)")
    ap.add_argument("--fail-on-fold", action="store_true", help="exit 1 when any page is improve-first (only for new pages in CI)")
    ap.add_argument("--only-records", action="store_true", help="score only pages that have an evidence record (skips hub pages)")
    args = ap.parse_args()

    records = load_records(args.records)
    pages: dict[str, str] = {}
    for p in sorted(args.html_dir.rglob("*.html")):
        slug = p.parent.name if p.name == "index.html" else p.stem
        slug = re.sub(r"^(generator|fridge)-repairs-", "", slug)
        if args.only_records and slug not in records:
            continue  # hubs and region pages are not suburb pages
        pages[slug] = p.read_text(encoding="utf-8", errors="replace")
    if not pages:
        sys.exit(f"no html files under {args.html_dir}")
    missing = sorted(set(pages) - set(records))
    if missing:
        print(f"warning: {len(missing)} page(s) have no evidence record: {missing}", file=sys.stderr)
    rows = evaluate(pages, records, args)
    with args.out.open("w", newline="") as fh:
        w = csv.DictWriter(fh, fieldnames=list(rows[0].keys()))
        w.writeheader()
        w.writerows(rows)
    print(f"thresholds: evidence>={args.min_evidence} unique>={args.min_unique} specific>={args.min_specific} words>={args.min_words} (heuristics)")
    print(f"{'slug':16s} {'words':>5s} {'evid':>4s} {'uniq':>5s} {'tmpl':>5s} {'spec':>9s} {'failing':18s} recommendation")
    for r in rows:
        print(f"{r['slug']:16s} {r['words']:5d} {r['evidence_fields']:4d} {r['unique_ratio']:5.2f} {r['template_share']:5.2f} "
              f"{r['specific_sentences']:3d}/{r['sentences']:<5d} {r['failing']:18s} {r['recommendation']}")
    summary = Counter(r["recommendation"] for r in rows)
    print("summary:", dict(summary), f"-> {args.out}")
    if args.fail_on_fold and summary.get("improve-first"):
        sys.exit(1)


if __name__ == "__main__":
    main()
