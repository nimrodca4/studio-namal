import Reveal from "@/components/ui/Reveal";
import { imageReveal } from "@/animations/variants";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { ButtonGhost } from "@/components/ui/Button";
import GownSketch from "@/components/ui/GownSketch";
import type { HomepageContent } from "@/lib/sanity";
import Image from "next/image";
import { getSanityImageUrl } from "@/lib/sanityImage";

export default function StudioPreview({ content }: { content?: HomepageContent }) {
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
      <div className="container-studio grid items-center gap-16 md:grid-cols-2 md:gap-24">
        <Reveal variants={imageReveal} className="order-2 md:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink">
            {getSanityImageUrl(homepage.storyImage) ? (
              <Image
                src={getSanityImageUrl(homepage.storyImage) as string}
                alt={homepage.studioHeading}
                fill
                className="object-cover"
              />
            ) : (
              <GownSketch
                variant="noor"
                className="absolute inset-0 h-full w-full p-16 text-cream/40"
              />
            )}
          </div>
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal>
            <Eyebrow>{homepage.studioEyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl leading-[1.1] text-ink md:text-5xl">
              {homepage.studioHeading}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted">
              {homepage.studioBody}
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10">
            <ButtonGhost href="/the-studio">{homepage.studioButtonLabel}</ButtonGhost>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
