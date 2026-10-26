import type { PictureKey } from "@/components/pictures"
import { brandLink, brands } from "@/lib/content/brands"
import type { ContentPage, ContentSection, Faq, LinkItem } from "@/lib/content/model"
import { problemLink, problems } from "@/lib/content/problems"
import { serviceLinks } from "@/lib/content/services"
import { commercialTypes, homeTypes, typeLink } from "@/lib/content/types"
import { site } from "@/lib/site"
import { joinNames, pick, rotate } from "@/lib/utils"
import type { AreaSetting, Region } from "./model"
import { areaNotes } from "./notes"
import { areaSeeds, type AreaSeed } from "./seeds"

export type { AreaSetting, Region } from "./model"

export type AreaRecord = AreaSeed & { note: string; path: string }

export type RegionRecord = {
  slug: `harare-${Region}`
  region: Region
  name: string
  shortName: string
  title: string
  description: string
  h1: string
  lead: string
  intro: string[]
  landmarks: string[]
  picture: PictureKey
  pictureAlt: string
  faqs: Faq[]
}

export const areas: AreaRecord[] = areaSeeds.map((seed) => ({
  ...seed,
  note: areaNotes[seed.slug] ?? "",
  path: `/areas/${seed.slug}`,
}))

if (process.env.NODE_ENV !== "production") {
  const missing = areas.filter((area) => !area.note).map((area) => area.slug)
  if (missing.length) {
    throw new Error(`Missing area notes for: ${missing.join(", ")}`)
  }
}

