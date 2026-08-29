import type { Metadata } from "next";
import GownsHeader from "@/components/sections/gowns/GownsHeader";
import GownGallery from "@/components/sections/gowns/GownGallery";
import CtaBand from "@/components/sections/home/CtaBand";

export const metadata: Metadata = {
  title: "Our Gowns",
  description:
    "Browse the Studio Namal archive of couture bridal gowns, from The Quiet Hour to First Light.",
};

export default function OurGownsPage() {
  return (
    <main>
      <GownsHeader />
      <section className="container-studio pb-28 md:pb-40">
        <GownGallery />
      </section>
      <CtaBand />
    </main>
  );
}
