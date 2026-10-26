import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowRight, Check, Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons"
import { JsonLd } from "@/components/json-ld"
import { Breadcrumbs, type Crumb } from "@/components/breadcrumbs"
import { faqSchema, type Faq } from "@/lib/seo"
import { defaultWhatsappMessage, site, whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"
import { SitePicture, type PictureKey } from "@/components/pictures"

export type LinkItem = { href: string; label: string; text?: string }

/* ------------------------------------------------------------------ */
/* Section wrappers                                                    */
/* ------------------------------------------------------------------ */

export function Section({
  children,
  className,
  tone = "white",
  id,
}: {
  children: ReactNode
  className?: string
  tone?: "white" | "frost" | "ice" | "navy" | "brand"
  id?: string
}) {
  const tones = {
    white: "bg-white",
    frost: "bg-frost",
    ice: "bg-ice",
    navy: "bg-navy text-white",
    brand: "bg-brand text-white",
  }
  return (
    <section id={id} className={cn("py-14 sm:py-18", tones[tone], className)}>
      <div className="container-site">{children}</div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  as: Tag = "h2",
  light = false,
}: {
  eyebrow?: string
  title: string
  lead?: string
  align?: "left" | "center"
  as?: "h2" | "h3"
  light?: boolean
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className={cn("eyebrow", light && "text-white/80")}>{eyebrow}</p> : null}
      <Tag className={cn("mt-2 text-2xl font-bold sm:text-3xl", light && "text-white")}>{title}</Tag>
      {lead ? <p className={cn("mt-4 text-base leading-relaxed text-muted sm:text-lg", light && "text-white/80")}>{lead}</p> : null}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  points,
  picture,
  pictureAlt,
  ctaLabel = "Call to book",
  whatsappMessage,
}: {
  eyebrow: string
  title: string
  lead: string
  crumbs: Crumb[]
  points?: string[]
  picture?: PictureKey
  pictureAlt?: string
  ctaLabel?: string
  whatsappMessage?: string
}) {
  return (
    <div className="bg-gradient-to-b from-ice to-white">
      <div className="container-site pt-6 pb-12 sm:pb-16">
        <Breadcrumbs items={crumbs} />
        <div className={cn("mt-6 grid items-center gap-10", picture && "lg:grid-cols-[1.15fr_1fr]")}>
          <div className="max-w-3xl">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.75rem]">{title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{lead}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`tel:${site.phonePrimaryTel}`} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {ctaLabel}: {site.phonePrimaryDisplay}
              </a>
              <a
                href={whatsappLink(whatsappMessage ?? defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp a photo of the fault
              </a>
            </div>
            {points?.length ? (
              <ul className="mt-7 grid gap-2 text-sm font-medium text-navy sm:grid-cols-2">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          {picture ? (
            <div className="relative">
              <SitePicture
                name={picture}
                alt={pictureAlt ?? title}
                priority
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Content pieces                                                      */
/* ------------------------------------------------------------------ */

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("prose-site max-w-3xl", className)}>{children}</div>
}

export function Paragraphs({ items, className }: { items: string[]; className?: string }) {
  return (
    <Prose className={className}>
      {items.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </Prose>
  )
}

export function CheckList({ items, columns = 1, className }: { items: string[]; columns?: 1 | 2; className?: string }) {
  return (
    <ul className={cn("grid gap-3", columns === 2 && "sm:grid-cols-2", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[1.02rem] leading-relaxed">
          <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ice text-brand">
            <Check className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function Steps({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((step, index) => (
        <li key={step.title} className="card relative pt-8">
          <span className="absolute -top-4 left-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
            {index + 1}
          </span>
          <h3 className="text-base font-bold">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
        </li>
      ))}
    </ol>
  )
}

export function CardGrid({
  items,
  columns = 3,
  headingLevel = "h3",
}: {
  items: LinkItem[]
  columns?: 2 | 3 | 4
  headingLevel?: "h3" | "h4"
}) {
  const Tag = headingLevel
  const cols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }
  return (
    <ul className={cn("grid gap-4", cols[columns])}>
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="card group flex h-full flex-col transition-colors hover:border-brand hover:bg-frost"
          >
            <Tag className="text-base font-bold text-navy group-hover:text-brand">{item.label}</Tag>
            {item.text ? <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.text}</p> : null}
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
              Read more <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function LinkChips({ items, className }: { items: LinkItem[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="link-chip">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function FaqList({ items, heading = "Frequently asked questions", eyebrow, lead }: { items: Faq[]; heading?: string; eyebrow?: string; lead?: string }) {
  if (!items.length) return null
  return (
    <div>
      <JsonLd data={faqSchema(items)} />
      <SectionHeading eyebrow={eyebrow ?? "FAQ"} title={heading} lead={lead} />
      <div className="mt-8 grid gap-3 lg:max-w-4xl">
        {items.map((item) => (
          <details key={item.question} className="group rounded-2xl border border-line bg-white open:border-brand open:shadow-card">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-navy marker:content-none [&::-webkit-details-marker]:hidden">
              {item.question}
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ice text-brand transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="px-5 pb-5 text-[0.98rem] leading-relaxed text-ink">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  )
}

export function CtaBand({
  title,
  text,
  whatsappMessage,
}: {
  title: string
  text: string
  whatsappMessage?: string
}) {
  return (
    <section className="bg-brand text-white">
      <div className="container-site flex flex-col gap-6 py-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
          <p className="mt-3 text-white/85">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={`tel:${site.phonePrimaryTel}`} className="btn-white">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phonePrimaryDisplay}
          </a>
          <a
            href={whatsappLink(whatsappMessage ?? defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <Link href="/book-a-repair" className="btn-outline-white">
            Book online
          </Link>
        </div>
      </div>
    </section>
  )
}

export function TrustStrip() {
  const items = [
    "Fridges and freezers only, nothing else",
    "Mobile across Harare, no need to transport the unit",
    "Open 24 hours, 7 days a week",
    "Price agreed before any work starts",
  ]
  return (
    <div className="border-y border-line bg-frost">
      <ul className="container-site grid gap-3 py-5 text-sm font-semibold text-navy sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SplitFeature({
  eyebrow,
  title,
  paragraphs,
  picture,
  pictureAlt,
  reverse = false,
  children,
}: {
  eyebrow?: string
  title: string
  paragraphs: string[]
  picture: PictureKey
  pictureAlt: string
  reverse?: boolean
  children?: ReactNode
}) {
  return (
    <div className={cn("grid items-center gap-10 lg:grid-cols-2", reverse && "lg:[&>*:first-child]:order-2")}>
      <div>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <Paragraphs items={paragraphs} className="mt-6" />
        {children}
      </div>
      <SitePicture name={picture} alt={pictureAlt} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card" />
    </div>
  )
}
