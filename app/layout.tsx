import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Assistant } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getNavigation, getSiteSettings } from "@/lib/sanity";

const frankRuhl = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-display",
  display: "swap",
});

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteSettings();
  const siteUrl = site.siteUrl || "https://studionamal.com";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${site.siteName} — ${site.tagline}`,
      template: `%s — ${site.siteName}`,
    },
    description: site.description,
    keywords: site.keywords,
    authors: [{ name: site.siteName }],
    openGraph: {
      title: `${site.siteName} — ${site.tagline}`,
      description: site.description,
      url: siteUrl,
      siteName: site.siteName,
      type: "website",
      locale: "he_IL",
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.siteName} — ${site.tagline}`,
      description: site.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [nav, site] = await Promise.all([getNavigation(), getSiteSettings()]);

  return (
    <html
      lang="he"
      dir="rtl"
      className={`${frankRuhl.variable} ${assistant.variable}`}
    >
      <body>
        <Navbar links={nav} logoShort={site.logoShort} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
