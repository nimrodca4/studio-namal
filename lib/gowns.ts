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
    name: "אריה",
    description:
      "מחוך ממשי מיקאדו, גזור צמוד לגוף, שנפתח אל שובל קתדרלה היורד בקו אחד רציף.",
    year: "2024",
    collection: "השעה השקטה",
    sketch: "aria",
    size: "tall",
  },
  {
    slug: "noor",
    name: "נור",
    description:
      "שרוולי אורגנזה בדראפינג ידני, מפוסלים בקו הכתף, נלבשים מעל תחתונית זורמת מסאטן דוכֶס בגוון שנהב.",
    year: "2024",
    collection: "השעה השקטה",
    sketch: "noor",
    size: "square",
  },
  {
    slug: "celeste",
    name: "סלסט",
    description:
      "אלפי פנינים זעירות התפורות ביד משרטטות את קו המחשוף, ונמוגות אל תוך טול חשוף לאורך גב פתוח.",
    year: "2023",
    collection: "נוקטורן",
    sketch: "celeste",
    size: "wide",
  },
  {
    slug: "ines",
    name: "אינס",
    description:
      "קורסט בנוי מבד פאיל משי, בשילוב חצאית עליונה נשלפת — למעבר מהחופה אל החגיגה.",
    year: "2023",
    collection: "נוקטורן",
    sketch: "ines",
    size: "tall",
  },
  {
    slug: "marlowe",
    name: "מרלו",
    description:
      "קרֵפ גזור באלכסון שנע כמו מים, עם כתף אסימטרית אחת המוגמרת בגלילת משי ידנית.",
    year: "2022",
    collection: "אור ראשון",
    sketch: "marlowe",
    size: "square",
  },
  {
    slug: "yara",
    name: "יערה",
    description:
      "מחוך מוצל בתחרת שאנטילי צרפתית מעל טול בגוון עירום, עם שובל ארוך שקצותיו גזורים בתחרה מסולסלת.",
    year: "2022",
    collection: "אור ראשון",
    sketch: "yara",
    size: "wide",
  },
];
