import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";

export default function Manifesto() {
  return (
    <section className="bg-cream py-28 md:py-40">
      <div className="container-studio">
        <Reveal>
          <Eyebrow>The Philosophy</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-4xl font-display text-3xl leading-[1.3] text-ink md:text-5xl md:leading-[1.25]">
            We believe a wedding gown should not compete for attention. It
            should simply <em className="text-wine not-italic">stay</em> —
            in the room, in the photographs, in the memory — long after the
            evening has ended.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted">
            Every Studio Namal gown begins as a conversation and ends as an
            heirloom. We work in small numbers, by appointment, so that each
            piece receives the hours it asks for.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