export const regions: RegionRecord[] = [
  {
    slug: "harare-north",
    region: "north",
    name: "Harare North",
    shortName: "Northern suburbs",
    title: "Fridge Repairs Harare North | Borrowdale, Mount Pleasant, Highlands",
    description:
      "Mobile fridge and freezer repairs across Harare's northern suburbs, from the Avenues to Borrowdale, Highlands, Mount Pleasant and Hatcliffe. Same-day callouts, 24/7, all brands.",
    h1: "Fridge Repairs in Harare's Northern Suburbs",
    lead:
      "From the flats of the Avenues to the big kitchens of Borrowdale Brooke, our technicians repair and regas fridges and freezers across the whole of northern Harare. Call or WhatsApp and we come to you.",
    intro: [
      "The northern suburbs are where we spend most of our day, which is why a same-day visit is usually possible. Our route regularly takes in Avondale, Mount Pleasant, Borrowdale, Highlands, Chisipite, Greystone Park and the newer estates beyond Helensvale and Hatcliffe.",
      "Fridges in the north tend to be larger and more feature-rich than average, with side by side, French door and integrated units from Samsung, LG, Bosch, Hisense and Defy. We carry the fans, sensors, relays and refrigerant to repair those models in your kitchen, and we also look after the shop chillers and display fridges at centres such as Sam Levy's Village, Avondale, Newlands and Chisipite.",
    ],
    landmarks: ["Borrowdale", "Mount Pleasant", "Highlands", "Avondale", "Chisipite", "Greystone Park", "Hatcliffe", "The Avenues"],
    picture: "frenchDoor",
    pictureAlt: "Technician repairing a French door fridge in a northern Harare kitchen",
    faqs: [
      {
        question: "How quickly can you reach the northern suburbs?",
        answer:
          "Usually within an hour or two, because at least one of our technicians is working somewhere between the Avenues and Borrowdale on most days. Call 0782 886 252 and we will give you a realistic arrival window for your suburb.",
      },
      {
        question: "Do you repair the larger imported fridges common in Borrowdale and Highlands?",
        answer:
          "Yes. Side by side, French door and integrated fridges from Samsung, LG, Bosch, Smeg and similar brands are a large part of our northern work. We test electronics and fans as well as the sealed system before recommending any part.",
      },
      {
        question: "Can you come to gated estates and complexes?",
        answer:
          "Yes. Give us the gate or security details when you book and we will arrive in a marked vehicle with identification so access is quick.",
      },
    ],
  },
  {
    slug: "harare-south",
    region: "south",
    name: "Harare South",
    shortName: "Southern suburbs",
    title: "Fridge Repairs Harare South | Hatfield, Waterfalls, Highfield",
    description:
      "Fridge and freezer repairs across southern Harare, including Hatfield, Waterfalls, Highfield, Glen View, Budiriro, Mbare, Southerton and Chitungwiza. Mobile technicians, 24/7.",
    h1: "Fridge Repairs in Harare's Southern Suburbs",
    lead:
      "Household fridges in Hatfield and Waterfalls, shop chillers in Mbare and Highfield, and commercial refrigeration in Southerton and Workington all get the same prompt, honest service from our southern route.",
    intro: [
      "Southern Harare combines some of the city's busiest residential suburbs with its main industrial belt. On a typical day we might regas a family fridge in Cranborne, replace a compressor on a tuck shop freezer in Glen View and service a canteen chiller in Willowvale.",
      "Power interruptions hit the south hard, and many of the fridge faults we see here are the result of voltage dips and surges: burnt relays, seized compressors and failed control boards. We repair the damage properly and give practical advice on protecting the fridge so it does not happen again.",
    ],
    landmarks: ["Hatfield", "Waterfalls", "Highfield", "Glen View", "Budiriro", "Mbare", "Southerton", "Chitungwiza"],
    picture: "compressorTest",
    pictureAlt: "Technician testing a fridge compressor with a multimeter",
    faqs: [
      {
        question: "Do you cover Chitungwiza and Hopley as well as the older southern suburbs?",
        answer:
          "Yes. Chitungwiza, Hopley, Southlea Park, Uplands and the other growing areas south of Waterfalls are all on our southern route. We bring parts and gas with us so the repair is finished in one visit wherever possible.",
      },
      {
        question: "Can you repair commercial fridges in Southerton, Workington and Graniteside?",
        answer:
          "Yes. We repair underbar fridges, beverage coolers, display freezers, upright commercial fridges and small cold rooms for businesses across the southern industrial areas, and we can work around your trading hours.",
      },
      {
        question: "Is a power-cut-damaged fridge worth repairing?",
        answer:
          "Usually, yes. A relay, capacitor or thermostat damaged by a surge is a modest repair, and even a compressor replacement is normally far cheaper than a new fridge. We test first and quote before any work starts.",
      },
    ],
  },
  {
    slug: "harare-east",
    region: "east",
    name: "Harare East",
    shortName: "Eastern suburbs",
    title: "Fridge Repairs Harare East | Greendale, Eastlea, Mabvuku, Msasa, Ruwa",
    description:
      "Mobile fridge and freezer repairs in eastern Harare: Greendale, Eastlea, Hillside, Mandara, Msasa, Mabvuku, Tafara, Ruwa and Zimre Park. Same-day service, 24/7 callouts.",
    h1: "Fridge Repairs in Harare's Eastern Suburbs",
    lead:
      "Our eastern route runs from Eastlea and Hillside out through Greendale and Mandara to Msasa, Mabvuku, Tafara and Ruwa, repairing household fridges and the commercial refrigeration that keeps eastern businesses trading.",
    intro: [
      "The east of Harare mixes long-established family suburbs such as Greendale, Athlone and Chadcombe with the Msasa industrial area and the fast-growing communities of Mabvuku, Tafara and Ruwa. We serve all of them with the same mobile set-up: tools, vacuum pump, refrigerant and the most common spares on board.",
      "Many eastern households have kept the same fridge for a decade or more, and repairing it is almost always the better value choice. We replace thermostats, door seals, fans and compressors at home, and we regas correctly after finding and fixing the leak rather than simply topping up.",
    ],
    landmarks: ["Greendale", "Eastlea", "Hillside", "Mandara", "Msasa", "Mabvuku", "Tafara", "Ruwa"],
    picture: "condenser",
    pictureAlt: "Technician servicing the condenser coils at the back of a fridge",
    faqs: [
      {
        question: "Do you travel to Ruwa and Zimre Park?",
        answer:
          "Yes. Ruwa and Zimre Park are part of our eastern route, and we plan those visits so the repair is completed in one trip. Call ahead with the fault and the fridge model and we will bring the likely parts.",
      },
      {
        question: "Can you service fridges for businesses in Msasa?",
        answer:
          "Yes. Canteen fridges, beverage coolers, underbar units, display freezers and small cold rooms are all within our commercial work, and we can schedule visits early or late to avoid disrupting your operation.",
      },
      {
        question: "My fridge in Greendale is old but still working. Should I repair or replace it?",
        answer:
          "If the cabinet and compressor are sound, a repair is almost always the better value. We will tell you honestly if a fridge is no longer worth fixing. Our guide on whether to repair or replace a fridge explains how we decide.",
      },
    ],
  },
  {
    slug: "harare-west",
    region: "west",
    name: "Harare West",
    shortName: "Western suburbs",
    title: "Fridge Repairs Harare West | Mabelreign, Westgate, Kuwadzana, Tynwald",
    description:
      "Fridge and freezer repairs across western Harare, including Mabelreign, Westgate, Marlborough, Belvedere, Kuwadzana, Warren Park, Dzivarasekwa, Tynwald and Norton. Mobile, 24/7.",
    h1: "Fridge Repairs in Harare's Western Suburbs",
    lead:
      "Western Harare is our largest coverage area, from Milton Park and Belvedere near the city through Mabelreign, Marlborough and Westgate to Kuwadzana, Dzivarasekwa, Tynwald and the new estates along the Bulawayo Road.",
    intro: [
      "The west has a bit of everything: settled family suburbs around Mabelreign and Marlborough, the busy Westgate hub, large high-density communities such as Kuwadzana, Warren Park and Mufakose, and new estates including Madokero, Rydale Ridge and Bloomingdale. We cover all of it, and Norton beyond.",
      "That variety means we repair every kind of fridge in the west, from a decades-old Kelvinator that needs a thermostat to a brand-new inverter fridge whose control board has failed. Pricing is explained before work starts, and we carry the parts that solve most faults on the first visit.",
    ],
    landmarks: ["Mabelreign", "Westgate", "Marlborough", "Belvedere", "Kuwadzana", "Warren Park", "Tynwald", "Norton"],
    picture: "homeVisit",
    pictureAlt: "Technician explaining a fridge repair to a customer at home",
    faqs: [
      {
        question: "Which western suburbs do you cover?",
        answer:
          "All of them, from Milton Park and Belvedere to Mabelreign, Marlborough, Westgate, Bluff Hill, Kuwadzana, Warren Park, Dzivarasekwa, Mufakose, Tynwald, Whitecliff, Madokero and out to Norton. Each has its own page below with local details.",
      },
      {
        question: "Do you repair tuck shop and salon fridges in the high-density suburbs?",
        answer:
          "Yes. Small commercial fridges, chest freezers and beverage coolers used by home businesses are a big part of our western work. We keep repairs practical and priced for the area.",
      },
      {
        question: "Can you come out to Norton?",
        answer:
          "Yes. Norton is covered on our western route. Tell us the fault and the model when you book and we will bring the likely parts and refrigerant so the job is finished in one visit.",
      },
    ],
  },
]

