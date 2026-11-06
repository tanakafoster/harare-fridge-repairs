# gsc_opportunities — CTR gaps, striking distance, cannibalisation, decay from a GSC export

## Purpose
Turn a Search Console `date,page,query` export into five small, auditable tables that a
Claude Code skill (see `../claude_code_templates/`) can cite row by row:

| output | question it answers | formula / rule |
|---|---|---|
| `ctr_gap.csv` | which pages get impressions but few clicks for their position | `opportunity_score = (expected_ctr[bucket(position)] - ctr) * impressions`, kept when gap > 1 pt and position <= 20 |
| `striking.csv` | which queries sit just off page 1 with real demand | impression-weighted avg position in **4–20** and impressions >= `--min-impressions` |
| `cannibal.csv` | which queries are split across pages | >= 2 pages each holding >= 10% of the query's clicks (impressions when the query has < 20 clicks); `overlap_score = 1 - HHI(shares)` (0 = one page owns it, 0.5 = even two-way split) |
| `decay.csv` | which pages are losing traffic | latest 28 days vs prior 28 (drop >= 20%) and vs best rolling 28-day window (drop >= 30%); clicks when the prior/peak window had >= `--min-clicks`, otherwise impressions with `--min-impressions` as the guard |
| `by_template.csv` | which template (service/suburb/symptom/brand/home/other) carries the opportunity | sums of the above after regex-tagging the path |

Every table has a `sparse` boolean: rows under the volume guard are **labelled, not dropped**, so
Claude can say "noise" instead of inventing a trend. Rows marked sparse are hidden from the
console print but kept in the CSVs.

## Dependencies
Python 3.13, `pandas 3.0.5`, `numpy 2.5.3` (versions used for the test run). No network.

## Configuration
```
python3 -I gsc_opportunities.py INPUT [--out-dir out] [--min-impressions 100] [--min-clicks 20]
                                      [--ctr-table my_curve.csv] [--site-curve]
                                      [--cannibal-basis auto|clicks|impressions] [--top 10]
```
* `--min-impressions` (default 100): sparse guard for CTR-gap pages, striking-distance queries,
  cannibalised queries and the impression fallback in decay. Use ~50 for a 200-page local site
  with low volume, 500+ for larger sites.
* `--min-clicks` (default 20): a page needs this many clicks in its prior or peak window before a
  click-based decay flag is raised; below it the script retries on impressions.
* `--ctr-table`: CSV with `position,ctr` to replace the built-in table.
* `--site-curve`: derive the expected-CTR curve from the site's own queries (bucketed by rounded
  position, queries with >= `--min-impressions` impressions). Better once the site has volume;
  circular on very small sites (the curve is then made of the same pages it judges).

**Default expected-CTR table** (positions 1–10: 27%, 15%, 11%, 8%, 6.5%, 5%, 4%, 3.3%, 2.8%,
2.4%; beyond 10: 2.4% − 0.2 pt per position, floor 0.5%). It is a conservative blend of the
public curves found in the research (Suganthan's `EXPECTED_CTR`, Bruniaux's `CTR_BENCHMARKS`);
they are "industry averages" with no source dataset, so treat the *ranking* of pages as useful
and the absolute "extra clicks" figure as illustrative.

## Input
Either shape is accepted:
* CSV with header `date,page,query,clicks,impressions,ctr,position` (what `../gsc_fetch/fetch_search_analytics.py` writes);
* JSON from the API: `{"rows": [{"keys": ["2026-10-01", "https://site/page", "query"], "clicks": 1, "impressions": 20, "ctr": 0.05, "position": 7.2}, ...]}` (save with `.json`).

Pages may be full URLs or bare paths; the template tagger strips the origin.

## Output
Five CSVs in `--out-dir` plus a console summary (top N non-sparse rows per table).

## Template tagging
`tag_template(path)` uses regexes that mirror the user's route families:
`/generator-repairs-<suburb>` and `/generator-servicing-maintenance-<area>` -> `suburb`;
`/brands/<slug>` -> `brand`; `/generator-not-starting`, `/generator-black-smoke`, ... -> `symptom`;
`/generator-repairs`, `/diesel-generator-repairs`, `/load-bank-testing`, ... -> `service`; `/` -> `home`;
everything else -> `other`. Edit `TEMPLATE_RULES` for another site. A quick self-test of 13 paths passed.

## Synthetic data
`make_synthetic_gsc.py` writes a seeded 90-day export: 60 pages (1 home, 8 service, 25 suburb,
14 symptom, 7 brand, 5 other), 315 queries, 17,590 rows. Injected behaviours:
* `/generator-repairs`, `/generator-repairs-sandton`, `/generator-not-starting`: CTR multiplied by 0.35 (title/description problem);
* `generator service midrand`, `cummins generator not starting`, `generator repairs near me`: shared by 2–3 pages;
* `/generator-overheating`, `/generator-repairs-benoni`: impressions × 0.45 and position +6 in the last 28 days;
* 1–4 long-tail queries per page at ~0.3 impressions/day (noise);
* weekday/weekend and a 30-day sinusoidal demand wobble.

