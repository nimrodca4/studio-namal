import Reveal from "@/components/ui/Reveal";
import { ButtonPrimary } from "@/components/ui/Button";
import type { HomepageContent } from "@/lib/sanity";

export default function CtaBand({ content }: { content?: HomepageContent }) {
  const homepage = content ?? {
    heroEyebrow: "סטודיו נמל",
    heroTitle: "סטודיו נמל",
    heroSubtitle: "שמלות כלה בעבודת קוטור, מעוצבות ומוגמרות בעבודת יד באטלייה שלנו בתל אביב — עבור נשים שלובשות אותן פעם אחת, וזוכרות אותן לתמיד.",
    heroCtaLabel: "להכיר את השמלות",
    heroCtaHref: "/our-gowns",
    manifestoEyebrow: "התפיסה שלנו",
    manifestoHeadline: "אנחנו מאמינות ששמלת כלה אינה צריכה להתחרות על תשומת הלב. היא פשוט צריכה להישאר — בחדר, בתצלומים, בזיכרון — הרבה אחרי שהערב תם.",
    manifestoBody: "כל שמלה של סטודיו נמל מתחילה בשיחה ומסתיימת כמורשת שעוברת מדור לדור. אנחנו עובדות במספרים קטנים, בתיאום מראש, כדי שכל שמלה תקבל את השעות שהיא מבקשת.",
    featuredEyebrow: "מבחר עבודות",
    featuredTitle: "השמלות",
    featuredLinkLabel: "לצפייה בקולקציה המלאה",
    featuredGownSlugs: ["aria", "celeste", "marlowe"],
    studioEyebrow: "הסטודיו",
    studioHeading: "אטלייה של שלושים שמלות בשנה.",
    studioBody: "אין שתי כלות שיוצאות מהאטלייה שלנו נראות אותו הדבר. סטודיו נמל נוסד מתוך אמונה שקוטור הוא מלאכה של ריסון, ומגביל את עצמו במכוון — פחות שמלות, יותר שעות, תשומת לב קרובה יותר.",
    studioButtonLabel: "לקריאת הסיפור שלנו",
    ctaEyebrow: "בתיאום מראש בלבד",
    ctaTitle: "השמלה שלך מתחילה בשיחה.",
    ctaButtonLabel: "לתיאום פגישת ייעוץ",
  };

  return (
    <section className="bg-ink py-28 text-center md:py-40">
      <div className="container-studio flex flex-col items-center">
        <Reveal>
          <p className="eyebrow text-cream/50">{homepage.ctaEyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl text-4xl leading-[1.15] text-cream md:text-6xl">
            {homepage.ctaTitle}
          </h2>
        </Reveal>
        <Reveal delay={0.2} className="mt-12">
          <ButtonPrimary
            href="/contact"
            className="border-cream/80 text-cream hover:bg-cream hover:text-ink"
          >
            {homepage.ctaButtonLabel}
          </ButtonPrimary>
        </Reveal>
      </div>
    </section>
  );
}