export const regionByKey = Object.fromEntries(regions.map((region) => [region.region, region])) as Record<
  Region,
  RegionRecord
>

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug)
}

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug)
}

export function areasInRegion(region: Region) {
  return areas.filter((area) => area.region === region)
}

export function areaLink(area: AreaRecord): LinkItem {
  return { href: area.path, label: area.name }
}

export function regionLink(region: RegionRecord): LinkItem {
  return {
    href: `/areas/${region.slug}`,
    label: region.name,
    text: `${region.shortName}: ${joinNames(region.landmarks.slice(0, 4))} and more.`,
  }
}

const areaByName = new Map(areas.map((area) => [area.name, area]))

/* ------------------------------------------------------------------ */
/* Copy variants                                                       */
/* ------------------------------------------------------------------ */

type SettingCopy = {
  homes: string[]
  fridges: string[]
  typeGroup: "home" | "commercial" | "mixed"
}

const settingCopy: Record<AreaSetting, SettingCopy> = {
  "inner-residential": {
    homes: [
      "a close-in suburb of houses, cottages and flats a few minutes from the city centre",
      "an inner suburb where family homes sit alongside flats and converted cottages",
    ],
    fridges: [
      "compact single-door and bar fridges in flats as well as full-size fridge-freezers in the houses",
      "everything from a bedsit bar fridge to a family combi",
    ],
    typeGroup: "home",
  },
  "established-suburb": {
    homes: [
      "a long-established residential suburb with family homes on generous stands",
      "a settled suburb where many households have lived, and kept the same fridge, for years",
    ],
    fridges: [
      "double-door and combi fridge-freezers, often with a chest freezer in the scullery or garage",
      "well-used family fridges that are worth repairing rather than replacing",
    ],
    typeGroup: "home",
  },
  estate: {
    homes: [
      "a newer estate of modern homes with fitted kitchens",
      "a gated or cluster development with recently built houses",
    ],
    fridges: [
      "modern frost-free and inverter fridges that depend on fans, sensors and control boards",
      "newer side by side, French door and integrated fridges that need careful diagnosis",
    ],
    typeGroup: "home",
  },
  "high-density": {
    homes: [
      "a busy, high-density suburb where many homes also run a small business",
      "a lively community of family homes, tuck shops, salons and food outlets",
    ],
    fridges: [
      "household fridge-freezers, chest freezers and the chillers that keep small businesses trading",
      "hard-working fridges that have to survive power cuts and voltage swings",
    ],
    typeGroup: "mixed",
  },
  "mixed-housing": {
    homes: [
      "a suburb that mixes older houses with newer homes and flats",
      "a residential area with a wide mix of housing and household sizes",
    ],
    fridges: [
      "a broad mix of fridge types and ages, from old Kelvinators to new Hisense and Samsung units",
      "family fridge-freezers and chest freezers in daily use",
    ],
    typeGroup: "home",
  },
  "outer-residential": {
    homes: [
      "an outer area of larger plots and newer homes where the city gives way to smallholdings",
      "a spread-out area on the edge of Harare where a workshop trip is not practical",
    ],
    fridges: [
      "fridges and freezers that households depend on for food storage between trips to town",
      "freezers that work hard in hot garages and outbuildings",
    ],
    typeGroup: "home",
  },
  "industrial-edge": {
    homes: [
      "an industrial and commercial area with factories, workshops, canteens and some housing",
      "a working district where businesses rely on refrigeration every day",
    ],
    fridges: [
      "canteen fridges, beverage coolers, underbar units, display freezers and small cold rooms",
      "commercial refrigeration that cannot be down for long, plus household units in the nearby homes",
    ],
    typeGroup: "commercial",
  },
  "cbd-adjacent": {
    homes: [
      "a dense area of flats, offices, clinics and shops beside the city centre",
      "a central district where homes and businesses share the same streets",
    ],
    fridges: [
      "apartment fridges, office kitchen units, pharmacy and clinic fridges and shop chillers",
      "small and medium fridges in flats and businesses that need a quick, tidy repair",
    ],
    typeGroup: "mixed",
  },
  cbd: {
    homes: [
      "the commercial heart of Harare, with shops, restaurants, offices and flats above them",
      "the city centre, where trading depends on refrigeration working all day",
    ],
    fridges: [
      "display fridges, beverage coolers, underbar units and the fridges in city flats and offices",
      "commercial and domestic fridges that need prompt attention during business hours",
    ],
    typeGroup: "commercial",
  },
  "campus-adjacent": {
    homes: [
      "a suburb of family homes, student houses and offices near the university",
      "a busy suburb where shared student houses sit alongside long-established family homes",
    ],
    fridges: [
      "compact fridges in shared accommodation as well as big family units and office kitchen fridges",
      "fridges of every size and age, from a student bar fridge to a premium French door unit",
    ],
    typeGroup: "home",
  },
  "outer-town": {
    homes: [
      "a town outside Harare that we cover as part of our regular route",
      "a satellite town where a dependable mobile fridge service saves a long trip into Harare",
    ],
    fridges: [
      "household fridges, shop chillers, lodge fridges and freezers",
      "domestic and small commercial refrigeration of every make",
    ],
    typeGroup: "mixed",
  },
}

