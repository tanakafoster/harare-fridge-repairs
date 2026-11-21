import type { FridgeTypeRecord } from "./types"

/**
 * Three more household fridge designs: fridges with an ice and water
 * system, manual defrost (static) fridges and four door cross-door
 * fridges. Each one fails in its own way, so each answers its own search
 * and links back to the problem guides and the closer type pages instead
 * of repeating them.
 */
export const extraFridgeTypes: FridgeTypeRecord[] = [
  {
    slug: "water-dispenser-fridge-repairs",
    name: "Water dispenser fridge",
    plural: "fridges with water dispensers and ice makers",
    group: "home",
    usedIn: "Family kitchens in Borrowdale, Mount Pleasant, Greendale and the newer estates",
    cardText: "Fridges with a water dispenser, ice maker or crushed ice chute, plumbed in or tank fed.",
    title: "Fridge Water Dispenser & Ice Maker Repairs Harare | On Site",
    description:
      "Water dispenser and ice maker fridge repairs in Harare: leaks, drips, inlet valves, filters, auger motors and frozen lines fixed at your home, 24/7. Call 0782 886 252.",
    h1: "Fridge Water Dispenser and Ice Maker Repairs in Harare",
    lead:
      "A fridge with a water dispenser or ice maker has a second, smaller system hidden inside it: a water supply, a valve, a filter, tubes through the door and a set of motors that make and push out the ice. It is usually that system, not the cooling, that fails. Harare Fridge Repairs repairs dispenser fridges at your home, and stops leaks before they reach your floors and cupboards.",
    points: [
      "Plumbed-in and hand-filled tank models",
      "Inlet valves, filter heads, tubes and push-fit joints",
      "Ice makers, auger motors, crushers and chute flaps",
      "Leaks traced before they damage floors and cabinets",
    ],
    intro: [
      "There are two kinds of dispenser fridge in Harare kitchens. A plumbed-in model is joined to the house water supply by a thin tube, and an electric inlet valve at the back lets water through to a filter, the ice maker and the dispenser in the door. A tank model has no plumbing at all: you fill a small reservoir inside the fridge and a pump or gravity feeds the dispenser. The tank models were made for homes where running water cannot be relied on, and many Harare households now prefer them.",
      "Water supply decides how a plumbed-in fridge behaves. Homes on municipal water see the pressure drop and return when supply is interrupted, homes on a borehole get iron and sediment in the line, and homes on a tank and booster pump see pressure swing every time the pump cuts in. Sediment wears valve screens and filters faster than the manual expects, and a pressure surge when supply returns is a common cause of a split tube or a weeping joint behind the fridge.",
      "Ice adds its own parts. A small heater frees each tray of cubes, an arm or a twisting tray drops them into a bucket, and on dispensing models an auger motor turns a screw to push the ice to the chute, with a blade to crush it if you ask for crushed ice. A flap at the top of the chute is held shut by a small motor or solenoid, often with a heater to stop it freezing. Any one of these can stop while the fridge itself keeps cooling perfectly.",
    ],
    faults: [
      "Water dripping from the dispenser after you let go of the paddle",
      "Puddle behind or under the fridge, or a swollen kitchen floor or cabinet base",
      "Water tastes or smells bad, or comes out cloudy",
      "Dispenser buzzes but no water comes out",
      "Ice maker full of water but no cubes, or one solid block in the bucket",
      "Auger motor grinding, or ice stuck in the chute",
      "Crushed ice setting not working, cubes only",
      "Chute flap not closing, with frost around the dispenser",
      "Cracked water tank or filter housing on hand-filled models",
    ],
    repairNotes: [
      "A leak is always the first job, because water under a fridge can lift laminate floors and rot cabinet bases before anyone notices. We pull the fridge out, run the system and trace the water to its source: the supply tube, a push-fit joint, the inlet valve, the filter head or the tube through the door hinge. Damaged tubes and joints are replaced, the inlet valve is tested and replaced if it lets water past when closed, and the filter is checked for the right fit.",
      "Ice and dispensing faults are tested part by part. We check the ice maker's heater, motor and sensor, the auger motor and crusher, the chute flap motor and its heater, and the paddle and door switches, then replace what has failed. If your household water is the root of the problem, such as heavy sediment from a borehole, we will say so and suggest how to protect the new parts. For a dispenser that has simply stopped, our guide to an ice maker or water dispenser that is not working covers the checks you can do first.",
    ],
    faqs: [
      {
        question: "Why is my fridge water dispenser dripping?",
        answer:
          "Usually the inlet valve is not closing fully, often because grit from the water supply is holding it open, or the dispenser line has a small leak. A drip that freezes into icicles under the chute can also come from the flap not closing. We test the valve and the flap and replace whichever has failed.",
      },
      {
        question: "Is it safe to keep using a fridge that is leaking water?",
        answer:
          "The fridge will keep cooling, but the water can damage floors and cabinets. Close the supply tap to the fridge, or empty the tank on a hand-filled model, and keep using the fridge until we arrive.",
      },
      {
        question: "Can a plumbed-in fridge run on borehole water?",
        answer:
          "Yes, but sediment and iron shorten the life of the filter and the inlet valve. Changing the filter more often helps, and an extra sediment filter on the supply line is worth discussing with your plumber.",
      },
      {
        question: "My fridge has no water connection. Can you still repair the dispenser?",
        answer:
          "Yes. Tank models have a reservoir, a pump or valve and a dispenser switch, and we repair them on site the same way. A cracked tank can be replaced if the part is available for your model.",
      },
    ],
    related: ["side-by-side-fridge-repairs", "french-door-fridge-repairs", "multi-door-fridge-repairs", "ice-machine-repairs"],
    picture: "sideBySide",
    pictureAlt: "Technician working on a large fridge with a door dispenser in a Harare kitchen",
  },

  {
    slug: "manual-defrost-fridge-repairs",
    name: "Manual defrost fridge",
    plural: "manual defrost fridges",
    group: "home",
    usedIn: "Most budget and mid-range fridges in Harare homes, flats and staff quarters",
    cardText: "Static, direct cool fridges with a cold plate in the fridge and a freezer you defrost by hand.",
    title: "Manual Defrost Fridge Repairs Harare | Static & Direct Cool",
    description:
      "Manual defrost (static, direct cool) fridge repairs in Harare. Ice on the back wall, water in the fridge, thermostat and gas faults fixed at home, 24/7.",
    h1: "Manual Defrost Fridge Repairs in Harare",
    lead:
      "A manual defrost fridge, sold as static or direct cool, has no fan and no automatic defrost in the freezer. It is the simplest and most forgiving design there is, which is why so many Harare homes still run one. When it misbehaves, the clue is nearly always in the ice. Harare Fridge Repairs reads those clues and repairs manual defrost fridges at your address.",
    points: [
      "Top freezer, bottom freezer and single door static fridges",
      "Cold plate icing, water in the fridge and drain faults",
      "Thermostats, door seals, relays and sealed system leaks",
      "Defy, KIC, Capri, Hisense and every other brand",
    ],
    intro: [
      "In a manual defrost fridge-freezer the cooling happens on plates you can see or touch. The freezer has an evaporator in its walls or shelves, and the fridge section has a cold plate on its back wall. There is no fan blowing air around. Cold simply falls from the plates, which is why these fridges are quiet and why food at the back gets colder than food at the front.",
      "The fridge section defrosts itself in a simple way. Each time the compressor stops, the cold plate warms just above freezing, the thin frost on it melts, and the water runs down a channel to a small drain hole and out to a tray on top of the compressor. The freezer does not defrost at all. Frost builds slowly and you are meant to switch off and defrost it by hand every few months.",
      "Load shedding upsets that rhythm. When the power goes, the freezer frost partly melts, then refreezes as hard ice when the power returns, and the cold plate can stay iced for hours. Over weeks that turns into thick ice, a blocked drain and water in the bottom of the fridge. Some of that is normal and fixed by a defrost; some of it is a fault we need to repair.",
    ],
    faults: [
      "Thick ice on the back wall of the fridge section that never clears",
      "Water pooling under the salad drawers or on the fridge floor",
      "Freezer iced up again within days of a defrost",
      "Food freezing to the back wall of the fridge",
      "Fridge section warm while the freezer still freezes",
      "Compressor runs all the time and never switches off",
      "Hissing or a hole in the freezer after ice was chipped with a knife",
      "Water dripping onto the floor from the back of the fridge",
    ],
    repairNotes: [
      "We look first at why the ice or water is there. A cold plate that stays iced usually means the compressor never stops, so we check the thermostat, its sensing tube clipped to the plate and the door seal that lets damp air in. Water in the fridge is usually a blocked drain channel or drain hole, which we clear and flush. If the freezer frosts up within days, the freezer door seal or the door alignment is normally to blame.",
      "When the plates stay frost free and warm, the problem is in the sealed system: a refrigerant leak, a pierced evaporator, a blocked capillary or a compressor that is not pumping. We confirm it with gauges and a leak test before any regas, and tell you honestly if a pierced freezer on an old fridge is worth repairing. Most manual defrost repairs are thermostats, seals, drains and relays, finished in one visit.",
    ],
    faqs: [
      {
        question: "Is it normal for my fridge to have ice on the back wall?",
        answer:
          "A thin layer of frost that melts into water drops each time the compressor stops is normal on a manual defrost fridge. A thick layer of ice that never clears is not. It usually means the thermostat is holding the compressor on or the door seal is letting in damp air.",
      },
      {
        question: "Why is there water in the bottom of my fridge?",
        answer:
          "The melt water from the cold plate is meant to run into a small drain hole at the back. When the hole blocks with food or ice, the water collects under the drawers. We clear the drain, and you can keep it clear by flushing it gently with warm water once in a while.",
      },
      {
        question: "Should I choose a frost free fridge instead?",
        answer:
          "Each suits different homes. Manual defrost fridges are simple, cheap to repair and cope well with power cuts, but need defrosting. Frost free fridges need no defrosting but have more parts to fail. Our frost free page explains those faults.",
      },
      {
        question: "How often should I defrost the freezer?",
        answer:
          "When the ice is about half a centimetre thick, or every few months. Defrosting more often is needed if power cuts keep melting and refreezing the frost. Our step by step defrost guide shows how to do it safely.",
      },
    ],
    related: ["frost-free-fridge-repairs", "double-door-fridge-repairs", "single-door-fridge-repairs", "chest-freezer-repairs"],
    picture: "freezerIce",
    pictureAlt: "Thick ice on the evaporator of a manual defrost fridge before repair",
  },

  {
    slug: "multi-door-fridge-repairs",
    name: "Multi door fridge",
    plural: "multi door and four door fridges",
    group: "home",
    usedIn: "Large family homes and new kitchens across Harare's northern and eastern suburbs",
    cardText: "Four door cross-door fridges with two freezer drawers and a convertible zone.",
    title: "Multi Door Fridge Repairs Harare | Four Door & Cross Door Fridges",
    description:
      "Four door and cross-door fridge repairs in Harare. Convertible zone, sensor, fan, damper, inverter and door faults on Hisense, Samsung, LG and more, 24/7.",
    h1: "Multi Door and Four Door Fridge Repairs in Harare",
    lead:
      "A four door fridge looks like a French door fridge with the freezer split in two, and inside it is more complex than either. Separate zones, a convertible compartment and electronic control of every fan and damper make it flexible to use and particular to repair. Harare Fridge Repairs diagnoses multi door fridges zone by zone and repairs them in your kitchen.",
    points: [
      "Four door cross-door and quad door fridges",
      "Convertible zones that switch between fridge and freezer",
      "Sensors, dampers, fans, defrost and inverter boards",
      "Heavy cabinets repaired in place, no transport",
    ],
    intro: [
      "Most four door fridges have two fridge doors on top and two freezer doors below, or a freezer on one side and a convertible zone on the other that you can set as a fridge, a chiller or a freezer. To make that possible, the fridge uses several temperature sensors, motorised air dampers or a second evaporator, and more than one fan. A main board reads the sensors and decides where cold air goes, usually driving an inverter compressor.",
      "That means a fault rarely affects the whole fridge. One zone runs warm while the rest is fine, the convertible drawer refuses to reach freezer temperature, or frost forms behind one panel only. The cause can be a sensor that has drifted, a damper stuck shut, a fan that has stopped, or a defrost heater that has failed on one evaporator. Guessing from the symptom is how these fridges end up with an unnecessary regas.",
      "Power is the other half of the story in Harare. Multi door fridges carry the most electronics of any household fridge, so surges and repeated restarts after load shedding are hard on their boards and inverter drivers. A good surge protector is worth fitting, and if the display went dark after an outage, tell us when you book.",
    ],
    faults: [
      "One zone warm while the other compartments are cold",
      "Convertible zone not reaching freezer or chiller temperature",
      "Frost or ice behind one freezer drawer panel",
      "Fan noise or clicking from a damper motor",
      "Error code or flashing temperature on the display",
      "Display dark or unresponsive after a power cut",
      "Drawers or doors dropped, misaligned or not sealing",
      "Water under one of the freezer drawers",
    ],
    repairNotes: [
      "We start with the fridge's own test mode where the model has one, which lets us run each fan, damper and heater on command and read every sensor. That narrows the fault to one zone and one part. Sensors, damper motors, fans, defrost heaters and door switches are replaced on site, and inverter boards are replaced only after the compressor and sensors have been tested.",
      "Four door fridges are heavy and often built into a run of cabinets, so we repair them where they stand and avoid moving them unless a rear panel must come off. Drawer runners, hinges and seals are adjusted so each door closes square. If a sealed system fault is confirmed, the correct refrigerant is charged by weight to the figure on the rating plate.",
    ],
    faqs: [
      {
        question: "Why is one compartment of my four door fridge warm and the others cold?",
        answer:
          "That zone is not getting cold air. The usual causes are a damper stuck shut, a fan that has stopped, ice on that zone's evaporator after a defrost fault, or a sensor reading wrongly. We test each one so only the failed part is replaced.",
      },
      {
        question: "My convertible drawer will not go into freezer mode. Is it broken?",
        answer:
          "Check the setting first, and give it a few hours to pull down. If it still will not freeze, the damper, fan, sensor or heater that controls that drawer has usually failed, and it can be repaired on site.",
      },
      {
        question: "Is a four door fridge the same as a French door fridge?",
        answer:
          "They are close relatives. A French door fridge has two fridge doors and one freezer drawer; a four door fridge splits the lower section into two, often with a convertible zone. Our French door page covers the three door design.",
      },
      {
        question: "Which brands of multi door fridge do you repair?",
        answer:
          "Hisense, Samsung, LG, Haier, Midea, Bosch and the other four door fridges sold in Zimbabwe, along with models brought in from abroad.",
      },
    ],
    related: ["french-door-fridge-repairs", "side-by-side-fridge-repairs", "inverter-fridge-repairs", "water-dispenser-fridge-repairs"],
    picture: "frenchDoor",
    pictureAlt: "Technician repairing a large multi door fridge in a Harare kitchen",
  },
]
