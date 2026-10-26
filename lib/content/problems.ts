import type { PictureKey } from "@/components/pictures"
import type { ContentPage, ContentSection, Faq, LinkItem } from "./model"
import { rotate } from "@/lib/utils"

export type ProblemRecord = {
  slug: string
  name: string
  question: string
  cardText: string
  title: string
  description: string
  h1: string
  lead: string
  points: string[]
  intro: string[]
  causes: { title: string; text: string }[]
  checks: string[]
  dontDo: string[]
  faqs: Faq[]
  related: string[]
  services: LinkItem[]
  picture: PictureKey
  pictureAlt: string
}

export const problems: ProblemRecord[] = [
  {
    slug: "fridge-not-cooling",
    name: "Fridge not cooling",
    question: "Why is my fridge not cooling?",
    cardText: "The fridge runs, the light is on, but the food is warm. The most common call we get.",
    title: "Fridge Not Cooling in Harare? Causes & Same Day Repair",
    description:
      "Fridge not cooling but still running? Learn the real causes, from iced evaporators and failed fans to thermostats and gas leaks, and get it repaired at home in Harare today. Call 0782 886 252.",
    h1: "Fridge Not Cooling? Here Is What Is Usually Wrong",
    lead:
      "A fridge that hums away but will not keep the milk cold is the most common problem we are called to in Harare. It is also the most misdiagnosed. Most of these fridges do not need gas. They need the right fault found. Harare Fridge Repairs comes to your home, finds the real cause and repairs it, 24 hours a day.",
    points: [
      "Frost free fridges: iced evaporator, failed fan or defrost system",
      "Older fridges: thermostat, relay or door gasket",
      "Gas leaks and weak compressors confirmed with gauges, not guessed",
      "Repaired at your address, anywhere in Harare",
    ],
    intro: [
      "When a fridge stops cooling the symptom is the same whatever the cause: the compressor may be running, the light works, but the temperature inside creeps up. What has actually failed depends a great deal on the kind of fridge. A frost free fridge with a fan fails differently from an old manual defrost fridge, and a fridge that went warm overnight has a different fault from one that has been getting slowly worse for a month.",
      "In Harare the most frequent cause on frost free fridges is an evaporator buried in ice because the defrost heater, timer, sensor or bimetal has failed. The fan is still trying to blow, but there is no air path, so the freezer may still feel cold while the fridge section is warm. On older fridges the usual causes are a thermostat that has stopped calling for cooling, a start relay that is not letting the compressor run, or a gasket so tired that warm air pours in faster than the fridge can cool it.",
      "A genuine refrigerant leak or a compressor that has stopped pumping is the cause in a minority of cases, and both are confirmed with gauges and a clamp meter before any work is recommended. That is the difference between a repair that lasts and a regas that fails in three weeks.",
    ],
    causes: [
      { title: "Evaporator iced over", text: "The defrost heater, timer, sensor or bimetal has failed on a frost free fridge. Ice blocks the airflow, the fridge section warms while the freezer stays cold." },
      { title: "Evaporator fan failed", text: "No fan, no cold air moving from the freezer to the fridge. Often noisy before it stops, and the noise may stop when the door opens." },
      { title: "Thermostat or sensor fault", text: "The control is not telling the compressor to run, or is reading the wrong temperature. Common after power surges on electronic fridges." },
      { title: "Start relay or overload", text: "The compressor hums and clicks but never starts. Relays and overloads wear out quickly with Harare's load shedding restarts." },
      { title: "Door gasket or alignment", text: "A hardened, torn or misaligned gasket lets warm air in constantly. The fridge runs all day and never catches up." },
      { title: "Blocked condenser", text: "Dust on the condenser coils behind or under the fridge stops it shedding heat, so it cools poorly and the compressor overheats." },
      { title: "Refrigerant leak", text: "Cooling fades over weeks, the compressor runs hot and non stop, and only a patch of the evaporator frosts. Needs leak repair, vacuum and recharge." },
      { title: "Compressor not pumping", text: "The compressor runs quietly but no longer builds pressure. Confirmed with gauges; no amount of gas will help." },
    ],
    checks: [
      "Is the fridge plugged in firmly, the wall switch on, and the earth leakage not tripped? Try another appliance in the socket.",
      "Is the thermostat dial set to a sensible position, not turned to off or minimum by accident?",
      "Can you hear the compressor running, or a hum and click every minute?",
      "Is there a thick sheet of ice on the back wall of the freezer section?",
      "Is the fridge pushed hard against the wall with no space for air behind it?",
      "Does the door close flat, and does a strip of paper pull out easily when closed in the gasket?",
    ],
    dontDo: [
      "Do not pay for regassing until a technician has measured the pressures and confirmed a leak.",
      "Do not chip ice off the evaporator with a knife or screwdriver. A pierced evaporator is an expensive repair.",
      "Do not keep restarting a fridge that trips the power; switch it off and call.",
    ],
    faqs: [
      {
        question: "My fridge is not cooling but the freezer works. What is wrong?",
        answer:
          "On a frost free fridge this is almost always an iced evaporator from a failed defrost system, or a failed fan or damper. The freezer is where the cold is made, so it stays cold while nothing reaches the fridge. It is repairable on site and does not need gas.",
      },
      {
        question: "Does a fridge that is not cooling need regassing?",
        answer:
          "Usually not. Regassing only helps if there is a leak, and a leak is the cause in a minority of cases. We measure pressures and temperatures before recommending it, and if there is a leak we repair it first so the gas stays in.",
      },
      {
        question: "How quickly can you fix a fridge that is not cooling?",
        answer:
          "We work 24 hours a day across Harare and most of these faults are repaired in one visit from parts on the vehicle. Call with your suburb and we will give you an arrival time.",
      },
      {
        question: "Is my food safe while I wait?",
        answer:
          "Keep the door closed and the food will stay cooler for longer. Meat and dairy that have been above 5 degrees for several hours should be treated with caution. A full freezer holds its temperature for many hours if left shut.",
      },
    ],
    related: ["freezer-not-freezing", "fridge-running-constantly", "ice-build-up", "fridge-compressor-problems"],
    services: [
      { href: "/fridge-repairs", label: "Fridge repairs" },
      { href: "/fridge-regassing", label: "Fridge regassing" },
      { href: "/thermostat-replacement", label: "Thermostat replacement" },
      { href: "/does-my-fridge-need-regassing", label: "Does my fridge need regassing?" },
    ],
    picture: "notCooling",
    pictureAlt: "Technician measuring the temperature inside a fridge that is not cooling",
  },

  {
    slug: "fridge-leaking-water",
    name: "Fridge leaking water",
    question: "Why is my fridge leaking water?",
    cardText: "Water under the crisper drawers or on the kitchen floor, usually a blocked defrost drain.",
    title: "Fridge Leaking Water? Causes & Repair in Harare",
    description:
      "Fridge leaking water inside or onto the floor? The cause is usually a blocked defrost drain, a failed gasket or a dispenser line. Repaired at your home in Harare, 24 hours. Call 0782 886 252.",
    h1: "Fridge Leaking Water Inside or Onto the Floor",
    lead:
      "Water under the vegetable drawers, a puddle in front of the fridge every morning, or ice forming at the bottom of the freezer all point to the same thing: melt water that is not going where it should. Harare Fridge Repairs finds the source and fixes it at your home, usually in one visit.",
    points: [
      "Blocked or frozen defrost drains cleared and the cause fixed",
      "Door gaskets that let humid air in and cause heavy condensation",
      "Water dispenser lines, valves and filters on side by side fridges",
      "Drain pans and compressor trays checked and cleaned",
    ],
    intro: [
      "Every fridge makes water. Frost forms on the evaporator, the defrost cycle melts it, and the water runs down a drain tube to a tray on top of the compressor where it evaporates. When that path is blocked by food debris, ice or mould, the water backs up into the cabinet, collects under the crisper drawers, and eventually runs out of the door onto the floor. On combi and bottom freezer fridges it freezes into a sheet of ice in the lowest drawer instead.",
      "The second common cause is a door gasket that no longer seals. Humid Harare air gets in, condenses on every cold surface, and the fridge produces far more water than the drain was designed for. Often the gasket is the reason the drain froze in the first place. On side by side and French door fridges with water dispensers, a split water line, a leaking inlet valve or a cracked filter housing adds a third possibility, and that water is clean rather than cold.",
      "Clearing the drain is only half the repair. We find out why it blocked or froze, which may be a failed drain heater, a defrost system that is running too long, or a gasket, so the problem does not come back.",
    ],
    causes: [
      { title: "Blocked defrost drain", text: "Food debris, mould or ice in the drain hole at the back of the fridge section stops melt water reaching the tray. Water collects under the drawers." },
      { title: "Frozen drain on a freezer", text: "On combi and upright freezers the drain freezes when its heater fails, leaving a sheet of ice in the bottom drawer that eventually melts onto the floor." },
      { title: "Door gasket not sealing", text: "Humid air condenses inside the cabinet and overwhelms the drain. Also causes heavy frost and higher running costs." },
      { title: "Cracked or overflowing drain pan", text: "The tray on the compressor is cracked, has slipped, or cannot evaporate the water fast enough because the compressor is not running warm." },
      { title: "Water dispenser or ice maker line", text: "A split tube, a leaking inlet valve or a cracked filter head on a side by side fridge leaks clean water inside or behind the fridge." },
      { title: "Fridge not level", text: "A fridge tilted forward lets condensate run to the door instead of the drain, and the door may not self close." },
    ],
    checks: [
      "Is the water inside the fridge under the drawers, at the bottom of the freezer, or outside on the floor?",
      "Is the water cold and appearing after the fridge cycles, or clean and continuous from a dispenser model?",
      "Can you see a small drain hole at the back of the fridge section above the drawers, and is it iced or dirty?",
      "Does the door gasket seal all the way round, or is there frost or sweating at one corner?",
      "Is the fridge level, with the front slightly higher than the back so the door swings shut?",
    ],
    dontDo: [
      "Do not poke the drain hole with a sharp object; the evaporator pipe sits just behind it.",
      "Do not pour boiling water into the drain of a running fridge.",
      "Do not ignore a leak that reaches a socket or an extension lead; switch the fridge off and call.",
    ],
    faqs: [
      {
        question: "Why is there water under the vegetable drawers in my fridge?",
        answer:
          "The defrost drain at the back of the fridge section is blocked or frozen, so melt water collects in the cabinet instead of draining to the tray. We clear the drain and fix whatever caused it to block.",
      },
      {
        question: "Why is there ice in the bottom of my freezer drawer?",
        answer:
          "The freezer's defrost drain has frozen, usually because the drain heater has failed, so melt water freezes in the drawer. Clearing the ice is temporary; the heater or drain route needs repair.",
      },
      {
        question: "My side by side fridge is leaking water behind it. Is it the gas?",
        answer:
          "No, refrigerant does not leak as liquid water. Water behind a dispenser fridge is from the water line, inlet valve or filter housing, and all three are repairable on site.",
      },
    ],
    related: ["ice-build-up", "fridge-door-seal-problems", "fridge-not-cooling", "freezer-not-freezing"],
    services: [
      { href: "/fridge-repairs", label: "Fridge repairs" },
      { href: "/side-by-side-fridge-repairs", label: "Side by side fridge repairs" },
      { href: "/combi-fridge-repairs", label: "Combi fridge repairs" },
      { href: "/tips", label: "Fridge care tips" },
    ],
    picture: "doorSeal",
    pictureAlt: "Technician checking a fridge door seal that is letting water form inside",
  },

  {
    slug: "fridge-making-noise",
    name: "Fridge making noise",
    question: "Why is my fridge making a noise?",
    cardText: "Buzzing, clicking, rattling or grinding that was not there before.",
    title: "Fridge Making Noise? Buzzing, Clicking & Rattling Explained",
    description:
      "Fridge making a loud buzzing, clicking, rattling or grinding noise? Learn what each sound means, from a failing fan to a struggling compressor, and get it repaired at home in Harare. Call 0782 886 252.",
    h1: "Fridge Making a Noise: What Each Sound Means",
    lead:
      "Fridges are never silent, but a new sound is a message. A grinding fan, a compressor that clicks every minute, a rattle from the back or a loud buzz all point to specific parts, and most are cheap to fix if they are caught early. Harare Fridge Repairs identifies the noise and repairs the cause at your home, day or night.",
    points: [
      "Evaporator and condenser fan motors, the most common noise source",
      "Compressors that click, hum, knock or buzz",
      "Ice rubbing on fans, loose pipes and vibrating trays",
      "Repaired on site before a small noise becomes a big failure",
    ],
    intro: [
      "The sound a fridge makes tells a technician a great deal before any panel is removed. A rhythmic hum followed by a click every minute or two is a compressor trying to start and tripping its overload. A grinding or scraping noise from inside the freezer that stops when you open the door is the evaporator fan, either failing or touching ice. A loud buzz from the back is usually the compressor's mounts or a pipe vibrating against the cabinet. A gurgle or crackle is refrigerant and expanding plastic and is normal.",
      "Noises matter because they are early warnings. A fan that grinds today seizes next week and the fridge stops cooling. A compressor that clicks on its overload for a month will eventually burn out. A rattle that turns out to be a loose pipe can wear a hole in itself and leak gas. Dealing with the noise early is nearly always cheaper than dealing with the failure it leads to.",
      "Our technician listens, then confirms the source with the panel off, a meter on the compressor and a look at the fan and the evaporator. The repair is usually straightforward and done in the same visit.",
    ],
    causes: [
      { title: "Evaporator fan failing or hitting ice", text: "Grinding, scraping or chirping from inside the freezer that changes when the door opens. The fan bearing is worn or ice has built up around the blades." },
      { title: "Condenser fan or compressor fan", text: "Rattling or whirring from the back at floor level. A worn fan motor or blades touching a wire or pipe." },
      { title: "Compressor start failure", text: "Hum for a few seconds, then a click, then silence, repeating. A failed start relay, overload or capacitor, or a compressor that has seized." },
      { title: "Compressor knocking or very loud", text: "Internal wear, a broken mount or the compressor running on an incorrect gas charge. Needs testing with gauges and a meter." },
      { title: "Loose pipe, tray or panel", text: "Vibration from a pipe touching the cabinet, a loose drain tray on the compressor or a back panel that has worked loose. Simple to fix." },
      { title: "Defrost heater sizzling", text: "A sizzle or crackle from the freezer a few times a day is the defrost heater melting frost and is normal. Constant sizzling with a wet cabinet is not." },
    ],
    checks: [
      "Does the noise come from inside the freezer, or from the back at floor level?",
      "Does it stop or change when you open the door?",
      "Is it a steady hum, a repeating hum and click, a grind, or a rattle?",
      "Is the fridge level and standing clear of the wall and cupboards?",
      "Is the cabinet still cooling properly, or has that started to fail too?",
    ],
    dontDo: [
      "Do not ignore a repeating hum and click; the compressor is being stressed each time.",
      "Do not reach into the freezer fan with the fridge plugged in.",
      "Do not wedge cardboard or cloth against a vibrating pipe; it traps heat around the compressor.",
    ],
    faqs: [
      {
        question: "My fridge hums and then clicks every minute. What is that?",
        answer:
          "The compressor is trying to start and the overload is tripping. Most often the start relay or overload has failed, which is a quick repair. Sometimes the compressor itself has seized. We test which before replacing anything.",
      },
      {
        question: "Why does my fridge grind and then go quiet when I open the door?",
        answer:
          "That is the evaporator fan, which stops when the door opens on most fridges. Either its bearing is worn or ice is touching the blades. Both are repaired on site.",
      },
      {
        question: "Is a buzzing fridge dangerous?",
        answer:
          "A buzz from vibration is harmless but annoying. A buzz accompanied by a burning smell, a hot plug or tripping power is an electrical fault; switch the fridge off and call us.",
      },
    ],
    related: ["fridge-compressor-problems", "ice-build-up", "fridge-not-switching-on", "fridge-running-constantly"],
    services: [
      { href: "/fridge-repairs", label: "Fridge repairs" },
      { href: "/compressor-replacement", label: "Compressor replacement" },
      { href: "/double-door-fridge-repairs", label: "Double door fridge repairs" },
      { href: "/24-hour-fridge-repairs", label: "24 hour fridge repairs" },
    ],
    picture: "noise",
    pictureAlt: "Technician inspecting the compressor at the back of a noisy fridge",
  },

  {
    slug: "fridge-freezing-food",
    name: "Fridge freezing food",
    question: "Why is my fridge freezing my food?",
    cardText: "Lettuce frozen, milk slushy, eggs cracked. The fridge is running too cold.",
    title: "Fridge Freezing Food? Causes & Thermostat Repair in Harare",
    description:
      "Fridge freezing vegetables, milk and food on the shelves? The thermostat, sensor, damper or control is at fault. Repaired at your home in Harare, 24 hours. Call 0782 886 252.",
    h1: "Fridge Freezing Food on the Shelves",
    lead:
      "Frozen lettuce, slushy milk and cracked eggs mean the fridge section is running well below the 3 to 5 degrees it should hold. The fridge is working too well, not too little, and the fault is nearly always in the control rather than the cooling system. Harare Fridge Repairs tests the thermostat, sensors and damper and puts it right at your home.",
    points: [
      "Mechanical thermostats stuck closed or wrongly set",
      "Electronic sensors reading warm when the fridge is cold",
      "Dampers stuck open between freezer and fridge",
      "Food placed against the back wall or the cold air outlet",
    ],
    intro: [
      "A fridge freezes food when the compressor keeps running after the cabinet has reached temperature. On an older fridge that means the mechanical thermostat has either been turned too cold, often by accident, or has failed with its contacts stuck closed so it never switches the compressor off. On an electronic fridge it usually means a temperature sensor has drifted and is telling the control board the cabinet is warmer than it is, so the board keeps cooling.",
      "On frost free double door and combi fridges there is a third cause: the damper that regulates cold air flowing from the freezer into the fridge has stuck open, flooding the fridge with freezer air. Food at the back of the top shelf, nearest the outlet, freezes first. A fourth, simpler cause is food pushed hard against the back wall of the fridge, where the evaporator sits, or placed directly under the cold air vent.",
      "Our technician checks the setting, measures the actual cabinet temperature against what the control thinks it is, tests the thermostat switching point or the sensor resistance, and checks the damper. The repair is a thermostat, a sensor, a damper motor or occasionally a control board, and it is done on site.",
    ],
    causes: [
      { title: "Thermostat set too cold", text: "The dial has been turned towards maximum, sometimes by a child or while cleaning. The simplest fix of all." },
      { title: "Thermostat contacts stuck closed", text: "A mechanical thermostat that never switches off. The compressor runs continuously and everything freezes. Replaced on site." },
      { title: "Sensor drift on an electronic fridge", text: "The fridge sensor reads too warm, the board keeps cooling. Confirmed by comparing the sensor resistance with the manufacturer's chart." },
      { title: "Damper stuck open", text: "On frost free fridges the damper between freezer and fridge has jammed open, so freezer air pours in. Food near the outlet freezes first." },
      { title: "Food against the back wall or vent", text: "Items touching the cold back plate or placed in front of the air outlet freeze even when the fridge is working correctly." },
      { title: "Gasket leaking on the freezer section", text: "Warm air into the freezer makes the control run longer to hold freezer temperature, over cooling the fridge on single control models." },
    ],
    checks: [
      "Where is the thermostat dial set? Try the middle position for a day.",
      "Is the frozen food at the back of the top shelf or against the back wall?",
      "Does the compressor ever switch off, or does it run all day?",
      "Is the problem new, or has it crept in as the fridge got older?",
      "Is the fridge in a cold room or garage where winter temperatures confuse a single thermostat?",
    ],
    dontDo: [
      "Do not turn the dial to the warmest setting and leave it there; the freezer may thaw.",
      "Do not pack food against the back wall of the fridge section.",
      "Do not assume the fridge needs gas; too much cooling is never a gas problem.",
    ],
    faqs: [
      {
        question: "Why does my fridge freeze vegetables in the crisper drawer?",
        answer:
          "Cold air sinks, so when the fridge runs too cold the drawers at the bottom freeze first. The thermostat or sensor is holding the fridge too cold, or the damper is stuck open. All three are repairable on site.",
      },
      {
        question: "Is a fridge that freezes food wasting electricity?",
        answer:
          "Yes. A compressor that never switches off uses far more power than one that cycles, and it wears out sooner. The repair pays for itself.",
      },
      {
        question: "Can you fix a fridge that freezes food in one visit?",
        answer:
          "Usually. Thermostats, sensors and damper motors are carried on the vehicle, and the fridge is tested before we leave.",
      },
    ],
    related: ["fridge-running-constantly", "fridge-not-cooling", "ice-build-up", "fridge-door-seal-problems"],
    services: [
      { href: "/thermostat-replacement", label: "Thermostat replacement" },
      { href: "/fridge-repairs", label: "Fridge repairs" },
      { href: "/combi-fridge-repairs", label: "Combi fridge repairs" },
      { href: "/french-door-fridge-repairs", label: "French door fridge repairs" },
    ],
    picture: "temperature",
    pictureAlt: "Technician measuring the temperature of a fridge that is freezing food",
  },

  {
    slug: "fridge-not-switching-on",
    name: "Fridge not switching on",
    question: "Why is my fridge not switching on?",
    cardText: "No light, no hum, nothing. Usually after a power cut or surge.",
    title: "Fridge Not Switching On? Dead Fridge Repair in Harare, 24/7",
    description:
      "Fridge completely dead with no light or sound, often after load shedding or a power surge? Relay, thermostat, board and compressor faults tested and repaired at home in Harare. Call 0782 886 252.",
    h1: "Fridge Not Switching On After a Power Cut",
    lead:
      "A fridge that is completely silent, with no light and no hum, has an electrical fault, and in Harare it has usually been caused by the power going off and coming back on. The good news is that a dead fridge is often a cheap repair. Harare Fridge Repairs tests the plug, the control, the relay and the compressor at your home and gets it running again, any time of day or night.",
    points: [
      "Blown plug fuses, damaged cords and tripped overloads",
      "Thermostats and control boards damaged by surges",
      "Start relays and overloads that stop the compressor starting",
      "Compressor winding tests before anything is condemned",
    ],
    intro: [
      "When power returns after load shedding it often returns badly: a brief spike, a low voltage brown out, or several on and off cycles in a minute. Fridges take this worse than most appliances because the compressor tries to start against pressure each time. The results we see are blown plug fuses, burnt start relays, tripped overloads that have failed, thermostats with burnt contacts and, on electronic fridges, control boards with a blown fuse or a damaged power supply.",
      "There is an important distinction between a fridge with no light and no sound, which has no power reaching it or has a failed control, and a fridge with the light on but no compressor sound, which has power but a failed thermostat, relay or compressor. Telling us which you have when you call helps us arrive with the right parts.",
      "The technician works from the wall socket inward: socket, plug, cord, thermostat or board, relay and overload, then the compressor windings. Each step is tested with a meter, and the compressor is only condemned if its windings are open, shorted or earthed, or it draws locked rotor current on a known good relay.",
    ],
    causes: [
      { title: "No power at the socket or plug", text: "Tripped earth leakage, a blown plug fuse, a damaged cord or a loose plug. Checked first because it is the cheapest fix." },
      { title: "Thermostat failed open", text: "On a mechanical fridge the thermostat has lost its charge or burnt its contacts, so it never calls for cooling. Light on, compressor silent." },
      { title: "Start relay or overload failed", text: "The compressor is fine but cannot start. Often there is a hum and click; sometimes complete silence. The most common dead fridge repair." },
      { title: "Control board fuse or power supply", text: "On electronic fridges a surge blows the board fuse or damages the power supply. No display, no light. Often repairable without a new board." },
      { title: "Compressor windings open or earthed", text: "The compressor itself has failed. Confirmed with a resistance test and an insulation test, never assumed." },
      { title: "Door switch or light circuit only", text: "If the compressor runs but the light is out, only the lamp or door switch has failed, and the fridge is still working." },
    ],
    checks: [
      "Is the earth leakage or circuit breaker tripped? Does another appliance work in the same socket?",
      "Is the plug warm, discoloured or smelling of burning?",
      "Is the interior light on when you open the door?",
      "Can you hear any hum or click from the back when the fridge is first plugged in?",
      "Did the fridge stop at the same time as a power cut or when the power came back?",
    ],
    dontDo: [
      "Do not keep plugging in a fridge that trips the earth leakage; there is a fault to earth that needs finding.",
      "Do not replace the plug fuse with a higher rating or a piece of wire.",
      "Do not open the compressor terminal cover yourself; the terminals can be live and the relay can be hot.",
    ],
    faqs: [
      {
        question: "My fridge died when the power came back after load shedding. Is it finished?",
        answer:
          "Probably not. In most cases a surge has taken out the start relay, the overload, a fuse or the control board, all of which are replaceable. The compressor is tested before any decision is made.",
      },
      {
        question: "The light is on but the fridge is silent. What has failed?",
        answer:
          "Power is reaching the fridge, so the thermostat, relay, overload or compressor has failed. The thermostat and relay are the most likely and the cheapest.",
      },
      {
        question: "Should I use a surge protector on my fridge?",
        answer:
          "Yes, especially on an electronic fridge. A good surge protector or a voltage protection plug costs a fraction of a control board and we can fit one during the visit.",
      },
    ],
    related: ["fridge-compressor-problems", "fridge-making-noise", "fridge-not-cooling", "fridge-running-constantly"],
    services: [
      { href: "/fridge-repairs", label: "Fridge repairs" },
      { href: "/compressor-replacement", label: "Compressor replacement" },
      { href: "/thermostat-replacement", label: "Thermostat replacement" },
      { href: "/24-hour-fridge-repairs", label: "24 hour fridge repairs" },
    ],
    picture: "controlBoard",
    pictureAlt: "Technician testing a dead fridge with a multimeter",
  },

  {
    slug: "freezer-not-freezing",
    name: "Freezer not freezing",
    question: "Why is my freezer not freezing?",
    cardText: "The freezer runs but the meat is soft. Chest and upright freezers alike.",
    title: "Freezer Not Freezing? Causes & Emergency Repair in Harare",
    description:
      "Freezer running but not freezing? From thermostats and gas leaks to failed defrost systems and lid seals, learn the causes and get your chest or upright freezer repaired at home in Harare, 24/7. Call 0782 886 252.",
    h1: "Freezer Not Freezing: Causes and Fast Repair",
    lead:
      "A freezer that runs but leaves the meat soft is losing you money by the hour. Whether it is a chest freezer in the garage, an upright in the kitchen or the freezer section of a fridge-freezer, the fault can be found quickly from the frost pattern and a few measurements. Harare Fridge Repairs attends freezers across Harare 24 hours a day and gets them freezing again.",
    points: [
      "Chest freezers, upright freezers and fridge-freezer sections",
      "Thermostats, lid seals, relays and compressors tested on site",
      "Refrigerant leaks confirmed with gauges before any regas",
      "Priority callouts when stock is at risk",
    ],
    intro: [
      "A freezer should hold minus 18 degrees. When it drifts up to minus 5 or above, food softens and spoils, and the reason depends on what kind of freezer it is. In a chest freezer the frost pattern on the inner walls is the best clue: even frost on all walls with a soft load points to the thermostat, a weak compressor or a lid seal; frost only on the top third of the walls points to a low gas charge from a leak; no frost at all with a running compressor points to an empty system or a compressor that is not pumping.",
      "In a frost free upright freezer or the freezer section of a frost free fridge-freezer, the most common cause is a failed defrost system that has let the evaporator ice into a block so the fan cannot move cold air. The bottom drawer near the evaporator stays frozen while the upper drawers soften. On manual defrost uprights and fridge-freezers the thermostat, relay and gasket are the usual suspects.",
      "Across all types, Harare's power problems add tired relays and overloads that let the compressor run only intermittently, and dusty condensers that make the compressor run hot and cut out on its overload in the afternoon. We test each of these in a set order and quote once the fault is certain.",
    ],
    causes: [
      { title: "Thermostat not calling for full cooling", text: "A worn thermostat switches off too early. The freezer runs in short cycles and never reaches minus 18." },
      { title: "Low refrigerant charge from a leak", text: "Frost only near the top of a chest freezer, or only on part of an evaporator, with the compressor running hot and non stop." },
      { title: "Compressor weak or not pumping", text: "The compressor runs but cannot build pressure. Confirmed with gauges. No amount of gas will help." },
      { title: "Defrost system failed on a frost free freezer", text: "Evaporator iced into a block, fan blowing against ice, top drawers soft while the bottom stays frozen." },
      { title: "Lid or door gasket not sealing", text: "Warm, humid air pours in, frost builds thickly around the opening, and the compressor cannot keep up." },
      { title: "Overload tripping from a hot compressor", text: "A dusty condenser or no airflow around the freezer makes the compressor cut out repeatedly, especially in the afternoon." },
      { title: "Intermittent relay", text: "The compressor starts only sometimes, so the freezer runs for a few hours then sits idle. Food thaws and refreezes." },
    ],
    checks: [
      "Open the lid or door: is the frost even on all the walls, only at the top, or missing altogether?",
      "Is the compressor running, and is it very hot to touch?",
      "Does the lid or door close flat, and is there frost built up around the opening?",
      "Is the freezer in a hot corner, against a wall, or covered with boxes?",
      "On an upright, are the bottom drawers frozen and the top ones soft?",
    ],
    dontDo: [
      "Do not chip ice off the walls or the evaporator with anything sharp.",
      "Do not refreeze meat that has fully thawed and warmed.",
      "Do not keep the lid open to check the food every few minutes; it loses cold each time.",
    ],
    faqs: [
      {
        question: "My chest freezer is cold at the top and warm at the bottom. Why?",
        answer:
          "That frost pattern means the refrigerant charge is low, which means there is a leak. We find the leak, repair it, replace the filter drier, pull a vacuum and recharge by weight.",
      },
      {
        question: "Why are the top drawers of my upright freezer soft?",
        answer:
          "The evaporator at the back has iced over because the defrost heater, sensor or timer failed, so the fan cannot push cold air up. Clearing the ice helps for a few days; the failed part needs replacing.",
      },
      {
        question: "How quickly can you get to a freezer full of meat?",
        answer:
          "We prioritise freezers with stock at risk and work 24 hours a day across Harare. Keep the lid closed until the technician arrives.",
      },
      {
        question: "Can a freezer that is not freezing be repaired with the food inside?",
        answer:
          "For most electrical repairs, yes. For a regas or compressor replacement the freezer is off for a few hours and a closed chest freezer holds its cold well in that time.",
      },
    ],
    related: ["ice-build-up", "fridge-compressor-problems", "fridge-not-cooling", "fridge-running-constantly"],
    services: [
      { href: "/freezer-repairs", label: "Freezer repairs" },
      { href: "/chest-freezer-repairs", label: "Chest freezer repairs" },
      { href: "/upright-freezer-repairs", label: "Upright freezer repairs" },
      { href: "/fridge-regassing", label: "Regassing" },
    ],
    picture: "freezerNotFreezing",
    pictureAlt: "Technician checking a freezer that is not freezing",
  },

  {
    slug: "ice-build-up",
    name: "Ice build up",
    question: "Why is ice building up in my fridge or freezer?",
    cardText: "Thick frost on the walls or a sheet of ice behind the back panel, coming back after every defrost.",
    title: "Ice Build Up in Fridge or Freezer? Causes & Repair in Harare",
    description:
      "Ice building up on the freezer walls or behind the back panel of a frost free fridge? Door seals, defrost heaters, timers and sensors repaired at your home in Harare so the ice does not come back. Call 0782 886 252.",
    h1: "Ice Build Up in Your Fridge or Freezer",
    lead:
      "A little frost on a manual defrost freezer is normal. A thick coat that returns within a week, a sheet of ice on the back wall of a frost free fridge, or ice around the door are not. They mean humid air is getting in or the defrost system has stopped doing its job. Harare Fridge Repairs finds which and fixes it at your home so the ice stays gone.",
    points: [
      "Frost free fridges: defrost heaters, timers, bimetals and sensors",
      "Manual defrost freezers: lid and door gaskets, hinges and alignment",
      "Frozen drains and ice sheets in freezer drawers",
      "Ice cleared properly, never chipped",
    ],
    intro: [
      "Ice forms when moisture in the air meets a surface below freezing. In a manual defrost freezer that is expected and the frost is cleared every few months. When it builds much faster than that, warm humid air is leaking in through a gasket that has hardened or torn, a lid that no longer sits flat, a door that is out of alignment, or a door left ajar by packed stock. Harare's rainy season humidity makes this worse.",
      "In a frost free fridge or freezer there should be no visible ice at all, because a heater melts the frost off the evaporator several times a day. When the defrost heater, the defrost timer, the bimetal thermostat or the defrost sensor fails, the frost is never cleared. It grows into a block behind the back panel, the fan loses its air path and the fridge section warms. Owners often notice the fan noise or the warm fridge before they see the ice.",
      "Clearing the ice is not the repair. The repair is replacing the failed defrost part or the gasket. We clear the ice properly, using time and warmth rather than tools, test every defrost component, and replace the one that has failed.",
    ],
    causes: [
      { title: "Defrost heater failed", text: "The heater element under the evaporator is open circuit, so frost is never melted on a frost free fridge." },
      { title: "Defrost timer, bimetal or sensor failed", text: "The heater is fine but never gets switched on because the timer, bimetal thermostat or sensor controlling it has failed." },
      { title: "Door or lid gasket not sealing", text: "Humid air leaks in continuously. Frost is heaviest near the leak, often one corner or along the hinge side." },
      { title: "Door out of alignment or left ajar", text: "A sagging hinge, an overloaded door shelf or stock pushing the door open lets air in all day." },
      { title: "Frozen drain", text: "A failed drain heater or a blocked drain on a freezer leaves melt water to refreeze as a sheet in the bottom drawer." },
      { title: "Fridge in a humid or hot location", text: "A freezer in a damp outbuilding or a fridge next to a stove frosts faster than one in a dry kitchen." },
    ],
    checks: [
      "Is the ice thickest at one corner or edge of the door, which points to a gasket leak there?",
      "On a frost free fridge, is the back wall of the freezer section covered in a sheet of ice?",
      "Does a strip of paper closed in the door pull out easily anywhere around the gasket?",
      "Does the door swing shut on its own when opened a few centimetres?",
      "Is the ice coming back within days of a full defrost?",
    ],
    dontDo: [
      "Never chip ice with a knife, screwdriver or ice pick; the evaporator tubing is directly underneath.",
      "Do not use a hair dryer close to plastic panels or leave a heater running inside the cabinet.",
      "Do not keep defrosting a frost free fridge every month; it has a failed part that needs replacing.",
    ],
    faqs: [
      {
        question: "Why does ice keep building up in my frost free fridge?",
        answer:
          "The defrost system has failed. The heater, timer, bimetal or sensor is no longer clearing the frost, so it grows into a block. We test each part and replace the one at fault, then clear the ice properly.",
      },
      {
        question: "Why does my chest freezer frost up so fast?",
        answer:
          "Humid air is getting in past the lid gasket or because the lid is not sitting flat. A new gasket or a hinge adjustment usually solves it.",
      },
      {
        question: "Can I defrost the fridge myself before you come?",
        answer:
          "Yes, switch it off, leave the door open and let the ice melt naturally with towels on the floor. Do not chip at it. The technician will still need to find and replace the failed part.",
      },
    ],
    related: ["freezer-not-freezing", "fridge-door-seal-problems", "fridge-not-cooling", "fridge-leaking-water"],
    services: [
      { href: "/fridge-repairs", label: "Fridge repairs" },
      { href: "/freezer-repairs", label: "Freezer repairs" },
      { href: "/double-door-fridge-repairs", label: "Double door fridge repairs" },
      { href: "/upright-freezer-repairs", label: "Upright freezer repairs" },
    ],
    picture: "freezerIce",
    pictureAlt: "Technician checking a freezer door seal that is causing ice build up",
  },

  {
    slug: "fridge-compressor-problems",
    name: "Fridge compressor problems",
    question: "How do I know if my fridge compressor is faulty?",
    cardText: "Hum and click, hot compressor, or a compressor that runs but does not cool.",
    title: "Fridge Compressor Problems: Symptoms, Tests & Repair in Harare",
    description:
      "Fridge compressor humming, clicking, overheating or running without cooling? Learn the symptoms of relay, overload and compressor faults and get a proper test and repair at home in Harare. Call 0782 886 252.",
    h1: "Fridge Compressor Problems and How We Test Them",
    lead:
      "The compressor is the most expensive part of a fridge and the most often blamed for faults it did not cause. A fridge that hums and clicks, or runs without cooling, may have a failed compressor, or it may have a relay, overload, capacitor or gas problem that costs a fraction of the price. Harare Fridge Repairs tests properly before anyone talks about a new compressor.",
    points: [
      "Start relays, overloads and run capacitors, the usual real culprits",
      "Winding resistance, insulation and current tests on the compressor",
      "Pumping tests with gauges for compressors that run but do not cool",
      "Honest advice on repair versus replacement",
    ],
    intro: [
      "A hermetic fridge compressor is a motor and a pump sealed in a steel shell, started by a relay and protected by an overload. The parts outside the shell, the relay, overload and on some models a run capacitor, fail far more often than the compressor itself, and they produce exactly the same symptom: a hum, a click and silence. A technician without a meter will tell you the compressor has gone. A technician with one will test it in a few minutes.",
      "There are three ways a compressor really fails. The motor windings go open circuit or short to earth, usually after a surge or years of overheating; the motor seizes mechanically and draws locked rotor current until the overload trips; or the pump wears out so the compressor runs quietly but cannot build pressure, and the fridge never gets cold. Each is confirmed with a specific test: resistance across the three terminals, an insulation test to the shell, a current reading on a known good relay, and gauges on the system.",
      "In Harare the causes behind a genuine compressor failure are load shedding restarts, surges when power returns, condensers blocked with dust so the compressor runs hot, and running for months on a low gas charge after an unrepaired leak. When we replace a compressor we also address the cause, so the new one does not go the same way.",
    ],
    causes: [
      { title: "Start relay failed", text: "The compressor hums for a few seconds, clicks off, and tries again a minute later. The cheapest and most common fix." },
      { title: "Overload protector failed or tripping", text: "The overload has worn out, or is doing its job because the compressor is overheating from a blocked condenser or a seized rotor." },
      { title: "Run capacitor failed", text: "On compressors that use one, a failed capacitor stops the motor starting or makes it draw high current and run hot." },
      { title: "Windings open or earthed", text: "The compressor motor has failed. An earthed winding often trips the earth leakage. Confirmed with a meter." },
      { title: "Rotor seized", text: "The motor is fine but cannot turn. Draws locked rotor current and trips the overload within seconds. Sometimes freed, usually replaced." },
      { title: "Compressor not pumping", text: "Runs quietly, draws normal current, but builds no pressure. The fridge never cools. Confirmed with gauges and replaced." },
    ],
    checks: [
      "Is there a hum followed by a click every minute or two?",
      "Is the compressor shell too hot to keep your hand on?",
      "Does the earth leakage trip when the fridge tries to start?",
      "Is the compressor running quietly and continuously while the fridge stays warm?",
      "Is the condenser at the back thick with dust?",
    ],
    dontDo: [
      "Do not accept a compressor replacement quote from anyone who has not tested the relay and the windings.",
      "Do not tap or hit the compressor to make it start.",
      "Do not keep running a compressor that trips on overload every minute.",
    ],
    faqs: [
      {
        question: "My fridge hums and clicks. Is the compressor dead?",
        answer:
          "Not necessarily. A failed start relay or overload produces exactly that symptom and is a quick, inexpensive repair. We test the relay, the overload and the compressor windings before deciding.",
      },
      {
        question: "How much does a new fridge compressor cost in Harare?",
        answer:
          "It depends on the compressor size, type and refrigerant, so we quote after testing. On a good fridge or any commercial unit it is usually well worth doing; on an old, rusted cabinet we will tell you if it is not.",
      },
      {
        question: "Can a compressor be repaired rather than replaced?",
        answer:
          "The sealed compressor cannot be rebuilt economically, but the relay, overload, capacitor and wiring around it can all be repaired, and they are the fault most of the time.",
      },
    ],
    related: ["fridge-not-switching-on", "fridge-making-noise", "fridge-not-cooling", "fridge-running-constantly"],
    services: [
      { href: "/compressor-replacement", label: "Compressor replacement" },
      { href: "/fridge-repairs", label: "Fridge repairs" },
      { href: "/fridge-regassing", label: "Fridge regassing" },
      { href: "/fridge-repair-or-replace", label: "Repair or replace?" },
    ],
    picture: "compressor",
    pictureAlt: "Technician connecting gauges to test a fridge compressor",
  },

  {
    slug: "fridge-running-constantly",
    name: "Fridge running constantly",
    question: "Why does my fridge run all the time?",
    cardText: "The compressor never switches off, the sides are hot and the bill is climbing.",
    title: "Fridge Running Constantly? Why It Never Switches Off",
    description:
      "Fridge compressor running all day and never switching off? From gaskets and dirty condensers to thermostats and gas leaks, learn the causes and get it repaired at home in Harare. Call 0782 886 252.",
    h1: "Fridge Running Constantly and Never Switching Off",
    lead:
      "A healthy fridge runs for a while, reaches temperature, and rests. One that runs from morning to night, with the sides hot to touch and the electricity bill climbing, is either unable to reach temperature or unable to tell that it has. Both wear out the compressor fast. Harare Fridge Repairs finds the cause at your home and stops the fridge working itself to death.",
    points: [
      "Dirty condensers and poor airflow around the fridge",
      "Door gaskets letting warm air in all day",
      "Thermostats and sensors that never switch off",
      "Low gas charges and weak compressors confirmed with gauges",
    ],
    intro: [
      "A fridge runs constantly for one of two reasons. Either it cannot reach the set temperature, so the thermostat never switches it off, or it reaches temperature but the thermostat or sensor does not notice. The first group includes a gasket that is letting warm air in, a condenser so dusty that the fridge cannot shed heat, a fridge jammed against a wall with no airflow, a low gas charge, an iced evaporator on a frost free model, and a compressor that has lost its pumping capacity. The second group is a thermostat with contacts stuck closed or a sensor that reads warm.",
      "You can often tell which group you are in from the food. If the fridge is running constantly and everything is freezing, the control has failed. If it is running constantly and the food is only just cold, or warm, the fridge is struggling to cool. Hot cabinet sides are normal on many fridges, where the condenser is built into the walls, but sides that are too hot to touch comfortably for long mean the fridge is working very hard.",
      "Our technician measures the cabinet temperature, the compressor running current, the condenser condition and, if needed, the system pressures, and repairs the actual cause. Often that is a clean condenser and a new gasket, the two cheapest repairs a fridge can have.",
    ],
    causes: [
      { title: "Condenser blocked with dust", text: "The coils behind or under the fridge are furred up, so heat cannot escape and the fridge cools slowly and runs continuously." },
      { title: "No airflow around the fridge", text: "Pushed hard against a wall or boxed into a cupboard, the fridge recycles its own hot air." },
      { title: "Gasket letting warm air in", text: "A tired door seal means the fridge is cooling the kitchen. Also causes frost and condensation." },
      { title: "Thermostat stuck closed or sensor drift", text: "The fridge reaches temperature but the control never switches the compressor off. Food freezes." },
      { title: "Low refrigerant charge", text: "A leak has left the system short of gas. The compressor runs hot and non stop and only part of the evaporator frosts." },
      { title: "Evaporator iced over", text: "On a frost free fridge, ice blocks the airflow so the cabinet never reaches temperature despite constant running." },
      { title: "Compressor worn", text: "The compressor runs but pumps weakly. Confirmed with gauges and a current reading." },
    ],
    checks: [
      "Is the food too cold, or not cold enough?",
      "Are the condenser coils at the back visibly dusty?",
      "Is there at least a hand's width of space behind and above the fridge?",
      "Does a strip of paper closed in the door gasket pull out easily?",
      "Is the fridge in direct sun or next to a stove?",
    ],
    dontDo: [
      "Do not ignore it; a compressor that never rests fails early and the electricity cost adds up.",
      "Do not turn the thermostat to its warmest setting as a fix; if the food is warm it will get warmer.",
      "Do not spray water on a dusty condenser while the fridge is plugged in.",
    ],
    faqs: [
      {
        question: "Is it normal for a fridge to run all the time?",
        answer:
          "No. A fridge in good condition cycles on and off. Running for hours without stopping means it is either struggling to cool or its control has failed, and both are worth repairing before the compressor fails.",
      },
      {
        question: "Why are the sides of my fridge so hot?",
        answer:
          "Many fridges have the condenser built into the side walls, so warm sides are normal. Sides that are uncomfortably hot, together with constant running, mean the fridge is working too hard, often because of a dirty condenser or a gasket leak.",
      },
      {
        question: "Will cleaning the condenser fix a fridge that runs constantly?",
        answer:
          "Often it helps a great deal, and it is the first thing we do. If the fridge still runs constantly afterwards, the gasket, thermostat, gas charge or compressor is tested next.",
      },
    ],
    related: ["fridge-freezing-food", "fridge-not-cooling", "fridge-door-seal-problems", "fridge-compressor-problems"],
    services: [
      { href: "/fridge-repairs", label: "Fridge repairs" },
      { href: "/thermostat-replacement", label: "Thermostat replacement" },
      { href: "/fridge-regassing", label: "Fridge regassing" },
      { href: "/tips", label: "Fridge care tips" },
    ],
    picture: "condenser",
    pictureAlt: "Technician working at the back of a fridge that runs constantly",
  },

  {
    slug: "fridge-door-seal-problems",
    name: "Fridge door seal problems",
    question: "How do I know if my fridge door seal is faulty?",
    cardText: "Torn, hardened or shrunken gaskets that let warm air in and cause frost, sweating and high bills.",
    title: "Fridge Door Seal Problems? Gasket Replacement in Harare",
    description:
      "Fridge door not sealing, gasket torn or hardened, door sweating or frost forming at the edges? Door seal and hinge repairs at your home in Harare for all fridge and freezer brands. Call 0782 886 252.",
    h1: "Fridge Door Seal Problems and Gasket Replacement",
    lead:
      "The door gasket is a cheap rubber strip, and when it fails it causes expensive symptoms: frost, condensation, a fridge that runs all day, warm food and eventually a worn out compressor. Harare Fridge Repairs tests door seals, replaces gaskets and adjusts hinges and doors on every brand of fridge and freezer, at your home across Harare.",
    points: [
      "Magnetic gaskets for fridges, freezers and chest freezer lids",
      "Hinge adjustment, door alignment and sagging doors",
      "Gaskets for Defy, KIC, Samsung, LG, Hisense, Bosch, Smeg and more",
      "Fitted and tested on site",
    ],
    intro: [
      "A fridge door seal is a hollow rubber gasket with a magnetic strip inside that pulls the door onto the cabinet. Over the years the rubber hardens, shrinks at the corners, tears at the hinge side where it is stretched every time the door opens, and gets coated with grime that stops it sealing. Once it leaks, warm humid air flows into the cabinet all day, and the symptoms follow: frost near the leak, condensation and mould inside, water on the floor, sweating on the outside of the door, and a compressor that never rests.",
      "Not every poor seal is the gasket's fault. A door that has sagged on its hinges, a fridge that is not level so the door does not swing shut, an overloaded door shelf, or a drawer stopping the door from closing all produce the same leak. The paper test shows where the leak is: close a strip of paper in the door and pull; if it slides out freely, the seal is not gripping at that point.",
      "Gaskets are specific to each model, and a generic gasket rarely seals properly on a curved or unusual door. We identify the correct gasket from the model number, fit it so it sits flat with the magnet engaged all round, and adjust the door and hinges so it closes on its own.",
    ],
    causes: [
      { title: "Gasket hardened or shrunk", text: "Years of opening and warm kitchens make the rubber stiff and short, so it no longer reaches the cabinet at the corners." },
      { title: "Gasket torn at the hinge side", text: "The gasket is stretched every time the door opens and eventually splits, usually near the top or bottom hinge." },
      { title: "Door sagging on its hinges", text: "A heavy, overloaded door drops over time and the gasket no longer meets the cabinet evenly." },
      { title: "Fridge not level", text: "Tilted forward, the door swings open instead of shut and is often left slightly ajar." },
      { title: "Dirt and grease on the seal", text: "A grimy gasket cannot grip. Sometimes a thorough clean is all it needs." },
      { title: "Obstruction inside", text: "A drawer not fully in, a shelf pushed out or a bottle on the door stops the door from closing flat." },
    ],
    checks: [
      "Close a strip of paper in the door at several points around the gasket and pull. Does it slide out freely anywhere?",
      "Is there frost, sweating or mould concentrated at one corner or along one edge?",
      "Does the door swing shut on its own from a few centimetres open?",
      "Is the gasket torn, cracked, or pulled away from its channel?",
      "Is the outside of the door wet on humid days?",
    ],
    dontDo: [
      "Do not glue a gasket back into its channel with household adhesive; it will not seal and makes the proper repair harder.",
      "Do not try to stretch a gasket with a heater or boiling water; it rarely lasts.",
      "Do not fit a generic gasket to a curved or built in door and expect it to seal.",
    ],
    faqs: [
      {
        question: "How do I test my fridge door seal?",
        answer:
          "Close a strip of paper in the door and pull it. It should resist. Repeat around the whole door. Anywhere it slides out easily, the seal is leaking. Frost, sweating or mould at one spot confirms it.",
      },
      {
        question: "Can a fridge gasket be replaced on any fridge?",
        answer:
          "Yes. Gaskets are available for all the common brands in Zimbabwe, and we fit them on site. Some older or unusual doors take a few days to source, and we tell you up front.",
      },
      {
        question: "Why does a bad door seal matter so much?",
        answer:
          "Because it makes the fridge run continuously, which costs electricity and shortens the compressor's life. A gasket is one of the cheapest repairs a fridge can have and one of the most worthwhile.",
      },
    ],
    related: ["ice-build-up", "fridge-running-constantly", "fridge-leaking-water", "fridge-not-cooling"],
    services: [
      { href: "/fridge-repairs", label: "Fridge repairs" },
      { href: "/chest-freezer-repairs", label: "Chest freezer repairs" },
      { href: "/smeg-fridge-repairs", label: "Smeg fridge repairs" },
      { href: "/tips", label: "Fridge care tips" },
    ],
    picture: "doorSeal",
    pictureAlt: "Technician inspecting a fridge door gasket in a Harare kitchen",
  },
]

