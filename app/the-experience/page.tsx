import type { Metadata } from "next";
import ExperienceHero from "@/components/sections/experience/ExperienceHero";
import Timeline from "@/components/sections/experience/Timeline";
import CtaBand from "@/components/sections/home/CtaBand";
import { getAbout, getHomepage } from "@/lib/sanity";

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAbout();
  return {
    title: "החוויה",
    description: about.timelineSteps.map((step) => step.title).join(', '),
  };
}

export default async function ExperiencePage() {
  const [about, homepage] = await Promise.all([getAbout(), getHomepage()]);

  return (
    <main>
      <ExperienceHero content={about} />
      <Timeline content={about} />
      <CtaBand content={homepage} />
    </main>
  );
}
