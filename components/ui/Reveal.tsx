"use client";

import { motion, Variants } from "framer-motion";
import { fadeUp } from "@/animations/variants";

export default function Reveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
