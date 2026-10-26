import type { ContentPage, ContentSection, Faq, LinkItem } from "./model"
import { pick, rotate } from "@/lib/utils"

export type BrandRecord = {
  slug: string
  name: string
  tier: "popular" | "premium" | "budget"
  origin: string
  cardText: string
  title: string
  description: string
  lead: string
  intro: string[]
  models: string[]
  faults: string[]
  notes: string[]
  faqs: Faq[]
  types: string[]
}

export const brands: BrandRecord[] = [
  {
    slug: "samsung-fridge-repairs",
    name: "Samsung",
    tier: "popular",
    origin: "South Korea",
    cardText: "Digital inverter, Twin Cooling and side by side models with ice makers and error codes.",
    title: "Samsung Fridge Repairs Harare | Inverter & Side by Side Experts",
    description:
      "Samsung fridge repairs in Harare for top freezer, combi, side by side and French door models. Digital inverter, Twin Cooling, ice maker, defrost and error code faults repaired at home. Call 0782 886 252.",
    lead:
      "Samsung is one of the most common fridge brands in Harare homes, from the top freezer models in family kitchens to the large side by side and French door cabinets in the northern suburbs. They are well built, but their electronics and no frost systems need a technician who knows them. Harare Fridge Repairs repairs Samsung fridges at your address, 24 hours a day.",
    intro: [
      "Most Samsung fridges sold in Zimbabwe use a digital inverter compressor driven by an electronic board, a no frost evaporator with a fan, and one or more temperature sensors feeding a main control board. Larger models add Twin Cooling with a separate evaporator for the fridge section, an ice maker and a water dispenser. All of this makes a Samsung efficient and quiet, and it also means a fault needs proper diagnosis rather than a guess.",
      "The single most common Samsung complaint we attend in Harare is the fridge section running warm while the freezer is fine, often with a fan noise that stops when the door is opened. That is the fridge evaporator iced over because the defrost sensor or heater has failed, and on Twin Cooling models it is a well known pattern. The second most common is a dead or flashing display after load shedding, which points to the inverter board or main board.",
      "We read Samsung error codes, use the service test mode to drive each fan, heater and valve individually, and test sensors against the manufacturer's resistance chart. That finds the fault quickly and avoids replacing parts that are still good.",
    ],
    models: [
      "Top freezer fridge-freezers with digital inverter compressors",
      "Bottom freezer combi models with Twin Cooling Plus",
      "Side by side fridges with ice and water dispensers",
      "French door fridges with in door ice makers",
      "Single door fridges and bar fridges",
    ],
    faults: [
      "Fridge section warm, freezer still freezing",
      "Fan noise or ticking behind the fridge back panel",
      "Ice maker not producing or ice maker compartment frozen",
      "Display flashing or showing a sensor error code",
      "Water pooling under the crisper drawers",
      "Fridge dead after a power surge, no display",
      "Compressor running but cabinet slowly warming",
      "Water dispenser dripping or not dispensing",
    ],
    notes: [
      "Samsung defrost repairs are done on site: the back panel comes off, the ice is cleared properly, and the defrost sensor, heater, fuse or main board is tested and replaced. Ice maker faults are repaired by replacing the ice maker module, water valve or heater as the test shows. Inverter boards and main boards are replaced only after the compressor windings and sensors have been tested, because a board is often blamed for a sensor fault.",
      "Samsung fridges use small R600a charges and the charge weight on the rating plate must be followed exactly. If a Samsung has been regassed by someone without a scale and now cools badly, that is usually why.",
    ],
    faqs: [
      {
        question: "Why is my Samsung fridge warm but the freezer cold?",
        answer:
          "The fridge evaporator has iced over because the defrost sensor or heater has failed, or the fan feeding the fridge section has stopped. We clear the ice, replace the failed part and make sure the drain is clear. Defrosting alone fixes it for a week at most.",
      },
      {
        question: "Can you fix the ice maker on my Samsung fridge?",
        answer:
          "Yes. Samsung ice maker faults are usually the ice maker module, a frozen fill tube, the water inlet valve or the ice room fan and heater. We test and replace the part at fault.",
      },
      {
        question: "What does the error code on my Samsung display mean?",
        answer:
          "Samsung codes point to a specific sensor, fan, defrost or communication fault. Send the code and model number on WhatsApp and we will tell you what it indicates before the visit.",
      },
    ],
    types: ["side-by-side-fridge-repairs", "french-door-fridge-repairs", "combi-fridge-repairs", "double-door-fridge-repairs"],
  },

  {
    slug: "lg-fridge-repairs",
    name: "LG",
    tier: "popular",
    origin: "South Korea",
    cardText: "Linear and smart inverter compressors, Door in Door and InstaView models.",
    title: "LG Fridge Repairs Harare | Linear Inverter & InstaView Models",
    description:
      "LG fridge repairs in Harare for top freezer, bottom freezer, side by side, Door in Door and InstaView fridges. Linear inverter compressor, board, defrost and ice maker faults repaired at home. Call 0782 886 252.",
    lead:
      "LG fridges are popular across Harare for their quiet linear inverter compressors and large side by side and InstaView cabinets. When they fail, the cause is often electronic, and the repair needs a technician who can test an inverter compressor properly before condemning it. Harare Fridge Repairs repairs LG fridges at your home, at any hour.",
    intro: [
      "LG builds its fridges around the Smart Inverter and Linear Inverter compressors, controlled by a main board and an inverter board, with no frost evaporators, multi air flow fans and, on larger models, Door in Door compartments, InstaView glass panels and ice and water systems. The compressor carries a long warranty, but the boards and sensors around it do not, and those are what Harare's power supply attacks.",
      "The LG faults we see most are a fridge that cools poorly or not at all while the compressor runs, which on a linear compressor can be a compressor that has lost its pumping capacity or a board that is not driving it correctly; a fridge section warm because the evaporator has iced up or the damper has stuck; fan noise from an iced fan; and a dead fridge after a surge. Ice makers and dispensers on side by side models fail at the valve, the fill tube and the ice maker module.",
      "We test LG compressors with the correct procedure, measuring the winding resistance and the current the inverter board is supplying, and we use the diagnostic mode on the display to read the fault history. That separates a compressor fault from a board fault, which is the decision that matters most on an LG.",
    ],
    models: [
      "Top freezer fridges with Smart Inverter compressors",
      "Bottom freezer combi fridges with Linear Cooling",
      "Side by side fridges with Door in Door",
      "InstaView French door fridges",
      "Single door and bar fridges",
    ],
    faults: [
      "Compressor running but fridge not cooling",
      "Fridge section warm, freezer fine",
      "Loud fan or clicking noise from the back",
      "Display dead or flashing after load shedding",
      "Error code on the display",
      "Ice maker not working or dispenser dripping",
      "Ice sheet forming in the bottom of the freezer",
      "Door in Door compartment warm",
    ],
    notes: [
      "LG repairs are done on site, including inverter board and main board replacement, compressor replacement with the matched linear or smart inverter unit, defrost sensor and heater replacement, fan and damper replacement, and ice maker and valve repairs. Regassing uses the exact R600a charge on the plate.",
      "If your LG is under the compressor warranty, we will tell you, because the compressor itself may be covered even though the labour and gas are not. We do not claim to be an authorised LG service centre; we are independent technicians who know the product.",
    ],
    faqs: [
      {
        question: "My LG fridge is running but not cold. Is the linear compressor finished?",
        answer:
          "Possibly, but not necessarily. A board that is not driving the compressor correctly, a low gas charge or an iced evaporator produce the same symptom. We test the compressor and the board before recommending anything.",
      },
      {
        question: "Why does my LG display flash after a power cut?",
        answer:
          "A surge has usually damaged the inverter board or main board, or a sensor has failed and the board is reporting it. The display diagnostic mode tells us which, and the repair is done at home.",
      },
      {
        question: "Do you repair LG side by side ice makers?",
        answer:
          "Yes. The ice maker module, the water valve, the fill tube and the dispenser door are all repairable on site.",
      },
    ],
    types: ["side-by-side-fridge-repairs", "french-door-fridge-repairs", "combi-fridge-repairs", "double-door-fridge-repairs"],
  },

  {
    slug: "defy-fridge-repairs",
    name: "Defy",
    tier: "popular",
    origin: "South Africa",
    cardText: "The most common fridge brand in Harare homes, from manual defrost to no frost models.",
    title: "Defy Fridge Repairs Harare | Top Freezer, Combi & Chest Freezers",
    description:
      "Defy fridge repairs in Harare for top freezer, bottom freezer, side by side and chest freezer models. Thermostat, defrost, compressor, door seal and regassing faults repaired at your address. Call 0782 886 252.",
    lead:
      "Defy is probably the fridge we repair more than any other in Harare. South African made and sold everywhere in Zimbabwe for decades, Defy fridges range from simple manual defrost double doors and chest freezers to modern no frost combis and side by sides. Harare Fridge Repairs knows the whole range and repairs Defy fridges at your home, 24 hours a day.",
    intro: [
      "Older Defy fridges are mechanical: a thermostat, a compressor with a relay and overload, a static or semi static evaporator and a door gasket. They run for twenty years and the faults are cheap to fix. Newer Defy models, built since the brand became part of the Beko group, are no frost fridges with fans, defrost heaters, electronic controls and R600a refrigerant, and they fail more like a Beko or a Samsung than like the Defy of the past.",
      "On the older models we see thermostats that have lost their charge, relays and overloads burnt out by repeated restarts during load shedding, hardened gaskets that let the freezer ice up, and refrigerant leaks in evaporators pierced during defrosting. On the newer no frost models the common faults are defrost heaters and sensors, evaporator fans, and control boards after a surge.",
      "Defy chest freezers are a category of their own and sit in thousands of Harare homes and tuck shops. They fail at the thermostat, the relay, the lid gasket and, after many years, the compressor, and all of those are repaired on site.",
    ],
    models: [
      "Manual defrost double door fridge-freezers",
      "No frost top freezer and bottom freezer combi models",
      "Side by side fridges with water dispensers",
      "Defy chest freezers from 150 to 500 litres",
      "Single door fridges and upright freezers",
    ],
    faults: [
      "Fridge running but not cold, thermostat not clicking",
      "Freezer section iced solid and fridge section warm",
      "Compressor humming and clicking, not starting",
      "Door gasket torn or pulling away at the corners",
      "Water collecting at the bottom of the fridge",
      "Chest freezer not freezing at the bottom",
      "No frost model fan noisy or stopped",
      "Fridge dead after a power surge",
    ],
    notes: [
      "Defy thermostats, relays, overloads, gaskets, defrost heaters, fans and compressors are standard parts that we carry or can source quickly, so most Defy repairs are finished in one visit. Regassing uses R134a on older models and R600a on newer ones, always by weight after a leak repair.",
      "A Defy that has started icing up or cooling badly after being moved house often has a kinked or chafed pipe or a gasket that was damaged in the move. We check for that first.",
    ],
    faqs: [
      {
        question: "Is my old Defy fridge worth repairing?",
        answer:
          "Usually yes. Older Defy fridges are simple and the parts are inexpensive. Unless the evaporator is leaking or the cabinet is rusted through, a repair is far cheaper than a replacement and the fridge will run for years more.",
      },
      {
        question: "Why does my Defy no frost fridge ice up at the back?",
        answer:
          "The defrost heater, the defrost sensor or the timer has failed, so the frost that should melt every few hours builds into a sheet of ice. We replace the failed part and clear the ice.",
      },
      {
        question: "Do you repair Defy chest freezers?",
        answer:
          "Yes, every week. Thermostats, relays, lid gaskets, compressors and regassing on Defy chest freezers are all done on site.",
      },
    ],
    types: ["double-door-fridge-repairs", "chest-freezer-repairs", "combi-fridge-repairs", "side-by-side-fridge-repairs"],
  },

  {
    slug: "hisense-fridge-repairs",
    name: "Hisense",
    tier: "popular",
    origin: "China",
    cardText: "Affordable top and bottom freezer fridges, side by sides and chest freezers sold across Harare.",
    title: "Hisense Fridge Repairs Harare | All Hisense Fridges & Freezers",
    description:
      "Hisense fridge repairs in Harare for top freezer, bottom freezer, side by side and chest freezer models. Not cooling, defrost, board, compressor and door seal faults repaired at your address. Call 0782 886 252.",
    lead:
      "Hisense has become one of the best selling fridge brands in Zimbabwe, with affordable top and bottom freezer fridges, side by sides and chest freezers in homes across Harare. Harare Fridge Repairs repairs the full Hisense range at your address, from a bar fridge in a Mount Pleasant rental to a side by side in Borrowdale, day or night.",
    intro: [
      "Hisense fridges range from basic manual defrost models with a mechanical thermostat to no frost combis and side by sides with inverter compressors and electronic controls. The newer models use R600a refrigerant and a control board that, like every electronic fridge in Harare, is vulnerable to voltage surges when the power returns after load shedding.",
      "The Hisense faults we attend most are a no frost fridge whose fridge section has gone warm because the defrost system failed, a fridge that is dead or flashing after a power surge, evaporator fans that have become noisy, door gaskets that no longer seal on the cheaper models, and thermostats and relays on the manual defrost range. Hisense chest freezers fail like any other chest freezer: thermostat, relay, lid gasket and eventually the compressor.",
      "Parts for Hisense fridges are widely available, and most repairs are done in one visit from parts on the vehicle.",
    ],
    models: [
      "Manual defrost top freezer fridges",
      "No frost top freezer and combi fridges",
      "Side by side fridges with and without dispensers",
      "Hisense chest freezers",
      "Bar fridges and single door models",
    ],
    faults: [
      "Fridge section warm, freezer still working",
      "Fridge dead or display flashing after load shedding",
      "Fan noise behind the freezer back panel",
      "Thermostat not switching the compressor on",
      "Door not sealing, frost around the freezer door",
      "Water under the crisper drawers",
      "Chest freezer soft at the bottom",
      "Compressor humming and clicking",
    ],
    notes: [
      "We replace Hisense defrost heaters, sensors, timers, fans, thermostats, relays, control boards, gaskets and compressors on site, and regas after a leak repair with the correct R600a or R134a charge by weight.",
      "A surge protector is a good investment for any electronic Hisense fridge in Harare. We can fit one at the plug during the visit.",
    ],
    faqs: [
      {
        question: "My Hisense fridge stopped after a power cut. What happened?",
        answer:
          "A surge when the power returned has most likely damaged the control board, a fuse on it or the compressor relay. We test the board, relay and compressor and replace the part that has failed.",
      },
      {
        question: "Are Hisense fridges worth repairing?",
        answer:
          "Yes. Parts are inexpensive and available, and a repair is a fraction of the cost of a new fridge. We will tell you if a specific fault is not worth fixing.",
      },
      {
        question: "Do you repair Hisense chest freezers?",
        answer:
          "Yes. Thermostats, relays, lid gaskets, compressors and regassing on Hisense chest freezers are all done on site in Harare.",
      },
    ],
    types: ["double-door-fridge-repairs", "combi-fridge-repairs", "chest-freezer-repairs", "side-by-side-fridge-repairs"],
  },

  {
    slug: "kic-fridge-repairs",
    name: "KIC",
    tier: "popular",
    origin: "South Africa",
    cardText: "Simple, robust South African fridges and chest freezers that last for decades.",
    title: "KIC Fridge Repairs Harare | KIC Fridges & Chest Freezers",
    description:
      "KIC fridge repairs in Harare for KIC double door fridges, single door fridges and chest freezers. Thermostat, relay, compressor, gasket and regassing repairs at your home or shop. Call 0782 886 252.",
    lead:
      "KIC fridges and chest freezers are everywhere in Harare, many of them twenty or thirty years old and still running. They are simple, robust and cheap to repair, which is exactly the kind of fridge worth keeping. Harare Fridge Repairs repairs KIC fridges and freezers on site, including the old ones that other technicians give up on.",
    intro: [
      "KIC is a South African fridge and freezer brand that has been sold in Zimbabwe for generations. Most KIC fridges in Harare are mechanical double door or single door models with a thermostat, a static evaporator and a standard reciprocating compressor, and KIC chest freezers are the classic design with the evaporator in the walls and a thermostat in the control box. Newer KIC models are no frost and electronic.",
      "On the older KIC fridges the faults are predictable: a thermostat that has lost its charge, a start relay or overload that has failed, a door gasket that has hardened, and refrigerant leaks from corroded pipes or an evaporator pierced during defrosting. The compressors are strong and often outlast everything around them, but after decades of load shedding restarts they do eventually fail, and a replacement is still worthwhile on a sound cabinet.",
      "On KIC chest freezers the same thermostat, relay and gasket faults apply, plus leaks in the condenser pipes running inside the outer walls, which show as a freezer that frosts only at the top.",
    ],
    models: [
      "Manual defrost double door fridge-freezers",
      "Single door fridges with an internal freezer box",
      "KIC chest freezers in all sizes",
      "Upright freezers",
      "Newer no frost KIC models",
    ],
    faults: [
      "Fridge not cold, no click from the thermostat",
      "Compressor buzzing and clicking off",
      "Freezer box or compartment iced solid",
      "Gasket hardened and door not sealing",
      "Chest freezer frosting only at the top of the walls",
      "Water on the floor from a blocked drain",
      "Fridge running all day and never stopping",
      "Fridge dead after a power surge",
    ],
    notes: [
      "KIC thermostats, relays, overloads and gaskets are standard parts carried on the vehicle, so most KIC repairs are finished in a single visit. Regassing on older KIC fridges uses R134a, charged by weight after the leak is repaired and the drier replaced. Compressor replacement is common and worthwhile on these cabinets.",
      "We are happy to repair a KIC that is older than the technician. If the cabinet is sound, the fridge is worth keeping.",
    ],
    faqs: [
      {
        question: "My KIC fridge is thirty years old. Can it still be repaired?",
        answer:
          "Almost certainly. Thermostats, relays, gaskets and compressors for these fridges are still available, and the cabinets and evaporators were built to last. We repair old KIC fridges every week.",
      },
      {
        question: "Why does my KIC chest freezer only frost at the top?",
        answer:
          "That pattern means a low gas charge from a leak, often in the condenser pipes inside the walls or at a joint by the compressor. We find the leak, repair it and recharge the freezer.",
      },
      {
        question: "Do you regas KIC fridges?",
        answer:
          "Yes, after finding and repairing the leak. A KIC that is simply topped up will be warm again within weeks.",
      },
    ],
    types: ["chest-freezer-repairs", "double-door-fridge-repairs", "single-door-fridge-repairs", "upright-freezer-repairs"],
  },

  {
    slug: "kelvinator-fridge-repairs",
    name: "Kelvinator",
    tier: "popular",
    origin: "Long established refrigeration brand",
    cardText: "One of the oldest refrigeration names, with many older fridges and freezers still in service.",
    title: "Kelvinator Fridge Repairs Harare | Older Fridges & Freezers",
    description:
      "Kelvinator fridge repairs in Harare for Kelvinator double door fridges, single door fridges, chest freezers and upright freezers. Thermostats, compressors, gaskets and regassing at your address. Call 0782 886 252.",
    lead:
      "Kelvinator is one of the oldest names in refrigeration, and Harare still has thousands of Kelvinator fridges and freezers in daily use, many of them decades old. They were built to be repaired, and Harare Fridge Repairs repairs them on site, from the thermostat to the compressor, keeping a good cabinet running rather than sending it to the scrap yard.",
    intro: [
      "The Kelvinator fridges and chest freezers in Harare are overwhelmingly mechanical: a capillary thermostat, a reciprocating compressor with a relay and overload, a static evaporator and a magnetic door gasket. Some older units still run on R12 and have been converted to R134a or a drop in replacement over the years, which is worth knowing before anyone connects a gauge.",
      "The faults are the ones that age brings: thermostats that have lost their charge, relays and overloads worn out by restarts, gaskets that have shrunk and cracked, corroded condenser pipes that leak, and evaporators pierced by a knife during a defrost. The compressors are strong and many are still original, but when one fails on a sound cabinet a replacement is worthwhile.",
      "Kelvinator chest freezers in particular are kept for decades in Harare homes and businesses, and apart from a lid gasket and a thermostat they often need little else.",
    ],
    models: [
      "Manual defrost double door fridge-freezers",
      "Single door fridges with an ice box",
      "Kelvinator chest freezers",
      "Upright freezers",
      "Older commercial Kelvinator cabinets",
    ],
    faults: [
      "Fridge not cooling and thermostat not clicking",
      "Compressor humming then clicking off",
      "Freezer compartment iced solid",
      "Door gasket cracked and not sealing",
      "Chest freezer frosting unevenly",
      "Oily stain at a pipe joint, cooling getting worse",
      "Fridge running constantly",
      "No power after a surge",
    ],
    notes: [
      "Kelvinator thermostats, relays, overloads and gaskets are standard parts, and compressor replacement follows the normal process of recovery, matched compressor, new drier, vacuum and charge by weight. Where a system has been converted from R12 we check which refrigerant and oil it is running on before any recharge.",
      "If a Kelvinator evaporator is leaking on a very old cabinet we will give you an honest view of whether the repair is worthwhile before you spend anything.",
    ],
    faqs: [
      {
        question: "Can you still get parts for an old Kelvinator fridge?",
        answer:
          "Yes. The thermostats, relays, overloads, gaskets and compressors used on these fridges are generic refrigeration parts that are still made. The only part that can be a problem is a leaking evaporator on a very old model.",
      },
      {
        question: "My Kelvinator still runs on old gas. Can you regas it?",
        answer:
          "Yes. Systems converted to R134a or a drop in refrigerant are recharged with the same gas. If the system is still on its original R12 we discuss the options with you, because R12 is no longer available.",
      },
      {
        question: "Is a Kelvinator chest freezer worth repairing?",
        answer:
          "Almost always. A thermostat, relay or gasket is a small repair, and even a compressor replacement is far cheaper than a new freezer of the same size.",
      },
    ],
    types: ["chest-freezer-repairs", "double-door-fridge-repairs", "single-door-fridge-repairs", "upright-freezer-repairs"],
  },

  {
    slug: "capri-fridge-repairs",
    name: "Capri",
    tier: "popular",
    origin: "Zimbabwe",
    cardText: "Zimbabwe's own fridge and freezer brand, made in Harare and repaired with local parts.",
    title: "Capri Fridge Repairs Harare | Zimbabwean Fridges & Chest Freezers",
    description:
      "Capri fridge repairs in Harare for Capri double door fridges, single door fridges and chest freezers made in Zimbabwe. Thermostat, relay, compressor, gasket and regassing repairs at your home or shop. Call 0782 886 252.",
    lead:
      "Capri is Zimbabwe's own appliance brand, and Capri fridges and chest freezers are in homes, tuck shops and churches across Harare. They are simple, locally made and built from standard refrigeration parts, which makes them among the easiest fridges to repair. Harare Fridge Repairs repairs Capri fridges and freezers on site, 24 hours a day.",
    intro: [
      "Capri fridges and freezers are manufactured in Harare and designed for Zimbabwean conditions, with mechanical thermostats, standard compressors and simple cabinets that cope with power cuts better than an electronic import. The range includes manual defrost double door fridge-freezers, single door fridges and chest freezers in several sizes, as well as the stoves the brand is also known for.",
      "The faults on a Capri are the standard mechanical ones: a thermostat that no longer calls for cooling, a relay or overload worn out by restarts, a gasket that has hardened, a blocked drain, and leaks at pipe joints or in an evaporator damaged during defrosting. Because the parts are generic, most Capri repairs are done in one visit from stock on the vehicle.",
      "Capri chest freezers are popular with tuck shops and small businesses, and we attend those as commercial emergencies when stock is at risk.",
    ],
    models: [
      "Manual defrost double door fridge-freezers",
      "Single door fridges with an internal freezer box",
      "Capri chest freezers in household and shop sizes",
      "Older Capri upright freezers",
    ],
    faults: [
      "Fridge running but not cold",
      "Thermostat not clicking the compressor on",
      "Compressor humming and clicking",
      "Freezer box iced solid, gasket not sealing",
      "Chest freezer soft at the bottom",
      "Water under the fridge from a blocked drain",
      "Fridge dead after a power surge",
      "Fridge never switching off",
    ],
    notes: [
      "Capri thermostats, relays, overloads, gaskets and compressors are standard parts that we carry, and Capri fridges use R134a that is charged by weight after a leak repair. A Capri repair is usually one of the quickest and most economical we do.",
      "Because Capri is local, cabinet parts such as shelves, drawers and lids are easier to find than for imported brands.",
    ],
    faqs: [
      {
        question: "Do you repair Capri chest freezers in tuck shops?",
        answer:
          "Yes, and we treat a shop freezer full of stock as a priority. Thermostats, relays, gaskets, compressors and regassing on Capri chest freezers are all done on site.",
      },
      {
        question: "Are Capri fridges easy to get parts for?",
        answer:
          "Yes. Capri uses standard refrigeration components and the brand is made in Harare, so parts are available quickly.",
      },
      {
        question: "My Capri fridge is not cooling. Does it need gas?",
        answer:
          "Only if there is a leak. A thermostat, a relay or a gasket is far more often the cause, and we test before recommending a regas.",
      },
    ],
    types: ["chest-freezer-repairs", "double-door-fridge-repairs", "single-door-fridge-repairs", "upright-freezer-repairs"],
  },

  {
    slug: "bosch-fridge-repairs",
    name: "Bosch",
    tier: "premium",
    origin: "Germany",
    cardText: "VitaFresh and NoFrost combis and side by sides with electronic controls.",
    title: "Bosch Fridge Repairs Harare | VitaFresh & NoFrost Specialists",
    description:
      "Bosch fridge repairs in Harare for combi, side by side, French door and built in Bosch fridges. VitaFresh, NoFrost, sensor, control board, fan and compressor faults repaired at home. Call 0782 886 252.",
    lead:
      "Bosch fridges are a premium choice in Harare homes, with VitaFresh drawers, NoFrost systems and quiet inverter compressors. They are built well and worth repairing properly when they fail. Harare Fridge Repairs repairs Bosch combi, side by side, French door and built in fridges at your home with the care they deserve.",
    intro: [
      "Bosch fridges are electronic from top to bottom: a main control module, temperature sensors in each zone, a variable speed compressor, NoFrost evaporators with fans and defrost heaters, and on many models VitaFresh compartments with their own temperature and humidity control. Built in models sit inside kitchen cabinetry with the condenser at the back or in the plinth, which makes airflow and access important.",
      "Bosch faults in Harare are mostly electronic or airflow related: a sensor that has drifted so one zone runs warm or too cold, a fan that has become noisy or stopped, a defrost heater or sensor that has failed and iced the evaporator, a control module damaged by a power surge, and condensers blocked because a built in fridge has no clearance. The compressors are reliable but are replaced when necessary with the matched unit.",
      "We diagnose Bosch fridges using the built in service mode where available, test sensors against the correct resistance values and show you the readings before any part is recommended.",
    ],
    models: [
      "Freestanding combi fridge-freezers with VitaFresh",
      "Built in and integrated fridges and fridge-freezers",
      "Side by side and French door fridges",
      "Under counter fridges and freezers",
      "Wine coolers",
    ],
    faults: [
      "Fridge section too warm or freezing food at the back",
      "Alarm sounding or temperature display flashing",
      "Fan noise from the freezer or fridge section",
      "Ice on the back wall of a NoFrost model",
      "VitaFresh drawer not holding temperature",
      "Fridge dead after a power surge",
      "Water in the bottom of the fridge",
      "Door not closing or gasket damaged on a built in model",
    ],
    notes: [
      "Bosch sensors, fans, defrost components, control modules and compressors are replaced on site, including on built in models that we remove from the cabinetry and refit. Regassing uses the exact R600a charge on the rating plate. Where a Bosch part needs to be ordered we tell you the lead time honestly.",
      "A surge protector is strongly recommended for a Bosch fridge in Harare, because the control module is the most expensive thing a surge can damage.",
    ],
    faqs: [
      {
        question: "Why is my Bosch fridge alarm going off?",
        answer:
          "The alarm means a zone has gone out of range. Causes range from a door left open to a failed sensor, fan or defrost system. We read the fault, test the components and repair the one at fault.",
      },
      {
        question: "Can you repair a built in Bosch fridge inside my kitchen units?",
        answer:
          "Yes. We remove the fridge from the housing where necessary, repair it and refit it, taking care of the door panels and hinges.",
      },
      {
        question: "Are Bosch parts available in Harare?",
        answer:
          "Common parts such as fans, sensors and gaskets are available. Control modules may need to be ordered, and we tell you the timeline before you commit.",
      },
    ],
    types: ["combi-fridge-repairs", "side-by-side-fridge-repairs", "french-door-fridge-repairs", "wine-cooler-repairs"],
  },

  {
    slug: "whirlpool-fridge-repairs",
    name: "Whirlpool",
    tier: "popular",
    origin: "United States",
    cardText: "6th Sense top freezer, bottom freezer and side by side fridges.",
    title: "Whirlpool Fridge Repairs Harare | 6th Sense & Side by Side",
    description:
      "Whirlpool fridge repairs in Harare for top freezer, bottom freezer and side by side models with 6th Sense controls. Not cooling, defrost, fan, board and ice maker faults repaired at your address. Call 0782 886 252.",
    lead:
      "Whirlpool fridges, from the top freezer models common in Harare kitchens to the large side by sides with ice and water, are reliable machines that occasionally need a knowledgeable technician. Harare Fridge Repairs repairs the Whirlpool range at your home, including the electronic 6th Sense models, 24 hours a day.",
    intro: [
      "Whirlpool fridges sold in Zimbabwe include manual defrost top freezer models, no frost top and bottom freezer models with 6th Sense electronic control, and side by side fridges with dispensers. The no frost models use a fan, a defrost heater and a thermostat or sensor, and the side by sides add ice makers, water valves and dual evaporator or damper systems.",
      "The Whirlpool faults we attend most in Harare are an iced evaporator from a failed defrost thermostat or heater, fan motors that have failed, a 6th Sense board damaged by a surge, ice makers that have stopped, and gaskets that have worn. The manual defrost models fail at the thermostat and relay like any mechanical fridge.",
      "We carry the common Whirlpool parts and diagnose electronic models using the control's test mode, so that boards are only replaced when they have really failed.",
    ],
    models: [
      "Manual defrost top freezer fridges",
      "No frost top freezer fridges with 6th Sense",
      "Bottom freezer combi fridges",
      "Side by side fridges with ice and water dispensers",
      "Chest freezers and upright freezers",
    ],
    faults: [
      "Fridge warm while the freezer is cold",
      "Ice sheet behind the freezer back panel",
      "Fan noisy or not running",
      "Display or 6th Sense controls not responding",
      "Ice maker not producing ice",
      "Water on the floor in front of the fridge",
      "Compressor clicking and not starting",
      "Door gasket torn",
    ],
    notes: [
      "Defrost thermostats, heaters, fans, boards, ice makers, valves, gaskets, relays and compressors on Whirlpool fridges are replaced on site. Regassing is done after a leak repair with R134a or R600a by weight, depending on the model.",
      "Whirlpool side by sides with dispensers benefit from a filter change and a condenser clean during the visit, and we do both if you ask.",
    ],
    faqs: [
      {
        question: "Why has my Whirlpool fridge section stopped cooling?",
        answer:
          "On a no frost model the evaporator has usually iced up after a defrost thermostat or heater failure, or the fan has stopped. We clear the ice, test and replace the failed part.",
      },
      {
        question: "Can you fix the 6th Sense controls?",
        answer:
          "Yes. We test the board, the sensors and the wiring, and replace the board only if it has actually failed.",
      },
      {
        question: "Do you repair Whirlpool ice makers?",
        answer:
          "Yes. Ice maker modules, water valves and fill tubes on Whirlpool side by sides are repaired on site.",
      },
    ],
    types: ["double-door-fridge-repairs", "side-by-side-fridge-repairs", "combi-fridge-repairs", "chest-freezer-repairs"],
  },

  {
    slug: "haier-fridge-repairs",
    name: "Haier",
    tier: "popular",
    origin: "China",
    cardText: "Affordable fridges and the chest freezers found in thousands of Harare homes and shops.",
    title: "Haier Fridge Repairs Harare | Haier Fridges & Chest Freezers",
    description:
      "Haier fridge repairs in Harare for Haier top freezer, bottom freezer, side by side fridges and chest freezers. Not cooling, defrost, compressor, thermostat and gasket faults repaired at your address. Call 0782 886 252.",
    lead:
      "Haier is one of the biggest appliance makers in the world and one of the most common brands in Harare, particularly for chest freezers and affordable double door fridges. Harare Fridge Repairs repairs Haier fridges and freezers at your home or shop, around the clock.",
    intro: [
      "Haier's range in Zimbabwe runs from simple manual defrost double door fridges and single door fridges to no frost combis, side by sides and a very popular line of chest freezers. The basic models are mechanical with a thermostat and a standard compressor; the no frost and inverter models are electronic and share the surge sensitivity of every electronic fridge in Harare.",
      "Common Haier faults are thermostats and relays on the mechanical models, defrost heaters, sensors and fans on the no frost models, control boards after a power surge, and gaskets that have worn or shrunk. Haier chest freezers fail at the thermostat, the relay and the lid gasket, and after many years at the compressor.",
      "Haier parts are widely available, which keeps repair costs down and allows most repairs to be completed in one visit.",
    ],
    models: [
      "Manual defrost double door fridge-freezers",
      "No frost top and bottom freezer fridges",
      "Side by side fridges",
      "Haier chest freezers in all sizes",
      "Single door fridges and bar fridges",
    ],
    faults: [
      "Fridge not cooling, thermostat not clicking",
      "No frost fridge section warm, freezer fine",
      "Fan noise behind the back panel",
      "Compressor humming and clicking",
      "Fridge dead after a power surge",
      "Chest freezer not freezing properly",
      "Lid or door gasket torn or hardened",
      "Water under the fridge",
    ],
    notes: [
      "Haier thermostats, relays, defrost parts, fans, boards, gaskets and compressors are replaced on site, and systems are regassed by weight after a leak repair with R134a or R600a as the plate specifies.",
      "Haier chest freezers in tuck shops and bottle stores are attended as commercial emergencies when stock is at risk.",
    ],
    faqs: [
      {
        question: "Do you repair Haier chest freezers?",
        answer:
          "Yes, very often. Thermostats, relays, lid gaskets, compressors and regassing on Haier chest freezers are standard work for us across Harare.",
      },
      {
        question: "My Haier fridge died after load shedding. Can it be fixed?",
        answer:
          "Usually yes. A surge has typically damaged the relay, a fuse or the control board, and all are replaceable at home.",
      },
      {
        question: "Are Haier fridges cheap to repair?",
        answer:
          "Yes. Parts are inexpensive and available, and most repairs are completed in a single visit.",
      },
    ],
    types: ["chest-freezer-repairs", "double-door-fridge-repairs", "combi-fridge-repairs", "side-by-side-fridge-repairs"],
  },

  {
    slug: "midea-fridge-repairs",
    name: "Midea",
    tier: "budget",
    origin: "China",
    cardText: "Budget fridges, chest freezers and bar fridges, often sold under other names too.",
    title: "Midea Fridge Repairs Harare | Midea Fridges & Freezers",
    description:
      "Midea fridge repairs in Harare for Midea double door, single door, combi fridges, chest freezers and bar fridges. Not cooling, thermostat, defrost, compressor and gasket faults repaired at home. Call 0782 886 252.",
    lead:
      "Midea makes a huge number of the affordable fridges, chest freezers and bar fridges sold in Zimbabwe, under its own name and as the manufacturer behind several other labels. Harare Fridge Repairs repairs Midea fridges and freezers at your address, and because the parts are standard, the repairs are quick and economical.",
    intro: [
      "Midea's fridges in Harare range from single door and bar fridges through manual defrost and no frost double doors to combis and a popular line of chest freezers. The mechanical models use a thermostat, relay and standard compressor; the no frost and inverter models are electronic.",
      "The faults we see on Midea fridges are thermostats and relays, gaskets that shrink on the cheaper cabinets so the freezer ices up, defrost and fan faults on no frost models, boards after surges, and small refrigerant leaks in evaporators. Midea chest freezers fail at the thermostat, relay and lid gasket, and later at the compressor.",
      "Because Midea components are generic, almost every Midea repair is finished in one visit from parts carried on the vehicle.",
    ],
    models: [
      "Single door fridges and bar fridges",
      "Manual defrost and no frost double door fridges",
      "Bottom freezer combi fridges",
      "Midea chest freezers",
      "Upright freezers",
    ],
    faults: [
      "Fridge not cooling and compressor not starting",
      "Freezer compartment iced solid",
      "Gasket not sealing and door sweating",
      "No frost fridge section warm",
      "Fridge dead after a power surge",
      "Chest freezer soft at the bottom",
      "Bar fridge freezing drinks",
      "Noisy compressor or fan",
    ],
    notes: [
      "Midea thermostats, relays, gaskets, defrost parts, fans, boards and compressors are standard and are replaced on site. Regassing uses R600a on most newer Midea fridges, charged by weight after a leak repair.",
      "If a Midea fridge has a leaking evaporator we weigh the repair cost against the fridge's value honestly before you spend anything.",
    ],
    faqs: [
      {
        question: "Is a Midea fridge worth repairing?",
        answer:
          "For thermostats, relays, gaskets, fans and defrost parts, yes, the repairs are cheap. For a leaking evaporator on a small, inexpensive model we will give you an honest view first.",
      },
      {
        question: "Why does my Midea freezer ice up so quickly?",
        answer:
          "The gasket is not sealing or the door is out of alignment, letting humid air in. A new gasket or a door adjustment usually solves it.",
      },
      {
        question: "Do you repair Midea chest freezers?",
        answer:
          "Yes. Thermostats, relays, lid gaskets, compressors and regassing on Midea chest freezers are done on site across Harare.",
      },
    ],
    types: ["chest-freezer-repairs", "single-door-fridge-repairs", "bar-fridge-repairs", "double-door-fridge-repairs"],
  },

  {
    slug: "smeg-fridge-repairs",
    name: "Smeg",
    tier: "premium",
    origin: "Italy",
    cardText: "FAB retro fridges and premium combis where the finish matters as much as the cooling.",
    title: "Smeg Fridge Repairs Harare | FAB Retro & Premium Fridges",
    description:
      "Smeg fridge repairs in Harare for FAB retro fridges, combi fridge-freezers and side by side models. Not cooling, thermostat, gasket, fan and compressor faults repaired carefully at home. Call 0782 886 252.",
    lead:
      "A Smeg is as much a piece of kitchen design as a fridge, and nobody wants it carried off to a workshop or scratched by a careless technician. Harare Fridge Repairs repairs Smeg FAB retro fridges, combis and side by sides in your home, carefully, with the right parts.",
    intro: [
      "Smeg fridges in Harare are mostly the FAB range of retro styled fridges and fridge-freezers, alongside premium combis and some side by side and French door models. The FAB fridges are relatively simple inside, with a static or fan assisted evaporator, a thermostat or electronic control and a standard compressor, but the cabinet, door and gasket are specific to Smeg and must be handled with care.",
      "The Smeg faults we see are thermostats and controls that have failed, gaskets that have shrunk or torn on the curved FAB doors, fans on the no frost models, drains that have blocked and left water in the cabinet, and the usual compressor relay failures. Smeg combis share the electronic faults of any modern fridge, including boards damaged by surges.",
      "We protect the cabinet and floor while we work, use the correct Smeg gaskets and parts where they are specific, and leave the fridge looking as it did when we arrived.",
    ],
    models: [
      "FAB28 and FAB32 retro fridges and fridge-freezers",
      "Smeg combi fridge-freezers",
      "Side by side and French door models",
      "Smeg under counter fridges and wine coolers",
    ],
    faults: [
      "FAB fridge not cooling or freezing the salad drawer",
      "Curved door gasket not sealing",
      "Water collecting in the bottom of the fridge",
      "Fan noise on a no frost model",
      "Thermostat or control not responding",
      "Compressor clicking and not starting",
      "Fridge dead after a power surge",
      "Interior light not working",
    ],
    notes: [
      "Smeg thermostats, controls, fans, relays, drains and compressors are repaired on site, and genuine Smeg gaskets are fitted where the door shape requires them. Regassing uses the R600a charge on the rating plate.",
      "Where a Smeg specific part needs to be ordered we tell you the lead time before you commit, and we can often keep the fridge running in the meantime.",
    ],
    faqs: [
      {
        question: "Can you get gaskets for a Smeg FAB fridge?",
        answer:
          "Yes. The curved FAB door needs a Smeg specific gasket and we source it for you. A generic gasket will not seal properly on these doors.",
      },
      {
        question: "Will you protect my kitchen floor and the fridge finish?",
        answer:
          "Yes. We cover the floor, lift rather than drag the fridge where it must be moved, and treat the cabinet with the care a Smeg deserves.",
      },
      {
        question: "Do you repair Smeg combi fridges as well as the retro ones?",
        answer:
          "Yes. Smeg combis, side by sides and wine coolers are all part of our work in Harare.",
      },
    ],
    types: ["combi-fridge-repairs", "single-door-fridge-repairs", "wine-cooler-repairs", "side-by-side-fridge-repairs"],
  },

  {
    slug: "electrolux-fridge-repairs",
    name: "Electrolux",
    tier: "premium",
    origin: "Sweden",
    cardText: "Premium combis and side by sides with TwinTech cooling and electronic controls.",
    title: "Electrolux Fridge Repairs Harare | Premium Fridge Technicians",
    description:
      "Electrolux fridge repairs in Harare for combi, side by side, French door and built in Electrolux fridges. TwinTech, sensor, fan, defrost, control board and compressor faults repaired at home. Call 0782 886 252.",
    lead:
      "Electrolux fridges are quiet, well insulated and full of electronics, from TwinTech dual cooling to touch controls and inverter compressors. When something goes wrong, a technician who understands electronic fridges is essential. Harare Fridge Repairs repairs Electrolux fridges at your home across Harare, day or night.",
    intro: [
      "Electrolux fridges sold in Zimbabwe include bottom freezer combis with TwinTech dual evaporators, side by side and French door models with dispensers, and built in fridges for fitted kitchens. They are controlled by an electronic module with several sensors and use variable speed compressors and no frost evaporators with fans.",
      "The Electrolux faults we attend most are a zone running warm because its sensor has drifted or its evaporator has iced up, fans that have become noisy, control modules damaged by surges, and dispensers and ice makers on the larger models. Compressors are reliable but are replaced with the matched unit when necessary.",
      "We diagnose Electrolux fridges using the control's diagnostic functions and sensor resistance tables, and we show you the readings before recommending a part.",
    ],
    models: [
      "Bottom freezer combi fridges with TwinTech",
      "Side by side fridges with water and ice",
      "French door fridges",
      "Built in and integrated fridges",
      "Chest freezers and upright freezers",
    ],
    faults: [
      "Fridge or freezer zone out of range, alarm sounding",
      "Ice on the evaporator and fan noise",
      "Control panel dead or unresponsive after a surge",
      "Food freezing at the back of the fridge",
      "Ice maker or dispenser not working",
      "Water in the bottom of the fridge",
      "Compressor running constantly",
      "Door gasket or hinge problems",
    ],
    notes: [
      "Sensors, fans, defrost parts, control modules, ice makers and compressors on Electrolux fridges are replaced on site, including on built in models. Regassing uses the exact R600a charge specified on the plate.",
      "A surge protector is recommended for any Electrolux in Harare, because the control module is the costliest part a surge can take out.",
    ],
    faqs: [
      {
        question: "Why is my Electrolux fridge alarm sounding?",
        answer:
          "A compartment has gone out of temperature range. The cause can be a door left open, a failed sensor, an iced evaporator or a fan. We read the fault and test the components to find which.",
      },
      {
        question: "Can you repair the control panel on my Electrolux?",
        answer:
          "Yes. We test the panel, the main module and the wiring between them, and replace the part that has failed.",
      },
      {
        question: "Do you repair built in Electrolux fridges?",
        answer:
          "Yes. We remove the fridge from the housing where necessary, repair it and refit the door panels correctly.",
      },
    ],
    types: ["combi-fridge-repairs", "side-by-side-fridge-repairs", "french-door-fridge-repairs", "upright-freezer-repairs"],
  },

  {
    slug: "aeg-fridge-repairs",
    name: "AEG",
    tier: "premium",
    origin: "Germany",
    cardText: "Premium German fridges with CustomFlex and TwinTech, often built in.",
    title: "AEG Fridge Repairs Harare | Built In & Freestanding AEG Fridges",
    description:
      "AEG fridge repairs in Harare for built in and freestanding AEG combi fridges, side by sides and freezers. Sensor, fan, defrost, control module and compressor faults repaired carefully at home. Call 0782 886 252.",
    lead:
      "AEG fridges are premium German appliances, often built into fitted kitchens in Harare's northern suburbs. They share their electronics with Electrolux and need the same careful diagnosis. Harare Fridge Repairs repairs AEG fridges and freezers at your home, including removing and refitting built in units.",
    intro: [
      "AEG fridges in Harare are typically bottom freezer combis with CustomFlex door storage and TwinTech dual cooling, built in fridges and freezers behind kitchen doors, and some side by side models. They are electronic throughout, with a control module, multiple sensors, no frost evaporators, fans and variable speed compressors.",
      "The AEG faults we see are the same as on any premium electronic fridge: sensors that have drifted so a zone runs warm or too cold, fans that have failed or become noisy, defrost faults that ice the evaporator, control modules damaged by surges, and condensers blocked because a built in fridge has no clearance. Door hinges and sliding door mechanisms on built in models also wear.",
      "We use the diagnostic functions and sensor tables for AEG models and show you the readings before any part is recommended.",
    ],
    models: [
      "Built in fridge-freezers behind kitchen doors",
      "Freestanding combi fridges with CustomFlex",
      "Side by side fridges",
      "Built in and freestanding freezers",
      "Under counter fridges",
    ],
    faults: [
      "Fridge zone warm or alarm sounding",
      "Ice on the back wall and fan noise",
      "Control panel not responding after a surge",
      "Food freezing in the fridge section",
      "Built in door not closing or hinge worn",
      "Water in the bottom of the fridge",
      "Compressor running non stop",
      "Freezer drawers icing up",
    ],
    notes: [
      "AEG sensors, fans, defrost components, control modules, hinges and compressors are replaced on site. Built in units are removed from the housing and refitted with the door panels aligned. Regassing uses the exact R600a charge on the plate.",
      "Where an AEG part needs to be ordered we tell you the lead time before you commit.",
    ],
    faqs: [
      {
        question: "Can you work on an AEG fridge built into my kitchen?",
        answer:
          "Yes. We remove the fridge from the housing, repair it and refit it, including the door panels and hinges.",
      },
      {
        question: "Why does my AEG fridge freeze food at the back?",
        answer:
          "A sensor has drifted, the damper has stuck open or the control is holding the compressor on too long. We test the sensors and the control and repair the cause.",
      },
      {
        question: "Are AEG fridges expensive to repair?",
        answer:
          "Mechanical parts are reasonable. Control modules cost more, which is why we test rather than guess, and a surge protector is a wise investment.",
      },
    ],
    types: ["combi-fridge-repairs", "side-by-side-fridge-repairs", "upright-freezer-repairs", "under-counter-fridge-repairs"],
  },

  {
    slug: "miele-fridge-repairs",
    name: "Miele",
    tier: "premium",
    origin: "Germany",
    cardText: "Long life premium fridges with PerfectFresh, mostly built in, worth repairing well.",
    title: "Miele Fridge Repairs Harare | Premium Built In Fridge Technicians",
    description:
      "Miele fridge repairs in Harare for built in and freestanding Miele fridges and freezers. PerfectFresh, sensor, fan, defrost, control and compressor faults repaired carefully at your home. Call 0782 886 252.",
    lead:
      "Miele fridges are built to last twenty years, and when one develops a fault it deserves a repair of the same quality. Harare Fridge Repairs repairs Miele built in and freestanding fridges and freezers at your home in Harare, with the care, cleanliness and diagnostic rigour a Miele owner expects.",
    intro: [
      "Miele fridges in Harare are mostly built in combis and fridges with PerfectFresh zones, alongside some freestanding models and freezers. They are controlled electronically with several sensors, use quiet variable speed compressors and no frost evaporators, and are fitted into kitchen cabinetry with specific hinge and door systems.",
      "Miele faults are rare but real: sensors that have drifted, fans that have failed, defrost systems that have iced the evaporator, control electronics damaged by Harare's power surges, and door hinges and seals on built in models. Compressors are extremely reliable and are replaced with the matched unit on the rare occasions they fail.",
      "We diagnose Miele fridges methodically, with reference temperatures and sensor tables, and we never fit a part on a guess.",
    ],
    models: [
      "Built in fridge-freezers with PerfectFresh",
      "Built in fridges and freezers",
      "Freestanding combi fridges",
      "Wine conditioning units",
    ],
    faults: [
      "Zone warm or temperature alarm showing",
      "Fan noise or ice on the evaporator",
      "Control display unresponsive after a surge",
      "PerfectFresh drawer not holding temperature",
      "Built in door not closing properly",
      "Water in the fridge or freezer",
      "Compressor running continuously",
      "Interior lighting faults",
    ],
    notes: [
      "Miele sensors, fans, defrost parts, control electronics, hinges, seals and compressors are replaced on site, with built in units removed and refitted correctly. Regassing uses the exact R600a charge on the plate.",
      "Miele parts may need to be ordered; we tell you the lead time honestly and keep the fridge running in the meantime where we can.",
    ],
    faqs: [
      {
        question: "Is it worth repairing a Miele fridge?",
        answer:
          "Almost always. Miele fridges are built for a very long life and a repair, even an electronic one, is far less than the cost of a replacement of the same quality.",
      },
      {
        question: "Can you repair a Miele fridge built into my kitchen?",
        answer:
          "Yes. We remove the fridge from the housing where necessary and refit it with the doors aligned.",
      },
      {
        question: "Do you repair Miele wine units?",
        answer:
          "Yes. Miele wine conditioning units are repaired on site like any other wine cooler, with attention to the precise temperature control they rely on.",
      },
    ],
    types: ["combi-fridge-repairs", "wine-cooler-repairs", "upright-freezer-repairs", "under-counter-fridge-repairs"],
  },

  {
    slug: "siemens-fridge-repairs",
    name: "Siemens",
    tier: "premium",
    origin: "Germany",
    cardText: "hyperFresh and noFrost fridges sharing their engineering with Bosch.",
    title: "Siemens Fridge Repairs Harare | hyperFresh & noFrost Models",
    description:
      "Siemens fridge repairs in Harare for combi, side by side and built in Siemens fridges. hyperFresh, noFrost, sensor, fan, control module and compressor faults repaired at your home. Call 0782 886 252.",
    lead:
      "Siemens fridges share their engineering with Bosch and sit in many of Harare's fitted kitchens as built in combis and side by sides. Harare Fridge Repairs repairs Siemens fridges at your home with the same diagnostic approach we use on Bosch, around the clock.",
    intro: [
      "Siemens fridges in Harare are typically bottom freezer combis with hyperFresh drawers, built in fridges and fridge-freezers, and side by side models. They use electronic control modules, multiple sensors, noFrost evaporators with fans and variable speed compressors, and their parts are largely shared with Bosch.",
      "The faults we attend on Siemens fridges are sensors that have drifted, fans that have failed, defrost faults that ice the evaporator, control modules damaged by surges, blocked condensers on built in units and worn hinges and seals. Compressors are replaced with the matched unit when they fail.",
      "We use the service mode and sensor tables for Siemens models, and show you the readings before recommending a part.",
    ],
    models: [
      "Bottom freezer combi fridges with hyperFresh",
      "Built in fridge-freezers and fridges",
      "Side by side fridges",
      "Under counter fridges and freezers",
    ],
    faults: [
      "Alarm sounding or a zone out of range",
      "Ice behind the back panel and fan noise",
      "Display dead after a power surge",
      "Food freezing at the back of the fridge",
      "Built in door not closing",
      "Water in the bottom of the fridge",
      "Compressor running continuously",
      "Freezer drawers icing",
    ],
    notes: [
      "Siemens sensors, fans, defrost parts, control modules, hinges and compressors are replaced on site, with built in units removed and refitted. Regassing uses the exact R600a charge on the plate.",
      "Siemens and Bosch parts are often interchangeable, which helps with availability in Harare.",
    ],
    faqs: [
      {
        question: "Why is my Siemens fridge alarm going off?",
        answer:
          "A zone has gone out of range because of an open door, a failed sensor, an iced evaporator or a fan fault. We read the fault and test the parts to find the cause.",
      },
      {
        question: "Do you repair built in Siemens fridges?",
        answer:
          "Yes. We remove, repair and refit built in Siemens fridges, including the door panels and hinges.",
      },
      {
        question: "Are Siemens parts the same as Bosch?",
        answer:
          "Many are, because both are made by the same group. That makes common parts easier to find in Harare.",
      },
    ],
    types: ["combi-fridge-repairs", "side-by-side-fridge-repairs", "under-counter-fridge-repairs", "upright-freezer-repairs"],
  },

  {
    slug: "beko-fridge-repairs",
    name: "Beko",
    tier: "popular",
    origin: "Turkey",
    cardText: "NeoFrost combis and top freezer fridges from the group that also owns Defy.",
    title: "Beko Fridge Repairs Harare | NeoFrost & Top Freezer Fridges",
    description:
      "Beko fridge repairs in Harare for combi, top freezer and side by side Beko fridges and freezers. NeoFrost, defrost, fan, sensor, board and compressor faults repaired at your address. Call 0782 886 252.",
    lead:
      "Beko fridges are good value, widely sold in Zimbabwe, and built by the same group that owns Defy, so the two share a lot of parts and faults. Harare Fridge Repairs repairs Beko combis, top freezer fridges, side by sides and freezers at your home, at any hour.",
    intro: [
      "Beko's range in Harare includes bottom freezer combis with NeoFrost dual cooling, no frost and manual defrost top freezer fridges, side by side models and chest and upright freezers. The no frost models use fans, defrost heaters and electronic controls; the manual models are mechanical with a thermostat and a standard compressor.",
      "The Beko faults we see most are defrost heaters and sensors on the no frost models, fans that have failed or become noisy, control boards after surges, gaskets that have worn, and thermostats and relays on the mechanical range. Beko freezers fail like any other at the thermostat, relay, gasket and compressor.",
      "Beko parts are available and shared with Defy, which keeps repairs quick and affordable.",
    ],
    models: [
      "Bottom freezer combi fridges with NeoFrost",
      "No frost and manual defrost top freezer fridges",
      "Side by side fridges",
      "Chest freezers and upright freezers",
      "Single door fridges",
    ],
    faults: [
      "Fridge section warm, freezer cold",
      "Ice behind the back panel and fan noise",
      "Fridge dead or flashing after load shedding",
      "Thermostat not switching on a manual model",
      "Door gasket worn and door sweating",
      "Water under the crisper drawers",
      "Compressor clicking and not starting",
      "Freezer drawers icing up",
    ],
    notes: [
      "Beko defrost parts, fans, sensors, boards, thermostats, relays, gaskets and compressors are replaced on site. Regassing uses R600a by weight after a leak repair.",
      "Beko and Defy share many components, which helps with parts availability in Harare.",
    ],
    faqs: [
      {
        question: "Why is my Beko fridge warm while the freezer works?",
        answer:
          "The evaporator has iced up after a defrost heater or sensor failure, or the fan feeding the fridge has stopped. We clear the ice, replace the failed part and check the drain.",
      },
      {
        question: "Is Beko the same as Defy?",
        answer:
          "They are separate brands owned by the same group and share many parts, so a technician who knows one knows the other.",
      },
      {
        question: "Do you repair Beko freezers?",
        answer:
          "Yes. Beko chest and upright freezers are repaired on site across Harare.",
      },
    ],
    types: ["combi-fridge-repairs", "double-door-fridge-repairs", "chest-freezer-repairs", "upright-freezer-repairs"],
  },

  {
    slug: "fresh-fridge-repairs",
    name: "FRESH",
    tier: "budget",
    origin: "Egypt",
    cardText: "Egyptian made fridges and chest freezers sold widely in Zimbabwe.",
    title: "FRESH Fridge Repairs Harare | FRESH Fridges & Chest Freezers",
    description:
      "FRESH fridge repairs in Harare for FRESH double door fridges, no frost fridges and chest freezers. Not cooling, defrost, thermostat, compressor and gasket faults repaired at your home or shop. Call 0782 886 252.",
    lead:
      "FRESH fridges and chest freezers from Egypt have become common in Harare homes and shops because they are affordable and roomy. Harare Fridge Repairs repairs the FRESH range on site, from a manual defrost double door to a shop chest freezer, 24 hours a day.",
    intro: [
      "FRESH makes manual defrost and no frost double door fridges, single door fridges and chest freezers that are sold across Zimbabwe. The manual defrost models are mechanical with a thermostat and a standard compressor; the no frost models add a fan, a defrost heater and an electronic or timer based control.",
      "The faults we see on FRESH fridges are thermostats and relays on the manual models, defrost heaters, timers and fans on the no frost models, gaskets that shrink, drains that block and leave water in the cabinet, and compressors that fail after years of restarts. FRESH chest freezers fail at the thermostat, relay and lid gasket.",
      "Because the parts are standard, FRESH repairs are quick and affordable, and most are done in one visit.",
    ],
    models: [
      "Manual defrost double door fridge-freezers",
      "No frost double door fridges",
      "Single door fridges",
      "FRESH chest freezers",
    ],
    faults: [
      "Fridge not cooling, thermostat silent",
      "No frost model iced up at the back",
      "Compressor humming and clicking",
      "Door gasket shrunk and freezer frosting",
      "Water collecting in the bottom of the fridge",
      "Chest freezer not freezing at the bottom",
      "Fridge dead after a power surge",
      "Fan noisy or stopped",
    ],
    notes: [
      "FRESH thermostats, relays, defrost parts, fans, gaskets and compressors are standard components replaced on site, and systems are regassed by weight after a leak repair.",
      "Shop chest freezers from FRESH are attended as priority jobs when stock is at risk.",
    ],
    faqs: [
      {
        question: "Are parts available for FRESH fridges in Harare?",
        answer:
          "Yes. FRESH uses standard refrigeration components, so thermostats, relays, gaskets, fans and compressors are readily available.",
      },
      {
        question: "Why is my FRESH no frost fridge icing up?",
        answer:
          "The defrost heater, timer or sensor has failed. We replace the failed part and clear the ice properly.",
      },
      {
        question: "Do you repair FRESH chest freezers?",
        answer:
          "Yes, in homes and shops across Harare, including thermostats, relays, lid gaskets, compressors and regassing.",
      },
    ],
    types: ["double-door-fridge-repairs", "chest-freezer-repairs", "single-door-fridge-repairs", "upright-freezer-repairs"],
  },

  {
    slug: "alaska-fridge-repairs",
    name: "Alaska",
    tier: "budget",
    origin: "Imported budget brand",
    cardText: "Budget chest freezers and fridges found in many Harare homes and tuck shops.",
    title: "Alaska Fridge Repairs Harare | Alaska Chest Freezers & Fridges",
    description:
      "Alaska fridge and chest freezer repairs in Harare. Not freezing, thermostat, relay, compressor, lid gasket and regassing faults repaired at your home or shop, 24 hours a day. Call 0782 886 252.",
    lead:
      "Alaska chest freezers and fridges are a budget favourite in Harare homes and tuck shops. They are simple machines built from standard parts, and when they fail they are quick and cheap to repair. Harare Fridge Repairs repairs Alaska freezers and fridges on site, day or night.",
    intro: [
      "Alaska units in Harare are mostly chest freezers in household and shop sizes, with some double door and single door fridges. They are mechanical, with a capillary thermostat, a standard compressor with a relay and overload, and a static evaporator, and they use R134a or R600a depending on the age.",
      "The faults are the standard mechanical ones: a thermostat that has lost its charge, a relay or overload that has failed, a lid or door gasket that has hardened, and leaks at pipe joints or in the wall evaporator. After many years of load shedding restarts the compressor eventually fails and is replaced.",
      "Because every part is generic, Alaska repairs are almost always done in one visit from parts on the vehicle.",
    ],
    models: [
      "Alaska chest freezers in household sizes",
      "Large Alaska chest freezers for shops",
      "Double door fridge-freezers",
      "Single door fridges",
    ],
    faults: [
      "Chest freezer running but food soft",
      "Freezer frosting only at the top of the walls",
      "Compressor humming and clicking",
      "Lid gasket hardened and not sealing",
      "Freezer dead after a power surge",
      "Thick ice that returns quickly after defrosting",
      "Fridge not cooling, thermostat silent",
      "Water leaking from under the unit",
    ],
    notes: [
      "Alaska thermostats, relays, overloads, gaskets and compressors are standard parts replaced on site, and regassing follows a leak repair with the correct gas by weight.",
      "A leak in the wall evaporator of an old budget chest freezer is the one fault that may not be worth repairing, and we tell you so before you spend money.",
    ],
    faqs: [
      {
        question: "Is an Alaska chest freezer worth repairing?",
        answer:
          "For a thermostat, relay, gasket or compressor, yes, the repair is far cheaper than a new freezer. For a wall evaporator leak we give you an honest view first.",
      },
      {
        question: "Why is my Alaska freezer only cold at the top?",
        answer:
          "That frost pattern means a low gas charge from a leak. We find the leak, repair it and recharge the freezer.",
      },
      {
        question: "Can you come to a tuck shop in a high density suburb?",
        answer:
          "Yes. We work across all of Harare, including Kuwadzana, Glen View, Mabvuku, Budiriro, Dzivarasekwa and Chitungwiza, at any hour.",
      },
    ],
    types: ["chest-freezer-repairs", "double-door-fridge-repairs", "single-door-fridge-repairs", "display-freezer-repairs"],
  },

  {
    slug: "tornado-fridge-repairs",
    name: "Tornado",
    tier: "budget",
    origin: "Egypt",
    cardText: "Egyptian fridges and freezers from the Elaraby group, sold across Zimbabwe.",
    title: "Tornado Fridge Repairs Harare | Tornado Fridges & Freezers",
    description:
      "Tornado fridge repairs in Harare for Tornado double door fridges, no frost fridges and chest freezers. Not cooling, defrost, thermostat, compressor and gasket faults repaired at home. Call 0782 886 252.",
    lead:
      "Tornado fridges and freezers, made in Egypt by the Elaraby group, are a growing presence in Harare homes. Harare Fridge Repairs repairs Tornado manual defrost and no frost fridges and chest freezers on site across Harare, 24 hours a day.",
    intro: [
      "Tornado's range in Zimbabwe includes manual defrost and no frost double door fridges, single door fridges and chest freezers. The manual models are mechanical; the no frost models use a fan, a defrost heater and an electronic or timer control, and newer units run on R600a.",
      "The faults we see on Tornado fridges are thermostats and relays, defrost heaters and timers on the no frost models, fans that have become noisy, gaskets that have shrunk, blocked drains, and boards after power surges. Tornado chest freezers fail at the thermostat, relay and lid gasket.",
      "Tornado uses standard components, so parts are available and repairs are quick.",
    ],
    models: [
      "Manual defrost double door fridge-freezers",
      "No frost double door fridges",
      "Single door fridges",
      "Tornado chest freezers",
    ],
    faults: [
      "Fridge not cold and thermostat not clicking",
      "No frost fridge iced up behind the back panel",
      "Fan noise or fan stopped",
      "Compressor humming and clicking",
      "Door gasket not sealing",
      "Water in the bottom of the fridge",
      "Fridge dead after load shedding",
      "Chest freezer soft at the bottom",
    ],
    notes: [
      "Tornado thermostats, relays, defrost parts, fans, gaskets, boards and compressors are replaced on site, and systems are regassed by weight after a leak repair.",
      "A surge protector is recommended for the electronic no frost Tornado models.",
    ],
    faqs: [
      {
        question: "Are Tornado fridge parts available in Harare?",
        answer:
          "Yes. Tornado uses standard refrigeration components, so the common parts are available and most repairs are done in one visit.",
      },
      {
        question: "Why does my Tornado no frost fridge get warm at the top?",
        answer:
          "The evaporator has iced over after a defrost failure or the fan has stopped, so cold air no longer circulates. Both are repaired on site.",
      },
      {
        question: "Do you repair Tornado chest freezers?",
        answer:
          "Yes, including thermostats, relays, lid gaskets, compressors and regassing.",
      },
    ],
    types: ["double-door-fridge-repairs", "chest-freezer-repairs", "single-door-fridge-repairs", "combi-fridge-repairs"],
  },

  {
    slug: "white-whale-fridge-repairs",
    name: "White Whale",
    tier: "budget",
    origin: "Egypt",
    cardText: "Budget Egyptian fridges and freezers that are simple to repair.",
    title: "White Whale Fridge Repairs Harare | White Whale Fridges & Freezers",
    description:
      "White Whale fridge repairs in Harare for White Whale double door fridges, single door fridges and chest freezers. Thermostat, relay, defrost, compressor and gasket faults repaired at your address. Call 0782 886 252.",
    lead:
      "White Whale fridges and freezers from Egypt are sold as budget appliances across Zimbabwe, and there are plenty of them in Harare homes. They are simple and inexpensive to repair. Harare Fridge Repairs repairs White Whale fridges and chest freezers on site, around the clock.",
    intro: [
      "White Whale's range includes manual defrost and no frost double door fridges, single door fridges and chest freezers. The manual models have a thermostat, a standard compressor and a static evaporator; the no frost models add a fan, a defrost heater and a control.",
      "The faults are the familiar ones: thermostats and relays, defrost parts and fans on no frost models, gaskets that have shrunk, blocked drains, and compressors that fail after years of restarts. White Whale chest freezers fail at the thermostat, relay and lid gasket.",
      "Standard parts mean quick, affordable repairs, usually in one visit.",
    ],
    models: [
      "Manual defrost double door fridges",
      "No frost double door fridges",
      "Single door fridges",
      "White Whale chest freezers",
    ],
    faults: [
      "Fridge running but not cooling",
      "Freezer iced solid, fridge section warm",
      "Compressor humming and clicking",
      "Gasket not sealing, door sweating",
      "Water under the fridge",
      "Fridge dead after a surge",
      "Fan noisy on a no frost model",
      "Chest freezer not freezing properly",
    ],
    notes: [
      "White Whale thermostats, relays, defrost parts, fans, gaskets and compressors are replaced on site, and regassing is done by weight after a leak repair.",
      "A leaking evaporator on a small budget cabinet may not be worth repairing, and we say so before any money is spent.",
    ],
    faqs: [
      {
        question: "Is a White Whale fridge worth repairing?",
        answer:
          "For the common faults, yes, because the parts are cheap. For a leaking evaporator we give you an honest view first.",
      },
      {
        question: "Why does my White Whale freezer ice up?",
        answer:
          "The gasket is not sealing or, on a no frost model, the defrost system has failed. A new gasket or defrost part solves it.",
      },
      {
        question: "Do you repair White Whale fridges in flats and cottages?",
        answer:
          "Yes, across Harare. Tell us the address, the floor and who will open the door.",
      },
    ],
    types: ["double-door-fridge-repairs", "single-door-fridge-repairs", "chest-freezer-repairs", "bar-fridge-repairs"],
  },

  {
    slug: "tcl-fridge-repairs",
    name: "TCL",
    tier: "budget",
    origin: "China",
    cardText: "Budget fridges from the electronics maker, including no frost and inverter models.",
    title: "TCL Fridge Repairs Harare | TCL Fridges & Freezers",
    description:
      "TCL fridge repairs in Harare for TCL double door, combi and single door fridges and chest freezers. Not cooling, defrost, board, compressor and gasket faults repaired at your address. Call 0782 886 252.",
    lead:
      "TCL, better known for televisions, sells a range of affordable fridges in Zimbabwe, including no frost and inverter models. Harare Fridge Repairs repairs TCL fridges and freezers at your home across Harare, at any hour.",
    intro: [
      "TCL fridges in Harare include manual defrost double door fridges, no frost top and bottom freezer models with electronic controls and inverter compressors, single door fridges and chest freezers. The electronic models share the surge sensitivity of every electronic fridge in Harare.",
      "Faults we see on TCL fridges are thermostats and relays on the manual models, defrost heaters, sensors and fans on the no frost models, control boards after power surges, gaskets that have shrunk and blocked drains. TCL chest freezers fail at the thermostat, relay and lid gasket.",
      "TCL uses standard components, so parts are available and repairs are affordable.",
    ],
    models: [
      "Manual defrost double door fridges",
      "No frost top freezer and combi fridges with inverter compressors",
      "Single door fridges",
      "TCL chest freezers",
    ],
    faults: [
      "Fridge not cooling, compressor not starting",
      "No frost fridge section warm",
      "Display flashing or dead after a power cut",
      "Fan noise behind the back panel",
      "Gasket not sealing",
      "Water in the bottom of the fridge",
      "Compressor humming and clicking",
      "Chest freezer soft at the bottom",
    ],
    notes: [
      "TCL thermostats, relays, defrost parts, fans, boards, gaskets and compressors are replaced on site, and regassing uses the R600a or R134a charge on the plate by weight after a leak repair.",
      "A surge protector is recommended for electronic TCL models in Harare.",
    ],
    faqs: [
      {
        question: "My TCL fridge display is flashing. What does it mean?",
        answer:
          "A sensor, fan or defrost fault, or board damage after a surge. Send us the model and the code and we will tell you what it points to, then confirm it on site.",
      },
      {
        question: "Are TCL fridges worth repairing?",
        answer:
          "Yes. Parts are inexpensive and available, and a repair is far cheaper than replacement.",
      },
      {
        question: "Do you repair TCL chest freezers?",
        answer:
          "Yes, including thermostats, relays, lid gaskets, compressors and regassing, across Harare.",
      },
    ],
    types: ["double-door-fridge-repairs", "combi-fridge-repairs", "single-door-fridge-repairs", "chest-freezer-repairs"],
  },

  {
    slug: "spj-fridge-repairs",
    name: "SPJ",
    tier: "budget",
    origin: "Sold widely in Zimbabwe",
    cardText: "Budget fridges and chest freezers sold through electronics stores across Zimbabwe.",
    title: "SPJ Fridge Repairs Harare | SPJ Fridges & Chest Freezers",
    description:
      "SPJ fridge repairs in Harare for SPJ double door fridges, single door fridges, bar fridges and chest freezers. Not cooling, thermostat, relay, compressor and gasket faults repaired at your address. Call 0782 886 252.",
    lead:
      "SPJ fridges and chest freezers are sold through electronics stores across Zimbabwe and have found their way into many Harare homes and small shops. They are simple, budget appliances built from standard parts. Harare Fridge Repairs repairs SPJ fridges and freezers on site, 24 hours a day.",
    intro: [
      "SPJ's range includes manual defrost double door fridges, single door fridges, bar fridges and chest freezers in household and shop sizes. They are mechanical, with a thermostat, a standard compressor with a relay and overload and a static evaporator, and they run on R134a or R600a depending on the model.",
      "Faults on SPJ fridges are the standard mechanical ones: thermostats that have failed, relays and overloads worn out by restarts, gaskets that have shrunk and let the freezer ice up, blocked drains, and leaks at joints or in evaporators damaged during defrosting. SPJ chest freezers fail at the thermostat, relay and lid gasket.",
      "Because the parts are generic, SPJ repairs are quick and affordable and usually completed in one visit.",
    ],
    models: [
      "Manual defrost double door fridge-freezers",
      "Single door fridges",
      "Bar fridges",
      "SPJ chest freezers",
    ],
    faults: [
      "Fridge not cooling and thermostat not clicking",
      "Freezer box iced solid",
      "Compressor humming and clicking",
      "Gasket shrunk and door not sealing",
      "Water under the fridge",
      "Bar fridge freezing drinks",
      "Fridge dead after a power surge",
      "Chest freezer not freezing at the bottom",
    ],
    notes: [
      "SPJ thermostats, relays, overloads, gaskets and compressors are standard parts replaced on site, and regassing follows a leak repair with the correct gas by weight.",
      "A leaking evaporator on a small budget fridge may not be worth repairing, and we tell you before you spend anything.",
    ],
    faqs: [
      {
        question: "Can you get parts for an SPJ fridge?",
        answer:
          "Yes. SPJ fridges use standard refrigeration components that are readily available in Harare.",
      },
      {
        question: "Why does my SPJ fridge freezer box ice up?",
        answer:
          "The gasket is not sealing or the door is misaligned, letting humid air in. A new gasket or an adjustment solves it.",
      },
      {
        question: "Do you repair SPJ chest freezers in shops?",
        answer:
          "Yes, and a shop freezer full of stock is treated as a priority callout.",
      },
    ],
    types: ["chest-freezer-repairs", "double-door-fridge-repairs", "single-door-fridge-repairs", "bar-fridge-repairs"],
  },

  {
    slug: "hybrid-fridge-repairs",
    name: "Hybrid",
    tier: "budget",
    origin: "Sold widely in Zimbabwe",
    cardText: "Budget fridges and freezers sold in Zimbabwe, repaired with standard parts.",
    title: "Hybrid Fridge Repairs Harare | Hybrid Fridges & Freezers",
    description:
      "Hybrid fridge repairs in Harare for Hybrid double door fridges, single door fridges and chest freezers. Not cooling, thermostat, relay, compressor and gasket faults repaired at your home or shop. Call 0782 886 252.",
    lead:
      "Hybrid fridges and freezers are budget appliances sold across Zimbabwe, and Harare has plenty of them in homes, rented rooms and tuck shops. They are built from standard parts and are quick to repair. Harare Fridge Repairs repairs Hybrid fridges and freezers on site, day or night.",
    intro: [
      "Hybrid's range includes manual defrost double door fridges, single door fridges and chest freezers, with some no frost models. The manual models are mechanical with a thermostat, a standard compressor and a static evaporator; the no frost models add a fan and a defrost system.",
      "The faults are the familiar budget fridge ones: thermostats and relays, gaskets that shrink so the freezer ices up, blocked drains, defrost and fan faults on no frost models, and leaks in evaporators damaged during defrosting. Hybrid chest freezers fail at the thermostat, relay and lid gasket.",
      "Standard parts mean most Hybrid repairs are finished in one visit at a modest cost.",
    ],
    models: [
      "Manual defrost double door fridges",
      "Single door fridges",
      "No frost double door models",
      "Hybrid chest freezers",
    ],
    faults: [
      "Fridge not cooling, thermostat silent",
      "Freezer iced solid and fridge warm",
      "Compressor humming and clicking",
      "Gasket not sealing",
      "Water in the bottom of the fridge",
      "Fridge dead after a surge",
      "Fan noisy on a no frost model",
      "Chest freezer soft at the bottom",
    ],
    notes: [
      "Hybrid thermostats, relays, gaskets, defrost parts, fans and compressors are replaced on site, and regassing is done by weight after a leak repair.",
      "For a leaking evaporator on a small budget cabinet we give you an honest view before you spend anything.",
    ],
    faqs: [
      {
        question: "Is a Hybrid fridge worth repairing?",
        answer:
          "For thermostats, relays, gaskets and fans, yes. For a leaking evaporator on a small cabinet we will tell you honestly whether it makes sense.",
      },
      {
        question: "Why does my Hybrid fridge not cool but the light works?",
        answer:
          "The thermostat is not calling for cooling or the compressor relay has failed. Both are quick, inexpensive repairs.",
      },
      {
        question: "Do you repair Hybrid fridges in rented rooms?",
        answer:
          "Yes, across Harare. Tell us the address and who will be there to let the technician in.",
      },
    ],
    types: ["double-door-fridge-repairs", "single-door-fridge-repairs", "chest-freezer-repairs", "bar-fridge-repairs"],
  },
]

