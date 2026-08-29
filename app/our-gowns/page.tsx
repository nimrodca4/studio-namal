import type { Metadata } from "next";
import GownsHeader from "@/components/sections/gowns/GownsHeader";
import GownGallery from "@/components/sections/gowns/GownGallery";
import CtaBand from "@/components/sections/home/CtaBand";
import { getDresses, getHomepage } from "@/lib/sanity";

export async function generateMetadata(): Promise<Metadata> {
  const dresses = await getDresses();
  return {
    title: "השמלות שלנו",
    description: dresses.intro,
  };
}

export default async function OurGownsPage() {
  const [dresses, homepage] = await Promise.all([getDresses(), getHomepage()]);

  return (
    <main>
      <GownsHeader content={dresses} />
      <section className="container-studio pb-28 md:pb-40">
        <GownGallery dresses={dresses} />
      </section>
      <CtaBand content={homepage} />
    </main>
  );
}
