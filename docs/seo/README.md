# SEO playbook: Harare Fridge Repairs

This folder applies the owner's "Claude SEO workflows" research (26 October 2026) and the Harare Washing Machine Repairs SEO strategy to this site. Goal: rank first in Harare for fridge repair searches while keeping every page.

## Owner rule

**Never delete, noindex, redirect or merge an existing page.** Weak pages are improved, not removed. Where the research says "fold into hub", this site says "improve first".

## Checks to run after every change

```bash
pnpm type-check
pnpm build
node scripts/check-site.mjs                                   # links, h1, titles, descriptions, canonicals, sitemap
node tools/jsonld_validate/jsonld_validate.mjs out --quiet    # structured data (errors fail; FAQPage warnings are expected)
python3 -I tools/location_page_gate/location_page_gate.py \
  --records data/area-evidence.json --html-dir out/areas --only-records --out area-gate.csv
```

The same checks, plus Lighthouse CI (SEO, accessibility, performance budgets on six representative pages), run on every pull request through `.github/workflows/seo-checks.yml`.

Optional link graph audit (needs `pip install networkx beautifulsoup4 numpy scipy`):

```bash
python3 tools/internal_links/internal_links.py --dir out --site https://hararefridgerepairs.co.zw --out-dir link-audit
```

## What the tools found (6 November 2026)

| Check | Result |
| --- | --- |
| Site check | 255 pages, about 25,000 internal links, no broken links, sitemap matches |
| JSON-LD | 0 errors after fixing two bugs (an empty FAQPage on /faq, services without a provider in the offer catalogue) |
| Link graph | No orphan pages, every page within 2 clicks of the home page. Guides had only 3 to 6 inbound links; area and problem pages now link to them (about 90 each) |
| Lighthouse (local) | SEO 100, accessibility 100, performance 89 to 93 on all six sampled pages |
| Suburb pages | All 166 score "improve-first": about 1,050 words each, but only about 7% of the text is unique once the suburb name is masked. Each page has one hand-written note; the rest is shared template text |

The suburb page result is the biggest SEO risk on the site. Google's guidance on doorway pages targets "substantially similar pages aimed at specific regions". The fix is real local evidence, not more template text.

## Improving suburb pages (highest priority)

`data/area-evidence.json` has one record per suburb. Fill in what is true from real jobs, then the page copy can be written from it:

| Field | Example |
| --- | --- |
| `jobs_completed` | number of fridge jobs done in that suburb |
| `landmarks` | shopping centres, roads, estates you actually work around |
| `local_faults` | faults you see often there (for example "surge damage after load shedding", "borehole water in ice makers") |
| `typical_response_minutes` | only if you can honestly keep it |
| `technician_coverage` | which technician or route covers it |
| `photo_ids` | job photos taken in that suburb (with the customer's permission) |
| `testimonial_ids` | genuine reviews that mention the suburb |

Start with the suburbs that bring the most calls. Re-run the gate after each batch; a page becomes `keep-index` when it has at least 4 evidence fields, about half its text unique, and 4 or more suburb-specific sentences. These thresholds are heuristics from the research, not Google numbers.

Never invent job counts, response times, reviews or landmarks.

## Search Console (needs owner access)

`tools/gsc_fetch` pulls Search Analytics data day by day and sweeps URL Inspection over the sitemap. `tools/gsc_opportunities` turns an export into CTR gaps, striking-distance queries, cannibalisation, decay and per-template roll-ups. See each folder's README for setup (a Google Cloud service account added as a user on the Search Console property, read-only scope). Until that is set up, a manual CSV export from Search Console works with `gsc_opportunities`.

## Tracking enquiries

Set `NEXT_PUBLIC_GA_ID` in Vercel. Every call, WhatsApp and booking click is sent to GA4 as `generate_lead` with `method` = call, whatsapp or book. Mark it as a key event. Add UTM tags to the website link on the Google Business Profile, for example `https://hararefridgerepairs.co.zw/?utm_source=google&utm_medium=organic&utm_campaign=gbp`, so profile visits are separated from organic search.

## Off-site actions (owner)

1. Google Business Profile: primary category "Refrigerator repair service", every relevant predefined service, 24/7 hours, real photos, no keywords in the business name, service areas set.
2. Ask every customer for a Google review by WhatsApp after the job. No incentives and no bursts. The research found 10 reviews is the first threshold where a boost is reported.
3. Consistent name and phone on Facebook, Bing Places, Apple Business Connect and the Zimbabwean directories that actually appear in searches for "fridge repairs Harare".
4. Verify the site in Google Search Console and Bing Webmaster Tools and submit `sitemap.xml`.

## Using Claude Code on this repo

`docs/seo/claude-code/` holds the research's Claude Code templates, adapted to this site and the owner rule:

- `CLAUDE.md.seo-section.md`: guardrails to paste into a project `CLAUDE.md`
- `seo-gsc-review.SKILL.md`: a skill that runs the Search Console analysis and produces an evidence-cited action list (save as `.claude/skills/seo-gsc-review/SKILL.md`)
- `seo-evidence-reviewer.agent.md`: a read-only reviewer subagent (save as `.claude/agents/seo-evidence-reviewer.md`)
- `settings.hooks.example.json` and `validate-jsonld-hook.sh`: a hook that validates JSON-LD after every edit (merge into `.claude/settings.json`, copy the script to `.claude/hooks/`)

They are kept here rather than activated so the owner decides when to turn them on.
