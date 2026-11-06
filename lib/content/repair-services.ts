import type { ServiceRecord } from "./services"

const coreServiceCards = [
  { href: "/fridge-repairs", label: "Fridge repairs", text: "Diagnosis and repair of any household or commercial fridge at your address." },
  { href: "/fridge-regassing", label: "Fridge regassing", text: "Leak repair, vacuum and recharge with the correct refrigerant." },
  { href: "/compressor-replacement", label: "Compressor replacement", text: "Seized, burnt out or weak compressors replaced on site." },
  { href: "/thermostat-replacement", label: "Thermostat replacement", text: "Mechanical thermostats and electronic sensors that no longer control temperature." },
]

/**
 * Dedicated pages for specific repairs. Each one targets a single job people
 * search for by name, and links back to the core services and fault guides.
 */
export const repairServices: ServiceRecord[] = [
  {
    slug: "fridge-door-seal-replacement",
    shortName: "Door seal replacement",
    cardText: "New door gaskets for fridges, freezers and commercial cabinets, fitted and adjusted at your address.",
    path: "/fridge-door-seal-replacement",
    title: "Fridge Door Seal Replacement Harare | Gaskets Fitted On Site",
    description:
      "Fridge door seal (gasket) replacement in Harare. Torn, hard or leaking seals on fridges, freezers and commercial units replaced at your address. 24/7. Call 0782 886 252.",
    eyebrow: "Door seal replacement in Harare",
    h1: "Fridge Door Seal Replacement in Harare",
    lead:
      "A torn or hardened door seal lets warm, humid air into the fridge all day. The result is frost, water, a fridge that never switches off and a compressor that wears out early. Harare Fridge Repairs measures, supplies and fits new door gaskets at your home or business, and adjusts the door so the new seal closes properly.",
    points: [
      "Household fridges, chest freezers and commercial cabinets",
      "Seal measured and matched to your model",
      "Door and hinges adjusted so the seal closes flat",
      "Fitted at your address anywhere in Harare",
    ],
    picture: "doorSeal",
    pictureAlt: "Technician fitting a new door seal on a fridge in Harare",
    crumbs: [{ name: "Door seal replacement", path: "/fridge-door-seal-replacement" }],
    whatsappMessage: "Hi Harare Fridge Repairs, I need a fridge door seal replaced. My suburb is: ___ and the fridge is: ___",
    sections: [
      {
        kind: "text",
        heading: "Why a door seal matters more than it looks",
        paragraphs: [
          "The door seal, or gasket, is a magnetic rubber strip that grips the cabinet and keeps cold air in. Every time the door opens it flexes, and after years of use in a warm kitchen it hardens, shrinks and tears, usually near the hinges. A seal that no longer grips all the way round leaks cold air out and humid air in, all day and all night.",
          "That leak is behind a surprising number of the faults we are called to: frost and ice near the door, water under the drawers, sweating on the outside of the cabinet, a fridge that runs constantly, higher electricity use and eventually a compressor that has worked itself to death. A new seal is one of the least expensive parts on a fridge and one of the most effective repairs.",
        ],
      },
      {
        kind: "list",
        heading: "Signs your fridge needs a new door seal",
        items: [
          "A strip of paper closed in the door slides out with no resistance",
          "Visible gaps, splits or flattened sections, often at the corners",
          "Frost or ice building up near the door opening",
          "Condensation or water droplets on the outside of the cabinet",
          "Black mould in the folds that does not clean off",
          "The fridge runs all day and the sides stay warm",
        ],
      },
      {
        kind: "feature",
        eyebrow: "Done properly",
        heading: "Fitting a seal is more than pushing it into a groove",
        paragraphs: [
          "Some seals push into a channel, others are held by screws under the door liner, and on many freezers the seal is part of the door panel. We identify the fixing method, measure the door, and source the correct profile and size for your fridge.",
          "Once the new seal is in, we check the door is level and square, adjust the hinges if the door has dropped, and warm the seal if needed so it settles and grips evenly. We finish with a paper test all the way round. If the door itself has warped or the hinge is broken, we tell you before you pay for a seal that cannot work.",
        ],
        picture: "doorSeal",
        pictureAlt: "Close up of a fridge door gasket being checked for gaps",
        reverse: true,
      },
      {
        kind: "chips",
        heading: "Related guides",
        items: [
          { href: "/problems/fridge-door-seal-problems", label: "Door seal problems" },
          { href: "/problems/ice-build-up", label: "Ice build up" },
          { href: "/problems/fridge-running-constantly", label: "Fridge running constantly" },
          { href: "/problems/fridge-hot-on-the-sides", label: "Fridge hot on the sides" },
          { href: "/chest-freezer-repairs", label: "Chest freezer repairs" },
          { href: "/commercial-upright-fridge-repairs", label: "Commercial upright fridges" },
        ],
      },
      { kind: "cards", heading: "Other fridge services in Harare", items: coreServiceCards, columns: 4 },
    ],
    faqs: [
      {
        question: "Can I replace a fridge door seal myself?",
        answer:
          "On some fridges the seal pushes into a channel and a careful owner can fit one. The hard parts are getting the correct seal for your model and adjusting the door so it closes flat. If the door has dropped, a new seal alone will not fix the leak.",
      },
      {
        question: "Do you have seals for my fridge?",
        answer:
          "We source seals to suit the common household and commercial models in Harare. Send us the brand and model, or a photo of the rating plate inside the fridge, and we will confirm before we come.",
      },
      {
        question: "Can a door seal be repaired instead of replaced?",
        answer:
          "Sometimes. A seal that is dirty or has a fold can be cleaned and reshaped with gentle heat. A seal that is torn, brittle or shrunken needs replacing.",
      },
      {
        question: "Do you replace seals on commercial fridges?",
        answer:
          "Yes. Underbar fridges, commercial uprights, display fridges and cold room doors all have seals that wear out with heavy use, and we replace them on site.",
      },
    ],
    cta: {
      title: "Door not sealing? We can fit a new gasket.",
      text: "Call 0782 886 252 or WhatsApp a photo of the seal and the rating plate. We cover all of Harare, 24 hours a day.",
    },
    schema: {
      serviceName: "Fridge door seal replacement in Harare",
      serviceDescription: "Supply and fitting of door gaskets on household and commercial fridges and freezers at your address in Harare, Zimbabwe.",
      serviceType: "Refrigerator door gasket replacement",
    },
  },

  {
    slug: "fridge-fan-motor-replacement",
    shortName: "Fan motor replacement",
    cardText: "Noisy or failed evaporator and condenser fans on frost free and commercial fridges, replaced on site.",
    path: "/fridge-fan-motor-replacement",
    title: "Fridge Fan Motor Replacement Harare | Noisy & Failed Fans",
    description:
      "Fridge fan motor replacement in Harare. Noisy, seized or failed evaporator and condenser fans on frost free and commercial fridges replaced at your address, 24/7. Call 0782 886 252.",
    eyebrow: "Fan motor replacement in Harare",
    h1: "Fridge Fan Motor Replacement in Harare",
    lead:
      "On a frost free fridge the fans do as much work as the gas. When the evaporator fan in the freezer fails, cold air stops reaching the fridge section. When the condenser fan at the back fails, the compressor overheats. Harare Fridge Repairs tests and replaces fridge fan motors at your home or business, usually in one visit.",
    points: [
      "Evaporator fans in frost free freezers",
      "Condenser fans on household and commercial units",
      "Noise diagnosed before parts are replaced",
      "Fitted at your address across Harare, 24/7",
    ],
    picture: "fan",
    pictureAlt: "Technician inspecting a fridge evaporator fan motor",
    crumbs: [{ name: "Fan motor replacement", path: "/fridge-fan-motor-replacement" }],
    whatsappMessage: "Hi Harare Fridge Repairs, my fridge fan is noisy or not working. My suburb is: ___ and the fridge is: ___",
    sections: [
      {
        kind: "text",
        heading: "What the fans in your fridge do",
        paragraphs: [
          "Most modern fridges have two fans. The evaporator fan sits behind the back panel of the freezer and blows air across the cold evaporator into both compartments. The condenser fan, on many fridges and almost all commercial units, sits near the compressor and pulls air across the condenser so the heat taken out of the cabinet can escape.",
          "When the evaporator fan fails, the freezer may stay cold while the fridge section warms up, and frost may build up around the vent. When the condenser fan fails, the compressor runs hot, trips on its overload and the whole fridge cools poorly. Both usually give warning first: a chirp, a grind or a rattle that comes and goes.",
        ],
      },
      {
        kind: "list",
        heading: "Signs of a failing fridge fan",
        items: [
          "Chirping, squealing or grinding from inside the freezer that stops when the door opens",
          "Rattling or whirring from the back of the fridge at floor level",
          "Freezer cold but the fridge section warm",
          "Compressor very hot and cutting out on commercial units",
          "Frost building up around the freezer air vent",
          "No air movement at the vents when the door switch is pressed",
        ],
      },
      {
        kind: "feature",
        eyebrow: "Diagnosis first",
        heading: "Noise is not always a dead fan",
        paragraphs: [
          "A fan blade scraping on ice sounds just like a failed bearing, and the cure is completely different. If ice has built up around the fan, the defrost system has failed, and a new fan will soon be scraping again. Our technician removes the panel, checks for ice, tests the motor and its supply, and only then fits a new fan.",
          "We carry common universal and model-specific fan motors, and we source exact replacements for fridges with electronically controlled fans, where the board needs a matching motor.",
        ],
        picture: "noise",
        pictureAlt: "Technician listening for fan and compressor noise at the back of a fridge",
        reverse: true,
      },
      {
        kind: "chips",
        heading: "Related guides",
        items: [
          { href: "/problems/fridge-making-noise", label: "Fridge making noise" },
          { href: "/problems/fridge-warm-freezer-cold", label: "Fridge warm but freezer cold" },
          { href: "/problems/fridge-not-cooling", label: "Fridge not cooling" },
          { href: "/fridge-defrost-repairs", label: "Defrost system repairs" },
          { href: "/side-by-side-fridge-repairs", label: "Side by side fridges" },
          { href: "/beverage-chiller-repairs", label: "Beverage chillers" },
        ],
      },
      { kind: "cards", heading: "Other fridge services in Harare", items: coreServiceCards, columns: 4 },
    ],
    faqs: [
      {
        question: "Can a fridge work without the fan?",
        answer:
          "Not properly. Without the evaporator fan, a frost free fridge cannot move cold air into the fridge section. Without the condenser fan, the compressor overheats. Switching off a noisy fan to stop the sound will make the fridge warm.",
      },
      {
        question: "Why is my fridge fan noisy only sometimes?",
        answer:
          "Worn bearings are often noisy when cold and quieter once warm, and a fan touching ice gets louder as the ice grows. Both are worth checking before the fan stops completely.",
      },
      {
        question: "How long does a fan replacement take?",
        answer:
          "Usually under an hour once we are at your fridge, including removing and refitting the panels and testing. If the fan has failed because of ice, the defrost fault is repaired in the same visit where parts allow.",
      },
      {
        question: "Do you replace fans on commercial fridges?",
        answer:
          "Yes. Condenser and evaporator fans on beverage chillers, display fridges, underbar units and cold rooms are some of the most common commercial repairs we do.",
      },
    ],
    cta: {
      title: "Noisy or silent fridge fan? We can replace it today.",
      text: "Call 0782 886 252 or WhatsApp a short video with the sound. We cover all of Harare, 24 hours a day.",
    },
    schema: {
      serviceName: "Fridge fan motor replacement in Harare",
      serviceDescription: "Diagnosis and replacement of evaporator and condenser fan motors on household and commercial fridges across Harare, Zimbabwe.",
      serviceType: "Refrigerator fan motor replacement",
    },
  },

  {
    slug: "fridge-defrost-repairs",
    shortName: "Defrost system repairs",
    cardText: "Defrost heaters, timers, sensors and drains on frost free fridges, repaired so the ice stays away.",
    path: "/fridge-defrost-repairs",
    title: "Fridge Defrost Repairs Harare | Heater, Timer & Sensor Fixes",
    description:
      "Frost free fridge icing up? We repair defrost heaters, timers, bimetals, sensors and frozen drains at your home in Harare, so the ice does not come back. 24/7. Call 0782 886 252.",
    eyebrow: "Defrost system repairs in Harare",
    h1: "Frost Free Fridge Defrost Repairs in Harare",
    lead:
      "A frost free fridge melts its own frost several times a day. When one part of that defrost system fails, ice builds up behind the freezer panel until air stops flowing and the fridge goes warm. Harare Fridge Repairs clears the ice, finds the failed part and replaces it at your address, so the problem does not return in a fortnight.",
    points: [
      "Defrost heaters, timers, bimetals and sensors",
      "Frozen and blocked drains cleared and drain heaters replaced",
      "A test defrost cycle run before we leave",
      "Repaired at home across Harare, 24 hours a day",
    ],
    picture: "freezerIce",
    pictureAlt: "Ice built up on the evaporator of a frost free fridge awaiting defrost repair",
    crumbs: [{ name: "Defrost system repairs", path: "/fridge-defrost-repairs" }],
    whatsappMessage: "Hi Harare Fridge Repairs, my frost free fridge is icing up. My suburb is: ___ and the fridge is: ___",
    sections: [
      {
        kind: "text",
        heading: "How the defrost system works, and how it fails",
        paragraphs: [
          "Behind the back panel of a frost free freezer is the evaporator, the coldest part of the fridge. Moisture from the air freezes onto it as frost. Every few hours the fridge stops cooling and switches on a heater under the evaporator to melt that frost, and the water runs down a drain to a tray on the compressor, where it evaporates.",
          "The heater is switched by a timer or the control board, and protected by a bimetal thermostat or sensor that stops it once the coil is clear. If the heater burns out, the timer sticks, the bimetal fails or the sensor drifts, the frost is never melted. Within days the coil and the air duct are blocked with ice. A frozen or blocked drain causes a similar mess, leaving a sheet of ice in the bottom of the freezer or water in the fridge.",
        ],
      },
      {
        kind: "list",
        heading: "Signs the defrost system has failed",
        items: [
          "Thick frost or ice on the back panel of the freezer",
          "Freezer cold but the fridge section warm",
          "Fan scraping or grinding inside the freezer",
          "A sheet of ice in the bottom freezer drawer",
          "Water under the crisper drawers in the fridge section",
          "Cooling comes back for a while after a manual defrost, then fails again",
        ],
      },
      {
        kind: "feature",
        eyebrow: "Repairing the cause",
        heading: "A manual defrost is not a repair",
        paragraphs: [
          "Switching the fridge off for a day melts the ice, and the fridge will cool again for a week or two. That is useful to confirm the diagnosis, but the failed part is still there. We clear the ice safely with the panel off, then test the heater, the bimetal, the timer or board output and the sensor until we find the part that failed.",
          "We replace that part, clear and check the drain and fit a drain heater if the model has one, then force a defrost cycle to prove the system works before refitting the panel.",
        ],
        picture: "freezerIce",
        pictureAlt: "Technician clearing ice from a freezer evaporator during a defrost repair",
        reverse: true,
      },
      {
        kind: "chips",
        heading: "Related guides",
        items: [
          { href: "/problems/ice-build-up", label: "Ice build up" },
          { href: "/problems/fridge-warm-freezer-cold", label: "Fridge warm but freezer cold" },
          { href: "/problems/fridge-leaking-water", label: "Fridge leaking water" },
          { href: "/how-to-defrost-a-freezer", label: "How to defrost a freezer" },
          { href: "/combi-fridge-repairs", label: "Combi fridge repairs" },
          { href: "/upright-freezer-repairs", label: "Upright freezer repairs" },
        ],
      },
      { kind: "cards", heading: "Other fridge services in Harare", items: coreServiceCards, columns: 4 },
    ],
    faqs: [
      {
        question: "Why does my frost free fridge keep icing up?",
        answer:
          "Because something in the defrost system has failed: the heater, the timer or board output, the bimetal or the sensor. A door that does not seal can also overload the system with moisture. We test each part to find out which.",
      },
      {
        question: "Can you repair the defrost system at home?",
        answer:
          "Yes. Heaters, bimetals, timers, sensors and drain heaters are all replaced in your kitchen. The fridge does not need to go to a workshop.",
      },
      {
        question: "Do I need to defrost the fridge before you arrive?",
        answer:
          "It helps if you can. Switching the fridge off with the doors open for several hours before the visit means the technician can test the parts sooner. Put towels down for the water and move the food to a cool box.",
      },
      {
        question: "Does an iced up fridge need gas?",
        answer:
          "No. Ice on the evaporator shows the system is making cold. The problem is the defrost. Regassing an iced fridge wastes money and does not fix the fault.",
      },
    ],
    cta: {
      title: "Frost free fridge full of ice? We fix the defrost.",
      text: "Call 0782 886 252 or WhatsApp a photo of the ice. Technicians across Harare, 24 hours a day.",
    },
    schema: {
      serviceName: "Fridge defrost system repairs in Harare",
      serviceDescription: "Repair of defrost heaters, timers, bimetal thermostats, sensors and drains on frost free fridges and freezers across Harare, Zimbabwe.",
      serviceType: "Refrigerator defrost system repair",
    },
  },

  {
    slug: "fridge-control-board-repairs",
    shortName: "Control board repairs",
    cardText: "Electronic control boards, displays, sensors and inverter drivers on modern fridges, tested and repaired.",
    path: "/fridge-control-board-repairs",
    title: "Fridge Control Board Repairs Harare | PCB, Sensors, Inverters",
    description:
      "Fridge control board (PCB) repairs in Harare. Dead displays, error codes, failed sensors and inverter boards on Samsung, LG, Hisense, Defy and more. At your home, 24/7. Call 0782 886 252.",
    eyebrow: "Control board repairs in Harare",
    h1: "Fridge Control Board and Electronics Repairs in Harare",
    lead:
      "Modern fridges are run by an electronic control board that reads sensors, drives the fans, controls the defrost and, on inverter models, powers the compressor. Power surges are hard on these boards. Harare Fridge Repairs tests the board and everything around it at your address, so you only replace what has failed.",
    points: [
      "Main boards, display boards and inverter drivers",
      "Temperature sensors tested against their specification",
      "Error codes read and explained",
      "Diagnosed at your home across Harare",
    ],
    picture: "controlBoard",
    pictureAlt: "Technician testing a fridge electronic control board",
    crumbs: [{ name: "Control board repairs", path: "/fridge-control-board-repairs" }],
    whatsappMessage: "Hi Harare Fridge Repairs, my fridge display or control board has a problem. My suburb is: ___ and the fridge is: ___",
    sections: [
      {
        kind: "text",
        heading: "What the control board does",
        paragraphs: [
          "On an older fridge a mechanical thermostat switches the compressor on and off. On most fridges sold in Harare today, that job belongs to a control board. It reads temperature sensors in each compartment and on the evaporator, decides when to run the compressor and fans, when to defrost, and what to show on the display. On inverter fridges a separate driver board varies the compressor speed.",
          "Boards fail most often after a surge, when power returns after load shedding, or from moisture reaching connectors. But a board is also blamed for faults it did not cause. A failed sensor, fan or defrost heater can make a healthy board show an error or stop cooling. That is why we test the parts around the board before condemning it.",
        ],
      },
      {
        kind: "list",
        heading: "Signs of a control board or sensor fault",
        items: [
          "Display dead or flickering, or buttons not responding",
          "An error code or flashing light on the display",
          "Fridge or freezer temperature wildly wrong despite the setting",
          "Compressor not starting on an inverter fridge although the board has power",
          "Fans or defrost not working with no fault in the parts themselves",
          "Fridge dead straight after a power cut or a surge",
        ],
      },
      {
        kind: "feature",
        eyebrow: "Test before replace",
        heading: "Boards are expensive, so we prove the fault first",
        paragraphs: [
          "Our technician checks the supply to the board, reads any fault codes, measures the sensors against their resistance chart and checks the outputs to the compressor, fans and heater. Many 'board faults' turn out to be a ten-minute sensor or connector repair.",
          "When the board really has failed, we explain the options: a replacement board for your model, or a repair of the damaged section of the board where that is reliable. You get the price before anything is ordered.",
        ],
        picture: "electronics",
        pictureAlt: "Technician using a multimeter on fridge electronics",
        reverse: true,
      },
      {
        kind: "chips",
        heading: "Related guides",
        items: [
          { href: "/problems/fridge-not-switching-on", label: "Fridge not switching on" },
          { href: "/problems/fridge-freezing-food", label: "Fridge freezing food" },
          { href: "/fridge-power-surge-repairs", label: "Power surge damage" },
          { href: "/samsung-fridge-repairs", label: "Samsung fridge repairs" },
          { href: "/lg-fridge-repairs", label: "LG fridge repairs" },
          { href: "/french-door-fridge-repairs", label: "French door fridges" },
        ],
      },
      { kind: "cards", heading: "Other fridge services in Harare", items: coreServiceCards, columns: 4 },
    ],
    faqs: [
      {
        question: "Can a fridge control board be repaired?",
        answer:
          "Sometimes. Burnt relays, fuses and some power supply components can be replaced on the board. Where the damage is widespread or the board is sealed, a replacement board for your model is the reliable option. We tell you which applies after testing.",
      },
      {
        question: "My fridge shows an error code. What does it mean?",
        answer:
          "Codes differ by brand and model, and often point to a sensor, fan or defrost circuit rather than the board itself. Send us a photo of the display and the model number and we can tell you what it usually means.",
      },
      {
        question: "Do you repair inverter fridges?",
        answer:
          "Yes. We test the inverter driver board and the compressor together, because a driver fault and a compressor fault can look the same. Samsung, LG, Hisense and other inverter fridges are part of our everyday work.",
      },
      {
        question: "How do I protect my fridge board from surges?",
        answer:
          "A good surge protector or a voltage protector with a start delay, and switching the fridge off at the wall during long outages, make a real difference. Our guide on protecting your fridge from power cuts has the details.",
      },
    ],
    cta: {
      title: "Display dead or error code showing?",
      text: "Call 0782 886 252 or WhatsApp a photo of the display and the rating plate. We cover all of Harare, 24 hours a day.",
    },
    schema: {
      serviceName: "Fridge control board repairs in Harare",
      serviceDescription: "Testing and repair or replacement of fridge control boards, display boards, inverter drivers and temperature sensors across Harare, Zimbabwe.",
      serviceType: "Refrigerator electronic control repair",
    },
  },

  {
    slug: "fridge-power-surge-repairs",
    shortName: "Power surge damage repairs",
    cardText: "Fridges that died after load shedding or a surge: relays, boards, thermostats and compressors tested and repaired.",
    path: "/fridge-power-surge-repairs",
    title: "Fridge Not Working After a Power Cut? Surge Repairs Harare",
    description:
      "Fridge stopped working after load shedding or a power surge? We test and repair burnt relays, boards, thermostats and compressors at your home in Harare, 24/7. Call 0782 886 252.",
    eyebrow: "Power surge damage repairs in Harare",
    h1: "Fridge Repairs After a Power Cut or Surge",
    lead:
      "Load shedding and voltage swings are one of the most common causes of sudden fridge failures we see in Harare. When the power comes back with a spike, or comes back too low, the most sensitive parts of the fridge take the damage. Harare Fridge Repairs tests each part in turn at your address and repairs only what the surge actually broke.",
    points: [
      "Start relays, overloads and capacitors",
      "Control boards, display boards and fuses",
      "Thermostats and compressors tested, not assumed",
      "Advice on protecting the fridge next time",
    ],
    picture: "compressorTest",
    pictureAlt: "Technician testing a fridge for power surge damage with a multimeter",
    crumbs: [{ name: "Power surge damage repairs", path: "/fridge-power-surge-repairs" }],
    whatsappMessage: "Hi Harare Fridge Repairs, my fridge stopped working after a power cut. My suburb is: ___ and the fridge is: ___",
    sections: [
      {
        kind: "text",
        heading: "What a power cut does to a fridge",
        paragraphs: [
          "Two things happen when power returns. First, there can be a brief voltage spike that electronic parts are not built to survive. Second, every fridge, freezer and pump on the line tries to start at the same moment, so the voltage can sag well below normal for a few seconds. A compressor trying to start at low voltage, or against high pressure because it was switched off only moments earlier, draws a heavy current that strains the start relay, the overload and the motor windings.",
          "The damage depends on the fridge. Older mechanical fridges usually lose a start relay or overload. Electronic and inverter fridges are more likely to lose a fuse, a power supply component or the whole control board. In the worst cases the compressor windings fail.",
        ],
      },
      {
        kind: "list",
        heading: "Common surge and power cut damage",
        items: [
          "Fridge completely dead, no light and no display",
          "Light and display work but the compressor never starts",
          "Hum and click every few minutes with no cooling",
          "Fridge trips the earth leakage when plugged in",
          "Burning smell from the back after the power returned",
          "Error code or flashing display on an electronic fridge",
        ],
      },
      {
        kind: "feature",
        eyebrow: "Test, then repair",
        heading: "Most surge damage is a modest repair",
        paragraphs: [
          "A fridge that has died after a power cut is rarely beyond repair. Our technician checks the supply and the socket, then works through the plug and cord, the start relay and overload, the thermostat or board, and the compressor windings and insulation, in that order. Usually the fault is found in the first few parts, which are inexpensive.",
          "Once the fridge is running, we talk through practical protection: a surge protector or a voltage protector with a start delay, waiting a few minutes before switching back on, and switching off at the wall during long outages.",
        ],
        picture: "compressor",
        pictureAlt: "Start relay and overload on a fridge compressor being inspected",
        reverse: true,
      },
      {
        kind: "chips",
        heading: "Related guides",
        items: [
          { href: "/protect-fridge-from-power-cuts", label: "Protecting your fridge from power cuts" },
          { href: "/problems/fridge-not-switching-on", label: "Fridge not switching on" },
          { href: "/problems/fridge-clicking-on-and-off", label: "Fridge clicking on and off" },
          { href: "/problems/fridge-tripping-power", label: "Fridge tripping the power" },
          { href: "/fridge-control-board-repairs", label: "Control board repairs" },
          { href: "/compressor-replacement", label: "Compressor replacement" },
        ],
      },
      { kind: "cards", heading: "Other fridge services in Harare", items: coreServiceCards, columns: 4 },
    ],
    faqs: [
      {
        question: "My fridge stopped after load shedding. Is it ruined?",
        answer:
          "Rarely. The usual damage is a start relay, overload, fuse or board component, all of which can be repaired or replaced. A failed compressor is the less common outcome and is confirmed with tests before any replacement is suggested.",
      },
      {
        question: "Should I unplug my fridge during load shedding?",
        answer:
          "Switching off at the wall during an outage and back on a few minutes after the power returns protects the fridge from the spike and the low-voltage start. A voltage protector with a built-in delay does the same automatically.",
      },
      {
        question: "Does a surge protector really help?",
        answer:
          "A good one helps with spikes, and a voltage protector with a start delay also protects against the low-voltage restarts that damage compressors. Neither is a guarantee, but both reduce the risk considerably.",
      },
      {
        question: "Can you come out the same day?",
        answer:
          "Usually, yes. We work 24 hours a day across Harare. Keep the fridge closed and switched off at the wall until we arrive.",
      },
    ],
    cta: {
      title: "Fridge dead after a power cut? We can help today.",
      text: "Call 0782 886 252 or WhatsApp us your suburb and what the fridge is doing. Technicians across Harare, 24 hours a day.",
    },
    schema: {
      serviceName: "Fridge power surge damage repairs in Harare",
      serviceDescription: "Testing and repair of fridges and freezers damaged by power cuts, load shedding and voltage surges across Harare, Zimbabwe.",
      serviceType: "Refrigerator electrical repair",
    },
  },

  {
    slug: "fridge-servicing",
    shortName: "Fridge servicing",
    cardText: "Preventive servicing for home fridges and planned maintenance for shops, restaurants and butcheries.",
    path: "/fridge-servicing",
    title: "Fridge Servicing & Maintenance Harare | Homes & Businesses",
    description:
      "Fridge and freezer servicing in Harare: condenser cleaning, seal and drain checks, temperature and electrical tests. Planned maintenance for shops and restaurants. Call 0782 886 252.",
    eyebrow: "Fridge servicing in Harare",
    h1: "Fridge and Freezer Servicing in Harare",
    lead:
      "Most fridge breakdowns give plenty of warning: dust on the condenser, a tired seal, a drain starting to block, a fan beginning to chirp. A service catches those before they become a callout. Harare Fridge Repairs services household fridges and freezers and provides planned maintenance for commercial refrigeration across Harare.",
    points: [
      "Condenser coils cleaned and airflow checked",
      "Door seals, drains and fans inspected",
      "Temperatures and electrical draw measured",
      "Planned visits for shops, restaurants and butcheries",
    ],
    picture: "condenser",
    pictureAlt: "Technician cleaning the condenser coils of a fridge during a service",
    crumbs: [{ name: "Fridge servicing", path: "/fridge-servicing" }],
    whatsappMessage: "Hi Harare Fridge Repairs, I would like to book a fridge service. My suburb is: ___ and the units are: ___",
    sections: [
      {
        kind: "list",
        heading: "What a fridge service includes",
        intro: "Every service is carried out at your address and finishes with a short report of what we found.",
        items: [
          "Condenser coils cleaned and the fan checked so the compressor can shed heat",
          "Door seals inspected and paper tested all the way round",
          "Defrost drain flushed and the drain tray cleaned",
          "Evaporator and condenser fans checked for noise and wear",
          "Fridge and freezer temperatures measured against the settings",
          "Compressor current and start components checked",
          "Plug, cord and socket inspected for heat damage",
          "Level, door alignment and ventilation gaps checked",
        ],
      },
      {
        kind: "text",
        heading: "Why servicing makes sense in Harare",
        paragraphs: [
          "Dust, heat and power cuts are hard on fridges. Dust on the condenser makes the compressor work longer and hotter. Hot weather in October and November adds to the load, and every restart after load shedding stresses the start components. A fridge that is clean, sealing well and correctly ventilated copes far better with all three.",
          "For businesses the case is even stronger. A beverage chiller, display fridge, butchery counter or cold room that fails on a busy weekend costs far more in lost stock and sales than a planned service. We agree a visit schedule that suits your trading hours and keep a record of each unit.",
        ],
      },
      {
        kind: "feature",
        eyebrow: "For businesses",
        heading: "Planned maintenance for commercial refrigeration",
        paragraphs: [
          "We service underbar fridges, beverage chillers, multideck chillers, display freezers, butchery counters, ice machines and small cold rooms for shops, bars, restaurants, hotels, butcheries and clinics across Harare. Visits can be scheduled early, late or on quieter days.",
          "Each visit covers coil cleaning, seal and door checks, drain and fan checks, temperature logging and electrical checks, and we report anything that needs attention before it fails, with a price, so you can plan the repair.",
        ],
        picture: "commercial",
        pictureAlt: "Technician servicing a commercial display fridge",
        reverse: true,
      },
      {
        kind: "chips",
        heading: "Related pages",
        items: [
          { href: "/commercial-fridge-repairs", label: "Commercial fridge repairs" },
          { href: "/cold-room-repairs", label: "Cold room repairs" },
          { href: "/multideck-chiller-repairs", label: "Multideck chillers" },
          { href: "/tips", label: "Fridge care tips" },
          { href: "/fridge-temperature-settings", label: "Correct fridge temperatures" },
          { href: "/problems/fridge-running-constantly", label: "Fridge running constantly" },
        ],
      },
      { kind: "cards", heading: "Other fridge services in Harare", items: coreServiceCards, columns: 4 },
    ],
    faqs: [
      {
        question: "How often should a fridge be serviced?",
        answer:
          "For a household fridge in a clean kitchen, a check every year or two is plenty. Commercial units in busy, dusty or hot spaces benefit from a service every few months. We will suggest a sensible interval after the first visit.",
      },
      {
        question: "Can I clean the condenser myself?",
        answer:
          "Yes, carefully. Unplug the fridge, then use a soft brush or a vacuum on the coils at the back or underneath. Do not bend the fins or pipes. Our fridge care tips page explains how.",
      },
      {
        question: "Do you service several fridges at one business?",
        answer:
          "Yes. We regularly service all the refrigeration at a site in one visit and keep a simple record per unit, so recurring problems are spotted early.",
      },
      {
        question: "Is a service worth it on an old fridge?",
        answer:
          "Often it is the best value thing you can do for an old fridge. Cleaning the condenser and replacing a tired seal can noticeably reduce running time, and we will tell you honestly if the fridge is close to the end of its life.",
      },
    ],
    cta: {
      title: "Book a fridge service in Harare.",
      text: "Call 0782 886 252 or WhatsApp us the number and type of units and your suburb. We come to you.",
    },
    schema: {
      serviceName: "Fridge servicing and maintenance in Harare",
      serviceDescription: "Preventive servicing of household fridges and freezers and planned maintenance of commercial refrigeration across Harare, Zimbabwe.",
      serviceType: "Refrigerator maintenance",
    },
  },
]
