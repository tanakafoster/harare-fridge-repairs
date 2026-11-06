#!/usr/bin/env python3
"""Pull Search Console Search Analytics rows one day at a time into a CSV.

Follows Google's "query all your search traffic" guidance (research note 04, line 20):
``startDate == endDate`` for each day, ``rowLimit=25000``, ``startRow`` stepped by
25,000 until a response returns 0 rows, repeated per search ``type``. Dimensions default to
``date,page,query`` so the output feeds ``../gsc_opportunities/gsc_opportunities.py``.

Why per day: the API caps each day at 50K rows per search type and sorts by clicks, so a
multi-day range silently drops the long tail; daily pulls keep the most rows.

Output CSV columns: ``date,page,query,clicks,impressions,ctr,position`` (plus any extra
dimension in key order). Days already present in the output file are skipped unless
``--overwrite``; rows are de-duplicated on the key tuple because pages are "sorted
independently, so pages can overlap or skip rows" across ``startRow`` calls.

Examples::

    # real run (service account added as a user on the property)
    python3 -I fetch_search_analytics.py --site sc-domain:example.co.za --days 90 \
        --service-account sa.json --out gsc_90d.csv

    # no credentials: exercise the paging logic with the fake client
    python3 -I fetch_search_analytics.py --site sc-domain:example.co.za --days 3 --dry-run --out /tmp/x.csv
"""
from __future__ import annotations

import argparse
import csv
import datetime as dt
import sys
import time
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))  # sibling imports under python3 -I

ROW_LIMIT = 25_000
API_LAG_DAYS = 3  # "Data is typically available after 2-3 days"


def day_range(end: dt.date, days: int) -> list[dt.date]:
    return [end - dt.timedelta(days=i) for i in range(days)][::-1]


def fetch_day(service, site: str, day: dt.date, dimensions: list[str], search_type: str,
              data_state: str, sleep: float = 0.0, max_retries: int = 3) -> list[dict]:
    """Return all rows for one day, paging with startRow until an empty page."""
    rows: list[dict] = []
    start_row = 0
    while True:
        body = {"startDate": day.isoformat(), "endDate": day.isoformat(), "dimensions": dimensions,
                "type": search_type, "rowLimit": ROW_LIMIT, "startRow": start_row, "dataState": data_state}
        for attempt in range(max_retries):
            try:
                resp = service.searchanalytics().query(siteUrl=site, body=body).execute()
                break
            except Exception as exc:  # googleapiclient.errors.HttpError or transport errors
                if attempt == max_retries - 1:
                    raise
                wait = 2 ** attempt
                print(f"  {day} startRow={start_row}: {exc!r}; retry in {wait}s", file=sys.stderr)
                time.sleep(wait)
        page = resp.get("rows", [])
        rows.extend(page)
        if "metadata" in resp and resp["metadata"].get("first_incomplete_date"):
            print(f"  note: {day} includes fresh/incomplete data (first_incomplete_date={resp['metadata']['first_incomplete_date']})",
                  file=sys.stderr)
        if len(page) == 0:
            break
        start_row += ROW_LIMIT
        if sleep:
            time.sleep(sleep)
    return rows


def rows_to_records(rows: list[dict], dimensions: list[str]) -> list[dict]:
    seen: set[tuple] = set()
    out = []
    for r in rows:
        key = tuple(r["keys"])
        if key in seen:
            continue
        seen.add(key)
        rec = dict(zip(dimensions, r["keys"]))
        rec.update({"clicks": r.get("clicks", 0), "impressions": r.get("impressions", 0),
                    "ctr": r.get("ctr", 0.0), "position": r.get("position", 0.0)})
        out.append(rec)
    return out


def existing_days(path: Path) -> set[str]:
    if not path.exists():
        return set()
    with path.open(newline="") as fh:
        return {row["date"] for row in csv.DictReader(fh) if "date" in row}


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--site", required=True, help="property, e.g. sc-domain:example.co.za or https://www.example.co.za/")
    ap.add_argument("--days", type=int, default=90)
    ap.add_argument("--end", help="last day to fetch (YYYY-MM-DD); default today minus %d days" % API_LAG_DAYS)
    ap.add_argument("--dimensions", default="date,page,query")
    ap.add_argument("--type", default="web", choices=["web", "image", "video", "news", "discover", "googleNews"])
    ap.add_argument("--data-state", default="final", choices=["final", "all"],
                    help="'all' includes fresh (partial) days; 'final' lags 2-3 days but is stable")
    ap.add_argument("--out", type=Path, default=Path("gsc_search_analytics.csv"))
    ap.add_argument("--overwrite", action="store_true", help="re-fetch days already present in --out")
    ap.add_argument("--sleep", type=float, default=0.0, help="seconds between page requests (quota: 1,200 QPM per site)")
    ap.add_argument("--service-account", help="service-account JSON path")
    ap.add_argument("--oauth-client", help="OAuth client_secrets.json (installed app) path")
    ap.add_argument("--token-file", default="gsc_token.json")
    ap.add_argument("--dry-run", action="store_true", help="use the fake client; no network, no credentials")
    args = ap.parse_args()

    dimensions = [d.strip() for d in args.dimensions.split(",") if d.strip()]
    if "date" not in dimensions:
        sys.exit("--dimensions must include 'date' so the CSV can be resumed per day")
    end = dt.date.fromisoformat(args.end) if args.end else dt.date.today() - dt.timedelta(days=API_LAG_DAYS)
    days = day_range(end, args.days)

    if args.dry_run:
        from fake_gsc import FakeSearchAnalytics
        service = FakeSearchAnalytics(rows_per_day=37)
    else:
        from gsc_auth import build_service, load_credentials
        service = build_service("webmasters", "v3", load_credentials(args.service_account, args.oauth_client, args.token_file))

    done = set() if args.overwrite else existing_days(args.out)
    if args.overwrite and args.out.exists():
        args.out.unlink()
    fieldnames = dimensions + ["clicks", "impressions", "ctr", "position"]
    new_file = not args.out.exists()
    total = 0
    with args.out.open("a", newline="") as fh:
        writer = csv.DictWriter(fh, fieldnames=fieldnames)
        if new_file:
            writer.writeheader()
        for day in days:
            if day.isoformat() in done:
                print(f"{day}: already fetched, skipping")
                continue
            rows = fetch_day(service, args.site, day, dimensions, args.type, args.data_state, args.sleep)
            records = rows_to_records(rows, dimensions)
            writer.writerows(records)
            fh.flush()
            total += len(records)
            print(f"{day}: {len(records)} rows ({len(rows)} raw)")
    print(f"done: {total} new rows -> {args.out}")


if __name__ == "__main__":
    main()