const regionLabel: Record<Region, string> = {
  north: "northern Harare",
  south: "southern Harare",
  east: "eastern Harare",
  west: "western Harare",
}

const titleVariants = [
  (name: string) => `Fridge Repairs ${name} | Same-Day Fridge & Freezer Repairs`,
  (name: string) => `Fridge Repairs in ${name}, Harare | 24/7 Mobile Technicians`,
  (name: string) => `${name} Fridge Repairs & Regassing | Fast Local Service`,
  (name: string) => `Fridge Repair ${name} Harare | Regas, Compressors, All Brands`,
]

const shortTitleVariants = [
  (name: string) => `Fridge Repairs ${name} | 24/7 Mobile Technicians`,
  (name: string) => `Fridge Repairs in ${name}, Harare | Same-Day Service`,
  (name: string) => `${name} Fridge Repairs & Regassing | Harare`,
]

const descriptionVariants = [
  (name: string) =>
    `Same-day fridge and freezer repairs in ${name}, Harare. Not cooling, leaking, noisy or needs regassing? Mobile technicians, 24/7. Call 0782 886 252.`,
  (name: string) =>
    `Fridge repairs in ${name}: mobile technicians for fridges and freezers that are not cooling, icing up or leaking. Regassing and compressors on site. 24/7.`,
  (name: string) =>
    `Need a fridge technician in ${name}, Harare? We repair and regas all makes at your home or business, usually the same day. Open 24 hours. 0782 886 252.`,
]

