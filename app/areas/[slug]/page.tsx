import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ContentPageView } from "@/components/content-page"
import { JsonLd } from "@/components/json-ld"
import { areas, areasInRegion, buildAreaPage, buildRegionPage, getArea, getRegion, regions } from "@/lib/content/areas"
import type { ContentPage } from "@/lib/content/model"
import { itemListSchema, pageMetadata } from "@/lib/seo"

export const dynamicParams = false

export function generateStaticParams() {
  return [...regions.map((region) => ({ slug: region.slug })), ...areas.map((area) => ({ slug: area.slug }))]
}

function resolvePage(slug: string): { page: ContentPage; list?: { name: string; path: string }[] } | undefined {
  const region = getRegion(slug)
  if (region) {
    return {
      page: buildRegionPage(region),
      list: areasInRegion(region.region).map((area) => ({ name: area.name, path: area.path })),
    }
  }
  const area = getArea(slug)
  if (area) return { page: buildAreaPage(area) }
  return undefined
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const resolved = resolvePage(slug)
  if (!resolved) return {}
  const { page } = resolved
  return pageMetadata({ title: page.title, description: page.description, path: page.path })
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params
  const resolved = resolvePage(slug)
  if (!resolved) notFound()
  return (
    <>
      {resolved.list ? <JsonLd data={itemListSchema(`${resolved.page.h1}: areas covered`, resolved.list)} /> : null}
      <ContentPageView page={resolved.page} />
    </>
  )
}
