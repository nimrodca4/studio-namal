"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";

const links = [
  { href: "/", label: "Home" },
  { href: "/the-studio", label: "The Studio" },
  { href: "/our-gowns", label: "Our Gowns" },
  { href: "/the-experience", label: "The Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const scrolled = useScrolled(60);
  const [open, setOpen] = useState(false);

  const light = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ease-editorial ${
        light ? "bg-cream/95 backdrop-blur-sm border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="container-studio flex h-20 items-center justify-between md:h-24">
        <button
          className="z-50 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X size={20} strokeWidth={1.25} className="text-ink" />
          ) : (
            <Menu
              size={20}
              strokeWidth={1.25}
              className={light ? "text-ink" : "text-cream"}
            />
          )}
        </button>

        <Link
          href="/"
          className={`font-display text-xl tracking-[0.15em] transition-colors duration-700 ${
            light ? "text-ink" : "text-cream"
          }`}
        >
          STUDIO NAMAL
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[11px] uppercase tracking-widest2 transition-colors duration-700 ${
                light ? "text-ink hover:text-wine" : "text-cream hover:text-cream/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden w-24 md:block" />
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-cream md:hidden"
          >
            <div className="container-studio flex flex-col gap-6 pb-10 pt-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
