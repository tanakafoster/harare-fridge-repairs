import { advicePages } from "@/lib/content/advice"
import { moreAdvicePages } from "@/lib/content/advice-more"
import { areas, regions } from "@/lib/content/areas"
import { brands } from "@/lib/content/brands"
import { problems } from "@/lib/content/problems"
import { moreProblems } from "@/lib/content/problems-more"
import { repairServices } from "@/lib/content/repair-services"
import { services } from "@/lib/content/services"
import { fridgeTypes } from "@/lib/content/types"

export type RouteEntry = {
  path: string
  priority: number
  changeFrequency: "weekly" | "monthly" | "yearly"
  /** Files whose last git commit is this page's last significant change (sitemap lastmod). */
  sources: string[]
}

const repairSlugs = new Set(repairServices.map((s) => s.slug))
const moreProblemSlugs = new Set(moreProblems.map((p) => p.slug))
const moreAdviceSlugs = new Set(moreAdvicePages.map((a) => a.slug))
const areaSources = ["lib/content/areas/index.ts", "lib/content/areas/seeds.ts", "lib/content/areas/notes.ts", "app/areas/[slug]/page.tsx"]

function pageFile(path: string) {
  return [`app${path}/page.tsx`]
}

/** Every indexable page on the site, used by the sitemap and the link checker. */
export function allRoutes(): RouteEntry[] {
  const entries: RouteEntry[] = [
    { path: "/", priority: 1, changeFrequency: "weekly", sources: ["app/page.tsx"] },
    ...services.map((s) => ({
      path: s.path,
      priority: 0.9,
      changeFrequency: "monthly" as const,
      sources: [repairSlugs.has(s.slug) ? "lib/content/repair-services.ts" : "lib/content/services.ts"],
    })),
    { path: "/commercial-fridge-repairs", priority: 0.9, changeFrequency: "monthly", sources: pageFile("/commercial-fridge-repairs") },
    { path: "/refrigerator-repairs", priority: 0.8, changeFrequency: "monthly", sources: pageFile("/refrigerator-repairs") },
    ...fridgeTypes.map((t) => ({ path: `/${t.slug}`, priority: 0.7, changeFrequency: "monthly" as const, sources: ["lib/content/types.ts"] })),
    { path: "/problems", priority: 0.8, changeFrequency: "monthly", sources: ["app/problems/page.tsx", "lib/content/problems.ts", "lib/content/problems-more.ts"] },
    ...problems.map((p) => ({
      path: `/problems/${p.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      sources: [moreProblemSlugs.has(p.slug) ? "lib/content/problems-more.ts" : "lib/content/problems.ts"],
    })),
    { path: "/brands", priority: 0.8, changeFrequency: "monthly", sources: pageFile("/brands") },
    ...brands.map((b) => ({ path: `/${b.slug}`, priority: 0.6, changeFrequency: "monthly" as const, sources: ["lib/content/brands.ts"] })),
    { path: "/areas", priority: 0.8, changeFrequency: "monthly", sources: pageFile("/areas") },
    ...regions.map((r) => ({ path: `/areas/${r.slug}`, priority: 0.8, changeFrequency: "monthly" as const, sources: areaSources })),
    ...areas.map((a) => ({ path: a.path, priority: 0.6, changeFrequency: "monthly" as const, sources: areaSources })),
    ...advicePages.map((a) => ({
      path: a.path,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      sources: [moreAdviceSlugs.has(a.slug) ? "lib/content/advice-more.ts" : "lib/content/advice.ts"],
    })),
    { path: "/about", priority: 0.6, changeFrequency: "yearly", sources: pageFile("/about") },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly", sources: pageFile("/contact") },
    { path: "/book-a-repair", priority: 0.8, changeFrequency: "yearly", sources: pageFile("/book-a-repair") },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly", sources: pageFile("/faq") },
    { path: "/reviews", priority: 0.6, changeFrequency: "monthly", sources: pageFile("/reviews") },
    { path: "/tips", priority: 0.6, changeFrequency: "monthly", sources: pageFile("/tips") },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly", sources: pageFile("/privacy-policy") },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly", sources: pageFile("/terms") },
  ]
  const seen = new Set<string>()
  return entries.filter((entry) => {
    if (seen.has(entry.path)) return false
    seen.add(entry.path)
    return true
  })
}
