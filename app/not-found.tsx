import Link from "next/link"
import type { Metadata } from "next"
import { Section } from "@/components/blocks"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-3xl font-extrabold">That page has melted away</h1>
        <p className="mt-4 text-muted">
          The address you followed does not exist on {site.name}. Try one of the main sections below, or call{" "}
          <a href={`tel:${site.phonePrimaryTel}`} className="font-semibold text-brand">
            {site.phonePrimaryDisplay}
          </a>{" "}
          if your fridge needs attention now.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Home
          </Link>
          <Link href="/fridge-repairs" className="btn-outline">
            Fridge repairs
          </Link>
          <Link href="/areas" className="btn-outline">
            Areas we cover
          </Link>
          <Link href="/problems" className="btn-outline">
            Fridge problems
          </Link>
        </div>
      </div>
    </Section>
  )
}
