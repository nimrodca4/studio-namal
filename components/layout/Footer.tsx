import Link from "next/link";
import { getNavigation, getSiteSettings } from "@/lib/sanity";

export default async function Footer() {
  const [site, nav] = await Promise.all([getSiteSettings(), getNavigation()]);

  return (
    <footer className="border-t border-hairline bg-cream">
      <div className="container-studio grid gap-14 py-20 md:grid-cols-4 md:py-28">
        <div className="md:col-span-2">
          <p className="font-display text-3xl tracking-[0.1em] text-ink">
            {site.footerTitle}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {site.footerBlurb}
          </p>
        </div>

        <div>
          <p className="eyebrow">ניווט</p>
          <ul className="mt-5 space-y-3 text-sm text-ink">
            {nav.slice(1).map((link) => (
              <li key={link.href}><Link href={link.href} className="hover:text-wine">{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">האטלייה</p>
          <ul className="mt-5 space-y-3 text-sm text-ink">
            <li><a href={site.instagramUrl} className="hover:text-wine" target="_blank" rel="noopener noreferrer">אינסטגרם</a></li>
            <li><a href={site.whatsappUrl} className="hover:text-wine" target="_blank" rel="noopener noreferrer">וואטסאפ</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-wine">{site.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="container-studio flex flex-col items-center justify-between gap-4 border-t border-hairline py-8 text-[11px] uppercase tracking-widest2 text-muted md:flex-row">
        <p>&copy; {new Date().getFullYear()} {site.siteName}. כל הזכויות שמורות.</p>
        <p>{site.location}</p>
      </div>
    </footer>
  );
}
