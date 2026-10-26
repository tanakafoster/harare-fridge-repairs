import type { Metadata } from "next"
import { ContentPageView } from "@/components/content-page"
import { JsonLd } from "@/components/json-ld"
import { areaLink, areas, areasInRegion, regionLink, regions } from "@/lib/content/areas"
import type { ContentPage, ContentSection } from "@/lib/content/model"
import { serviceLinks } from "@/lib/content/services"
import { itemListSchema, pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

const regionSections: ContentSection[] = regions.map((region) => ({
  kind: "chips",
  heading: `${region.name}: ${region.shortName.toLowerCase()}`,
  intro: `${areasInRegion(region.region).length} areas including ${region.landmarks.slice(0, 5).join(", ")}.`,
  items: [regionLink(region), ...areasInRegion(region.region).map(areaLink)],
}))

const page: ContentPage = {
  path: "/areas",
  title: `Fridge Repair Areas in Harare | ${areas.length} Suburbs, All Regions`,
  description: `Harare Fridge Repairs covers ${areas.length} suburbs and towns across northern, southern, eastern and western Harare, plus Chitungwiza, Ruwa and Norton. Find your area for same-day mobile fridge repairs.`,
  eyebrow: "Where we work",
  h1: "Fridge Repairs Across Every Part of Harare",
  lead:
    "We are a mobile service with no shop to bring your fridge to, which means we come to you wherever you are in Harare. Choose your region or suburb below for local details, or simply call and tell us where you are.",
  points: [`${areas.length} suburbs and towns covered`, "Technicians on daily routes in all four regions", "Same-day callouts in most areas", "24/7 phone and WhatsApp"],
  picture: "hero",
  pictureAlt: "Harare Fridge Repairs technician arriving at a home in Harare",
  crumbs: [{ name: "Home", path: "/" }, { name: "Areas" }],
  sections: [
    {
      kind: "cards",
      heading: "Harare by region",
      intro: "Our technicians work daily routes through four regions so that a visit to any suburb is realistic the same day.",
      items: regions.map(regionLink),
      columns: 4,
    },
    ...regionSections,
    {
      kind: "cards",
      heading: "What we do when we get there",
      items: serviceLinks,
      columns: 3,
    },
  ],
  faqs: [
    {
      question: "My suburb is not on the list. Do you still cover it?",
      answer:
        "Almost certainly. The list covers the areas we visit most, but we serve the whole of Harare and the surrounding towns. Call 0782 886 252 and tell us where you are.",
    },
    {
      question: "Do you charge more for suburbs further out?",
      answer:
        "We explain the callout charge for your area when you book, before the technician sets out, so there are no surprises. Repairs themselves are quoted on site before any work starts.",
    },
    {
      question: "Can you come to a business premises or only homes?",
      answer:
        "Both. We repair fridges in homes, shops, restaurants, bars, butcheries, pharmacies, offices and factories across all four regions.",
    },
  ],
  cta: {
    title: "Wherever you are in Harare, we come to you",
    text: `Call ${site.phonePrimaryDisplay} or WhatsApp your suburb and the fault. We will tell you when the nearest technician can be with you.`,
  },
  pageType: "CollectionPage",
}

export const metadata: Metadata = pageMetadata({ title: page.title, description: page.description, path: page.path })

export default function AreasHub() {
  return (
    <>
      <JsonLd data={itemListSchema("Areas covered by Harare Fridge Repairs", areas.map((a) => ({ name: a.name, path: a.path })))} />
      <ContentPageView page={page} />
    </>
  )
}
