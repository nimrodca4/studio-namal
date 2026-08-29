import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityClient } from "@/lib/sanity";
import type { SanityImage } from "@/lib/gowns";

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(image?: SanityImage) {
  if (!image?.asset) return null;

  return builder.image(image);
}

export function getSanityImageUrl(image?: SanityImage, width = 1600) {
  return urlFor(image)?.width(width).auto("format").url() || null;
}