import { Fragment } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import type { HomepageContent } from "@/lib/sanity";

export default function Manifesto({ content }: { content?: HomepageContent }) {
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
    <section className="bg-cream py-28 md:py-40">
      <div className="container-studio">
        <Reveal>
          <Eyebrow>{homepage.manifestoEyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-4xl font-display text-3xl leading-[1.3] text-ink md:text-5xl md:leading-[1.25]">
            {homepage.manifestoHeadline.split("להישאר").map((part, index) => (
              <Fragment key={`${part}-${index}`}>
                {index > 0 && <em className="text-wine not-italic">להישאר</em>}
                {part.split("בדיוק את").map((text, textIndex) => (
                  <Fragment key={`${text}-${textIndex}`}>
                    {textIndex > 0 && (
                      <motion.span
                        initial={{ opacity: 0, y: 8, scale: 0.92 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="mx-1 inline-block font-medium text-wine"
                      >
                        בדיוק את
                      </motion.span>
                    )}
                    {text}
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted">
            {homepage.manifestoBody}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
