import type { MetadataRoute } from "next"
import { allRoutes, contentUpdated } from "@/lib/routes"
import { absoluteUrl } from "@/lib/seo"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes().map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: route.lastModified ?? contentUpdated,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
