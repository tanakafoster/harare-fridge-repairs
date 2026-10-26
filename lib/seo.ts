import type { Metadata } from "next"
import { site } from "@/lib/site"

export const businessId = `${site.url}/#business`
export const websiteId = `${site.url}/#website`

export const defaultOgImage = {
  url: `${site.url}/og-image.png`,
  width: 1200,
  height: 630,
  alt: `${site.name}: fridge repairs and regassing across Harare, 24/7`,
}

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return site.url
  if (path.startsWith("http")) return path
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`
}

export function brandTitle(title: string) {
  if (title.includes(site.name)) return title
  const suffixed = `${title} | ${site.name}`
  return suffixed.length <= 66 ? suffixed : title
}

export type PageMeta = {
  title: string
  description: string
  path: string
  noindex?: boolean
}

/**
 * Keeps meta descriptions within the length search engines display. Long
 * descriptions are cut at the last full sentence that fits, so the snippet
 * still reads cleanly.
 */
export function trimDescription(text: string, max = 158) {
  const clean = text.replace(/\s+/g, " ").trim()
  if (clean.length <= max) return clean
  const head = clean.slice(0, max + 1)
  const sentenceEnd = Math.max(head.lastIndexOf(". "), head.lastIndexOf("! "), head.lastIndexOf("? "))
  if (sentenceEnd >= 110) return clean.slice(0, sentenceEnd + 1)
  const wordEnd = head.lastIndexOf(" ")
  return `${clean.slice(0, wordEnd > 0 ? wordEnd : max).replace(/[,;:.]$/, "")}…`
}

export function pageMetadata({ title, description: rawDescription, path, noindex = false }: PageMeta): Metadata {
  const fullTitle = brandTitle(title)
  const description = trimDescription(rawDescription)
  const canonical = absoluteUrl(path)
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical },
    robots: noindex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: "en_ZW",
      siteName: site.name,
      title: fullTitle,
      description,
      url: canonical,
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [defaultOgImage.url],
    },
  }
}

export type Faq = { question: string; answer: string }

export function faqSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path ? absoluteUrl(item.path) : undefined,
    })),
  }
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
  areaName,
}: {
  name: string
  description: string
  path: string
  serviceType?: string
  areaName?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    serviceType: serviceType ?? "Refrigerator repair",
    url: absoluteUrl(path),
    provider: { "@id": businessId },
    areaServed: areaName
      ? { "@type": "Place", name: `${areaName}, Harare, Zimbabwe` }
      : { "@type": "City", name: "Harare" },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: { "@type": "ContactPoint", telephone: site.phonePrimaryTel, contactType: "customer service" },
      serviceUrl: absoluteUrl("/book-a-repair"),
    },
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  }
}

export function webPageSchema({
  path,
  name,
  description,
  type = "WebPage",
}: {
  path: string
  name: string
  description: string
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "FAQPage"
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en-ZW",
    isPartOf: { "@id": websiteId },
    about: { "@id": businessId },
    publisher: { "@id": businessId },
  }
}

export function itemListSchema(name: string, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  }
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": businessId,
    name: site.name,
    alternateName: "Harare Fridge Repairs & Regas",
    slogan: site.tagline,
    url: site.url,
    logo: `${site.url}/logo-square.png`,
    image: [`${site.url}/og-image.png`, `${site.url}/logo-square.png`],
    telephone: site.phonePrimaryTel,
    description:
      "Mobile fridge and freezer repairs and regassing across Harare, Zimbabwe. Home refrigerators, chest freezers and commercial refrigeration, 24 hours a day, 7 days a week.",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.locality,
      addressRegion: site.region,
      addressCountry: site.countryCode,
    },
    areaServed: [
      { "@type": "City", name: "Harare" },
      { "@type": "Place", name: "Harare North" },
      { "@type": "Place", name: "Harare South" },
      { "@type": "Place", name: "Harare East" },
      { "@type": "Place", name: "Harare West" },
      { "@type": "Place", name: "Chitungwiza" },
      { "@type": "Place", name: "Ruwa" },
      { "@type": "Place", name: "Norton" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phonePrimaryTel,
        contactType: "customer service",
        areaServed: "ZW",
        availableLanguage: ["English", "Shona"],
      },
      {
        "@type": "ContactPoint",
        telephone: site.phoneSecondaryTel,
        contactType: "customer service",
        areaServed: "ZW",
        availableLanguage: ["English", "Shona"],
      },
    ],
    sameAs: [site.googleUrl, site.facebookUrl],
    currenciesAccepted: "USD, ZWG",
    paymentAccepted: "Cash, EcoCash, bank transfer",
    knowsAbout: [
      "Fridge repairs",
      "Fridge regassing",
      "Freezer repairs",
      "Compressor replacement",
      "Thermostat replacement",
      "Commercial refrigeration repairs",
      "Cold room repairs",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fridge repair services in Harare",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fridge repairs", url: absoluteUrl("/fridge-repairs") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fridge regassing", url: absoluteUrl("/fridge-regassing") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Freezer repairs", url: absoluteUrl("/freezer-repairs") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Compressor replacement", url: absoluteUrl("/compressor-replacement") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Thermostat replacement", url: absoluteUrl("/thermostat-replacement") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial fridge repairs", url: absoluteUrl("/commercial-fridge-repairs") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "24 hour fridge repairs", url: absoluteUrl("/24-hour-fridge-repairs") } },
      ],
    },
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: site.url,
    name: site.name,
    inLanguage: "en-ZW",
    publisher: { "@id": businessId },
  }
}
