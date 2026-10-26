import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ContentPageView } from "@/components/content-page"
import { buildProblemPage, getProblem, problems } from "@/lib/content/problems"
import { pageMetadata } from "@/lib/seo"

export const dynamicParams = false

export function generateStaticParams() {
  return problems.map((problem) => ({ slug: problem.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const problem = getProblem(slug)
  if (!problem) return {}
  const page = buildProblemPage(problem)
  return pageMetadata({ title: page.title, description: page.description, path: page.path })
}

export default async function ProblemPage({ params }: Props) {
  const { slug } = await params
  const problem = getProblem(slug)
  if (!problem) notFound()
  return <ContentPageView page={buildProblemPage(problem)} />
}
