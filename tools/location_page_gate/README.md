# location_page_gate — "local evidence record" quality gate for suburb pages

## Purpose
Decide, per suburb page, whether it earns an index slot: **keep-index**, **improve**, or **fold-into-hub**
(noindex and link/redirect to the regional hub). It operationalises the doorway tests found in the research
(Google's "substantially similar pages aimed at specific regions"; the practitioner "swap/remove the city name"
test; the "required evidence record per suburb" rule proposed in note 05 line 284) with three measurable
signals plus a word count:

| signal | how it is computed |
|---|---|
| `evidence_fields` | count of non-empty fields in the suburb's evidence record among `jobs_completed, landmarks, testimonial_ids, photo_ids, technician_coverage, typical_response_minutes, notes, local_faults` |
| `unique_ratio` | the suburb name is masked to `suburb` in every page's `<main>` text; 6-word shingles are built; shingles present on more than `--boilerplate-share` (50%) of pages are template text and dropped; `unique_ratio` = share of the remaining shingles found on **no** other page. A city-swapped page collapses onto its siblings and scores ~0. (Original implementation of the shingle/Jaccard idea in the user's `seo-duplication.mjs`, not a copy.) |
| `template_share` | share of all shingles that are template text (informational) |
| `specific_sentences` | the "remove the suburb name" test: sentences in `<main>` that still contain a suburb-specific entity after the suburb name is deleted. Entities = `landmarks`, `areas`, `estates`, `local_faults` from the record plus capitalised phrases in `technician_coverage`/`notes`; a sentence with a number next to minutes/km/jobs/photos/technician also counts |
| `words` | word count of `<main>` |

Recommendation rule (defaults; **all heuristics**, see Limitations):
* `keep-index`: evidence >= 4, unique_ratio >= 0.5, specific_sentences >= 4, words >= 300
* `improve`: at most one criterion failing and every criterion within its grace band (evidence >= 3,
  unique >= 0.35, specific >= 2, words >= 180)
* `fold-into-hub`: otherwise. `--fail-on-fold` exits 1 for CI.

## Dependencies
Python 3.13 standard library; `PyYAML 6.0.3` only when records are given as YAML.

## Configuration
```
python3 -I location_page_gate.py --records records.json|yaml --html-dir DIR [--out gate.csv]
    [--shingle 6] [--boilerplate-share 0.5] [--min-evidence 4] [--min-unique 0.5]
    [--min-specific 4] [--min-words 300] [--grace 0.15] [--fail-on-fold]
```
Defaults were chosen so that a page with a real record and two or three suburb-specific paragraphs passes and a
template-with-name-swapped page fails; the 300-word floor echoes the "300+ unique words" practitioner minimum
(note 06 line 185) and the 0.5 unique ratio is below the ">60–70% unique" figure that the research explicitly labels
"industry consensus, no Google-confirmed threshold" (note 05 line 66). Tune on a sample reviewed by a human.

## Input
* Records: JSON list/dict or YAML, one record per slug:
  ```json
  {"slug": "kyalami", "name": "Kyalami", "hub": "/generator-repairs-midrand", "jobs_completed": 23,
   "landmarks": ["Kyalami Business Park", "Beaulieu"], "testimonial_ids": ["t-2026-031"], "photo_ids": ["img-38"],
   "technician_coverage": "Midrand workshop, 2 technicians", "typical_response_minutes": 45,
   "notes": "...", "local_faults": ["controller", "battery"]}
  ```
* HTML: rendered pages named `<slug>.html`, `generator-repairs-<slug>.html` or `<slug>/index.html`
  (so `.next/server/app/generator-repairs-*.html` works directly). Text is taken from `<main>`.

## Output
`gate.csv` with `slug,name,words,evidence_fields,evidence_present,unique_ratio,template_share,own_shingles,specific_sentences,sentences,specific_share,failing,recommendation,hub` and a console table.

## How it was tested
```
cd /home/claude/reports/code/location_page_gate
python3 -I make_fixtures.py --out fixtures        # 5 pages sharing one template: kyalami + boksburg rich, bromhof + chancliff thin, edenvale middling
python3 -I location_page_gate.py --records fixtures/records.json --html-dir fixtures/pages --out gate.csv
```
```
thresholds: evidence>=4 unique>=0.5 specific>=4 words>=300 (heuristics)
slug             words evid  uniq  tmpl      spec failing                  recommendation
boksburg           357    8  0.98  0.36   8/26    -                        keep-index
bromhof            176    0  0.00  0.74   0/20    evidence,unique,specific fold-into-hub
chancliff          176    1  0.00  0.74   0/20    evidence,unique,specific fold-into-hub
edenvale           235    5  0.98  0.55   2/23    specific                 improve
kyalami            378    8  0.99  0.34   9/26    -                        keep-index
summary: {'keep-index': 2, 'fold-into-hub': 2, 'improve': 1}
```
* YAML records produce the same result (`--records fixtures/records.yaml`).
* `--fail-on-fold` exits 1 (two fold pages); `--min-specific 2 --min-words 200` promotes edenvale to keep-index
  (thresholds are live).
* Bug found in testing: the first version computed uniqueness **without masking the suburb name**, so the two
  name-swapped pages scored 1.00 unique (every shingle containing "Bromhof" was unique). Masking the name fixed it
  (they now score 0.00), which is exactly the city-swap failure the gate is meant to catch.

## Limitations
* Thresholds are heuristics; nothing in the research validates any uniqueness ratio or evidence count against
  rankings, and Google's doorway policy page "gives no threshold for how different city pages must be" (note 08 line 297).
  Use the output to prioritise human review and to block *new* suburb pages without a record, not as a verdict.
* The specificity test depends on the record listing landmarks/areas; a page with genuine local prose but an
  empty record will under-score (that is intentional: the record is the auditable evidence).
* With fewer than ~5 pages the boilerplate detection is weak (template text must appear on more than half the pages).
* Sentence splitting is regex-based; lists and headings are treated as short sentences and ignored under 4 words.
* It does not read GSC data; combine with `../gsc_opportunities/` (impressions per page) and the URL Inspection
  sweep (`../gsc_fetch/`) for the full scorecard described in research note 08 line 290.
