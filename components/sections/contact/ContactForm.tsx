"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { editorialEase } from "@/animations/variants";
import type { ContactContent } from "@/lib/sanity";

const fieldClass =
  "peer w-full border-b border-hairline bg-transparent py-3 text-ink placeholder-transparent outline-none transition-colors focus:border-wine";

const labelClass =
  "pointer-events-none absolute start-0 top-3 text-base text-muted transition-all duration-300 peer-focus:-top-3 peer-focus:text-[13px] peer-focus:uppercase peer-focus:tracking-widest2 peer-focus:text-wine peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[13px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest2";

export default function ContactForm({ content }: { content?: ContactContent }) {
  const contact = content ?? {
    eyebrow: "ביקור באטלייה",
    title: "יצירת קשר",
    intro: "בתיאום מראש בלבד, מיום ראשון עד חמישי. ספרי לנו על התאריך שלך, ונמצא יחד זמן להיפגש בסלון או בשיחה.",
    buttonLabel: "לתיאום פגישת ייעוץ",
    channels: [
      { label: "אינסטגרם", value: "@studionamal", href: "https://instagram.com" },
      { label: "וואטסאפ", value: "+972 00 000 0000", href: "https://wa.me/972000000000" },
      { label: "אימייל", value: "namal@studionamal.com", href: "mailto:namal@studionamal.com" },
    ],
    successTitle: "הפנייה התקבלה",
    successText: "נחזור אלייך מהאטלייה בתוך שני ימי עסקים כדי לתאם את הפגישה.",
    formButtonLabel: "שליחת הפנייה",
    fields: {
      fullName: "שם מלא",
      email: "כתובת אימייל",
      weddingDate: "תאריך החתונה (רשות)",
      message: "ספרי לנו על היום שלך",
    },
  };
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
        <p className="eyebrow text-wine">{contact.successTitle}</p>
        <p className="mt-4 font-display text-3xl text-ink">
          תודה שכתבת לנו.
        </p>
        <p className="mt-4 max-w-sm text-base leading-relaxed text-muted">
          {contact.successText}
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
            placeholder="שם מלא"
            className={fieldClass}
          />
          <label htmlFor="name" className={labelClass}>
            {contact.fields.fullName}
          </label>
        </div>

        <div className="relative">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="כתובת אימייל"
            className={fieldClass}
          />
          <label htmlFor="email" className={labelClass}>
            {contact.fields.email}
          </label>
        </div>

        <div className="relative">
          <input
            id="date"
            name="date"
            type="text"
            placeholder="תאריך החתונה"
            className={fieldClass}
          />
          <label htmlFor="date" className={labelClass}>
            {contact.fields.weddingDate}
          </label>
        </div>

        <div className="relative">
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="ספרי לנו על היום שלך"
            className={`${fieldClass} resize-none`}
          />
          <label htmlFor="message" className={labelClass}>
            {contact.fields.message}
          </label>
        </div>

        <button
          type="submit"
          className="group inline-flex items-center gap-3 border border-ink px-8 py-4 text-[13px] uppercase tracking-widest2 text-ink transition-colors duration-700 ease-editorial hover:bg-ink hover:text-cream"
        >
          {contact.formButtonLabel}
        </button>
      </form>
    </Reveal>
  );
}
