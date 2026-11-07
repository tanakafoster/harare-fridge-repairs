import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ContentPageView } from "@/components/content-page"
import { buildIndustryPage, getIndustry, industries } from "@/lib/content/industries"
import { pageMetadata } from "@/lib/seo"

export const dynamicParams = false

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) return {}
  const page = buildIndustryPage(industry)
  return pageMetadata({ title: page.title, description: page.description, path: page.path })
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) notFound()
  return <ContentPageView page={buildIndustryPage(industry)} />
}