## How it was tested
```
cd /home/claude/reports/code/gsc_opportunities
python3 -I make_synthetic_gsc.py --out synthetic_gsc.csv --days 90 --seed 7
#   wrote synthetic_gsc.csv: 17590 rows, 60 pages, 315 queries, 2026-07-23..2026-10-20
python3 -I gsc_opportunities.py synthetic_gsc.csv --out-dir out --min-impressions 50 --top 5
```
Trimmed output (full copy in `run_output.txt`):
```
== ctr_gap: 16 rows (0 sparse) -> out/ctr_gap.csv
page                              template clicks impressions position ctr    expected_ctr gap    opportunity_score
.../generator-repairs             service  92     9435        7.81     0.0098 0.040        0.0302 285.4
.../diesel-generator-repairs      service  153    7882        7.96     0.0194 0.040        0.0206 162.3
.../generator-not-starting        symptom  61     4826        8.73     0.0126 0.033        0.0204 98.3
== striking: 138 rows (0 sparse)
generator repairs near me  80 clicks 5025 impressions position 6.11 top_page .../generator-repairs
generator repairs gauteng  137      4717             7.54               /
== cannibal: 2 rows (0 sparse)
generator service midrand        2 pages basis=clicks overlap 0.269 top .../generator-repairs-midrand 0.840 @6.22, second .../generator-servicing 0.160 @8.14
cummins generator not starting   2 pages basis=clicks overlap 0.185 top .../brands/cummins 0.897 @5.96, second .../generator-not-starting 0.103 @6.44
== decay: 10 rows (0 sparse)
.../generator-overheating     symptom clicks       latest 2   prior 26  peak 26  -92.3% / -92.3%  vs_prior+vs_peak
.../generator-repairs-benoni  suburb  impressions  latest 222 prior 542 peak 560 -59.0% / -60.4%  vs_prior+vs_peak
== by_template
service 3415 clicks 58296 impr pos 6.78 ctr 0.0586 7 pages, 3 ctr-gap pages (score 540), 1 decaying
symptom 1547        55575      9.58     0.0278 14 pages, 5 ctr-gap pages (329.9), 4 decaying
suburb   445        22604     12.18     0.0197 25 pages, 5 ctr-gap pages (88.9), 4 decaying
```
Checks performed:
* The three injected low-CTR pages appear in `ctr_gap.csv` (`/generator-repairs` first; `/generator-repairs-sandton` ranks 9th because its volume is smaller — the score is impression-weighted by design).
* Both injected decays are flagged; `/generator-repairs-benoni` only had 3 clicks in its prior window, so the click guard (20) failed and the impression fallback caught it (`basis=impressions`) — this fallback was added after the first run missed it.
* The injected cannibalisation `generator repairs near me` is **not** flagged on the default (clicks) basis because the top page takes 71 of 80 clicks and the others < 10%; with `--cannibal-basis impressions` it is flagged (3 pages, overlap 0.43). This is the intended behaviour: click share is what users experience, impression share shows where Google is still testing alternatives.
* The first version flagged pages 20% below their *peak* 28-day window, which on noisy data flagged healthy pages (a maximum over ~60 rolling windows is biased upward); the peak threshold was raised to 30% and the two-condition reason column added.
* `--min-impressions 500` marks 2 CTR-gap rows sparse and reduces striking-distance rows from 138 to 83 (guards work).
* JSON `rows` input shape parsed and analysed (2,000-row sample).
* `--site-curve` builds {1: 0.292, 2: 0.174, 3: 0.11, 4: 0.069, ...} from the synthetic site.

## Limitations
* GSC query-level rows are sampled/anonymised (the research notes record a 91.5K -> 35.1K click gap after excluding anonymised queries); page-level sums here will not match the GSC totals.
* The expected-CTR table is a heuristic, not a measured curve for this site or for South African local SERPs with map packs; use `--site-curve` once the site has volume, and treat scores as a ranking.
* Decay is measured on fixed calendar windows; it does not weekday-align or exclude the GSC 2–3-day lag. Pull data with `endDate` at least 3 days before today (the fetch script does this).
* The 2025-09 `num=100` change and the 2025-05-13..2026-04-27 impression-logging error make impression/position comparisons across those dates unreliable; clicks are the safer series (see research note 07).
* No seasonality model; a 28-day drop in a seasonal business (load-shedding demand) may be demand, not a ranking problem.
* Thresholds (10% share floor, 20%/30% drops, 4–20 striking band) are practitioner conventions, not validated constants.
