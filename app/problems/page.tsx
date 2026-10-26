import type { Metadata } from "next"
import { ContentPageView } from "@/components/content-page"
import { JsonLd } from "@/components/json-ld"
import type { ContentPage } from "@/lib/content/model"
import { problemLink, problems } from "@/lib/content/problems"
import { serviceLinks } from "@/lib/content/services"
import { itemListSchema, pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

const page: ContentPage = {
  path: "/problems",
  title: "Common Fridge Problems & Fixes | Not Cooling, Leaking, Noisy",
  description:
    "What is wrong with your fridge? Plain-English guides to the fridge and freezer faults we repair most in Harare: not cooling, leaking water, noisy, freezing food, not switching on, ice build-up and more.",
  eyebrow: "Fridge problems explained",
  h1: "Fridge Problems: What They Mean and How We Fix Them",
  lead:
    "Pick the symptom that matches your fridge or freezer. Each guide explains the likely causes, what you can safely check yourself, what not to do, and how our Harare technicians repair it at your home.",
  points: ["Written by fridge technicians", "Safe checks you can do first", "Honest view on repair versus replace", "Same-day repairs across Harare"],
  picture: "diagnostics",
  pictureAlt: "Technician diagnosing a fridge fault in a Harare kitchen",
  crumbs: [{ name: "Home", path: "/" }, { name: "Fridge problems" }],
  sections: [
    {
      kind: "cards",
      heading: "Choose your fridge or freezer symptom",
      items: problems.map(problemLink),
      columns: 3,
    },
    {
      kind: "text",
      heading: "Why the symptom matters more than the brand",
      paragraphs: [
        "Two fridges with the same fault behave the same way whether they are a Defy or a Samsung. A warm fridge with a running compressor points to refrigerant, airflow or defrost problems. A silent fridge points to the supply, thermostat, relay or compressor. Water on the floor points to a blocked drain or a door that is not sealing. Reading the symptom correctly is most of the diagnosis.",
        "That is why we ask you to describe exactly what the fridge is doing when you call or WhatsApp. It helps us bring the right parts and it often means the repair is finished on the first visit.",
      ],
    },
    {
      kind: "cards",
      heading: "Services that fix these problems",
      items: serviceLinks,
      columns: 3,
    },
  ],
  faqs: [
    {
      question: "Can I fix any of these problems myself?",
      answer:
        "Some simple things, yes: clearing a blocked drain hole, cleaning dusty condenser coils, checking the plug and socket, and making sure the door closes and seals. Anything involving refrigerant, the compressor, wiring or the control board should be left to a technician. Each guide lists the safe checks.",
    },
    {
      question: "My fridge has more than one symptom. Which guide should I read?",
      answer:
        "Start with the one that appeared first, because faults cascade. A failing door seal causes ice build-up, which blocks airflow, which makes the fridge warm and the compressor run constantly. Or simply call us and describe everything you have noticed.",
    },
    {
      question: "How do I know if the fridge is worth repairing?",
      answer:
        "If the cabinet, doors and insulation are sound, most faults are worth repairing. Our guide on repairing versus replacing a fridge walks through the decision, and we always tell you honestly when a repair does not make sense.",
    },
  ],
  cta: {
    title: "Not sure what is wrong?",
    text: `Describe the symptom to us on ${site.phonePrimaryDisplay} or WhatsApp and we will tell you what it is likely to be and when we can come out.`,
  },
  pageType: "CollectionPage",
}

export const metadata: Metadata = pageMetadata({ title: page.title, description: page.description, path: page.path })

export default function ProblemsHub() {
  return (
    <>
      <JsonLd data={itemListSchema("Fridge problems we repair", problems.map((p) => ({ name: p.name, path: `/problems/${p.slug}` })))} />
      <ContentPageView page={page} />
    </>
  )
}
