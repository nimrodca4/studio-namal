"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import GownSketch from "@/components/ui/GownSketch";
import { Gown } from "@/lib/gowns";
import { editorialEase } from "@/animations/variants";

export default function GownModal({
  gown,
  onClose,
}: {
  gown: Gown | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!gown) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [gown, onClose]);

  return (
    <AnimatePresence>
      {gown && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: editorialEase }}
        >
          <button
            aria-label="סגירה"
            onClick={onClose}
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.6, ease: editorialEase }}
            className="relative grid w-full max-w-5xl grid-cols-1 overflow-hidden bg-cream md:grid-cols-2"
          >
            <button
              onClick={onClose}
              aria-label="סגירת פרטי השמלה"
              className="absolute left-5 top-5 z-10 flex h-10 w-10 items-center justify-center border border-ink/20 bg-cream/80 text-ink transition-colors hover:bg-ink hover:text-cream md:left-8 md:top-8"
            >
              <X size={16} strokeWidth={1.25} />
            </button>

            <div className="relative aspect-[3/4] bg-ink md:aspect-auto">
              <GownSketch
                variant={gown.sketch}
                className="absolute inset-0 h-full w-full p-14 text-cream/40"
              />
            </div>

            <div className="flex flex-col justify-center p-10 md:p-16">
              <p className="eyebrow text-wine">{gown.collection}</p>
              <h3 className="mt-4 text-4xl leading-[1.05] text-ink md:text-5xl">
                {gown.name}
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                {gown.description}
              </p>
              <div className="mt-10 flex gap-10 border-t border-hairline pt-8">
                <div>
                  <p className="text-[11px] uppercase tracking-widest2 text-muted">
                    שנה
                  </p>
                  <p className="mt-2 font-display text-xl text-ink">
                    {gown.year}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest2 text-muted">
                    קולקציה
                  </p>
                  <p className="mt-2 font-display text-xl text-ink">
                    {gown.collection}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
