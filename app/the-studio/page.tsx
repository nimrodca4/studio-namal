import type { Metadata } from "next";
import StudioStory from "@/components/sections/studio/StudioStory";
import StudioValues from "@/components/sections/studio/StudioValues";
import CtaBand from "@/components/sections/home/CtaBand";
import { getAbout, getHomepage } from "@/lib/sanity";

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAbout();
  return {
    title: "הסטודיו",
    description: about.intro,
  };
}

export default async function StudioPage() {
  const [about, homepage] = await Promise.all([getAbout(), getHomepage()]);

  return (
    <main className="pt-20 md:pt-24">
      <StudioStory content={about} />
      <StudioValues content={about} />
      <CtaBand content={homepage} />
    </main>
  );
}
