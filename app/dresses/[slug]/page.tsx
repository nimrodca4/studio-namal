import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getDressBySlug, getDresses } from '@/lib/sanity';
import { getSanityImageUrl } from '@/lib/sanityImage';

export async function generateStaticParams() {
  const archive = await getDresses();
  return archive.items.map((gown) => ({ slug: gown.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const gown = await getDressBySlug(slug);

  if (!gown) {
    return { title: 'שמלה' };
  }

  return {
    title: gown.name,
    description: gown.description,
  };
}

export default async function DressPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gown = await getDressBySlug(slug);

  if (!gown) {
    notFound();
  }

  return (
    <main className="container-studio py-20 md:py-28">
      <div className="mb-10 flex items-center justify-between">
        <Link
          href="/our-gowns"
          className="inline-flex items-center gap-2 text-[13px] uppercase tracking-widest2 text-ink transition-colors hover:text-wine"
        >
          <ArrowLeft size={14} strokeWidth={1.25} />
          חזרה לשמלות
        </Link>
      </div>

      <article className="grid gap-8 overflow-hidden bg-cream md:grid-cols-2">
        <div className="relative aspect-[3/4] bg-ink md:aspect-auto">
          {getSanityImageUrl(gown.coverImage || gown.galleryImages?.[0]) ? (
            <Image
              src={getSanityImageUrl(gown.coverImage || gown.galleryImages?.[0]) as string}
              alt={gown.name}
              fill
              className="object-cover"
            />
          ) : null}
        </div>

        <div className="flex flex-col justify-center px-6 py-10 md:px-12 md:py-16">
          <p className="eyebrow text-wine">{gown.collection}</p>
          <h1 className="mt-4 text-4xl leading-[1.05] text-ink md:text-5xl">{gown.name}</h1>
          <p className="mt-6 text-base leading-relaxed text-muted">{gown.description}</p>

          <div className="mt-10 flex gap-10 border-t border-hairline pt-8">
            <div>
              <p className="text-[13px] uppercase tracking-widest2 text-muted">שנה</p>
              <p className="mt-2 font-display text-xl text-ink">{gown.year}</p>
            </div>
            <div>
              <p className="text-[13px] uppercase tracking-widest2 text-muted">קולקציה</p>
              <p className="mt-2 font-display text-xl text-ink">{gown.collection}</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}