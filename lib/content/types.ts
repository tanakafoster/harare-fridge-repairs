import type { PictureKey } from "@/components/pictures"
import type { ContentPage, ContentSection, Faq, LinkItem } from "./model"
import { pick, rotate } from "@/lib/utils"

export type FridgeTypeGroup = "home" | "commercial"

export type FridgeTypeRecord = {
  slug: string
  name: string
  plural: string
  group: FridgeTypeGroup
  usedIn: string
  cardText: string
  title: string
  description: string
  h1: string
  lead: string
  points: string[]
  intro: string[]
  faults: string[]
  repairNotes: string[]
  faqs: Faq[]
  related: string[]
  picture: PictureKey
  pictureAlt: string
}

export const fridgeTypes: FridgeTypeRecord[] = [
  /* ------------------------------------------------------------------ */
  /* Home                                                                */
  /* ------------------------------------------------------------------ */
  {
    slug: "single-door-fridge-repairs",
    name: "Single door fridge",
    plural: "single door fridges",
    group: "home",
    usedIn: "Flats, cottages, staff quarters, small kitchens",
    cardText: "The compact fridge with a small freezer box inside, common in flats and cottages.",
    title: "Single Door Fridge Repairs Harare | Small Fridge Technicians",
    description:
      "Single door fridge repairs in Harare for compact fridges with an internal freezer box. Not cooling, icing up, thermostat and compressor faults fixed at your address. Call 0782 886 252.",
    h1: "Single Door Fridge Repairs in Harare",
    lead:
      "The single door fridge with a small freezer box at the top is the workhorse of Harare's flats, cottages and staff quarters. It is a simple machine, and when it fails the fault is usually simple too. Harare Fridge Repairs attends single door fridges from Defy, KIC, Capri, Hisense, Samsung and every other brand, at your address, 24 hours a day.",
    points: [
      "Manual defrost and semi automatic defrost models",
      "Thermostat, door gasket, relay and compressor repairs",
      "Regassing with the correct R134a or R600a charge",
      "Quick turnaround for flats and rentals",
    ],
    intro: [
      "A single door fridge has one compressor, one thermostat, a static evaporator that doubles as the freezer box, and a door. There is no fan, no defrost heater and no electronics on most models, so when it stops cooling the list of suspects is short. That makes it one of the cheapest fridges to repair and one of the most sensible to keep running for years.",
      "The faults we see most are a thermostat that has lost its charge and no longer calls for cooling, a start relay or overload that has failed after repeated power cuts, a door gasket that has hardened so the freezer box grows a thick coat of ice, and refrigerant leaks in the aluminium freezer box caused by someone chipping ice out with a knife.",
      "Because these fridges are often in rented rooms and cottages, the person booking is sometimes the landlord and the person at home is the tenant. Tell us both numbers when you book and we will coordinate the visit.",
    ],
    faults: [
      "Fridge running but barely cool, with only a thin frost patch in the freezer box",
      "Freezer box completely iced over within a week of defrosting",
      "Compressor humming and clicking but not starting",
      "No light, no sound, after a power cut or surge",
      "Water collecting at the bottom of the cabinet or on the floor",
      "Door not closing properly or gasket pulling away at the corners",
      "Fridge freezing everything, even on the lowest setting",
      "Small hole in the freezer box with a hissing sound, from a knife during defrosting",
    ],
    repairNotes: [
      "Most single door fridge repairs are finished in one visit, because the common parts are carried on the vehicle: thermostats, relays, overloads, gaskets and the R134a or R600a gas these fridges use. A pierced freezer box is the one fault that needs a careful conversation, because on an old fridge a new evaporator can cost more than the fridge is worth. We will tell you plainly.",
      "If the fridge is a newer Hisense, Samsung or LG single door model with an electronic thermostat or an inverter compressor, the diagnosis is a little different but the repairs are still done on site. Bring the model number from the sticker inside the door when you call and we will arrive with the right parts.",
    ],
    faqs: [
      {
        question: "Why does the freezer box in my single door fridge ice up so fast?",
        answer:
          "Warm, humid air is reaching the evaporator. The usual causes are a door gasket that no longer seals, a door that is not aligned, or the freezer box flap left open. Our technician checks the seal with a paper strip test and replaces the gasket if it fails.",
      },
      {
        question: "Is a single door fridge worth repairing?",
        answer:
          "Nearly always. The parts are inexpensive and the fridge is simple. The exception is a leaking evaporator on a very old cabinet, where we will give you an honest view before you spend money.",
      },
      {
        question: "Can you repair a single door fridge in a flat or rented room?",
        answer:
          "Yes. We work in flats across the Avenues, Milton Park, Eastlea, Belvedere and every other part of Harare. Tell us the floor, the block and who will let the technician in.",
      },
    ],
    related: ["double-door-fridge-repairs", "bar-fridge-repairs", "combi-fridge-repairs"],
    picture: "temperature",
    pictureAlt: "Technician testing a fridge compressor circuit with a multimeter",
  },

  {
    slug: "double-door-fridge-repairs",
    name: "Double door fridge",
    plural: "double door fridge-freezers",
    group: "home",
    usedIn: "Family homes across Harare",
    cardText: "The top freezer fridge-freezer found in most Harare kitchens, frost free or manual.",
    title: "Double Door Fridge Repairs Harare | Top Freezer Fridge-Freezers",
    description:
      "Double door fridge repairs in Harare for top freezer fridge-freezers. Fridge section warm, freezer icing up, fan, defrost and compressor faults repaired at home. Call 0782 886 252.",
    h1: "Double Door Fridge Repairs in Harare",
    lead:
      "The double door fridge-freezer with the freezer on top is the most common fridge in Harare homes. Most are frost free, which means a fan, a defrost heater, a timer or control board and sensors all have to work together. When one fails the symptoms can be confusing. Harare Fridge Repairs diagnoses and repairs double door fridges from every brand at your home, any day, any time.",
    points: [
      "Frost free and manual defrost models",
      "Defrost heaters, timers, bimetals and evaporator fans",
      "Fridge warm while freezer works, the classic double door fault",
      "Defy, KIC, Samsung, LG, Hisense, Capri and all other brands",
    ],
    intro: [
      "In a frost free double door fridge the cold is made in the freezer and blown down into the fridge section by a fan through a damper. That design explains the single most common complaint we hear: the freezer is still freezing but the fridge section is warm. Nine times out of ten the evaporator behind the freezer back panel has iced into a solid block because the defrost heater, defrost timer, bimetal thermostat or control board has failed, and the fan can no longer move air.",
      "Other common faults include a fan motor that has seized or is noisy, a damper stuck closed, a blocked defrost drain that leaves water under the crisper drawers, and the usual compressor relay and thermostat failures. Manual defrost double door models from Capri and older Defy and KIC ranges are simpler, with a static evaporator in each compartment and a single thermostat.",
      "Our technician takes the freezer back panel off and inspects the evaporator first, because the frost pattern tells the whole story. A fully iced evaporator points to the defrost system. A clear evaporator with a weak frost line points to gas or compressor. A clear evaporator with full frost and a warm fridge points to the fan or damper.",
    ],
    faults: [
      "Fridge section warm while the freezer is still cold",
      "Ice sheet on the back wall inside the freezer",
      "Loud fan noise that stops when the door is opened",
      "Water pooling under the vegetable drawers",
      "Both compartments slowly getting warmer over a few weeks",
      "Compressor running non stop and the sides of the cabinet hot",
      "Fridge dead after load shedding, with no light",
      "Door gasket torn at the hinge side or the door dropping",
    ],
    repairNotes: [
      "Defrost repairs are done on site. We clear the ice properly, test the heater, bimetal, timer or board, replace the failed part and make sure the drain is clear so the melt water goes to the tray on the compressor where it belongs. Fan motors and dampers are replaced the same way, and the fridge is run until air is moving into the fridge section again.",
      "On inverter models from Samsung, LG and Hisense the compressor is driven by an electronic board, and a fault there shows as a fridge that is dead or runs briefly and stops. We test the board and the compressor windings before recommending either, because the two faults look identical from the kitchen.",
    ],
    faqs: [
      {
        question: "Why is my freezer cold but the fridge warm?",
        answer:
          "On a frost free double door fridge this almost always means the evaporator has iced up because the defrost system has failed, or the fan that moves cold air down to the fridge has stopped. Both are repairable on site, and neither is fixed by adding gas.",
      },
      {
        question: "Can I just defrost the fridge myself to fix it?",
        answer:
          "Defrosting will clear the ice and the fridge will work for a week or two, then ice up again, because the part that failed is still faulty. Defrosting is fine as a stop gap, but the heater, timer, bimetal or board needs to be tested and replaced.",
      },
      {
        question: "How long does a double door fridge repair take?",
        answer:
          "A defrost system or fan repair usually takes one to two hours including clearing the ice. A regas or compressor replacement takes longer. We tell you the expected time when we quote.",
      },
      {
        question: "Which double door fridges do you repair?",
        answer:
          "All brands sold in Zimbabwe, including Defy, KIC, Kelvinator, Capri, Samsung, LG, Hisense, Haier, Midea, Whirlpool, Bosch, Beko, FRESH, Alaska, Tornado, White Whale, TCL, SPJ and Hybrid.",
      },
    ],
    related: ["combi-fridge-repairs", "single-door-fridge-repairs", "side-by-side-fridge-repairs"],
    picture: "fan",
    pictureAlt: "Technician measuring the temperature inside a fridge compartment",
  },

  {
    slug: "combi-fridge-repairs",
    name: "Combi fridge",
    plural: "combi fridges",
    group: "home",
    usedIn: "Modern kitchens, townhouses, apartments",
    cardText: "Bottom freezer fridges with drawers, often inverter driven and sensitive to power quality.",
    title: "Combi Fridge Repairs Harare | Bottom Freezer Fridge-Freezers",
    description:
      "Combi fridge repairs in Harare for bottom freezer fridge-freezers from Samsung, LG, Bosch, Hisense, Defy and more. Inverter, sensor, defrost and cooling faults repaired at home. Call 0782 886 252.",
    h1: "Combi Fridge Repairs in Harare",
    lead:
      "A combi fridge puts the freezer drawers at the bottom and the fresh food at eye level. They are popular in Harare's newer townhouses and apartments, and most of them are electronic, with inverter compressors, multiple sensors and a control board. Harare Fridge Repairs has the diagnostic knowledge these fridges need and repairs them at your home, day or night.",
    points: [
      "Inverter compressor and control board diagnosis",
      "No frost evaporators, fans and defrost systems",
      "Sensor and display error codes read and explained",
      "Samsung, LG, Bosch, Siemens, Hisense, Defy, Beko and more",
    ],
    intro: [
      "Combi fridges are efficient and quiet when they work, but their electronics make them the fridge type most affected by Harare's power problems. A surge when ZESA returns can take out the inverter board, a sensor or the display, and a fridge that was fine in the morning is dead or flashing an error code by evening.",
      "Beyond electrical faults, combis share the frost free problems of any fan assisted fridge: a defrost heater or sensor that fails and lets the evaporator ice over, a fan that gets noisy or stops, a drain that blocks and leaves water in the bottom freezer drawer as a sheet of ice. Some models have two evaporators and two fans, so the fridge and freezer can fail independently.",
      "Diagnosis starts with the error code if there is one, then the sensor resistances, then the evaporator condition and the compressor. We carry the information to interpret codes from Samsung, LG, Bosch, Siemens and Hisense and will tell you exactly which part the code is pointing to and whether that part has really failed.",
    ],
    faults: [
      "Display flashing an error code or temperature reading that will not change",
      "Fridge section warm, freezer drawers still frozen",
      "Sheet of ice in the bottom of the lowest freezer drawer",
      "Fridge dead after a power surge or load shedding",
      "Compressor runs for a few seconds then stops, repeatedly",
      "Fan noise, rattling or ticking from the back of the fridge",
      "Water on the floor in front of the freezer drawers",
      "Freezer drawers frozen shut or not sliding properly",
    ],
    repairNotes: [
      "We replace inverter boards, main boards, sensors, fans, defrost heaters and compressors on combi fridges on site. Where a board is expensive we test it properly first, because a dead combi is often a failed sensor or a blown fuse on the board rather than the board itself. You will see the reading before you approve a part.",
      "For regassing, most combis run on R600a with a very small charge, often less than 60 grams. Charging by weight with a scale is essential, and we do it on every job. An overcharged R600a combi cools worse than an undercharged one.",
    ],
    faqs: [
      {
        question: "My combi fridge shows an error code. What does it mean?",
        answer:
          "Each brand uses its own codes, usually pointing to a sensor, fan, defrost or communication fault. Send us the code and the model on WhatsApp and we will tell you what it points to before the visit, then confirm it with a meter when we arrive.",
      },
      {
        question: "Why is there ice at the bottom of my freezer drawer?",
        answer:
          "The defrost drain has blocked or frozen, so melt water runs into the drawer and freezes instead of draining to the evaporation tray. We clear the drain, check the drain heater where fitted and look for the reason it froze in the first place.",
      },
      {
        question: "Are combi fridges expensive to repair?",
        answer:
          "Mechanical parts like fans and heaters are modest. Electronic boards cost more, which is why we test rather than guess. A surge protector is a sensible investment for any combi fridge in Harare.",
      },
    ],
    related: ["double-door-fridge-repairs", "french-door-fridge-repairs", "side-by-side-fridge-repairs"],
    picture: "combi",
    pictureAlt: "Technician checking the electronics and compressor of a modern fridge",
  },

  {
    slug: "side-by-side-fridge-repairs",
    name: "Side by side fridge",
    plural: "side by side fridges",
    group: "home",
    usedIn: "Larger homes in Borrowdale, Mount Pleasant, Highlands, Greendale and similar suburbs",
    cardText: "Large American style fridges with ice makers and water dispensers.",
    title: "Side by Side Fridge Repairs Harare | Samsung, LG, Hisense, Bosch",
    description:
      "Side by side fridge repairs in Harare for Samsung, LG, Hisense, Bosch, Defy and other large fridges. Ice maker, water dispenser, cooling, fan and inverter faults repaired at home. Call 0782 886 252.",
    h1: "Side by Side Fridge Repairs in Harare",
    lead:
      "Side by side fridges are big, heavy and full of features: ice makers, water dispensers, dual evaporators, multiple fans and an inverter compressor. Moving one to a workshop is a job in itself, which is why Harare Fridge Repairs repairs them where they stand, in homes across Borrowdale, Mount Pleasant, Highlands, Greendale, Westgate and the rest of Harare.",
    points: [
      "Ice maker, water dispenser and filter faults",
      "Fridge side warm while freezer side works, or the reverse",
      "Dual evaporator, fan and defrost system repairs",
      "Inverter compressor and control board diagnosis",
    ],
    intro: [
      "A side by side fridge has the freezer on the left and the fridge on the right, each usually with its own evaporator and fan on modern Samsung and LG models, or a single evaporator in the freezer with a fan and damper feeding the fridge on older designs. Either way, the symptom of one side failing while the other works is extremely common and points to the fan, damper or defrost system on the failed side rather than to the compressor or gas.",
      "The ice maker and water dispenser add their own faults: an ice maker that stops producing or produces hollow cubes, a dispenser that drips or will not dispense, a frozen water line, and water leaking inside the fridge from a split tube. These are repairable, and are a reason not to let anyone talk you into replacing the whole fridge.",
      "Side by sides also suffer from blocked condensers, because they are often built into cabinetry with little airflow. A condenser full of dust makes the compressor run hot and long, and eventually it fails. Cleaning the condenser is part of every side by side visit we do.",
    ],
    faults: [
      "Fridge side warm, freezer side still freezing",
      "Ice maker not making ice or making small hollow cubes",
      "Water dispenser not working or dripping constantly",
      "Frost or ice on the back wall of the freezer side",
      "Loud fan or grinding noise from inside the freezer",
      "Compressor running constantly and cabinet sides very hot",
      "Display showing an error code after a power cut",
      "Water leaking inside the fridge or onto the floor",
    ],
    repairNotes: [
      "We repair side by side fridges on site, including opening the freezer back panel to access the evaporator, fan and defrost components, replacing ice maker units and water valves, and replacing inverter boards and compressors. The fridge stays in your kitchen, and the contents can usually stay in one side while we work on the other.",
      "These fridges often come with water filters that need to be changed. If the dispenser flow has dropped or the ice tastes stale, a blocked filter is the first suspect, and we can fit the correct filter during the visit if you have one or tell you which to order.",
    ],
    faqs: [
      {
        question: "Why is only one side of my side by side fridge cold?",
        answer:
          "Because the two sides are cooled separately, or by a fan and damper feeding one from the other. A failed fan, damper or defrost system stops cold reaching one side while the other carries on. It is a repairable fault and not a sign that the compressor has failed.",
      },
      {
        question: "Can you repair the ice maker on my Samsung or LG side by side?",
        answer:
          "Yes. Ice maker faults are usually the ice maker module, the water inlet valve, a frozen fill tube or a blocked filter. We diagnose which and repair or replace it on site.",
      },
      {
        question: "Do I need to empty the fridge before you come?",
        answer:
          "No. For most side by side repairs the food can stay in. If a repair needs the fridge off for a few hours we will tell you when we quote so you can move anything perishable.",
      },
    ],
    related: ["french-door-fridge-repairs", "combi-fridge-repairs", "double-door-fridge-repairs"],
    picture: "sideBySide",
    pictureAlt: "Technician diagnosing a large fridge in a Harare home",
  },

  {
    slug: "french-door-fridge-repairs",
    name: "French door fridge",
    plural: "French door fridges",
    group: "home",
    usedIn: "Large family kitchens and executive homes",
    cardText: "Two door fresh food section above wide freezer drawers, usually with an inverter compressor.",
    title: "French Door Fridge Repairs Harare | Samsung, LG, Hisense & More",
    description:
      "French door fridge repairs in Harare for Samsung, LG, Hisense, Bosch and Smeg French door fridges. Cooling, ice maker, fan, sensor and inverter faults repaired at home, 24/7. Call 0782 886 252.",
    h1: "French Door Fridge Repairs in Harare",
    lead:
      "French door fridges are the largest and most advanced fridges in Harare homes, with two fresh food doors above one or two wide freezer drawers, often an in door ice maker, and an inverter compressor controlled by a main board. Harare Fridge Repairs repairs them at your home with the diagnostic equipment they need, and we do not shy away from the complicated ones.",
    points: [
      "In door ice makers and dual ice systems",
      "Multi air flow, dual evaporator and fan repairs",
      "Sensor, display and main board diagnosis",
      "Samsung, LG, Hisense, Bosch, Smeg, Haier and Midea",
    ],
    intro: [
      "A French door fridge is really three appliances in one cabinet: a fresh food compartment with its own evaporator or air supply, a freezer with drawers and often a separate fan, and an ice and water system with valves, lines and an ice maker that may sit in the door. Each has its own failure modes, and a fault in one often shows as a symptom in another.",
      "The most common French door complaints in Harare are a fresh food section that will not get below about 8 degrees while the freezer is fine, ice building up under the freezer drawers, an ice maker that has stopped, a drip from the dispenser, and a dead or flashing display after load shedding. Food freezing in the back of the fresh food section is also common on models where the damper has stuck open.",
      "These fridges are expensive, and a good repair is almost always far cheaper than replacement. We diagnose them properly, using the model's error codes, sensor charts and test modes, and we show you the fault before any part is ordered.",
    ],
    faults: [
      "Fresh food section not cold enough while the freezer works",
      "Ice maker in the door not producing ice",
      "Water dispenser dripping or slow",
      "Ice forming on the floor of the freezer under the drawers",
      "Food freezing at the back of the fresh food shelves",
      "Display flashing or showing an error code",
      "Fan noise or clicking from the fresh food section",
      "Fridge not starting after a power surge",
    ],
    repairNotes: [
      "French door repairs are done on site. We remove the interior panels to reach the evaporators, fans, dampers and defrost components, replace ice maker assemblies and water valves, and replace sensors, inverter boards and main boards after testing. On Samsung and LG models we use the service test mode to drive each component individually, which finds faults quickly and avoids replacing good parts.",
      "If regassing is needed, these fridges use small R600a charges and sometimes two evaporators in series, so the charge weight on the rating plate is followed exactly. We also fit a surge protector if you want one, because a second board failure is the last thing a French door owner needs.",
    ],
    faqs: [
      {
        question: "Why does the fresh food section of my French door fridge stay warm?",
        answer:
          "Either the fresh food evaporator has iced over because its defrost system failed, the fan serving that section has stopped, or the damper between the compartments has stuck. All three are repairable and none means the fridge is finished.",
      },
      {
        question: "Can you fix the ice maker in the door?",
        answer:
          "Yes. In door ice makers fail at the module, the fill tube, the water valve or the door duct. We test each and replace the part that has failed.",
      },
      {
        question: "Do you repair French door fridges from Smeg and Bosch as well as Samsung and LG?",
        answer:
          "Yes. We repair every brand of French door fridge sold in Zimbabwe, including Samsung, LG, Hisense, Bosch, Siemens, Smeg, Haier, Midea, Whirlpool and Electrolux.",
      },
    ],
    related: ["side-by-side-fridge-repairs", "combi-fridge-repairs", "wine-cooler-repairs"],
    picture: "frenchDoor",
    pictureAlt: "Technician inspecting the compressor compartment of a large fridge",
  },

  {
    slug: "bar-fridge-repairs",
    name: "Bar fridge",
    plural: "bar fridges and mini fridges",
    group: "home",
    usedIn: "Offices, bedrooms, lodges, guest houses, cottages",
    cardText: "Mini fridges and bar fridges in offices, bedrooms, lodges and cottages.",
    title: "Bar Fridge Repairs Harare | Mini Fridge Technicians",
    description:
      "Bar fridge and mini fridge repairs in Harare for offices, lodges, guest houses and homes. Not cooling, icing up, noisy or dead mini fridges repaired at your address. Call 0782 886 252.",
    h1: "Bar Fridge and Mini Fridge Repairs in Harare",
    lead:
      "Bar fridges keep drinks cold in offices, bedrooms, lodges and cottages across Harare. They are small, but they fail in the same ways as big fridges: thermostats, relays, gaskets and leaks. Harare Fridge Repairs repairs bar fridges and mini fridges on site, and for guest houses and lodges with several units we can check them all in one visit.",
    points: [
      "Compressor bar fridges and thermoelectric mini fridges",
      "Glass door bar fridges and solid door models",
      "Thermostats, relays, gaskets and small charge regassing",
      "Multiple units serviced in one visit for lodges and offices",
    ],
    intro: [
      "Most bar fridges have a small compressor, a static evaporator that forms a small freezer shelf or ice box, a mechanical thermostat and a door with a magnetic gasket. A smaller number, especially the very cheap mini fridges, are thermoelectric with a Peltier element and a fan instead of a compressor. The two types fail differently and we repair both.",
      "On compressor bar fridges the usual faults are a thermostat that has failed, a relay that has burnt out, a gasket that has shrunk so the ice box frosts solid, and a refrigerant leak in the evaporator, often from a bottle being forced in or ice being chipped. Thermoelectric fridges usually fail at the fan or the power supply and simply stop cooling.",
      "Bar fridges in Harare lodges and guest houses are often left running in warm rooms with the condenser pushed against a wall, which overheats the compressor. We check the installation on every visit and tell you if the fridge needs more breathing space.",
    ],
    faults: [
      "Bar fridge running but drinks not cold",
      "Ice box frozen solid and the rest of the fridge warm",
      "Loud buzzing or vibrating from a small compressor",
      "Mini fridge completely dead after a power cut",
      "Water inside the cabinet or on the floor",
      "Glass door sweating or gasket not sealing",
      "Thermoelectric mini fridge fan noisy or not spinning",
      "Fridge freezing drinks and splitting cans",
    ],
    repairNotes: [
      "Bar fridge repairs are quick when the fault is electrical: a thermostat, relay or overload is replaced in minutes and the fridge is tested before we leave. Regassing a bar fridge involves a very small charge, often under 50 grams of R600a or R134a, and must be done by weight. A pierced evaporator on a cheap bar fridge is sometimes not worth repairing, and we will say so.",
      "For lodges, guest houses and offices with many bar fridges we offer a single visit to test and service all of them, which is far cheaper than individual callouts and catches gaskets and thermostats before they fail in front of a guest.",
    ],
    faqs: [
      {
        question: "Is it worth repairing a bar fridge?",
        answer:
          "For a thermostat, relay, gasket or fan, yes, the repair is inexpensive. For a leaking evaporator on a cheap mini fridge, often not, and we will tell you before you spend anything.",
      },
      {
        question: "Why does my bar fridge freeze the drinks?",
        answer:
          "The thermostat is either set too cold or has failed with its contacts closed so the compressor never stops. Try a warmer setting first; if that makes no difference the thermostat needs replacing.",
      },
      {
        question: "Can you service all the bar fridges in my lodge in one visit?",
        answer:
          "Yes. Tell us how many units and where they are and we will plan a single visit to check, clean and repair them together.",
      },
    ],
    related: ["wine-cooler-repairs", "single-door-fridge-repairs", "beverage-chiller-repairs"],
    picture: "doorSeal",
    pictureAlt: "Technician checking a small fridge",
  },

  {
    slug: "wine-cooler-repairs",
    name: "Wine cooler",
    plural: "wine coolers",
    group: "home",
    usedIn: "Homes, restaurants, wine bars, hotels",
    cardText: "Single and dual zone wine fridges that must hold a steady temperature without vibration.",
    title: "Wine Cooler Repairs Harare | Wine Fridge Technicians",
    description:
      "Wine cooler and wine fridge repairs in Harare for homes, restaurants and hotels. Temperature drift, compressor, fan, thermoelectric and door seal faults repaired at your address. Call 0782 886 252.",
    h1: "Wine Cooler Repairs in Harare",
    lead:
      "A wine cooler has one job: hold a precise, steady temperature with as little vibration as possible. When it drifts, the wine suffers before you notice. Harare Fridge Repairs repairs compressor and thermoelectric wine coolers, single and dual zone, in homes, restaurants and hotels across Harare.",
    points: [
      "Compressor and thermoelectric wine coolers",
      "Single zone and dual zone cabinets",
      "Temperature drift, fan, sensor and control faults",
      "Glass door seals, lighting and humidity problems",
    ],
    intro: [
      "Wine coolers come in two kinds. Compressor models work like a small fridge with a very fine temperature control, usually electronic, and are the only kind that can hold a cellar temperature in a hot Harare room. Thermoelectric models use a Peltier element and fans, have no compressor and no gas, and can only cool a limited amount below room temperature, which is why they struggle in October.",
      "The common faults on compressor wine coolers are a temperature that drifts or swings, a sensor or control board that has failed, a fan that has become noisy, and a glass door seal that lets humid air in and causes condensation and mould. Dual zone cabinets can fail in one zone only, usually a damper or a second fan. Thermoelectric coolers usually fail at the fans or the Peltier module.",
      "Vibration matters for wine, so we also check that the compressor mounts and the fan are not transmitting vibration into the racks, and that the cooler is level and not touching the cabinetry.",
    ],
    faults: [
      "Temperature display not matching the actual temperature inside",
      "Cooler not reaching the set temperature in warm weather",
      "One zone of a dual zone cooler warm",
      "Loud fan or humming that was not there before",
      "Condensation or mould inside the glass door",
      "Interior light or display not working",
      "Thermoelectric cooler barely cooler than the room",
      "Cooler cycling on and off every few minutes",
    ],
    repairNotes: [
      "Most wine cooler repairs are electronic or mechanical rather than refrigerant related: sensors, fans, control boards, door seals and Peltier modules. We carry the test equipment to check sensor accuracy against a reference thermometer and replace parts that have drifted out of range. Compressor wine coolers that need regassing are charged by weight with the correct refrigerant, usually R600a.",
      "For restaurants and hotels we can schedule a visit outside service hours so the cabinet is back at temperature before guests arrive.",
    ],
    faqs: [
      {
        question: "Why will my wine cooler not get cold enough in summer?",
        answer:
          "If it is thermoelectric, it probably cannot: these units cool only a limited amount below room temperature. If it is a compressor model, a dirty condenser, a weak fan, a failing sensor or a low gas charge are the usual causes, and all can be repaired.",
      },
      {
        question: "Can you repair a dual zone wine fridge where only one zone works?",
        answer:
          "Yes. One zone failing usually means a fan, damper, sensor or in some models a second small compressor has failed. We test each and repair the one at fault.",
      },
      {
        question: "Do you repair wine coolers in restaurants and hotels?",
        answer:
          "Yes, across Harare, and we can come outside your service hours. We also repair the under counter and back bar fridges that usually sit beside them.",
      },
    ],
    related: ["bar-fridge-repairs", "underbar-fridge-repairs", "beverage-chiller-repairs"],
    picture: "controlBoard",
    pictureAlt: "Technician checking temperature control electronics",
  },

  {
    slug: "chest-freezer-repairs",
    name: "Chest freezer",
    plural: "chest freezers",
    group: "home",
    usedIn: "Homes, tuck shops, butcheries, farms, churches and schools",
    cardText: "The most common freezer in Zimbabwe, in homes, tuck shops and butcheries alike.",
    title: "Chest Freezer Repairs Harare | Deep Freezer Technicians, 24/7",
    description:
      "Chest freezer repairs in Harare for KIC, Defy, Kelvinator, Capri, Hisense and all brands. Not freezing, icing up, not starting or running non stop, repaired at your home or shop. Call 0782 886 252.",
    h1: "Chest Freezer Repairs in Harare",
    lead:
      "The chest freezer, or deep freezer, is in almost every Harare home and small business, from the family meat supply in Hatfield to the ice lolly stock in a Kuwadzana tuck shop. When it stops freezing, time matters. Harare Fridge Repairs attends chest freezers of every size and brand, 24 hours a day, and repairs them where they stand.",
    points: [
      "All sizes from 100 litre to 700 litre and double lid models",
      "KIC, Defy, Kelvinator, Capri, Hisense, Haier, Midea, FRESH and more",
      "Thermostats, relays, compressors, lid gaskets and regassing",
      "Contents can usually stay inside during the repair",
    ],
    intro: [
      "A chest freezer is the simplest refrigeration appliance there is: a compressor, a condenser in the outer walls or at the back, an evaporator coil wrapped around the inner liner, a thermostat and a lid. There are no fans, no defrost heaters and, on most models, no electronics. That simplicity is why they last twenty years, and why most faults are cheap to repair.",
      "The frost pattern inside a chest freezer is the technician's best diagnostic tool. Even frost on all four walls with a soft load points to a thermostat, a weak compressor or a lid seal. Frost on only the top third of the walls with warm lower walls points to a low gas charge. No frost at all with a running compressor points to a leak that has emptied the system or a compressor that is not pumping.",
      "Chest freezers in Harare also die from heat: pushed into a corner of a garage or a shop with no airflow, the condenser cannot shed heat, the compressor runs hot and eventually seizes. Part of every chest freezer repair is checking that the unit has room to breathe.",
    ],
    faults: [
      "Freezer running but food soft or thawing",
      "Frost only at the top of the walls, bottom of the cabinet warm",
      "Compressor humming, clicking and not starting",
      "Freezer dead after a power cut or surge",
      "Thick ice on the walls that returns quickly after defrosting",
      "Lid gasket hardened, torn or not sealing at the corners",
      "Freezer running non stop and outer walls very hot",
      "Water leaking from the drain plug or under the freezer",
    ],
    repairNotes: [
      "Thermostat, relay, overload and gasket repairs on chest freezers are finished in one visit from parts carried on the vehicle. Regassing is done on site after a leak test; the common leak points are the pipe joints at the compressor and the condenser pipes rusting inside damp walls. A leak in the evaporator coil embedded in the inner liner is the one fault that can make an old chest freezer uneconomic, and we tell you straight away if that is what we find.",
      "Compressor replacement on chest freezers is common and worthwhile, because the cabinet usually has years of life left. We fit a matched compressor, new filter drier, vacuum and charge by weight, and run the freezer down to temperature before leaving.",
    ],
    faqs: [
      {
        question: "My chest freezer is cold at the top but not at the bottom. Why?",
        answer:
          "That frost pattern, with the top of the walls frosted and the lower walls warm, is the classic sign of a low refrigerant charge, which means there is a leak. We find and repair the leak, then vacuum and recharge the system.",
      },
      {
        question: "Can you repair my chest freezer while it is full?",
        answer:
          "For electrical repairs, yes, the contents stay in. For a regas or compressor replacement the freezer is off for a few hours; a closed chest freezer holds its cold well, and we work quickly to keep the stock safe.",
      },
      {
        question: "How long does a chest freezer repair take?",
        answer:
          "A thermostat, relay or gasket is usually under an hour. A regas takes one to three hours, and a compressor replacement two to four hours, on site.",
      },
      {
        question: "Do you repair commercial chest freezers in tuck shops and butcheries?",
        answer:
          "Yes, every day. Tuck shops, bottle stores, butcheries, schools and churches across Harare rely on chest freezers and we attend them around the clock.",
      },
    ],
    related: ["upright-freezer-repairs", "display-freezer-repairs", "butchery-display-fridge-repairs"],
    picture: "freezerIce",
    pictureAlt: "Technician testing a freezer compressor",
  },

  {
    slug: "upright-freezer-repairs",
    name: "Upright freezer",
    plural: "upright freezers",
    group: "home",
    usedIn: "Kitchens, pantries, small restaurants",
    cardText: "Drawer freezers that stand like a fridge, usually frost free with a fan and defrost system.",
    title: "Upright Freezer Repairs Harare | Frost Free Freezer Technicians",
    description:
      "Upright freezer repairs in Harare for frost free and manual defrost drawer freezers. Not freezing, icing up, fan, defrost, thermostat and compressor faults repaired at home. Call 0782 886 252.",
    h1: "Upright Freezer Repairs in Harare",
    lead:
      "An upright freezer takes less floor space than a chest freezer and keeps everything visible in drawers, but most of them are frost free, which adds a fan, a defrost heater and a control that can each fail. Harare Fridge Repairs repairs upright freezers from Defy, KIC, Hisense, Samsung, LG, Bosch and every other brand at your address.",
    points: [
      "Frost free and manual defrost upright freezers",
      "Defrost heaters, timers, sensors and evaporator fans",
      "Drawer, door and gasket problems",
      "Thermostats, compressors and regassing",
    ],
    intro: [
      "Frost free upright freezers make cold on a finned evaporator behind the back panel and blow it through the drawers with a fan. Several times a day a heater melts the frost off the evaporator. When the heater, its timer or sensor fails, the evaporator turns into a block of ice, the fan cannot move air, and the top drawers go soft while the bottom drawer near the evaporator stays frozen. That one fault accounts for most upright freezer calls we get.",
      "Manual defrost uprights, which have evaporator shelves that the drawers sit on, are simpler and fail at the thermostat, the compressor relay or the door gasket, or ice up heavily because the door is not sealing. Both kinds suffer from blocked drains that leave an ice sheet in the bottom of the cabinet.",
      "Upright freezers in Harare are often placed in pantries and sculleries with no ventilation, and the resulting overheating shortens compressor life. We check the installation as part of the visit.",
    ],
    faults: [
      "Top drawers soft while the bottom drawer stays frozen",
      "Ice on the back wall behind the drawers",
      "Fan noise or a fan that has stopped",
      "Freezer running constantly without reaching temperature",
      "Ice sheet at the bottom of the cabinet",
      "Drawers frozen shut or cracked",
      "Door gasket not sealing, frost around the door edge",
      "Freezer dead or display flashing after a power cut",
    ],
    repairNotes: [
      "Defrost repairs on upright freezers are done on site: the back panel is removed, the ice cleared properly, the heater, bimetal, timer or sensor tested, and the failed part replaced. We clear the drain and check the fan while the panel is off. Thermostats, relays, gaskets and compressors are replaced the same way.",
      "Food can normally stay in the freezer for electrical repairs. For a defrost repair the drawers are emptied for an hour or so while the ice is cleared; keep a cooler box handy and we will work quickly.",
    ],
    faqs: [
      {
        question: "Why do the top drawers of my upright freezer go soft?",
        answer:
          "The evaporator at the back has iced over because the defrost system has failed, so the fan can no longer push cold air to the top drawers. Clearing the ice is temporary; the failed heater, sensor or timer must be replaced.",
      },
      {
        question: "Can an upright freezer be regassed?",
        answer:
          "Yes, if a leak is confirmed. We find the leak, repair it, replace the filter drier, pull a vacuum and recharge by weight, all on site.",
      },
      {
        question: "Do you repair the drawers and door seals?",
        answer:
          "We replace door gaskets and can source drawers and drawer fronts for common brands. A gasket that is not sealing is often the reason the freezer is icing up in the first place.",
      },
    ],
    related: ["chest-freezer-repairs", "combi-fridge-repairs", "commercial-upright-fridge-repairs"],
    picture: "uprightFreezer",
    pictureAlt: "Technician checking an upright freezer",
  },

  /* ------------------------------------------------------------------ */
  /* Commercial                                                          */
  /* ------------------------------------------------------------------ */
  {
    slug: "beverage-chiller-repairs",
    name: "Beverage chiller",
    plural: "beverage chillers",
    group: "commercial",
    usedIn: "Bottle stores, tuck shops, supermarkets, bars, service stations",
    cardText: "Glass door drinks fridges in bottle stores, tuck shops, bars and service stations.",
    title: "Beverage Chiller Repairs Harare | Glass Door Drinks Fridges",
    description:
      "Beverage chiller repairs in Harare for glass door drinks fridges in bottle stores, tuck shops, bars and service stations. Not cooling, icing, fan, compressor and lighting faults fixed on site. Call 0782 886 252.",
    h1: "Beverage Chiller Repairs in Harare",
    lead:
      "A warm drinks fridge costs a bottle store or tuck shop sales every hour it is down, especially before a hot weekend. Harare Fridge Repairs repairs single, double and triple glass door beverage chillers on site across Harare, 24 hours a day, so the drinks are cold again before your customers notice.",
    points: [
      "Single, double and triple glass door chillers",
      "Fan assisted evaporators, defrost and lighting repairs",
      "Compressor, relay, capacitor and controller faults",
      "R134a, R290 and R404A systems",
    ],
    intro: [
      "Beverage chillers work harder than any home fridge. Doors are opened hundreds of times a day, warm stock is loaded by the crate, and the cabinet often stands in a hot shop or in the sun outside a service station. The fan assisted evaporator and condenser that make them cool quickly also clog with dust, and the LED or fluorescent lighting that sells the drinks adds heat and its own electrical faults.",
      "Common beverage chiller faults are a condenser so blocked with dust that the compressor overheats and trips, an evaporator fan that has seized so the cabinet ices up and the drinks at the top stay warm, a failed digital controller or probe, a compressor relay or run capacitor that has burnt out, and door gaskets worn through by constant use. Refrigerant leaks from vibration cracks at the compressor are also common on units that are moved around.",
      "Many chillers in Harare are supplied by beverage companies and the shop is responsible for keeping them running. We repair those units on the same basis as any other, and we can work around your trading hours.",
    ],
    faults: [
      "Drinks not cold even though the chiller is running",
      "Top shelves warm, bottom shelves cold",
      "Ice building up on the back wall or around the fan",
      "Compressor tripping on overload in hot weather",
      "Digital display showing a wrong temperature or an error",
      "Lights flickering or not working",
      "Glass door sweating heavily or not closing",
      "Water running out of the bottom of the cabinet",
    ],
    repairNotes: [
      "We clean condensers, replace evaporator and condenser fan motors, replace controllers and probes, repair lighting, replace gaskets and replace compressors on beverage chillers on site. Regassing is done after a leak test with the correct gas, often R290 on newer units, which needs specific handling and equipment that we carry.",
      "For shops with several chillers we recommend a scheduled condenser clean and check before the hot season, which prevents most of the overload trips and compressor failures we see in October and November.",
    ],
    faqs: [
      {
        question: "Why are the drinks at the top of my chiller warm?",
        answer:
          "The evaporator fan has stopped or the evaporator has iced over, so cold air is no longer being circulated to the top shelves. Both are repairable on site, usually in a single visit.",
      },
      {
        question: "Can you repair a beverage chiller supplied by a drinks company?",
        answer:
          "Yes. We repair any chiller regardless of who supplied it. If the unit is under a supplier agreement, check the terms, but most shops in Harare are responsible for their own repairs.",
      },
      {
        question: "How quickly can you get to a bottle store in Harare?",
        answer:
          "We work around the clock and prioritise commercial units with stock at risk. Call with your suburb and we will give you a realistic arrival time.",
      },
    ],
    related: ["underbar-fridge-repairs", "multideck-chiller-repairs", "commercial-upright-fridge-repairs"],
    picture: "condenser",
    pictureAlt: "Technician diagnosing a commercial fridge",
  },

  {
    slug: "underbar-fridge-repairs",
    name: "Underbar fridge",
    plural: "underbar fridges and back bar chillers",
    group: "commercial",
    usedIn: "Bars, pubs, restaurants, hotels, sports clubs",
    cardText: "Back bar and underbar chillers behind the counter in bars, pubs and restaurants.",
    title: "Underbar Fridge Repairs Harare | Back Bar Chiller Technicians",
    description:
      "Underbar fridge and back bar chiller repairs in Harare for bars, pubs, restaurants and clubs. Not cooling, noisy, icing or dead underbar units repaired on site, 24/7. Call 0782 886 252.",
    h1: "Underbar Fridge Repairs in Harare",
    lead:
      "The underbar fridge behind the counter is where the cold beer lives, and a bar without cold beer on a Friday night is a bar losing money. Harare Fridge Repairs repairs one, two and three door underbar fridges and back bar chillers on site, at any hour, for bars, pubs, restaurants, hotels and clubs across Harare.",
    points: [
      "Sliding glass door and hinged door underbar units",
      "Fan, controller, compressor and gasket repairs",
      "Blocked condensers from a hot, cramped bar environment",
      "Out of hours visits so the bar can keep trading",
    ],
    intro: [
      "Underbar fridges live in the hardest environment of any commercial fridge: boxed in under a counter, surrounded by warm bodies and spilt drinks, with the condenser breathing the warmest air in the room through a grille that is rarely cleaned. The compressor runs hot, the fan motors clog, and the sliding doors and gaskets take a beating every night.",
      "The usual faults are a condenser blocked with dust and fluff so the unit overheats and trips, an evaporator fan that has failed so the cabinet ices up and the beer on the top shelf is warm, a controller or probe reading wrongly, worn gaskets and door runners, and compressor relay or capacitor failures. Spilt liquid finding its way into the electrics is a cause we see more in bars than anywhere else.",
      "We work around your trading. A morning visit before opening is usually best, but if the unit dies during service we will come then.",
    ],
    faults: [
      "Beer not cold enough despite the unit running",
      "Top shelf warm, bottom shelf cold",
      "Unit tripping or cutting out during busy evenings",
      "Loud fan or compressor noise under the counter",
      "Ice build up at the back of the cabinet",
      "Sliding doors stiff, off their runners or not sealing",
      "Water pooling under the unit or on the bar floor",
      "Controller display blank or showing an error",
    ],
    repairNotes: [
      "Underbar repairs are done in place: we pull the unit out far enough to clean the condenser, replace fan motors, controllers, probes, relays, capacitors and compressors, and replace gaskets and door runners. Regassing is done after a leak test with the correct refrigerant for the unit.",
      "A condenser clean every few months doubles the life of an underbar compressor. For bars and restaurants we offer a planned visit to clean and check every unit behind the counter before the busy season.",
    ],
    faqs: [
      {
        question: "Why does my underbar fridge cut out on busy nights?",
        answer:
          "The condenser is blocked or the unit has no airflow under the counter, so the compressor overheats and the overload trips. Cleaning the condenser and improving airflow usually solves it; if the overload has been tripping for months the compressor may also need testing.",
      },
      {
        question: "Can you come before we open?",
        answer:
          "Yes. We schedule morning visits for bars and restaurants so the fridges are cold before service, and we attend emergencies during trading hours too.",
      },
      {
        question: "Do you repair the sliding doors and gaskets?",
        answer:
          "Yes. Worn gaskets and door runners let warm air in and make the unit work harder, so we replace them as part of keeping the fridge efficient.",
      },
    ],
    related: ["beverage-chiller-repairs", "under-counter-fridge-repairs", "ice-machine-repairs"],
    picture: "compressor",
    pictureAlt: "Technician working on a commercial under counter fridge",
  },

  {
    slug: "under-counter-fridge-repairs",
    name: "Under counter fridge",
    plural: "under counter fridges and prep counters",
    group: "commercial",
    usedIn: "Restaurant kitchens, pizza and salad bars, takeaways, cafés",
    cardText: "Stainless steel prep counters and under counter fridges in restaurant kitchens.",
    title: "Under Counter Fridge Repairs Harare | Prep Counter Technicians",
    description:
      "Under counter fridge and prep counter repairs in Harare for restaurant kitchens, pizza and salad bars and takeaways. Not holding temperature, icing, fan and compressor faults repaired on site. Call 0782 886 252.",
    h1: "Under Counter Fridge and Prep Counter Repairs in Harare",
    lead:
      "The stainless steel under counter fridge and the pizza or salad prep counter are the backbone of a restaurant kitchen, and a health inspector will not accept one that is holding 10 degrees. Harare Fridge Repairs repairs under counter fridges, prep counters and saladettes on site in kitchens across Harare, and we come when the kitchen is quiet if you prefer.",
    points: [
      "Two and three door under counter fridges and freezers",
      "Pizza, sandwich and salad prep counters with top wells",
      "Fan, defrost, controller and compressor repairs",
      "Gaskets, drawer runners and door hinges",
    ],
    intro: [
      "Under counter fridges in commercial kitchens are fan assisted, with the compressor and condenser in one end and an evaporator and fan in the cabinet. Prep counters add an open or lidded top well that must hold the ingredients cold in a kitchen that may be well over 30 degrees. That is a demanding job, and these units need a working fan, a clean condenser and a sound gasket to do it.",
      "The faults we see most in Harare kitchens are a condenser clogged with grease and dust so the unit cannot hold temperature during service, an evaporator fan that has failed so the cabinet ices up, a defrost system failure on units that have one, worn gaskets and hinges from constant use, and controllers or probes that have drifted. Refrigerant leaks from vibration and from pans knocking the top well are also common on prep counters.",
      "Because kitchens are hot, greasy and busy, we carry the parts to repair these units in one visit wherever possible and we leave the unit running and holding temperature before we go.",
    ],
    faults: [
      "Cabinet creeping up to 8 or 10 degrees during service",
      "Top well of the prep counter warm while the cabinet below is cold",
      "Evaporator iced over and airflow blocked",
      "Unit tripping or cutting out in the heat of the kitchen",
      "Doors not sealing, drawers not closing, hinges broken",
      "Controller showing an error or a wrong reading",
      "Water leaking onto the kitchen floor from the unit",
      "Compressor noisy or not starting",
    ],
    repairNotes: [
      "On site repair covers condenser cleaning, fan motor replacement, defrost component replacement, controller and probe replacement, gasket and hinge replacement, compressor replacement and regassing after a leak test. We can fit a unit with a new condenser fan or relay during a morning visit so it is ready for lunch service.",
      "A clean condenser is the single biggest factor in whether an under counter fridge holds temperature in a hot kitchen. We show your staff how to clean the grille between our visits.",
    ],
    faqs: [
      {
        question: "Why does my prep counter warm up during lunch service?",
        answer:
          "The condenser is blocked with grease, the fan has slowed, or the gas charge is low, so the unit cannot cope with the kitchen heat and the constant opening. A clean, a fan or a leak repair restores it. We test which it is rather than guess.",
      },
      {
        question: "Can you repair the unit without taking it out of the kitchen?",
        answer:
          "Yes. We work on the unit in place, pulling it out only far enough to reach the condenser and compressor end. The kitchen keeps running.",
      },
      {
        question: "Do you work on stainless steel commercial fridges from any brand?",
        answer:
          "Yes. The brands vary widely in commercial kitchens, but the components are standard, and we repair them all.",
      },
    ],
    related: ["commercial-upright-fridge-repairs", "underbar-fridge-repairs", "cold-room-repairs"],
    picture: "compressorTest",
    pictureAlt: "Technician testing a commercial kitchen fridge",
  },

  {
    slug: "commercial-upright-fridge-repairs",
    name: "Commercial upright fridge",
    plural: "commercial upright fridges and freezers",
    group: "commercial",
    usedIn: "Restaurant and hotel kitchens, canteens, catering companies, supermarkets",
    cardText: "Single and double door stainless steel uprights in restaurant, hotel and canteen kitchens.",
    title: "Commercial Upright Fridge Repairs Harare | Stainless Steel Uprights",
    description:
      "Commercial upright fridge and freezer repairs in Harare for restaurants, hotels, canteens and caterers. Fan, defrost, controller, compressor and gasket faults repaired on site, 24/7. Call 0782 886 252.",
    h1: "Commercial Upright Fridge and Freezer Repairs in Harare",
    lead:
      "The stainless steel upright fridge or freezer holds the bulk of a kitchen's stock, and when it fails the loss can run into thousands. Harare Fridge Repairs repairs single, double and four door commercial uprights, fridges and freezers, on site in restaurants, hotels, canteens, catering kitchens and supermarkets across Harare, around the clock.",
    points: [
      "Single, double and four door stainless steel uprights",
      "Fridge, freezer and dual temperature cabinets",
      "Fan assisted evaporators, hot gas and electric defrost",
      "R134a, R404A, R290 and R452A systems",
    ],
    intro: [
      "Commercial upright cabinets use a top or bottom mounted condensing unit, a fan assisted evaporator and an electronic controller running the defrost cycle. They are built for constant use, but in a Harare kitchen with intermittent power and high ambient temperatures they fail in predictable ways: controllers and probes damaged by surges, evaporator fans and defrost heaters worn out, condensers blocked with grease, and compressors that have run hot for too long.",
      "Freezer uprights add their own issues: a failed defrost system ices the evaporator solid, door heaters fail so the door freezes shut, and drain heaters fail so melt water freezes in the drain and floods the cabinet floor. Dual temperature cabinets with a fridge and freezer side can fail on one side only.",
      "When a commercial upright fails we treat it as urgent. The technician first secures the stock, then diagnoses: controller, fans, defrost, condenser, compressor and gas charge, in that order, and gives you a price and a time.",
    ],
    faults: [
      "Cabinet not holding temperature during the day",
      "Evaporator iced solid, fan blocked",
      "Freezer door frozen shut or frost around the door",
      "Controller showing a probe or defrost error",
      "Compressor tripping on overload in the afternoon heat",
      "Loud fan or compressor noise",
      "Water on the cabinet floor or leaking out",
      "Unit dead after a power cut or surge",
    ],
    repairNotes: [
      "Repairs are done on site: controllers, probes, fan motors, defrost heaters, door and drain heaters, gaskets, relays, contactors, capacitors and compressors are replaced in place. Regassing follows a leak test and uses the correct refrigerant, which on commercial units is often R404A or R452A for freezers and R134a or R290 for fridges.",
      "For hotels, restaurants and caterers with several cabinets we offer planned maintenance visits that clean condensers, check defrost cycles and test probes, which prevents most emergency breakdowns.",
    ],
    faqs: [
      {
        question: "My commercial fridge is not holding temperature in the afternoon. Why?",
        answer:
          "Afternoon heat exposes a weak unit: a blocked condenser, a low gas charge or a tired compressor cannot keep up when the kitchen is hottest. We test the unit under load and repair the cause rather than the symptom.",
      },
      {
        question: "Do you repair commercial freezers as well as fridges?",
        answer:
          "Yes. Upright freezers, dual temperature cabinets, blast chillers and freezer rooms are all part of our work. Freezer defrost and door heater faults are among the most common jobs we do.",
      },
      {
        question: "Can you come at night if the kitchen fridge fails?",
        answer:
          "Yes. We are open 24 hours and prioritise commercial units holding stock. Call as soon as the temperature starts to rise.",
      },
    ],
    related: ["under-counter-fridge-repairs", "cold-room-repairs", "display-freezer-repairs"],
    picture: "condenser",
    pictureAlt: "Technician diagnosing a commercial refrigerator",
  },

  {
    slug: "display-freezer-repairs",
    name: "Display freezer",
    plural: "display freezers and ice cream freezers",
    group: "commercial",
    usedIn: "Supermarkets, tuck shops, service stations, ice cream outlets",
    cardText: "Glass top island freezers, ice cream freezers and open display freezers in shops.",
    title: "Display Freezer Repairs Harare | Ice Cream & Island Freezers",
    description:
      "Display freezer repairs in Harare for glass top island freezers, ice cream freezers and open display freezers in supermarkets, tuck shops and service stations. Repaired on site, 24/7. Call 0782 886 252.",
    h1: "Display Freezer and Ice Cream Freezer Repairs in Harare",
    lead:
      "Soft ice cream in a display freezer is a sale lost and stock written off. Harare Fridge Repairs repairs glass top island freezers, curved glass ice cream freezers and open display freezers on site in supermarkets, tuck shops, service stations and ice cream outlets across Harare, at any hour.",
    points: [
      "Sliding glass top and curved glass ice cream freezers",
      "Island freezers and open well display freezers",
      "Static and fan assisted evaporators, defrost systems",
      "Glass heaters, lighting, gaskets and sliding door runners",
    ],
    intro: [
      "Display freezers have to hold minus 18 or colder while showing the product through glass and being opened constantly by customers. The glass lids carry heaters to stop them misting, the wells have evaporators in the walls or a fan assisted coil, and the condensers are usually at floor level where they collect every bit of dust in the shop.",
      "The faults we see most are a condenser so blocked that the unit cannot reach temperature in a warm shop, lid heaters that have failed so the glass fogs and customers cannot see the stock, sliding lids off their runners letting warm air in, thermostats or controllers that have drifted, and ice build up in the well that eventually stops cooling. Compressor failures follow months of overheating.",
      "Ice cream freezers supplied by ice cream companies are usually the shop's responsibility to keep running. We repair those units like any other and can advise if a unit is beyond economic repair.",
    ],
    faults: [
      "Ice cream soft or product thawing at the edges",
      "Glass lids fogged up or iced over",
      "Sliding lids stiff, off their runners or not closing",
      "Thick ice in the well that keeps coming back",
      "Compressor running constantly in hot weather",
      "Freezer tripping or cutting out",
      "Water leaking from under the freezer",
      "Lighting or display not working",
    ],
    repairNotes: [
      "We clean condensers, replace lid heaters and runners, replace thermostats and controllers, repair lighting, replace gaskets and compressors and regas display freezers on site. Many display freezers run on R404A or R290, and we carry the right gas and equipment.",
      "A quarterly condenser clean is the cheapest insurance a shop can buy for its display freezers, and we can schedule it for several units at once.",
    ],
    faqs: [
      {
        question: "Why does my ice cream freezer go soft in the afternoon?",
        answer:
          "The unit is losing the battle against shop heat because the condenser is blocked, the gas charge is low, or the lids are not sealing. We test under afternoon conditions and fix the cause.",
      },
      {
        question: "Can you fix the heated glass lids?",
        answer:
          "Yes. Failed lid heaters and worn runners are a common repair, and clear lids sell more ice cream.",
      },
      {
        question: "Do you repair island freezers in supermarkets?",
        answer:
          "Yes, including the long island freezers with multiple sliding lids and the open well freezers used for frozen chicken and vegetables.",
      },
    ],
    related: ["chest-freezer-repairs", "multideck-chiller-repairs", "butchery-display-fridge-repairs"],
    picture: "freezerIce",
    pictureAlt: "Technician repairing a commercial freezer",
  },

  {
    slug: "butchery-display-fridge-repairs",
    name: "Butchery display fridge",
    plural: "butchery display counters",
    group: "commercial",
    usedIn: "Butcheries, supermarket meat counters, fishmongers",
    cardText: "Serve over meat display counters and butchery fridges where temperature is a health matter.",
    title: "Butchery Display Fridge Repairs Harare | Meat Counter Technicians",
    description:
      "Butchery display fridge and meat counter repairs in Harare. Serve over counters not holding temperature, misting glass, icing, fan and compressor faults repaired on site, 24 hours. Call 0782 886 252.",
    h1: "Butchery Display Fridge Repairs in Harare",
    lead:
      "A butchery display counter that drifts above 4 degrees is more than an inconvenience: it is a food safety problem and a stock loss waiting to happen. Harare Fridge Repairs repairs serve over meat counters, butchery display fridges and fish counters on site in butcheries and supermarkets across Harare, 24 hours a day, because meat does not wait for business hours.",
    points: [
      "Serve over curved and flat glass meat counters",
      "Static and ventilated display counters",
      "Condensing units, fans, controllers and defrost repairs",
      "Glass heaters, lighting and gasket replacement",
    ],
    intro: [
      "A butchery counter cools an open display deck with cold air from an evaporator at the back or under the deck, with the condensing unit built in underneath or remote on the wall or roof. The open front means the counter is always fighting the shop air, so airflow, a clean condenser and a correct gas charge all matter more than in a closed fridge.",
      "The common faults are evaporator fans that have failed so the front of the deck warms, a condenser blocked with sawdust and dust so the unit trips in the heat, defrost failures that ice the evaporator, controller and probe faults, misting glass from failed heaters, and compressor failures on units that have been running hot for a long time. Meat juices getting into drains and electrics add their own problems.",
      "When a counter fails we help you secure the meat first, then diagnose and quote. Most counter repairs are completed on site in one visit, and we will stay until the deck is back at temperature.",
    ],
    faults: [
      "Meat at the front of the display warming up",
      "Counter not getting below 6 or 7 degrees",
      "Evaporator iced up behind the deck",
      "Glass misting or lights not working",
      "Condensing unit tripping in the afternoon",
      "Loud fan or compressor noise under the counter",
      "Water running out of the counter onto the floor",
      "Controller showing an error after a power cut",
    ],
    repairNotes: [
      "Butchery counter repairs are done in the shop: fan motors, controllers, probes, defrost heaters, glass heaters, lighting, gaskets, contactors, capacitors and compressors are replaced in place, and regassing follows a leak test with the correct gas, often R404A or R134a. We also clean the evaporator and drains, which are frequently blocked with meat residue.",
      "For butcheries with a cold room as well as counters we check both on the same visit, because a cold room running warm loads the counters harder.",
    ],
    faqs: [
      {
        question: "My meat counter will not get cold enough. What is wrong?",
        answer:
          "Usually a fan, a blocked condenser, an iced evaporator or a low gas charge. On an open counter a failed fan shows first at the front of the deck. We test each and repair what has actually failed.",
      },
      {
        question: "Can you come at night or on a Sunday if the counter fails?",
        answer:
          "Yes. We treat butchery counters and cold rooms as emergencies and attend 24 hours a day, every day.",
      },
      {
        question: "Do you also repair butchery cold rooms and chest freezers?",
        answer:
          "Yes. Most butcheries in Harare run a display counter, a cold room and chest freezers, and we repair all three.",
      },
    ],
    related: ["cold-room-repairs", "display-freezer-repairs", "cake-display-fridge-repairs"],
    picture: "temperature",
    pictureAlt: "Technician working on a commercial display fridge",
  },

  {
    slug: "cake-display-fridge-repairs",
    name: "Cake display fridge",
    plural: "cake and deli display fridges",
    group: "commercial",
    usedIn: "Bakeries, cafés, delis, hotel lobbies, supermarkets",
    cardText: "Cake, pastry and deli display cabinets where presentation matters as much as temperature.",
    title: "Cake Display Fridge Repairs Harare | Bakery & Deli Cabinets",
    description:
      "Cake display fridge and deli cabinet repairs in Harare for bakeries, cafés, delis and hotels. Misting glass, not cooling, humidity, fan, lighting and compressor faults repaired on site. Call 0782 886 252.",
    h1: "Cake and Deli Display Fridge Repairs in Harare",
    lead:
      "A cake display fridge has to keep cream cakes safe without drying them out, and show them off through clear, unmisted glass. When the glass fogs or the cabinet runs warm, sales stop. Harare Fridge Repairs repairs cake display fridges, pastry cabinets and deli counters on site in bakeries, cafés, delis and hotels across Harare.",
    points: [
      "Upright rotating and static cake displays",
      "Curved and square glass pastry and deli counters",
      "Glass heaters, humidity, lighting and fan repairs",
      "Controllers, probes, compressors and regassing",
    ],
    intro: [
      "Cake and deli displays are fan assisted or static cabinets with glass on three or four sides, which makes them the display type most prone to misting and to warming from the room and the lighting. Many have humidity control to stop pastry drying out and rotating shelves driven by a small motor. Deli counters work like a butchery counter but at a slightly higher temperature.",
      "Faults we see include glass misting from failed heaters or high humidity, cabinets that cannot hold temperature in a sunny café window, fans that have become noisy or stopped, rotating shelf motors that have failed, LED lighting faults, probes reading wrongly, and the usual condenser, compressor and gas issues. Cakes freezing at the back near the evaporator is a sign of a damper or airflow problem.",
      "We understand that these cabinets are the shop window of a bakery, so we repair them cleanly and quickly and leave the glass clear.",
    ],
    faults: [
      "Glass misting up so customers cannot see the cakes",
      "Cabinet not holding 4 degrees in a warm café",
      "Cream and pastry drying out or freezing at the back",
      "Rotating shelves stopped or jerking",
      "Fan noise or fan not running",
      "Lights flickering or dead",
      "Water dripping inside the cabinet or onto the floor",
      "Compressor running continuously",
    ],
    repairNotes: [
      "Glass heaters, fans, rotating motors, lighting, controllers, probes, gaskets and compressors are replaced on site, and cabinets are regassed after a leak test. Where misting is caused by café humidity rather than a fault we explain what can be done, from adjusting the heater to improving ventilation around the cabinet.",
      "For bakeries and cafés we can visit early before opening so the cabinet is at temperature and the glass clear when the first customers arrive.",
    ],
    faqs: [
      {
        question: "Why does the glass on my cake fridge keep misting?",
        answer:
          "The glass heater has failed, the heater is not strong enough for a humid room, or the cabinet is holding too much moisture. We test the heaters and the humidity control and advise on the cabinet's position.",
      },
      {
        question: "Can you repair the rotating shelves?",
        answer:
          "Yes. The drive motor and gearbox are replaceable, and a jerking rotation is often a worn bearing or an obstruction that is quick to fix.",
      },
      {
        question: "Do you repair deli counters as well as cake displays?",
        answer:
          "Yes. Deli counters, cheese displays and sandwich bars are all part of our commercial work in Harare.",
      },
    ],
    related: ["butchery-display-fridge-repairs", "under-counter-fridge-repairs", "beverage-chiller-repairs"],
    picture: "controlBoard",
    pictureAlt: "Technician repairing a display fridge",
  },

  {
    slug: "multideck-chiller-repairs",
    name: "Multideck chiller",
    plural: "multideck open chillers",
    group: "commercial",
    usedIn: "Supermarkets, convenience stores, service station shops, pharmacies",
    cardText: "Open front dairy, drinks and produce chillers in supermarkets and convenience stores.",
    title: "Multideck Chiller Repairs Harare | Supermarket Open Chillers",
    description:
      "Multideck chiller repairs in Harare for open front dairy, drinks and produce chillers in supermarkets and convenience stores. Air curtain, fan, defrost, controller and compressor faults repaired on site. Call 0782 886 252.",
    h1: "Multideck Chiller Repairs in Harare",
    lead:
      "Multideck open chillers hold the dairy, drinks, meat packs and produce that a supermarket sells most of, and a single failed fan can let a whole bay of stock warm up. Harare Fridge Repairs repairs plug in and remote multideck chillers on site in supermarkets, convenience stores and pharmacies across Harare, with out of hours visits to avoid disrupting trading.",
    points: [
      "Plug in multidecks with built in condensing units",
      "Remote multidecks on a central plant or condensing unit",
      "Air curtain fans, evaporator fans and defrost systems",
      "Controllers, probes, night blinds, lighting and gaskets",
    ],
    intro: [
      "A multideck chiller keeps product cold with a curtain of cold air blown down the open front and drawn back through a grille at the bottom. Behind the back panel sits an evaporator with several fans, and either a built in condensing unit at the top or bottom or pipework to a remote unit outside. The air curtain is easily upset: a failed fan, a blocked return grille, product stacked past the load line or a draught from a door all let warm air in.",
      "Faults we repair include evaporator fans that have failed so one section runs warm, defrost failures that ice the coil and stop airflow, controllers and probes damaged by surges, blocked condensers on plug in units, night blinds and lighting faults, and compressor and refrigerant problems on both plug in and remote systems. On remote systems we also work on the condensing unit and its controls.",
      "We know that a supermarket cannot simply switch a bay off, so we work with your staff to move stock, repair the cabinet and get it back to temperature with the least disruption.",
    ],
    faults: [
      "One section or shelf of the chiller running warm",
      "Product at the front warm, product at the back cold",
      "Ice on the back panel or in the air outlet",
      "Fans noisy or not all running",
      "Controller alarm or wrong temperature display",
      "Plug in unit tripping or cutting out in the heat",
      "Water on the shop floor in front of the chiller",
      "Night blind or lighting not working",
    ],
    repairNotes: [
      "On plug in multidecks we clean condensers, replace fans, defrost heaters, controllers, probes and compressors and regas after a leak test. On remote systems we repair the cabinet side and the condensing unit, including contactors, pressure switches, fan motors and compressors. Night blinds, lighting and gaskets are replaced as needed.",
      "For supermarkets we offer planned maintenance that cleans condensers and checks fans and defrost cycles across all cabinets, which is far cheaper than emergency stock losses.",
    ],
    faqs: [
      {
        question: "Why is one shelf of my multideck warm?",
        answer:
          "One of the evaporator fans has usually failed, or that section of the coil has iced up. Both stop cold air reaching that part of the cabinet and both are repaired on site.",
      },
      {
        question: "Do you repair remote multidecks connected to a condensing unit outside?",
        answer:
          "Yes. We work on the cabinet and on the condensing unit, including the controls, fans, compressors and pipework between them.",
      },
      {
        question: "Can you work outside trading hours?",
        answer:
          "Yes. For supermarkets and convenience stores we schedule evening or early morning visits, and we attend emergencies at any time.",
      },
    ],
    related: ["beverage-chiller-repairs", "display-freezer-repairs", "cold-room-repairs"],
    picture: "fan",
    pictureAlt: "Technician testing a supermarket chiller",
  },

  {
    slug: "ice-machine-repairs",
    name: "Ice machine",
    plural: "ice machines",
    group: "commercial",
    usedIn: "Bars, hotels, restaurants, clubs, event hire companies",
    cardText: "Cube, flake and nugget ice makers in bars, hotels and restaurants.",
    title: "Ice Machine Repairs Harare | Commercial Ice Maker Technicians",
    description:
      "Ice machine repairs in Harare for cube, flake and nugget ice makers in bars, hotels, restaurants and clubs. No ice, small cubes, not harvesting, water and compressor faults repaired on site. Call 0782 886 252.",
    h1: "Ice Machine Repairs in Harare",
    lead:
      "A bar without ice on a Saturday night is a bar in trouble. Harare Fridge Repairs repairs commercial ice machines, from small under counter cube makers to large modular units and flake ice machines, on site in bars, hotels, restaurants, clubs and event companies across Harare, at any hour.",
    points: [
      "Cube, flake, nugget and gourmet ice machines",
      "Under counter, modular and self contained units",
      "Water supply, pump, harvest and refrigeration faults",
      "Descaling and sanitising as part of the repair",
    ],
    intro: [
      "An ice machine is a refrigeration system plus a water system plus a control sequence, and a fault in any of the three stops the ice. Water has to reach the machine at the right pressure, be pumped over or into a freezing evaporator, freeze into cubes or flakes, then be released in a harvest cycle by hot gas or a heater, and the cycle has to repeat under the control of sensors and a board.",
      "In Harare the biggest enemies of ice machines are water quality and heat. Scale from hard water builds up on the evaporator and in the pump and valves, producing small or cloudy cubes, long cycles and eventually no ice. Air cooled condensers in hot bars and kitchens clog with dust and the machine overheats, cycles slowly or trips. Power interruptions mid cycle can leave the machine stuck in freeze or harvest.",
      "Repairing an ice machine properly includes descaling and sanitising it, because an unclean machine makes bad ice and fails again quickly.",
    ],
    faults: [
      "Machine running but making no ice",
      "Small, cloudy, hollow or misshapen cubes",
      "Cubes not dropping and freezing into a solid block",
      "Machine stuck in a freeze or harvest cycle",
      "Water overflowing or leaking from the machine",
      "Slow production, taking far too long per batch",
      "Compressor running hot and the machine tripping",
      "Bin full sensor or control board faults",
    ],
    repairNotes: [
      "We repair water inlet valves, pumps, float switches, harvest valves and heaters, sensors, control boards, condenser and evaporator fans, and compressors on site, and regas machines after a leak test with the correct refrigerant. Descaling the evaporator and water circuit and sanitising the bin are included where the fault calls for it.",
      "A water filter and a regular descale are the two things that keep an ice machine reliable in Harare. We can advise on both during the visit.",
    ],
    faqs: [
      {
        question: "Why are the ice cubes from my machine small and cloudy?",
        answer:
          "Scale on the evaporator, a weak water flow from a blocked filter or valve, or a low gas charge. Cloudy cubes in particular point to scale and water quality. A descale and a check of the water system usually fixes it.",
      },
      {
        question: "My ice machine is running but no ice drops. What is wrong?",
        answer:
          "The harvest cycle is not working, which can be a failed harvest valve or heater, a sensor or board fault, or a machine that has lost its refrigerant charge and is only partly freezing. We test the cycle and repair the failed part.",
      },
      {
        question: "Can you come to a bar at night if the ice machine stops?",
        answer:
          "Yes. We are open 24 hours and understand that ice is urgent for a bar or hotel on a busy night.",
      },
    ],
    related: ["underbar-fridge-repairs", "beverage-chiller-repairs", "commercial-upright-fridge-repairs"],
    picture: "regassing",
    pictureAlt: "Technician repairing commercial refrigeration equipment",
  },

  {
    slug: "cold-room-repairs",
    name: "Cold room",
    plural: "cold rooms",
    group: "commercial",
    usedIn: "Butcheries, supermarkets, farms, hotels, restaurants, pharmacies, funeral parlours",
    cardText: "Walk in cold rooms and freezer rooms for butcheries, farms, hotels and supermarkets.",
    title: "Cold Room Repairs Harare | Walk-In Chiller & Freezer Rooms",
    description:
      "Cold room repairs in Harare for walk in chillers and freezer rooms in butcheries, supermarkets, farms, hotels and restaurants. Condensing units, evaporators, controls, doors and regassing, 24/7. Call 0782 886 252.",
    h1: "Cold Room Repairs in Harare",
    lead:
      "A cold room holds more stock than any other refrigeration you own, so when it starts to warm up the clock is running. Harare Fridge Repairs repairs walk in cold rooms and freezer rooms across Harare, from butchery chillers in Mbare to farm pack houses outside the city, 24 hours a day. We work on the condensing unit, the evaporator, the controls and the room itself.",
    points: [
      "Chiller rooms, freezer rooms and blast rooms",
      "Condensing units, evaporator coils and fans",
      "Controllers, defrost, pressure switches and contactors",
      "Doors, seals, heaters, panels and regassing",
    ],
    intro: [
      "A cold room is a refrigeration system in three parts: a condensing unit outside with the compressor, condenser and fan; an evaporator coil with fans inside the room; and the pipework, controls and door that connect them. A fault in any part raises the room temperature, and the symptom in the room rarely tells you which part has failed.",
      "The faults we repair most are condensing unit problems in the heat of the day, from blocked condensers, failed condenser fan motors and tripped high pressure switches to contactor and compressor failures; evaporator problems such as fan motors that have failed and defrost systems that have iced the coil solid; controller and probe faults after power surges; and doors that no longer seal, letting in humid air that frosts the coil and floods the floor. Refrigerant leaks from vibration and corrosion are common on older rooms.",
      "When you call about a warm cold room we come straight away, secure the stock as far as possible, and diagnose the system end to end before giving you a price and a time.",
    ],
    faults: [
      "Room temperature rising during the day",
      "Evaporator coil iced into a block, fans blowing little air",
      "Condensing unit tripping or short cycling outside",
      "Condenser fan not running, compressor very hot",
      "Controller alarm or room not reaching set point",
      "Door not sealing, frost or ice around the frame",
      "Water or ice on the cold room floor",
      "Loud compressor noise or burnt smell at the unit",
    ],
    repairNotes: [
      "Cold room repairs are done on site: condenser cleaning, fan motor, contactor, capacitor, pressure switch and compressor replacement on the condensing unit; fan motor, defrost heater and drain heater replacement on the evaporator; controller and probe replacement; door seal, closer and heater repairs; and leak repair, vacuum and regassing with the correct refrigerant, usually R404A, R452A, R134a or R22 on older rooms.",
      "Butcheries, supermarkets, farms and hotels benefit most from planned maintenance: a condenser clean, a defrost check and a door seal check before the hot season prevent the breakdowns that happen in November.",
    ],
    faqs: [
      {
        question: "My cold room is warm but the unit outside is running. What is wrong?",
        answer:
          "The evaporator inside has probably iced up because the defrost has failed, an evaporator fan has stopped, or the system has lost refrigerant so the compressor runs without cooling. We check the coil, the fans and the pressures and tell you exactly which it is.",
      },
      {
        question: "Why does my cold room floor have water or ice on it?",
        answer:
          "Melt water from the evaporator is not draining, usually because the drain line or drain heater has failed, or humid air is getting in through a poor door seal and condensing on the floor. Both are repairable.",
      },
      {
        question: "Can you repair the cold room at night or on a weekend?",
        answer:
          "Yes. A warm cold room is an emergency and we attend 24 hours a day, every day, anywhere in Harare and the surrounding farms.",
      },
      {
        question: "Do you install new cold rooms?",
        answer:
          "Our focus is repair, maintenance and keeping existing rooms running. If your room is beyond economic repair we will tell you honestly and explain the options.",
      },
    ],
    related: ["butchery-display-fridge-repairs", "commercial-upright-fridge-repairs", "multideck-chiller-repairs"],
    picture: "compressorTest",
    pictureAlt: "Technician connecting gauges to a refrigeration system",
  },
]

