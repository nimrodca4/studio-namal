"use client";

import Image from "next/image";
import { useState } from "react";

type DressGalleryProps = {
  name: string;
  coverImageUrl: string | null;
  galleryImageUrls: string[];
};

export default function DressGallery({
  name,
  coverImageUrl,
  galleryImageUrls,
}: DressGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageUrls = [coverImageUrl, ...galleryImageUrls].filter(
    (url): url is string => Boolean(url),
  );

  if (!imageUrls.length) return null;

  return (
    <div className="relative bg-ink">
      <div className="relative aspect-[3/4] w-full overflow-hidden md:aspect-auto">
        <Image
          src={imageUrls[activeIndex]}
          alt={`${name} - ${activeIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {galleryImageUrls.length > 0 && (
        <div className="space-y-4 bg-ink p-4">
          {galleryImageUrls.map((imageUrl, index) => {
            const imageIndex = coverImageUrl ? index + 1 : index;

            return (
          <button
            key={`${imageUrl}-${index}`}
            type="button"
            onClick={() => setActiveIndex(imageIndex)}
            className="relative block aspect-[3/4] w-full overflow-hidden"
            aria-label={`הצגת תמונה ${imageIndex + 1} מתוך ${imageUrls.length}`}
          >
            <Image src={imageUrl} alt={`${name} - ${imageIndex + 1}`} fill className="object-cover" />
          </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
