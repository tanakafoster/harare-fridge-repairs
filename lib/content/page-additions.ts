import type { ContentSection } from "./model"

/**
 * Extra sections for existing pages. The topics come from studying how a
 * large appliance repair site organises fridge content (warning signs per
 * unit type, symptom lists that link to guides, commercial notes on each
 * fault); the words are our own and written for Harare. Each map is keyed
 * by the page slug, and the page builders slot these sections in before the
 * closing link blocks.
 */

/* -------------------------------------------------------------------- */
/* Fridge type pages                                                     */
/* -------------------------------------------------------------------- */

function signs(name: string, items: string[]): ContentSection {
  return {
    kind: "list",
    heading: `Early warning signs on a ${name}`,
    intro: "Call before it stops completely. Faults caught at this stage are usually quicker and cheaper to fix.",
    items,
    columns: 2,
    tone: "frost",
  }
}

export const typeAdditions: Record<string, ContentSection[]> = {
  "single-door-fridge-repairs": [
    signs("single door fridge", [
      "The freezer box needs defrosting far more often than it used to",
      "Milk lasts a day or two less than normal",
      "The compressor clicks several times before it starts",
      "The outside of the cabinet feels warmer than usual",
      "A light hiss from the freezer box after defrosting",
      "The thermostat has to be turned to the coldest setting to cope",
    ]),
  ],
  "double-door-fridge-repairs": [
    signs("double door fridge", [
      "Freezer still cold but the fridge section slowly warming",
      "Frost forming on the freezer back wall on a frost free model",
      "The compressor running for much longer than it used to",
      "Water under the crisper drawers",
      "Either door no longer swinging shut by itself",
      "A new rattle or buzz that comes and goes with the compressor",
    ]),
  ],
  "combi-fridge-repairs": [
    signs("combi fridge freezer", [
      "Bottom freezer drawers icing up around the edges",
      "Fridge section warm while the freezer below is fine",
      "A fan that ticks or scrapes behind the freezer panel",
      "Water pooling under the fridge after each defrost",
      "Display temperature drifting away from the setting",
      "Food at the back of the fridge freezing while the front is warm",
    ]),
  ],
  "side-by-side-fridge-repairs": [
    signs("side by side fridge", [
      "Ice maker slowing down or producing hollow cubes",
      "Water dispenser dribbling or not running at all",
      "The strip between the doors sweating or rusting",
      "Error code or flashing light on the dispenser panel",
      "Fridge side warmer than usual on hot afternoons",
      "Frost around the ice chute or on the freezer back panel",
    ]),
  ],
  "french-door-fridge-repairs": [
    signs("French door fridge", [
      "The centre flap between the doors sticking or not folding",
      "Condensation running down the centre of the doors",
      "Bottom freezer drawer not closing fully",
      "Fan noise that stops when a door is opened",
      "Display showing a sensor or fan code",
      "Ice building up behind the freezer drawer",
    ]),
  ],
  "bar-fridge-repairs": [
    signs("bar fridge", [
      "Drinks only cool, never properly cold",
      "Cabinet unusually hot to touch in its cupboard",
      "Compressor buzzing loudly or clicking off quickly",
      "Ice forming on the back wall and dripping",
      "Glass door misting on humid evenings",
      "Fridge running all the time with no rest",
    ]),
  ],
  "wine-cooler-repairs": [
    signs("wine cooler", [
      "Temperature on the display drifting by more than a degree or two",
      "Corks pushing out or bottles weeping",
      "Glass door fogging up inside",
      "Fan running loudly or not at all",
      "One zone of a dual zone cooler warmer than the other",
      "The cooler struggling on hot days in October and November",
    ]),
  ],
  "chest-freezer-repairs": [
    signs("chest freezer", [
      "Ice building up thickly near the lid within weeks of a defrost",
      "Meat at the top softer than meat at the bottom",
      "The freezer running all the time with no break",
      "The outside walls feeling hot in places and cold in others",
      "The lid seal torn or the lid not sitting flat",
      "A loud click every few minutes after a power cut",
    ]),
  ],
  "upright-freezer-repairs": [
    signs("upright freezer", [
      "Frost building on the drawers or back wall",
      "Ice cream soft while other food still feels frozen",
      "Door not sealing because of ice along the bottom edge",
      "Water on the floor after the freezer defrosts",
      "Fan noise from the top of the cabinet",
      "Temperature alarm or warning light on the control panel",
    ]),
  ],
  "beverage-chiller-repairs": [
    signs("beverage chiller", [
      "Drinks at the top cold but bottles at the bottom only cool",
      "Glass doors not swinging closed or gaskets torn",
      "Fan running noisily behind the top panel",
      "Condensate water spilling from the drip tray",
      "Lights flickering or the canopy display going dark",
      "Chiller struggling in the afternoon sun near the shop door",
    ]),
    {
      kind: "text",
      heading: "Coolers supplied by a drinks company",
      paragraphs: [
        "Many tuck shops and bottle stores in Harare have a branded chiller placed by a drinks supplier. If yours belongs to the supplier, check the agreement first, because many suppliers have their own service arrangements and some do not allow outside repairs. For a chiller you bought yourself, we repair it like any other.",
      ],
    },
  ],
  "underbar-fridge-repairs": [
    signs("underbar fridge", [
      "Beer warm only on busy nights, fine when the bar is quiet",
      "Condenser grille under the counter thick with dust and sticky spills",
      "Compressor tripping out when the bar is hot",
      "Door gaskets split from constant opening",
      "Water collecting on the floor behind the bar",
      "Fans squealing or rattling",
    ]),
    {
      kind: "text",
      heading: "Why underbar fridges fail more than other fridges",
      paragraphs: [
        "An underbar fridge works in a tight space with very little air, beside other fridges that are all dumping heat into the same void. Every spill finds its way to the condenser, where it mixes with dust into a sticky layer that cuts the fridge's ability to cool. Add hundreds of door openings a night and it is easy to see why so many underbar calls are a clean, a fan and a gasket rather than a major part.",
      ],
    },
  ],
  "under-counter-fridge-repairs": [
    signs("under-counter fridge", [
      "High temperature alarm during the lunch or dinner rush",
      "Grease building up on the front grille",
      "Drawers not sealing or runners sticking",
      "Ice forming on the evaporator inside the cabinet",
      "Fridge running hot beside an oven or fryer",
      "Water pooling on the cabinet floor",
    ]),
  ],
  "commercial-upright-fridge-repairs": [
    signs("commercial upright fridge", [
      "Cabinet taking longer to recover after deliveries",
      "Door not closing by itself on the spring or cam",
      "Controller reading higher than the probe thermometer",
      "Evaporator fan noisy or stopped",
      "Ice on the evaporator cover at the top of the cabinet",
      "Compressor running nonstop in hot weather",
    ]),
    {
      kind: "text",
      heading: "Temperatures, food safety and inspections",
      paragraphs: [
        "In a kitchen, a reach-in fridge that drifts warm is a food safety problem before it is a repair. Health inspectors check that fridges holding food are at a safe temperature, and a unit running warm can mean thrown-out stock as well as a poor report. A simple log of the reading at opening and closing shows a fridge drifting days before it fails, and it is worth keeping for inspections too.",
      ],
    },
  ],
  "display-freezer-repairs": [
    signs("display freezer", [
      "Glass lids misting and not clearing",
      "Ice cream soft at the top of the well",
      "Frost building around the lid runners",
      "Lid heaters or lights not working",
      "Condenser at floor level clogged with dust",
      "Freezer stopping after load shedding and slow to restart",
    ]),
  ],
  "butchery-display-fridge-repairs": [
    signs("butchery display fridge", [
      "Meat discolouring faster than normal",
      "Display glass sweating on humid mornings",
      "Fans noisy or ice on the coil at the back",
      "Cabinet warm at the front edge where the meat sits",
      "Water dripping under the counter",
      "Compressor running nonstop in the afternoon",
    ]),
  ],
  "cake-display-fridge-repairs": [
    signs("cake display fridge", [
      "Glass misting from the inside or outside",
      "Cream softening on the top shelf",
      "Display lights flickering",
      "Fan running loudly or not at all",
      "Rear sliding doors sticking or not closing",
      "Water collecting on the base deck",
    ]),
  ],
  "multideck-chiller-repairs": [
    signs("multideck chiller", [
      "Top shelves warmer than the bottom",
      "Ice forming on the back panel or honeycomb grille",
      "Night blind or curtain no longer closing",
      "Fans along the base noisy or stopped",
      "Water spilling over the front lip",
      "Cabinet struggling on the hottest afternoons",
    ]),
    {
      kind: "text",
      heading: "Plan maintenance before the hot months",
      paragraphs: [
        "The busiest trading weeks in Harare are often also the hottest, and that is when open-fronted multidecks work hardest. A condenser clean, fan check and gasket and blind check in September, before the October heat, prevents a lot of mid-season breakdowns. Our fridge servicing page explains what a planned visit covers.",
      ],
    },
  ],
  "ice-machine-repairs": [
    signs("ice machine", [
      "Ice production slower than usual",
      "Cubes cloudy, small, hollow or stuck together",
      "Ice tasting or smelling odd",
      "Water leaking under the machine",
      "Harvest taking longer, or ice not dropping",
      "Scale building up on the water plate or evaporator",
    ]),
    {
      kind: "list",
      heading: "Businesses that depend on ice",
      intro: "When an ice machine stops, these are the places that feel it first.",
      items: [
        "Bars, clubs and bottle stores serving cold drinks",
        "Restaurants and fast food outlets",
        "Hotels, lodges and guest houses",
        "Cafes making iced coffee and smoothies",
        "Event venues, caterers and wedding sites",
        "Clinics and labs that use ice for cooling",
        "Fuel station shops selling bagged ice",
        "Butcheries and fish shops keeping displays cold",
      ],
      columns: 2,
    },
    {
      kind: "text",
      heading: "Cube, flake and nugget ice",
      paragraphs: [
        "Cube machines freeze water on a cold plate or grid and then warm it briefly to drop the cubes into the bin. Cubes melt slowly, so they suit drinks. Flake machines scrape thin ice off a cold drum, giving soft ice that packs around fish, meat or salad displays. Nugget machines compress flake ice into small chewable pieces.",
        "Each type fails differently. Cube machines suffer from scale and harvest faults, flake machines from worn augers and bearings, and all of them from dirty condensers and poor water. Tell us the type and the model when you call.",
      ],
    },
    {
      kind: "list",
      heading: "What an ice machine service covers",
      items: [
        "Descale and sanitise the water system, plate or evaporator",
        "Clean the condenser and check the fan motor",
        "Check the water inlet valve, float or level probe and filter",
        "Check the harvest cycle and bin level control",
        "Measure the refrigerant pressures and compressor current",
        "Check the drain and the bin for leaks or blockages",
      ],
      columns: 1,
    },
  ],
  "cold-room-repairs": [
    {
      kind: "steps",
      heading: "Four early warnings in a cold room",
      intro: "Most cold room failures announce themselves. Watch for these.",
      items: [
        { title: "The door", text: "A door that has dropped, a torn gasket or a broken closer lets warm air in all day. Look for frost or ice around the frame and on the floor by the door." },
        { title: "Ice where it should not be", text: "A healthy cold room has very little ice. Ice on the ceiling, the evaporator or the stock means a door, defrost or airflow problem." },
        { title: "Water on the floor", text: "Puddles under the evaporator usually mean a blocked or frozen drain, or a drain heater that has failed. Left alone, it freezes and spreads." },
        { title: "Temperatures that wander", text: "If staff keep turning the controller down to keep up, the unit is losing capacity. Call before it stops completely." },
      ],
    },
  ],
}

