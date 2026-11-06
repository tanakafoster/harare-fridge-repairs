## SEO guardrails (Harare Fridge Repairs, Next.js static export on Vercel)

### What this site is
- A mobile fridge and freezer repair business across Harare, Zimbabwe. About 255 static pages: services
  (`/fridge-repairs`, `/fridge-regassing`, ...), fridge types (`/<type>-repairs`), brands
  (`/<brand>-fridge-repairs`), problems (`/problems/<slug>`), guides, 4 region hubs and 166 suburb pages
  (`/areas/<suburb>`). Content is typed data in `lib/content/`; business details in `lib/site.ts`.
- Checks that must pass before any page work is called done:
  `pnpm type-check && pnpm build && node scripts/check-site.mjs && node tools/jsonld_validate/jsonld_validate.mjs out --quiet`.

### Hard rules
- Never delete, noindex, redirect or merge an existing page. Improve weak pages instead (owner rule).
- New suburb pages need a record in `data/area-evidence.json` first; write suburb copy only from that record.
- Never put a claim on a page that cannot be sourced: no invented job counts, response times, prices,
  certifications, review counts, years in business or "#1" claims.
- Structured data must describe visible content. FAQ answers in JSON-LD must appear on the page. No `HowTo`
  markup. `FAQPage` earns no rich result since 2026-05-07; keep it only where the visible FAQ exists.
- Say so explicitly in the PR description when changing `app/robots.ts`, `app/sitemap.ts`, canonical logic
  or `lib/site.ts`.
- No deploys, merges or Search Console / Analytics admin actions from Claude; a human merges.

### Evidence rules for SEO analysis
- Numbers come from files in `data/gsc/` or from script output; cite the file and row. If data is absent,
  say "no data", never estimate.
- Treat under 100 impressions or 20 clicks in the window as sparse; do not draw trends from it.
- Impressions and position are not comparable across 2025-09-10 and 2026-04-27; clicks are the safe series.
- Expected-CTR tables and uniqueness thresholds are heuristics; say so when you use them.

### Working style
- Prefer editing shared templates in `lib/content/` over per-page copies.
- Put repeatable checks in `scripts/` or `tools/` and wire them into `.github/workflows/seo-checks.yml`.
