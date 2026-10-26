import { advicePages } from "@/lib/content/advice"
import { areas, regions } from "@/lib/content/areas"
import { brands } from "@/lib/content/brands"
import { problems } from "@/lib/content/problems"
import { services } from "@/lib/content/services"
import { fridgeTypes } from "@/lib/content/types"

export type RouteEntry = {
  path: string
  priority: number
  changeFrequency: "weekly" | "monthly" | "yearly"
}

/** Every indexable page on the site, used by the sitemap and the link checker. */
export function allRoutes(): RouteEntry[] {
  const entries: RouteEntry[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    ...services.map((s) => ({ path: s.path, priority: 0.9, changeFrequency: "monthly" as const })),
    { path: "/commercial-fridge-repairs", priority: 0.9, changeFrequency: "monthly" },
    { path: "/refrigerator-repairs", priority: 0.8, changeFrequency: "monthly" },
    ...fridgeTypes.map((t) => ({ path: `/${t.slug}`, priority: 0.7, changeFrequency: "monthly" as const })),
    { path: "/problems", priority: 0.8, changeFrequency: "monthly" },
    ...problems.map((p) => ({ path: `/problems/${p.slug}`, priority: 0.7, changeFrequency: "monthly" as const })),
    { path: "/brands", priority: 0.8, changeFrequency: "monthly" },
    ...brands.map((b) => ({ path: `/${b.slug}`, priority: 0.6, changeFrequency: "monthly" as const })),
    { path: "/areas", priority: 0.8, changeFrequency: "monthly" },
    ...regions.map((r) => ({ path: `/areas/${r.slug}`, priority: 0.8, changeFrequency: "monthly" as const })),
    ...areas.map((a) => ({ path: a.path, priority: 0.6, changeFrequency: "monthly" as const })),
    ...advicePages.map((a) => ({ path: a.path, priority: 0.7, changeFrequency: "monthly" as const })),
    { path: "/about", priority: 0.6, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/book-a-repair", priority: 0.8, changeFrequency: "yearly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/reviews", priority: 0.6, changeFrequency: "monthly" },
    { path: "/tips", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
  ]
  const seen = new Set<string>()
  return entries.filter((entry) => {
    if (seen.has(entry.path)) return false
    seen.add(entry.path)
    return true
  })
}