const h1Variants = [
  (name: string) => `Fridge Repairs in ${name}`,
  (name: string) => `Fridge Repairs ${name}, Harare`,
  (name: string) => `${name} Fridge Repairs`,
]

const leadVariants = [
  (name: string, region: string) =>
    `Fast, honest fridge and freezer repairs in ${name} from technicians who are in ${region} every day. We come to your home or business with the tools, parts and refrigerant to fix most faults on the first visit.`,
  (name: string, region: string) =>
    `Fridge not cooling in ${name}? Our mobile technicians cover ${region} around the clock, diagnose the fault at your door and quote before any work starts.`,
  (name: string, region: string) =>
    `Harare Fridge Repairs serves ${name} and the rest of ${region} with same-day repairs, regassing and compressor replacement for every make of fridge and freezer.`,
  (name: string, region: string) =>
    `When a fridge or freezer fails in ${name}, call us. We cover ${region} 24 hours a day and repair in your kitchen, so there is no need to move the fridge anywhere.`,
]

const pointPool = [
  "Same-day callouts in most cases",
  "Repairs done at your home or business",
  "Quote agreed before work starts",
  "All brands, all fridge and freezer types",
  "Regassing with proper leak testing",
  "Compressor and thermostat replacement on site",
  "24/7 phone and WhatsApp",
  "Door seals, fans and control boards fitted",
]

const stepVariants = [
  [
    { title: "Call or WhatsApp", text: "Tell us the fault, the fridge make and where you are in {name}. We give an honest arrival window." },
    { title: "We diagnose at your door", text: "The technician tests the compressor, gas pressure, thermostat, fans and electrics before naming the fault." },
    { title: "You approve a clear quote", text: "The price is agreed before any part is fitted or gas is added. No surprises." },
    { title: "Repair and test", text: "Most {name} repairs are finished the same visit. We run the fridge and confirm it is holding temperature before we leave." },
  ],
  [
    { title: "Book a visit", text: "One call to 0782 886 252 or a WhatsApp message is enough. Photos of the fridge help us bring the right parts to {name}." },
    { title: "Proper diagnosis", text: "We do not guess. Pressure gauges, a multimeter and a thermometer tell us what is actually wrong." },
    { title: "Agreed price", text: "You get a quote on the spot and decide before we continue." },
    { title: "Fixed and verified", text: "We complete the repair, clean up and check the temperature pull-down before leaving your {name} home or shop." },
  ],
  [
    { title: "Get in touch", text: "Phone or WhatsApp any time of day or night. We cover {name} 24/7 for genuine emergencies." },
    { title: "On-site inspection", text: "The technician inspects the sealed system, electrics and airflow in your kitchen and explains the findings." },
    { title: "Quote first", text: "Nothing is fitted until you have agreed the price." },
    { title: "Same-visit repair", text: "We carry common spares and refrigerant so most {name} jobs do not need a second trip." },
  ],
]

const regasVariants = [
  (name: string) =>
    `A fridge that has gradually lost its chill in ${name} may be low on refrigerant, but gas does not simply run out. It leaks. We find and repair the leak, vacuum the system and recharge it to the correct weight so the repair lasts, rather than topping up a system that will fail again in a few weeks.`,
  (name: string) =>
    `Regassing is one of the most requested jobs in ${name}, and also one of the most misunderstood. We only regas after confirming the sealed system is actually low and after fixing the cause, because a straight top-up without a leak repair is money wasted.`,
  (name: string) =>
    `If your ${name} fridge runs constantly but the cabinet stays warm, low gas is one possibility among several. Our technician checks pressures and temperatures first, repairs any leak, then evacuates and recharges the system properly.`,
]

