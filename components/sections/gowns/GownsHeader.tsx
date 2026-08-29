import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import type { DressCollection } from "@/lib/sanity";

export default function GownsHeader({ content }: { content?: DressCollection }) {
  const dresses = content ?? {
    eyebrow: "הקולקציות",
    title: "השמלות שלנו",
    intro: "ארכיון חי של הגזרות שאנחנו חוזרות אליהן. כל שמלה זמינה כפי שהיא, או כנקודת פתיחה למשהו שנתפר כולו סביבך.",
    items: [],
  };

  return (
    <div className="container-studio pb-16 pt-28 md:pb-20 md:pt-36">
      <Reveal>
        <Eyebrow>{dresses.eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-4xl leading-[1.05] text-ink md:text-6xl">
          {dresses.title}
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
          {dresses.intro}
        </p>
      </Reveal>
    </div>
  );
}