export function getBrand(slug: string) {
  return brands.find((brand) => brand.slug === slug)
}

export function brandLink(brand: BrandRecord): LinkItem {
  return { href: `/${brand.slug}`, label: `${brand.name} fridge repairs`, text: brand.cardText }
}

export const brandNames = brands.map((brand) => brand.name)

const typeLabels: Record<string, string> = {
  "single-door-fridge-repairs": "Single door fridges",
  "double-door-fridge-repairs": "Double door fridges",
  "combi-fridge-repairs": "Combi fridges",
  "side-by-side-fridge-repairs": "Side by side fridges",
  "french-door-fridge-repairs": "French door fridges",
  "bar-fridge-repairs": "Bar fridges",
  "wine-cooler-repairs": "Wine coolers",
  "chest-freezer-repairs": "Chest freezers",
  "upright-freezer-repairs": "Upright freezers",
  "under-counter-fridge-repairs": "Under counter fridges",
  "display-freezer-repairs": "Display freezers",
}

const processVariants = [
  [
    { title: "Send the details", text: "Call or WhatsApp with your suburb, the model number from the sticker inside the door and what the fridge is doing." },
    { title: "Technician at your door", text: "We come to your address anywhere in Harare, including evenings, weekends and public holidays." },
    { title: "Tested, then quoted", text: "The fault is confirmed with a meter, gauges and a thermometer, and you get a price before anything is replaced." },
    { title: "Repaired on site", text: "Parts are fitted, the fridge is run to temperature and you get a clear explanation of what was done." },
  ],
  [
    { title: "Book a visit", text: "Tell us your suburb, the model and the symptom. A photo of the rating plate helps us bring the right parts." },
    { title: "We travel to you", text: "No transport and no workshop. The technician arrives with test equipment and common parts on the vehicle." },
    { title: "Diagnosis you can see", text: "We show you the readings and explain the fault, then agree the price with you." },
    { title: "Fixed and checked", text: "The repair is completed where parts allow and the fridge is tested before we leave." },
  ],
]

