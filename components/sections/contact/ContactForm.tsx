"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { editorialEase } from "@/animations/variants";

const fieldClass =
  "peer w-full border-b border-hairline bg-transparent py-3 text-ink placeholder-transparent outline-none transition-colors focus:border-wine";

const labelClass =
  "pointer-events-none absolute left-0 top-3 text-sm text-muted transition-all duration-300 peer-focus:-top-3 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-widest2 peer-focus:text-wine peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest2";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: editorialEase }}
        className="flex h-full min-h-[420px] flex-col justify-center border border-hairline p-10"
      >
        <p className="eyebrow text-wine">Message Received</p>
        <p className="mt-4 font-display text-3xl text-ink">
          Thank you for writing to us.
        </p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
          A member of the atelier will reply within two business days to
          arrange your appointment.
        </p>
      </motion.div>
    );
  }

  return (
    <Reveal delay={0.1}>
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="relative">
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Full Name"
            className={fieldClass}
          />
          <label htmlFor="name" className={labelClass}>
            Full Name
          </label>
        </div>

        <div className="relative">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Email Address"
            className={fieldClass}
          />
          <label htmlFor="email" className={labelClass}>
            Email Address
          </label>
        </div>

        <div className="relative">
          <input
            id="date"
            name="date"
            type="text"
            placeholder="Wedding Date"
            className={fieldClass}
          />
          <label htmlFor="date" className={labelClass}>
            Wedding Date (optional)
          </label>
        </div>

        <div className="relative">
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Tell Us About Your Day"
            className={`${fieldClass} resize-none`}
          />
          <label htmlFor="message" className={labelClass}>
            Tell Us About Your Day
          </label>
        </div>

        <button
          type="submit"
          className="group inline-flex items-center gap-3 border border-ink px-8 py-4 text-[11px] uppercase tracking-widest2 text-ink transition-colors duration-700 ease-editorial hover:bg-ink hover:text-cream"
        >
          Send Message
        </button>
      </form>
    </Reveal>
  );
}
