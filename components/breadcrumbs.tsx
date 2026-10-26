import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/seo"

export type Crumb = { name: string; path?: string }

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  const all: Crumb[] = items[0]?.path === "/" ? items : [{ name: "Home", path: "/" }, ...items]
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <JsonLd data={breadcrumbSchema(all)} />
      <ol className="flex flex-wrap items-center gap-1 text-xs font-medium text-muted sm:text-sm">
        {all.map((crumb, index) => {
          const last = index === all.length - 1
          return (
            <li key={`${crumb.name}-${index}`} className="inline-flex items-center gap-1">
              {index > 0 ? <ChevronRight className="h-3.5 w-3.5 text-line" aria-hidden="true" /> : null}
              {crumb.path && !last ? (
                <Link href={crumb.path} className="hover:text-brand">
                  {crumb.name}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={last ? "text-navy" : undefined}>
                  {crumb.name}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
