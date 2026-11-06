import type { DateSource } from "@/lib/content-dates"
import { advicePages } from "@/lib/content/advice"
import { moreAdvicePages } from "@/lib/content/advice-more"
import { areas, regions } from "@/lib/content/areas"
import { brands } from "@/lib/content/brands"
import { problems } from "@/lib/content/problems"
import { moreProblems } from "@/lib/content/problems-more"
import { repairServices } from "@/lib/content/repair-services"
import { services } from "@/lib/content/services"
import { fridgeTypes } from "@/lib/content/types"
import { sisterNotes } from "@/lib/sister-sites"

export type RouteEntry = {
  path: string
  priority: number
  changeFrequency: "weekly" | "monthly" | "yearly"
  /**
   * The files that hold this page's words and links, for the sitemap
   * lastmod: the page file, the content records it shows as its main
   * content and the module that builds it. Shared layout components are
   * left out, because a change of style is not a change of content.
   */
  sources: DateSource[]
}

const repairSlugs = new Set(repairServices.map((s) => s.slug))
const moreProblemSlugs = new Set(moreProblems.map((p) => p.slug))
const moreAdviceSlugs = new Set(moreAdvicePages.map((a) => a.slug))
const areaTemplates = ["lib/content/areas/index.ts", "lib/content/areas/seeds.ts", "app/areas/[slug]/page.tsx"]

function pageFile(path: string) {
  return [`app${path}/page.tsx`]
}

/** Every indexable page on the site, used by the sitemap and the link checker. */
export function allRoutes(): RouteEntry[] {
  const entries: RouteEntry[] = [
    { path: "/", priority: 1, changeFrequency: "weekly", sources: ["app/page.tsx", "lib/content/faqs.ts"] },
    ...services.map((s) => ({
      path: s.path,
      priority: 0.9,
      changeFrequency: "monthly" as const,
      sources: [repairSlugs.has(s.slug) ? "lib/content/repair-services.ts" : "lib/content/services.ts"],
    })),
    {
      path: "/commercial-fridge-repairs",
      priority: 0.9,
      changeFrequency: "monthly",
      sources: [...pageFile("/commercial-fridge-repairs"), "lib/content/types.ts"],
    },
    { path: "/refrigerator-repairs", priority: 0.8, changeFrequency: "monthly", sources: [...pageFile("/refrigerator-repairs"), "lib/content/types.ts"] },
    ...fridgeTypes.map((t) => ({ path: `/${t.slug}`, priority: 0.7, changeFrequency: "monthly" as const, sources: ["lib/content/types.ts"] })),
    { path: "/problems", priority: 0.8, changeFrequency: "monthly", sources: ["app/problems/page.tsx", "lib/content/problems.ts", "lib/content/problems-more.ts"] },
    ...problems.map((p) => ({
      path: `/problems/${p.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      // buildProblemPage in problems.ts lays out every guide, including the newer ones.
      sources: moreProblemSlugs.has(p.slug) ? ["lib/content/problems-more.ts", "lib/content/problems.ts"] : ["lib/content/problems.ts"],
    })),
    { path: "/brands", priority: 0.8, changeFrequency: "monthly", sources: [...pageFile("/brands"), "lib/content/brands.ts"] },
    ...brands.map((b) => ({ path: `/${b.slug}`, priority: 0.6, changeFrequency: "monthly" as const, sources: ["lib/content/brands.ts"] })),
    // The region cards on /areas come from areas/index.ts, but that file is mostly
    // the suburb templates, so it is left out to avoid false dates.
    { path: "/areas", priority: 0.8, changeFrequency: "monthly", sources: [...pageFile("/areas"), "lib/content/areas/seeds.ts"] },
    ...regions.map((r) => ({ path: `/areas/${r.slug}`, priority: 0.8, changeFrequency: "monthly" as const, sources: areaTemplates })),
    // Each suburb is dated by its own note, so adding a note to one suburb
    // does not mark all 166 suburb pages as changed.
    ...areas.map((a) => ({
      path: a.path,
      priority: 0.6,
      changeFrequency: "monthly" as const,
      sources: [...areaTemplates, { file: "lib/content/areas/notes.ts", text: a.note }],
    })),
    ...advicePages.map((a) => ({
      path: a.path,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      sources: [moreAdviceSlugs.has(a.slug) ? "lib/content/advice-more.ts" : "lib/content/advice.ts"],
    })),
    { path: "/about", priority: 0.6, changeFrequency: "yearly", sources: pageFile("/about") },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly", sources: pageFile("/contact") },
    { path: "/book-a-repair", priority: 0.8, changeFrequency: "yearly", sources: pageFile("/book-a-repair") },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly", sources: [...pageFile("/faq"), "lib/content/faqs.ts"] },
    { path: "/reviews", priority: 0.6, changeFrequency: "monthly", sources: pageFile("/reviews") },
    { path: "/tips", priority: 0.6, changeFrequency: "monthly", sources: [...pageFile("/tips"), "lib/content/advice.ts"] },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly", sources: pageFile("/privacy-policy") },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly", sources: pageFile("/terms") },
  ]
  const seen = new Set<string>()
  return entries
    .filter((entry) => {
      if (seen.has(entry.path)) return false
      seen.add(entry.path)
      return true
    })
    .map((entry) => (sisterNotes[entry.path] ? { ...entry, sources: [...entry.sources, "lib/sister-sites.ts"] } : entry))
}
