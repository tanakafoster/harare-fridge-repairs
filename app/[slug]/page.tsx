import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ContentPageView } from "@/components/content-page"
import { advicePages, getAdvice } from "@/lib/content/advice"
import { brands, buildBrandPage, getBrand } from "@/lib/content/brands"
import type { ContentPage } from "@/lib/content/model"
import { getService, services } from "@/lib/content/services"
import { buildFridgeTypePage, fridgeTypes, getFridgeType } from "@/lib/content/types"
import { pageMetadata } from "@/lib/seo"

export const dynamicParams = false

export function generateStaticParams() {
  return [...services, ...fridgeTypes, ...brands, ...advicePages].map((item) => ({ slug: item.slug }))
}

function resolvePage(slug: string): ContentPage | undefined {
  const service = getService(slug)
  if (service) return service
  const type = getFridgeType(slug)
  if (type) return buildFridgeTypePage(type)
  const brand = getBrand(slug)
  if (brand) return buildBrandPage(brand)
  const advice = getAdvice(slug)
  if (advice) return advice
  return undefined
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = resolvePage(slug)
  if (!page) return {}
  return pageMetadata({ title: page.title, description: page.description, path: page.path })
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const page = resolvePage(slug)
  if (!page) notFound()
  return <ContentPageView page={page} />
}
