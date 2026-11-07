import type { ProblemRecord } from "./problems"

/**
 * More fault guides, for symptoms people search for in their own words: a
 * fridge guard light, a code on the display, a tingle from the door, a door
 * that will not shut, and a fridge that sweats. Each links to the deeper
 * guides and repair pages it overlaps with.
 */
export const extraProblems: ProblemRecord[] = [
  {
    slug: "fridge-guard-red-light",
    name: "Fridge guard showing a red light",
    question: "Why is the red light on my fridge guard on, and the fridge not running?",
    quickAnswer:
      "On most fridge guards and voltage protectors a red or flashing light means the guard is holding power back on purpose: either it is counting down its start delay after a power cut, or the mains voltage is too low or too high. Wait out the delay first. If it stays red for a long time, or the fridge will not start once the light turns green, the guard or the fridge needs checking.",
    cardText: "The guard is holding power back. Usually a start delay or bad voltage, sometimes a faulty guard.",
    title: "Fridge Guard Red Light On? What It Means & What to Do, Harare",
    description:
      "Red or flashing light on your fridge guard? It is usually a start delay or bad voltage after load shedding. What it means and when to call us in Harare, 24/7.",
    h1: "Fridge Guard Showing a Red Light: What It Means",
    lead:
      "Almost every fridge in Harare is plugged into a fridge guard, a small voltage protector between the wall and the fridge. When its light turns red the fridge goes quiet, and it is easy to think the fridge has broken. Most of the time the guard is simply doing its job. This guide explains how to tell, and when to call Harare Fridge Repairs.",
    points: [
      "Red usually means delay or out of range voltage, not a broken fridge",
      "How long a normal start delay lasts",
      "How to test whether the guard or the fridge is at fault",
      "When to call a technician and when to call ZESA or an electrician",
    ],
    intro: [
      "A fridge guard watches the voltage at the socket. When power returns after load shedding it waits a few minutes before switching the fridge on, so the compressor is not restarted while its pressures are still high or while the voltage is still bouncing. During that wait the light is red, orange or flashing, depending on the make. The guard also cuts the fridge off whenever the voltage goes outside a safe band, and keeps the red light on until it is back to normal.",
      "So a red light on its own is not a fault. The questions are how long it stays red, what the voltage in the house is doing, and what the fridge does once the light goes green. In parts of Harare the voltage sags badly in the evening when everyone is cooking, and the guard may sit on red for long periods. That protects the compressor, and running the fridge without the guard at those times is exactly how compressors get burnt out.",
      "Guards do fail, though. A guard that never goes green even when the lights in the house are bright and steady, or one that clicks on and off every few seconds, may be faulty. And a fridge that refuses to start once the guard is green has a fault of its own, usually the relay, the thermostat or the compressor.",
    ],
    causes: [
      { title: "Start delay after a power cut", text: "Normal behaviour. Most fridge guards wait somewhere between one and five minutes, sometimes longer, before switching on. Check the guard's own instructions." },
      { title: "Low voltage on the line", text: "Evening sags and weak supply in some suburbs push the voltage below the guard's limit. The light stays red until the voltage recovers." },
      { title: "High voltage or surges", text: "After a fault on the line or a lightning storm the voltage may spike. The guard cuts off to protect the fridge's board and compressor." },
      { title: "Faulty fridge guard", text: "A failed relay or sensing circuit inside the guard keeps it on red even with good voltage, or makes it click on and off. Cheap guards often fail after a big surge." },
      { title: "Fridge fault drawing heavy current", text: "A seized compressor or a failing start relay can drag the voltage at the socket down at start up, so the guard trips back to red each time the fridge tries to run." },
      { title: "Loose socket, adapter or extension lead", text: "A worn socket, a loose adapter or a long thin extension lead drops the voltage the guard sees, especially when the compressor starts." },
    ],
    checks: [
      "After the power comes back, wait five to ten minutes. Does the light go green by itself?",
      "Are the lights in the house dim or flickering? That points to low voltage on the line.",
      "Plug a lamp or phone charger into the guard. Does the guard give it power when the light is green?",
      "When the light goes green, does the fridge start, hum and click, or stay silent?",
      "Is the guard plugged straight into the wall, or through an adapter or extension lead?",
    ],
    dontDo: [
      "Do not bypass the guard by plugging the fridge straight into the wall during low voltage or right after a power cut. That is when compressors burn out.",
      "Do not keep switching the guard off and on to force the fridge to start. Repeated hard starts damage the start relay and compressor.",
      "Do not open a guard that has a burning smell or scorch marks. Unplug it and replace it.",
    ],
    faqs: [
      {
        question: "How long should the red light stay on after load shedding?",
        answer:
          "Usually a few minutes, depending on the make and its setting. Some guards wait about a minute, others five minutes or more. If it is still red long after the house voltage has settled, the voltage may still be out of range or the guard may be faulty.",
      },
      {
        question: "The guard is green but my fridge will not start. What now?",
        answer:
          "Then the guard is giving power and the fault is in the fridge: commonly the start relay or overload, the thermostat, or the compressor. Our guide to a fridge that will not switch on explains the causes, and we can test it at your home.",
      },
      {
        question: "Can I run my fridge without a fridge guard?",
        answer:
          "You can, but in Harare it is a risk. Low voltage starts and spikes after load shedding are a leading cause of failed relays, boards and compressors. A working guard with a start delay is cheap protection.",
      },
      {
        question: "Do you replace fridge guards?",
        answer:
          "We test whether the guard or the fridge is at fault and will tell you if the guard needs replacing. Guards are sold at hardware and electrical shops across Harare.",
      },
    ],
    related: ["fridge-not-switching-on", "fridge-clicking-on-and-off", "fridge-compressor-problems", "fridge-tripping-power"],
    services: [
      { href: "/protect-fridge-from-power-cuts", label: "Protecting your fridge from power cuts" },
      { href: "/fridge-power-surge-repairs", label: "Power surge repairs" },
      { href: "/compressor-replacement", label: "Compressor replacement" },
      { href: "/24-hour-fridge-repairs", label: "24 hour fridge repairs" },
    ],
    picture: "compressorTest",
    pictureAlt: "Technician testing a fridge supply and compressor after a power cut",
  },

  {
    slug: "fridge-error-code",
    name: "Fridge showing an error code",
    question: "What does the error code on my fridge display mean?",
    quickAnswer:
      "An error code is the fridge's control board reporting a part it can no longer read or drive: usually a temperature sensor, a fan, the defrost circuit, the ice maker, or the link between the display and the main board. The code points to the area to test, not always to the failed part, so it is a starting point for diagnosis rather than a shopping list.",
    cardText: "Letters or numbers on the display. The board is pointing at a sensor, fan, defrost or board fault.",
    title: "Fridge Error Code on the Display? Diagnosis & Repair in Harare",
    description:
      "Error code or flashing display on your fridge? What the codes usually point to and how we diagnose Samsung, LG, Hisense, Bosch and other fridges in Harare.",
    h1: "Fridge Showing an Error Code on the Display",
    lead:
      "Modern fridges watch themselves. When a sensor reading makes no sense, a fan does not spin or the defrost takes too long, the board shows a code or flashes a light. Harare Fridge Repairs reads those codes, runs the fridge's own test mode where the brand has one, and tests the part the code points to before replacing anything.",
    points: [
      "Samsung, LG, Hisense, Bosch, Defy and other electronic fridges",
      "Sensor, fan, defrost, ice maker and communication faults",
      "Service test modes used to drive each part individually",
      "Parts tested with a meter before they are replaced",
    ],
    intro: [
      "Electronic fridges have a main board that reads several temperature sensors and switches the compressor, fans, defrost heater, dampers and ice maker. If a reading is out of range or a part does not respond, the board logs a fault and, on most models, shows it as a code on the display or as a pattern of flashing lights. Many fridges keep cooling in a reduced mode while the code is showing.",
      "The same code can have several causes. A fan code may mean the fan has seized, but also that ice has jammed the blade, that a wire has chafed through, or that the board output has failed. A sensor code may be the sensor, its plug, or water in the connector. That is why replacing the part named in an online code list so often does not fix the fridge.",
      "Some codes are not faults at all. Several brands have a showroom or demo mode that lights the display but turns cooling off, and some show a door alarm or a filter reminder. Check the manual or send us a photo of the display before you book.",
    ],
    causes: [
      { title: "Temperature sensor or its wiring", text: "The most common code family. A sensor reading open or short circuit, often from water in a connector or a wire damaged during a defrost." },
      { title: "Fan motor fault", text: "The board cannot detect the fan turning. The fan may be seized, iced in, or its wiring or board output may have failed." },
      { title: "Defrost circuit fault", text: "The defrost took too long or the heater did not warm the sensor. Usually a heater, thermal fuse or defrost sensor." },
      { title: "Ice maker or water system", text: "On fridges with ice and water, codes for the ice maker motor, its sensor, a heater in the ice chute or the water valve." },
      { title: "Communication between boards", text: "The display and the main board are not talking. Often a loose plug, a damaged harness in the door hinge, or surge damage to a board." },
      { title: "Inverter or compressor drive fault", text: "On inverter fridges, a code that the compressor did not start or the inverter board tripped. Needs proper testing before a compressor is blamed." },
    ],
    checks: [
      "Take a clear photo of the display showing the code, and note the model number from the sticker inside the fridge.",
      "Did the code appear after a power cut, a surge or moving the fridge?",
      "Is the fridge still cooling, partly cooling, or warm?",
      "Can you hear the fans when you press the door switch with the door open?",
      "Is there ice on the back wall of the freezer or around the vents?",
    ],
    dontDo: [
      "Do not order parts from an online code list before the fault is tested. The code shows the area, not always the failed part.",
      "Do not keep unplugging the fridge to clear the code. It may come back each time and hides how long the fault has been there.",
      "Do not pull the back panel or board cover off with the fridge plugged in.",
    ],
    faqs: [
      {
        question: "Can you tell me what my fridge's error code means over WhatsApp?",
        answer:
          "Send us a photo of the display and the model sticker and we will tell you what the code usually points to and whether it is safe to keep using the fridge. A firm diagnosis needs the part tested at your home.",
      },
      {
        question: "My fridge display shows a code but it is still cold. Should I worry?",
        answer:
          "Many fridges keep cooling in a backup mode when a sensor or fan code is logged, but cooling is often weaker and defrost may not run, so ice builds up. It is worth booking a repair before the fridge warms up.",
      },
      {
        question: "Will resetting the fridge clear the error code?",
        answer:
          "Unplugging it for a few minutes may clear the display, but if the fault is still there the code returns. A code that never comes back after a reset may have been caused by a power glitch.",
      },
      {
        question: "Which brands do you repair error codes on?",
        answer:
          "All of them, including Samsung, LG, Hisense, Bosch, Defy, Whirlpool, Haier and Midea. Each brand page explains the faults we see most on that make.",
      },
    ],
    related: ["fridge-not-cooling", "fridge-warm-freezer-cold", "ice-build-up", "fridge-ice-maker-not-working"],
    services: [
      { href: "/fridge-control-board-repairs", label: "Control board repairs" },
      { href: "/fridge-fan-motor-replacement", label: "Fan motor replacement" },
      { href: "/fridge-defrost-repairs", label: "Defrost system repairs" },
      { href: "/inverter-fridge-repairs", label: "Inverter fridge repairs" },
    ],
    picture: "controlBoard",
    pictureAlt: "Technician testing a fridge control board and sensors",
  },

  {
    slug: "fridge-electric-shock",
    name: "Fridge giving electric shocks",
    question: "Why does my fridge shock me when I touch it?",
    quickAnswer:
      "A tingle or shock from a fridge means current is leaking onto its metal body and is not being carried safely away by the earth. Usually two things are wrong at once: a fault inside the fridge, such as a damaged cord, a leaking heater or wet wiring, and a socket, plug or adapter with no working earth. Switch it off at the wall and unplug it now, and keep it off until both are tested.",
    cardText: "A tingle from the door or handle. A safety fault: unplug it and have it tested.",
    title: "Fridge Giving Electric Shocks? Unplug It, Then Call Us, Harare",
    description:
      "Feel a tingle or shock when you touch your fridge? It is a safety fault: leaking current and a missing earth. Unplug it and have it tested in Harare, 24/7.",
    h1: "Fridge Giving You an Electric Shock When You Touch It",
    lead:
      "Feeling a buzz from the fridge door, or a sharp shock when you touch the fridge and the sink at the same time, is a warning that should not be ignored. It is not normal, it can get worse, and it can be dangerous, especially for children. Harare Fridge Repairs tests the fridge safely and finds where the current is escaping.",
    points: [
      "A safety fault: unplug the fridge first",
      "The fridge is tested for leakage with the right meter",
      "Cords, plugs, heaters, compressors and wiring checked",
      "We tell you if the socket or house earth needs an electrician",
    ],
    intro: [
      "A fridge's metal cabinet is connected to the earth wire in its cord. If a live wire or a part inside the fridge leaks current to the cabinet, the earth is meant to carry it away and trip the earth leakage. When you feel a shock instead, the earth path is missing or broken, so the current is looking for another route, and your hand is it.",
      "In Harare homes the missing earth is very often at the plug end: a two pin adapter, a travel adapter, a cheap extension lead with no earth wire, or an old socket that was never earthed. On its own that is invisible, because a healthy fridge leaks almost nothing. It becomes a shock when a fault develops inside the fridge, such as a cord chafed against the floor, melt water reaching a connector, a cracked defrost heater, or insulation breaking down in the compressor.",
      "The fix is to find and repair both halves. We test the fridge's insulation and find the leaking part, and we check the plug, adapter and socket earth. If the socket or the house wiring has no earth, an electrician should correct it, and we will say so.",
    ],
    causes: [
      { title: "No earth at the socket, adapter or lead", text: "Two pin adapters, unearthed extension leads and old sockets break the earth path, so any leakage reaches the cabinet instead of tripping the circuit." },
      { title: "Damaged power cord or plug", text: "A cord crushed under a fridge foot, chewed by rats or overheated at the plug can leak current to the body of the fridge." },
      { title: "Water reaching wiring", text: "A blocked defrost drain or a leaking water line lets water reach connectors or the compressor terminals. Often worse just after defrost." },
      { title: "Defrost heater leaking to earth", text: "A cracked heater element on a frost free fridge leaks when it is on, so the shock comes and goes with the defrost cycle." },
      { title: "Compressor insulation breaking down", text: "Worn motor windings inside the compressor leak to its shell. Confirmed with an insulation test, and needs a compressor replacement." },
      { title: "Static from floors and dry weather", text: "Occasionally a small snap on a dry winter day is static, not mains. A tingle that repeats every time you touch the fridge is not static." },
    ],
    checks: [
      "Is the fridge plugged in through a two pin adapter, travel adapter or extension lead?",
      "Do you feel it all the time, or only now and then, such as after defrost?",
      "Is the floor under the fridge wet, or is there water behind the bottom panel?",
      "Is the cord or plug damaged, discoloured or warm?",
      "Has the earth leakage tripped at all, or does it never trip?",
    ],
    dontDo: [
      "Do not keep using the fridge while it gives shocks, even mild ones. Unplug it at the wall first, using a dry hand.",
      "Do not let children touch the fridge until it has been tested.",
      "Do not tape over a damaged cord or swap the plug for an unearthed one.",
    ],
    faqs: [
      {
        question: "Is a small tingle from my fridge dangerous?",
        answer:
          "Yes, treat it as dangerous. A small tingle shows current is leaking with no earth to carry it away, and the leak can grow without warning. Unplug the fridge and have it tested.",
      },
      {
        question: "Why does my fridge only shock me sometimes?",
        answer:
          "Intermittent shocks often follow the defrost cycle, when a cracked heater warms up, or happen after water from the drain reaches a connector. A damaged cord that touches the floor in some positions can do the same.",
      },
      {
        question: "Is it the fridge or my house wiring?",
        answer:
          "Usually both: a fault in the fridge and a missing earth at the socket, adapter or lead. We test the fridge and the plug and socket. If the house wiring has no earth, we will recommend an electrician.",
      },
      {
        question: "Can a fridge that gave shocks be repaired?",
        answer:
          "Yes, in most cases. Cords, plugs, heaters and wet connectors are straightforward repairs. If the compressor is leaking to earth it needs replacing, and we will explain whether that is worth it on your fridge.",
      },
    ],
    related: ["fridge-tripping-power", "fridge-leaking-water", "fridge-compressor-problems", "fridge-not-switching-on"],
    services: [
      { href: "/24-hour-fridge-repairs", label: "24 hour fridge repairs" },
      { href: "/fridge-defrost-repairs", label: "Defrost system repairs" },
      { href: "/compressor-replacement", label: "Compressor replacement" },
      { href: "/fridge-power-surge-repairs", label: "Power surge repairs" },
    ],
    picture: "rearService",
    pictureAlt: "Technician testing the wiring and compressor at the back of a fridge",
  },

  {
    slug: "fridge-door-not-closing",
    name: "Fridge door not closing",
    question: "Why won't my fridge door close properly?",
    quickAnswer:
      "Most doors that will not close are caused by the fridge leaning forward or sideways, something inside blocking the door, an overloaded door shelf, a dropped hinge or a gasket that has folded or hardened. Level the fridge so it tilts slightly back, clear the shelves and check the seal. If the door still swings open or leaves a gap, the hinge, closing cam or gasket needs replacing.",
    cardText: "The door swings open, leaves a gap or will not seal. Usually levelling, hinges or the gasket.",
    title: "Fridge Door Not Closing? Hinge, Seal & Level Fixes, Harare",
    description:
      "Fridge door not closing or sealing? Most causes are levelling, hinges, door shelves or the gasket. Simple checks, and on-site repairs anywhere in Harare, 24/7.",
    h1: "Fridge Door Not Closing or Not Sealing Properly",
    lead:
      "A fridge door that does not shut by itself, or leaves a gap at one corner, costs more than you think. Warm air pours in, the fridge runs all day, ice builds up in the freezer and food spoils early. The causes are mostly mechanical and quick to fix. Harare Fridge Repairs sorts out doors, hinges and seals at your home.",
    points: [
      "Levelling feet and rollers adjusted",
      "Hinges, closing cams and door stops replaced",
      "Folded or hardened gaskets reshaped or renewed",
      "French door flippers and built-in door sliders repaired",
    ],
    intro: [
      "Fridge doors are designed to swing closed under their own weight. The front of the fridge sits a little higher than the back, and a cam in the bottom hinge helps the door fall shut. If the fridge has been moved, a foot has dropped on an uneven floor, or the front feet were never wound down, the door may swing open or stop just short of closing.",
      "Weight is the next cause. A door packed with bottles and jars pulls on its hinge, and over months the door drops so the seal misses the cabinet at the top corner. Hinge bushes and closing cams wear and crack, especially on doors that are slammed. On French door fridges the small hinged flap between the two doors can stick and stop the second door closing.",
      "The gasket is the last link. A rubber seal that has folded back on itself, hardened with age or torn at a corner leaves a gap even when the door looks shut. A simple paper test tells you: close the door on a strip of paper; if it slides out easily at any point, the seal is not doing its job.",
    ],
    causes: [
      { title: "Fridge not level", text: "The fridge leans forward or to one side, so the door swings open or does not fall closed. Fixed by adjusting the front feet so it tilts slightly back." },
      { title: "Something in the way", text: "A shelf, crisper drawer, ice tray or tall bottle pushed too far forward stops the door. The simplest cause to rule out." },
      { title: "Overloaded door shelves", text: "Heavy bottles in the door pull the hinge down over time, so the door sags and the seal misses the cabinet at one corner." },
      { title: "Worn hinge, bush or closing cam", text: "Plastic bushes and cams crack or wear, the door drops and no longer self-closes. Replaced on site." },
      { title: "Gasket folded, hard or torn", text: "A seal that has folded back, hardened or split leaves a gap. Sometimes reshaped with warmth, often best replaced." },
      { title: "French door flipper or built-in sliders", text: "A stuck centre flap on French door fridges, or worn door sliders on integrated fridges, stops the door closing fully." },
    ],
    checks: [
      "Has the fridge been moved, or the floor under it changed?",
      "Put a spirit level on top. Does the fridge lean forward?",
      "Open the door half way and let go. Does it swing shut by itself?",
      "Close the door on a strip of paper at several points. Does it slide out easily anywhere?",
      "Is the door lower at the handle side than at the hinge side?",
    ],
    dontDo: [
      "Do not lean on the door or hang bags on the handle; it drops the hinge further.",
      "Do not force a warped gasket with glue or tape. It tears and leaks worse.",
      "Do not keep using a freezer whose door does not seal. The ice that builds up can damage the evaporator and the fan.",
    ],
    faqs: [
      {
        question: "How do I stop my fridge door swinging open?",
        answer:
          "Wind the front feet down until the fridge tilts slightly backwards, about a centimetre higher at the front than the back. The door should then fall shut. If it still swings open, the hinge cam may be worn.",
      },
      {
        question: "Can a fridge door seal be replaced?",
        answer:
          "Yes. Gaskets are replaced on site for most fridges and freezers. Our door seal replacement page explains how we measure and fit them.",
      },
      {
        question: "Why does my freezer door pop open after I close the fridge?",
        answer:
          "Closing one door pushes air into the cabinet and can nudge the other door if it is not sealing well. Levelling the fridge and checking the freezer gasket usually solves it.",
      },
      {
        question: "Why is it hard to open the freezer straight after closing it?",
        answer:
          "That is normal. Warm air shut inside cools, contracts and pulls the door closed for a few seconds. It means the seal is good.",
      },
    ],
    related: ["fridge-door-seal-problems", "ice-build-up", "fridge-running-constantly", "fridge-sweating-condensation"],
    services: [
      { href: "/fridge-door-seal-replacement", label: "Door seal replacement" },
      { href: "/french-door-fridge-repairs", label: "French door fridge repairs" },
      { href: "/built-in-fridge-repairs", label: "Built-in fridge repairs" },
      { href: "/fridge-repairs", label: "Fridge repairs" },
    ],
    picture: "doorSeal",
    pictureAlt: "Technician checking and fitting a fridge door seal",
  },

  {
    slug: "fridge-sweating-condensation",
    name: "Fridge sweating or wet inside",
    question: "Why is my fridge sweating on the outside or wet inside?",
    quickAnswer:
      "Water on the outside of a fridge is condensation: warm, humid air meeting a cold surface. A little in Harare's rainy season is normal, but beads along the door edges or between the doors usually mean a worn seal or a failed anti-condensation heater. Water inside usually comes from doors left open, uncovered hot food, a poor seal or a blocked defrost drain.",
    cardText: "Beads of water on the doors or cabinet, or puddles inside. Seals, heaters, drains or humid weather.",
    title: "Fridge Sweating or Wet Inside? Causes & Fixes in Harare",
    description:
      "Fridge sweating on the outside or wet inside? Seals, door heaters, drains and Harare's humid rainy season explained, with on-site repairs across Harare, 24/7.",
    h1: "Fridge Sweating on the Outside or Wet Inside",
    lead:
      "From November to March, Harare's humid evenings make fridges sweat. Some of that is just the weather. But water that runs down the doors, collects between the doors of a side by side, or pools on the shelves inside points to a part that has worn out. Harare Fridge Repairs helps you tell the difference and fixes the cause at your home.",
    points: [
      "Outside sweating: seals, door frame heaters and humidity",
      "Inside wetness: drains, seals and how the fridge is used",
      "Side by side and French door centre heaters tested",
      "Repairs done at your address, anywhere in Harare",
    ],
    intro: [
      "Condensation forms whenever moist air touches a surface colder than its dew point. On a fridge that can happen on the outside of the cabinet, along the door edges and on the strip between two doors, or on the inside walls and food. During the rains, with the kitchen warm from cooking, a light film on the cabinet can be normal. Steady drips are not.",
      "On the outside, the most common cause is cold air escaping through a worn door gasket and chilling the door edge, so water beads along that line. Larger fridges, especially side by side and French door models, have small heaters in the cabinet frame or the centre flap to keep those strips warmer than the room. When a heater fails, that strip sweats heavily and may even rust.",
      "Inside, water usually means extra moisture is getting in or is not being drained away. Doors opened often or left ajar, hot pots and uncovered food, and a weak seal all add moisture. In frost free fridges that water should freeze onto the evaporator and be drained away during defrost. A blocked or frozen drain sends it into the cabinet instead, where it pools under the crisper drawers or freezes on the freezer floor.",
    ],
    causes: [
      { title: "Worn or folded door gasket", text: "Cold air leaks out along the seal and chills the door edge, so water beads there. Inside, warm air leaks in and adds moisture." },
      { title: "Failed frame or centre heater", text: "On side by side and French door fridges, a failed anti-condensation heater lets the frame or the centre flap sweat, sometimes enough to drip." },
      { title: "Blocked defrost drain", text: "Melt water cannot reach the tray at the back, so it overflows into the fridge and pools under the drawers or on the freezer floor." },
      { title: "Humid weather and a warm kitchen", text: "In the rainy season a thin film on the outside can be normal. Good ventilation around the fridge and closing the doors quickly reduce it." },
      { title: "Hot or uncovered food", text: "Steam from hot pots and uncovered dishes condenses on the walls. Cover food and let it cool before putting it in." },
      { title: "Temperature set too warm or too cold", text: "Very cold settings can make the outside sweat more; a fridge running warm lets moisture linger inside. Around 3 to 4 degrees suits most fridges." },
    ],
    checks: [
      "Is the water on the outside, inside, or both?",
      "Outside: is it along one door edge, between two doors, or all over the cabinet?",
      "Close the door on a strip of paper. Does it slide out easily anywhere?",
      "Inside: is the water under the crisper drawers or on the freezer floor?",
      "Is it worse in the evening, after cooking, or in rainy weather?",
    ],
    dontDo: [
      "Do not wipe the water away and ignore it if it keeps coming back. Constant sweating rusts door edges and can reach wiring.",
      "Do not poke the drain hole with a sharp object; the pipe behind is easily pierced.",
      "Do not block the vents or the space around the fridge with bags or boxes. It traps warm, humid air.",
    ],
    faqs: [
      {
        question: "Is it normal for my fridge to sweat in the rainy season?",
        answer:
          "A light film of moisture on a humid evening can be normal. Water that runs, drips or collects in the same place every day is not, and usually points to a worn seal or a failed heater.",
      },
      {
        question: "Why is the strip between my side by side doors wet?",
        answer:
          "Most side by side and French door fridges have a small heater in that strip or in the centre flap. When it fails, cold from the cabinet chills the strip and water condenses on it. We test and replace the heater.",
      },
      {
        question: "Why is there water under the drawers in my fridge?",
        answer:
          "The defrost drain is probably blocked or frozen. We clear it, check the drain heater on models that have one, and make sure the water reaches the tray at the back.",
      },
      {
        question: "Can condensation damage my fridge?",
        answer:
          "Over time, yes. Constant water rusts the door edges and frame, rots seals and can reach electrical connectors. It is worth fixing the cause.",
      },
    ],
    related: ["fridge-leaking-water", "fridge-door-seal-problems", "fridge-door-not-closing", "ice-build-up"],
    services: [
      { href: "/fridge-door-seal-replacement", label: "Door seal replacement" },
      { href: "/fridge-defrost-repairs", label: "Defrost system repairs" },
      { href: "/side-by-side-fridge-repairs", label: "Side by side fridge repairs" },
      { href: "/fridge-temperature-settings", label: "Fridge temperature settings" },
    ],
    picture: "doorSeal",
    pictureAlt: "Close up of a fridge door seal being checked for gaps",
  },
]
