"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ButtonPrimary } from "@/components/ui/Button";
import { editorialEase } from "@/animations/variants";
import type { HomepageContent } from "@/lib/sanity";

export default function Hero({ content }: { content: HomepageContent }) {
  const sectionRef = useRef<HTMLElement>(null);
  const homepage = content;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -56]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[720px] w-full items-center justify-center overflow-hidden bg-[#000000]"
    >
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: editorialEase, delay: 0.2 }}
          className="font-display text-2xl tracking-[0.2em] text-cream/90"
        >
          {homepage.heroEyebrow}
        </motion.p>

        {/* Hero logo — the main visual element, replacing the text title */}
        <motion.h1
          style={{ y: logoY, opacity: logoOpacity }}
          className="relative mt-2 flex w-[72vw] max-w-[520px] items-center justify-center md:mt-4"
        >
          {/* soft, warm-white glow behind the mark */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-[1] h-[150%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(253,250,244,0.16) 0%, rgba(253,250,244,0.05) 46%, rgba(253,250,244,0) 72%)",
            }}
          />

          {/* fade + settle in on load */}
          <motion.span
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: editorialEase, delay: 0.4 }}
            className="relative block w-full"
          >
            {/* slow float + breathing scale, gently desynced */}
            <motion.span
              animate={{ y: [0, -4, 0], scale: [1, 1.02, 1] }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 8.5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="block w-full"
            >
              {/* hover: brighten + ~3% scale */}
              <motion.span
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.7, ease: editorialEase }}
                className="group block w-full"
              >
                <Image
                  src="/Logo-namal.png"
                  alt="סטודיו נמל — יחד, תמיד"
                  width={1267}
                  height={1267}
                  priority
                  className="-my-2 h-auto w-full select-none opacity-90 brightness-0 invert transition-all duration-700 ease-editorial group-hover:opacity-100 group-hover:drop-shadow-[0_0_28px_rgba(253,250,244,0.35)] md:-my-3"
                />
              </motion.span>
            </motion.span>
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: editorialEase, delay: 0.75 }}
          className="mt-8 max-w-md text-2xl leading-[1.65] text-cream/70 md:text-3xl"
        >
          {homepage.heroSubtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: editorialEase, delay: 1.05 }}
          className="mt-12"
        >
          <ButtonPrimary
            href={homepage.heroCtaHref || "/our-gowns"}
            className="border-cream/80 text-cream hover:bg-cream hover:text-ink"
          >
            {homepage.heroCtaLabel}
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
