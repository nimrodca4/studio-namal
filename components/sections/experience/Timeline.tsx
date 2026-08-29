import Reveal from "@/components/ui/Reveal";
import type { AboutContent } from "@/lib/sanity";

export default function Timeline({ content }: { content?: AboutContent }) {
  const about = content ?? {
    eyebrow: "נוסד ב־2015 — תל אביב",
    title: "בית שנבנה סביב רעיון אחד.",
    intro: "סטודיו נמל נוסד מתוך אמונה אחת: ששמלת כלה ראויה לאותה קפדנות כמו כל בגד שעולה למסלול, ולאותה אינטימיות של דבר שנלבש פעם אחת בלבד, על ידי מישהי שאנחנו מכירים היטב.",
    body: [],
    stats: [],
    valuesEyebrow: "איך אנחנו עובדות",
    values: [],
    timelineSteps: [
      { index: "01", title: "פגישת ייעוץ", text: "אנחנו מתחילות בסלון, בלי סקיצות ובלי בדים — רק שיחה על היום שאת מדמיינת ועל האישה שתהיי בו." },
      { index: "02", title: "עיצוב", text: "מתוך אותה שיחה נולדת גזרה. אנחנו משרטטות את הדפוס שלך לפי המידות שלך בלבד, ומציגות לך את הסקיצה הראשונה פנים אל פנים." },
      { index: "03", title: "מלאכת יד", text: "השמלה שלך נגזרת, עוברת דראפינג ומוגמרת בעבודת יד לאורך סדרת מדידות — לרוב שלושה עד חמישה חודשים של עבודה שקטה וקפדנית." },
      { index: "04", title: "יום החתונה שלך", text: "השמלה מגיעה אל דלתך בצורתה הסופית. אנחנו מבקשות דבר אחד בתמורה: תצלום, לארכיון שלנו של הנשים שלבשו אותה." },
    ],
  };

  return (
    <section className="container-studio py-28 md:py-36">
      <div className="relative">
        <div className="absolute right-[15px] top-2 hidden h-[calc(100%-1rem)] w-px bg-hairline md:right-[39px] md:block" />

        {about.timelineSteps.map((step, i) => (
          <Reveal key={step.index} delay={i * 0.05} className="relative">
            <div className="grid gap-6 border-t border-hairline py-14 first:border-t-0 md:grid-cols-[80px_1fr_2fr] md:items-start md:gap-10">
              <span className="relative z-10 font-display text-2xl text-wine md:text-3xl">
                {step.index}
              </span>
              <h3 className="text-3xl leading-tight text-ink md:text-4xl">
                {step.title}
              </h3>
              <p className="max-w-lg text-sm leading-relaxed text-muted md:text-base">
                {step.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
