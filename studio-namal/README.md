# Studio Namal — Always Together

A couture bridal atelier website built with Next.js 15, TypeScript, Tailwind CSS,
and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

## Cloudflare Pages

This project is configured for static export compatibility via
`next.config.mjs` (`images.unoptimized: true`). Deploy with:

```bash
npm run pages:build
```

using `@cloudflare/next-on-pages`, or point Cloudflare Pages at the repo with
build command `npm run build` and output directory `.next`.

## Structure

```
app/                 Route segments (App Router)
components/
  layout/             Navbar, Footer
  ui/                 Buttons, headings, reveal wrapper, gown sketch illustration
  sections/           Page sections grouped by page
lib/                  Static content (gown archive)
hooks/                Client hooks (scroll state)
animations/           Shared Framer Motion variants
```

## Design Notes

Photography is represented throughout by a bespoke line-art "croquis"
illustration system (`components/ui/GownSketch.tsx`) in place of stock
photography, styled as an atelier sketchbook. Swap these for real photography
by replacing the SVG paths or rendering `next/image` in their place — the
surrounding layout, motion, and aspect ratios are already tuned for large
imagery.