const faqPool: ((name: string, region: RegionRecord) => Faq)[] = [
  (name) => ({
    question: `How soon can you get to ${name}?`,
    answer: `In most cases the same day, and often within a couple of hours. We work ${name} as part of a daily route, so call 0782 886 252 and we will give you a realistic arrival time rather than a vague promise.`,
  }),
  (name) => ({
    question: `Do you charge a callout fee in ${name}?`,
    answer: `We explain our callout and diagnosis charge when you book, and it is confirmed before the technician sets out. If you go ahead with the repair, the quote is agreed before any work begins.`,
  }),
  (name) => ({
    question: `Can you repair my fridge at home in ${name}, or does it need to go to a workshop?`,
    answer: `Almost every repair, including regassing and compressor replacement, is done in your kitchen. We carry a vacuum pump, refrigerant, brazing equipment and common spares so the fridge never has to leave ${name}.`,
  }),
  (name) => ({
    question: `Which fridge brands do you repair in ${name}?`,
    answer: `All of them. Samsung, LG, Defy, Hisense, KIC, Kelvinator, Capri, Bosch, Whirlpool, Haier, Midea and more. If it is a fridge or freezer, we can repair it.`,
  }),
  (name) => ({
    question: `Do you fix chest freezers and upright freezers in ${name} as well as fridges?`,
    answer: `Yes. Freezers that have stopped freezing, frost up heavily or run without stopping are everyday work for us in ${name}, including the chest freezers used by small businesses.`,
  }),
  (name) => ({
    question: `Is it worth repairing an old fridge in ${name}?`,
    answer: `Usually yes, if the cabinet is sound. A thermostat, relay, fan or regas costs a fraction of a new fridge, and even a compressor replacement is normally far cheaper. We tell you honestly when a fridge is not worth fixing.`,
  }),
  (name) => ({
    question: `Do you offer emergency fridge repairs in ${name} at night or on weekends?`,
    answer: `Yes. Our phones are answered 24 hours a day, seven days a week, and we attend genuine emergencies in ${name} outside normal hours. For non-urgent faults we will book the next available daytime slot.`,
  }),
  (name) => ({
    question: `What should I do while I wait for the technician in ${name}?`,
    answer: `Keep the doors closed as much as possible, move anything valuable from the freezer into a cool box with ice if you have one, and switch the fridge off at the wall if it is making a burning smell or tripping the power.`,
  }),
  (name) => ({
    question: `Can you repair shop and restaurant fridges in ${name}?`,
    answer: `Yes. Underbar fridges, beverage coolers, display fridges, chest freezers and small cold rooms are all part of our commercial work, and we can arrange visits around your trading hours in ${name}.`,
  }),
  (name) => ({
    question: `My ${name} fridge stopped after a power cut. What is likely wrong?`,
    answer: `Voltage surges when power returns often damage the start relay, capacitor or thermostat, and sometimes the compressor itself. We test each in turn and repair only what has failed. We can also advise on surge protection.`,
  }),
  (name, region) => ({
    question: `Do you cover the suburbs around ${name} too?`,
    answer: `Yes. ${name} is part of our ${region.shortName.toLowerCase()} route, which covers the whole of ${regionLabel[region.region]}. See the Harare ${region.region[0].toUpperCase()}${region.region.slice(1)} page for every suburb we serve.`,
  }),
  (name) => ({
    question: `Will the technician have parts for my fridge in ${name}?`,
    answer: `We carry the most commonly needed parts: thermostats, relays, capacitors, fan motors, door gaskets and refrigerant. If a model-specific part such as a control board is needed, we source it quickly and return to ${name} to fit it.`,
  }),
]

const picturePool: { key: PictureKey; alt: (name: string) => string }[] = [
  { key: "compressorTest", alt: (name) => `Technician testing a fridge compressor during a repair in ${name}` },
  { key: "temperature", alt: (name) => `Technician checking fridge temperature at a home in ${name}` },
  { key: "regassing", alt: (name) => `Fridge regassing in progress in ${name}, Harare` },
  { key: "diagnostics", alt: (name) => `Technician diagnosing a fridge that is not cooling in ${name}` },
  { key: "fan", alt: (name) => `Technician inspecting a fridge evaporator fan in ${name}` },
  { key: "controlBoard", alt: (name) => `Technician testing a fridge control board in ${name}` },
  { key: "doorSeal", alt: (name) => `Technician checking a fridge door seal in ${name}` },
  { key: "compressor", alt: (name) => `Compressor replacement on a fridge in ${name}` },
  { key: "homeVisit", alt: (name) => `Technician explaining a fridge repair to a customer in ${name}` },
  { key: "condenser", alt: (name) => `Technician servicing fridge condenser coils in ${name}` },
]

