import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import GownSketch from "@/components/ui/GownSketch";
import type { DressCollection, HomepageContent } from "@/lib/sanity";

export default function FeaturedGowns({
  content,
  dresses,
}: {
  content?: HomepageContent;
  dresses?: DressCollection;
}) {
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
  const items = dresses?.items ?? [];
  const featured = items.filter((gown) => homepage.featuredGownSlugs.includes(gown.slug)).slice(0, 3);

  return (
    <section className="bg-paper py-28 md:py-40">
      <div className="container-studio">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow>{homepage.featuredEyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl leading-[1.05] text-ink md:text-6xl">
              {homepage.featuredTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/our-gowns"
              className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink hover:text-wine"
            >
              {homepage.featuredLinkLabel}
              <ArrowUpLeft
                size={14}
                strokeWidth={1.25}
                className="transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {featured.map((gown, i) => (
            <Reveal key={gown.slug} delay={i * 0.1}>
              <Link href="/our-gowns" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-cream">
                  <GownSketch
                    variant={gown.sketch}
                    className="absolute inset-0 h-full w-full p-10 text-ink/70 transition-transform duration-[1200ms] ease-editorial group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between">
                  <p className="font-display text-2xl text-ink">{gown.name}</p>
                  <p className="text-[11px] uppercase tracking-widest2 text-muted">
                    {gown.year}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
