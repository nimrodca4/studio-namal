import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import GownSketch from "@/components/ui/GownSketch";
import { gowns } from "@/lib/gowns";

const featured = [gowns[0], gowns[2], gowns[4]];

export default function FeaturedGowns() {
  return (
    <section className="bg-paper py-28 md:py-40">
      <div className="container-studio">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow>Selected Works</Eyebrow>
            <h2 className="mt-4 text-4xl leading-[1.05] text-ink md:text-6xl">
              The Gowns
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/our-gowns"
              className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink hover:text-wine"
            >
              View Full Collection
              <ArrowUpRight
                size={14}
                strokeWidth={1.25}
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {featured.map((gown, i) => (
            <Reveal key={gown.slug} delay={i * 0.1}>
              <Link href="/our-gowns" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-cream">
                  <GownSketch
                    variant={gown.sketch}
                    className="absolute inset-0 h-full w-full p-10 text-ink/70 transition-transform duration-[1200ms] ease-editorial group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between">
                  <p className="font-display text-2xl text-ink">{gown.name}</p>
                  <p className="text-[11px] uppercase tracking-widest2 text-muted">
                    {gown.year}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