/* -------------------------------------------------------------------- */
/* Service pages                                                         */
/* -------------------------------------------------------------------- */

export const serviceAdditions: Record<string, ContentSection[]> = {
  "fridge-repairs": [
    {
      kind: "cards",
      heading: "Tell us what your fridge is doing",
      intro: "These are the words our customers use when they call. Each one links to a guide that explains the likely causes.",
      items: [
        { href: "/problems/fridge-not-cooling", label: "Running but not cooling", text: "The light is on and the compressor runs, but the food is warm." },
        { href: "/problems/fridge-clicking-on-and-off", label: "Starts, then cuts off", text: "Runs for a few seconds, clicks off, and tries again." },
        { href: "/problems/fridge-not-switching-on", label: "Will not start at all", text: "No sound, no light, or a hum and nothing more." },
        { href: "/problems/fridge-tripping-power", label: "Tripping the power", text: "The earth leakage or breaker goes every time the fridge starts." },
        { href: "/problems/fridge-error-code", label: "Code on the display", text: "Letters, numbers or a flashing light on the control panel." },
        { href: "/problems/fridge-guard-red-light", label: "Fridge guard on red", text: "The voltage protector is holding power back." },
        { href: "/problems/fridge-leaking-water", label: "Water on the floor", text: "Leaking under the fridge or pooling inside." },
        { href: "/problems/fridge-making-noise", label: "Strange noises", text: "Buzzing, rattling, ticking or grinding." },
        { href: "/problems/fridge-freezing-food", label: "Freezing everything", text: "Lettuce frozen and drinks icing up in the fridge." },
        { href: "/problems/ice-build-up", label: "Too much ice", text: "Frost and ice building in the freezer or fridge." },
        { href: "/problems/fridge-bad-smell", label: "Bad smell", text: "Food going off early or an odour that will not clear." },
        { href: "/problems/fridge-electric-shock", label: "Shock when touched", text: "A tingle from the door or handle." },
        { href: "/problems/fridge-door-not-closing", label: "Door will not close", text: "Swings open, leaves a gap or will not seal." },
        { href: "/problems/fridge-ice-maker-not-working", label: "No ice from the dispenser", text: "Ice maker or water dispenser has stopped." },
      ],
      columns: 3,
    },
    {
      kind: "text",
      heading: "Newer fridges need a trained technician, not guesswork",
      paragraphs: [
        "Today's fridges use far less electricity than the ones many of us grew up with, and they do much more: frost free defrost, inverter compressors, several sensors and a control board that ties them together. They last for many years when they are repaired properly, but there is more to get wrong. A fridge that is regassed when the real fault was a defrost sensor, or given a new board when the fault was a fan, comes back within weeks.",
        "That is also why we ask customers not to open the back of a fridge themselves. Panels hide live connections, refrigerant pipes are easily cracked, and an evaporator pierced while chipping ice turns a small job into a big one. A phone call or a WhatsApp photo costs nothing, and we can often tell you whether it is safe to keep using the fridge until we arrive.",
      ],
    },
  ],
  "freezer-repairs": [
    {
      kind: "steps",
      heading: "Freezer symptoms and what they usually mean",
      intro: "A rough guide to the faults behind the six complaints we hear most.",
      items: [
        { title: "Frost building up", text: "On a frost free freezer, a failed defrost part. On a chest or manual freezer, a lid or door seal letting humid air in." },
        { title: "Very noisy", text: "A fan hitting ice, a worn fan motor, loose panels, or a compressor working too hard against a dirty condenser." },
        { title: "Will not start", text: "Start relay or overload, a thermostat, a supply problem or fridge guard, or occasionally the compressor." },
        { title: "Too cold", text: "A thermostat or sensor stuck calling for cooling, or a setting changed. Food rock hard and the compressor never stops." },
        { title: "Not cold enough", text: "Dirty condenser, worn seal, iced evaporator, failed fan or, less often, a refrigerant leak." },
        { title: "Runs all the time", text: "Heat getting in or not getting out: seals, condenser, ventilation, overloading with warm food, or a weak compressor." },
      ],
    },
  ],
  "24-hour-fridge-repairs": [
    {
      kind: "text",
      heading: "Why a business breakdown cannot wait until Monday",
      paragraphs: [
        "When a shop or restaurant fridge fails, the loss is twice over: the stock that spoils, and the sales that cannot be made while the unit is down. A cold room of meat, a bar's worth of cold drinks or a pharmacy fridge of medicines can be worth far more than the repair. That is why we treat commercial callouts with stock at risk as urgent at any hour.",
        "If you run a business, save our numbers, 0782 886 252 and 0719 227 718, where your staff can find them, and agree in advance who may approve a repair after hours. It saves time when the call comes at night.",
      ],
    },
  ],
  "fridge-servicing": [
    {
      kind: "list",
      heading: "Extra checks for commercial units",
      intro: "On shop, bar and kitchen refrigeration, a service goes further than on a home fridge.",
      items: [
        "Air filters on units that have them cleaned or replaced",
        "Refrigerant pressures measured against the unit's normal readings",
        "Condenser fan motor and blade checked for wear and balance",
        "Condensate drains and drip trays cleared and tested",
        "Safety controls and high and low pressure cut-outs tested",
        "Contactors and terminals inspected for burning or pitting",
        "Controller and thermostat checked against a reference thermometer",
      ],
      columns: 1,
    },
  ],
}

