import type { ContentPage } from "./model"

export type AdviceRecord = ContentPage & { slug: string; shortName: string; cardText: string }

export const advicePages: AdviceRecord[] = [
  {
    slug: "fridge-regassing-cost-harare",
    shortName: "Fridge regassing cost",
    cardText: "What decides the price of a regas in Harare, and why the cheapest quote is rarely the cheapest repair.",
    path: "/fridge-regassing-cost-harare",
    title: "Fridge Regassing Cost in Harare | What Decides the Price",
    description:
      "How much does fridge regassing cost in Harare? Learn what decides the price, from the type of gas and leak repair to the size of the system, and why a cheap top up costs more in the end. Call 0782 886 252 for a quote.",
    eyebrow: "Prices and advice",
    h1: "How Much Does Fridge Regassing Cost in Harare?",
    lead:
      "Everyone wants a number, and we understand that. The honest answer is that a proper regas is priced after the technician has tested the fridge, because the price depends on what is actually wrong. This page explains what goes into the cost, so you can compare quotes properly and avoid paying twice.",
    points: [
      "Priced after a test, before any work starts",
      "Leak repair, filter drier, vacuum and gas all included in our quote",
      "Different gases and system sizes cost different amounts",
      "No hidden callout surprises",
    ],
    picture: "regassing",
    pictureAlt: "Technician regassing a fridge with manifold gauges in a Harare home",
    crumbs: [{ name: "Fridge regassing cost", path: "/fridge-regassing-cost-harare" }],
    whatsappMessage: "Hi Harare Fridge Repairs, please can I get a quote for regassing. My suburb is: ___ and the fridge is: ___",
    sections: [
      {
        kind: "text",
        heading: "Why regassing is not one price",
        paragraphs: [
          "A fridge that needs gas has a leak. A proper regas therefore has five parts: finding the leak, repairing it, replacing the filter drier, pulling a vacuum, and charging the correct weight of the correct refrigerant. The price of each part varies with the fridge. A pinhole at a brazed joint on a small single door fridge is a quick repair. A corroded evaporator in a chest freezer or a cold room with a long pipe run is not.",
          "The gas itself varies too. R134a and R600a for household fridges are modest in quantity and cost. Commercial freezers and cold rooms use R404A or R452A in larger quantities, and older systems on R22 need careful handling because that gas is being phased out. The size of the charge follows the size of the system, from under 60 grams in a small combi to several kilograms in a cold room.",
          "Finally, the fault may not be gas at all. Our technician measures the pressures and temperatures first. If the fridge is actually suffering from a failed fan, a blocked defrost drain or a stuck thermostat, you will be quoted for that instead, and it is usually cheaper.",
        ],
      },
      {
        kind: "list",
        heading: "What decides the price of a regas",
        intro: "When you compare quotes, ask whether each of these is included. Many cheap regas offers include only the last item.",
        items: [
          "Leak detection with an electronic detector, soap test or nitrogen pressure test",
          "Repair of the leak: brazing a joint, replacing a pipe section or replacing a leaking component",
          "A new filter drier, which should be replaced every time a system is opened",
          "Vacuum with a pump to remove air and moisture before charging",
          "The correct refrigerant, charged by weight to the figure on the rating plate",
          "The type of gas: R134a, R600a, R290, R404A, R452A or R22",
          "The size of the system: bar fridge, household fridge, chest freezer, commercial cabinet or cold room",
          "Access and time: a built in fridge or a cold room takes longer than a free standing fridge",
        ],
      },
      {
        kind: "feature",
        eyebrow: "The expensive cheap option",
        heading: "Why a cheap top up costs more",
        paragraphs: [
          "A top up without a leak repair puts gas into a system that is still leaking. It feels like a bargain for two or three weeks, and then the fridge is warm again and the money is gone. Worse, a system that is topped up without a vacuum takes in air and moisture, which forms ice blockages in the capillary and acid in the oil, and the compressor fails months later. At that point the cheap regas has cost you a compressor.",
          "Our price includes the leak repair, the drier, the vacuum and the charge. It is sometimes higher than a quick top up quoted over the phone, and it is nearly always lower than the total you pay when the top up fails. If you have been regassed recently and the fridge is warm again, tell us; it changes the diagnosis.",
        ],
        picture: "rearService",
        pictureAlt: "Technician working on the pipework and compressor at the back of a fridge",
        reverse: true,
      },
      {
        kind: "steps",
        heading: "How you get a price from us",
        items: [
          { title: "Call or WhatsApp", text: "Tell us the type of fridge, the brand and the symptoms. We will tell you honestly whether it sounds like a gas problem." },
          { title: "Test on site", text: "The technician measures pressures and temperatures and confirms whether the system is low on gas and where it is leaking." },
          { title: "Fixed price quoted", text: "You get the full price for the leak repair, drier, vacuum and charge before any work starts. No surprises later." },
          { title: "Repair and test", text: "The work is done on site and the fridge is run to temperature so you can see it cooling before we leave." },
        ],
      },
      {
        kind: "chips",
        heading: "Read next",
        items: [
          { href: "/does-my-fridge-need-regassing", label: "Does my fridge need regassing?" },
          { href: "/fridge-regassing", label: "Our regassing service" },
          { href: "/fridge-repair-or-replace", label: "Repair or replace?" },
          { href: "/problems/fridge-not-cooling", label: "Fridge not cooling" },
          { href: "/chest-freezer-repairs", label: "Chest freezer repairs" },
          { href: "/cold-room-repairs", label: "Cold room repairs" },
        ],
      },
    ],
    faqs: [
      {
        question: "Can you give me a regassing price over the phone?",
        answer:
          "We can give you an idea of the range for your type of fridge once we know the brand and the symptoms, and we will tell you if it does not sound like a gas problem at all. The firm price follows the test on site, before any work is done.",
      },
      {
        question: "Is there a charge if the fridge does not need gas?",
        answer:
          "The callout and diagnosis are explained to you when you book, so there are no surprises. If the fault turns out to be something other than gas, you are quoted for that repair instead.",
      },
      {
        question: "How long should a regas last?",
        answer:
          "If the leak is repaired properly, for the rest of the fridge's life. A fridge that needs regassing every year has a leak that was never fixed.",
      },
      {
        question: "Do you regas commercial fridges and cold rooms?",
        answer:
          "Yes. Beverage chillers, display fridges, commercial uprights and cold rooms across Harare, with the correct refrigerant for each system.",
      },
    ],
    cta: {
      title: "Want an honest regassing quote?",
      text: "Call 0782 886 252 or WhatsApp us your fridge details and suburb. We test first and quote before we start.",
    },
    schema: {
      serviceName: "Fridge regassing quotes in Harare",
      serviceDescription: "Transparent regassing pricing after an on site test, including leak repair, drier, vacuum and refrigerant charge, across Harare.",
      serviceType: "Refrigerator regassing",
    },
  },

  {
    slug: "does-my-fridge-need-regassing",
    shortName: "Does my fridge need regassing?",
    cardText: "The signs that really point to low gas, and the faults that get mistaken for it every day.",
    path: "/does-my-fridge-need-regassing",
    title: "Does My Fridge Need Regassing? Real Signs vs Common Myths",
    description:
      "Does your fridge really need regassing? Learn the signs that point to a refrigerant leak and the common faults that get wrongly blamed on gas. Honest testing at your home in Harare. Call 0782 886 252.",
    eyebrow: "Prices and advice",
    h1: "Does My Fridge Need Regassing?",
    lead:
      "Probably not, if we are honest. Most fridges in Harare that are told they need gas have a different fault. A fridge does not consume refrigerant; if it is low, it is leaking, and leaks produce quite specific signs. This guide helps you tell the difference before you pay for a regas you do not need.",
    points: [
      "The four signs that point to a genuine leak",
      "The faults that are mistaken for low gas every day",
      "A simple frost pattern test you can do yourself",
      "What a proper leak test involves",
    ],
    picture: "diagnostics",
    pictureAlt: "Technician measuring fridge temperatures and compressor current to check for a gas leak",
    crumbs: [{ name: "Does my fridge need regassing?", path: "/does-my-fridge-need-regassing" }],
    whatsappMessage: "Hi Harare Fridge Repairs, I am not sure if my fridge needs gas. My suburb is: ___ and the fridge is: ___",
    sections: [
      {
        kind: "text",
        heading: "A fridge does not use up gas",
        paragraphs: [
          "The refrigerant in a fridge circulates in a sealed loop and is never consumed. It does the same job for twenty years unless it escapes through a leak. So the real question is never whether the fridge needs gas, but whether it has a leak, and that is something a technician can measure rather than guess.",
          "Low gas does produce a recognisable pattern. Cooling fades gradually over weeks rather than failing overnight. The compressor runs continuously and gets hot, because the thermostat never sees the cabinet reach temperature. The evaporator frosts only in a small patch near where the refrigerant enters, instead of evenly across its surface. And there is sometimes a faint oily mark at a pipe joint, because refrigerant carries a little compressor oil out with it.",
          "If your fridge stopped cooling suddenly, if the freezer is still cold while the fridge is warm, if the compressor is not running at all, or if there is a thick sheet of ice on the back wall of the freezer, the problem is almost certainly not gas.",
        ],
      },
      {
        kind: "list",
        heading: "Signs that really point to low gas",
        items: [
          "Cooling has got gradually worse over several weeks",
          "The compressor runs all the time and is very hot to touch",
          "Only a small patch of the evaporator or freezer plate frosts, the rest stays dry",
          "On a chest freezer, frost only on the top part of the walls",
          "An oily stain or dust stuck to oil at a pipe joint or on the compressor",
          "A faint hissing or bubbling from the evaporator when the fridge starts",
        ],
      },
      {
        kind: "list",
        heading: "Faults that get blamed on gas but are not",
        intro: "Each of these produces a warm fridge and each is cheaper to fix than a regas. Gas would not have helped.",
        items: [
          "Evaporator iced into a block because the defrost heater, timer or sensor failed",
          "Evaporator fan seized or noisy, so no cold air moves into the fridge section",
          "Thermostat or sensor not calling for cooling, compressor silent",
          "Start relay or overload failed, compressor humming and clicking",
          "Door gasket leaking so warm air pours in faster than the fridge can cool",
          "Condenser blocked with dust so the fridge cannot shed heat",
          "Damper stuck between freezer and fridge on a frost free model",
        ],
      },
      {
        kind: "feature",
        eyebrow: "What we actually do",
        heading: "How a technician confirms a leak",
        paragraphs: [
          "Our technician connects gauges to measure the suction and discharge pressures, measures the compressor current with a clamp meter, and reads temperatures across the evaporator with a thermometer. Together those numbers say clearly whether the system is short of refrigerant, whether the compressor is pumping, and whether the fault is somewhere else entirely.",
          "If the system is low, the next step is finding the leak with an electronic detector or a nitrogen pressure test, not charging gas. Once the leak is repaired, the drier replaced and the system vacuumed, the correct charge is weighed in. That is what you are paying for when you pay for a regas, and it is why the gas then stays in.",
        ],
        picture: "regassing",
        pictureAlt: "Manifold gauges connected to a fridge to measure refrigerant pressures",
        reverse: true,
      },
      {
        kind: "chips",
        heading: "Read next",
        items: [
          { href: "/fridge-regassing", label: "Our regassing service" },
          { href: "/fridge-regassing-cost-harare", label: "Regassing cost in Harare" },
          { href: "/problems/fridge-not-cooling", label: "Fridge not cooling" },
          { href: "/problems/ice-build-up", label: "Ice build up" },
          { href: "/problems/fridge-compressor-problems", label: "Compressor problems" },
          { href: "/fridge-repairs", label: "Fridge repairs" },
        ],
      },
    ],
    faqs: [
      {
        question: "How often should a fridge be regassed?",
        answer:
          "Never, in normal use. A sealed system keeps its charge for the life of the fridge. If your fridge needs gas regularly, a leak was never repaired.",
      },
      {
        question: "My fridge was regassed a month ago and is warm again. Why?",
        answer:
          "Either the leak was not repaired, the system was not vacuumed and has an ice or moisture blockage, or the wrong gas or wrong charge was used. We test the pressures and tell you which before recommending anything.",
      },
      {
        question: "Can I check for low gas myself?",
        answer:
          "You can look at the frost pattern. Even frost across the evaporator or freezer walls means the charge is probably fine. Frost only in one small patch near the inlet suggests low gas. A technician confirms it with gauges.",
      },
      {
        question: "Is regassing bad for a fridge?",
        answer:
          "Done properly, no. Done without a leak repair and vacuum, yes: air and moisture in the system shorten the compressor's life.",
      },
    ],
    cta: {
      title: "Not sure if it is gas? Let us test it properly.",
      text: "Call 0782 886 252 or WhatsApp us. We measure before we recommend anything, anywhere in Harare, 24 hours a day.",
    },
    schema: {
      serviceName: "Fridge gas leak testing in Harare",
      serviceDescription: "On site pressure and temperature testing to confirm whether a fridge in Harare has a refrigerant leak before any regassing.",
      serviceType: "Refrigerator diagnosis",
    },
  },

  {
    slug: "fridge-repair-or-replace",
    shortName: "Repair or replace?",
    cardText: "The questions to weigh up when a fridge fault is expensive, from age and cabinet condition to running cost.",
    path: "/fridge-repair-or-replace",
    title: "Fridge Repair or Replace? An Honest Guide for Harare Homes",
    description:
      "Should you repair or replace your fridge? A practical guide to age, repair cost, cabinet condition and running cost, written by Harare fridge technicians who will tell you when a repair is not worth it. Call 0782 886 252.",
    eyebrow: "Prices and advice",
    h1: "Should I Repair or Replace My Fridge?",
    lead:
      "Most fridge faults are cheap to fix and the answer is obvious. The hard cases are the expensive repairs: a compressor, a leaking evaporator, a control board on an old fridge. This guide sets out how we think about that decision, and we will give you the same honest answer at your kitchen table.",
    points: [
      "How repair cost compares with the fridge's real value",
      "Why a sound cabinet matters more than the fridge's age",
      "When an old fridge is worth keeping and when it is not",
      "The running cost question people forget",
    ],
    picture: "homeVisit",
    pictureAlt: "Technician assessing the condition of a fridge in a Harare home",
    crumbs: [{ name: "Repair or replace?", path: "/fridge-repair-or-replace" }],
    whatsappMessage: "Hi Harare Fridge Repairs, I need advice on whether to repair or replace my fridge. My suburb is: ___ and the fridge is: ___",
    sections: [
      {
        kind: "text",
        heading: "Start with the cabinet, not the age",
        paragraphs: [
          "People ask how old a fridge has to be before it is not worth repairing. Age is the wrong measure. A twenty year old KIC or Kelvinator with a sound cabinet, good insulation and a clean evaporator is a better candidate for a new compressor than a six year old budget fridge with rust creeping through the liner. What matters is whether the parts you are not replacing have years left in them.",
          "The things to look at are the cabinet and door for rust, especially at the bottom and around the hinges; the insulation, which has failed if the outside of the cabinet sweats or feels cold in patches; the evaporator and its pipework for corrosion; and the door gasket and hinges. If those are good, almost any single fault is worth repairing.",
          "The second question is the cost of the repair against what the fridge would cost to replace like for like. A rule of thumb that works well is that a repair costing less than half the price of an equivalent new fridge is worth doing on a sound cabinet. Above that, it depends on how much life is left and how the running cost compares.",
        ],
      },
      {
        kind: "list",
        heading: "Repair is usually the right call when",
        items: [
          "The fault is a thermostat, relay, fan, defrost part, gasket or drain",
          "The cabinet, door and insulation are sound with no serious rust",
          "The fridge is a quality brand or a simple, robust design",
          "The fault is a compressor on a commercial unit or a large chest freezer",
          "A replacement of the same size and quality would cost several times the repair",
          "The fridge has sentimental or design value, such as a Smeg or a built in unit",
        ],
      },
      {
        kind: "list",
        heading: "Replacement starts to make sense when",
        items: [
          "The evaporator is leaking inside the cabinet walls of an old, cheap chest freezer",
          "Rust has gone through the liner or the cabinet floor",
          "The insulation has failed and the cabinet sweats or runs constantly",
          "Two or more major parts have failed, such as a compressor and a control board",
          "The repair cost is close to the price of an equivalent new fridge",
          "An old fridge is costing far more to run than a new one would save",
        ],
      },
      {
        kind: "feature",
        eyebrow: "Our promise",
        heading: "We will tell you when not to repair",
        paragraphs: [
          "It is easy for a repair business to fit an expensive part to a fridge that will fail elsewhere within the year. We would rather lose the job. When our technician finds a fault that is not worth repairing, you are told so plainly, with the reasons, and you decide. If a repair is borderline, we explain what else is likely to go and roughly when.",
          "If you do replace, we can tell you which brands and types we see fail least in Harare conditions, and what to look for in a fridge that will cope with load shedding. That advice is free with the visit.",
        ],
        picture: "doorSeal",
        pictureAlt: "Technician checking the door and cabinet condition of a fridge",
        reverse: true,
      },
      {
        kind: "chips",
        heading: "Read next",
        items: [
          { href: "/compressor-replacement", label: "Compressor replacement" },
          { href: "/fridge-regassing-cost-harare", label: "Regassing cost" },
          { href: "/problems/fridge-compressor-problems", label: "Compressor problems" },
          { href: "/tips", label: "Fridge care tips" },
          { href: "/fridge-repairs", label: "Fridge repairs" },
          { href: "/chest-freezer-repairs", label: "Chest freezer repairs" },
        ],
      },
    ],
    faqs: [
      {
        question: "Is it worth replacing the compressor on a ten year old fridge?",
        answer:
          "On a good quality fridge with a sound cabinet, usually yes. A compressor replacement costs far less than an equivalent new fridge and the rest of the fridge has years left. On a cheap or rusted fridge, often not, and we will say so.",
      },
      {
        question: "Do old fridges use much more electricity?",
        answer:
          "Older fridges with worn gaskets and dirty condensers use more, but a well maintained older fridge is not as bad as people think. A new gasket and a clean condenser recover much of the difference. Very old fridges with failed insulation are the real power hogs.",
      },
      {
        question: "Will you give me an honest opinion even if it means no repair?",
        answer:
          "Yes. We tell you what we found, what it would cost, and whether we would spend the money if it were our fridge.",
      },
    ],
    cta: {
      title: "Want an honest opinion on your fridge?",
      text: "Call 0782 886 252 or WhatsApp us. A technician will assess the fridge at your home and tell you straight whether it is worth repairing.",
    },
    schema: {
      serviceName: "Fridge repair assessments in Harare",
      serviceDescription: "On site assessment of whether a faulty fridge in Harare is worth repairing or should be replaced, with honest advice.",
      serviceType: "Refrigerator assessment",
    },
  },
]

