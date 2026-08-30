"use client";

import Image from "next/image";

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
  const imageUrls = [coverImageUrl, ...galleryImageUrls].filter(
    (url): url is string => Boolean(url),
  );

  if (!imageUrls.length) return null;

  return (
    <div className="relative -mx-6 w-[calc(100%+3rem)] overflow-hidden bg-ink md:mx-0 md:w-full">
      <div className="flex aspect-[3/4] w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain touch-pan-x md:aspect-[3/4]">
        {imageUrls.map((imageUrl, index) => (
          <div
            key={`${imageUrl}-${index}`}
            className="relative h-full w-full shrink-0 snap-center"
          >
            <Image
              src={imageUrl}
              alt={`${name} - ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
