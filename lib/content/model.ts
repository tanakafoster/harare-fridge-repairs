import type { Crumb } from "@/components/breadcrumbs"
import type { PictureKey } from "@/components/pictures"
import type { Faq } from "@/lib/seo"

export type LinkItem = { href: string; label: string; text?: string }

export type ContentSection =
  | { kind: "text"; heading?: string; paragraphs: string[]; tone?: "white" | "frost" }
  | { kind: "list"; heading: string; intro?: string; items: string[]; columns?: 1 | 2; tone?: "white" | "frost" }
  | { kind: "steps"; heading: string; intro?: string; items: { title: string; text: string }[]; tone?: "white" | "frost" }
  | { kind: "cards"; heading: string; intro?: string; items: LinkItem[]; columns?: 2 | 3 | 4; tone?: "white" | "frost" }
  | { kind: "chips"; heading: string; intro?: string; items: LinkItem[]; tone?: "white" | "frost" }
  | {
      kind: "feature"
      heading: string
      eyebrow?: string
      paragraphs: string[]
      picture: PictureKey
      pictureAlt: string
      reverse?: boolean
      tone?: "white" | "frost"
    }

export type ContentPage = {
  path: string
  /** Meta title without the brand suffix. */
  title: string
  description: string
  eyebrow: string
  h1: string
  lead: string
  points?: string[]
  picture?: PictureKey
  pictureAlt?: string
  crumbs: Crumb[]
  sections: ContentSection[]
  faqs: Faq[]
  faqHeading?: string
  cta: { title: string; text: string }
  whatsappMessage?: string
  schema?: {
    serviceName: string
    serviceDescription: string
    serviceType?: string
    areaName?: string
  }
  pageType?: "WebPage" | "CollectionPage" | "AboutPage" | "ContactPage" | "FAQPage"
}

export type { Faq }