export function buildBrandPage(brand: BrandRecord): ContentPage {
  const typeLinks: LinkItem[] = brand.types.map((slug) => ({ href: `/${slug}`, label: typeLabels[slug] ?? slug }))
  const otherBrands = rotate(
    brands.filter((item) => item.slug !== brand.slug).map((item) => ({ href: `/${item.slug}`, label: item.name })),
    brand.slug,
  ).slice(0, 10)

  const sections: ContentSection[] = [
    { kind: "text", heading: `About ${brand.name} fridges in Harare`, paragraphs: brand.intro },
    {
      kind: "list",
      heading: `${brand.name} models we repair`,
      intro: `These are the ${brand.name} fridges and freezers we attend most often across Harare.`,
      items: brand.models,
      columns: 1,
    },
    {
      kind: "list",
      heading: `Common ${brand.name} fridge problems`,
      intro: "If your fridge is doing any of these, it is a fault we have repaired many times before.",
      items: brand.faults,
    },
    {
      kind: "feature",
      eyebrow: "Independent specialists",
      heading: `How we repair ${brand.name} fridges`,
      paragraphs: [
        ...brand.notes,
        `Harare Fridge Repairs is an independent refrigeration service and is not an authorised ${brand.name} agent. We repair ${brand.name} fridges and freezers across Harare using correct parts and procedures, and we tell you if a fault should go through a manufacturer warranty instead.`,
      ],
      picture: brand.tier === "premium" ? "diagnostics" : "regassing",
      pictureAlt: `Technician repairing a ${brand.name} fridge in Harare`,
      reverse: true,
    },
    { kind: "steps", heading: `Booking a ${brand.name} fridge repair`, items: pick(processVariants, brand.slug) },
    {
      kind: "chips",
      heading: `${brand.name} repairs by fridge type`,
      intro: "Each type of fridge has its own page explaining the faults specific to that design.",
      items: [
        ...typeLinks,
        { href: "/fridge-regassing", label: `${brand.name} fridge regassing` },
        { href: "/problems/fridge-not-cooling", label: `${brand.name} fridge not cooling` },
      ],
    },
    {
      kind: "chips",
      heading: "Other brands we repair in Harare",
      items: [...otherBrands, { href: "/brands", label: "All 24 brands" }],
    },
  ]

  return {
    path: `/${brand.slug}`,
    title: brand.title,
    description: brand.description,
    eyebrow: `${brand.name} fridge repairs in Harare`,
    h1: `${brand.name} Fridge Repairs in Harare`,
    lead: brand.lead,
    points: [
      `All ${brand.name} fridge and freezer models`,
      "Repaired at your home or business, anywhere in Harare",
      "Fault tested and price agreed before work starts",
      "Open 24 hours, 7 days a week",
    ],
    picture: brand.tier === "premium" ? "regassing" : "diagnostics",
    pictureAlt: `Fridge technician working on a ${brand.name} fridge in a Harare kitchen`,
    crumbs: [
      { name: "Brands", path: "/brands" },
      { name: `${brand.name} fridge repairs`, path: `/${brand.slug}` },
    ],
    sections,
    faqs: brand.faqs,
    faqHeading: `${brand.name} fridge repair questions`,
    cta: {
      title: `${brand.name} fridge playing up? Call us now.`,
      text: `Call 0782 886 252 or WhatsApp your suburb, the model and the fault. We repair ${brand.name} fridges across Harare, 24 hours a day.`,
    },
    whatsappMessage: `Hi Harare Fridge Repairs, I have a ${brand.name} fridge that needs repair. My suburb is: ___ and the problem is: ___`,
    schema: {
      serviceName: `${brand.name} fridge repairs in Harare`,
      serviceDescription: `Independent on site repair of ${brand.name} fridges and freezers across Harare, Zimbabwe.`,
      serviceType: `${brand.name} refrigerator repair`,
    },
  }
}
