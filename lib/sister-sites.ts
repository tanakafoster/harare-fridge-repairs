/**
 * Links to our sister businesses. They share our phone lines but repair
 * other appliances, so a link helps a visitor whose problem is not a fridge.
 *
 * Kept deliberately small: about five contextual links per site, on pages
 * where the link is useful, never site-wide. `scripts/check-site.mjs` fails
 * the build if a sister site is linked from more than five pages. Links go to
 * each site's canonical www host and never to Electro's fridge pages, which
 * would compete with ours.
 */
export const sisterSites = {
  washing: {
    name: "Harare Washing Machine Repairs",
    url: "https://www.hararewashingmachinerepairs.co.zw",
  },
  electro: {
    name: "Electro Appliance Repairs",
    url: "https://www.electroappliancerepairs.co.zw",
  },
} as const

export type SisterSiteKey = keyof typeof sisterSites

export type SisterMention = {
  site: SisterSiteKey
  /** Path on the sister site, "/" for its home page. */
  target: string
  before: string
  anchor: string
  after: string
}

export type SisterNote = { heading: string; mentions: SisterMention[] }

export const maxSisterPagesPerSite = 5

/** Keyed by the path of the page on this site that shows the note. */
export const sisterNotes: Record<string, SisterNote> = {
  "/": {
    heading: "Not a fridge or freezer?",
    mentions: [
      {
        site: "washing",
        target: "/",
        before: "We only repair fridges and freezers. If it is your washing machine that has stopped, our sister business ",
        anchor: "Harare Washing Machine Repairs",
        after: " repairs front loaders, top loaders and twin tubs at your home across Harare.",
      },
      {
        site: "electro",
        target: "/",
        before: "For dishwashers, tumble dryers, stoves, ovens and microwaves, call on ",
        anchor: "Electro Appliance Repairs",
        after: ", which repairs other household appliances in Harare.",
      },
    ],
  },
  "/faq": {
    heading: "Need a washing machine or stove repaired?",
    mentions: [
      {
        site: "washing",
        target: "/services",
        before: "Harare Fridge Repairs works on fridges and freezers only, so that we can do one job well. For ",
        anchor: "washing machine repairs in Harare",
        after: ", including front loaders, top loaders and twin tubs, see our sister business Harare Washing Machine Repairs.",
      },
      {
        site: "electro",
        target: "/oven-microwave-stove-repairs",
        before: "For ",
        anchor: "stove, oven and microwave repairs",
        after: ", as well as dishwashers and tumble dryers, see Electro Appliance Repairs.",
      },
    ],
  },
  "/commercial-fridge-repairs": {
    heading: "Other commercial appliances",
    mentions: [
      {
        site: "electro",
        target: "/commercial-appliance-repairs",
        before: "We look after refrigeration only. For commercial dishwashers, ovens, stoves and laundry machines, our sister business Electro Appliance Repairs offers ",
        anchor: "commercial appliance repairs",
        after: " for restaurants, shops, offices and guest houses in Harare.",
      },
    ],
  },
  "/tips": {
    heading: "Looking after your other appliances",
    mentions: [
      {
        site: "electro",
        target: "/tips-advice",
        before: "These tips are written for fridges and freezers. For washing machines, dishwashers, tumble dryers, stoves and ovens, Electro Appliance Repairs has ",
        anchor: "appliance care tips",
        after: " for each of them.",
      },
    ],
  },
  "/fridge-power-surge-repairs": {
    heading: "Did the power cut damage other appliances?",
    mentions: [
      {
        site: "electro",
        target: "/appliance-damage-after-power-cuts",
        before: "Dishwashers and tumble dryers can be damaged by the same surge. Our sister business Electro Appliance Repairs explains ",
        anchor: "appliance damage after power cuts",
        after: " and repairs those appliances across Harare.",
      },
    ],
  },
  "/protect-fridge-from-power-cuts": {
    heading: "Protecting your washing machine too",
    mentions: [
      {
        site: "washing",
        target: "/guides/protect-washing-machine-from-load-shedding-surges",
        before: "Washing machines are hurt by the same spikes and low-voltage restarts, especially their control boards. Harare Washing Machine Repairs has a guide to ",
        anchor: "protecting a washing machine from load shedding surges",
        after: ".",
      },
    ],
  },
  "/fridge-control-board-repairs": {
    heading: "Washing machine control board trouble?",
    mentions: [
      {
        site: "washing",
        target: "/services/pcb-control-board-repairs",
        before: "We repair fridge and freezer electronics only. If a surge has also taken out your washing machine, our sister business offers ",
        anchor: "washing machine PCB and control board repairs",
        after: " across Harare.",
      },
    ],
  },
  "/problems/fridge-leaking-water": {
    heading: "Is the water coming from the washing machine?",
    mentions: [
      {
        site: "washing",
        target: "/washing-machine-problems/washing-machine-leaking",
        before: "If your washing machine stands next to the fridge, check where the water starts. If it is the washing machine, Harare Washing Machine Repairs explains ",
        anchor: "why a washing machine leaks",
        after: " and repairs it at home.",
      },
    ],
  },
}

export function sisterHref(mention: SisterMention) {
  const base = sisterSites[mention.site].url
  return mention.target === "/" ? `${base}/` : `${base}${mention.target}`
}

/** Pages that link to each sister site, for the build check and the README. */
export function sisterPagesBySite() {
  const result: Record<SisterSiteKey, string[]> = { washing: [], electro: [] }
  for (const [path, note] of Object.entries(sisterNotes)) {
    for (const site of new Set(note.mentions.map((m) => m.site))) result[site].push(path)
  }
  return result
}
