import type { PictureKey } from "@/components/pictures"
import { site } from "@/lib/site"
import { areaSeeds } from "./areas/seeds"
import type { ContentPage, ContentSection, Faq, LinkItem } from "./model"
import { getFridgeType, typeLink, type FridgeTypeRecord } from "./types"

/**
 * Commercial fridge repairs by type of business. Each page explains how
 * refrigeration is used and fails in that trade, then links to the unit
 * types, repairs and business districts that matter to it.
 */
export type IndustryRecord = {
  slug: string
  /** Plural business name, e.g. "Restaurants and takeaways". */
  name: string
  /** Short label for links, e.g. "Restaurants". */
  shortName: string
  /** One business of this kind, for the call to action, e.g. "restaurant". */
  singular: string
  cardText: string
  title: string
  description: string
  h1: string
  lead: string
  points: string[]
  intro: string[]
  /** Fridge type slugs this trade relies on. */
  units: string[]
  faults: string[]
  habits: { title: string; text: string }[]
  faqs: Faq[]
  /** Area slugs where this trade is concentrated. */
  areas: string[]
  picture: PictureKey
  pictureAlt: string
}

export const industries: IndustryRecord[] = [
  {
    slug: "restaurants-and-takeaways",
    singular: "restaurant",
    name: "Restaurants and takeaways",
    shortName: "Restaurants and takeaways",
    cardText: "Kitchen fridges, prep counters, freezers and cold rooms that cannot fail mid-service.",
    title: "Restaurant Fridge Repairs Harare | Kitchen Refrigeration 24/7",
    description:
      "Fridge and freezer repairs for restaurants, takeaways and fast food kitchens in Harare: under-counter fridges, prep tables, freezers and cold rooms, 24/7.",
    h1: "Fridge Repairs for Restaurants and Takeaways in Harare",
    lead:
      "In a restaurant kitchen a warm fridge is a food safety problem first and a repair second. Harare Fridge Repairs works on kitchen refrigeration across Harare: under-counter fridges on the line, saladettes, upright kitchen fridges, chest freezers and small cold rooms, at hours that suit service.",
    points: [
      "Visits before opening, after closing or overnight",
      "Kitchen units cleaned of grease and flour as part of the repair",
      "Prep tables, under-counter, upright and cold room repairs",
      "Clear explanation and price before parts are fitted",
    ],
    intro: [
      "Kitchen fridges live in the hardest conditions in any building. The air around them is hot, greasy and full of flour, doors and drawers are opened hundreds of times a shift, and units are often pushed tight against ovens and fryers. Condensers clog, fans slow down, gaskets tear and compressors overheat, and the first sign is often a high temperature reading during the lunch or dinner rush.",
      "Most of the breakdowns we attend in kitchens start small: a condenser furred with grease, a fan that has started to squeal, a drawer seal that no longer grips. Caught at that stage, they are short repairs. Left until the unit stops, they become a compressor, a lost day of prep and stock in the bin.",
      "Takeaways and fast food outlets add chest freezers for chips and patties, drinks chillers out front, and sometimes an ice machine. We repair all of them, so one call covers the whole site.",
    ],
    units: ["under-counter-fridge-repairs", "prep-table-fridge-repairs", "commercial-upright-fridge-repairs", "chest-freezer-repairs", "cold-room-repairs", "beverage-chiller-repairs"],
    faults: [
      "Line fridge or saladette rising above safe temperature during service",
      "Condenser and fan blades caked with grease and flour",
      "Freezer drawers or doors iced up from worn gaskets",
      "Cold room not pulling down after a delivery",
      "Compressor tripping on overload next to hot equipment",
      "Water pooling under units from blocked drains",
    ],
    habits: [
      { title: "Give units room to breathe", text: "Leave a gap behind and beside each fridge, and keep it away from fryers and ovens where you can. Hot air around the condenser is the biggest single cause of kitchen fridge failures." },
      { title: "Clean the condenser on a schedule", text: "In a busy kitchen the condenser can clog in a few months. A regular clean costs far less than a compressor." },
      { title: "Check door and drawer seals weekly", text: "Torn or flattened seals let warm, moist air in, which ices the evaporator and makes the unit run flat out." },
      { title: "Log temperatures at opening and closing", text: "A simple written log shows a unit drifting warm days before it fails, and it is useful when health inspectors visit." },
    ],
    faqs: [
      {
        question: "Can you repair our kitchen fridges outside service hours?",
        answer:
          "Yes. We regularly visit kitchens before opening, between services, after closing and overnight so repairs do not stop the line. For a genuine emergency during service, call and we will do our best to come straight away.",
      },
      {
        question: "Do you repair cold rooms for restaurants?",
        answer:
          "Yes, small and medium cold rooms and freezer rooms with monoblock or split units. Our cold room page explains what we cover.",
      },
      {
        question: "Can you look after all the fridges on our site?",
        answer:
          "Yes. We can check and clean every unit on one visit and suggest a regular servicing schedule based on how hard your kitchen works them.",
      },
    ],
    areas: ["harare-cbd", "the-avenues", "borrowdale", "avondale", "eastlea", "msasa", "belgravia", "westgate"],
    picture: "condenser",
    pictureAlt: "Technician cleaning the condenser of a commercial kitchen fridge",
  },

  {
    slug: "hotels-and-lodges",
    singular: "hotel or lodge",
    name: "Hotels, lodges and guest houses",
    shortName: "Hotels and lodges",
    cardText: "Kitchen cold rooms, bar fridges, room minibars and ice machines for guests.",
    title: "Hotel & Lodge Fridge Repairs Harare | Minibars to Cold Rooms",
    description:
      "Fridge repairs for hotels, lodges and guest houses in Harare: kitchen cold rooms, bar fridges, room minibars, ice machines and freezers, repaired 24/7.",
    h1: "Fridge Repairs for Hotels, Lodges and Guest Houses in Harare",
    lead:
      "A hotel or lodge runs more refrigeration than most people realise: a kitchen with cold rooms and freezers, a bar with underbar fridges and an ice machine, and a small fridge in every room. Harare Fridge Repairs repairs all of it, working quietly around guests, at any hour.",
    points: [
      "Room minibars and bar fridges repaired in place",
      "Kitchen cold rooms, freezers and upright fridges",
      "Ice machines and bar refrigeration",
      "Discreet visits that fit around guests and events",
    ],
    intro: [
      "Hospitality refrigeration splits into three worlds. Back of house, the kitchen depends on cold rooms, upright fridges and freezers holding stock for days. Front of house, the bar needs underbar fridges, bottle coolers and ice. And in the rooms, small minibars and bar fridges run around the clock, often in tight cupboards with almost no ventilation.",
      "Each fails in its own way. Cold rooms suffer from door seals, iced evaporators and condensing units baking on a roof in the sun. Bar units clog with dust and spilled drinks. Room fridges are mostly absorption or small compressor units that slowly lose cooling in enclosed cabinets, and a guest complaint is usually the first anyone hears of it.",
      "For lodges and guest houses just outside town, a breakdown before a wedding or a conference weekend is the worst timing. Call as soon as a unit drifts warm, and we will plan the repair around your bookings.",
    ],
    units: ["cold-room-repairs", "commercial-upright-fridge-repairs", "bar-fridge-repairs", "underbar-fridge-repairs", "ice-machine-repairs", "wine-cooler-repairs"],
    faults: [
      "Room fridges not cooling in enclosed cupboards",
      "Cold room temperature creeping up during busy weekends",
      "Ice machine slowing down or stopping before an event",
      "Underbar fridges warm and noisy from dirty condensers",
      "Freezer rooms iced up around the door",
      "Wine coolers in restaurants holding the wrong temperature",
    ],
    habits: [
      { title: "Ventilate room fridges", text: "A minibar boxed into joinery with no air gap will always struggle. A vent at the top and bottom of the cupboard makes a big difference." },
      { title: "Plan servicing before your busy season", text: "Have cold rooms, bar fridges and the ice machine checked before peak weekends and conference periods, not during them." },
      { title: "Keep cold room doors shut", text: "Propping the door during deliveries floods the room with warm, humid air, which ices the evaporator." },
      { title: "Report a warm room fridge early", text: "A guest's comment about a warm minibar is often the first sign of a fault. Early repairs are simpler." },
    ],
    faqs: [
      {
        question: "Do you repair hotel room minibars?",
        answer:
          "Yes. We repair minibars and small bar fridges in rooms, both compressor and absorption types, and we check the cupboard ventilation that often causes them to fail.",
      },
      {
        question: "Can you come at night or on a weekend?",
        answer:
          "Yes. We work 24 hours a day, including weekends and public holidays, and can plan a visit around guests and events.",
      },
      {
        question: "Do you cover lodges outside the city?",
        answer:
          "We cover Harare and nearby towns such as Ruwa, Norton, Domboshava and Mazowe. Tell us where you are when you call and we will confirm.",
      },
    ],
    areas: ["borrowdale", "highlands", "harare-cbd", "avondale", "mount-pleasant", "ruwa", "domboshava", "mazowe"],
    picture: "compressorTest",
    pictureAlt: "Technician testing the compressor of a commercial fridge",
  },

  {
    slug: "supermarkets-and-tuck-shops",
    singular: "shop",
    name: "Supermarkets, tuck shops and grocers",
    shortName: "Supermarkets and tuck shops",
    cardText: "Multidecks, display freezers, drinks chillers and chest freezers on the shop floor.",
    title: "Supermarket & Tuck Shop Fridge Repairs Harare | Chillers 24/7",
    description:
      "Fridge repairs for supermarkets, tuck shops and grocers in Harare: multideck chillers, display and chest freezers, drinks coolers and cold rooms, 24/7.",
    h1: "Fridge Repairs for Supermarkets, Tuck Shops and Grocers in Harare",
    lead:
      "On a shop floor, refrigeration is stock. A multideck that warms overnight or a chest freezer of meat that stops on a Saturday afternoon is money lost by the hour. Harare Fridge Repairs repairs shop refrigeration across Harare, from a single drinks cooler in a tuck shop to a row of display chillers in a supermarket.",
    points: [
      "Multidecks, display freezers and drinks coolers",
      "Chest freezers for meat, chicken and ice",
      "Back-of-shop cold rooms",
      "Night and weekend callouts so the shop keeps trading",
    ],
    intro: [
      "Shop fridges work harder than any home fridge. They are opened all day by customers, they often stand near doors and windows in the afternoon sun, and the condensers collect every bit of dust from the floor and the street. Open-fronted multidecks rely on an air curtain that is easily broken by stock stacked past the load line.",
      "In tuck shops and smaller grocers, the bread-and-butter units are glass door drinks coolers and chest freezers. Their most common faults are dirty condensers, failed fan motors, worn gaskets on the sliding lids or doors, start relays damaged by power cuts, and, on older units, slow refrigerant leaks.",
      "Power is the other big issue. When the electricity returns after load shedding, every unit in the shop starts at once on a sagging supply. Voltage protectors with a start delay and staggered restarts save a lot of compressors.",
    ],
    units: ["multideck-chiller-repairs", "display-freezer-repairs", "beverage-chiller-repairs", "chest-freezer-repairs", "butchery-display-fridge-repairs", "cold-room-repairs"],
    faults: [
      "Multideck warm at the top shelves or iced at the back",
      "Drinks cooler running all day but not getting cold",
      "Chest freezer stopped after a power cut",
      "Display freezer lids misting and not sealing",
      "Fans noisy or stopped in display cabinets",
      "Cold room struggling in hot weather",
    ],
    habits: [
      { title: "Respect the load line", text: "Stacking stock above the line on a multideck breaks the air curtain and warms the whole cabinet." },
      { title: "Keep condensers clear", text: "Sweep and clean around the bottom grilles. Dust-choked condensers are the commonest shop fridge fault." },
      { title: "Stagger restarts after power cuts", text: "Switch units back on one at a time, or fit voltage protectors with a start delay, so compressors do not all start on low voltage." },
      { title: "Shade units from direct sun", text: "A cooler in the afternoon sun near the shop door works far harder and fails sooner." },
    ],
    faqs: [
      {
        question: "Can you repair the drinks fridge supplied by a beverage company?",
        answer:
          "If the cooler belongs to the supplier, check your agreement first, because many suppliers have their own service arrangements. For coolers you own, we repair them like any other.",
      },
      {
        question: "Our chest freezer stopped after load shedding. Is it the compressor?",
        answer:
          "Often it is the start relay or overload, which are cheaper than a compressor and replaced on site. Our guide to protecting fridges from power cuts explains how to prevent it.",
      },
      {
        question: "Do you work in Mbare, Highfield and the other busy trading areas?",
        answer:
          "Yes. We attend shops across Harare, including Mbare, Highfield, Glen View, Kuwadzana, Chitungwiza and the city centre.",
      },
    ],
    areas: ["mbare", "highfield", "glen-view", "kuwadzana", "chitungwiza", "harare-cbd", "budiriro", "warren-park"],
    picture: "collageCommercial",
    pictureAlt: "Commercial display fridge serviced by Harare Fridge Repairs",
  },

  {
    slug: "bars-and-bottle-stores",
    singular: "bar or bottle store",
    name: "Bars, bottle stores and clubs",
    shortName: "Bars and bottle stores",
    cardText: "Underbar fridges, bottle coolers, ice machines and keg-room chillers.",
    title: "Bar & Bottle Store Fridge Repairs Harare | Underbar & Coolers",
    description:
      "Fridge repairs for bars, bottle stores, clubs and sports bars in Harare: underbar fridges, bottle coolers, ice machines and cold rooms, repaired 24/7.",
    h1: "Fridge Repairs for Bars, Bottle Stores and Clubs in Harare",
    lead:
      "Nobody buys a warm beer twice. When the underbar fridge or the bottle cooler goes warm on a Friday night, the bar loses sales on every round. Harare Fridge Repairs repairs bar and bottle store refrigeration across Harare, including late at night and on weekends.",
    points: [
      "Underbar and back bar bottle coolers",
      "Glass door drinks chillers and chest freezers",
      "Ice machines that slow down or stop",
      "Late night and weekend callouts",
    ],
    intro: [
      "Bar fridges have a tough life. They sit under counters with little air, collect spilled drinks and dust in the condenser, and are opened constantly at the busiest times. A sticky, dusty condenser and a struggling fan are behind most of the warm-beer calls we get.",
      "Bottle stores lean on rows of glass door coolers and chest freezers, often running near the door in the heat of the day. Sports bars and clubs add ice machines, keg-room chillers and wine coolers. On big match days or long weekends, all of it runs flat out at once.",
      "We carry the common parts for bar units, such as fans, thermostats, relays, gaskets and refrigerant, so most repairs are finished in one visit, ideally before you open.",
    ],
    units: ["underbar-fridge-repairs", "beverage-chiller-repairs", "ice-machine-repairs", "bar-fridge-repairs", "wine-cooler-repairs", "cold-room-repairs"],
    faults: [
      "Underbar fridge warm at night when the bar is full",
      "Bottle cooler running nonstop with frost on the back panel",
      "Ice machine producing slowly or not dropping ice",
      "Condenser fans clogged with dust and spilled drinks",
      "Glass door gaskets torn or doors not closing",
      "Units tripping the power on busy nights",
    ],
    habits: [
      { title: "Clean under the bar", text: "Spills and dust glue themselves to underbar condensers. A regular clean keeps beers cold on the busiest nights." },
      { title: "Load cold, not warm", text: "Restock coolers well before opening so the fridge is not trying to chill a full load during service." },
      { title: "Descale the ice machine", text: "Hard water and dirt slow ice production. Clean and descale it on the schedule the maker recommends." },
      { title: "Check door closers", text: "Glass doors that do not close themselves leak cold air all night." },
    ],
    faqs: [
      {
        question: "Can you come to the bar late at night?",
        answer:
          "Yes. We work 24 hours a day, including weekends and public holidays, and understand that a warm cooler on a busy night is urgent.",
      },
      {
        question: "Why is our underbar fridge warm only when the bar is busy?",
        answer:
          "Usually a dirty condenser or a slow fan. The unit copes when it is quiet but cannot shed heat when the doors are opened constantly and the bar is hot. A clean and fan check usually fixes it.",
      },
      {
        question: "Do you repair ice machines in bars?",
        answer:
          "Yes. Our ice machine page explains the common faults and how we repair them on site.",
      },
    ],
    areas: ["harare-cbd", "avondale", "borrowdale", "msasa", "mbare", "highfield", "eastlea", "kopje"],
    picture: "regassing",
    pictureAlt: "Technician repairing commercial bar refrigeration",
  },

  {
    slug: "bakeries-and-cafes",
    singular: "bakery or cafe",
    name: "Bakeries, cafes and coffee shops",
    shortName: "Bakeries and cafes",
    cardText: "Cake displays, under-counter milk fridges, freezers for dough and drinks chillers.",
    title: "Bakery & Cafe Fridge Repairs Harare | Cake Displays & Freezers",
    description:
      "Fridge repairs for bakeries, cafes and coffee shops in Harare: cake display fridges, under-counter milk fridges, dough freezers and drinks chillers, 24/7.",
    h1: "Fridge Repairs for Bakeries, Cafes and Coffee Shops in Harare",
    lead:
      "A cafe counter is a shop window. When the cake display mists up or the milk fridge under the coffee machine goes warm, customers notice straight away. Harare Fridge Repairs repairs cafe and bakery refrigeration across Harare, often before you open the doors.",
    points: [
      "Curved and straight glass cake displays",
      "Under-counter milk and dessert fridges",
      "Freezers for dough, pastry and ice cream",
      "Early morning visits before opening",
    ],
    intro: [
      "Cake displays are some of the most delicate fridges in a shop. They have to keep cream and mousse cold while showing them through large panes of glass, in warm, bright cafes with the doors open. The glass, the fans and the humidity all matter. Misting glass, a dry or sweating display and a cabinet that is cold at the bottom and warm at the top are the usual complaints.",
      "Behind the counter, coffee shops rely on small under-counter fridges for milk, often right beside a hot espresso machine. That position cooks the condenser, and a fridge that was fine in winter struggles in October. Bakeries add freezers for dough and pastry, where a few hours of warmth can ruin a batch.",
      "Flour dust is the bakery's own enemy. It coats condensers and fan blades quickly, so units in or near the bakehouse need cleaning far more often than in a normal shop.",
    ],
    units: ["cake-display-fridge-repairs", "under-counter-fridge-repairs", "prep-table-fridge-repairs", "upright-freezer-repairs", "beverage-chiller-repairs", "ice-machine-repairs"],
    faults: [
      "Cake display glass misting or running with water",
      "Display cold at the base but warm on the top shelf",
      "Milk fridge under the coffee machine not holding temperature",
      "Dough freezer icing up or not freezing",
      "Fans clogged with flour dust",
      "Display lights and glass heaters not working",
    ],
    habits: [
      { title: "Keep hot equipment away", text: "Give under-counter fridges a gap from espresso machines and ovens, and keep their vents clear." },
      { title: "Clean flour from condensers", text: "In bakeries, brush and vacuum condensers and fan blades often. Flour builds up faster than ordinary dust." },
      { title: "Close display doors", text: "Rear doors on cake displays left open let warm, humid air in and mist the glass." },
      { title: "Fill displays with cold product", text: "Putting warm cakes straight into a display makes it sweat and work hard." },
    ],
    faqs: [
      {
        question: "Why does the glass on our cake display keep misting?",
        answer:
          "Warm, humid air is meeting cold glass. Common causes are a failed glass heater or fan, doors left open, or a display placed near the entrance. We test the heaters, fans and controls.",
      },
      {
        question: "Can you repair the fridge under our coffee machine?",
        answer:
          "Yes. Under-counter milk fridges usually struggle because of heat from the coffee machine and a clogged condenser. Cleaning, a fan check and better ventilation often fix it.",
      },
      {
        question: "Can you come before we open?",
        answer:
          "Yes. Early morning visits are common for cafes and bakeries, so the repair is done before the first customer arrives.",
      },
    ],
    areas: ["harare-cbd", "avondale", "borrowdale", "mount-pleasant", "highlands", "belgravia", "milton-park", "greendale"],
    picture: "temperature",
    pictureAlt: "Technician checking the temperature of a commercial display fridge",
  },
]

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug)
}

