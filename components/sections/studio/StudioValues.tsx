import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import type { AboutContent } from "@/lib/sanity";

export default function StudioValues({ content }: { content?: AboutContent }) {
  const about = content ?? {
    eyebrow: "נוסד ב־2015 — תל אביב",
    title: "בית שנבנה סביב רעיון אחד.",
    intro: "סטודיו נמל נוסד מתוך אמונה אחת: ששמלת כלה ראויה לאותה קפדנות כמו כל בגד שעולה למסלול, ולאותה אינטימיות של דבר שנלבש פעם אחת בלבד, על ידי מישהי שאנחנו מכירים היטב.",
    body: [],
    stats: [
      { value: "2015", label: "שנת הקמה" },
      { value: "30", label: "שמלות בשנה" },
      { value: "+210", label: "שעות עבודה בשמלה" },
    ],
    valuesEyebrow: "איך אנחנו עובדות",
    values: [
      { title: "שמלה אחת, כלה אחת", text: "אף גזרה אינה חוזרת על עצמה אצל שתי כלות באותה עונה. השמלה שלך משורטטת לפי המידות שלך בלבד." },
      { title: "יד לפני מכונה", text: "חריזה, דראפינג וגימור נעשים בעבודת יד בחדר העבודה שלנו בתל אביב, לעולם לא במיקור חוץ." },
      { title: "זמן, לא טרנד", text: "אנחנו מעצבות עבור התצלומים שתביטי בהם בעוד שלושים שנה, לא עבור העונה שבה אנחנו נמצאות כרגע." },
    ],
    timelineSteps: [],
  };

  return (
    <section className="border-t border-hairline bg-paper py-28 md:py-36">
      <div className="container-studio">
        <Reveal>
          <Eyebrow>{about.valuesEyebrow}</Eyebrow>
        </Reveal>
        <div className="mt-14 divide-y divide-hairline">
          {about.values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.08}>
              <div className="grid gap-4 py-10 md:grid-cols-[80px_1fr_2fr] md:items-baseline">
                <span className="font-display text-2xl text-wine">
                  0{i + 1}
                </span>
                <h3 className="text-2xl text-ink md:text-3xl">{value.title}</h3>
                <p className="max-w-xl text-sm leading-relaxed text-muted">
                  {value.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
