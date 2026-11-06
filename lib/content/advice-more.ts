import type { AdviceRecord } from "./advice"

/**
 * Practical guides that answer common how-to questions. They lead with the
 * answer, then the detail, and link to the matching repair pages.
 */
export const moreAdvicePages: AdviceRecord[] = [
  {
    slug: "protect-fridge-from-power-cuts",
    shortName: "Protecting your fridge from power cuts",
    cardText: "Surge protectors, start delays, inverters and simple habits that stop load shedding killing your fridge.",
    path: "/protect-fridge-from-power-cuts",
    title: "How to Protect Your Fridge From Power Cuts & Surges",
    description:
      "How to protect a fridge from load shedding and surges in Harare: voltage protectors with a start delay, surge protectors, inverters and free habits that work.",
    eyebrow: "Fridge advice",
    h1: "How to Protect Your Fridge From Power Cuts and Surges",
    lead:
      "Power cuts do not just warm your food. The moment the power comes back is when fridges get damaged, by a spike or by a low-voltage restart. These are the steps our technicians recommend to every Harare household and business, from free habits to inexpensive protection devices.",
    quickAnswer: {
      question: "How do I protect my fridge during load shedding?",
      answer:
        "Switch the fridge off at the wall when the power goes, and switch it back on a few minutes after the power returns and has settled. Better still, fit a voltage protector with a start delay, which does this automatically and also cuts the fridge off when the voltage is too low or too high. Keep the doors closed during the outage.",
    },
    points: [
      "Why the restart, not the outage, does the damage",
      "Surge protectors and voltage protectors compared",
      "Running a fridge on an inverter or generator",
      "Keeping food safe while the power is off",
    ],
    picture: "compressorTest",
    pictureAlt: "Technician testing a fridge compressor and supply after a power cut",
    crumbs: [{ name: "Protecting your fridge from power cuts", path: "/protect-fridge-from-power-cuts" }],
    whatsappMessage: "Hi Harare Fridge Repairs, I would like advice on protecting my fridge from power cuts. My suburb is: ___",
    sections: [
      {
        kind: "text",
        heading: "Why the restart does the damage",
        paragraphs: [
          "When power returns after load shedding, two things can hurt a fridge. A brief voltage spike can damage the electronics on modern fridges: control boards, display boards and inverter drivers. And because every fridge, freezer, geyser and pump on the line starts at once, the voltage often sags well below normal for a few seconds.",
          "A compressor that tries to start at low voltage, or that is restarted within a minute or two of stopping while the pressures inside are still high, struggles to turn. It draws a heavy current, heats its windings and leans on the start relay and overload. Do that several times a day for months and those parts fail, then sometimes the compressor itself.",
        ],
      },
      {
        kind: "steps",
        heading: "Five ways to protect your fridge",
        items: [
          { title: "Switch off at the wall", text: "When the power goes, switch the fridge off. Switch it back on a few minutes after the power returns, once the lights are steady. Free and very effective." },
          { title: "Fit a voltage protector", text: "A plug-in appliance protector with a start delay waits a few minutes before reconnecting the fridge, and cuts it off if the voltage goes too low or too high." },
          { title: "Add surge protection", text: "A good surge protector absorbs spikes. It does not protect against low voltage, so it works best alongside a voltage protector, or as part of one." },
          { title: "Plug straight into the wall", text: "Long, thin extension leads and multi-plugs drop the voltage further at start up. Give the fridge its own wall socket where you can." },
          { title: "Keep the condenser clean", text: "A clean condenser and space around the fridge keep pressures lower, so the compressor starts more easily after every outage." },
        ],
      },
      {
        kind: "list",
        heading: "Running a fridge on an inverter, solar or a generator",
        intro: "Many Harare homes now run the fridge on backup power. A few points avoid trouble.",
        items: [
          "A compressor needs several times its running power for a moment at start up. The inverter must handle that surge, not just the running load.",
          "Pure sine wave inverters suit fridges best, especially inverter-type fridges with electronic boards.",
          "Low battery voltage causes failed starts and clicking. Set the inverter to cut off before the battery is too flat.",
          "Let a generator run and settle for a minute or two before switching the fridge on, and switch the fridge off before stopping it.",
          "An inverter fridge, which ramps its compressor up gently, is often easier on backup power than an older fixed-speed fridge.",
        ],
      },
      {
        kind: "feature",
        eyebrow: "Food safety",
        heading: "Keeping food safe while the power is off",
        paragraphs: [
          "Keep the doors closed. A closed fridge keeps food cold for about four hours. A full freezer that stays shut keeps food frozen for about two days, and a half-full one for about a day. Bottles of water in the freezer gaps help it hold its temperature.",
          "If the power has been off for more than about four hours, throw out perishable food from the fridge, such as meat, fish, milk, eggs and cooked leftovers. Frozen food that still has ice crystals can usually be refrozen. If you are unsure, it is safer to throw it out.",
        ],
        picture: "temperature",
        pictureAlt: "Technician checking the temperature inside a fridge after a power cut",
        reverse: true,
      },
      {
        kind: "chips",
        heading: "Read next",
        items: [
          { href: "/fridge-power-surge-repairs", label: "Power surge damage repairs" },
          { href: "/problems/fridge-clicking-on-and-off", label: "Fridge clicking on and off" },
          { href: "/problems/fridge-not-switching-on", label: "Fridge not switching on" },
          { href: "/fridge-control-board-repairs", label: "Control board repairs" },
          { href: "/compressor-replacement", label: "Compressor replacement" },
          { href: "/tips", label: "Fridge care tips" },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I unplug my fridge during load shedding?",
        answer:
          "Switching it off at the wall is enough. Switch it back on a few minutes after the power returns. That avoids both the spike and the low-voltage start that damage compressors.",
      },
      {
        question: "Is a surge protector enough?",
        answer:
          "It helps with spikes but not with low voltage, which is what strains compressors. A voltage protector with a start delay covers both and is the better choice for a fridge.",
      },
      {
        question: "My fridge stopped after the power came back. What now?",
        answer:
          "Leave it switched off at the wall and call us. The damage is usually a start relay, overload, fuse or board component, all repairable at home.",
      },
      {
        question: "Can frequent power cuts shorten my fridge's life?",
        answer:
          "Yes, mainly through repeated hard starts. The steps on this page reduce that wear considerably.",
      },
    ],
    cta: {
      title: "Fridge damaged by a power cut?",
      text: "Call 0782 886 252 or WhatsApp us. We test and repair surge damage at your address across Harare, 24 hours a day.",
    },
  },

  {
    slug: "how-to-defrost-a-freezer",
    shortName: "How to defrost a freezer",
    cardText: "Step by step: defrosting a chest freezer or manual defrost fridge safely, and when ice means a fault.",
    path: "/how-to-defrost-a-freezer",
    title: "How to Defrost a Freezer or Fridge Safely | Step by Step",
    description:
      "How to defrost a chest freezer, upright freezer or manual defrost fridge safely, what not to do, and when ice build-up means a fault. From Harare technicians.",
    eyebrow: "Fridge advice",
    h1: "How to Defrost a Freezer or Fridge Safely",
    lead:
      "Chest freezers and manual defrost fridges need defrosting from time to time. Done properly it takes a few hours and costs nothing. Done with a knife, it can end in a pierced evaporator and an expensive repair. Here is how our technicians recommend doing it.",
    quickAnswer: {
      question: "What is the safest way to defrost a freezer?",
      answer:
        "Empty the freezer into cool boxes, switch it off at the wall, leave the lid or door open with towels down, and let the ice melt on its own. Bowls of hot water inside speed it up. Remove loose ice by hand or with a plastic scraper only. Dry the inside fully before switching back on, and wait until it is cold before reloading.",
    },
    points: [
      "Step by step for chest freezers and manual defrost fridges",
      "Safe ways to speed it up",
      "What never to use on the ice",
      "When ice build-up is a fault, not maintenance",
    ],
    picture: "freezerIce",
    pictureAlt: "Thick ice build up inside a freezer that needs defrosting",
    crumbs: [{ name: "How to defrost a freezer", path: "/how-to-defrost-a-freezer" }],
    whatsappMessage: "Hi Harare Fridge Repairs, my freezer keeps icing up. My suburb is: ___ and the freezer is: ___",
    sections: [
      {
        kind: "text",
        heading: "When to defrost",
        paragraphs: [
          "Chest freezers, most upright freezers without a fan, and fridges with a small freezer box inside need a manual defrost when the ice is about half a centimetre to a centimetre thick. Thick ice insulates the cold plate, so the freezer runs longer, uses more power and holds less food.",
          "Frost free fridges and freezers should never need a manual defrost. If yours has thick ice on the back wall or around the vents, the defrost system has failed and needs repairing. A manual defrost will only buy you a week or two.",
        ],
      },
      {
        kind: "steps",
        heading: "How to defrost a freezer, step by step",
        items: [
          { title: "Empty it", text: "Pack the food tightly into cool boxes with ice packs, or wrap it in newspaper and blankets. Packed tightly, it stays frozen for hours." },
          { title: "Switch off and open up", text: "Switch off at the wall, open the lid or door, and lay towels around the base. Open the drain plug on a chest freezer and put a tray under it." },
          { title: "Let it melt", text: "Put bowls of hot water inside and close the lid for a while to speed things up. A fan blowing into the cabinet helps too. Lift away loose sheets of ice by hand." },
          { title: "Clean and dry", text: "Wipe the inside with warm water and a little bicarbonate of soda, then dry it completely, including the drain and the seal." },
          { title: "Cool before loading", text: "Switch back on, close the lid and wait until it is cold, usually a few hours, before putting the food back." },
        ],
      },
      {
        kind: "list",
        heading: "Never do these",
        intro: "A pierced evaporator from a knife during defrosting is one of the most avoidable repairs we see.",
        columns: 1,
        items: [
          "Do not chip or lever ice with a knife, screwdriver or ice pick. The cooling pipes are just under the surface.",
          "Do not use a heat gun or put a heater inside. Plastic liners warp and melt.",
          "Do not use a hairdryer close to the walls or near water.",
          "Do not switch back on while the cabinet is still wet; the water simply freezes again.",
        ],
      },
      {
        kind: "feature",
        eyebrow: "Ice coming back fast?",
        heading: "When ice build-up is a fault",
        paragraphs: [
          "If the ice comes back within days or weeks, something is letting moist air in. On a chest freezer it is usually the lid seal or a lid that does not close flat. On an upright it may be the door seal, a sagging door or a fridge that tilts forward so the door does not self-close.",
          "On frost free fridges, heavy ice on the back wall or around the vents is usually a defrost fault: the heater, timer, bimetal or sensor. Frost near the door points to the seal. We repair both at your address across Harare.",
        ],
        picture: "doorSeal",
        pictureAlt: "Technician checking a freezer door seal for gaps",
        reverse: true,
      },
      {
        kind: "chips",
        heading: "Read next",
        items: [
          { href: "/problems/ice-build-up", label: "Ice build up" },
          { href: "/fridge-defrost-repairs", label: "Defrost system repairs" },
          { href: "/fridge-door-seal-replacement", label: "Door seal replacement" },
          { href: "/chest-freezer-repairs", label: "Chest freezer repairs" },
          { href: "/upright-freezer-repairs", label: "Upright freezer repairs" },
          { href: "/problems/freezer-not-freezing", label: "Freezer not freezing" },
        ],
      },
    ],
    faqs: [
      {
        question: "How long does it take to defrost a freezer?",
        answer:
          "Usually two to four hours with the lid open and bowls of hot water inside, and longer for very thick ice. Packed tightly in cool boxes, frozen food will keep for that time.",
      },
      {
        question: "How often should I defrost my chest freezer?",
        answer:
          "When the ice reaches about half a centimetre to a centimetre, which for most households is once or twice a year. If it ices up much faster, check the lid seal.",
      },
      {
        question: "Do I need to defrost a frost free fridge?",
        answer:
          "No. It defrosts itself automatically, a few times a day. Heavy ice on the back wall of a frost free freezer means the defrost system has failed and should be repaired.",
      },
      {
        question: "I damaged the inside while defrosting. Can it be repaired?",
        answer:
          "Sometimes. Depending on where the hole is, a pierced evaporator can be repaired and the system regassed; on some freezers it is not worth it. Switch the freezer off and call us to assess it.",
      },
    ],
    cta: {
      title: "Freezer icing up again and again?",
      text: "Call 0782 886 252 or WhatsApp a photo. We repair seals and defrost systems at your address across Harare.",
    },
  },

  {
    slug: "fridge-temperature-settings",
    shortName: "Correct fridge temperatures",
    cardText: "The right temperature for the fridge and freezer, what the dial numbers mean, and how to check it.",
    path: "/fridge-temperature-settings",
    title: "What Temperature Should a Fridge Be? Settings Explained",
    description:
      "What temperature should a fridge and freezer be? The right settings, what dial numbers 1 to 7 mean, how to check with a thermometer, and when it is a fault.",
    eyebrow: "Fridge advice",
    h1: "What Temperature Should My Fridge and Freezer Be?",
    lead:
      "Most people never check their fridge temperature until something goes wrong. A fridge that runs a few degrees too warm spoils food faster, and one set too cold freezes the lettuce and wastes power. Here is what to aim for and how to check it.",
    quickAnswer: {
      question: "What temperature should a fridge be set to?",
      answer:
        "Aim for 3 to 5 degrees Celsius in the fridge section and minus 18 degrees or colder in the freezer. On a dial marked 1 to 7, a higher number is usually colder and a middle setting suits most kitchens. Check with a thermometer in a glass of water on the middle shelf, left overnight.",
    },
    points: [
      "Fridge: 3 to 5 degrees Celsius",
      "Freezer: minus 18 degrees or colder",
      "What the numbers on the dial mean",
      "How to check it properly",
    ],
    picture: "temperature",
    pictureAlt: "Thermometer reading inside a fridge during a temperature check",
    crumbs: [{ name: "Correct fridge temperatures", path: "/fridge-temperature-settings" }],
    whatsappMessage: "Hi Harare Fridge Repairs, my fridge is not holding the right temperature. My suburb is: ___ and the fridge is: ___",
    sections: [
      {
        kind: "list",
        heading: "The temperatures to aim for",
        columns: 1,
        items: [
          "Fridge section: 3 to 5 degrees Celsius. Below 3 risks freezing salads and milk; above 5 lets bacteria grow faster.",
          "Freezer: minus 18 degrees Celsius or colder for long-term storage.",
          "Chest freezers for a business: minus 18 or colder, checked daily if stock is valuable.",
          "Beverage chillers: usually 2 to 5 degrees, depending on the product.",
          "Butchery counters and meat fridges: as cold as possible without freezing, typically 0 to 3 degrees.",
        ],
      },
      {
        kind: "text",
        heading: "What the numbers on the dial mean",
        paragraphs: [
          "On most mechanical fridges the thermostat dial runs from 1 to 5 or 1 to 7, and the numbers are power settings, not degrees. A higher number means colder. A setting in the middle of the range suits most Harare kitchens; turn it up a step in very hot weather or if the fridge is very full, and down a step in winter.",
          "Electronic fridges with a display usually show the target temperature in degrees, which makes it easier. Remember that the setting is the target, not a measurement. If the fridge is faulty, it may show 4 degrees while the shelves are much warmer.",
          "Turning the dial to maximum does not cool a warm fridge faster. It only makes the compressor run longer and often freezes food at the back.",
        ],
      },
      {
        kind: "steps",
        heading: "How to check your fridge temperature",
        items: [
          { title: "Use a glass of water", text: "Put a fridge thermometer in a glass of water on the middle shelf. Water shows the food temperature rather than the air, which swings every time the door opens." },
          { title: "Leave it overnight", text: "Check first thing in the morning, before the door has been opened, for the most accurate reading." },
          { title: "Check the freezer", text: "Put the thermometer between two frozen packs for a few hours." },
          { title: "Adjust one step at a time", text: "Change the setting by one step, then wait a day before checking again. Fridges respond slowly." },
        ],
      },
      {
        kind: "feature",
        eyebrow: "When the setting is not the problem",
        heading: "Temperature wrong whatever you set?",
        paragraphs: [
          "If the fridge stays warm on its coldest setting, or freezes food on its warmest, the control is not doing its job. Common causes are a worn thermostat, a sensor that has drifted, a damper stuck open or closed, an iced evaporator on a frost free fridge, or a door seal letting warm air in.",
          "Our technicians measure the actual temperatures and test the thermostat or sensor against its specification, at your address anywhere in Harare.",
        ],
        picture: "diagnostics",
        pictureAlt: "Technician diagnosing a fridge temperature control fault",
        reverse: true,
      },
      {
        kind: "chips",
        heading: "Read next",
        items: [
          { href: "/thermostat-replacement", label: "Thermostat replacement" },
          { href: "/problems/fridge-freezing-food", label: "Fridge freezing food" },
          { href: "/problems/fridge-not-cooling", label: "Fridge not cooling" },
          { href: "/problems/fridge-warm-freezer-cold", label: "Fridge warm, freezer cold" },
          { href: "/fridge-control-board-repairs", label: "Control board repairs" },
          { href: "/tips", label: "Fridge care tips" },
        ],
      },
    ],
    faqs: [
      {
        question: "Is 1 or 7 colder on a fridge dial?",
        answer:
          "On most fridges 7 is the coldest and 1 the warmest, because the numbers show cooling power. A few models are the other way round, so check the label inside or the manual.",
      },
      {
        question: "Why is my fridge colder at the back?",
        answer:
          "On many fridges the cold plate or air outlet is at the back, so that is the coldest spot. Keep salads and soft fruit away from the back wall and use that area for drinks and meat.",
      },
      {
        question: "Should I turn my fridge up in summer?",
        answer:
          "In very hot weather, one step colder can help a full fridge hold temperature. Check with a thermometer rather than guessing.",
      },
      {
        question: "My fridge shows the right temperature but food goes off. Why?",
        answer:
          "The display shows the target or the sensor reading, which may not match the shelves if a sensor has drifted or airflow is blocked. Check with a thermometer in water, and call us if it is above 5 degrees.",
      },
    ],
    cta: {
      title: "Fridge will not hold the right temperature?",
      text: "Call 0782 886 252 or WhatsApp us. We test thermostats, sensors and airflow at your address across Harare.",
    },
  },

  {
    slug: "moving-a-fridge",
    shortName: "Moving a fridge safely",
    cardText: "Can a fridge be laid down? How to transport a fridge and how long to wait before switching it on.",
    path: "/moving-a-fridge",
    title: "Moving a Fridge: Can It Lie Down? How Long Before Use?",
    description:
      "Moving house in Harare? How to transport a fridge or freezer safely, whether it can lie down, and how long to let it stand before you switch it back on.",
    eyebrow: "Fridge advice",
    h1: "How to Move a Fridge Without Damaging It",
    lead:
      "A fridge that worked perfectly before a move and does not cool afterwards is a common and frustrating problem. Most of that damage is avoidable. Here is how to transport a fridge or freezer, and what to do when it arrives.",
    quickAnswer: {
      question: "Can you lay a fridge down to move it, and how long should it stand before switching on?",
      answer:
        "Transport a fridge upright whenever you can. If it must lie down, follow the manual: many makers say on its side with the compressor pipes uppermost, some say on its back, and it should never lie on its front. When it arrives, stand it upright and wait at least four hours before switching on, longer if it lay down for a long trip, so the compressor oil drains back.",
    },
    points: [
      "Upright is best; lying down only as the manual allows",
      "Secure doors and loose parts",
      "Let it stand before switching on",
      "What to do if it will not cool after the move",
    ],
    picture: "homeVisit",
    pictureAlt: "Technician checking a fridge at a customer's home after a move",
    crumbs: [{ name: "Moving a fridge safely", path: "/moving-a-fridge" }],
    whatsappMessage: "Hi Harare Fridge Repairs, my fridge is not cooling after a move. My suburb is: ___ and the fridge is: ___",
    sections: [
      {
        kind: "text",
        heading: "Why fridges do not like lying down",
        paragraphs: [
          "The compressor at the bottom of the fridge sits in a bath of oil. When the fridge lies down, some of that oil can run out of the compressor into the pipes. If the fridge is switched on before the oil has drained back, the compressor may run short of lubrication, and oil in the wrong place can restrict the cooling circuit.",
          "Transport also brings knocks. A pipe bent or cracked against a door frame, a condenser crushed against the back of a truck, or a door wrenched on its hinges can all cause a leak or a seal that no longer closes. A little preparation prevents most of it.",
        ],
      },
      {
        kind: "steps",
        heading: "How to move a fridge, step by step",
        items: [
          { title: "Prepare the day before", text: "Empty the fridge, switch it off and leave the doors open to defrost. Empty the drain tray at the back. Dry everything." },
          { title: "Secure it", text: "Remove or tape down shelves and drawers. Tape the doors shut with masking tape, not across the seals. Coil and tape the cord." },
          { title: "Keep it upright", text: "Move and transport the fridge upright, strapped to the side of the vehicle. Lift by the body, never by the doors or the pipes at the back." },
          { title: "Let it stand", text: "At the new house, stand it upright in place and wait at least four hours before switching on, longer if it lay down." },
          { title: "Switch on and wait", text: "Switch on empty, let it reach temperature over a few hours, then load the food. Leave the ventilation gaps the manual asks for." },
        ],
      },
      {
        kind: "list",
        heading: "If it must lie down",
        columns: 1,
        items: [
          "Lay it the way the manual says: many makers say on its side, some on its back. Never lay it on its front, where the doors take the weight, and never let a condenser grille on the back take any weight.",
          "Many technicians lay it on the side opposite the compressor pipes so the oil stays in the compressor. Check the manual for your fridge.",
          "Pad it well and keep the journey as short as possible.",
          "Stand it up as soon as you arrive, and give it longer to settle before switching on.",
        ],
      },
      {
        kind: "feature",
        eyebrow: "After the move",
        heading: "Not cooling after the move?",
        paragraphs: [
          "First, give it time: some fridges take several hours to cool down after being switched on. Check that it is level, the doors close and seal, and there is space around it. If it still does not cool, or the compressor hums and clicks without running, switch it off and call us.",
          "Our technician will check for transport damage, a cracked pipe or a leak, a door that no longer seals, or a compressor that is struggling, and repair it at your new address anywhere in Harare.",
        ],
        picture: "diagnostics",
        pictureAlt: "Technician diagnosing a fridge that is not cooling after being moved",
        reverse: true,
      },
      {
        kind: "chips",
        heading: "Read next",
        items: [
          { href: "/problems/fridge-not-cooling", label: "Fridge not cooling" },
          { href: "/problems/fridge-clicking-on-and-off", label: "Fridge clicking on and off" },
          { href: "/fridge-regassing", label: "Fridge regassing" },
          { href: "/fridge-door-seal-replacement", label: "Door seal replacement" },
          { href: "/compressor-replacement", label: "Compressor replacement" },
          { href: "/areas", label: "Areas we cover" },
        ],
      },
    ],
    faqs: [
      {
        question: "How long should a fridge stand before switching it on?",
        answer:
          "Wait at least four hours after any move before switching on, and longer if it lay down for a long journey. Some makers allow a shorter wait for a fridge that stayed upright, so check your manual for its figure.",
      },
      {
        question: "Can I transport a chest freezer on its back?",
        answer:
          "It is better kept upright. If it has to tilt, keep the compressor end raised and the journey short, and let it stand for at least four hours before switching on.",
      },
      {
        question: "Will moving a fridge cause a gas leak?",
        answer:
          "Not if it is handled carefully. Leaks after a move usually come from a pipe bent or cracked during lifting or a knock in transit. Never lift a fridge by the pipes at the back.",
      },
      {
        question: "Can you check my fridge after the move?",
        answer:
          "Yes. We visit homes across Harare and can check a fridge that is not cooling properly after a move, and repair any transport damage on site.",
      },
    ],
    cta: {
      title: "Fridge not working after moving house?",
      text: "Call 0782 886 252 or WhatsApp us your new suburb. We come to you across Harare, 24 hours a day.",
    },
  },
]
