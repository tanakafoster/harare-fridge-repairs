import type { AdviceRecord } from "./advice"

/**
 * Two more practical guides: what to do in the first hour after a fridge
 * stops, and a maintenance checklist for businesses. Both lead with the
 * answer and link to the repair pages they mention.
 */
export const extraAdvicePages: AdviceRecord[] = [
  {
    slug: "fridge-stopped-working-what-to-do",
    shortName: "Fridge stopped working: what to do",
    cardText: "The first hour after a fridge stops: safe checks, saving the food, and what to tell the technician.",
    path: "/fridge-stopped-working-what-to-do",
    title: "Fridge Stopped Working? What to Do in the First Hour",
    description:
      "Fridge suddenly stopped working? Safe checks to do first, how to save your food, what not to try, and what to tell the technician. From Harare fridge technicians.",
    eyebrow: "Fridge advice",
    h1: "Fridge Stopped Working? What to Do in the First Hour",
    lead:
      "A fridge that suddenly goes quiet or warm causes instant stress: there is food to save and you need to know if it is serious. These are the steps our technicians would take in your kitchen, in order, before anyone picks up a screwdriver.",
    quickAnswer: {
      question: "What should I do first when my fridge stops working?",
      answer:
        "Keep the doors closed to hold the cold in. Check that the socket, fridge guard and earth leakage have power, and that the thermostat has not been turned off. If the fridge smells of burning, gives a shock or trips the power, unplug it and leave it off. If it is still not running or cooling after these checks, move the most perishable food to a cool box and call a technician with the brand, model and symptom.",
    },
    points: [
      "Safe checks in the order a technician would do them",
      "How long food stays safe with the doors closed",
      "What not to try while you wait",
      "The details that let us arrive with the right parts",
    ],
    picture: "diagnostics",
    pictureAlt: "Technician diagnosing a fridge that has stopped cooling",
    crumbs: [{ name: "Fridge stopped working: what to do", path: "/fridge-stopped-working-what-to-do" }],
    whatsappMessage: "Hi Harare Fridge Repairs, my fridge has stopped working. Brand: ___ Symptom: ___ My suburb is: ___",
    sections: [
      {
        kind: "steps",
        heading: "Six checks, in order",
        intro: "None of these need tools. Stop at the first one that finds the problem.",
        items: [
          { title: "Is it safe?", text: "A burning smell, smoke, a shock from the door or an earth leakage that trips when the fridge starts are safety faults. Switch off at the wall, unplug, and go straight to calling us." },
          { title: "Is there power at the socket?", text: "Plug a lamp or phone charger into the same socket. If it is dead, check the breaker and earth leakage, and whether the area has power." },
          { title: "What is the fridge guard doing?", text: "A red or flashing light usually means a start delay or bad voltage, not a broken fridge. Give it ten minutes after the power returns." },
          { title: "Has the setting been changed?", text: "A thermostat knocked to off, or an electronic fridge left in holiday or showroom mode, looks exactly like a fault." },
          { title: "Is it running but warm?", text: "If the light is on and you can hear the compressor but the food is warm, look for ice on the freezer back wall and listen for the fan. That points to defrost or airflow, not gas." },
          { title: "Has it just been moved?", text: "A fridge laid down or moved recently should stand upright for a few hours before running. Starting it straight away can cause problems." },
        ],
      },
      {
        kind: "feature",
        eyebrow: "Saving the food",
        heading: "How long your food stays safe",
        paragraphs: [
          "With the doors kept closed, a fridge stays cold for roughly four hours. A full freezer that stays shut keeps food frozen for about two days, a half full one for about a day. Every time the door opens, that time shrinks.",
          "If the fridge will be off longer than that, move meat, fish, milk, cooked food and anything for babies or the elderly to a cool box with ice, or to a neighbour's fridge. Frozen food that still has ice crystals in it can usually go back in the freezer once it is working. If you are not sure food has stayed cold, it is safer to throw it out.",
        ],
        picture: "temperature",
        pictureAlt: "Checking the temperature inside a fridge with a thermometer",
        reverse: true,
      },
      {
        kind: "list",
        heading: "What not to do while you wait",
        items: [
          "Do not keep switching the fridge on and off to try to restart it. Repeated hard starts damage the relay and compressor.",
          "Do not chip ice from the freezer with a knife. A pierced evaporator turns a simple repair into an expensive one.",
          "Do not pay anyone for a regas before the pressures have been measured. Most fridges that stop cooling do not need gas.",
          "Do not plug the fridge into an unearthed adapter or extension lead to get around a trip.",
          "Do not take the back panel off with the fridge plugged in.",
        ],
        columns: 1,
      },
      {
        kind: "list",
        heading: "What to tell the technician",
        intro: "These details help us arrive with the right parts and often finish in one visit.",
        items: [
          "The brand and the model number from the sticker inside the fridge or on the back",
          "What it is doing: silent, clicking, humming, running but warm, iced up, leaking, tripping",
          "When it started, and whether it followed a power cut, a storm or a move",
          "Any code or flashing light on the display or the fridge guard",
          "Your suburb, and who will be home to let the technician in",
        ],
        columns: 1,
      },
      {
        kind: "chips",
        heading: "Read next",
        items: [
          { href: "/problems/fridge-not-switching-on", label: "Fridge not switching on" },
          { href: "/problems/fridge-not-cooling", label: "Fridge not cooling" },
          { href: "/problems/fridge-guard-red-light", label: "Fridge guard red light" },
          { href: "/problems/fridge-electric-shock", label: "Fridge giving shocks" },
          { href: "/protect-fridge-from-power-cuts", label: "Protecting your fridge from power cuts" },
          { href: "/fridge-repair-or-replace", label: "Repair or replace?" },
          { href: "/24-hour-fridge-repairs", label: "24 hour fridge repairs" },
        ],
      },
    ],
    faqs: [
      {
        question: "My fridge stopped working but the light is still on. What does that mean?",
        answer:
          "The fridge has power, so the fault is in the cooling side: commonly the start relay, the thermostat or sensor, a fan, a defrost part, or less often the compressor. Our guide to a fridge that is not cooling explains how each one shows itself.",
      },
      {
        question: "Should I unplug my fridge if it stops working?",
        answer:
          "If it smells of burning, gives a shock or trips the power, yes, unplug it straight away. Otherwise switching it off at the wall while you wait for the technician is sensible, and stops it repeatedly trying to start.",
      },
      {
        question: "Can you come today?",
        answer:
          "Usually, yes. We work 24 hours a day across Harare. Call or WhatsApp with your suburb and the symptom and we will tell you when we can be there.",
      },
    ],
    cta: {
      title: "Fridge stopped working?",
      text: "Call 0782 886 252 or 0719 227 718, or WhatsApp the brand and what it is doing. We repair fridges at your address across Harare, 24 hours a day.",
    },
  },

  {
    slug: "commercial-fridge-maintenance-checklist",
    shortName: "Commercial fridge maintenance checklist",
    cardText: "Daily, weekly and quarterly checks that keep shop, bar and kitchen fridges running.",
    path: "/commercial-fridge-maintenance-checklist",
    title: "Commercial Fridge Maintenance Checklist | Daily to Quarterly",
    description:
      "A practical maintenance checklist for commercial fridges, freezers, chillers and cold rooms: daily, weekly, monthly and quarterly checks, from Harare technicians.",
    eyebrow: "Fridge advice",
    h1: "Commercial Fridge Maintenance Checklist",
    lead:
      "Most commercial refrigeration breakdowns give warning signs for days or weeks before the unit stops. A few minutes of checks by your own staff, plus a professional service a few times a year, catches most of them. This is the checklist our technicians give to shops, bars and kitchens across Harare.",
    quickAnswer: {
      question: "How often should commercial fridges be serviced?",
      answer:
        "Staff should check temperatures daily, door seals and drains weekly, and condensers monthly. A refrigeration technician should service each unit every three to six months, more often in hot, greasy or dusty places such as kitchens, bakeries and shops near the street. Cold rooms and ice machines benefit from the shorter interval.",
    },
    points: [
      "Daily checks anyone on staff can do",
      "Weekly and monthly cleaning that prevents most failures",
      "What a technician checks on a service visit",
      "Warning signs that mean call now",
    ],
    picture: "condenser",
    pictureAlt: "Technician cleaning the condenser coil of a commercial fridge",
    crumbs: [{ name: "Commercial fridge maintenance checklist", path: "/commercial-fridge-maintenance-checklist" }],
    whatsappMessage: "Hi Harare Fridge Repairs, I would like a service for our commercial fridges. Business type: ___ Number of units: ___ Area: ___",
    sections: [
      {
        kind: "list",
        heading: "Every day",
        items: [
          "Read and write down the temperature of every unit at opening and closing.",
          "Make sure doors and lids close by themselves and are not left ajar.",
          "Keep stock below the load line on open multidecks and away from fans and vents.",
          "Listen for new noises: rattling, squealing fans or a compressor that never stops.",
        ],
        columns: 1,
      },
      {
        kind: "list",
        heading: "Every week",
        items: [
          "Run a strip of paper around each door seal. Report any place it slides out easily.",
          "Wipe gaskets clean; spilled food and drink make them stick and tear.",
          "Check drains and drip trays for blockages or standing water.",
          "Look for frost building on evaporators, back panels or cold room ceilings.",
        ],
        columns: 1,
      },
      {
        kind: "list",
        heading: "Every month",
        items: [
          "Switch off and brush or vacuum the condenser grille and fan. Kitchens and bakeries may need this every two weeks.",
          "Clear boxes and stock away from the vents and the back of each unit.",
          "Clean the inside of display cabinets and check the lights and glass heaters.",
          "Clean and sanitise the ice machine bin, and follow the maker's descaling schedule.",
        ],
        columns: 1,
      },
      {
        kind: "steps",
        heading: "What a technician checks on a service",
        intro: "A planned service every three to six months goes deeper than your staff can safely go.",
        items: [
          { title: "Condenser and fans", text: "Deep clean of the condenser coil, fan blades and motors, and a check that the fans run at speed." },
          { title: "Refrigeration system", text: "Pressures and compressor current measured against the unit's normal values, and joints checked for signs of a leak." },
          { title: "Controls and defrost", text: "Thermostat or controller accuracy, defrost heaters and timers, and alarm settings tested." },
          { title: "Seals, doors and drains", text: "Gaskets, hinges, door closers and drain lines checked, and worn parts quoted for replacement." },
        ],
      },
      {
        kind: "list",
        heading: "Warning signs: call now",
        items: [
          "Temperature rising during the day and not recovering overnight",
          "Compressor running nonstop, or clicking on and off every few minutes",
          "Ice building on the evaporator or around the door",
          "Water on the floor under or around the unit",
          "A burning smell, or the unit tripping the power",
        ],
        columns: 1,
      },
      {
        kind: "chips",
        heading: "Read next",
        items: [
          { href: "/fridge-servicing", label: "Fridge servicing" },
          { href: "/commercial-fridge-repairs", label: "Commercial fridge repairs" },
          { href: "/commercial-fridge-repairs/restaurants-and-takeaways", label: "Restaurant fridge repairs" },
          { href: "/commercial-fridge-repairs/supermarkets-and-tuck-shops", label: "Shop fridge repairs" },
          { href: "/cold-room-repairs", label: "Cold room repairs" },
          { href: "/ice-machine-repairs", label: "Ice machine repairs" },
          { href: "/fridge-door-seal-replacement", label: "Door seal replacement" },
        ],
      },
    ],
    faqs: [
      {
        question: "What is the most important maintenance job on a commercial fridge?",
        answer:
          "Keeping the condenser clean. A condenser clogged with dust, grease or flour makes the compressor run hotter and longer, and causes more breakdowns than any other single thing.",
      },
      {
        question: "Can our staff clean the condenser themselves?",
        answer:
          "Yes, with the unit switched off at the wall, using a soft brush and a vacuum on the outside of the coil. Do not bend the fins or use water on electrical parts. A deep clean is part of a technician's service.",
      },
      {
        question: "Do you offer planned servicing for businesses?",
        answer:
          "Yes. Tell us how many units you have and what type, and we will suggest a schedule. Our fridge servicing page explains what a visit includes.",
      },
    ],
    cta: {
      title: "Book a service for your business fridges",
      text: "Call 0782 886 252 or 0719 227 718, or WhatsApp the number and type of units. We service and repair commercial refrigeration across Harare, 24 hours a day.",
    },
    schema: {
      serviceName: "Commercial fridge servicing in Harare",
      serviceDescription: "Planned servicing and maintenance of commercial fridges, freezers, chillers and cold rooms across Harare.",
      serviceType: "Commercial refrigeration maintenance",
    },
  },
]
