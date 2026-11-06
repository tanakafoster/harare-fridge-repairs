import type { ProblemRecord } from "./problems"

/** Problem pages added from the SEO gap review (November 2026). */
export const moreProblems: ProblemRecord[] = [
  {
    slug: "freezer-working-fridge-not-cooling",
    name: "Freezer working but fridge not cooling",
    question: "Why is my freezer cold but my fridge warm?",
    cardText: "Ice cream still frozen, milk going warm. A classic frost free fridge fault.",
    title: "Freezer Working But Fridge Not Cooling? Fix in Harare",
    description:
      "Freezer cold but the fridge section warm? On frost free fridges this is usually an iced evaporator, a failed fan or a stuck damper, not gas. Causes, checks and same day repair in Harare. Call 0782 886 252.",
    h1: "Freezer Working but Fridge Not Cooling?",
    lead:
      "If the freezer is still cold but the fridge below or beside it is warm, the good news is that your compressor and gas are probably fine. The cold is being made, it is just not reaching the fridge. Harare Fridge Repairs finds which part has stopped the airflow and repairs it at your address.",
    points: [
      "Usually an airflow fault, not a gas or compressor fault",
      "Iced evaporator, failed fan, stuck damper or blocked vents",
      "Repaired on site without regassing in most cases",
      "Frost free, combi, side by side and French door fridges",
    ],
    intro: [
      "Most modern fridges in Harare are frost free. They have one evaporator, usually hidden behind a panel in the freezer, and a fan that blows cold air from it into the freezer and, through a duct and a damper, into the fridge section. When the freezer is cold but the fridge is not, something in that air path has failed.",
      "The most common cause is a failed defrost system. The evaporator is meant to be warmed briefly several times a day to melt its frost. When the heater, the defrost sensor, the bimetal or the timer fails, frost builds into solid ice, the duct to the fridge section blocks first, and the freezer keeps working for a while longer. Left alone, the freezer eventually warms up too.",
      "The next most common causes are an evaporator fan that has stopped or slowed, a damper stuck closed, and vents blocked by food packed against the back wall. On fridges with two evaporators, such as some side by side models, a fault in the fridge side evaporator, its fan or its sensor gives the same symptom.",
    ],
    causes: [
      { title: "Defrost system failed", text: "The heater, sensor, bimetal or timer has failed, the evaporator has iced solid and the air duct to the fridge is blocked." },
      { title: "Evaporator fan stopped", text: "No fan, no cold air into the fridge. Often there was a buzzing or ticking from the freezer before it stopped." },
      { title: "Damper stuck closed", text: "The flap that lets cold air into the fridge is stuck or its motor has failed, so the fridge never receives cold air." },
      { title: "Vents blocked by food", text: "Food packed against the vents at the back of the fridge or freezer stops the air reaching the fridge section." },
      { title: "Fridge sensor or control fault", text: "The control thinks the fridge is cold enough, so it never sends cold air there. Common after power surges on electronic fridges." },
      { title: "Door seal on the fridge side", text: "A torn or hardened fridge door seal lets warm air in faster than the little cold air available can cope with." },
    ],
    checks: [
      "Is there a sheet of white ice on the back wall of the freezer, or frost around the vents?",
      "Open the freezer door and press the door switch. Can you hear or feel the fan running?",
      "Are the vents at the back of the fridge and freezer clear of food and containers?",
      "Is the fridge temperature setting at a sensible middle position?",
      "Did the problem start after load shedding or a power surge?",
    ],
    dontDo: [
      "Do not pay for regassing. A fridge with a cold freezer almost never needs gas.",
      "Do not chip ice off the evaporator with a knife or screwdriver. One slip pierces the evaporator.",
      "Do not leave it for weeks. A blocked evaporator eventually stops the freezer as well.",
    ],
    faqs: [
      {
        question: "Can I fix a fridge that is warm while the freezer is cold by defrosting it?",
        answer:
          "Switching the fridge off with the doors open for a day melts the ice and often brings cooling back for a while. If the defrost system has failed, the ice comes back within days or weeks. It is a useful temporary measure, not a repair.",
      },
      {
        question: "Does this mean my fridge needs gas?",
        answer:
          "Almost never. A freezer that is cold proves the compressor is pumping and the system has enough gas to make cold. The fault is in getting that cold air to the fridge section.",
      },
      {
        question: "How long does the repair take?",
        answer:
          "Most of these repairs, such as a defrost heater, sensor, fan motor or damper, are done in one visit. The evaporator has to be fully defrosted first, which can add time if it is heavily iced.",
      },
      {
        question: "Which fridges get this fault most?",
        answer:
          "Any frost free fridge can, including Samsung, LG, Hisense, Defy, Bosch and Whirlpool combis, side by sides and French door fridges. Older manual defrost fridges with the freezer box inside the fridge rarely do.",
      },
    ],
    related: ["fridge-not-cooling", "ice-build-up", "freezer-not-freezing", "fridge-making-noise"],
    services: [
      { href: "/fridge-repairs", label: "Fridge repairs" },
      { href: "/thermostat-replacement", label: "Thermostat and sensor replacement" },
      { href: "/fridge-control-board-repairs", label: "Control board repairs" },
      { href: "/combi-fridge-repairs", label: "Combi fridge repairs" },
    ],
    picture: "freezerIce",
    pictureAlt: "Iced evaporator behind the freezer panel of a frost free fridge in Harare",
  },

  {
    slug: "fridge-not-working-after-power-cut",
    name: "Fridge not working after a power cut",
    question: "Why is my fridge not working after the power came back?",
    cardText: "Dead, clicking or warm after load shedding. Usually a starting part, not the compressor.",
    title: "Fridge Not Working After a Power Cut or Load Shedding?",
    description:
      "Fridge dead, clicking or not cooling after load shedding or a power cut? Learn what fails when the power returns, what to check safely, and get it repaired in Harare, 24/7. Call 0782 886 252.",
    h1: "Fridge Not Working After a Power Cut?",
    lead:
      "Load shedding ends, the lights come on, and the fridge stays silent, or clicks and gives up. This is one of the most common calls we get in Harare. In most cases the compressor has survived and a starting part or the control board has failed. Here is what usually goes wrong and what to check before you call.",
    points: [
      "Start relays and overloads fail first on hard restarts",
      "Electronic boards and sensors are damaged by spikes",
      "Check the plug, socket and earth leakage before anything else",
      "Repaired at your address in Harare, 24 hours a day",
    ],
    intro: [
      "When power comes back after a cut, the supply often spikes, sags or flickers on and off for a few seconds. A fridge compressor that stopped a short time earlier still has high pressure in its system and finds it hard to start. It draws heavy current, the overload protector trips it, and it tries again a minute later. Repeated over many outages, that wears out the start relay and the overload, and eventually one of them fails.",
      "Electronic fridges have a second weak point: the control board. A spike can destroy the power supply on the board, so the fridge has no display and does nothing at all, or damage a sensor so the fridge no longer knows its own temperature.",
      "Sometimes the fridge is fine and the problem is in the house. The earth leakage may have tripped when the power returned, a plug fuse may have blown, or the socket may have been damaged. Those are worth ruling out before anything else.",
    ],
    causes: [
      { title: "Start relay failed", text: "The compressor hums or clicks every minute but never runs. The relay is cheap and is replaced on site." },
      { title: "Overload protector failed", text: "The compressor starts and cuts out after a few seconds, over and over, or never gets power at all." },
      { title: "Control board damaged", text: "Display dead or showing an error, nothing starting. The board power supply is the usual casualty of a spike." },
      { title: "Sensor damaged", text: "The fridge runs but the control reads the wrong temperature, so it stops too early or never cools properly." },
      { title: "Socket, plug or earth leakage", text: "No power reaching the fridge at all. Test the socket with another appliance and check the distribution board." },
      { title: "Compressor damaged", text: "Less common. Windings shorted or open after a severe surge or many failed starts. Confirmed with a meter before any replacement." },
    ],
    checks: [
      "Is the earth leakage or the fridge's circuit breaker tripped on the distribution board?",
      "Does another appliance work in the same socket?",
      "Is the fridge light on? Light but no compressor points to the relay, overload, thermostat or board.",
      "Do you hear a click every minute or two from the back of the fridge?",
      "Is the display on an electronic fridge blank, flashing or showing a code?",
      "Is there a burning smell from the back or the bottom of the fridge?",
    ],
    dontDo: [
      "Do not keep switching the fridge off and on. Each failed start heats the compressor and the relay.",
      "Do not switch the fridge on while the power is still flickering. Wait until the supply is steady, then a few minutes more.",
      "Do not open the fridge and freezer doors more than you need to while you wait. Food stays cold for hours with the doors shut.",
    ],
    faqs: [
      {
        question: "How long should I wait before switching the fridge back on?",
        answer:
          "Wait until the power has been steady for a few minutes, then give it another three to five minutes. That lets the pressures in the fridge even out so the compressor starts easily, and avoids the worst of any flickering.",
      },
      {
        question: "Is my compressor gone?",
        answer:
          "Usually not. The cheaper starting parts and the control board are far more likely to fail than the compressor itself. We test the compressor before anyone talks about replacing it.",
      },
      {
        question: "How do I stop this happening every time there is load shedding?",
        answer:
          "Use a surge protector with a restart delay, switch the fridge off during long outages if the power tends to flicker on return, and consider an inverter system. Our load shedding guide explains each option.",
      },
      {
        question: "Is the food in my fridge still safe?",
        answer:
          "With the doors kept shut, a fridge holds a safe temperature for about four hours and a full freezer for much longer. Discard meat, fish and dairy that have been above 5 degrees for several hours.",
      },
    ],
    related: ["fridge-not-switching-on", "fridge-tripping-power", "fridge-compressor-problems", "fridge-not-cooling"],
    services: [
      { href: "/fridge-power-surge-repairs", label: "Power surge repairs" },
      { href: "/fridge-control-board-repairs", label: "Control board repairs" },
      { href: "/compressor-replacement", label: "Compressor replacement" },
      { href: "/protect-fridge-from-load-shedding", label: "Protect your fridge from load shedding" },
    ],
    picture: "compressorTest",
    pictureAlt: "Technician testing a fridge compressor relay after load shedding in Harare",
  },

  {
    slug: "fridge-tripping-power",
    name: "Fridge tripping the power",
    question: "Why does my fridge trip the power?",
    cardText: "The earth leakage or breaker trips when the fridge starts, or at random times.",
    title: "Fridge Tripping the Power or Earth Leakage? Harare Repairs",
    description:
      "Fridge tripping the earth leakage or breaker? Common causes include a defrost heater, a shorted compressor, a damaged cable or water in the wiring. Safe checks and repair in Harare. Call 0782 886 252.",
    h1: "Fridge Tripping the Power or Earth Leakage?",
    lead:
      "A fridge that trips the earth leakage is telling you that current is leaking somewhere it should not, often to the fridge's metal body. That is a safety problem as well as a cooling one. Harare Fridge Repairs finds the leaking part with an insulation tester and repairs it, so the fridge is safe and running again.",
    points: [
      "Earth leakage trips are a safety warning, not a nuisance",
      "Defrost heaters, compressors, cables and fan motors tested",
      "Insulation resistance measured, not guessed",
      "House wiring faults ruled out first",
    ],
    intro: [
      "An earth leakage unit trips when some of the current going into an appliance does not come back the way it went, usually because it is leaking to earth through damaged insulation. A circuit breaker trips for a different reason: too much current, as with a short circuit or a seized compressor. Knowing which one tripped narrows down the cause.",
      "On frost free fridges the most common culprit is the defrost heater or its wiring. Water from defrosting gets into a cracked heater or a damaged connection, and the leakage trips the power, often at the same time of day or night when the defrost cycle starts. On any fridge, a compressor with damaged winding insulation, a pinched or chewed cable, or a fan motor full of moisture can do the same.",
      "Sometimes the fridge is not to blame. An old or oversensitive earth leakage unit, a shared circuit with a kettle or geyser, or a damp outdoor socket can trip without any fridge fault. We check the supply as part of the visit.",
    ],
    causes: [
      { title: "Defrost heater or wiring", text: "Moisture in a cracked heater or a corroded connection leaks to earth. Trips often happen at the same time each day." },
      { title: "Compressor insulation breakdown", text: "Winding insulation damaged by overheating or surges leaks to the compressor body. Confirmed with an insulation tester." },
      { title: "Damaged cable or plug", text: "A cable crushed behind the fridge, chewed by rodents or burnt at the plug can short or leak to earth." },
      { title: "Fan motor or light", text: "A fan motor or lamp holder with water inside can trip the power, especially in fridges with a leaking drain." },
      { title: "Water in the electrics", text: "A blocked drain or a leaking water dispenser line drips onto wiring or the control board." },
      { title: "Supply or earth leakage unit", text: "A faulty or very old earth leakage unit, a shared circuit or a damp socket. Ruled out before the fridge is blamed." },
    ],
    checks: [
      "Did the earth leakage trip, or a circuit breaker? Note which one.",
      "Does it trip as soon as the fridge is plugged in, when the compressor starts, or at random times?",
      "Does another appliance in the same socket trip the power?",
      "Is the cable behind the fridge crushed, burnt or chewed?",
      "Is there water under the fridge or behind the crisper drawers?",
    ],
    dontDo: [
      "Do not keep resetting the earth leakage with the fridge plugged in. It is protecting you from a shock.",
      "Do not bypass the earth leakage or use an extension lead to an unprotected socket.",
      "Do not touch the fridge's metal body if you feel a tingle. Switch it off at the wall and unplug it.",
    ],
    faqs: [
      {
        question: "Is a fridge that trips the earth leakage dangerous?",
        answer:
          "It can be. The trip means current is leaking where it should not, often to the metal body of the fridge. Unplug it and have it tested before using it again.",
      },
      {
        question: "Why does my fridge only trip the power at night?",
        answer:
          "On frost free fridges this pattern usually points to the defrost heater, which switches on at intervals set by the timer or board. Water gets into a cracked heater or a connection, and the leakage trips when the heater comes on.",
      },
      {
        question: "Does a fridge tripping the power need a new compressor?",
        answer:
          "Sometimes, but it is not the most common cause. Defrost heaters, cables and fan motors are tested first. If the compressor's insulation has broken down, we explain the options before any work is done.",
      },
      {
        question: "Can you tell if it is the fridge or the house wiring?",
        answer:
          "Yes. We test the fridge's insulation with an insulation tester and check the socket and supply, so you know whether you need a fridge technician or an electrician.",
      },
    ],
    related: ["fridge-not-switching-on", "fridge-not-working-after-power-cut", "fridge-leaking-water", "fridge-compressor-problems"],
    services: [
      { href: "/fridge-repairs", label: "Fridge repairs" },
      { href: "/fridge-power-surge-repairs", label: "Power surge repairs" },
      { href: "/compressor-replacement", label: "Compressor replacement" },
      { href: "/24-hour-fridge-repairs", label: "24 hour fridge repairs" },
    ],
    picture: "diagnostics",
    pictureAlt: "Technician testing a fridge's wiring with an insulation tester in Harare",
  },
]
