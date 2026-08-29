import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-cream">
      <div className="container-studio grid gap-14 py-20 md:grid-cols-4 md:py-28">
        <div className="md:col-span-2">
          <p className="font-display text-3xl tracking-[0.1em] text-ink">
            STUDIO NAMAL
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Always Together. A couture bridal atelier, dedicated to the making
            of one gown at a time.
          </p>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-5 space-y-3 text-sm text-ink">
            <li><Link href="/the-studio" className="hover:text-wine">The Studio</Link></li>
            <li><Link href="/our-gowns" className="hover:text-wine">Our Gowns</Link></li>
            <li><Link href="/the-experience" className="hover:text-wine">The Experience</Link></li>
            <li><Link href="/contact" className="hover:text-wine">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Atelier</p>
          <ul className="mt-5 space-y-3 text-sm text-ink">
            <li><a href="https://instagram.com" className="hover:text-wine" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://wa.me/972000000000" className="hover:text-wine" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href="mailto:atelier@studionamal.com" className="hover:text-wine">atelier@studionamal.com</a></li>
          </ul>
        </div>
      </div>

      <div className="container-studio flex flex-col items-center justify-between gap-4 border-t border-hairline py-8 text-[11px] uppercase tracking-widest2 text-muted md:flex-row">
        <p>&copy; {new Date().getFullYear()} Studio Namal. All rights reserved.</p>
        <p>Tel Aviv &mdash; By Appointment Only</p>
      </div>
    </footer>
  );
}
