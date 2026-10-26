import type { Metadata } from "next"
import { ContentPageView } from "@/components/content-page"
import { regionLink, regions } from "@/lib/content/areas"
import type { ContentPage } from "@/lib/content/model"
import { commercialTypes, typeLink } from "@/lib/content/types"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

const page: ContentPage = {
  path: "/commercial-fridge-repairs",
  title: "Commercial Fridge Repairs Harare | Chillers, Displays, Cold Rooms",
  description:
    "Commercial fridge repairs in Harare for shops, restaurants, bars, butcheries, bakeries and pharmacies: underbar fridges, beverage chillers, multidecks, display freezers, ice machines and cold rooms. 24/7 callouts.",
  eyebrow: "For businesses",
  h1: "Commercial Fridge Repairs in Harare",
  lead:
    "When a chiller fails, stock and sales are on the line. Our technicians attend businesses across Harare around the clock, diagnose on site and carry the parts and refrigerant to get display fridges, underbar units, freezers and small cold rooms running again fast.",
  points: ["24/7 emergency response", "Work around your trading hours", "All commercial unit types", "Clear quote before work starts"],
  picture: "compressorTest",
  pictureAlt: "Technician testing the compressor of a commercial stainless steel fridge",
  crumbs: [{ name: "Home", path: "/" }, { name: "Commercial fridge repairs" }],
  sections: [
    {
      kind: "cards",
      heading: "Commercial refrigeration we repair",
      items: commercialTypes.map(typeLink),
      columns: 3,
    },
    {
      kind: "feature",
      eyebrow: "Who we work for",
      heading: "Bottle stores, restaurants, butcheries, pharmacies and more",
      paragraphs: [
        "Our commercial customers include tuck shops and bottle stores with a row of beverage coolers, restaurants and bars with underbar and under-counter fridges, butcheries with display cabinets and chest freezers, bakeries and cafes with cake displays, supermarkets with multideck chillers, and pharmacies and clinics with temperature-critical fridges.",
        "Commercial units run long hours in warm, dusty and busy environments, so condenser cleaning, fan replacement, door gasket renewal and regassing after a leak repair are the jobs we do most. We also replace compressors, thermostats and controllers on site.",
      ],
      picture: "condenser",
      pictureAlt: "Technician cleaning and servicing condenser coils",
    },
    {
      kind: "steps",
      heading: "How a commercial callout works",
      items: [
        { title: "Call any time", text: "Our line is open 24/7. Tell us the unit type, the symptom and whether stock is at risk so we can prioritise." },
        { title: "Rapid diagnosis", text: "The technician checks refrigerant pressures, compressor amps, fans, controls and door seals, then explains the fault." },
        { title: "Quote and approval", text: "You approve the price before parts are fitted. For multi-unit sites we can give a combined quote." },
        { title: "Repair and temperature check", text: "We repair, clean up and confirm the cabinet is pulling down to the correct temperature before leaving." },
      ],
    },
    {
      kind: "list",
      heading: "Faults we see most in commercial fridges",
      items: [
        "Cabinet not holding temperature during busy trading",
        "Compressor running constantly or cutting out on overload",
        "Blocked or dirty condensers in hot back rooms",
        "Evaporator icing from worn door gaskets or failed defrost",
        "Failed fan motors in display cabinets and multidecks",
        "Controller and thermostat faults",
        "Refrigerant leaks in older units",
        "Ice machines producing slowly or not at all",
      ],
      columns: 2,
    },
    {
      kind: "chips",
      heading: "Business areas we cover",
      intro: "From the city centre and Msasa to Southerton, Westgate and Borrowdale, we attend commercial sites across Harare.",
      items: [
        ...regions.map(regionLink),
        { href: "/areas/harare-cbd", label: "Harare CBD" },
        { href: "/areas/msasa", label: "Msasa" },
        { href: "/areas/southerton", label: "Southerton" },
        { href: "/areas/workington", label: "Workington" },
        { href: "/areas/westgate", label: "Westgate" },
        { href: "/areas/graniteside", label: "Graniteside" },
        { href: "/areas/willowvale", label: "Willowvale" },
        { href: "/areas/mbare", label: "Mbare" },
      ],
    },
  ],
  faqs: [
    {
      question: "Can you come outside trading hours?",
      answer:
        "Yes. We attend early mornings, evenings and weekends so repairs do not interrupt trading, and we respond to genuine emergencies at any hour.",
    },
    {
      question: "Do you offer servicing contracts for multiple units?",
      answer:
        "We can arrange regular condenser cleaning and checks for sites with several fridges. Contact us with the number and type of units and we will suggest a schedule.",
    },
    {
      question: "Can you repair a walk-in cold room?",
      answer:
        "Yes, small and medium cold rooms with monoblock or split condensing units. Our cold room page explains what we cover.",
    },
    {
      question: "What should we do while waiting for the technician?",
      answer:
        "Keep doors closed, move the most valuable or perishable stock to a working unit if you have one, and switch the fridge off at the wall if it is tripping power or smells of burning.",
    },
  ],
  cta: {
    title: "Commercial fridge down?",
    text: `Call ${site.phonePrimaryDisplay} now. We prioritise businesses with stock at risk and attend 24 hours a day across Harare.`,
  },
  whatsappMessage: "Hi, I need a commercial fridge repair. Business type: ___ Unit type: ___ Area: ___ ",
  schema: {
    serviceName: "Commercial fridge repairs in Harare",
    serviceDescription:
      "Repair of commercial refrigeration including underbar fridges, beverage chillers, display fridges and freezers, multideck chillers, ice machines and cold rooms across Harare.",
    serviceType: "Commercial refrigeration repair",
  },
}

export const metadata: Metadata = pageMetadata({ title: page.title, description: page.description, path: page.path })

export default function CommercialPage() {
  return <ContentPageView page={page} />
}
