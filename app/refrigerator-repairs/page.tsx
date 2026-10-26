import type { Metadata } from "next"
import { ContentPageView } from "@/components/content-page"
import { JsonLd } from "@/components/json-ld"
import type { ContentPage } from "@/lib/content/model"
import { problemLink, problems } from "@/lib/content/problems"
import { serviceLinks } from "@/lib/content/services"
import { commercialTypes, fridgeTypes, homeTypes, typeLink } from "@/lib/content/types"
import { itemListSchema, pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

const page: ContentPage = {
  path: "/refrigerator-repairs",
  title: "Refrigerator Repairs Harare | Every Fridge & Freezer Type Repaired",
  description: `Refrigerator repairs in Harare for all ${fridgeTypes.length} fridge and freezer types: single and double door, combi, side by side, French door, bar fridges, wine coolers, chest and upright freezers, chillers, underbar and display fridges, cold rooms.`,
  eyebrow: "Repairs by fridge type",
  h1: "Refrigerator Repairs in Harare for Every Type of Fridge and Freezer",
  lead:
    "A bar fridge, a French door fridge and a butchery display cabinet fail in different ways and need different parts. Choose your type of refrigerator below for the faults we see most, how we repair them and what to check before you call.",
  points: [`${homeTypes.length} household types`, `${commercialTypes.length} commercial types`, "Repairs done where the unit stands", "24/7 callouts across Harare"],
  picture: "sideBySide",
  pictureAlt: "Technician repairing a side by side refrigerator",
  crumbs: [{ name: "Home", path: "/" }, { name: "Refrigerator repairs" }],
  sections: [
    {
      kind: "cards",
      heading: "Household fridges and freezers",
      intro: "The fridges found in Harare kitchens, sculleries and garages.",
      items: homeTypes.map(typeLink),
      columns: 3,
    },
    {
      kind: "cards",
      heading: "Commercial refrigeration",
      intro: "Units that keep shops, restaurants, bars, butcheries and pharmacies trading. See also our commercial fridge repairs page.",
      items: commercialTypes.map(typeLink),
      columns: 3,
    },
    {
      kind: "feature",
      eyebrow: "Why type matters",
      heading: "Different fridges, different failure points",
      paragraphs: [
        "A simple single-door fridge with a manual defrost has a compressor, a thermostat, a relay and a sealed system, and not much else. A modern frost-free French door fridge adds evaporator and condenser fans, a defrost heater and sensor, a damper, an ice maker, a water valve and a control board, each of which can fail on its own.",
        "Commercial units add long running hours, heavy door traffic, dusty condensers and, in display cabinets, lighting and glass heating circuits. Knowing which type you have tells our technician which faults are likely and which parts to bring.",
      ],
      picture: "fan",
      pictureAlt: "Technician inspecting the evaporator fan of a frost-free fridge",
    },
    {
      kind: "cards",
      heading: "Symptoms common to all types",
      items: problems.slice(0, 6).map(problemLink),
      columns: 3,
    },
    {
      kind: "cards",
      heading: "Services",
      items: serviceLinks,
      columns: 3,
    },
  ],
  faqs: [
    {
      question: "Is a freezer repaired the same way as a fridge?",
      answer:
        "The principles are the same, but freezers run colder, so refrigerant charge, thermostat range and defrost behaviour differ. Chest freezers in particular are very repairable because the mechanical parts are simple and accessible.",
    },
    {
      question: "Can you repair built-in and integrated fridges?",
      answer:
        "Yes. Integrated units need careful removal of panels and trim, which we do without damaging the cabinetry. Tell us it is integrated when you book so we allow the extra time.",
    },
    {
      question: "Do you repair fridges that run on inverters or solar?",
      answer:
        "Yes. We check that the supply is suitable for the fridge as part of the diagnosis, because an undersized inverter or poor wiring can cause faults that look like a failed compressor.",
    },
  ],
  cta: {
    title: "Which fridge do you have?",
    text: `Tell us the type, the brand and the symptom on ${site.phonePrimaryDisplay} or WhatsApp and we will be on our way.`,
  },
  pageType: "CollectionPage",
}

export const metadata: Metadata = pageMetadata({ title: page.title, description: page.description, path: page.path })

export default function TypesHub() {
  return (
    <>
      <JsonLd data={itemListSchema("Refrigerator types repaired", fridgeTypes.map((t) => ({ name: t.name, path: `/${t.slug}` })))} />
      <ContentPageView page={page} />
    </>
  )
}
