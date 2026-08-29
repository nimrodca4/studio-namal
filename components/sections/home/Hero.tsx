"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ButtonPrimary } from "@/components/ui/Button";
import GownSketch from "@/components/ui/GownSketch";
import { editorialEase } from "@/animations/variants";

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[720px] w-full items-center justify-center overflow-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.14]">
        <GownSketch
          variant="aria"
          className="h-[130%] w-auto text-cream"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-ink/60" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: editorialEase, delay: 0.2 }}
          className="font-display text-2xl tracking-[0.4em] text-cream/90"
        >
          STUDIO NAMAL
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: editorialEase, delay: 0.45 }}
          className="mt-8 max-w-4xl text-[15vw] leading-[0.95] text-cream md:text-[8vw]"
        >
          Always
          <br />
          Together
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: editorialEase, delay: 0.75 }}
          className="mt-8 max-w-md text-sm leading-relaxed text-cream/70"
        >
          Couture bridal gowns, designed and hand-finished in our Tel Aviv
          atelier for the women who wear them once, and remember them always.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: editorialEase, delay: 1.05 }}
          className="mt-12"
        >
          <ButtonPrimary
            href="/our-gowns"
            className="border-cream/80 text-cream hover:bg-cream hover:text-ink"
          >
            Discover Our Gowns
          </ButtonPrimary>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} strokeWidth={1} className="text-cream/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