/* ------------------------------------------------------------------ */
/* Page builders                                                       */
/* ------------------------------------------------------------------ */

export function buildAreaPage(area: AreaRecord): ContentPage {
  const seed = area.slug
  const region = regionByKey[area.region]
  const copy = settingCopy[area.setting]
  const regionText = regionLabel[area.region]

  const nearby = area.nearby.map((name) => areaByName.get(name)).filter((a): a is AreaRecord => Boolean(a))
  const nearbyNames = nearby.map((a) => a.name)

  const chosenProblems = rotate(problems, seed).slice(0, 6)
  const chosenBrands = rotate(brands, `${seed}-brands`).slice(0, 8)
  const typePool =
    copy.typeGroup === "commercial"
      ? [...commercialTypes, ...homeTypes]
      : copy.typeGroup === "mixed"
        ? [...homeTypes.slice(0, 5), ...commercialTypes.slice(0, 5)]
        : homeTypes
  const chosenTypes = rotate(typePool, `${seed}-types`).slice(0, 6)
  const chosenFaqs = rotate(faqPool, `${seed}-faq`)
    .slice(0, 4)
    .map((make) => make(area.name, region))
  const picture = pick(picturePool, `${seed}-picture`)
  const steps = pick(stepVariants, `${seed}-steps`).map((step) => ({
    title: step.title,
    text: step.text.replaceAll("{name}", area.name),
  }))
  const points = rotate(pointPool, `${seed}-points`).slice(0, 4)

  const intro = [
    `${area.name} is ${pick(copy.homes, seed)} in ${regionText}. Fridges here are typically ${pick(copy.fridges, `${seed}-fridges`)}, and we repair all of them on site.`,
    area.note,
  ]

  const neighbourSentence =
    nearbyNames.length > 0
      ? `Because we are also working in ${joinNames(nearbyNames.slice(0, 3))} most weeks, a visit to ${area.name} rarely has to wait.`
      : `We plan ${area.name} visits around the rest of our ${region.shortName.toLowerCase()} route so a same-day visit is realistic.`

  const sections: ContentSection[] = [
    {
      kind: "feature",
      eyebrow: `Local fridge technicians`,
      heading: `Fridge and freezer repairs we do in ${area.name}`,
      paragraphs: [
        ...intro,
        `${neighbourSentence} Every visit starts with a proper diagnosis using gauges, a multimeter and a thermometer, and you approve the price before any part is fitted.`,
      ],
      picture: picture.key,
      pictureAlt: picture.alt(area.name),
    },
    {
      kind: "cards",
      heading: `Common fridge problems in ${area.name}`,
      intro: `These are the faults we are called to most often in ${area.name} and the surrounding ${region.shortName.toLowerCase()}. Each guide explains the likely causes and what we check.`,
      items: chosenProblems.map(problemLink),
      columns: 3,
    },
    {
      kind: "steps",
      heading: `How a ${area.name} callout works`,
      items: steps,
    },
    {
      kind: "cards",
      heading: `Our fridge services in ${area.name}`,
      items: serviceLinks,
      columns: 3,
    },
    {
      kind: "text",
      heading: `Fridge regassing in ${area.name}`,
      paragraphs: [pick(regasVariants, `${seed}-regas`)(area.name)],
    },
    {
      kind: "chips",
      heading: `Fridge types we repair in ${area.name}`,
      intro:
        copy.typeGroup === "commercial"
          ? `Businesses in ${area.name} rely on us for commercial refrigeration as well as staff kitchen fridges.`
          : `From a bar fridge to a chest freezer, if it keeps food cold we repair it in ${area.name}.`,
      items: chosenTypes.map(typeLink),
    },
    {
      kind: "chips",
      heading: `Fridge brands we repair in ${area.name}`,
      intro: `We work on every make sold in Zimbabwe. These are some of the brands we see most often in ${area.name}.`,
      items: chosenBrands.map(brandLink),
    },
    {
      kind: "chips",
      heading: `Nearby areas we also cover`,
      intro: `${area.name} is part of our ${region.shortName.toLowerCase()} route.`,
      items: [regionLink(region), ...nearby.map(areaLink), { href: "/areas", label: "All Harare areas" }],
    },
  ]

  return {
    path: area.path,
    title: pick(area.name.length > 12 ? shortTitleVariants : titleVariants, `${seed}-title`)(area.name),
    description: pick(descriptionVariants, `${seed}-description`)(area.name),
    eyebrow: `${region.name} · Fridge repairs`,
    h1: pick(h1Variants, `${seed}-h1`)(area.name),
    lead: pick(leadVariants, `${seed}-lead`)(area.name, regionText),
    points,
    picture: picture.key,
    pictureAlt: picture.alt(area.name),
    crumbs: [{ name: "Home", path: "/" }, { name: "Areas", path: "/areas" }, { name: region.name, path: `/areas/${region.slug}` }, { name: area.name }],
    sections,
    faqs: chosenFaqs,
    faqHeading: `Fridge repair questions from ${area.name}`,
    cta: {
      title: `Need a fridge repaired in ${area.name}?`,
      text: `Call ${site.phonePrimaryDisplay} or send a WhatsApp with the fault and your address. We cover ${area.name} 24 hours a day and come to you.`,
    },
    whatsappMessage: `Hi, I need a fridge repair in ${area.name}. `,
    schema: {
      serviceName: `Fridge repairs in ${area.name}`,
      serviceDescription: `Mobile fridge and freezer repair, regassing and compressor replacement in ${area.name}, Harare.`,
      serviceType: "Refrigerator repair",
      areaName: area.name,
    },
  }
}

