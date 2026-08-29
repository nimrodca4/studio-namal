import Reveal from "@/components/ui/Reveal";
import { imageReveal } from "@/animations/variants";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { ButtonGhost } from "@/components/ui/Button";
import GownSketch from "@/components/ui/GownSketch";

export default function StudioPreview() {
  return (
    <section className="bg-cream py-28 md:py-40">
      <div className="container-studio grid items-center gap-16 md:grid-cols-2 md:gap-24">
        <Reveal variants={imageReveal} className="order-2 md:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink">
            <GownSketch
              variant="noor"
              className="absolute inset-0 h-full w-full p-16 text-cream/40"
            />
          </div>
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal>
            <Eyebrow>The Studio</Eyebrow>
            <h2 className="mt-4 text-4xl leading-[1.1] text-ink md:text-5xl">
              An atelier of thirty
              <br />
              gowns a year.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted">
              No two brides leave our atelier looking alike. Founded on the
              belief that couture is a craft of restraint, Studio Namal
              limits itself deliberately — fewer gowns, more hours, closer
              attention.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10">
            <ButtonGhost href="/the-studio">Read Our Story</ButtonGhost>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
