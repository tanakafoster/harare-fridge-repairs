# Harare Fridge Repairs website: working rules

Static Next.js site (App Router, `output: "export"`, pnpm) for a fridge-only, mobile, 24/7 repair business across Harare. Content lives in `lib/content/`; every URL is listed in `lib/routes.ts`. See `README.md` for the page map.

## Before calling any change done

```bash
pnpm type-check && pnpm build && pnpm check
```

`pnpm check` (`scripts/check-site.mjs`) must print "No problems found". It checks broken internal links, one h1, unique titles (70 chars max) and descriptions (160 max), self canonicals, no noindex, JSON-LD that parses with every FAQ answer visible on the page, no review or rating markup, no orphan pages, forbidden text, the sitemap, and the sister-site link limits. CI runs the same on every pull request (`.github/workflows/site-checks.yml`). `pnpm check:areas` is an information-only report of the suburb pages with the least unique text.

## Owner's rules

- Never remove pages or URLs. Improve or add pages instead.
- Fridges and freezers only. Phones: 0782 886 252 (main) and 0719 227 718 (second). Never 0771 371 600. No street address: the business is mobile.
- Do not invent prices, reviews, ratings, job counts, response times, founding dates or certifications. Use only what the owner has confirmed.
- Do not copy Electro Appliance Repairs' photos, wording, reviews or analytics IDs.
- Sister-site links (`lib/sister-sites.ts`): at most five pages link to each of hararewashingmachinerepairs.co.zw and electroappliancerepairs.co.zw, always to the `www` host, never site-wide and never to Electro's fridge pages. The build check enforces the limit.

## SEO conventions

- Suburb pages must say something true about that suburb (`lib/content/areas/notes.ts`), not just swap the name. When the owner shares real job photos or notes for an area, add them there first.
- Structured data must describe what is visible on the page. FAQ markup only where the questions are shown. No HowTo markup, no self-serving review stars.
- Problem guides open with a short, direct answer (`quickAnswer`), then the detail.
- Sitemap `lastmod` comes from git (`lib/content-dates.ts`); when a new page is added, give its route the source file(s) in `lib/routes.ts`.
- Link new pages from at least one hub and from related pages, with descriptive anchor text, so no page is an orphan.
