"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { getDressPath, gowns, Gown } from "@/lib/gowns";
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

  return (
    <>
      <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
        {items.map((gown, i) => (
          <Reveal
            key={gown.slug}
            delay={(i % 3) * 0.08}
            className="mb-8 break-inside-avoid"
          >
            <Link
              href={getDressPath(gown.slug)}
              className="group relative block w-full overflow-hidden bg-ink text-start"
            >
              <div className={`relative w-full ${aspect[gown.size]}`}>
                {getSanityImageUrl(gown.coverImage || gown.galleryImages?.[0]) && (
                  <Image src={getSanityImageUrl(gown.coverImage || gown.galleryImages?.[0]) as string} alt={gown.name} fill className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.06]" />
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
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
