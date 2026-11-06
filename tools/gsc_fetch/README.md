# gsc_fetch — Search Analytics day-by-day export and URL Inspection sweep

## Purpose
Two credential-gated scripts that give the rest of the toolkit its data:

1. `fetch_search_analytics.py` pulls `date,page,query` rows **one day at a time** with
   `rowLimit=25000` and `startRow` paging (Google's "query all your search traffic" recipe), de-duplicates
   overlapping pages, resumes per day, and writes the CSV shape that `../gsc_opportunities/` and
   `../experiment_measure/` read.
2. `inspect_sweep.py` runs the URL Inspection API over every URL in a sitemap (indexes followed), stores
   the index-status fields per URL, and diffs against the previous sweep — the only programmatic
   "indexing monitor" for a 223-URL site (the Page indexing report has no API; the Sitemaps API `indexed`
   count is deprecated).

`gsc_auth.py` holds the credential/discovery helpers; `fake_gsc.py` is the in-memory client used by
`--dry-run` and the unit tests.

## Dependencies
* Runtime for real pulls: `google-api-python-client`, `google-auth`, and (OAuth only) `google-auth-oauthlib`.
  **None of these could be installed in this sandbox** (PyPI was unreachable: `pip install` returned
  "Failed to resolve 'pypi.org'"), so the Google code paths are import-lazy and untested here; the paging,
  pacing and diff logic is tested against the fake client. Install with
  `pip install google-api-python-client google-auth google-auth-oauthlib` before a real run.
* Tests and dry runs: Python 3.13 standard library only.

## Configuration / auth
* Service account (recommended for cron): create a service account, download its JSON key, **add its
  e-mail as a user on the Search Console property**, then pass `--service-account key.json` or set
  `GOOGLE_APPLICATION_CREDENTIALS`.
* OAuth installed-app: `--oauth-client client_secrets.json`; the first run opens a browser and caches the
  token in `--token-file` (default `gsc_token.json`).
* **Scope**: both scripts request only `https://www.googleapis.com/auth/webmasters.readonly`. The research
  notes record that the `searchAnalytics.query` method page lists scopes `webmasters.readonly` or `webmasters`
  (note 04, line 17) and that the `urlInspection.index.inspect` method page likewise lists "`webmasters` or
  `webmasters.readonly`" (note 03 line 88; note 08 line 255). So URL Inspection does **not** require the full
  scope; the full scope is only for write methods (sitemap submit/delete, site add/delete), which these
  scripts never call.
* Never commit key files; `.gitignore` `*.json` keys and the token file.

### `fetch_search_analytics.py`
```
--site sc-domain:example.co.za | https://www.example.co.za/
--days 90            --end YYYY-MM-DD (default today-3: "data is typically available after 2-3 days")
--dimensions date,page,query   --type web   --data-state final|all
--out gsc_search_analytics.csv --overwrite  --sleep 0.0
```
`--data-state all` includes fresh days; the script prints a note when the response carries
`metadata.first_incomplete_date`. The Search Analytics quota is 1,200 QPM per site; a 90-day pull at 1–3
requests per day is ~200 requests, so `--sleep` is normally unnecessary.

### `inspect_sweep.py`
```
--site https://www.example.co.za/ (URL-prefix property needs the trailing slash; or sc-domain:example.co.za)
--sitemap URL | --urls file.txt   --out-dir sweeps   --previous older.csv
--daily-budget 2000   --per-minute 500
```
Quota facts used (Search Console API limits page via note 04 line 21): URL Inspection **2,000 QPD and 600 QPM
per site**. The script refuses lists longer than `--daily-budget` and paces calls with a 60-second token bucket
at `--per-minute` (default 500 to leave headroom). 223 URLs therefore take under a minute and ~11% of the daily quota.

## Input / output
* Search analytics: writes `date,page,query,clicks,impressions,ctr,position`; existing days in `--out` are
  skipped so a daily cron can append.
* Sweep: writes `sweeps/inspection_<UTC timestamp>.csv` with columns
  `url,inspected_at,verdict,coverageState,indexingState,robotsTxtState,pageFetchState,googleCanonical,userCanonical,lastCrawlTime,crawledAs,referringUrls,sitemap,error`
  (list fields joined with ` | `)
  and, when a previous sweep exists, `..._diff.csv` with `url,change(added|removed|changed|error),field,before,after`.
  The console summary counts `verdict / coverageState` combinations and URLs where Google's canonical differs
  from the declared one.

## How it was tested
```
cd /home/claude/reports/code/gsc_fetch
python3 -I test_gsc_fetch.py -v            # 11 tests, OK (0.23 s)
python3 -I fetch_search_analytics.py --site sc-domain:example.co.za --days 3 --end 2026-10-20 --dry-run --out /tmp/.../x.csv
#   2026-10-18: 37 rows (37 raw) ... done: 111 new rows
python3 -I fetch_search_analytics.py --site sc-domain:example.co.za --days 4 --end 2026-10-21 --dry-run --out /tmp/.../x.csv
#   2026-10-20: already fetched, skipping / 2026-10-21: 37 rows -> resume works
python3 -I inspect_sweep.py --site https://www.example.co.za/ --sitemap https://www.example.co.za/sitemap.xml --dry-run --out-dir /tmp/.../sweeps
#   1 NEUTRAL / Crawled - currently not indexed, 11 PASS / Submitted and indexed, no previous sweep
python3 -I inspect_sweep.py ... --dry-run --out-dir /tmp/.../sweeps      # second run
#   changes vs inspection_...Z.csv: 4
#   changed  .../page-1  verdict: 'NEUTRAL' -> 'PASS'
#   changed  .../page-2  googleCanonical: '.../page-2' -> '.../page-0'
```
What the unit tests cover: single-page day (2 requests: 37 rows then 0), a day with exactly 50,000 rows (3
requests, the empty third one is what ends the loop), 30,001 rows (3 requests), retry-then-raise on API
errors, key de-duplication, chronological day order, sitemap-index recursion, the token-bucket pacer sleeping
on the 4th call in a 3/min bucket, diff transitions (verdict change, canonical change, added, removed, error),
sweep summary counts, and that `gsc_auth` imports without the Google libraries installed.

## Limitations
* Not run against the real API (no credentials, no PyPI). The `indexStatusResult` field names
  (`verdict`, `coverageState`, `robotsTxtState`, `indexingState`, `lastCrawlTime`, `pageFetchState`,
  `googleCanonical`, `userCanonical`, `crawledAs`, `referringUrls[]`, `sitemap[]`) match the `UrlInspectionResult`
  reference as recorded in research note 10 section 9 (enums: Verdict `PASS|PARTIAL|FAIL|NEUTRAL`, IndexingState
  `INDEXING_ALLOWED|BLOCKED_BY_META_TAG|BLOCKED_BY_HTTP_HEADER|...`, PageFetchState `SUCCESSFUL|SOFT_404|NOT_FOUND|...`).
  `coverageState` is free text, so alerting should key on the enums. The script stores `""` for any missing field.
* The Search Analytics API returns "top rows, bounded by internal limits" and drops anonymised queries; the
  CSV will not reconcile with the GSC UI totals. For complete data the BigQuery bulk export is the documented path.
* `--data-state all` rows for the last 2–3 days change on later pulls; use `--overwrite` for those days or stick
  to `final`.
* The URL Inspection API reports the **indexed** version only (no live test), `googleCanonical` can lag by hours,
  and `lastCrawlTime` is the only crawl-activity signal available without log drains.
* OAuth flow opens a local browser (`run_local_server`), which does not work on a headless CI runner; use a
  service account there.
