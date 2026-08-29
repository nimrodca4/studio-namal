"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import GownSketch from "@/components/ui/GownSketch";
import GownModal from "@/components/sections/gowns/GownModal";
import Reveal from "@/components/ui/Reveal";
import { gowns, Gown } from "@/lib/gowns";
import type { DressCollection } from "@/lib/sanity";
import Image from "next/image";
import { getSanityImageUrl } from "@/lib/sanityImage";

const aspect: Record<Gown["size"], string> = {
  tall: "aspect-[3/4.4]",
  wide: "aspect-[4/3]",
  square: "aspect-[1/1]",
};

export default function GownGallery({ dresses }: { dresses?: DressCollection }) {
  const items = dresses?.items ?? gowns;
  const [active, setActive] = useState<Gown | null>(null);

  return (
    <>
      <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
        {items.map((gown, i) => (
          <Reveal
            key={gown.slug}
            delay={(i % 3) * 0.08}
            className="mb-8 break-inside-avoid"
          >
            <button
              onClick={() => setActive(gown)}
              className="group relative block w-full overflow-hidden bg-ink text-start"
            >
              <div className={`relative w-full ${aspect[gown.size]}`}>
                {getSanityImageUrl(gown.coverImage) ? (
                  <Image src={getSanityImageUrl(gown.coverImage) as string} alt={gown.name} fill className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.06]" />
                ) : (
                  <GownSketch variant={gown.sketch} className="absolute inset-0 h-full w-full p-12 text-cream/40 transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.06]" />
                )}
                <motion.div className="absolute inset-0 bg-ink/0 transition-colors duration-700 ease-editorial group-hover:bg-ink/30" />

                <div className="absolute inset-x-6 bottom-6 flex translate-y-2 items-end justify-between opacity-0 transition-all duration-700 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
                  <div>
                    <p className="text-[13px] uppercase tracking-widest2 text-cream/60">
                      {gown.collection}
                    </p>
                    <p className="mt-1 font-display text-2xl text-cream">
                      {gown.name}
                    </p>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/50 text-cream">
                    <Plus size={14} strokeWidth={1.25} />
                  </span>
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <GownModal gown={active} onClose={() => setActive(null)} />
    </>
  );
}
