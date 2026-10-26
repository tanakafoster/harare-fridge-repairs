import type { ContentPage } from "./model"

export type ServiceRecord = ContentPage & {
  slug: string
  shortName: string
  cardText: string
}

const problemLinks = [
  { href: "/problems/fridge-not-cooling", label: "Fridge not cooling" },
  { href: "/problems/fridge-leaking-water", label: "Fridge leaking water" },
  { href: "/problems/fridge-making-noise", label: "Fridge making noise" },
  { href: "/problems/fridge-freezing-food", label: "Fridge freezing food" },
  { href: "/problems/fridge-not-switching-on", label: "Fridge not switching on" },
  { href: "/problems/freezer-not-freezing", label: "Freezer not freezing" },
  { href: "/problems/ice-build-up", label: "Ice build up" },
  { href: "/problems/fridge-compressor-problems", label: "Compressor problems" },
  { href: "/problems/fridge-running-constantly", label: "Fridge running constantly" },
  { href: "/problems/fridge-door-seal-problems", label: "Door seal problems" },
]

export const services: ServiceRecord[] = [
  {
    slug: "fridge-repairs",
    shortName: "Fridge repairs",
    cardText: "Diagnosis and repair of any household or commercial fridge at your address, anywhere in Harare.",
    path: "/fridge-repairs",
    title: "Fridge Repairs Harare | Mobile Fridge Technicians, 24/7",
    description:
      "Fridge repairs in Harare at your home or business. We diagnose cooling faults, leaks, noise, electrical and compressor problems on all fridge brands, 24 hours a day. Call 0782 886 252.",
    eyebrow: "Fridge repairs in Harare",
    h1: "Fridge Repairs in Harare, At Your Address",
    lead:
      "A fridge that has stopped cooling cannot wait until Monday. Harare Fridge Repairs sends a refrigeration technician to your home, shop or kitchen anywhere in Harare, finds the real fault and fixes it on the spot wherever parts allow. We work on fridges and freezers only, which is why we are quick at it.",
    points: [
      "All brands, from Defy and KIC to Samsung, LG, Hisense and Bosch",
      "Single door, double door, combi, side by side and French door fridges",
      "Fault explained and price agreed before work starts",
      "Night, weekend and public holiday callouts",
    ],
    picture: "heroTechnician",
    pictureAlt: "Refrigeration technician checking a fridge in a Harare kitchen",
    crumbs: [{ name: "Fridge repairs", path: "/fridge-repairs" }],
    whatsappMessage: "Hi Harare Fridge Repairs, I need a fridge repair. My suburb is: ___ and the fridge is doing this: ___",
    sections: [
      {
        kind: "text",
        heading: "What a fridge repair callout involves",
        paragraphs: [
          "Most fridge faults announce themselves the same way: food is warmer than it should be, there is water where there should not be, or the unit is making a sound you have not heard before. The cause behind each of those symptoms varies a great deal, so the first job on every callout is a proper diagnosis rather than a guess from the symptom alone.",
          "The technician checks the compressor and its start relay and overload, the condenser and evaporator fans, the thermostat or electronic control, the defrost system on frost free models, the door gaskets, and the temperatures inside the cabinet. Only once the fault is confirmed do we talk about parts and price. Many repairs, such as a failed relay, a stuck thermostat, a burnt out fan motor or a torn gasket, are finished in the same visit.",
          "If the problem is in the sealed system, meaning a refrigerant leak, a blocked capillary or filter drier, or a compressor that no longer pumps, we explain what that repair involves and what it will cost before anything is opened. You decide whether to repair or replace with the facts in front of you.",
        ],
      },
      {
        kind: "list",
        heading: "Fridge faults we repair every week",
        intro: "These are the problems that fill our diary across Harare. Each one links to a page that explains the likely causes and what we do about them.",
        items: [
          "Fridge running but not cooling, or cooling on one side only",
          "Fridge too cold, with salad and milk freezing on the shelves",
          "Water pooling under the crisper drawers or on the kitchen floor",
          "Loud buzzing, clicking or rattling from the back of the fridge",
          "Fridge dead with no light and no sound after a power cut",
          "Compressor starting and stopping every few seconds",
          "Thick ice on the back wall of a frost free fridge",
          "Fridge running all day and never switching off",
          "Door not sealing, sweating on the outside or a warm door shelf",
          "Burning smell, tripping earth leakage or a warm plug",
        ],
      },
      {
        kind: "feature",
        eyebrow: "Why the fault matters more than the symptom",
        heading: "We repair the cause, not just the symptom",
        paragraphs: [
          "A fridge that is not cooling is sometimes short of gas, but just as often it is a fan that has seized, a defrost heater that has failed and allowed the evaporator to ice over, a thermostat stuck open, or a relay that is not letting the compressor start. Regassing a fridge with a frozen evaporator wastes your money and leaves the fault in place.",
          "That is why our technicians carry a thermometer, a clamp meter and gauges on every callout and measure before they recommend anything. You get a clear explanation of what failed, why, and what the repair will cost. If regassing really is needed, we find and repair the leak first, because gas on its own will escape again within weeks.",
        ],
        picture: "compressor",
        pictureAlt: "Technician inspecting the compressor compartment at the back of a fridge",
      },
      {
        kind: "steps",
        heading: "How a fridge repair with us works",
        items: [
          { title: "Call or WhatsApp", text: "Tell us your suburb, the brand and what the fridge is doing. A photo or short video of the fault helps us arrive with the right parts." },
          { title: "We come to you", text: "A technician travels to your address anywhere in Harare, at a time that suits you, including evenings and weekends." },
          { title: "Diagnosis and quote", text: "We test the fridge, show you the fault and give you a price. Nothing is replaced without your go ahead." },
          { title: "Repair and test", text: "The repair is done on site where parts allow, then the fridge is run and temperatures checked before we leave." },
        ],
      },
      {
        kind: "chips",
        heading: "Fridge problems explained",
        intro: "Read about the fault you are seeing before you call, so you know what to expect.",
        items: problemLinks,
      },
      {
        kind: "cards",
        heading: "Related fridge services in Harare",
        items: [
          { href: "/fridge-regassing", label: "Fridge regassing", text: "Leak testing, vacuuming and recharging with the correct refrigerant for your fridge." },
          { href: "/compressor-replacement", label: "Compressor replacement", text: "Replacing seized or burnt out compressors on household and commercial fridges." },
          { href: "/thermostat-replacement", label: "Thermostat replacement", text: "Mechanical thermostats and electronic sensors that no longer control temperature." },
          { href: "/freezer-repairs", label: "Freezer repairs", text: "Chest freezers and upright freezers that are not freezing or are icing up." },
          { href: "/refrigerator-repairs", label: "Repairs by fridge type", text: "From bar fridges to side by side cabinets, each type has its own page." },
          { href: "/24-hour-fridge-repairs", label: "24 hour fridge repairs", text: "After hours and emergency callouts across Harare, every day of the year." },
        ],
      },
    ],
    faqs: [
      {
        question: "How quickly can you repair my fridge in Harare?",
        answer:
          "We work 24 hours a day and travel to every part of Harare, so in most cases a technician can be with you the same day you call. Tell us your suburb and the fault when you book and we will give you an honest arrival time.",
      },
      {
        question: "Do I need to bring the fridge to a workshop?",
        answer:
          "No. We are a mobile service and repair fridges where they stand. That avoids the risk of damaging the fridge in transport and means you are not without a fridge for days. The rare job that needs workshop equipment is explained to you first.",
      },
      {
        question: "How much does a fridge repair cost in Harare?",
        answer:
          "The price depends on the fault and the part, so we quote after the diagnosis and before any work is done. You will never be surprised by the bill. Simple repairs such as a relay, thermostat or fan are usually far cheaper than people expect.",
      },
      {
        question: "Which fridge brands do you repair?",
        answer:
          "All of them. The brands we see most in Harare are Defy, KIC, Kelvinator, Samsung, LG, Hisense, Capri, Bosch and Whirlpool, but we also repair Haier, Midea, Beko, Smeg, Miele, Siemens, AEG, Electrolux, FRESH, Alaska, Tornado, White Whale, TCL, SPJ and Hybrid fridges.",
      },
      {
        question: "Is it worth repairing an old fridge?",
        answer:
          "Often yes. Older fridges with mechanical thermostats and simple compressors are reliable and cheap to keep running. If the repair cost gets close to the value of the fridge, we tell you so, and you can read our repair or replace guide for the questions to ask.",
      },
    ],
    cta: {
      title: "Fridge not cooling? Call Harare Fridge Repairs now.",
      text: "A technician can be on the way to your address in Harare today. Call 0782 886 252 or send a WhatsApp with your suburb and the fault.",
    },
    schema: {
      serviceName: "Fridge repairs in Harare",
      serviceDescription: "Mobile diagnosis and repair of household and commercial fridges across Harare, Zimbabwe, 24 hours a day.",
      serviceType: "Refrigerator repair",
    },
  },

  {
    slug: "fridge-regassing",
    shortName: "Fridge regassing",
    cardText: "Leak test, repair, vacuum and recharge with the correct refrigerant, done properly at your address.",
    path: "/fridge-regassing",
    title: "Fridge Regassing Harare | Leak Test & Gas Refill, 24/7",
    description:
      "Fridge regassing in Harare done properly: leak detection, repair, vacuum and recharge with R134a, R600a or R404A. Mobile service for homes and businesses. Call 0782 886 252.",
    eyebrow: "Fridge regassing in Harare",
    h1: "Fridge Regassing in Harare, Done the Right Way",
    lead:
      "A fridge does not use up gas. If yours is low on refrigerant, it has a leak, and a refill without a leak repair is money poured down the drain. Harare Fridge Repairs finds the leak, repairs it, pulls a deep vacuum and recharges the system to the weight on the rating plate, at your address, any time of day.",
    points: [
      "R134a, R600a, R290, R404A and R22 systems",
      "Electronic leak detection and nitrogen pressure testing",
      "Vacuum pump used on every recharge, no shortcuts",
      "Household fridges, chest freezers and commercial units",
    ],
    picture: "regassing",
    pictureAlt: "Technician regassing a fridge with manifold gauges and a refrigerant cylinder",
    crumbs: [{ name: "Fridge regassing", path: "/fridge-regassing" }],
    whatsappMessage: "Hi Harare Fridge Repairs, I think my fridge needs regassing. My suburb is: ___ and the fridge is: ___",
    sections: [
      {
        kind: "text",
        heading: "Does your fridge really need regassing?",
        paragraphs: [
          "Regassing is one of the most over sold repairs in Harare. A fridge that is not cooling is more often suffering from a seized fan, a blocked defrost drain, a failed defrost heater, a faulty thermostat or a compressor relay than from a gas shortage. Those faults cost far less to fix and gas would not have helped.",
          "The genuine signs of low refrigerant are quite specific: the compressor runs constantly and feels hot, the evaporator only frosts up in one small patch near the inlet instead of evenly, the cabinet slowly loses cooling over weeks rather than failing overnight, and sometimes there is an oily stain near a pipe joint where refrigerant has been escaping with a little compressor oil.",
          "Our technician measures the running pressures and the temperatures across the evaporator before concluding anything. If the gas charge is correct, you are told so and we move on to the real fault. Read our guide on whether your fridge needs regassing if you want the full checklist.",
        ],
      },
      {
        kind: "steps",
        heading: "What a proper regas involves",
        intro: "Anyone can connect a cylinder and top up. A lasting repair takes five steps, and we do all of them on site.",
        items: [
          { title: "Find the leak", text: "Electronic leak detector, soap test and, where needed, a nitrogen pressure test to find the exact joint, pipe or evaporator that is leaking." },
          { title: "Repair it", text: "Brazing the joint, replacing a corroded section of pipe, or replacing a leaking evaporator or condenser. The filter drier is replaced at the same time." },
          { title: "Pull a vacuum", text: "A vacuum pump removes air and moisture from the system. Skipping this step leads to ice blockages and a failed compressor months later." },
          { title: "Charge by weight", text: "The exact gas and charge weight printed on the rating plate is measured in with a scale, then pressures and temperatures are checked while the fridge runs." },
        ],
      },
      {
        kind: "feature",
        eyebrow: "Refrigerants",
        heading: "The right gas for your fridge",
        paragraphs: [
          "Household fridges made before about 2015 almost all use R134a. Newer fridges from Samsung, LG, Hisense, Bosch, Defy and most other brands use R600a, a hydrocarbon refrigerant that needs smaller charges, careful handling and different equipment. Commercial fridges, beverage chillers and freezers often use R404A or R290, and some old chest freezers and cold rooms still run R22.",
          "Putting the wrong gas in a fridge, or mixing gases, ruins cooling performance and can damage the compressor. We carry the common refrigerants on the vehicle and always match the gas on the rating plate. If a plate is missing or unreadable, the compressor model tells us what the system was designed for.",
        ],
        picture: "rearService",
        pictureAlt: "Technician working on the pipework at the back of a fridge",
        reverse: true,
      },
      {
        kind: "list",
        heading: "Where fridges leak",
        intro: "Knowing the common leak points is why we can usually fix a leak in a single visit.",
        columns: 2,
        items: [
          "Brazed joints at the compressor and filter drier",
          "Aluminium evaporators corroded by food acids or pierced while defrosting with a knife",
          "Condenser pipes rusted at the back of the fridge",
          "Capillary tube chafed where it enters the evaporator",
          "Commercial units with vibration cracks at the compressor",
          "Pipework damaged when a fridge was moved",
        ],
      },
      {
        kind: "chips",
        heading: "Regassing by fridge type",
        items: [
          { href: "/chest-freezer-repairs", label: "Chest freezers" },
          { href: "/double-door-fridge-repairs", label: "Double door fridges" },
          { href: "/side-by-side-fridge-repairs", label: "Side by side fridges" },
          { href: "/beverage-chiller-repairs", label: "Beverage chillers" },
          { href: "/cold-room-repairs", label: "Cold rooms" },
          { href: "/display-freezer-repairs", label: "Display freezers" },
          { href: "/fridge-regassing-cost-harare", label: "Regassing cost guide" },
          { href: "/does-my-fridge-need-regassing", label: "Does my fridge need regassing?" },
        ],
      },
    ],
    faqs: [
      {
        question: "How much does fridge regassing cost in Harare?",
        answer:
          "It depends on the type of gas, the size of the system and whether a leak repair or filter drier is needed. We quote after testing the fridge and before we start. Beware of very cheap regassing offers that skip the leak repair and vacuum; the gas will be gone again within weeks.",
      },
      {
        question: "How long does regassing take?",
        answer:
          "Leak testing, repair, vacuum and charging usually take between one and three hours on a household fridge. Large commercial units and cold rooms can take longer. The fridge is then left running and should be cold within a few hours.",
      },
      {
        question: "How often should a fridge be regassed?",
        answer:
          "Never, if the system is sealed. A fridge that needs regassing every year has a leak that was never repaired. Once a leak is fixed properly the gas charge should last the life of the fridge.",
      },
      {
        question: "Can you regas a fridge at my house?",
        answer:
          "Yes. All our regassing is done on site in Harare with a vacuum pump, gauges, scale and brazing equipment carried on the vehicle. You do not need to transport the fridge anywhere.",
      },
      {
        question: "My fridge was regassed recently and is warm again. What happened?",
        answer:
          "Either the leak was never repaired, the system was not vacuumed and has an ice or moisture blockage, or the wrong gas or charge weight was used. We will test the pressures and tell you which it is before recommending anything.",
      },
    ],
    cta: {
      title: "Need a fridge regassed in Harare?",
      text: "We test first, then repair the leak and recharge properly. Call 0782 886 252 or WhatsApp us your suburb and fridge details.",
    },
    schema: {
      serviceName: "Fridge regassing in Harare",
      serviceDescription: "Mobile fridge regassing in Harare including leak detection, leak repair, vacuum and refrigerant recharge.",
      serviceType: "Refrigerator regassing",
    },
  },

  {
    slug: "freezer-repairs",
    shortName: "Freezer repairs",
    cardText: "Chest freezers and upright freezers that are not freezing, icing up or running non stop.",
    path: "/freezer-repairs",
    title: "Freezer Repairs Harare | Chest & Upright Freezer Technicians",
    description:
      "Freezer repairs in Harare for chest freezers, upright freezers and deep freezers that are not freezing, icing up, leaking or not starting. Mobile technicians, 24 hours. Call 0782 886 252.",
    eyebrow: "Freezer repairs in Harare",
    h1: "Freezer Repairs in Harare for Chest and Upright Freezers",
    lead:
      "A freezer full of meat is a lot of money to lose. Harare Fridge Repairs attends chest freezers, upright freezers and deep freezers across Harare, day and night, and gets them freezing again before the contents thaw. From a family freezer in Waterfalls to a bank of chest freezers in a Mbare butchery, the work is the same: find the fault, fix it properly.",
    points: [
      "Chest freezers, upright freezers and fridge-freezer units",
      "KIC, Defy, Kelvinator, Capri, Hisense and all other brands",
      "Thermostats, compressors, relays, gaskets and regassing",
      "Commercial freezers for butcheries, tuck shops and kitchens",
    ],
    picture: "chestFreezer",
    pictureAlt: "Technician measuring the temperature inside a chest freezer",
    crumbs: [{ name: "Freezer repairs", path: "/freezer-repairs" }],
    whatsappMessage: "Hi Harare Fridge Repairs, my freezer needs repair. My suburb is: ___ and the freezer is: ___",
    sections: [
      {
        kind: "text",
        heading: "Why freezers fail in Harare",
        paragraphs: [
          "Freezers in Harare have a hard life. Load shedding means the compressor is asked to restart against high pressure several times a day, which wears out start relays and overloads and eventually the compressor itself. Voltage dips and spikes when power returns damage thermostats and electronic controls. Many chest freezers also stand in garages or outbuildings where dust blocks the condenser and the compressor overheats.",
          "On top of that, lids and doors get opened constantly in a busy household or tuck shop, so gaskets harden and tear, warm air gets in, and the freezer ices up until the cooling surface is buried under frost. Each of those problems has a specific fix, and none of them is solved by adding gas.",
          "When our technician arrives, the first checks are the running current of the compressor, the temperature of the cabinet and the condition of the evaporator frost pattern. Those three readings separate a gas problem from an electrical problem from an airflow problem within minutes.",
        ],
      },
      {
        kind: "list",
        heading: "Freezer faults we repair",
        items: [
          "Freezer running but food is soft or thawing",
          "Chest freezer not freezing at the bottom or at one end",
          "Compressor humming then clicking off every few seconds",
          "Freezer completely dead after a power cut or surge",
          "Thick ice on the walls that comes back days after defrosting",
          "Water leaking from under the freezer",
          "Freezer running continuously and the sides very hot",
          "Lid or door no longer sealing, with frost around the rim",
          "Upright freezer drawers frozen shut or fan not running",
          "Freezer tripping the earth leakage or blowing a plug fuse",
        ],
      },
      {
        kind: "feature",
        eyebrow: "Chest freezers",
        heading: "Chest freezer repairs at your home or shop",
        paragraphs: [
          "Chest freezers are the most common freezer in Zimbabwe for a reason: they are simple, roomy and keep cold for a long time when the power goes. Most faults are the thermostat, the start relay and overload on the compressor, a torn lid gasket, or a refrigerant leak in the evaporator coils buried in the cabinet walls.",
          "We repair chest freezers from KIC, Defy, Kelvinator, Capri, Hisense, Samsung, Haier, Midea and FRESH on site. The freezer stays where it is, and in most cases the contents can stay inside while we work. Where a leak is in the wall evaporator we explain the options honestly, because some are not worth repairing.",
        ],
        picture: "freezerNotFreezing",
        pictureAlt: "Technician inspecting the inside of a chest freezer with a torch and thermometer",
      },
      {
        kind: "steps",
        heading: "Our freezer repair process",
        items: [
          { title: "Book", text: "Call or WhatsApp with your suburb, the type of freezer and what it is doing. Tell us if it is full of stock so we can prioritise." },
          { title: "Diagnose", text: "Compressor current, cabinet temperature, frost pattern, thermostat and gasket are checked and the fault confirmed." },
          { title: "Quote", text: "You get a clear price for the repair before any part is fitted. If a repair is not worth it, we say so." },
          { title: "Repair and verify", text: "The freezer is repaired on site and left running until it is pulling down to temperature correctly." },
        ],
      },
      {
        kind: "chips",
        heading: "More on freezers",
        items: [
          { href: "/chest-freezer-repairs", label: "Chest freezer repairs" },
          { href: "/upright-freezer-repairs", label: "Upright freezer repairs" },
          { href: "/display-freezer-repairs", label: "Display and ice cream freezer repairs" },
          { href: "/problems/freezer-not-freezing", label: "Freezer not freezing" },
          { href: "/problems/ice-build-up", label: "Ice build up" },
          { href: "/problems/fridge-compressor-problems", label: "Compressor problems" },
          { href: "/fridge-regassing", label: "Freezer regassing" },
        ],
      },
    ],
    faqs: [
      {
        question: "My chest freezer is running but not freezing. What is wrong?",
        answer:
          "The usual causes are a thermostat that is no longer calling for full cooling, a refrigerant leak, a weak compressor that is running but not pumping properly, or a lid gasket letting warm air in. The frost pattern on the inside walls tells our technician which it is within minutes.",
      },
      {
        question: "Can you repair a freezer that is full of food?",
        answer:
          "Usually yes. For electrical repairs the contents can stay in place. For a regas or compressor replacement the freezer is off for a few hours, and a closed chest freezer will hold its temperature for most of that time if the lid is kept shut.",
      },
      {
        question: "Why does my freezer ice up so quickly?",
        answer:
          "Warm, humid air is getting in. That points to a hardened or torn gasket, a lid that is not closing flat, or a door left ajar by packed stock. On frost free upright freezers it usually means the defrost heater, timer or sensor has failed.",
      },
      {
        question: "Do you repair commercial freezers?",
        answer:
          "Yes. We attend butchery freezers, ice cream display freezers, bakery blast freezers and the chest freezers used in tuck shops and bottle stores across Harare. See our commercial fridge repairs page for the full list.",
      },
    ],
    cta: {
      title: "Freezer not freezing? We come to you, 24 hours a day.",
      text: "Call 0782 886 252 now or WhatsApp your suburb and freezer details. We will get it freezing before the stock is lost.",
    },
    schema: {
      serviceName: "Freezer repairs in Harare",
      serviceDescription: "Mobile repair of chest freezers, upright freezers and commercial freezers across Harare, Zimbabwe.",
      serviceType: "Freezer repair",
    },
  },

  {
    slug: "compressor-replacement",
    shortName: "Compressor replacement",
    cardText: "Testing and replacing seized, burnt out or weak compressors on fridges and freezers.",
    path: "/compressor-replacement",
    title: "Fridge Compressor Replacement Harare | Tested First",
    description:
      "Fridge compressor replacement in Harare. We test the compressor, relay and overload before condemning anything, then fit a matched compressor, new filter drier and correct gas charge on site. Call 0782 886 252.",
    eyebrow: "Compressor replacement in Harare",
    h1: "Fridge Compressor Replacement in Harare",
    lead:
      "The compressor is the heart of your fridge and the most expensive part to replace, which is exactly why it should never be condemned on a hunch. Harare Fridge Repairs tests the compressor windings, the start relay and the overload before deciding anything. When a compressor really has failed, we replace it on site with a matched unit, a new filter drier and the correct gas charge.",
    points: [
      "Winding resistance, running current and pumping tests before any decision",
      "Relays, capacitors and overloads replaced when they are the real fault",
      "Matched compressor fitted with new drier, vacuum and charge",
      "Household fridges, chest freezers and commercial units",
    ],
    picture: "compressor",
    pictureAlt: "Technician inspecting a fridge compressor with a torch",
    crumbs: [{ name: "Compressor replacement", path: "/compressor-replacement" }],
    whatsappMessage: "Hi Harare Fridge Repairs, I think my fridge compressor has a problem. My suburb is: ___ and the fridge is: ___",
    sections: [
      {
        kind: "text",
        heading: "Is it really the compressor?",
        paragraphs: [
          "A fridge that hums and clicks, or sits silent with the light on, is often diagnosed as a dead compressor by people who do not carry a meter. In our experience a large share of those fridges have a failed start relay, a failed overload protector or a blown run capacitor, each of which costs a fraction of a compressor and takes a few minutes to replace.",
          "Our technician measures the resistance of the three compressor windings, checks for a short to earth, and tries the compressor on a known good relay. If it starts and pumps, the compressor is fine. If it draws locked rotor current and trips, or the windings read open or earthed, it has failed and we tell you so with the readings to prove it.",
          "There is a third case that fools many people: a compressor that runs quietly but no longer builds pressure. The fridge sounds normal but never gets cold. Gauges show it immediately, and no amount of gas will fix it.",
        ],
      },
      {
        kind: "list",
        heading: "Signs of a failing compressor",
        items: [
          "Loud hum for a few seconds, then a click, then silence, repeating",
          "Compressor very hot to touch and tripping on overload",
          "Fridge running quietly but never cooling, with low pressures on the gauges",
          "Rattling or knocking from inside the compressor shell",
          "Earth leakage tripping when the fridge tries to start",
          "Burnt smell at the back of the fridge",
          "Compressor that will not start after a power surge",
          "Oil around the base of the compressor",
        ],
      },
      {
        kind: "steps",
        heading: "How we replace a fridge compressor",
        items: [
          { title: "Recover and remove", text: "Any remaining refrigerant is recovered safely and the old compressor is unbrazed from the suction and discharge lines." },
          { title: "Match the new unit", text: "A compressor of the correct capacity, refrigerant type and voltage is selected. A wrong size compressor shortens the life of the fridge." },
          { title: "Fit, braze and flush", text: "The new compressor is brazed in with a new filter drier. If the old compressor burnt out, the system is flushed to remove acid and debris." },
          { title: "Vacuum, charge and test", text: "Deep vacuum, charge by weight, then running current, pressures and cabinet temperature are checked before we leave." },
        ],
      },
      {
        kind: "feature",
        eyebrow: "Repair or replace",
        heading: "When a new compressor is worth it",
        paragraphs: [
          "On a good quality fridge that is less than ten years old, a compressor replacement is usually well worth doing, because the rest of the cabinet, the insulation and the doors still have many years in them. On commercial fridges and chest freezers a compressor is almost always worth replacing, since the alternative is a new unit at several times the cost.",
          "Where the fridge is old, the cabinet is rusted or the evaporator is also leaking, we will tell you that honestly, and our repair or replace guide sets out the questions to weigh up. We would rather lose a job than fit an expensive part to a fridge that will fail elsewhere within the year.",
        ],
        picture: "rearService",
        pictureAlt: "Technician working at the back of a fridge where the compressor sits",
        reverse: true,
      },
      {
        kind: "chips",
        heading: "Related pages",
        items: [
          { href: "/problems/fridge-compressor-problems", label: "Compressor problems explained" },
          { href: "/problems/fridge-not-switching-on", label: "Fridge not switching on" },
          { href: "/problems/fridge-making-noise", label: "Fridge making noise" },
          { href: "/fridge-regassing", label: "Fridge regassing" },
          { href: "/fridge-repair-or-replace", label: "Repair or replace?" },
          { href: "/commercial-fridge-repairs", label: "Commercial fridge repairs" },
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a fridge compressor replacement cost in Harare?",
        answer:
          "It depends on the size and type of compressor, the refrigerant and whether a burnt out system needs flushing. We quote after testing, and only after confirming that the compressor, rather than the relay or overload, has actually failed.",
      },
      {
        question: "How long does a compressor replacement take?",
        answer:
          "Most household fridge compressor replacements are done in two to four hours on site. The fridge is then left running and should reach temperature within a few hours.",
      },
      {
        question: "Why did my compressor fail?",
        answer:
          "In Harare the biggest causes are repeated restarts during load shedding, voltage surges when power returns, a blocked condenser causing overheating, and running for months on a low gas charge after an unrepaired leak. We check for the underlying cause so the new compressor does not go the same way.",
      },
      {
        question: "Can a compressor be repaired instead of replaced?",
        answer:
          "The hermetic compressor itself is sealed and cannot be rebuilt economically. What can be repaired are the parts around it: the relay, overload, capacitor and wiring, which fail far more often than the compressor does.",
      },
    ],
    cta: {
      title: "Compressor humming and clicking? Have it tested properly.",
      text: "Call 0782 886 252 or WhatsApp us. We test before we replace, anywhere in Harare, 24 hours a day.",
    },
    schema: {
      serviceName: "Fridge compressor replacement in Harare",
      serviceDescription: "Testing and on site replacement of fridge and freezer compressors across Harare, Zimbabwe.",
      serviceType: "Refrigerator compressor replacement",
    },
  },

  {
    slug: "thermostat-replacement",
    shortName: "Thermostat replacement",
    cardText: "Fridges that are too warm, too cold or never switch off because the control has failed.",
    path: "/thermostat-replacement",
    title: "Fridge Thermostat Replacement Harare | Temperature Control",
    description:
      "Fridge thermostat replacement in Harare for fridges and freezers that are too warm, freezing food or running non stop. Mechanical thermostats, sensors and control boards repaired on site. Call 0782 886 252.",
    eyebrow: "Thermostat replacement in Harare",
    h1: "Fridge Thermostat Replacement in Harare",
    lead:
      "The thermostat decides when your fridge runs and when it rests. When it fails, the fridge either never cools, freezes everything on the shelves, or runs all day and sends your electricity bill up. Harare Fridge Repairs tests and replaces mechanical thermostats, electronic temperature sensors and control boards on all fridge and freezer brands, at your address in Harare.",
    points: [
      "Mechanical capillary thermostats on older fridges and chest freezers",
      "NTC sensors and control boards on modern electronic fridges",
      "Correct thermostat range matched to fridge, freezer or combi",
      "Tested on site with the cabinet running before we leave",
    ],
    picture: "controlBoard",
    pictureAlt: "Technician checking the temperature control of a fridge",
    crumbs: [{ name: "Thermostat replacement", path: "/thermostat-replacement" }],
    whatsappMessage: "Hi Harare Fridge Repairs, my fridge temperature is wrong and I think it is the thermostat. My suburb is: ___",
    sections: [
      {
        kind: "text",
        heading: "How a fridge thermostat fails",
        paragraphs: [
          "An older fridge or chest freezer uses a mechanical thermostat: a gas filled capillary tube clipped to the evaporator that expands and contracts with temperature and flips a switch. Over the years the capillary loses its charge or the contacts burn. When the charge is lost the thermostat stays open and the compressor never starts, so the fridge is dead even though the light works. When the contacts weld shut the compressor never stops, and the fridge freezes everything.",
          "Modern fridges from Samsung, LG, Hisense, Bosch and others replace that with one or more NTC sensors feeding a control board. A drifting sensor gives the board a wrong reading, so the fridge runs too cold or too warm, and a failed board can stop the compressor or the fans altogether. Surges during load shedding are the main killer of these boards in Harare.",
          "Both types are tested the same way: we compare the actual cabinet temperature with what the control thinks it is, check the switching point, and measure the sensor resistance against the maker's chart. Only then is a part ordered or fitted.",
        ],
      },
      {
        kind: "list",
        heading: "Symptoms of a faulty thermostat or sensor",
        items: [
          "Fridge dead with the light on and no compressor sound",
          "Vegetables and milk freezing on the top shelf",
          "Fridge running all day and never clicking off",
          "Temperature swinging between too warm and too cold",
          "Turning the dial makes no difference to the temperature",
          "Freezer section fine but fridge section warm, or the reverse",
          "Display showing a sensor error code",
          "Chest freezer runs only when the dial is turned to maximum",
        ],
      },
      {
        kind: "steps",
        heading: "Thermostat replacement, step by step",
        items: [
          { title: "Confirm the fault", text: "Cabinet temperature, switching point and sensor readings are checked so a thermostat is only replaced when it has actually failed." },
          { title: "Match the part", text: "Thermostats have different temperature ranges for fridges, freezers and combis. The right range matters for food safety and running cost." },
          { title: "Fit and route the capillary", text: "The new thermostat is fitted and the capillary tube routed and clipped to the evaporator exactly as the original, which decides how accurately it controls." },
          { title: "Set and test", text: "The fridge is run, the cut in and cut out temperatures are checked, and the dial is set to a sensible position for your household." },
        ],
      },
      {
        kind: "chips",
        heading: "Related pages",
        items: [
          { href: "/problems/fridge-freezing-food", label: "Fridge freezing food" },
          { href: "/problems/fridge-running-constantly", label: "Fridge running constantly" },
          { href: "/problems/fridge-not-switching-on", label: "Fridge not switching on" },
          { href: "/problems/fridge-not-cooling", label: "Fridge not cooling" },
          { href: "/chest-freezer-repairs", label: "Chest freezer repairs" },
          { href: "/fridge-repairs", label: "All fridge repairs" },
        ],
      },
    ],
    faqs: [
      {
        question: "How do I know if my fridge thermostat is faulty?",
        answer:
          "Turn the dial from the lowest to the highest setting with the door open and listen. On a working mechanical thermostat you will hear a click and the compressor start. No click, or a compressor that runs regardless of the setting, points to the thermostat. Our technician confirms it with a meter before replacing it.",
      },
      {
        question: "Can I replace a fridge thermostat myself?",
        answer:
          "On some older fridges it is possible, but the capillary tube must be routed and clipped correctly or the fridge will over freeze or under cool, and the wrong thermostat range causes the same problems. Given that the part is inexpensive, having it fitted and set correctly is usually the better value.",
      },
      {
        question: "Is a thermostat fault the same as a gas problem?",
        answer:
          "No, and this is a common misdiagnosis. A fridge with a failed thermostat is often told it needs regassing. Gas will not help a fridge whose compressor is never being told to start.",
      },
      {
        question: "Do you repair the electronic control board instead of replacing it?",
        answer:
          "Where the fault is a burnt relay or a failed capacitor on the board, a repair is sometimes possible and cheaper. Where the microcontroller has failed the board is replaced. We tell you which applies after testing.",
      },
    ],
    cta: {
      title: "Fridge too warm, too cold or never switching off?",
      text: "Call 0782 886 252 or WhatsApp us and a technician will test the thermostat at your address in Harare.",
    },
    schema: {
      serviceName: "Fridge thermostat replacement in Harare",
      serviceDescription: "Testing and replacement of fridge and freezer thermostats, sensors and control boards across Harare, Zimbabwe.",
      serviceType: "Refrigerator thermostat replacement",
    },
  },

  {
    slug: "24-hour-fridge-repairs",
    shortName: "24 hour fridge repairs",
    cardText: "Emergency and after hours callouts across Harare, every night, weekend and public holiday.",
    path: "/24-hour-fridge-repairs",
    title: "24 Hour Fridge Repairs Harare | Emergency Callouts, Any Day",
    description:
      "24 hour fridge repairs in Harare. Emergency callouts at night, on weekends and public holidays for homes, shops, restaurants and butcheries anywhere in Harare. Call 0782 886 252 now.",
    eyebrow: "24 hour fridge repairs in Harare",
    h1: "24 Hour Fridge Repairs in Harare, Every Day of the Year",
    lead:
      "Fridges do not fail at convenient times. A butchery cold room goes down on a Saturday night, a restaurant walk in stops cooling before Sunday lunch, or the family fridge dies on a public holiday. Harare Fridge Repairs answers the phone around the clock and sends a technician to your address, anywhere in Harare, whenever you need one.",
    points: [
      "Open 24 hours, 7 days a week, including public holidays",
      "Emergency callouts for homes and businesses across Harare",
      "Commercial refrigeration prioritised when stock is at risk",
      "Price confirmed before work starts, day or night",
    ],
    picture: "callout",
    pictureAlt: "Fridge technician arriving at a Harare home with tools for an emergency callout",
    crumbs: [{ name: "24 hour fridge repairs", path: "/24-hour-fridge-repairs" }],
    whatsappMessage: "Hi Harare Fridge Repairs, I need an urgent fridge repair. My suburb is: ___ and the fridge is: ___",
    sections: [
      {
        kind: "text",
        heading: "What counts as a fridge emergency",
        paragraphs: [
          "Any fridge or freezer holding stock that will be lost if it thaws is an emergency to us. That includes butchery display counters and cold rooms, restaurant and hotel kitchen fridges, bottle store chillers before a busy weekend, pharmacy fridges holding medicines and vaccines, and the home chest freezer full of a month's meat.",
          "It also includes faults that are dangerous rather than costly: a fridge tripping the earth leakage, a burning smell from the back, a plug that is hot to touch, or a compressor that is hammering. Switch the fridge off at the wall and call us.",
          "For a home fridge that has simply stopped cooling in the evening, we will tell you honestly whether a night callout is worth it or whether the food will keep until first thing in the morning, and we will book the first slot of the day if that is the better option.",
        ],
      },
      {
        kind: "list",
        heading: "While you wait for the technician",
        intro: "A few simple steps protect your food and make the repair quicker.",
        columns: 1,
        items: [
          "Keep the door or lid closed. A full freezer holds its temperature for many hours if it is not opened.",
          "Check that the plug is firmly in, the wall switch is on and the earth leakage has not tripped. Try another appliance in the same socket.",
          "If the fridge is tripping the power, smells of burning or the plug is hot, switch it off at the wall and leave it off.",
          "If ice has built up, do not chip at it with a knife. A pierced evaporator turns a small repair into a big one.",
          "Have the brand, model and your exact address or a landmark ready so the technician can find you quickly at night.",
          "For a commercial unit, move the most valuable stock into any other working fridge or freezer first.",
        ],
      },
      {
        kind: "feature",
        eyebrow: "Mobile across Harare",
        heading: "We cover every part of Harare, at any hour",
        paragraphs: [
          "Harare Fridge Repairs is a mobile service with no shop to open or close, which is what makes true 24 hour cover possible. Our technicians attend the northern suburbs from Borrowdale to Mount Pleasant, the east from Greendale to Ruwa, the south from Waterfalls to Chitungwiza, and the west from Westgate to Norton.",
          "Night callouts are quoted the same way as day callouts: the technician diagnoses the fault, gives you a price, and only then starts the repair. Nothing is added to the bill that you did not agree to.",
        ],
        picture: "homeVisit",
        pictureAlt: "Technician with a tool bag inspecting a fridge during a home visit",
        reverse: true,
      },
      {
        kind: "chips",
        heading: "Emergency repairs by type",
        items: [
          { href: "/cold-room-repairs", label: "Cold room repairs" },
          { href: "/butchery-display-fridge-repairs", label: "Butchery display counters" },
          { href: "/commercial-upright-fridge-repairs", label: "Commercial upright fridges" },
          { href: "/beverage-chiller-repairs", label: "Beverage chillers" },
          { href: "/chest-freezer-repairs", label: "Chest freezers" },
          { href: "/ice-machine-repairs", label: "Ice machines" },
          { href: "/commercial-fridge-repairs", label: "All commercial refrigeration" },
          { href: "/areas", label: "Areas we cover" },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you really repair fridges at night in Harare?",
        answer:
          "Yes. The phone is answered 24 hours a day and technicians attend emergencies at night, on weekends and on public holidays. Tell us your suburb and the fault and we will give you a realistic arrival time.",
      },
      {
        question: "Is there an extra charge for after hours callouts?",
        answer:
          "Any difference between a day and a night callout is explained to you on the phone before the technician leaves, and the repair price is confirmed after the diagnosis. There are no surprises on the invoice.",
      },
      {
        question: "Which areas do you cover for emergency repairs?",
        answer:
          "All of Harare, including Chitungwiza, Ruwa, Norton, Mazowe and Domboshava. Our areas pages list every suburb we attend across Harare North, South, East and West.",
      },
      {
        question: "Can you repair a commercial cold room or display fridge after hours?",
        answer:
          "Yes, and these are the jobs we prioritise, because the stock at risk is usually worth far more than the repair. Call as soon as you notice the temperature rising rather than waiting for morning.",
      },
    ],
    cta: {
      title: "Fridge emergency? Call now, whatever the time.",
      text: "0782 886 252 is answered 24 hours a day. WhatsApp works too. We will get a technician to your address in Harare.",
    },
    schema: {
      serviceName: "24 hour emergency fridge repairs in Harare",
      serviceDescription: "Emergency fridge, freezer and commercial refrigeration repairs across Harare, Zimbabwe, 24 hours a day, 7 days a week.",
      serviceType: "Emergency refrigerator repair",
    },
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}

export const serviceLinks = services.map((service) => ({
  href: service.path,
  label: service.shortName,
  text: service.cardText,
}))
