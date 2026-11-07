import type { FridgeTypeRecord } from "./types"

/**
 * More fridge and freezer types. Each one describes a design that fails in
 * its own way (frost free, inverter, built-in, solar DC, prep counters), so
 * it answers a different search from the existing type pages and links back
 * to them instead of competing.
 */
export const moreFridgeTypes: FridgeTypeRecord[] = [
  /* ------------------------------------------------------------------ */
  /* Home                                                                */
  /* ------------------------------------------------------------------ */
  {
    slug: "frost-free-fridge-repairs",
    name: "Frost free fridge",
    plural: "frost free fridges",
    group: "home",
    usedIn: "Most newer family homes, combis, double doors and side by sides",
    cardText: "No frost fridges that defrost themselves with a fan, heater and sensors.",
    title: "Frost Free Fridge Repairs Harare | No Frost Defrost & Fan Faults",
    description:
      "Frost free fridge repairs in Harare. Ice on the back panel, warm fridge section, fan noise or water under the drawers fixed at your home, 24/7. Call 0782 886 252.",
    h1: "Frost Free Fridge Repairs in Harare",
    lead:
      "A frost free fridge, sold as no frost or total no frost, never needs you to chip ice out of it. That convenience comes from a fan, a heater and a few sensors working together behind the freezer panel, and when one of them fails the whole fridge starts to warm. Harare Fridge Repairs finds which part has stopped and replaces it in your kitchen.",
    points: [
      "Defrost heaters, timers, bimetals and sensors tested and replaced",
      "Evaporator fan and fridge-section fan repairs",
      "Blocked defrost drains cleared, water under drawers stopped",
      "All brands, done at your address anywhere in Harare",
    ],
    intro: [
      "In a frost free fridge the cold is made on a hidden evaporator, usually behind the back wall of the freezer. A fan blows air across it and sends part of that air through a duct into the fridge section. Because moist air keeps freezing onto the evaporator, the fridge switches on a heater a few times a day to melt the frost away, and the water runs down a drain to a tray above the compressor where it evaporates.",
      "Each of those steps can fail on its own. If the heater, the timer, the bimetal or the defrost sensor stops working, frost keeps building until the evaporator is a block of ice and no air can pass. If the fan stops, the cold stays where it is made. If the drain freezes or blocks, melt water spills into the cabinet and freezes on the floor of the freezer or leaks under the salad drawers.",
      "The giveaway is that the fault creeps in over days rather than hours, and that the freezer often stays colder than the fridge. That is why so many frost free fridges in Harare are wrongly regassed. The gas was never the problem; the air path was.",
    ],
    faults: [
      "Thick frost or ice on the back wall of the freezer",
      "Freezer cold but fridge section warm",
      "Fan noise, scraping or ticking from behind the freezer panel",
      "Water under the salad drawers or a sheet of ice on the freezer floor",
      "Fridge cools for a week after switching off, then fails again",
      "Display warning or flashing light on electronic models",
      "Fridge runs all the time and never reaches temperature",
      "Melt water dripping behind the fridge onto the floor",
    ],
    repairNotes: [
      "Our technician removes the freezer back panel, clears the ice properly, and tests each part of the defrost circuit with a meter: heater, thermal fuse, bimetal or sensor, and the timer or board that drives them. The failed part is replaced, the drain is cleared and flushed, and a defrost cycle is forced so you can see it working before we leave.",
      "On fridges with a separate fan and evaporator for the fridge section, such as some Samsung and LG models, we check both systems. If a surge damaged the control board, our control board page explains how that repair is handled.",
    ],
    faqs: [
      {
        question: "Why does my frost free fridge have ice on the back wall?",
        answer:
          "Its automatic defrost has stopped working. The heater, the thermal fuse, the bimetal, the sensor or the timer has failed, so frost is no longer melted away. We test each one and replace the part that failed.",
      },
      {
        question: "Can I just defrost my frost free fridge by hand?",
        answer:
          "Switching it off with the doors open for a day melts the ice and brings cooling back for a while, which also confirms the diagnosis. The failed defrost part is still there, though, so the ice comes back within one to three weeks.",
      },
      {
        question: "Is a frost free fridge more expensive to repair than a normal fridge?",
        answer:
          "It has more parts, so there is more to test, but the common faults are heaters, sensors and fans, which are repaired at home in one visit. Most frost free repairs do not involve gas at all.",
      },
      {
        question: "Why is there water under the crisper drawers?",
        answer:
          "The defrost drain is blocked or frozen, so melt water overflows into the fridge instead of running to the tray at the back. We clear the drain and check why it froze, often a heater clip or a drain heater that has failed.",
      },
    ],
    related: ["combi-fridge-repairs", "double-door-fridge-repairs", "side-by-side-fridge-repairs", "inverter-fridge-repairs"],
    picture: "freezerIce",
    pictureAlt: "Ice built up on the evaporator panel of a frost free freezer before repair",
  },

  {
    slug: "inverter-fridge-repairs",
    name: "Inverter fridge",
    plural: "inverter fridges",
    group: "home",
    usedIn: "Newer Samsung, LG, Hisense, Bosch and Defy fridges",
    cardText: "Fridges with a variable speed compressor driven by an electronic inverter board.",
    title: "Inverter Fridge Repairs Harare | Inverter Board & Compressor",
    description:
      "Inverter fridge repairs in Harare: inverter board, sensor and variable speed compressor faults on Samsung, LG, Hisense and other brands, fixed at home 24/7.",
    h1: "Inverter Fridge Repairs in Harare",
    lead:
      "An inverter fridge does not switch its compressor hard on and off. An electronic board speeds it up and slows it down to match demand, which makes it quiet and economical, and also means it needs a different kind of diagnosis. Harare Fridge Repairs tests inverter boards, sensors and compressors properly, at your address, 24 hours a day.",
    points: [
      "Digital, smart and linear inverter compressors",
      "Inverter board and main board testing after surges",
      "Sensor checks against the manufacturer's values",
      "Matched replacement compressors, never a guess",
    ],
    intro: [
      "A fixed speed fridge has a simple chain: thermostat, relay, compressor. An inverter fridge replaces the relay with an inverter board that turns mains power into a variable supply for a three phase style compressor motor. The main board reads several temperature sensors and tells the inverter board how fast to run. When the fridge stops cooling, the fault can be in any link of that chain, and the compressor itself is often the last thing to blame.",
      "In Harare the most common cause is power. Load shedding restarts and voltage spikes damage inverter boards and main boards far more often than they damage the compressor. A typical story is a fridge that went silent after the power came back, or one that starts, runs for a few seconds and stops, again and again.",
      "Testing an inverter compressor with an ordinary meter across two terminals, the way you would a fixed speed one, can give a misleading answer. We measure all three windings, check what the inverter board is actually supplying, and use the fridge's own test mode where the brand provides one, before saying which part has failed.",
    ],
    faults: [
      "Fridge completely silent after a power cut or surge",
      "Compressor starts, runs a few seconds and stops, repeatedly",
      "Error code or flashing light on the display",
      "Fridge cooling weakly while the compressor runs constantly",
      "Clicking from the back with no compressor running",
      "Burning smell or scorch marks on the board behind the fridge",
      "One compartment fine, the other warm",
      "Fridge working only at night when voltage is steadier",
    ],
    repairNotes: [
      "Most inverter fridge repairs are boards and sensors, which are replaced on site. When a board has failed we also look for the reason, such as a shorted fan or a damaged cord, so the new board is not destroyed by the same fault. Where the compressor has genuinely failed, it is replaced with the matched inverter unit for your model, then the system is evacuated and recharged with the right refrigerant.",
      "Because inverter parts are model specific, send us the model number from the sticker inside the fridge when you book. That lets us check parts before the visit and saves you a second trip. A voltage protector with a start delay is worth fitting afterwards; our power cut guide explains why.",
    ],
    faqs: [
      {
        question: "What is an inverter fridge?",
        answer:
          "It is a fridge whose compressor runs at variable speed under the control of an electronic inverter board, instead of switching fully on and off. Samsung Digital Inverter, LG Smart and Linear Inverter and many Hisense, Bosch and Defy models work this way.",
      },
      {
        question: "My inverter fridge stopped after load shedding. Is the compressor gone?",
        answer:
          "Usually not. Power restarts and spikes most often damage the inverter board or main board, which are replaced at home. We test the board output and the compressor windings to be sure before quoting.",
      },
      {
        question: "Can an inverter compressor be replaced with a normal one?",
        answer:
          "It should not be. The control system is designed for its inverter compressor, and a mismatched part gives poor cooling and repeat faults. We fit the matched compressor for the model.",
      },
      {
        question: "Is an inverter fridge good on solar or a home inverter?",
        answer:
          "Generally yes, because it starts gently and draws less current at start up than a fixed speed fridge. A pure sine wave supply is best for the electronics.",
      },
    ],
    related: ["frost-free-fridge-repairs", "combi-fridge-repairs", "side-by-side-fridge-repairs", "french-door-fridge-repairs"],
    picture: "controlBoard",
    pictureAlt: "Technician testing a fridge control board and inverter electronics",
  },

  {
    slug: "built-in-fridge-repairs",
    name: "Built-in fridge",
    plural: "built-in and integrated fridges",
    group: "home",
    usedIn: "Fitted kitchens, apartments, newer townhouses and estates",
    cardText: "Integrated fridges and freezers hidden behind kitchen cabinet doors.",
    title: "Built-in Fridge Repairs Harare | Integrated Fridges & Freezers",
    description:
      "Built-in and integrated fridge repairs in Harare. Bosch, Siemens, Miele, Smeg and other fitted fridges repaired inside the kitchen unit, 24/7. Call 0782 886 252.",
    h1: "Built-in and Integrated Fridge Repairs in Harare",
    lead:
      "A built-in fridge lives inside a kitchen cupboard, with a cabinet door fixed to its own door. It looks tidy, but it cannot simply be pulled out and turned around like a freestanding fridge. Harare Fridge Repairs repairs integrated fridges and freezers in place wherever possible, and takes care with the cabinetry when the unit has to come out.",
    points: [
      "Fully integrated and under-counter built-in units",
      "Ventilation, plinth and condenser airflow checks",
      "Door sliders, hinges and cabinet door alignment",
      "Careful removal and refitting when it is unavoidable",
    ],
    intro: [
      "Built-in fridges are designed to breathe through gaps at the plinth and the top of the cabinet. Warm air from the condenser has to leave through that channel. When a kitchen is fitted without the right ventilation, or the gap is blocked later by a new plinth or a pile of trays, the fridge runs hot, works hard all day and wears its compressor out early.",
      "The other weak point is the door. The cabinet door is joined to the fridge door by sliders or a fixed door-on-door bracket. If the sliders wear or the cabinet door is heavy, the fridge door drops, the seal stops touching at one corner and frost builds up inside. It looks like a cooling fault but it is a hardware one.",
      "Electrical and sealed system faults are the same as on freestanding models: sensors, boards, fans, defrost parts, thermostats and, now and then, a leak or a tired compressor. The difference is access, and that is where experience with fitted kitchens matters.",
    ],
    faults: [
      "Fridge running all the time with a hot cabinet around it",
      "Frost building at one corner of the fridge or freezer",
      "Fridge door dropping or not closing with the cabinet door",
      "Worn or broken door sliders and hinges",
      "Warm fridge section on integrated combi models",
      "Water collecting at the bottom of the cabinet",
      "Error lights or alarms on the control panel",
      "Compressor noise transmitted through the kitchen units",
    ],
    repairNotes: [
      "Most built-in repairs are done with the fridge in its housing: controls, sensors, fans, defrost parts and door hardware are reached from the front. When the compressor or the condenser must be worked on, we remove the unit from the housing, protect the worktop and cabinet doors, and refit it with the correct ventilation gap so the fault does not come back.",
      "Bosch, Siemens, Miele, Smeg and AEG are the integrated brands we see most in Harare, and each brand page explains its common faults. If your kitchen fitter boxed the fridge in without a vent, we will show you where air needs to flow.",
    ],
    faqs: [
      {
        question: "Can you repair a built-in fridge without removing it?",
        answer:
          "Often, yes. Controls, sensors, fans, defrost parts, seals and door hardware are reached from the front. Compressor or condenser work usually means taking the unit out of its housing, which we do carefully and refit afterwards.",
      },
      {
        question: "Why does my integrated fridge run all the time?",
        answer:
          "The most common reason is poor ventilation: the condenser heat cannot escape through the plinth and top gaps. A dirty condenser, a worn door seal or a failing fan can add to it. We check the airflow path as well as the fridge itself.",
      },
      {
        question: "My built-in fridge door does not close properly. Can it be fixed?",
        answer:
          "Yes. It is usually worn door sliders, loose hinges or a cabinet door that is too heavy or misaligned. Replacing the sliders and adjusting the hinges lets the seal close fully again.",
      },
      {
        question: "Do you repair built-in freezers too?",
        answer:
          "Yes, integrated freezers and the freezer sections of built-in combis are repaired the same way.",
      },
    ],
    related: ["combi-fridge-repairs", "frost-free-fridge-repairs", "under-counter-fridge-repairs", "upright-freezer-repairs"],
    picture: "homeVisit",
    pictureAlt: "Fridge technician on a home visit working in a fitted kitchen",
  },

  {
    slug: "solar-fridge-repairs",
    name: "Solar fridge",
    plural: "solar and DC fridges and freezers",
    group: "home",
    usedIn: "Homes with backup power, plots, farms and smallholdings around Harare",
    cardText: "12 V and 24 V DC fridges and chest freezers that run straight off solar batteries.",
    title: "Solar Fridge Repairs Harare | 12V & 24V DC Fridges and Freezers",
    description:
      "Solar and DC fridge repairs in Harare: 12 V and 24 V fridges and chest freezers with DC compressors and control modules, repaired on site, 24/7. Call 0782 886 252.",
    h1: "Solar and DC Fridge and Freezer Repairs in Harare",
    lead:
      "With long power cuts, many Harare homes and plots now keep food in a fridge or chest freezer that runs straight from a solar battery. These DC units use a different compressor and an electronic control module, so they fail in their own ways. Harare Fridge Repairs repairs the fridge itself and tells you plainly when the real problem is the battery or the wiring.",
    points: [
      "12 V and 24 V DC fridges and chest freezers",
      "DC compressor and electronic control module testing",
      "Low voltage cut-out and wiring checks",
      "Sealed system repairs and regassing",
    ],
    intro: [
      "A DC fridge has no plug for the wall. It runs from a battery charged by solar panels, through a small electronic module bolted to the compressor that acts as the starter and speed control. The module watches the battery voltage and stops the compressor if it drops too low, which protects the battery but is also the most common reason a solar fridge seems to stop working.",
      "So the first question is always the supply. Thin or long cables between the battery and the fridge lose voltage when the compressor starts, and the module sees that dip as a flat battery. Loose lugs, corroded fuses and a tired battery do the same. A good technician measures the voltage at the fridge terminals while the compressor tries to start, not just at the battery.",
      "When the supply is good, the faults are the familiar ones: a failed control module, a thermostat or sensor, a fan on models that have one, a worn door seal, and occasionally a refrigerant leak or a compressor that has stopped pumping. These are repaired on site like any other fridge.",
    ],
    faults: [
      "Fridge or freezer stops in the evening as the battery voltage drops",
      "Compressor clicks or tries to start, then gives up",
      "Flashing LED on the compressor control module",
      "Freezer not getting cold enough even on a sunny day",
      "Fridge running constantly and draining the battery",
      "Frost build-up from a worn lid or door seal",
      "Burnt fuse or hot cable near the fridge",
      "Unit dead after a lightning storm",
    ],
    repairNotes: [
      "We start with the supply: voltage at the fridge terminals during start up, cable size and length, fuses and connections. If the module is in fault, many show a flash code that points to the cause, such as low voltage, fan overcurrent or a failed start. Faulty modules, thermostats, seals and fans are replaced on site, and leaks are repaired and regassed with the correct charge.",
      "We repair the fridge or freezer. If the battery bank, the charge controller or the panels are the problem, we will show you the readings and suggest you call your solar installer, rather than replacing fridge parts that are not faulty.",
    ],
    faqs: [
      {
        question: "Why does my solar freezer stop working at night?",
        answer:
          "Almost always low voltage. As the battery drains after sunset, the compressor control module cuts out to protect it. Undersized cables, loose connections or an ageing battery make it cut out sooner. We measure the voltage at the fridge while it starts to find the cause.",
      },
      {
        question: "Can you repair a 12 V DC compressor?",
        answer:
          "We test the compressor and its electronic control module separately. The module is the part that fails most often and is replaced on site. If the compressor itself has failed, it can be replaced and the system recharged.",
      },
      {
        question: "Can a normal fridge be converted to run on solar DC?",
        answer:
          "It is not something we recommend. A normal mains fridge runs well on a good pure sine wave inverter instead, and our power cut guide covers that. A dedicated DC fridge is a better choice for a system without an inverter.",
      },
      {
        question: "Do you work on plots and farms outside the city?",
        answer:
          "We cover Harare and the nearby towns listed on our areas page. Tell us where the fridge is when you call and we will confirm.",
      },
    ],
    related: ["chest-freezer-repairs", "upright-freezer-repairs", "inverter-fridge-repairs", "single-door-fridge-repairs"],
    picture: "compressorTest",
    pictureAlt: "Technician testing a fridge compressor supply with a meter",
  },

  /* ------------------------------------------------------------------ */
  /* Commercial                                                          */
  /* ------------------------------------------------------------------ */
  {
    slug: "prep-table-fridge-repairs",
    name: "Prep table fridge",
    plural: "refrigerated prep tables and saladettes",
    group: "commercial",
    usedIn: "Restaurant kitchens, pizza and burger outlets, takeaways, hotel kitchens",
    cardText: "Saladettes, pizza prep counters and sandwich units with a chilled top rail.",
    title: "Prep Table Fridge Repairs Harare | Saladettes & Pizza Counters",
    description:
      "Refrigerated prep table repairs in Harare for saladettes, pizza prep counters and sandwich units. Warm top rail, icing and fan faults fixed on site, 24/7.",
    h1: "Refrigerated Prep Table and Saladette Repairs in Harare",
    lead:
      "A prep table is a fridge and a work surface in one: chilled pans of toppings along the top, a refrigerated cabinet below and a cutting board in between. When the top rail goes warm during service, the kitchen has a food safety problem straight away. Harare Fridge Repairs repairs saladettes and pizza prep counters on site, around your trading hours.",
    points: [
      "Saladettes, pizza prep counters and sandwich prep units",
      "Warm top rail, icing coils and fan faults",
      "Grease-clogged condensers cleaned in hot kitchens",
      "Visits before opening, after closing or at night",
    ],
    intro: [
      "The top rail of a prep table holds open pans of cut food at a safe temperature while the kitchen works around it. Cold air is blown or drawn over the pans from the cabinet below, and the lid or night cover is meant to be closed whenever the line is quiet. That open design makes the rail the hardest part of the unit to keep cold, and the first place a fault shows.",
      "Kitchens are hard on refrigeration. The air around the unit is hot and full of grease and flour, which cakes onto the condenser and fan blades and makes the compressor run hotter for longer. Drawers and doors are opened hundreds of times a shift, so gaskets and hinges wear quickly. Spilled sauce and water find their way into the evaporator drain.",
      "Most prep table breakdowns we attend in Harare start with a dirty condenser or a failed fan and end with a cabinet that iced over or a compressor that overheated. Caught early, they are simple repairs.",
    ],
    faults: [
      "Top rail warm while the cabinet below is cold",
      "Pans freezing at one end and warm at the other",
      "Ice building on the evaporator or inside the cabinet",
      "Condenser fan stopped or caked in grease",
      "Water pooling on the cabinet floor or under the unit",
      "Drawer or door gaskets torn and not sealing",
      "Controller showing a high temperature alarm",
      "Compressor tripping on overload during the lunch rush",
    ],
    repairNotes: [
      "We clean the condenser and fan properly, check refrigerant pressures and compressor current, test the evaporator fan and defrost, and confirm that the rail and cabinet both reach temperature with the lid open, the way the unit is used in service. Gaskets, fans, controllers and thermostats are replaced on site, and leaks are found and repaired before any regas.",
      "To avoid interrupting service we can come before opening, after closing or overnight. A regular condenser clean is the single best way to keep a prep table reliable; our fridge servicing page covers planned visits for kitchens.",
    ],
    faqs: [
      {
        question: "Why is the top of my prep table warm but the bottom cold?",
        answer:
          "The rail depends on airflow from the cabinet. A failed or iced evaporator fan, a blocked air path, an overfilled rail or a lid left open all stop cold air reaching the pans. A dirty condenser can add to it on hot days. We check each one.",
      },
      {
        question: "How often should a kitchen prep table be serviced?",
        answer:
          "In a busy kitchen the condenser can clog with grease in a few months. A check and clean every three to six months keeps it running well. We can suggest a schedule for your kitchen.",
      },
      {
        question: "Can you repair it without stopping our kitchen?",
        answer:
          "Yes. We can come before opening, after closing or at night. If the repair needs the unit off for a while, we tell you how long so you can move the pans to another fridge.",
      },
      {
        question: "Do you repair pizza prep counters too?",
        answer:
          "Yes, pizza prep counters with granite or stainless tops, saladettes and sandwich prep units are all repaired the same way.",
      },
    ],
    related: ["under-counter-fridge-repairs", "commercial-upright-fridge-repairs", "underbar-fridge-repairs", "cold-room-repairs"],
    picture: "condenser",
    pictureAlt: "Technician cleaning the condenser of a commercial kitchen fridge",
  },
]