export function industryPath(industry: IndustryRecord) {
  return `/commercial-fridge-repairs/${industry.slug}`
}

export function industryLink(industry: IndustryRecord): LinkItem {
  return { href: industryPath(industry), label: `Fridge repairs for ${industry.shortName.toLowerCase()}`, text: industry.cardText }
}

const areaNames = new Map(areaSeeds.map((seed) => [seed.slug, seed.name]))

export function buildIndustryPage(industry: IndustryRecord): ContentPage {
  const units = industry.units
    .map((slug) => getFridgeType(slug))
    .filter((type): type is FridgeTypeRecord => Boolean(type))
    .map(typeLink)
  const others = industries.filter((item) => item.slug !== industry.slug).map(industryLink)
  const areaLinks: LinkItem[] = industry.areas
    .filter((slug) => areaNames.has(slug))
    .map((slug) => ({ href: `/areas/${slug}`, label: areaNames.get(slug) as string }))

  const sections: ContentSection[] = [
    { kind: "text", heading: `How refrigeration fails in ${industry.name.toLowerCase()}`, paragraphs: industry.intro },
    {
      kind: "cards",
      heading: `Units we repair for ${industry.shortName.toLowerCase()}`,
      intro: "Each type of unit has its own page with the faults we see and how we repair them.",
      items: units,
      columns: 3,
    },
    { kind: "list", heading: "Faults we are called out for most", items: industry.faults, columns: 2 },
    {
      kind: "steps",
      heading: "Habits that prevent breakdowns",
      intro: "Simple things your staff can do between our visits.",
      items: industry.habits,
    },
    {
      kind: "chips",
      heading: "Repairs and servicing for business fridges",
      items: [
        { href: "/fridge-servicing", label: "Planned fridge servicing" },
        { href: "/fridge-fan-motor-replacement", label: "Fan motor replacement" },
        { href: "/fridge-door-seal-replacement", label: "Door seal replacement" },
        { href: "/fridge-defrost-repairs", label: "Defrost system repairs" },
        { href: "/fridge-regassing", label: "Leak repair and regassing" },
        { href: "/compressor-replacement", label: "Compressor replacement" },
        { href: "/24-hour-fridge-repairs", label: "24 hour emergency repairs" },
      ],
    },
    {
      kind: "chips",
      heading: "Where we work",
      intro: `We attend ${industry.name.toLowerCase()} in every part of Harare. These are some of the areas where we work most for this trade.`,
      items: [...areaLinks, { href: "/areas", label: "All Harare areas" }],
    },
    {
      kind: "cards",
      heading: "Other businesses we repair fridges for",
      items: [
        ...others,
        { href: "/commercial-fridge-repairs", label: "All commercial fridge repairs", text: "Every type of commercial refrigeration we repair in Harare." },
      ],
      columns: 3,
    },
  ]

  return {
    path: industryPath(industry),
    title: industry.title,
    description: industry.description,
    eyebrow: "Commercial fridge repairs",
    h1: industry.h1,
    lead: industry.lead,
    points: industry.points,
    picture: industry.picture,
    pictureAlt: industry.pictureAlt,
    crumbs: [
      { name: "Commercial fridge repairs", path: "/commercial-fridge-repairs" },
      { name: industry.shortName, path: industryPath(industry) },
    ],
    sections,
    faqs: industry.faqs,
    faqHeading: `Questions from ${industry.shortName.toLowerCase()}`,
    cta: {
      title: `Fridge down at your ${industry.singular}?`,
      text: `Call ${site.phonePrimaryDisplay} or WhatsApp the unit type and your area. We attend businesses across Harare, 24 hours a day.`,
    },
    whatsappMessage: `Hi Harare Fridge Repairs, I need a commercial fridge repair. Business type: ${industry.shortName}. Unit: ___ Area: ___`,
    schema: {
      serviceName: `Fridge repairs for ${industry.name.toLowerCase()} in Harare`,
      serviceDescription: industry.description,
      serviceType: "Commercial refrigeration repair",
    },
  }
}
