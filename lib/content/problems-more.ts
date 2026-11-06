import type { ProblemRecord } from "./problems"

/**
 * Additional fault guides. Each one answers a distinct search question that
 * the original ten guides only touched on, so they link to each other rather
 * than compete.
 */
export const moreProblems: ProblemRecord[] = [
  {
    slug: "fridge-warm-freezer-cold",
    name: "Fridge warm but freezer cold",
    question: "Why is my fridge warm when the freezer is still cold?",
    quickAnswer:
      "On most frost free fridges the cold is made in the freezer and blown into the fridge section by a fan. If the freezer is cold but the fridge is warm, the air path has stopped: usually ice blocking the evaporator because a defrost part has failed, a failed evaporator fan, or a damper stuck closed. It rarely needs gas.",
    cardText: "Freezer frozen, fridge section warm. Almost always airflow or defrost, not gas.",
    title: "Fridge Warm but Freezer Cold? Causes & Repair in Harare",
    description:
      "Freezer cold but the fridge section warm? On frost free fridges it is usually a defrost, fan or damper fault, not gas. Repaired at home across Harare, 24/7.",
    h1: "Fridge Warm but Freezer Still Cold? Here Is Why",
    lead:
      "It is one of the most confusing faults a fridge can have: ice cream still hard in the freezer, but warm milk and soft butter in the fridge. The good news is that it is rarely a gas problem, and it can often be repaired in one visit. Harare Fridge Repairs diagnoses and fixes it at your address, anywhere in Harare.",
    points: [
      "Most common on frost free combi, double door and side by side fridges",
      "Usually a defrost part, a fan or a damper",
      "Gas is rarely the cause, so do not pay for a regas first",
      "Repaired in your kitchen, 24 hours a day",
    ],
    intro: [
      "Most frost free fridges have one cold plate, the evaporator, hidden behind a panel in the freezer. A small fan pulls air across it and pushes some of that cold air through a duct into the fridge section, where a damper or the control board decides how much gets through. When the fridge is warm and the freezer is cold, the refrigeration system is still working. What has failed is the path the cold air takes to the fridge.",
      "The usual reason is ice. A few times a day, a frost free fridge should switch on a heater to melt the frost off the evaporator. If the heater, the defrost timer, the bimetal thermostat or the defrost sensor fails, frost keeps building until the evaporator and the duct are a solid block of ice. The freezer stays cold because it sits right next to the ice, but no air reaches the fridge. You may see frost on the back panel of the freezer or hear the fan scraping.",
      "On older fridges with no fan, a warm fridge and cold freezer is more often a thermostat or a fridge-section gasket problem. Either way, the technician confirms the cause before quoting.",
    ],
    causes: [
      { title: "Evaporator iced over", text: "A failed defrost heater, timer, bimetal or sensor lets ice block the evaporator and air duct. The freezer stays cold, the fridge warms up over a few days." },
      { title: "Evaporator fan stopped", text: "The fan that moves cold air into the fridge has seized or burnt out, often after a period of noisy running. No airflow, no cooling in the fridge section." },
      { title: "Damper stuck closed", text: "The flap or motorised damper between the compartments has jammed shut, or its control has failed, so cold air stays in the freezer." },
      { title: "Fridge sensor or control board", text: "On electronic fridges a failed fridge-section sensor or board output can stop the fan or damper being told to work. Often follows a power surge." },
      { title: "Food blocking the vents", text: "Containers packed against the air outlet in the fridge or the return vent in the freezer can starve the fridge of air. The simplest cause to rule out." },
      { title: "Fridge door seal leaking", text: "A torn or hardened gasket on the fridge door lets warm air in faster than the limited cold supply can replace it." },
    ],
    checks: [
      "Is the freezer back panel covered in frost or ice, or is there frost around the vents?",
      "Open the freezer and press the door switch. Can you hear or feel the fan running?",
      "Are any containers pushed against the vents at the back of the fridge or freezer?",
      "Has the fridge setting been changed, or the freezer turned colder than usual?",
      "Did the fault start gradually over a few days or suddenly after a power cut?",
    ],
    dontDo: [
      "Do not pay for a regas first. A cold freezer shows the system is still making cold, so have the airflow and defrost checked before anyone adds gas.",
      "Do not chip ice off the evaporator panel with a knife; a pierced evaporator is an expensive repair.",
      "A manual defrost with the fridge switched off for a day may bring cooling back for a while, but the failed part is still there and the ice will return.",
    ],
    faqs: [
      {
        question: "Does a fridge that is warm with a cold freezer need gas?",
        answer:
          "Almost never. A cold freezer shows the sealed system is working. The fault is in the airflow between the compartments: ice, a fan or a damper. We confirm it on site and repair the part that failed.",
      },
      {
        question: "Can I defrost the fridge myself to fix it?",
        answer:
          "Switching the fridge off with the doors open for a day melts the ice and often brings the fridge back for a week or two. It confirms the diagnosis, but the defrost part that failed still needs replacing or the ice will build up again.",
      },
      {
        question: "Is this repair done at home?",
        answer:
          "Yes. Defrost heaters, timers, sensors, fans and dampers are all replaced in your kitchen. The technician removes the freezer back panel, clears the ice, replaces the faulty part and tests a defrost cycle.",
      },
      {
        question: "Which fridges get this fault most?",
        answer:
          "Frost free combi, double door, side by side and French door fridges that move cold air from the freezer to the fridge with a fan. Some models, such as Samsung fridges with Twin Cooling, have a separate evaporator and fan for the fridge section; on those, the same symptom usually means that evaporator has iced over or its fan has failed. The design matters more than the brand.",
      },
    ],
    related: ["fridge-not-cooling", "ice-build-up", "fridge-making-noise", "fridge-freezing-food"],
    services: [
      { href: "/fridge-defrost-repairs", label: "Defrost system repairs" },
      { href: "/fridge-fan-motor-replacement", label: "Fan motor replacement" },
      { href: "/fridge-control-board-repairs", label: "Control board repairs" },
      { href: "/combi-fridge-repairs", label: "Combi fridge repairs" },
    ],
    picture: "freezerIce",
    pictureAlt: "Ice built up on the evaporator panel inside a frost free freezer",
  },

  {
    slug: "fridge-tripping-power",
    name: "Fridge tripping the power",
    question: "Why does my fridge keep tripping the electricity?",
    quickAnswer:
      "A fridge that trips the earth leakage or the breaker usually has a fault to earth: a compressor winding, a defrost heater, a damaged cord or plug, or water getting into wiring. It is a safety fault. Switch the fridge off at the wall, leave it off, and have the circuit tested before it is used again.",
    cardText: "Earth leakage or breaker trips when the fridge starts. A safety fault, not one to keep resetting.",
    title: "Fridge Tripping the Power? Causes & Safe Repair in Harare",
    description:
      "Fridge tripping the earth leakage or breaker? Usually a compressor, defrost heater, cord or wiring fault to earth. Switch it off and call us in Harare, 24/7.",
    h1: "Fridge Tripping the Earth Leakage or Breaker",
    lead:
      "When the lights go out every time the fridge kicks in, something in it is leaking current to earth. That is exactly what the earth leakage is there to catch, so please do not keep resetting it. Harare Fridge Repairs tests the fridge safely, finds the faulty part and repairs it at your address.",
    points: [
      "Treat it as a safety fault and switch off at the wall",
      "Compressor, defrost heater, cord and wiring tested one by one",
      "Insulation tested with a meter, not guessed",
      "Emergency callouts across Harare, 24 hours a day",
    ],
    intro: [
      "An earth leakage unit trips when some of the current going into an appliance finds its way to earth instead of returning through the neutral. In a fridge that usually means insulation has broken down somewhere: inside the compressor motor, in a defrost heater element, in a cord that has been crushed behind the fridge, or at a connection where water from a blocked drain has reached the wiring.",
      "Timing is a strong clue. If it trips the instant the fridge is plugged in, the fault is in the cord, the plug or the always-live parts of the fridge. If it trips when the compressor starts, the compressor or its start components are suspect. If it trips a few hours later, at the same point in every cycle, the defrost heater coming on is the usual culprit.",
      "Sometimes the fridge is innocent and the earth leakage itself is weak, or another appliance on the same circuit is the real cause. Our technician tests the fridge's insulation directly so you know which it is before anything is replaced.",
    ],
    causes: [
      { title: "Compressor winding earthed", text: "The motor insulation inside the compressor has broken down. Trips as the compressor starts and is confirmed with an insulation test. Needs a compressor replacement." },
      { title: "Defrost heater element", text: "A cracked heater or one sitting in melt water leaks to earth. Trips a few hours after power on, when the defrost cycle begins." },
      { title: "Damaged cord or plug", text: "A cord crushed under a fridge foot, chewed by rodents or overheated at the plug. Trips immediately, sometimes with a burning smell." },
      { title: "Water in wiring or connectors", text: "Melt water from a blocked drain or a leaking water line reaches a connector or the control board. Often intermittent." },
      { title: "Start relay or capacitor shorting", text: "A burnt start device can short as the compressor tries to start. Usually shows scorch marks in the compressor terminal box." },
      { title: "A weak earth leakage or another appliance", text: "If the fridge tests clean, the trip unit or a different appliance on the circuit is the problem. An electrician may be the right call, and we will tell you." },
    ],
    checks: [
      "Does it trip immediately when plugged in, when the compressor starts, or hours later?",
      "Unplug the fridge and reset the earth leakage. Does it hold with the fridge unplugged?",
      "Is the cord or plug damaged, discoloured or warm to the touch?",
      "Is there water under the fridge or behind the bottom panel?",
      "Is there a burning smell from the back of the fridge?",
    ],
    dontDo: [
      "Do not keep resetting the earth leakage with the fridge plugged in. It is protecting you from a shock.",
      "Do not move the fridge to a socket on an unprotected circuit to get around the trip.",
      "Do not open the compressor terminal cover or the back panel with the fridge plugged in.",
    ],
    faqs: [
      {
        question: "Is it dangerous if my fridge trips the earth leakage?",
        answer:
          "It can be. The trip means current is leaking out of the circuit, and without the earth leakage that current could pass through a person touching the fridge. Switch it off at the wall and keep it unplugged until it has been tested.",
      },
      {
        question: "Does a fridge that trips the power need a new compressor?",
        answer:
          "Not always. An earthed compressor is one cause, but defrost heaters, cords, plugs, wet connectors and start devices are often to blame and are much cheaper to fix. We test the insulation of each part to find out which.",
      },
      {
        question: "My fridge only trips at night. Why?",
        answer:
          "Faults that appear hours after start up usually follow the defrost cycle, when the heater switches on. Nights can also bring voltage changes as load on the network changes, and damp nights can let moisture into a heater, connector or cord. A technician can confirm which with a test.",
      },
      {
        question: "Can you come out urgently for this?",
        answer:
          "Yes. We answer 24 hours a day across Harare. Keep the doors shut while it is unplugged: a closed fridge keeps food cold for about four hours, and a full freezer for much longer.",
      },
    ],
    related: ["fridge-not-switching-on", "fridge-compressor-problems", "fridge-leaking-water", "fridge-clicking-on-and-off"],
    services: [
      { href: "/fridge-power-surge-repairs", label: "Power surge damage repairs" },
      { href: "/compressor-replacement", label: "Compressor replacement" },
      { href: "/fridge-defrost-repairs", label: "Defrost heater repairs" },
      { href: "/24-hour-fridge-repairs", label: "24 hour fridge repairs" },
    ],
    picture: "compressorTest",
    pictureAlt: "Technician testing a fridge compressor and wiring with a multimeter",
  },

  {
    slug: "fridge-clicking-on-and-off",
    name: "Fridge clicking on and off",
    question: "Why does my fridge click on and off?",
    quickAnswer:
      "A click every few minutes with a short hum, and a fridge that is getting warmer, usually means the compressor is trying to start and failing, and the overload protector is cutting it off. A worn start relay is the most common cause and is usually a straightforward repair; an overheating or failing compressor is the less common one.",
    cardText: "A hum, a click, silence, repeat. Usually the start relay, sometimes the compressor.",
    title: "Fridge Clicking On and Off? Start Relay & Compressor Help",
    description:
      "Fridge clicking on and off and not cooling? Usually a worn start relay, with the overload cutting out a compressor that cannot start. Repaired in Harare.",
    h1: "Fridge Clicking On and Off? What the Click Means",
    lead:
      "A single click when the fridge switches on or off is normal. A click every couple of minutes, with a short buzz before it and a fridge that is getting warmer, is not. It is the sound of a compressor that cannot start. Harare Fridge Repairs tests the start components and the compressor at your address and fixes what has failed.",
    points: [
      "Start relay and overload tested first, the cheapest and most common fix",
      "Compressor windings measured before any replacement is suggested",
      "Common after load shedding and voltage dips",
      "Repaired at your home across Harare, 24 hours a day",
    ],
    intro: [
      "Most household fridge compressors are started by a small relay or PTC starter clipped onto the side of the compressor, with an overload protector beside it. When the thermostat calls for cooling, the starter gives the motor an extra push. If the motor does not turn, it draws a heavy current, the overload heats up and clicks it off, and a minute or two later it cools and tries again. That cycle is the clicking you hear.",
      "In Harare the starter and overload take a beating from power cuts. When power returns after load shedding, every fridge on the street tries to start at once, often at low voltage, and a compressor that tries to start against high pressure or a weak supply strains these parts. Over time they burn out or stick.",
      "If new start components do not cure it, the compressor itself may be seizing or have a failed winding, or it may be overheating because the condenser is dusty. Those are confirmed with a meter before you are asked to pay for a compressor.",
    ],
    causes: [
      { title: "Start relay or PTC starter worn", text: "The starter no longer gives the motor its push. Hum, click, silence, repeat. The most common cause and a straightforward repair." },
      { title: "Overload protector failing", text: "A tired overload trips early even when the compressor is fine, so the fridge runs in short bursts and warms up." },
      { title: "Low voltage after power returns", text: "A weak supply, an undersized extension lead or an inverter that cannot deliver starting current stops the compressor starting." },
      { title: "Compressor overheating", text: "Dusty condenser coils or no air space behind the fridge make the compressor too hot, so the overload keeps cutting it out." },
      { title: "Compressor seizing or failed winding", text: "The motor cannot turn or has an open winding. Confirmed with a resistance test and a current reading, then replaced." },
      { title: "Thermostat contacts chattering", text: "On some older fridges a worn thermostat clicks repeatedly without the compressor humming. A different, cheaper fault." },
    ],
    checks: [
      "Is there a hum or buzz for a few seconds before each click?",
      "Is the fridge plugged straight into the wall, not into an extension lead or multi-plug?",
      "Did the clicking start straight after a power cut or a surge?",
      "Is the back of the fridge very hot, or the condenser coils thick with dust?",
      "Is the fridge running on an inverter or a generator?",
    ],
    dontDo: [
      "Do not leave a fridge clicking for days. Each failed start heats the compressor windings and can turn a relay fault into a compressor fault.",
      "Do not tap or hit the compressor to get it going.",
      "Do not switch the fridge back on the moment the power returns; wait a few minutes so the supply has settled and, after a short cut, the pressures inside have equalised.",
    ],
    faqs: [
      {
        question: "Is a clicking fridge always a dead compressor?",
        answer:
          "No. Most of the time it is the start relay or overload, which are small parts fitted in minutes. We test the compressor windings too, so you only pay for a compressor if it has actually failed.",
      },
      {
        question: "Why did the clicking start after load shedding?",
        answer:
          "When power comes back, many fridges try to start at once, often at low voltage, and the start components work hardest at that moment. Waiting a few minutes before switching back on, and a surge protector or delay unit, help prevent it.",
      },
      {
        question: "Can my inverter cause a fridge to click?",
        answer:
          "Yes, if it cannot supply the brief high current a compressor needs to start, or if its battery voltage is low. The fridge may start fine on mains and click on the inverter. We can check this on site.",
      },
      {
        question: "Is the normal click when a fridge switches off a problem?",
        answer:
          "No. A single click when the thermostat switches the compressor on or off is normal. It is a click every minute or two, with a hum and no cooling, that needs attention.",
      },
    ],
    related: ["fridge-compressor-problems", "fridge-not-switching-on", "fridge-making-noise", "fridge-not-cooling"],
    services: [
      { href: "/compressor-replacement", label: "Compressor replacement" },
      { href: "/fridge-power-surge-repairs", label: "Power surge damage repairs" },
      { href: "/protect-fridge-from-power-cuts", label: "Protecting your fridge from power cuts" },
      { href: "/fridge-repairs", label: "Fridge repairs" },
    ],
    picture: "compressor",
    pictureAlt: "Technician inspecting the start relay on a fridge compressor",
  },

  {
    slug: "fridge-hot-on-the-sides",
    name: "Fridge hot on the sides",
    question: "Is it normal for the sides of my fridge to get hot?",
    quickAnswer:
      "Yes, warm sides are normal on most modern fridges, because the condenser pipe that gets rid of heat runs behind the side panels. Sides that are too hot to keep a hand on, a fridge that never stops running, or warm sides with a warm cabinet point to poor airflow, a door seal leak, a thermostat fault or a sealed system problem.",
    cardText: "Warm side panels are usually normal. Very hot sides with poor cooling are not.",
    title: "Fridge Hot on the Sides? What Is Normal & What Is Not",
    description:
      "Fridge sides warm or hot? Warm is normal, as the condenser runs behind the panels. Very hot sides with poor cooling are a fault. Harare technicians explain.",
    h1: "Fridge Hot on the Sides: Normal or a Fault?",
    lead:
      "Many people call us worried because the sides of their new fridge feel warm. Usually that is exactly how the fridge is designed to work. But hot sides can also be the first sign of a fridge working far too hard. This guide explains the difference, and Harare Fridge Repairs can check it at your address if you are unsure.",
    points: [
      "Warm sides are normal on most fridges made in the last twenty years",
      "Too hot to touch, or warm sides plus poor cooling, needs a check",
      "Airflow and door seals are the usual causes of overheating",
      "Checks at your home across Harare",
    ],
    intro: [
      "A fridge does not make cold. It moves heat out of the cabinet and releases it into the kitchen. On older fridges that heat comes out of the black grille of pipes on the back. On most modern fridges, including the Defy, Hisense, Samsung and LG models common in Harare, the condenser pipe is fixed to the inside of the outer side panels, so the panels themselves give off the heat. They feel warm, sometimes quite warm, when the compressor is running. That is normal.",
      "There is also often a warm strip around the freezer door opening. That is a pipe or heater that stops condensation forming on the front of the cabinet, and it is meant to be warm too.",
      "What is not normal is a fridge whose sides are too hot to keep your hand on, a fridge that runs all day without stopping, or warm sides together with warm food. Those suggest the fridge cannot get rid of its heat or is losing cold faster than it can make it.",
    ],
    causes: [
      { title: "Normal condenser heat", text: "The side panels warm up while the compressor runs and cool off when it stops. No action needed." },
      { title: "No space around the fridge", text: "Boxed into a cupboard or squeezed between units, side-condenser fridges cannot shed heat. Leave the gap the manual asks for on each side and above." },
      { title: "Door seal letting warm air in", text: "The fridge runs non stop to make up for the leak, so the sides stay hot all day. Frost near the door is a clue." },
      { title: "Hot kitchen or direct sun", text: "A fridge beside a stove or in a sunny window works harder and runs hotter, especially in October and November." },
      { title: "Thermostat or sensor fault", text: "The fridge keeps cooling after it reaches temperature, so it never rests and the sides never cool." },
      { title: "Sealed system problem", text: "A blockage, a leak or a weak compressor can make the fridge run constantly while cooling poorly. Confirmed with gauges." },
    ],
    checks: [
      "Do the sides cool down after the compressor switches off, or are they hot all day?",
      "Is the food inside cold enough, around 3 to 5 degrees in the fridge?",
      "How much space is there between the fridge and the cupboards or walls on each side?",
      "Is the fridge in direct sun or next to the stove?",
      "Does a strip of paper closed in the door seal pull out easily?",
    ],
    dontDo: [
      "Do not build a side-condenser fridge tightly into a cupboard without the ventilation gaps the maker specifies.",
      "Do not cover the top of the fridge with boxes or cloths that trap heat.",
      "Do not ignore hot sides together with a warm cabinet; that fridge is wearing out its compressor.",
    ],
    faqs: [
      {
        question: "Why are the sides of my new fridge warm?",
        answer:
          "Because the condenser, the part that releases heat taken out of the cabinet, is built into the side panels. Warm sides while the fridge is running show it is working. They should cool when the compressor stops.",
      },
      {
        question: "How hot is too hot?",
        answer:
          "If you cannot comfortably keep your hand flat on the side panel, or if the sides stay hot for hours on end, have the fridge checked, especially if the food is not as cold as it should be.",
      },
      {
        question: "Can I put my fridge in a cupboard?",
        answer:
          "Only if it is designed as an integrated fridge or the cupboard leaves the side and top gaps given in the manual. A freestanding side-condenser fridge squeezed into a tight space will run hot and use more power.",
      },
      {
        question: "Does a hot fridge use more electricity?",
        answer:
          "A fridge that runs hot all day is running all day, so yes. Fixing the cause, often a seal or ventilation, usually brings the running time down.",
      },
    ],
    related: ["fridge-running-constantly", "fridge-door-seal-problems", "fridge-not-cooling", "fridge-compressor-problems"],
    services: [
      { href: "/fridge-servicing", label: "Fridge servicing" },
      { href: "/fridge-door-seal-replacement", label: "Door seal replacement" },
      { href: "/thermostat-replacement", label: "Thermostat replacement" },
      { href: "/fridge-repairs", label: "Fridge repairs" },
    ],
    picture: "condenser",
    pictureAlt: "Technician checking the condenser and airflow around a fridge",
  },

  {
    slug: "fridge-bad-smell",
    name: "Fridge smells bad",
    question: "What usually causes a bad smell in a fridge?",
    quickAnswer:
      "Most fridge smells come from spoiled food, spills under the drawers, a blocked drain hole or stagnant water in the drain tray behind the fridge. A fridge that smells even after a thorough clean may not be holding a safe temperature. A burning or chemical smell is different: switch the fridge off and have it checked.",
    cardText: "Musty, sour or burning? What the smell tells you, and when it is a repair rather than a clean.",
    title: "Fridge Smells Bad? Causes, Cleaning & When to Call Us",
    description:
      "Fridge smells bad even after cleaning? The causes, from a blocked drain or dirty drain tray to a fridge running too warm, and what a burning smell means.",
    h1: "Why Does My Fridge Smell Bad?",
    lead:
      "A smelly fridge is usually a cleaning job, not a repair. But when the smell keeps coming back, or when it is a burning or chemical smell rather than a food smell, there is often a fault behind it. Here is how to tell the difference, and when to call Harare Fridge Repairs.",
    points: [
      "Food and drain smells are usually fixed with a proper clean",
      "Smells that keep returning can mean the fridge is too warm",
      "Burning smells are a safety issue: switch off at the wall",
      "Technicians across Harare, 24 hours a day",
    ],
    intro: [
      "Fridge smells come from bacteria and mould, and those grow faster when food is warm and damp. The usual hiding places are under the crisper drawers, in the door seal folds, in the small drain hole at the back of the fridge section, and in the drain tray that sits on top of the compressor at the back of the fridge. That tray collects melt water and, if the fridge is pushed against a wall in a warm kitchen, can become stagnant and smelly.",
      "If you have emptied and cleaned the fridge, flushed the drain and the smell is back within days, check the temperature. A fridge running at 8 or 10 degrees instead of 3 to 5 degrees spoils food faster and smells sooner. That is a cooling fault, and it is worth fixing before the food is unsafe.",
      "Burning, hot plastic or sharp chemical smells are not food smells. They can come from an overheating compressor, a burnt start relay, a failing fan motor or a wiring fault. Switch the fridge off at the wall and have it looked at.",
    ],
    causes: [
      { title: "Spills and spoiled food", text: "Juice under the drawers, a forgotten container at the back, meat drip on the bottom shelf. The most common cause by far." },
      { title: "Blocked drain hole", text: "The drain at the back of the fridge section fills with food debris and slime, and water sits behind the drawers." },
      { title: "Dirty drain tray", text: "The tray on the compressor collects melt water from every defrost. In a warm, enclosed spot it can grow mould." },
      { title: "Mould in the door seal", text: "Food and moisture collect in the folds of the gasket. Black spots and a musty smell around the door." },
      { title: "Fridge running too warm", text: "Food spoils faster at 8 degrees than at 4. Smells return quickly after cleaning. A cooling fault to repair." },
      { title: "Burning or chemical smell", text: "An overheating compressor, a burnt relay, a failing fan motor or wiring. Not a cleaning job: switch off and call." },
    ],
    checks: [
      "Put a thermometer in a glass of water on the middle shelf overnight. Does it read 3 to 5 degrees?",
      "Is there water or slime under the crisper drawers?",
      "Are there black spots in the folds of the door seal?",
      "Can you safely reach the drain tray at the back? Does it hold stagnant water?",
      "Is the smell food or musty, or is it burning, hot or chemical?",
    ],
    dontDo: [
      "Do not use bleach or strong solvents on the door seal; they harden the rubber. Warm water with a little bicarbonate of soda works well.",
      "Do not poke the drain hole with a sharp object that can puncture the pipe or the evaporator behind it.",
      "Do not keep using a fridge that smells of burning. Switch it off at the wall.",
    ],
    faqs: [
      {
        question: "How do I get rid of a fridge smell?",
        answer:
          "Empty the fridge, remove the drawers and shelves and wash them in warm soapy water, wipe the cabinet and door seal with warm water and bicarbonate of soda, flush the drain hole with warm water and dry everything before switching back on. An open box of bicarbonate of soda helps keep it fresh.",
      },
      {
        question: "My fridge smells even after cleaning. Why?",
        answer:
          "Check the drain hole and the drain tray behind the fridge, and check the temperature. A fridge that is running too warm will keep spoiling food. If it is above 5 degrees on the middle shelf, call us to diagnose the cooling.",
      },
      {
        question: "Is a burning smell from my fridge dangerous?",
        answer:
          "It can be. It often comes from an overheating compressor, a burnt start relay or a fan motor. Switch the fridge off at the wall, keep the doors closed to protect the food and call us for a check.",
      },
      {
        question: "Can a fridge gas leak smell?",
        answer:
          "Most household fridge gases have little smell in the amounts a fridge holds. Most newer fridges use R600a, a flammable hydrocarbon, so if you smell gas near the fridge, ventilate the room, avoid switches and flames and call us. Most smells, though, are food or drain related.",
      },
    ],
    related: ["fridge-leaking-water", "fridge-not-cooling", "fridge-door-seal-problems", "fridge-tripping-power"],
    services: [
      { href: "/fridge-servicing", label: "Fridge servicing" },
      { href: "/fridge-defrost-repairs", label: "Defrost and drain repairs" },
      { href: "/fridge-door-seal-replacement", label: "Door seal replacement" },
      { href: "/tips", label: "Fridge care tips" },
    ],
    picture: "temperature",
    pictureAlt: "Technician checking the temperature inside a household fridge",
  },

  {
    slug: "fridge-ice-maker-not-working",
    name: "Ice maker or water dispenser not working",
    question: "Why is my fridge ice maker or water dispenser not working?",
    quickAnswer:
      "When a side by side or French door fridge stops making ice or dispensing water, the usual causes are a frozen water line in the door, an empty or badly seated water tank on models that are not plumbed in, a failed inlet valve, a blocked filter or low water pressure on plumbed-in models, or the ice maker switched off or jammed. On plumbed-in models, check the household water pressure first: low pressure from tanks and boreholes is common in Harare.",
    cardText: "No ice, slow water or a dispenser that has stopped. Usually the water line, valve or filter.",
    title: "Fridge Ice Maker or Water Dispenser Not Working | Harare",
    description:
      "Ice maker or water dispenser stopped on a side by side or French door fridge? Frozen lines, tanks, valves, filters and pressure explained. Repaired in Harare.",
    h1: "Fridge Ice Maker or Water Dispenser Not Working",
    lead:
      "Side by side and French door fridges with ice makers and water dispensers, plumbed-in or filled from a tank, are common in Borrowdale, Highlands and the newer estates. When they stop, the fridge usually still cools fine, but the convenience is gone and sometimes water ends up on the floor. Harare Fridge Repairs repairs dispensers and ice makers on site.",
    points: [
      "Samsung, LG, Hisense and other dispenser fridges, plumbed-in or with a water tank",
      "Frozen door lines, inlet valves, filters and ice makers",
      "Water pressure and supply checked first",
      "Repaired at your home across Harare",
    ],
    intro: [
      "A plumbed-in fridge takes water from your house supply through a thin tube, an electrically operated inlet valve at the back, a filter, and then on to the ice maker and the dispenser in the door. Each of those can stop the water. Models that are not plumbed in draw water from a small tank inside the fridge that you fill by hand, so an empty or badly seated tank is the first thing to check. Because the dispenser line runs through the freezer door on many models, it can also freeze solid if the door has been left ajar or the freezer is set very cold.",
      "On plumbed-in models the water supply matters a lot in Harare. Many homes rely on a tank, a borehole or a booster pump, and the pressure at the fridge can be too low for the inlet valve to open properly, especially when the tank is low. Sediment from boreholes also blocks filters and valve screens faster than the manual suggests. We check the supply before replacing parts.",
      "If water is dripping from the dispenser or pooling behind the fridge, turn off the water supply to the fridge until it is fixed.",
    ],
    causes: [
      { title: "Water tank empty or not seated", text: "On models that are not plumbed in, the tank is empty, not pushed fully home or blocked at its outlet, so no water reaches the dispenser or ice maker." },
      { title: "Frozen water line", text: "The tube through the freezer door has frozen, often after the door was left open or the freezer set to its coldest. Water stops, ice may still be made." },
      { title: "Inlet valve failed or blocked", text: "The solenoid valve at the back no longer opens, or its screen is blocked with sediment. No water to the ice maker or dispenser." },
      { title: "Filter blocked or wrongly fitted", text: "An old filter or one not locked in fully slows water to a trickle or stops it. Borehole water clogs filters faster." },
      { title: "Low water pressure", text: "Tank, borehole or low municipal pressure is not enough to open the valve properly. Ice cubes come out small or hollow." },
      { title: "Ice maker switched off or jammed", text: "The ice maker is turned off, its arm is stuck, or cubes have fused into a block in the bucket." },
      { title: "Dispenser switch or control fault", text: "The paddle switch, door switch or control board is not powering the valve. Usually shows on the display." },
    ],
    checks: [
      "On a model with a water tank, is the tank full and pushed fully into place?",
      "On a plumbed-in model, is the supply tap to the fridge fully open, and is there water pressure at the kitchen sink?",
      "Is the ice maker switched on in the settings or with its switch?",
      "When was the water filter last changed, and is it locked fully in place?",
      "Is there ice in the dispenser chute or a frozen line in the freezer door?",
      "Are there ice cubes fused together in the bucket?",
    ],
    dontDo: [
      "Do not use a sharp tool to clear ice from the dispenser chute or the ice maker.",
      "Do not use a hairdryer close to plastic parts inside the freezer.",
      "Do not leave a leaking water line running; close the supply until it is repaired.",
    ],
    faqs: [
      {
        question: "Why does my fridge make ice but not dispense water?",
        answer:
          "The dispenser line through the door has often frozen, or the dispenser side of the inlet valve has failed. A frozen line can be thawed, and the cause, usually the door or the freezer setting, corrected.",
      },
      {
        question: "Why are my ice cubes small or hollow?",
        answer:
          "Low water pressure or a partly blocked filter or valve. The ice maker only opens the valve for a few seconds, so if pressure is low, the mould does not fill. Check the supply and the filter first.",
      },
      {
        question: "Can I use my fridge without a water filter?",
        answer:
          "Many models need a filter or a bypass plug in place to let water through. Check the manual for your fridge. We can fit the right filter or bypass when we visit.",
      },
      {
        question: "Do you repair Samsung and LG ice makers?",
        answer:
          "Yes. We repair ice makers and water dispensers on Samsung, LG, Hisense, Defy and other side by side and French door fridges across Harare, both plumbed-in models and those with a water tank.",
      },
    ],
    related: ["fridge-leaking-water", "ice-build-up", "fridge-warm-freezer-cold", "fridge-freezing-food"],
    services: [
      { href: "/side-by-side-fridge-repairs", label: "Side by side fridge repairs" },
      { href: "/french-door-fridge-repairs", label: "French door fridge repairs" },
      { href: "/samsung-fridge-repairs", label: "Samsung fridge repairs" },
      { href: "/lg-fridge-repairs", label: "LG fridge repairs" },
    ],
    picture: "sideBySide",
    pictureAlt: "Technician repairing a French door fridge with a screwdriver",
  },
]
