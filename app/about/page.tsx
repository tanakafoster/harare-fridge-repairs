import type { Metadata } from "next"
import { ContentPageView } from "@/components/content-page"
import { areas, regionLink, regions } from "@/lib/content/areas"
import type { ContentPage } from "@/lib/content/model"
import { serviceLinks } from "@/lib/content/services"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

const page: ContentPage = {
  path: "/about",
  title: "About Harare Fridge Repairs | Mobile Fridge Technicians, 24/7",
  description:
    "Harare Fridge Repairs is an independent, fridge-only repair service covering the whole of Harare with mobile technicians, 24 hours a day. Learn how we work and why we specialise.",
  eyebrow: "About us",
  h1: "About Harare Fridge Repairs",
  lead:
    "We are a Harare-based team of refrigeration technicians who repair fridges and freezers, and nothing else, at homes and businesses across the city. No shop to bring the fridge to, no middlemen, just a technician at your door with the tools and parts to fix it.",
  points: ["Independent and locally run", "Fridges and freezers only", "Fully mobile across Harare", "24/7 phone and WhatsApp"],
  picture: "team",
  pictureAlt: "Harare Fridge Repairs technician ready for a callout with tool bag",
  crumbs: [{ name: "Home", path: "/" }, { name: "About" }],
  sections: [
    {
      kind: "feature",
      eyebrow: "Why only fridges",
      heading: "Specialists, by choice",
      paragraphs: [
        "General appliance repairers split their time between washing machines, stoves, microwaves and fridges, and their vans carry a little of everything. We made a different choice. By working only on refrigeration we can carry refrigerant, vacuum pumps, brazing equipment and the thermostats, relays, fans and door gaskets that fix most fridges on the first visit.",
        "It also means our technicians see the same faults, on the same models, every day. A fridge that is not cooling, a freezer icing up or a compressor that hums and clicks is familiar territory, and familiar territory means faster, more accurate repairs.",
      ],
      picture: "compressorTest",
      pictureAlt: "Technician testing a fridge compressor with a multimeter",
    },
    {
      kind: "feature",
      eyebrow: "How we work",
      heading: "Diagnose first, quote second, repair third",
      paragraphs: [
        "Every job starts with a proper diagnosis using gauges, a multimeter and a thermometer, because the symptom rarely tells the whole story. A warm fridge might need gas, or it might need a fan, a thermostat, a defrost heater or simply a clean condenser. We find out before we recommend anything.",
        "You then get a clear price for the repair and decide whether to go ahead. If a fridge is not worth repairing, we tell you so. Once the work is done, we run the fridge, check that it is pulling down to temperature and leave your kitchen or shop as we found it.",
      ],
      picture: "homeVisit",
      pictureAlt: "Technician explaining a repair to a customer in their kitchen",
      reverse: true,
    },
    {
      kind: "list",
      heading: "What we repair",
      intro: "Household and commercial refrigeration of every make and type.",
      items: [
        "Single-door, double-door and combi fridge-freezers",
        "Side by side, French door and integrated fridges",
        "Bar fridges and wine coolers",
        "Chest freezers and upright freezers",
        "Beverage chillers, underbar and under-counter fridges",
        "Display fridges and freezers, multidecks and butchery cabinets",
        "Ice machines and small cold rooms",
        `All ${24} brands sold in Zimbabwe`,
      ],
      columns: 2,
    },
    {
      kind: "cards",
      heading: "Our services",
      items: serviceLinks,
      columns: 3,
    },
    {
      kind: "cards",
      heading: `Where we work: ${areas.length} areas across Harare`,
      items: regions.map(regionLink),
      columns: 4,
    },
  ],
  faqs: [
    {
      question: "Where are you based?",
      answer:
        "We are a mobile service covering the whole of Harare. There is no shop or workshop for customers to visit; the technician comes to you with everything needed for the repair.",
    },
    {
      question: "Are you an authorised agent for any brand?",
      answer:
        "No. We are an independent repairer, which means we can work on every make and are free to recommend the best part and the most sensible fix for your fridge.",
    },
    {
      question: "How do I get in touch?",
      answer: `Call ${site.phonePrimaryDisplay} or ${site.phoneSecondaryDisplay} at any time, send a WhatsApp, or use the booking form on this site. You can also find us on Google and Facebook.`,
    },
  ],
  cta: {
    title: "Talk to a fridge technician now",
    text: `Call ${site.phonePrimaryDisplay} or WhatsApp us. We are open 24 hours a day and cover every part of Harare.`,
  },
  pageType: "AboutPage",
}

export const metadata: Metadata = pageMetadata({ title: page.title, description: page.description, path: page.path })

export default function AboutPage() {
  return <ContentPageView page={page} />
}
