import type { AdviceRecord } from "./advice"

const added = { datePublished: "2026-11-06", dateModified: "2026-11-06" }

/** Advice guides added from the SEO gap review (November 2026). */
export const moreAdvice: AdviceRecord[] = [
  {
    slug: "protect-fridge-from-load-shedding",
    article: added,
    shortName: "Protect your fridge from load shedding",
    cardText: "Surge protectors, restart delays, inverters and simple habits that save compressors and boards.",
    path: "/protect-fridge-from-load-shedding",
    title: "How to Protect Your Fridge From Load Shedding and Surges",
    description:
      "Practical ways to protect a fridge from load shedding, power surges and low voltage in Harare: surge protectors with restart delay, voltage protectors, inverters and safe restart habits. Advice from fridge technicians.",
    eyebrow: "Load shedding advice",
    h1: "How to Protect Your Fridge From Load Shedding",
    lead:
      "Most of the fridges we repair after load shedding did not need to fail. A few inexpensive precautions and some simple habits protect the compressor and the control board from the moment of greatest risk: when the power comes back. This guide explains what works, what to buy and what to avoid.",
    points: [
      "Why the restart is more dangerous than the outage",
      "Surge protectors, delay timers and voltage protectors explained",
      "Running a fridge on an inverter or solar safely",
      "Keeping food safe during long outages",
    ],
    picture: "controlBoard",
    pictureAlt: "Fridge control board, the part most often damaged by load shedding surges",
    crumbs: [{ name: "Protect your fridge from load shedding", path: "/protect-fridge-from-load-shedding" }],
    whatsappMessage: "Hi Harare Fridge Repairs, I would like advice on protecting my fridge from load shedding. My suburb is: ___",
    sections: [
      {
        kind: "text",
        heading: "Why load shedding damages fridges",
        paragraphs: [
          "A fridge compressor is designed to start when the pressures inside the system are roughly equal. After it stops, that takes a few minutes. If the power goes off and comes back quickly, or flickers on and off, the compressor tries to start against full pressure. It draws several times its normal current, overheats and relies on the overload protector to cut it off. Do that hundreds of times and the relay, the overload and eventually the compressor wear out.",
          "The returning supply is also rarely clean. It can spike above normal voltage for an instant, sag well below it while every appliance on the street starts at once, or bounce on and off. Spikes damage electronic control boards. Long periods of low voltage make the compressor run hot and struggle.",
        ],
      },
      {
        kind: "steps",
        heading: "Protection that works, from cheapest up",
        items: [
          { title: "Switch off during unstable power", text: "If your area's power tends to flicker when it returns, switch the fridge off at the wall when the outage starts and back on a few minutes after the supply is steady. It costs nothing." },
          { title: "Plug-in surge protector with restart delay", text: "A fridge surge protector absorbs spikes and holds the fridge off for a few minutes after power returns, so the compressor always starts with equal pressures. This is the single most useful purchase for most homes." },
          { title: "Voltage protector with low and high cut-out", text: "For areas with long brownouts, a protector that disconnects the fridge when voltage is too low or too high stops the compressor overheating. Many combine surge and delay functions." },
          { title: "Whole-house surge protection", text: "An electrician can fit surge arrestors at the distribution board. They protect everything, but still pair them with a delay unit at the fridge." },
          { title: "Inverter or solar backup", text: "Running the fridge from a pure sine wave inverter keeps it cold through the outage and avoids the restart altogether. Size it properly for the compressor's starting current." },
        ],
      },
      {
        kind: "list",
        heading: "What to avoid",
        items: [
          "Cheap multi-plugs sold as surge protectors with no rating or delay function",
          "Modified sine wave inverters for fridges, which make compressors run hot and noisy",
          "Switching the fridge off and on again quickly to 'reset' it",
          "Plugging the fridge into the same extension as a kettle, heater or iron",
          "Leaving a fridge that clicks and fails to start trying for hours",
        ],
        columns: 1,
      },
      {
        kind: "text",
        heading: "Keeping food safe during long outages",
        paragraphs: [
          "Keep the doors shut. A closed fridge holds a safe temperature for around four hours, and a full chest freezer for a day or more. Bottles of frozen water in the freezer add thermal mass and help. Group the most perishable food together so you can find it quickly when you do open the door.",
          "When the power returns, check the temperature before trusting the food. Meat, fish, milk and cooked food that have been above 5 degrees for several hours should be thrown away.",
        ],
      },
      {
        kind: "chips",
        heading: "Related pages",
        items: [
          { href: "/fridge-power-surge-repairs", label: "Power surge repairs" },
          { href: "/problems/fridge-not-working-after-power-cut", label: "Fridge not working after a power cut" },
          { href: "/fridge-on-solar-inverter", label: "Running a fridge on solar or an inverter" },
          { href: "/fridge-control-board-repairs", label: "Control board repairs" },
          { href: "/tips", label: "Fridge care tips" },
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best surge protector for a fridge?",
        answer:
          "Choose one made for fridges and freezers that has both surge protection and a restart delay of a few minutes, and ideally a low-voltage cut-out. Check its current rating covers your fridge. Avoid unbranded multi-plugs with no stated rating.",
      },
      {
        question: "Should I unplug my fridge during load shedding?",
        answer:
          "If your fridge is on a delay protector, there is no need. Without one, switching it off at the wall when the outage begins and back on a few minutes after the power is steady is a free and effective habit.",
      },
      {
        question: "Can load shedding damage an inverter fridge?",
        answer:
          "Inverter fridges start more gently, so the compressor suffers less, but their electronics are more sensitive to spikes. A surge protector is still worthwhile.",
      },
      {
        question: "My fridge already failed after a power cut. What now?",
        answer:
          "Switch it off and keep the doors closed. Most damage is in the starting parts or the control board, which are repairable. Call 0782 886 252 and a technician will test it at your address.",
      },
    ],
    cta: {
      title: "Fridge already damaged by load shedding?",
      text: "Call or WhatsApp 0782 886 252. We repair surge damage across Harare, 24 hours a day, and can advise on the right protection while we are there.",
    },
    pageType: "WebPage",
  },

  {
    slug: "fridge-repair-cost-harare",
    article: added,
    shortName: "Fridge repair cost",
    cardText: "What decides the price of a fridge repair in Harare, and how to compare quotes fairly.",
    path: "/fridge-repair-cost-harare",
    title: "Fridge Repair Cost in Harare | What Decides the Price",
    description:
      "How much does a fridge repair cost in Harare? What decides the price, from the fault and the part to the fridge type, and how to compare quotes so you do not pay twice. Free advice on repair or replace. Call 0782 886 252.",
    eyebrow: "Prices and advice",
    h1: "How Much Does a Fridge Repair Cost in Harare?",
    lead:
      "The fair answer is that it depends on what has failed, and nobody can price that honestly before testing the fridge. What we can do is explain what drives the cost, which repairs are usually modest and which are major, so that you can judge a quote and decide whether a repair is worth it.",
    points: [
      "Price agreed after diagnosis, before any work starts",
      "Small parts such as relays, fans and seals cost far less than sealed system work",
      "Brand, fridge type and part availability affect the price",
      "Honest advice when a repair is not worth it",
    ],
    picture: "diagnostics",
    pictureAlt: "Technician diagnosing a fridge fault before quoting a repair in Harare",
    crumbs: [{ name: "Fridge repair cost", path: "/fridge-repair-cost-harare" }],
    whatsappMessage: "Hi Harare Fridge Repairs, please can I get an idea of the repair cost. The fridge is: ___ the problem is: ___ and my suburb is: ___",
    sections: [
      {
        kind: "text",
        heading: "Why fridge repairs are priced after diagnosis",
        paragraphs: [
          "Two fridges with the same symptom can have repairs that differ several times over in price. A fridge that is not cooling may need a defrost sensor, a fan motor, a thermostat, a leak repair and regas, or a compressor. Quoting before testing either means guessing, or quoting high to cover every possibility.",
          "Our technician diagnoses the fault at your address, explains what has failed and gives you the full price for the repair before any work starts. If you decide not to go ahead, you only pay for the callout and diagnosis.",
        ],
      },
      {
        kind: "list",
        heading: "What decides the price",
        items: [
          "The part that failed, and whether it is a generic part or brand specific",
          "Whether the repair is electrical or in the sealed gas system",
          "The fridge type: a single door fridge is simpler than a French door or side by side",
          "Inverter compressors and electronic boards, which cost more than older mechanical parts",
          "Part availability in Harare, and whether a part must be ordered in",
          "For commercial units, the size of the system and the refrigerant it uses",
        ],
        columns: 1,
      },
      {
        kind: "steps",
        heading: "Repairs from usually modest to usually major",
        intro: "A rough guide to how repairs compare with each other. The quote for your fridge comes after testing.",
        items: [
          { title: "Usually modest", text: "Door seal replacement, start relay or overload, thermostat on an older fridge, clearing a blocked drain, a fan motor, a defrost sensor or bimetal." },
          { title: "Moderate", text: "Defrost heater on a heavily iced fridge, electronic sensors and dampers, control board repair, display board replacement." },
          { title: "Major", text: "Leak repair with filter drier, vacuum and regas, main control board or inverter board replacement, and compressor replacement, which is the largest repair on any fridge." },
        ],
      },
      {
        kind: "text",
        heading: "How to compare quotes fairly",
        paragraphs: [
          "Ask what fault the technician found and how they confirmed it. A quote for regassing with no mention of finding and repairing the leak, or of replacing the filter drier, is a quote for a repair that will probably fail again. A compressor quote with no winding or pressure test is a guess.",
          "Ask what the price includes: parts, labour, gas, the callout, and any guarantee on the work. The cheapest quote is only the cheapest repair if it fixes the fault that is actually there.",
        ],
      },
      {
        kind: "chips",
        heading: "Related pages",
        items: [
          { href: "/fridge-regassing-cost-harare", label: "Fridge regassing cost" },
          { href: "/fridge-repair-or-replace", label: "Repair or replace?" },
          { href: "/compressor-replacement", label: "Compressor replacement" },
          { href: "/fridge-servicing", label: "Fridge servicing" },
          { href: "/book-a-repair", label: "Book a repair" },
        ],
      },
    ],
    faqs: [
      {
        question: "Can you give me a price over the phone?",
        answer:
          "We can give you a fair idea if you tell us the brand, the fridge type and exactly what it is doing, and send a photo of the model label on WhatsApp. A firm price comes after the technician has tested the fridge, and you agree it before any work starts.",
      },
      {
        question: "Do I pay if I decide not to repair?",
        answer:
          "You pay for the callout and diagnosis only. Many customers find that useful even when they decide to replace the fridge, because they then know exactly what failed.",
      },
      {
        question: "Is it worth repairing an old fridge?",
        answer:
          "Often it is. A modest repair on a sound fridge is good value at almost any age. A major repair on an old fridge with rusting cabinets or failing seals is often not. Our repair or replace guide explains how to decide.",
      },
      {
        question: "Which currencies and payment methods do you accept?",
        answer: "We accept US dollars and ZWG, by cash, EcoCash or bank transfer.",
      },
    ],
    cta: {
      title: "Want a straight answer on cost?",
      text: "Call or WhatsApp 0782 886 252 with the brand, the fridge type and the problem. We will tell you what it is likely to involve, then confirm the price on site before any work starts.",
    },
    pageType: "WebPage",
  },

  {
    slug: "fridge-on-solar-inverter",
    article: added,
    shortName: "Fridges on solar and inverters",
    cardText: "Running a fridge on an inverter, battery or solar system without damaging the compressor.",
    path: "/fridge-on-solar-inverter",
    title: "Running a Fridge on Solar or an Inverter | Harare Guide",
    description:
      "Can you run a fridge on solar or an inverter in Harare? What size inverter a fridge needs, why pure sine wave matters, inverter fridges, and the faults we see on badly matched systems. Advice from fridge technicians.",
    eyebrow: "Solar and inverter advice",
    h1: "Running a Fridge on Solar or an Inverter",
    lead:
      "With load shedding a fact of life in Harare, more and more fridges run from inverters, batteries and solar panels. Done well, it keeps food cold through every outage and protects the fridge from restarts. Done badly, it cooks compressors and kills control boards. This guide covers what a fridge needs from a backup system.",
    points: [
      "Why a fridge needs a pure sine wave inverter",
      "Allowing for the compressor's starting current",
      "Inverter fridges versus older fixed speed fridges",
      "Faults we see on badly matched systems",
    ],
    picture: "compressor",
    pictureAlt: "Fridge compressor, which needs clean power from an inverter or solar system",
    crumbs: [{ name: "Fridges on solar and inverters", path: "/fridge-on-solar-inverter" }],
    whatsappMessage: "Hi Harare Fridge Repairs, I have a question about running my fridge on solar or an inverter. My suburb is: ___",
    sections: [
      {
        kind: "text",
        heading: "What a fridge needs from a backup system",
        paragraphs: [
          "A fridge compressor is a motor, and motors are fussy about the shape of the power they receive. A pure sine wave inverter produces power like the mains. A modified sine wave inverter produces a stepped approximation that makes compressor motors run hotter, noisier and less efficiently, and can upset electronic control boards. For a fridge, pure sine wave is the only sensible choice.",
          "The second requirement is starting current. A fixed speed compressor draws several times its running current for a moment when it starts. The inverter must handle that surge as well as everything else running at the same time, or it will trip, or the compressor will struggle to start. Check the inverter's surge rating, not just its continuous rating, and allow for the fridge and freezer starting together.",
        ],
      },
      {
        kind: "list",
        heading: "Signs your backup system is hurting your fridge",
        items: [
          "Fridge louder or hotter at the back when running on the inverter",
          "Compressor clicking and failing to start on battery, fine on mains",
          "Inverter tripping on overload when the fridge starts",
          "Control board or display faults that started after the system was installed",
          "Fridge cooling poorly only when on battery late at night as the battery runs low",
        ],
        columns: 1,
      },
      {
        kind: "steps",
        heading: "Getting it right",
        items: [
          { title: "Pure sine wave inverter", text: "Use a pure sine wave inverter with enough surge capacity for every compressor on the circuit starting at once." },
          { title: "Low battery cut-out", text: "Set the inverter to cut out before the battery voltage sags too far. A compressor running on low voltage overheats." },
          { title: "Changeover delay", text: "Where the system switches between mains and battery, a short delay before the fridge restarts protects the compressor, just as on mains." },
          { title: "Consider an inverter fridge", text: "Inverter fridges start gently and run at variable speed, which suits battery and solar systems well and uses less energy overall." },
          { title: "Keep the fridge efficient", text: "Clean condenser coils and good door seals cut running time, which makes the battery last longer through an outage." },
        ],
      },
      {
        kind: "chips",
        heading: "Related pages",
        items: [
          { href: "/protect-fridge-from-load-shedding", label: "Protect your fridge from load shedding" },
          { href: "/fridge-power-surge-repairs", label: "Power surge repairs" },
          { href: "/compressor-replacement", label: "Compressor replacement" },
          { href: "/fridge-servicing", label: "Fridge servicing" },
          { href: "/problems/fridge-compressor-problems", label: "Compressor problems" },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I run my fridge on a modified sine wave inverter?",
        answer:
          "It may work, but the compressor runs hotter and less efficiently, and electronic fridges can misbehave. Over months that shortens the compressor's life. A pure sine wave inverter is strongly recommended for any fridge or freezer.",
      },
      {
        question: "What size inverter do I need for a fridge?",
        answer:
          "Check the fridge's rated power on its label and allow for a starting surge several times that for a fixed speed compressor, plus everything else on the inverter. Your solar installer should size the system from those figures. We can measure the actual running and starting current of your fridge on site.",
      },
      {
        question: "Is an inverter fridge better for solar?",
        answer:
          "Generally yes. Inverter fridges start softly with a low current and run at variable speed, so they are easier on batteries and inverters and use less energy overall.",
      },
      {
        question: "My fridge started giving problems after solar was installed. Can you help?",
        answer:
          "Yes. We test the fridge and measure the supply it is getting from the inverter, so you know whether the fridge or the system needs attention. Call or WhatsApp 0782 886 252.",
      },
    ],
    cta: {
      title: "Fridge struggling on your inverter?",
      text: "Call or WhatsApp 0782 886 252. A technician will test the fridge and the supply it is getting at your address in Harare.",
    },
    pageType: "WebPage",
  },
]
