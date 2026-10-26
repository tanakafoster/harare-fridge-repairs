import type { Metadata } from "next"
import { ContentPageView } from "@/components/content-page"
import { JsonLd } from "@/components/json-ld"
import { brandLink, brands } from "@/lib/content/brands"
import type { ContentPage } from "@/lib/content/model"
import { problemLink, problems } from "@/lib/content/problems"
import { serviceLinks } from "@/lib/content/services"
import { itemListSchema, pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

const page: ContentPage = {
  path: "/brands",
  title: "Fridge Brands We Repair in Harare | Samsung, LG, Defy & More",
  description: `Independent repairs for all ${brands.length} fridge brands sold in Zimbabwe: Samsung, LG, Defy, Hisense, KIC, Kelvinator, Capri, Bosch, Whirlpool, Haier, Midea, Smeg and more. Mobile across Harare, 24/7.`,
  eyebrow: "All makes and models",
  h1: "Fridge Repairs for Every Brand in Harare",
  lead:
    "Whatever badge is on the door, the compressor, thermostat, fans and sealed system behind it follow the same principles, and we repair them all. Pick your brand for model-specific notes, or just call us with the make and the fault.",
  points: [`${brands.length} brands covered`, "Genuine or quality compatible parts", "Independent, not tied to any manufacturer", "Repairs done at your home or business"],
  picture: "controlBoard",
  pictureAlt: "Technician testing the control board of a modern fridge",
  crumbs: [{ name: "Home", path: "/" }, { name: "Brands" }],
  sections: [
    {
      kind: "cards",
      heading: "Choose your fridge brand",
      items: brands.map(brandLink),
      columns: 4,
    },
    {
      kind: "text",
      heading: "An independent repairer for every make",
      paragraphs: [
        "Harare Fridge Repairs is an independent service and is not an authorised agent for any manufacturer. That independence works in your favour: we can repair any brand, we are not limited to one parts catalogue, and we give you a straight answer on whether a fault is worth fixing.",
        "Where a brand has a known weak point, such as a particular fan motor, defrost sensor or control board, our brand pages say so. We carry the parts that fail most often across the popular makes and source model-specific components quickly for the rest.",
      ],
    },
    {
      kind: "cards",
      heading: "Problems we fix on every brand",
      items: problems.slice(0, 6).map(problemLink),
      columns: 3,
    },
    {
      kind: "cards",
      heading: "Our services",
      items: serviceLinks,
      columns: 3,
    },
  ],
  faqs: [
    {
      question: "Do you use genuine parts?",
      answer:
        "Where a genuine part is available in Zimbabwe at a sensible price and lead time, we fit it. Where it is not, we fit a quality compatible part and tell you that is what we are doing. Universal parts such as thermostats, relays and capacitors are standard across brands.",
    },
    {
      question: "My fridge is still under manufacturer warranty. Should I call you?",
      answer:
        "Check your warranty terms first, because an independent repair may affect cover. If the warranty has expired or does not apply, we are happy to help.",
    },
    {
      question: "Do you repair brands not listed here?",
      answer:
        "Yes. The list covers the makes we see most often in Harare, but a fridge is a fridge. Call us with the brand and the symptom and we will tell you how we can help.",
    },
  ],
  cta: {
    title: "Tell us the brand and the fault",
    text: `Call ${site.phonePrimaryDisplay} or WhatsApp a photo of the rating plate inside the fridge and we will bring the right parts.`,
  },
  pageType: "CollectionPage",
}

export const metadata: Metadata = pageMetadata({ title: page.title, description: page.description, path: page.path })

export default function BrandsHub() {
  return (
    <>
      <JsonLd data={itemListSchema("Fridge brands repaired", brands.map((b) => ({ name: b.name, path: `/${b.slug}` })))} />
      <ContentPageView page={page} />
    </>
  )
}
