import type { ServiceRecord } from "./services"

/**
 * Service pages added from the SEO gap review (November 2026): power surge
 * damage, control boards and preventive servicing. Kept in their own file so
 * the original service records stay easy to read.
 */
export const moreServices: ServiceRecord[] = [
  {
    slug: "fridge-power-surge-repairs",
    shortName: "Power surge repairs",
    cardText: "Fridges that died or stopped cooling after load shedding, a power cut or a lightning surge.",
    path: "/fridge-power-surge-repairs",
    title: "Fridge Not Working After Load Shedding? Surge Repairs Harare",
    description:
      "Fridge dead or not cooling after load shedding, a power cut or a ZESA surge? We repair blown relays, overloads, control boards and compressors at your address in Harare, 24/7. Call 0782 886 252.",
    eyebrow: "Power surge damage in Harare",
    h1: "Fridge Power Surge and Load Shedding Damage Repairs",
    lead:
      "Power coming back after load shedding is harder on a fridge than the outage itself. The voltage spikes, dips and flickers, and the compressor tries to restart against full pressure. Harare Fridge Repairs repairs the parts that fail when that happens, from start relays and overloads to control boards and compressors, at your home or shop anywhere in Harare.",
    points: [
      "Fridges dead, clicking or not cooling after the power returned",
      "Start relays, overloads, fuses, control boards and sensors",
      "Compressor tested before anyone talks about replacing it",
      "Advice on surge protection so it does not happen again",
    ],
    picture: "controlBoard",
    pictureAlt: "Technician testing a fridge control board damaged by a power surge in Harare",
    crumbs: [{ name: "Power surge repairs", path: "/fridge-power-surge-repairs" }],
    whatsappMessage:
      "Hi Harare Fridge Repairs, my fridge stopped working after the power came back. My suburb is: ___ and it is doing this: ___",
    sections: [
      {
        kind: "text",
        heading: "What a power surge actually does to a fridge",
        paragraphs: [
          "When ZESA power returns after load shedding, it rarely comes back clean. The first seconds can bring a spike well above 230 volts, a brownout well below it, or several on and off flickers. Every fridge on the street tries to start at once, and so do geysers, pumps and borehole motors. A fridge compressor that stopped only minutes earlier still has high pressure on one side, so it struggles to start and draws a heavy current while it tries.",
          "That combination is what burns out parts. The start relay and overload protector take the brunt of a hard restart, and repeated attempts wear them out within weeks. On modern electronic fridges a spike can kill the power supply section of the control board, a sensor or the inverter compressor driver. Lightning on the network does the same thing in a single hit.",
          "The good news is that most surge damage is in the cheaper parts. A compressor that has been protected by a working overload often survives, which is why we test it properly before anyone mentions replacing it.",
        ],
      },
      {
        kind: "list",
        heading: "Signs your fridge was damaged by a surge",
        intro: "If any of these started the day the power came back, the timing is a strong clue.",
        items: [
          "Fridge completely dead, no light and no sound",
          "Light works but the compressor never starts",
          "A click every minute or two from the back of the fridge, then silence",
          "Compressor hums for a few seconds and cuts out",
          "Display blank, flashing or showing an error code",
          "Fridge trips the plug or the earth leakage when switched on",
          "Burning smell from the back or bottom of the fridge",
          "Fridge runs but no longer gets cold",
        ],
      },
      {
        kind: "steps",
        heading: "How we repair surge damage",
        items: [
          { title: "Safe start", text: "We check the socket, plug, cable and earth first, so we are not blaming the fridge for a house wiring fault." },
          { title: "Test the starting parts", text: "The start relay, overload, capacitor where fitted, and any fuses are tested and replaced if they have failed. These are the most common surge casualties." },
          { title: "Test the electronics", text: "On electronic fridges the control board power supply, sensors and inverter driver are measured. Boards are repaired where the damage is limited and replaced where it is not." },
          { title: "Prove the compressor", text: "Windings and insulation are measured and the compressor is run and checked for current and pressure, so you know whether it survived." },
          { title: "Advise on protection", text: "We explain what protection suits your fridge and your power supply, including surge protectors, delay timers and inverter systems." },
        ],
      },
      {
        kind: "feature",
        eyebrow: "Before you call",
        heading: "Switch it off and wait before you restart",
        paragraphs: [
          "If the power is flickering, switch the fridge off at the wall and wait until the supply has been steady for a few minutes. Then wait another three to five minutes before switching the fridge on, so the pressures in the system can equalise and the compressor can start easily.",
          "If the fridge clicks, hums and stops, or trips the power, do not keep trying. Each failed start heats the compressor and the relay. Switch it off, keep the doors closed to protect the food, and call us.",
        ],
        picture: "compressorTest",
        pictureAlt: "Technician measuring a fridge compressor after a power surge",
        reverse: true,
      },
      {
        kind: "chips",
        heading: "Related pages",
        items: [
          { href: "/problems/fridge-not-working-after-power-cut", label: "Fridge not working after a power cut" },
          { href: "/protect-fridge-from-load-shedding", label: "Protect your fridge from load shedding" },
          { href: "/fridge-control-board-repairs", label: "Control board repairs" },
          { href: "/compressor-replacement", label: "Compressor replacement" },
          { href: "/problems/fridge-not-switching-on", label: "Fridge not switching on" },
          { href: "/problems/fridge-tripping-power", label: "Fridge tripping the power" },
          { href: "/24-hour-fridge-repairs", label: "24 hour fridge repairs" },
        ],
      },
    ],
    faqs: [
      {
        question: "Can a power cut really damage a fridge?",
        answer:
          "The cut itself rarely does. The damage comes when the power returns with a spike, a low voltage or several flickers, and the compressor tries to restart against high pressure. Start relays, overloads and electronic control boards are the parts that usually fail.",
      },
      {
        question: "My fridge stopped working after load shedding. Is the compressor gone?",
        answer:
          "Not necessarily, and usually not. Most surge damage is in the starting parts or the control board, which cost far less than a compressor. We test the compressor windings and run it before recommending any compressor work.",
      },
      {
        question: "Will a surge protector stop this happening again?",
        answer:
          "A good plug-in surge protector with a delay timer helps a great deal: it blocks spikes and holds the fridge off for a few minutes after the power returns, so the compressor starts easily. It will not protect against very low voltage for long periods, which is where an inverter or a voltage protector with a low-voltage cut-out helps.",
      },
      {
        question: "Do you come out at night when the power comes back?",
        answer:
          "Yes. We work 24 hours a day across Harare, including nights, weekends and public holidays. Call or WhatsApp 0782 886 252 with your suburb.",
      },
    ],
    cta: {
      title: "Fridge stopped after the power came back?",
      text: "Switch it off at the wall, keep the doors shut and call 0782 886 252. A technician can test it at your address in Harare today.",
    },
    schema: {
      serviceName: "Fridge power surge and load shedding damage repairs in Harare",
      serviceDescription:
        "Repair of fridges and freezers damaged by power surges, load shedding restarts and lightning: start relays, overloads, control boards, sensors and compressors, at the customer's address in Harare, Zimbabwe.",
      serviceType: "Refrigerator electrical repair",
    },
  },

  {
    slug: "fridge-control-board-repairs",
    shortName: "Control board repairs",
    cardText: "Electronic fridges with a dead display, error codes or a board damaged by a surge.",
    path: "/fridge-control-board-repairs",
    title: "Fridge Control Board (PCB) Repairs Harare | Error Codes",
    description:
      "Fridge control board and PCB repairs in Harare for Samsung, LG, Hisense, Defy, Bosch and other electronic fridges. Dead displays, error codes, inverter boards and surge damage repaired on site. Call 0782 886 252.",
    eyebrow: "Control board repairs in Harare",
    h1: "Fridge Control Board and PCB Repairs in Harare",
    lead:
      "Most fridges sold in Harare today have an electronic control board deciding when the compressor, fans and defrost heater run. When that board fails, the fridge may go completely dead, show an error code, or cool erratically. Harare Fridge Repairs diagnoses board faults on site, repairs boards where that is sound, and fits replacements where it is not.",
    points: [
      "Main boards, display boards and inverter compressor boards",
      "Error codes read and explained before work starts",
      "Board repair offered where it is reliable, replacement where it is not",
      "Sensors, fans and loads checked so the new board is not damaged",
    ],
    picture: "controlBoard",
    pictureAlt: "Fridge electronic control board being tested with a multimeter in Harare",
    crumbs: [{ name: "Control board repairs", path: "/fridge-control-board-repairs" }],
    whatsappMessage:
      "Hi Harare Fridge Repairs, my fridge display or control board has a problem. The brand is: ___ the error code is: ___ and my suburb is: ___",
    sections: [
      {
        kind: "text",
        heading: "What the control board does, and why it fails",
        paragraphs: [
          "On an electronic fridge the board reads temperature sensors in the fridge and freezer, then switches the compressor, the evaporator and condenser fans, the defrost heater and the dampers. On inverter models from Samsung, LG, Hisense and others, a separate board or a section of the main board drives the variable speed compressor.",
          "In Harare the leading cause of board failure is the power supply: spikes and brownouts when ZESA power returns after load shedding. Heat and moisture come next, from boards mounted near the compressor or in the door where condensation collects. A failed fan or a shorted defrost heater can also take a board with it, which is why we check the loads before fitting a new one.",
        ],
      },
      {
        kind: "list",
        heading: "Signs of a control board fault",
        items: [
          "Display dead or flickering while the fridge has power",
          "Error code on the display, or flashing lights on the control panel",
          "Compressor never starts although the light works",
          "Fans run but the compressor does not, or the reverse",
          "Fridge stops cooling after load shedding or a storm",
          "Buttons not responding, or settings resetting by themselves",
          "Clicking from the board area with nothing starting",
          "Burnt smell or marks near the board cover",
        ],
        columns: 2,
      },
      {
        kind: "steps",
        heading: "How we deal with a board fault",
        items: [
          { title: "Read the fault", text: "Error codes are read and the fridge's self test is run where the model has one. We explain what the code means for your fridge." },
          { title: "Test around the board", text: "Sensors, fans, the defrost heater and the compressor are measured. A board often fails because something it drives has failed." },
          { title: "Repair or replace", text: "Burnt relays, failed capacitors and blown fuses on the board can sometimes be repaired. Where the microcontroller or inverter section has failed, the board is replaced." },
          { title: "Protect and test", text: "The fridge is run through a cooling cycle to confirm every load switches correctly, and we advise on surge protection to protect the board in future." },
        ],
      },
      {
        kind: "chips",
        heading: "Related pages",
        items: [
          { href: "/fridge-power-surge-repairs", label: "Power surge repairs" },
          { href: "/thermostat-replacement", label: "Thermostat and sensor replacement" },
          { href: "/samsung-fridge-repairs", label: "Samsung fridge repairs" },
          { href: "/lg-fridge-repairs", label: "LG fridge repairs" },
          { href: "/hisense-fridge-repairs", label: "Hisense fridge repairs" },
          { href: "/problems/fridge-not-switching-on", label: "Fridge not switching on" },
          { href: "/problems/fridge-not-cooling", label: "Fridge not cooling" },
        ],
      },
    ],
    faqs: [
      {
        question: "Can a fridge control board be repaired, or must it be replaced?",
        answer:
          "Both are possible. Faults in the power supply section, such as a burnt relay, a failed capacitor or a blown fuse, can often be repaired. When the microcontroller or the inverter driver has failed, replacement is the reliable option. We tell you which applies after testing.",
      },
      {
        question: "My fridge shows an error code. What does it mean?",
        answer:
          "Codes differ by brand and model. Many point to a sensor, a fan or the defrost system rather than the board itself. Send us the brand, model and code on WhatsApp and we will tell you what it usually means before we come out.",
      },
      {
        question: "Why did the new board fail again on my last repair?",
        answer:
          "Usually because the part that killed the first board was never found, such as a shorted fan or heater, or the fridge had no surge protection. We test the loads the board drives before fitting a new one for exactly this reason.",
      },
      {
        question: "Do you repair inverter fridge boards?",
        answer:
          "Yes. Inverter compressors are driven by their own board or board section, and a fault there can look like a dead compressor. We test the inverter drive and the compressor separately so you only pay for the part that failed.",
      },
    ],
    cta: {
      title: "Dead display or an error code?",
      text: "WhatsApp a photo of the display and the model label to 0782 886 252, or call. A technician will test the board at your address in Harare.",
    },
    schema: {
      serviceName: "Fridge control board and PCB repairs in Harare",
      serviceDescription:
        "Diagnosis, repair and replacement of electronic fridge control boards, display boards and inverter compressor boards at the customer's address in Harare, Zimbabwe.",
      serviceType: "Refrigerator control board repair",
    },
  },

  {
    slug: "fridge-servicing",
    shortName: "Fridge servicing",
    cardText: "A preventive service that keeps a fridge cooling well and catches small faults early.",
    path: "/fridge-servicing",
    title: "Fridge Servicing Harare | Fridge & Freezer Maintenance",
    description:
      "Fridge and freezer servicing in Harare: condenser coil cleaning, door seal checks, drain clearing, fan and temperature checks. Keep your fridge running efficiently and avoid breakdowns. Call 0782 886 252.",
    eyebrow: "Fridge servicing in Harare",
    h1: "Fridge and Freezer Servicing in Harare",
    lead:
      "A fridge works hardest in a hot Harare October, and that is when a dusty condenser, a tired door seal or a blocked drain turns into a breakdown. A service from Harare Fridge Repairs cleans and checks the parts that wear, so the fridge cools properly, runs less and is less likely to fail when you need it most.",
    points: [
      "Condenser coils and compressor area cleaned",
      "Door seals, hinges and alignment checked",
      "Defrost drain cleared and fans checked",
      "Temperatures and running current measured and recorded",
    ],
    picture: "condenser",
    pictureAlt: "Technician cleaning the condenser coils on the back of a fridge in Harare",
    crumbs: [{ name: "Fridge servicing", path: "/fridge-servicing" }],
    whatsappMessage: "Hi Harare Fridge Repairs, I would like a fridge service. The fridge type is: ___ and my suburb is: ___",
    sections: [
      {
        kind: "text",
        heading: "Why service a fridge that still works?",
        paragraphs: [
          "A fridge sheds the heat it removes from your food through the condenser, the coil on the back or underneath. Harare dust, kitchen grease and pet hair build up on that coil, the fridge sheds heat less well, and the compressor has to run longer and hotter to do the same job. That costs electricity every day and shortens the compressor's life.",
          "The same slow decline happens elsewhere. Door seals harden and let warm air in, defrost drains block and leak water into the crisper drawers, and fan motors start to drag before they fail. A service catches these while they are cheap to fix, rather than on the day the fridge stops cooling with a full load of food inside.",
        ],
      },
      {
        kind: "list",
        heading: "What a fridge service includes",
        items: [
          "Clean the condenser coils and the compressor compartment",
          "Check the condenser fan on fridges that have one",
          "Inspect door seals, hinges and door alignment",
          "Clear and flush the defrost drain",
          "Check the evaporator fan and the defrost system on frost free fridges",
          "Measure fridge and freezer temperatures",
          "Measure the compressor running current",
          "Check the plug, cable and socket for heat damage",
          "Advise on placement, ventilation and settings",
        ],
        columns: 2,
      },
      {
        kind: "steps",
        heading: "How often to service",
        items: [
          { title: "Household fridges", text: "Once a year is enough for most homes, ideally before the hot months. Homes with pets, dust from dirt roads or a fridge in a garage benefit from more frequent cleaning." },
          { title: "Chest and upright freezers", text: "Once a year, with the gasket and the condenser given extra attention, because a freezer that struggles can lose a whole load of meat." },
          { title: "Shops, butcheries and restaurants", text: "Every three to six months for display fridges, beverage chillers and cold rooms that run hard all day in warm rooms." },
        ],
      },
      {
        kind: "chips",
        heading: "Related pages",
        items: [
          { href: "/tips", label: "Fridge care tips" },
          { href: "/commercial-fridge-repairs", label: "Commercial fridge repairs" },
          { href: "/problems/fridge-running-constantly", label: "Fridge running constantly" },
          { href: "/problems/fridge-leaking-water", label: "Fridge leaking water" },
          { href: "/problems/fridge-door-seal-problems", label: "Door seal problems" },
          { href: "/fridge-repair-or-replace", label: "Repair or replace?" },
        ],
      },
    ],
    faqs: [
      {
        question: "Does a fridge need servicing?",
        answer:
          "A fridge has no filters or oil to change, but the condenser collects dust, door seals harden and drains block. Cleaning and checking those parts keeps the fridge efficient and catches small faults before they become breakdowns.",
      },
      {
        question: "Will servicing lower my electricity use?",
        answer:
          "A clean condenser and a good door seal let the compressor run for shorter periods, so a fridge that was dusty or leaking cold air will usually use less power after a service. A fridge that was already clean will see little change.",
      },
      {
        question: "Can I clean the condenser coils myself?",
        answer:
          "Yes, on many fridges you can. Unplug the fridge, then use a soft brush and a vacuum cleaner on the coils at the back or underneath. Avoid bending the fins or the thin pipes. Our tips page explains what else you can do between services.",
      },
      {
        question: "Do you service commercial fridges and cold rooms?",
        answer:
          "Yes. We service display fridges, beverage chillers, butchery fridges, freezers and cold rooms, and can set up a regular service schedule for shops and restaurants.",
      },
    ],
    cta: {
      title: "Book a fridge service before the hot season",
      text: "Call or WhatsApp 0782 886 252 with the type of fridge and your suburb, and we will arrange a visit anywhere in Harare.",
    },
    schema: {
      serviceName: "Fridge and freezer servicing in Harare",
      serviceDescription:
        "Preventive servicing of household and commercial fridges and freezers in Harare, Zimbabwe: condenser cleaning, door seal, drain, fan and temperature checks.",
      serviceType: "Refrigerator maintenance",
    },
  },
]
