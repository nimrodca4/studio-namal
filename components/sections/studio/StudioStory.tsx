import Reveal from "@/components/ui/Reveal";
import { imageReveal } from "@/animations/variants";
import { Eyebrow } from "@/components/ui/SectionHeading";
import GownSketch from "@/components/ui/GownSketch";

export default function StudioStory() {
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
            <Eyebrow>Founded 2015 — Tel Aviv</Eyebrow>
            <h1 className="mt-4 text-4xl leading-[1.1] text-ink md:text-6xl">
              A house built
              <br />
              around one idea.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted md:text-xl">
              Studio Namal was founded on a single conviction: that a
              wedding gown deserves the same rigor as any garment shown on a
              runway, and the same intimacy as something worn only once,
              by someone we know well.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm leading-relaxed text-muted">
              What began as a single cutting table in a converted print
              workshop near the port has grown, slowly and by design, into
              a full atelier — pattern room, embroidery table, fitting
              salon — without ever losing the proportions of a small studio.
              We still take every first meeting ourselves. We still hand-cut
              every muslin.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm leading-relaxed text-muted">
              Our name comes from the Hebrew word for harbor — a place
              vessels return to. It is also, we like to think, what a
              wedding gown becomes: something a woman returns to, in
              memory, long after the day itself has passed. Always
              together, as our tagline promises — not just the couple,
              but the woman and the gown she chose to be married in.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="hairline pt-10">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <p className="font-display text-4xl text-wine">2015</p>
                <p className="mt-2 text-[11px] uppercase tracking-widest2 text-muted">
                  Founded
                </p>
              </div>
              <div>
                <p className="font-display text-4xl text-wine">30</p>
                <p className="mt-2 text-[11px] uppercase tracking-widest2 text-muted">
                  Gowns / Year
                </p>
              </div>
              <div>
                <p className="font-display text-4xl text-wine">210+</p>
                <p className="mt-2 text-[11px] uppercase tracking-widest2 text-muted">
                  Hours / Gown
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
