import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityClient } from "@/lib/sanity";
import type { SanityImage } from "@/lib/gowns";

const builder = createImageUrlBuilder(sanityClient);

export function getSanityImageUrl(image?: SanityImage, width = 1600) {
  if (!image?.asset) return null;

  return builder.image(image).width(width).auto("format").url();
}