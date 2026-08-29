import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";

export default function GownsHeader() {
  return (
    <div className="container-studio pb-16 pt-28 md:pb-20 md:pt-36">
      <Reveal>
        <Eyebrow>The Collections</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-4xl leading-[1.05] text-ink md:text-6xl">
          Our Gowns
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
          A running archive of the silhouettes we return to. Each gown is
          available as shown, or as a starting point for something drawn
          entirely around you.
        </p>
      </Reveal>
    </div>
  );
}
