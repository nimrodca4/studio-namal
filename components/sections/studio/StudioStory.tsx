import Reveal from "@/components/ui/Reveal";
import { imageReveal } from "@/animations/variants";
import { Eyebrow } from "@/components/ui/SectionHeading";
import GownSketch from "@/components/ui/GownSketch";
import type { AboutContent } from "@/lib/sanity";

export default function StudioStory({ content }: { content?: AboutContent }) {
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
    values: [],
    timelineSteps: [],
  };
  return (
    <section className="bg-cream py-28 md:py-36">
      <div className="container-studio grid gap-16 md:grid-cols-2 md:gap-24">
        <Reveal variants={imageReveal} className="md:sticky md:top-32 md:self-start">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-ink">
            <GownSketch
              variant="ines"
              className="absolute inset-0 h-full w-full p-14 text-cream/40"
            />
          </div>
        </Reveal>

        <div className="space-y-14">
          <Reveal>
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-4xl leading-[1.1] text-ink md:text-6xl">
              {about.title}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted md:text-xl">
              {about.intro}
            </p>
          </Reveal>

          {about.body?.length ? (
            about.body.map((paragraph, index) => (
              <Reveal key={index} delay={0.1}>
                <p className="text-base leading-relaxed text-muted">
                  {paragraph.children?.map((child) => child.text).join(' ') || ''}
                </p>
              </Reveal>
            ))
          ) : null}

          <Reveal delay={0.1} className="hairline pt-10">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl text-wine">{stat.value}</p>
                  <p className="mt-2 text-[13px] uppercase tracking-widest2 text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