export const homeTypes = fridgeTypes.filter((type) => type.group === "home")
export const commercialTypes = fridgeTypes.filter((type) => type.group === "commercial")

export function getFridgeType(slug: string) {
  return fridgeTypes.find((type) => type.slug === slug)
}

export function typeLink(type: FridgeTypeRecord): LinkItem {
  return { href: `/${type.slug}`, label: `${type.name} repairs`, text: type.cardText }
}

const processVariants = [
  [
    { title: "Tell us what it is doing", text: "Call or WhatsApp with your suburb, the brand and the symptom. A photo of the unit and its rating plate helps." },
    { title: "Technician on site", text: "We travel to your address anywhere in Harare, at a time that works for you, including nights and weekends." },
    { title: "Diagnosis and price", text: "The fault is tested and shown to you, then a price is agreed. No part is fitted without your approval." },
    { title: "Repair and check", text: "The repair is completed on site wherever parts allow, and the unit is run to temperature before we leave." },
  ],
  [
    { title: "Book the callout", text: "Give us your suburb and describe the fault. For commercial units tell us if stock is at risk so we can prioritise." },
    { title: "We come to you", text: "No transport, no workshop queue. The technician arrives with the common parts and the test equipment on the vehicle." },
    { title: "Fault confirmed", text: "Temperatures, currents and pressures are measured so the real fault is found, not guessed from the symptom." },
    { title: "Fixed and tested", text: "Parts are replaced, the system is tested under load, and you get a clear explanation of what was done." },
  ],
]