export function getAdvice(slug: string) {
  return advicePages.find((page) => page.slug === slug)
}

export const tips: { title: string; text: string }[] = [
  {
    title: "Give the fridge room to breathe",
    text: "Leave at least a hand's width behind and above the fridge and do not box it into a cupboard. The condenser needs air to shed heat; without it the compressor runs hot and long and fails early.",
  },
  {
    title: "Clean the condenser twice a year",
    text: "Unplug the fridge and brush or vacuum the dust off the coils at the back or behind the grille at the bottom. In dusty Harare suburbs this single job prevents more compressor failures than anything else.",
  },
  {
    title: "Test the door seal with a strip of paper",
    text: "Close a piece of paper in the door and pull. If it slides out easily anywhere around the gasket, the seal is leaking and the fridge is working harder than it should.",
  },
  {
    title: "Use a surge protector",
    text: "When power returns after load shedding it often spikes. A good surge protector or voltage protection plug costs a fraction of a control board or compressor and is the best insurance an electronic fridge can have.",
  },
  {
    title: "Wait before restarting after a power cut",
    text: "If you switch the fridge off during load shedding, wait five minutes after power returns before switching it back on, so the pressures in the system have equalised and the compressor can start easily.",
  },
  {
    title: "Never chip ice with a knife",
    text: "The evaporator tubing sits directly under the frost. A pierced evaporator turns a free defrost into an expensive leak repair, and on some fridges into a write off.",
  },
  {
    title: "Defrost a manual freezer before the ice is thick",
    text: "Switch off, empty, leave the door open and let the ice melt with towels on the floor. Thick ice insulates the evaporator and makes the freezer run constantly.",
  },
  {
    title: "Set the thermostat sensibly",
    text: "A fridge should hold 3 to 5 degrees and a freezer minus 18. The middle setting is right for most Harare kitchens. Turning the dial to maximum does not cool faster; it only makes the compressor run longer.",
  },
  {
    title: "Do not block the air vents inside",
    text: "On frost free fridges cold air enters through vents at the back of the compartment. Packing food against them warms one side of the fridge and freezes the other.",
  },
  {
    title: "Let hot food cool first",
    text: "A pot of hot sadza or stew in the fridge raises the temperature of everything around it and makes the compressor work for hours. Let it cool on the counter first.",
  },
  {
    title: "Keep the freezer reasonably full",
    text: "Frozen food holds cold. A full freezer rides out load shedding far better than an empty one, and bottles of water in the gaps help.",
  },
  {
    title: "Keep the drain clear",
    text: "Once a year, with the fridge off, flush the small drain hole at the back of the fridge section with warm water. A blocked drain is the usual cause of water under the drawers.",
  },
  {
    title: "Level the fridge",
    text: "Adjust the feet so the fridge leans very slightly back. The door should swing shut on its own from a few centimetres open, which stops it being left ajar.",
  },
  {
    title: "Listen for new sounds",
    text: "A hum and click every minute, a grinding fan or a new rattle are early warnings. Dealing with them early is far cheaper than dealing with the failure they lead to.",
  },
  {
    title: "Keep the fridge out of the sun and away from the stove",
    text: "Every degree of extra heat around the fridge makes it work harder. A fridge in a sunny window or next to a cooker runs much longer each day.",
  },
  {
    title: "Replace a torn gasket promptly",
    text: "A gasket is one of the cheapest parts on a fridge and one of the most important. A torn or hardened seal causes frost, water, high bills and a worn out compressor.",
  },
]
