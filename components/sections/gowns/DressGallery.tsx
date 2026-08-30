"use client";

import Image from "next/image";
import { useState } from "react";

type DressGalleryProps = {
  name: string;
  imageUrls: string[];
};

export default function DressGallery({ name, imageUrls }: DressGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!imageUrls.length) return null;

  return (
    <div className="relative bg-ink">
      <div className="relative aspect-[3/4] w-full overflow-x-auto overscroll-x-contain snap-x snap-mandatory touch-pan-x md:aspect-auto md:overflow-hidden">
        <div className="flex h-full w-full">
          {imageUrls.map((imageUrl, index) => (
            <button
              key={`${imageUrl}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="relative aspect-[3/4] w-full shrink-0 snap-center md:hidden"
              aria-label={`הצגת תמונה ${index + 1} מתוך ${imageUrls.length}`}
            >
              <Image src={imageUrl} alt={`${name} - ${index + 1}`} fill className="object-cover" priority={index === 0} />
            </button>
          ))}
        </div>
        <Image src={imageUrls[activeIndex]} alt={`${name} - ${activeIndex + 1}`} fill className="hidden object-cover md:block" priority />
      </div>

      <div className="hidden gap-3 overflow-x-auto bg-ink p-4 md:flex">
        {imageUrls.map((imageUrl, index) => (
          <button
            key={`${imageUrl}-thumbnail-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`relative h-20 w-16 shrink-0 overflow-hidden border transition-colors ${
              index === activeIndex ? "border-cream" : "border-cream/30"
            }`}
            aria-label={`בחירת תמונה ${index + 1} מתוך ${imageUrls.length}`}
          >
            <Image src={imageUrl} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
