import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import type { AboutContent } from "@/lib/sanity";

export default function ExperienceHero({ content }: { content?: AboutContent }) {
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
    <div className="container-studio pb-4 pt-28 md:pt-36">
      <Reveal>
        <Eyebrow>מהפגישה הראשונה ועד יום החתונה</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-4xl leading-[1.05] text-ink md:text-6xl">
          החוויה
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
          {about.timelineSteps.length ? `${about.timelineSteps.length} שלבים, שמלה אחת. הנה למה אפשר לצפות — מהיום שבו את נכנסת לראשונה לאטלייה ועד הבוקר שבו את לובשת את השמלה סופית.` : 'ארבעה שלבים, שמלה אחת. הנה למה אפשר לצפות — מהיום שבו את נכנסת לראשונה לאטלייה ועד הבוקר שבו את לובשת את השמלה סופית.'}
        </p>
      </Reveal>
    </div>
  );
}
