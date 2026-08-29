import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = "https://studionamal.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Studio Namal — Always Together",
    template: "%s — Studio Namal",
  },
  description:
    "Studio Namal is a couture bridal atelier crafting gowns of quiet, enduring elegance. Always Together.",
  keywords: [
    "Studio Namal",
    "bridal couture",
    "luxury wedding gowns",
    "couture atelier",
    "bespoke bridal design",
  ],
  authors: [{ name: "Studio Namal" }],
  openGraph: {
    title: "Studio Namal — Always Together",
    description:
      "A couture bridal atelier crafting gowns of quiet, enduring elegance.",
    url: siteUrl,
    siteName: "Studio Namal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Namal — Always Together",
    description:
      "A couture bridal atelier crafting gowns of quiet, enduring elegance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
