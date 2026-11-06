# Harare Fridge Repairs website

Static, SEO-first website for **Harare Fridge Repairs** (hararefridgerepairs.co.zw): 24/7 mobile fridge and freezer repairs across Harare.

Built with Next.js (App Router, static export), React, TypeScript and Tailwind CSS v4. Every page is pre-rendered to plain HTML in `out/`, so it can be hosted on Vercel or any static host.

## What is on the site

| Section | Pages |
| --- | --- |
| Home | `/` |
| Services | `/fridge-repairs`, `/fridge-regassing`, `/freezer-repairs`, `/compressor-replacement`, `/thermostat-replacement`, `/24-hour-fridge-repairs`, `/commercial-fridge-repairs` |
| Specific repairs | `/fridge-door-seal-replacement`, `/fridge-fan-motor-replacement`, `/fridge-defrost-repairs`, `/fridge-control-board-repairs`, `/fridge-power-surge-repairs`, `/fridge-servicing` |
| Fridge types | `/refrigerator-repairs` hub plus 19 type pages (single door to cold rooms) |
| Brands | `/brands` hub plus 24 brand pages |
| Problems | `/problems` hub plus 16 symptom guides, each opening with a short answer |
| Areas | `/areas` hub, 4 region pages (`/areas/harare-north|south|east|west`) and 166 suburb/town pages |
| Advice | `/fridge-regassing-cost-harare`, `/does-my-fridge-need-regassing`, `/fridge-repair-or-replace`, `/protect-fridge-from-power-cuts`, `/how-to-defrost-a-freezer`, `/fridge-temperature-settings`, `/moving-a-fridge`, `/tips` |
| Core | `/about`, `/contact`, `/book-a-repair`, `/faq`, `/reviews`, `/privacy-policy`, `/terms` |

Plus `sitemap.xml`, `robots.txt`, favicons, `og-image.png` and LocalBusiness / Service / FAQ / Breadcrumb structured data on every page.

## Editing content

All copy lives in `lib/content/`:

- `services.ts` + `repair-services.ts`, `types.ts`, `brands.ts`, `problems.ts` + `problems-more.ts`, `advice.ts` + `advice-more.ts`, `faqs.ts` – one record per page.
- `areas/seeds.ts` (names, regions, neighbours), `areas/notes.ts` (one unique paragraph per area) and `areas/index.ts` (page templates and region copy).

Business details (phones, WhatsApp, social links, hours) are in `lib/site.ts`. Links to the sister businesses (Harare Washing Machine Repairs and Electro Appliance Repairs) are listed in `lib/sister-sites.ts`, limited to five pages each. Photos are in `public/images/` and mapped to pages in `components/pictures.tsx`.

## Commands

```bash
pnpm install
pnpm dev          # local preview at http://localhost:3000
pnpm build        # static export to ./out
pnpm check        # after build: links, titles, descriptions, canonicals, structured data, orphans, sitemap
pnpm check:areas  # after build: suburb pages with the least unique text (report only)
pnpm indexnow     # after a deploy: tell Bing and other IndexNow engines about the pages
```

The same build and checks run on every pull request through GitHub Actions (`.github/workflows/site-checks.yml`). Sitemap `lastmod` dates come from the git history of each page's source file, and are left out when git cannot prove them.

`scripts/render-assets.mjs` regenerates the icons and share image from the snowflake logo (needs Playwright).

## Deploying on Vercel

1. Import this GitHub repository in Vercel. The framework preset is Next.js; no extra settings are needed (`output: "export"` is already configured).
2. Add the domain `hararefridgerepairs.co.zw` (and `www`) under the project's Domains tab and point the DNS records Vercel shows you at the registrar.
3. After the first deploy, submit `https://hararefridgerepairs.co.zw/sitemap.xml` in Google Search Console and add the website URL to the Google Business Profile and Facebook page.
4. Verify the site in Bing Webmaster Tools (it can import from Search Console) and run `pnpm indexnow` after each deploy with new or changed pages.

## Owner actions that move local rankings most

The website can only do part of the job. From the SEO research, these matter most for the map pack and are done outside the code:

- Complete the Google Business Profile: primary category for fridge repair, every relevant service with a short description, 24/7 hours, service areas (up to 20), real photos of jobs, and the website link. Keep the address hidden, as the business is mobile.
- Ask every happy customer for a Google review by WhatsApp, with a direct link. No incentives and no review bursts.
- Keep the business name, phone numbers and website identical on Google, Facebook and any directory listings.
- Send real job photos and short notes from callouts in particular suburbs; adding them to the suburb pages makes those pages genuinely local.
