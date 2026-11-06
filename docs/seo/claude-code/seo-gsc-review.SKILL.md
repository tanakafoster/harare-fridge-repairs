---
name: seo-gsc-review
description: Run the GSC opportunity analysis on the latest Search Console export and produce a prioritised, evidence-cited SEO action list (CTR gaps, striking distance, cannibalisation, decay) for this local-service site. Use when asked for an SEO review, what to work on next, or to interpret Search Console data.
disable-model-invocation: true
allowed-tools: Bash(python3 ${CLAUDE_PROJECT_DIR}/tools/gsc_opportunities/*), Read, Glob, Grep
---

# SEO review from Search Console data

## Inputs
- `$ARGUMENTS`: optional path to the GSC CSV (`date,page,query,clicks,impressions,ctr,position`).
  Default: the newest file matching `data/gsc/gsc_*.csv`. If no file exists, stop and say that a
  `tools/gsc_fetch/fetch_search_analytics.py` run (or a manual export) is needed. Do not proceed on memory.

## Steps
1. Run the analysis (never re-implement it inline):
   `python3 ${CLAUDE_PROJECT_DIR}/tools/gsc_opportunities/gsc_opportunities.py <csv> --out-dir data/gsc/analysis --min-impressions 50 --top 15`
2. Read the five CSVs it writes (`ctr_gap.csv`, `striking.csv`, `cannibal.csv`, `decay.csv`, `by_template.csv`).
3. Build the action list below. Every item must quote the row it comes from.

## Evidence rules (non-negotiable)
- Every number in the output is copied from a CSV row or the script's console output; cite as
  `(ctr_gap.csv: /fridge-regassing, <impressions>, <CTR>, <position>)`. No rounding beyond what the script prints.
- Rows flagged `sparse=True` are reported in a separate "Noise (sparse data, no action)" list, never as findings.
- Do not infer causes (algorithm updates, competitors, seasonality) unless a dated source is in the repo
  (`docs/seo/changelog.md`) — say "cause unknown" otherwise.
- Do not invent expected gains. You may report the script's `opportunity_score` and call it "illustrative".
- If the CSV window ends more than 5 days before today, say the data may be incomplete (GSC lag) and that
  impressions/position straddling 2025-09-10 or 2026-04-27 are not comparable.
- Never recommend removing, noindexing, redirecting or merging an existing page (owner rule). For weak pages, recommend improvements.
- New suburb pages need a record in `data/area-evidence.json` first.

## Output format
```
# SEO review — <csv file>, <date range>, <rows> rows
## Top actions (ranked by opportunity_score, then impressions)
1. <page or query> — <what to change: title/description rewrite, consolidate to X, refresh section Y>
   evidence: <csv:row quote>   template: <service|suburb|region|symptom|brand|guide|other>
...
## Cannibalisation
## Decay (clicks, latest 28 d vs prior 28 d and vs peak)
## By template (one line each)
## Noise (sparse data, no action)
## Data caveats
```
Keep it under 60 lines. Hand the list to the `seo-evidence-reviewer` subagent before anyone acts on it.
