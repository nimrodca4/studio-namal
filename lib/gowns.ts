export type Gown = {
  slug: string;
  name: string;
  description: string;
  year: string;
  collection: string;
  sketch: "aria" | "noor" | "celeste" | "ines" | "marlowe" | "yara";
  size: "tall" | "wide" | "square";
};

export const gowns: Gown[] = [
  {
    slug: "aria",
    name: "Aria",
    description:
      "A silk mikado bodice cut close to the body, opening into a cathedral train that falls in a single unbroken line.",
    year: "2024",
    collection: "The Quiet Hour",
    sketch: "aria",
    size: "tall",
  },
  {
    slug: "noor",
    name: "Noor",
    description:
      "Hand-draped organza sleeves, sculpted at the shoulder, worn over a fluid slip in ivory duchesse satin.",
    year: "2024",
    collection: "The Quiet Hour",
    sketch: "noor",
    size: "square",
  },
  {
    slug: "celeste",
    name: "Celeste",
    description:
      "Thousands of hand-sewn seed pearls trace the neckline, fading into bare tulle across an open back.",
    year: "2023",
    collection: "Nocturne",
    sketch: "celeste",
    size: "wide",
  },
  {
    slug: "ines",
    name: "Inès",
    description:
      "A structured corset in silk faille, paired with a detachable overskirt for the walk from ceremony to celebration.",
    year: "2023",
    collection: "Nocturne",
    sketch: "ines",
    size: "tall",
  },
  {
    slug: "marlowe",
    name: "Marlowe",
    description:
      "Bias-cut crepe that moves like water, with a single asymmetric shoulder finished in hand-rolled silk.",
    year: "2022",
    collection: "First Light",
    sketch: "marlowe",
    size: "square",
  },
  {
    slug: "yara",
    name: "Yara",
    description:
      "A veiled bodice of French Chantilly lace over nude tulle, with a court train edged in scalloped lace.",
    year: "2022",
    collection: "First Light",
    sketch: "yara",
    size: "wide",
  },
];
