import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";

export default function ExperienceHero() {
  return (
    <div className="container-studio pb-4 pt-28 md:pt-36">
      <Reveal>
        <Eyebrow>From First Meeting to Wedding Day</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-4xl leading-[1.05] text-ink md:text-6xl">
          The Experience
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
          Four stages, one gown. Here is what to expect from the day you
          first walk into the atelier to the morning you put the dress on
          for good.
        </p>
      </Reveal>
    </div>
  );
}
