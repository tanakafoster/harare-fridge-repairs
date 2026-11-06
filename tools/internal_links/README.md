# internal_links — link-graph audit of a built site and nearest-suburb link blocks

## Purpose
Two scripts:

1. `internal_links.py` parses a built HTML directory (e.g. `.next/server/app`) or a list of URLs with
   BeautifulSoup, builds the internal link graph with networkx and reports **orphans** (0 inbound from other
   pages), **click depth** from `/`, **inbound counts**, **PageRank**, **broken internal links**, and — with a
   GSC page CSV — pages with **high impressions but few body links** (`impressions / (inbound_body + 1)`).
   A second "body link" graph counts only links inside `<main>` (nav/footer links make every page "reachable"
   but carry no editorial endorsement); pages without `<main>` fall back to "all links minus targets that appear
   on more than `--boilerplate-threshold` of pages".
2. `nearby_suburbs.py` turns a CSV of suburb pages with lat/lng into the **6 nearest neighbours** per suburb
   (haversine), as JSON or a ready-to-import TypeScript module, so a suburb template can render a
   "Nearby areas we cover" block deterministically (SearchPilot's nearest-neighbour link test: +7% organic
   traffic to linked pages, research note 07 line 85).

## Dependencies
Python 3.13, `networkx 3.7`, `beautifulsoup4 4.15.0` (parser: built-in `html.parser`, no lxml needed).
`nearby_suburbs.py` is standard library only.

## Configuration
```
python3 -I internal_links.py (--dir DIR | --urls FILE) --site https://host [--gsc pages.csv]
                             [--boilerplate-threshold 0.5] [--max-depth 3] [--out-dir out]
python3 -I nearby_suburbs.py suburbs.csv [--k 6] [--max-km 15] [--hubs midrand,centurion] [--format json|ts] [--out FILE]
```
* `--site` is the origin used to recognise absolute internal links (the user's footer links to `SITE_URL/...`).
* `--gsc` CSV needs `page,impressions[,clicks]`; pages are matched by path after stripping the origin.
* `--max-km` stops edge-of-area suburbs linking to far-away ones; `--hubs` forces regional hub slugs first.

## Input / output
* `out/pages.csv`: `page,inbound,inbound_body,outbound,depth,pagerank,orphan,boilerplate_target[,impressions,clicks,demand_per_link]`
* `out/orphans.csv`, `out/broken_links.csv` (`source,target`), console summary.
* `nearby_suburbs.py`: `{ "<slug>": [ {slug, name, path, km}, ... ] }` or
  `export const NEARBY_SUBURBS: Record<string, NearbySuburb[]> = {...}`; prints how many links are reciprocal.

## Synthetic test site
`make_synthetic_site.py --out site --seed 3` writes 39 HTML pages (home, services hub, areas hub, 8 service,
15 suburb, 10 symptom, about, contact, privacy) with a shared nav/footer, and plants: one orphan
(`/generator-repairs-edenvale`, prerendered but linked from nowhere), two suburbs linked only from other suburb
pages (depth 3), one broken link (`/contact` -> `/does-not-exist`), one symptom page with many inbound links, and
`gsc_pages.csv` with 4,000 impressions on `/generator-surging` (1 body link) and `/generator-repairs-krugersdorp`.
`suburbs.csv` holds **approximate** coordinates for 15 Gauteng suburbs (Sandton, Randburg, Midrand, Centurion,
Boksburg, Benoni, Roodepoort, Kempton Park, Germiston, Alberton, Bedfordview, Fourways, Edenvale, Krugersdorp,
Pretoria East) — good to a few km, enough for ordering neighbours, not for display.

## How it was tested
```
cd /home/claude/reports/code/internal_links
python3 -I make_synthetic_site.py --out site --seed 3      # wrote 39 pages + suburbs.csv + gsc_pages.csv
python3 -I internal_links.py --dir site --site https://www.example-generators.co.za --gsc site/gsc_pages.csv --out-dir out
```
Output (`run_output.txt`):
```
pages=39 edges=518 boilerplate targets=10 (['/', '/about', '/areas', '/contact', '/diesel-generator-repairs', ...])
orphans (1): ['/generator-repairs-edenvale']
unreachable or deeper than 3 (1): [('/generator-repairs-edenvale', None)]
broken internal links (1): [('/contact', '/does-not-exist')]
depth histogram: {0: 1, 1: 14, 2: 21, 3: 2, None: 1}
lowest inbound (body links) pages:
  /generator-repairs-edenvale   inbound= 0 body= 0 depth=None pr=0.00385
  /privacy-policy               inbound=38 body= 0 depth=1    pr=0.06444   <- reachable from every footer, endorsed by nobody
  /generator-cranks-but-wont-start inbound= 1 body= 1 depth=2 pr=0.00469
top PageRank: /areas 0.06779, /diesel-generator-repairs 0.06675, ...
high demand, few body links:
  /generator-surging            impressions= 4000 inbound_body=1  score=2000.0
  /generator-repairs-krugersdorp impressions=4000 inbound_body=14 score=266.7
```
`--max-depth 2` additionally lists the two depth-3 suburbs (`krugersdorp`, `pretoria-east`). All planted
defects were found; PageRank is dominated by nav targets as expected (every page links to them), which is why
the body-link counts are the more useful column for a templated site.

```
python3 -I nearby_suburbs.py site/suburbs.csv --k 6 --format ts --out out/nearby-suburbs.ts
#   wrote out/nearby-suburbs.ts (15 suburbs, k=6); reciprocal links: 62/90; mean neighbour distance 16.4 km
#   sandton -> randburg 6.5 km, edenvale 10.2, fourways 11.1, bedfordview 11.3, midrand 14.9, ...
python3 -I nearby_suburbs.py site/suburbs.csv --k 6 --max-km 15 --hubs midrand
#   krugersdorp -> [midrand (hub, 36.9 km), roodepoort 13.1]   (edge suburb gets fewer links instead of far ones)
```
A design change during testing: the first version derived "body links" purely from the boilerplate-share
heuristic, which hid the real inbound counts of pages that are also in the nav; using `<main>` scope when present
fixed that (the synthetic pages and the user's templates both wrap content in `<main>`).

## Limitations
* Static HTML only: links injected client-side are not seen (the user's pages are prerendered, so this matches
  what Googlebot gets in the initial HTML, but not after JS).
* PageRank on a 40–220 page site with a global nav is nearly flat; treat it as a tie-breaker, not a signal.
* `--urls` mode fetches only the listed pages (no crawling), so use the sitemap URL list.
* Coordinates in `suburbs.csv` are approximate; replace with the business's own data (e.g. suburb centroids
  from the municipality or Google Maps) before generating production links.
* Nearest-by-distance ignores road networks and the N1/N3 realities of Gauteng travel times; `--hubs` and
  `--max-km` are the knobs for that.
