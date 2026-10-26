# Harare Fridge Repairs website

Static, SEO-first website for **Harare Fridge Repairs** (hararefridgerepairs.co.zw): 24/7 mobile fridge and freezer repairs across Harare.

Built with Next.js (App Router, static export), React, TypeScript and Tailwind CSS v4. Every page is pre-rendered to plain HTML in `out/`, so it can be hosted on Vercel or any static host.

## What is on the site

| Section | Pages |
| --- | --- |
| Home | `/` |
| Services | `/fridge-repairs`, `/fridge-regassing`, `/freezer-repairs`, `/compressor-replacement`, `/thermostat-replacement`, `/24-hour-fridge-repairs`, `/commercial-fridge-repairs` |
| Fridge types | `/refrigerator-repairs` hub plus 19 type pages (single door to cold rooms) |
| Brands | `/brands` hub plus 24 brand pages |
| Problems | `/problems` hub plus 10 symptom guides |
| Areas | `/areas` hub, 4 region pages (`/areas/harare-north|south|east|west`) and 166 suburb/town pages |
| Advice | `/fridge-regassing-cost-harare`, `/does-my-fridge-need-regassing`, `/fridge-repair-or-replace`, `/tips` |
| Core | `/about`, `/contact`, `/book-a-repair`, `/faq`, `/reviews`, `/privacy-policy`, `/terms` |

Plus `sitemap.xml`, `robots.txt`, favicons, `og-image.png` and LocalBusiness / Service / FAQ / Breadcrumb structured data on every page.

## Editing content

All copy lives in `lib/content/`:

- `services.ts`, `types.ts`, `brands.ts`, `problems.ts`, `advice.ts`, `faqs.ts` – one record per page.
- `areas/seeds.ts` (names, regions, neighbours), `areas/notes.ts` (one unique paragraph per area) and `areas/index.ts` (page templates and region copy).

Business details (phones, WhatsApp, social links, hours) are in `lib/site.ts`. Photos are in `public/images/` and mapped to pages in `components/pictures.tsx`.

## Commands

```bash
pnpm install
pnpm dev          # local preview at http://localhost:3000
pnpm build        # static export to ./out
node scripts/check-site.mjs   # after build: broken links, titles, descriptions, sitemap
```

`scripts/render-assets.mjs` regenerates the icons and share image from the snowflake logo (needs Playwright).

## Deploying on Vercel

1. Import this GitHub repository in Vercel. The framework preset is Next.js; no extra settings are needed (`output: "export"` is already configured).
2. Add the domain `hararefridgerepairs.co.zw` (and `www`) under the project's Domains tab and point the DNS records Vercel shows you at the registrar.
3. After the first deploy, submit `https://hararefridgerepairs.co.zw/sitemap.xml` in Google Search Console and add the website URL to the Google Business Profile and Facebook page.