export function getProblem(slug: string) {
  return problems.find((problem) => problem.slug === slug)
}

export function problemLink(problem: ProblemRecord): LinkItem {
  return { href: `/problems/${problem.slug}`, label: problem.name, text: problem.cardText }
}

export function buildProblemPage(problem: ProblemRecord): ContentPage {
  const related = problem.related
    .map((slug) => getProblem(slug))
    .filter((item): item is ProblemRecord => Boolean(item))
    .map(problemLink)

  const sections: ContentSection[] = [
    { kind: "text", heading: problem.question, paragraphs: problem.intro },
    {
      kind: "steps",
      heading: `Common causes of a ${problem.name.toLowerCase()}`,
      intro: "These are the faults behind this symptom, roughly in the order we find them in Harare.",
      items: problem.causes,
    },
    {
      kind: "list",
      heading: "Quick checks before you call",
      intro: "None of these need tools, and the answers help us arrive with the right parts.",
      items: problem.checks,
      columns: 1,
    },
    {
      kind: "feature",
      eyebrow: "Please do not",
      heading: "Things that make it worse",
      paragraphs: problem.dontDo,
      picture: problem.picture,
      pictureAlt: problem.pictureAlt,
      reverse: true,
    },
    {
      kind: "cards",
      heading: "How we fix it",
      intro: "The services that deal with this problem, each explained on its own page.",
      items: problem.services,
      columns: 4,
    },
    {
      kind: "chips",
      heading: "Related fridge problems",
      items: [
        ...related,
        { href: "/problems", label: "All fridge problems" },
        ...rotate(
          [
            { href: "/areas", label: "Areas we cover" },
            { href: "/brands", label: "Brands we repair" },
            { href: "/refrigerator-repairs", label: "Repairs by fridge type" },
          ],
          problem.slug,
        ),
      ],
    },
  ]

  return {
    path: `/problems/${problem.slug}`,
    title: problem.title,
    description: problem.description,
    eyebrow: "Fridge problems",
    h1: problem.h1,
    lead: problem.lead,
    points: problem.points,
    picture: problem.picture,
    pictureAlt: problem.pictureAlt,
    crumbs: [
      { name: "Fridge problems", path: "/problems" },
      { name: problem.name, path: `/problems/${problem.slug}` },
    ],
    sections,
    faqs: problem.faqs,
    faqHeading: `${problem.name}: your questions answered`,
    cta: {
      title: `${problem.name}? We can be there today.`,
      text: "Call 0782 886 252 or WhatsApp a photo of the fault with your suburb. Harare Fridge Repairs attends homes and businesses across Harare, 24 hours a day.",
    },
    whatsappMessage: `Hi Harare Fridge Repairs, my fridge problem is: ${problem.name.toLowerCase()}. My suburb is: ___`,
    schema: {
      serviceName: `${problem.name} repair in Harare`,
      serviceDescription: `Diagnosis and repair of a ${problem.name.toLowerCase()} fault at your address in Harare, Zimbabwe.`,
      serviceType: "Refrigerator repair",
    },
  }
}