/* -------------------------------------------------------------------- */
/* Problem guides                                                        */
/* -------------------------------------------------------------------- */

function commercialNote(paragraphs: string[]): ContentSection {
  return { kind: "text", heading: "If it is a commercial fridge", paragraphs, tone: "frost" }
}

export const problemAdditions: Record<string, ContentSection[]> = {
  "fridge-not-cooling": [
    commercialNote([
      "In a shop or kitchen, a chiller that will not cool is usually losing a fight with heat. Condensers on display fridges and underbar units clog with dust, grease and spilled drinks far faster than at home, and doors are opened hundreds of times a day. A dirty condenser, a slow condenser fan or a failed evaporator fan is the first thing we check, before gas.",
      "Commercial units also suffer more from torn gaskets and doors that no longer close on their springs, and from stock packed against the air outlets. If the cabinet cools overnight but warms during trading, those are the likely culprits.",
    ]),
  ],
  "fridge-leaking-water": [
    commercialNote([
      "Display fridges, multidecks and cold rooms all produce a lot of melt water, and it has to go somewhere: a drain pipe, a heated drain line, an evaporation tray or a floor drain. When any of these blocks or freezes, the water ends up on the shop floor. On freezer rooms, a drain line whose heater has failed freezes solid and the melt water has nowhere to go.",
      "Ice machines and units with water lines can also leak at the inlet valve or a cracked hose. Turn off the water supply to the machine if you can, and call us.",
    ]),
  ],
  "fridge-making-noise": [
    commercialNote([
      "Commercial fridges are noisier than home fridges by design, so the question is whether the noise is new. A new squeal usually means a fan bearing is wearing out, a scraping sound can be a fan blade touching ice, and a rattle often comes from a loose panel, a pipe touching the cabinet or the unit not sitting level on its feet.",
      "A compressor that knocks or hammers on start up needs attention quickly, especially in a unit that runs long hours. Catching a noisy fan before it seizes is much cheaper than a stock loss.",
    ]),
  ],
  "ice-build-up": [
    commercialNote([
      "In multidecks, upright display fridges and cold rooms, ice on the evaporator usually means the defrost is not working, the door is letting in humid air, or the evaporator fan has stopped. In cold rooms, ice building on the ceiling and around the door frame is a sure sign that the door seal or closer needs attention.",
      "Hacking ice off the coils of a commercial evaporator is a common and expensive mistake. Switch the unit to defrost if it has a manual defrost button, or switch it off and call us.",
    ]),
  ],
  "fridge-running-constantly": [
    commercialNote([
      "A commercial fridge that never rests is often simply working beyond its limit: placed in direct sun or beside an oven, loaded with warm stock, or packed so tightly that air cannot move. Those are fixed with placement and loading, not parts.",
      "If the conditions have not changed, look at the condenser, the door seals and the controller settings. A unit whose controller has been turned colder to keep up is a sign the system is losing capacity, and it is worth checking before the compressor overheats.",
    ]),
  ],
  "fridge-compressor-problems": [
    commercialNote([
      "Commercial compressors run far longer hours than home ones, often in hot back rooms with little airflow. Overheating from a dirty condenser or a failed condenser fan is the most common reason they trip on overload and, in time, fail. A compressor that cuts out on its overload in the afternoon and recovers at night is telling you it is too hot.",
      "Before a commercial compressor is replaced, we check the condenser, the fans, the start components, the supply voltage and the refrigerant charge. Replacing a compressor without fixing the reason it overheated only buys a few months.",
    ]),
  ],
  "freezer-not-freezing": [
    commercialNote([
      "Display freezers and chest freezers in shops are opened all day, often in warm rooms, and a lid or door that does not seal is the fastest way to lose freezing. Ice cream softening at the top of a well is often a lid, heater or loading problem rather than a refrigeration fault.",
      "For cold rooms and freezer rooms, a door left open during a delivery can take hours to recover from. If it never recovers, the condensing unit, the evaporator fans or the defrost need checking.",
    ]),
  ],
  "fridge-door-seal-problems": [
    commercialNote([
      "Commercial door gaskets wear out much faster than home ones because of how often they are opened. Glass doors on beverage chillers and multidecks also rely on springs or closers to pull them shut. A worn closer leaves the door a few millimetres open, which looks shut but lets warm air in all day.",
      "Walk-in cold rooms depend on the door gasket and, on freezer rooms, a heater in the door frame. A failed frame heater lets the gasket freeze to the frame and tear. We replace gaskets, closers and frame heaters on site.",
    ]),
  ],
}

/**
 * Insert extra sections before the trailing run of link blocks (chips and
 * cards), so the new text sits with the page's other explanations.
 */
export function withAdditions(sections: ContentSection[], additions: ContentSection[] | undefined): ContentSection[] {
  if (!additions || additions.length === 0) return sections
  let index = sections.length
  while (index > 0 && (sections[index - 1].kind === "chips" || sections[index - 1].kind === "cards")) index -= 1
  return [...sections.slice(0, index), ...additions, ...sections.slice(index)]
}