export function buildFridgeTypePage(type: FridgeTypeRecord): ContentPage {
  const hubHref = type.group === "home" ? "/refrigerator-repairs" : "/commercial-fridge-repairs"
  const hubName = type.group === "home" ? "Refrigerator repairs by type" : "Commercial fridge repairs"
  const related = type.related
    .map((slug) => getFridgeType(slug))
    .filter((item): item is FridgeTypeRecord => Boolean(item))
    .map(typeLink)

  const process = pick(processVariants, type.slug)

  const sections: ContentSection[] = [
    { kind: "text", heading: `${type.name} repairs: what goes wrong`, paragraphs: type.intro },
    { kind: "list", heading: `${type.name} faults we repair in Harare`, items: type.faults },
    {
      kind: "feature",
      eyebrow: "On site repair",
      heading: `How we repair ${type.plural}`,
      paragraphs: type.repairNotes,
      picture: type.picture,
      pictureAlt: type.pictureAlt,
      reverse: true,
    },
    { kind: "steps", heading: `Booking a ${type.name.toLowerCase()} repair`, items: process },
    {
      kind: "cards",
      heading: "Related refrigeration repairs",
      items: [
        ...related,
        { href: hubHref, label: hubName, text: type.group === "home" ? "Every type of home fridge and freezer we repair." : "Every type of commercial refrigeration we repair." },
      ],
      columns: 2,
    },
    {
      kind: "chips",
      heading: "Common fridge problems",
      items: rotate(
        [
          { href: "/problems/fridge-not-cooling", label: "Not cooling" },
          { href: "/problems/freezer-not-freezing", label: "Not freezing" },
          { href: "/problems/ice-build-up", label: "Ice build up" },
          { href: "/problems/fridge-leaking-water", label: "Leaking water" },
          { href: "/problems/fridge-making-noise", label: "Making noise" },
          { href: "/problems/fridge-not-switching-on", label: "Not switching on" },
          { href: "/problems/fridge-compressor-problems", label: "Compressor problems" },
          { href: "/problems/fridge-running-constantly", label: "Running constantly" },
          { href: "/fridge-regassing", label: "Regassing" },
          { href: "/areas", label: "Areas we cover" },
        ],
        type.slug,
      ),
    },
  ]

  return {
    path: `/${type.slug}`,
    title: type.title,
    description: type.description,
    eyebrow: `${type.name} repairs in Harare`,
    h1: type.h1,
    lead: type.lead,
    points: type.points,
    picture: type.picture,
    pictureAlt: type.pictureAlt,
    crumbs: [
      { name: hubName, path: hubHref },
      { name: `${type.name} repairs`, path: `/${type.slug}` },
    ],
    sections,
    faqs: type.faqs,
    faqHeading: `${type.name} repair questions`,
    cta: {
      title: `Need a ${type.name.toLowerCase()} repaired in Harare?`,
      text: `Call 0782 886 252 or WhatsApp us your suburb and the fault. We repair ${type.plural} on site, 24 hours a day.`,
    },
    whatsappMessage: `Hi Harare Fridge Repairs, I need a ${type.name.toLowerCase()} repaired. My suburb is: ___ and the problem is: ___`,
    schema: {
      serviceName: `${type.name} repairs in Harare`,
      serviceDescription: `On site repair of ${type.plural} across Harare, Zimbabwe, 24 hours a day.`,
      serviceType: `${type.name} repair`,
    },
  }
}