export function buildRegionPage(region: RegionRecord): ContentPage {
  const list = areasInRegion(region.region)
  const chosenProblems = rotate(problems, region.slug).slice(0, 6)
  const chosenTypes = rotate([...homeTypes, ...commercialTypes], `${region.slug}-types`).slice(0, 8)
  const chosenBrands = rotate(brands, `${region.slug}-brands`).slice(0, 10)

  return {
    path: `/areas/${region.slug}`,
    title: region.title,
    description: region.description,
    eyebrow: `${region.shortName} · ${list.length} areas`,
    h1: region.h1,
    lead: region.lead,
    points: ["Same-day callouts across the region", "Repairs done on site", "All fridge and freezer types", "24/7 phone and WhatsApp"],
    picture: region.picture,
    pictureAlt: region.pictureAlt,
    crumbs: [{ name: "Home", path: "/" }, { name: "Areas", path: "/areas" }, { name: region.name }],
    sections: [
      {
        kind: "feature",
        eyebrow: "Where we work",
        heading: `Fridge repairs across ${region.shortName.toLowerCase()}`,
        paragraphs: region.intro,
        picture: region.picture,
        pictureAlt: region.pictureAlt,
      },
      {
        kind: "chips",
        heading: `Every area we cover in ${region.name}`,
        intro: `Choose your suburb for local details, or just call us. We cover all ${list.length} areas below.`,
        items: list.map(areaLink),
      },
      {
        kind: "cards",
        heading: `Fridge problems we fix across ${region.shortName.toLowerCase()}`,
        items: chosenProblems.map(problemLink),
        columns: 3,
      },
      {
        kind: "cards",
        heading: "Our services",
        items: serviceLinks,
        columns: 3,
      },
      {
        kind: "chips",
        heading: "Fridge and freezer types",
        items: chosenTypes.map(typeLink),
      },
      {
        kind: "chips",
        heading: "Brands we repair",
        items: [...chosenBrands.map(brandLink), { href: "/brands", label: "All 24 brands" }],
      },
      {
        kind: "chips",
        heading: "Other parts of Harare",
        items: regions.filter((r) => r.slug !== region.slug).map(regionLink),
      },
    ],
    faqs: region.faqs,
    faqHeading: `Questions from ${region.shortName.toLowerCase()} customers`,
    cta: {
      title: `Fridge trouble in ${region.shortName.toLowerCase()}?`,
      text: `Call ${site.phonePrimaryDisplay} or WhatsApp us. We are in ${region.shortName.toLowerCase()} every day and can usually visit within hours.`,
    },
    whatsappMessage: `Hi, I need a fridge repair in ${region.shortName.toLowerCase()} Harare. `,
    schema: {
      serviceName: `Fridge repairs in ${region.name}`,
      serviceDescription: region.description,
      serviceType: "Refrigerator repair",
      areaName: region.name,
    },
    pageType: "CollectionPage",
  }
}
