import type { Metadata } from "next";
import StudioStory from "@/components/sections/studio/StudioStory";
import StudioValues from "@/components/sections/studio/StudioValues";
import CtaBand from "@/components/sections/home/CtaBand";

export const metadata: Metadata = {
  title: "The Studio",
  description:
    "The story of Studio Namal, a couture bridal atelier in Tel Aviv designing thirty gowns a year by hand.",
};

export default function StudioPage() {
  return (
    <main className="pt-20 md:pt-24">
      <StudioStory />
      <StudioValues />
      <CtaBand />
    </main>
  );
}
