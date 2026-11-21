import type { AdviceRecord } from "./advice"

/**
 * A guide to the refrigerant gases found in fridges and freezers in
 * Harare, how to tell which one a fridge uses, and why it matters when
 * someone offers to regas it. Leads with the answer and links to the
 * regassing pages.
 */
export const gasAdvicePages: AdviceRecord[] = [
  {
    slug: "which-gas-does-my-fridge-use",
    shortName: "Which gas does my fridge use?",
    cardText: "R600a, R134a, R290 and the commercial gases explained, and how to read the rating plate before a regas.",
    path: "/which-gas-does-my-fridge-use",
    title: "Which Gas Does My Fridge Use? R600a, R134a & R290 Explained",
    description:
      "How to find out which refrigerant gas your fridge or freezer uses, what R600a, R134a, R290 and R404A mean, and why the wrong gas ruins a regas. Harare guide.",
    eyebrow: "Fridge advice",
    h1: "Which Gas Does My Fridge Use?",
    lead:
      "Every fridge is designed around one particular refrigerant, and a regas only works if the same gas goes back in, in the right amount. In Harare, where many fridges are regassed by whoever is nearest, the wrong gas is a common reason a fridge that was just repaired still does not cool. This guide shows you how to check your fridge's gas and what the names on the label mean.",
    quickAnswer: {
      question: "How do I know which gas my fridge uses?",
      answer:
        "The gas is printed on the rating plate. Beside the word Refrigerant you will see a code, usually R600a or R134a, and a weight in grams. On most fridges the plate is a sticker low on an inside wall, behind the salad drawer; on others it is on the back beside the compressor. Fridges built in roughly the last ten years mostly run on R600a, while plenty of older ones were built for R134a. That gas, and that weight, is what should go back in.",
    },
    points: [
      "Where to find the rating plate and what it tells you",
      "The gases used in home and commercial fridges",
      "Why gases cannot be mixed or swapped",
      "Questions to ask before anyone regasses your fridge",
    ],
    picture: "regassing",
    pictureAlt: "Technician connecting gauges to regas a fridge with the correct refrigerant",
    crumbs: [{ name: "Which gas does my fridge use?", path: "/which-gas-does-my-fridge-use" }],
    whatsappMessage: "Hi Harare Fridge Repairs, I need to know which gas my fridge uses. Brand: ___ Model: ___ My suburb is: ___",
    sections: [
      {
        kind: "steps",
        heading: "Finding the gas on your fridge",
        intro: "You do not need tools. Take a photo of what you find and you can send it to us on WhatsApp.",
        items: [
          { title: "Inside the fridge", text: "Most brands put the rating plate on the inside side wall of the fridge section, low down near the salad drawers. You may need to slide a drawer out." },
          { title: "On the back", text: "If it is not inside, look on the back of the cabinet near the bottom, beside the compressor. Switch off at the wall before reaching back there." },
          { title: "Read the refrigerant line", text: "Look for the word refrigerant or the letter R followed by numbers, such as R600a or R134a, and a weight in grams. That weight is the full charge for the whole fridge." },
          { title: "Check the compressor label", text: "The compressor, the black dome at the bottom of the back, usually carries its own label naming the gas it was built for. It should match the rating plate." },
        ],
      },
      {
        kind: "list",
        heading: "The gases you are likely to find",
        intro: "These are the refrigerants we meet most often in fridges and freezers across Harare.",
        items: [
          "R600a (isobutane): the gas in most household fridges and freezers made in recent years. It is very efficient and is used in small charges, but it is flammable, so it must be handled with care.",
          "R134a: the standard gas in household fridges for many years and still found in a great number of older fridges, chest freezers and some drinks coolers. It is not flammable.",
          "R290 (propane): used more and more in commercial bottle coolers, display fridges and ice cream freezers, and in some newer household models. Like R600a, it is flammable and needs the right procedures.",
          "R404A and its replacements such as R452A and R449A: found in commercial freezers, cold rooms and larger display cabinets. Each needs its own gauges and the correct oil.",
          "R22: an older gas still found in some cold rooms and older commercial systems. It is being phased out under the Montreal Protocol, which Zimbabwe joined in 1992, so it is becoming scarce.",
          "R12: the gas in very old fridges from decades ago. It is no longer made, and a fridge that needs it repaired properly will need a careful conversation about whether it is worth it.",
        ],
        columns: 1,
      },
      {
        kind: "feature",
        eyebrow: "Why it matters",
        heading: "The wrong gas is worse than no regas at all",
        paragraphs: [
          "A fridge's compressor, capillary tube and oil are all chosen for one gas. R600a and R134a, the two most common household gases, work at very different pressures and need different amounts. Putting R134a into an R600a fridge, or topping up one gas with another, gives a fridge that runs hot and cools poorly, and it can shorten the life of the compressor. Mixed gas cannot be separated again: the system has to be emptied, vacuumed and charged from fresh.",
          "Quantity matters just as much. The charge itself is tiny, often less than 60 grams on an R600a combi and under 50 grams on a bar fridge, so a few grams either way is enough to spoil the cooling. That is why we charge by weight, using a scale and the figure on the rating plate, rather than by guessing from the gauge. It is also why a quick top up without finding the leak never lasts: the gas was lost somewhere, and it will keep escaping until that leak is found and repaired.",
        ],
        picture: "regassing",
        pictureAlt: "Refrigerant being weighed on a scale during a fridge regas",
        reverse: true,
      },
      {
        kind: "list",
        heading: "Questions to ask before anyone regasses your fridge",
        intro: "A good technician will be glad you asked. These are the answers you should hear.",
        items: [
          "Have you confirmed it is a gas problem? Most fridges that stop cooling have an electrical, airflow or defrost fault instead.",
          "Where is the leak, and how will you repair it before recharging?",
          "Which gas will you use, and does it match the rating plate?",
          "Will you pull a vacuum on the system before charging it?",
          "Will you weigh the charge, and to what figure?",
          "Is the gas from a reputable supplier? Cylinders of unknown origin may not contain what the label says.",
        ],
        columns: 1,
      },
      {
        kind: "text",
        heading: "Safety with flammable refrigerants",
        paragraphs: [
          "R600a and R290 fridges are safe in normal use: the charge is small and sealed inside the pipes. The risk comes during a repair, or if the pipes are pierced, for example by chipping ice from a freezer with a knife. If you hear hissing from inside the fridge after damaging a pipe, open the windows and doors, keep flames and sparks away, and do not switch lights or appliances on or off in the kitchen until the gas has cleared. Then switch the fridge off at the wall and call us.",
          "Repairs on these fridges need tools and methods made for flammable gas: good ventilation, no naked flame near a charged system and, before any brazing, the gas removed safely outdoors and the pipes flushed with nitrogen. Ask any technician how they will handle that before the work starts.",
        ],
      },
      {
        kind: "chips",
        heading: "Read next",
        items: [
          { href: "/fridge-regassing", label: "Fridge regassing in Harare" },
          { href: "/does-my-fridge-need-regassing", label: "Does my fridge need regassing?" },
          { href: "/fridge-regassing-cost-harare", label: "What decides the cost of a regas" },
          { href: "/problems/fridge-not-cooling", label: "Fridge not cooling" },
          { href: "/compressor-replacement", label: "Compressor replacement" },
          { href: "/cold-room-repairs", label: "Cold room repairs" },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I put R134a in a fridge that uses R600a?",
        answer:
          "No. The two gases work at different pressures and need different amounts, and the compressor and capillary tube are matched to one of them. The fridge will cool badly and the compressor can be damaged. A fridge should always be recharged with the gas on its rating plate.",
      },
      {
        question: "My rating plate is missing or unreadable. How do you know the gas?",
        answer:
          "The compressor label usually names it, and the model number tells us what the manufacturer used. If neither is available, we check the system before charging. We never guess.",
      },
      {
        question: "Is R600a dangerous to have in my kitchen?",
        answer:
          "In normal use, no. Millions of fridges use it and the charge is small and sealed. Take care not to pierce the pipes, for example by chipping ice with a knife, and leave repairs to a technician who works safely with flammable gas.",
      },
      {
        question: "Can an old R134a fridge be converted to a newer gas?",
        answer:
          "It is not a simple swap. A conversion usually needs a different compressor and careful flushing, and on an older fridge it is rarely worth the cost. Repairing the leak and recharging with R134a is normally the sensible choice.",
      },
    ],
    cta: {
      title: "Not sure which gas your fridge needs?",
      text: "WhatsApp us a photo of the rating plate, or call 0782 886 252 or 0719 227 718. We regas fridges with the correct gas, by weight, across Harare.",
    },
  },
]
