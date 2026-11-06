import type { MetadataRoute } from "next"
import { lastModifiedFor } from "@/lib/content-dates"
import { allRoutes } from "@/lib/routes"
import { absoluteUrl } from "@/lib/seo"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes().map((route) => {
    const lastModified = lastModifiedFor(route.sources)
    return {
      url: absoluteUrl(route.path),
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }
  })
}
