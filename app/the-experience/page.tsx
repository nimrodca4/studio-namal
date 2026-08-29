import type { Metadata } from "next";
import ExperienceHero from "@/components/sections/experience/ExperienceHero";
import Timeline from "@/components/sections/experience/Timeline";
import CtaBand from "@/components/sections/home/CtaBand";

export const metadata: Metadata = {
  title: "The Experience",
  description:
    "From consultation to your wedding day — the four-stage Studio Namal process for a bespoke bridal gown.",
};

export default function ExperiencePage() {
  return (
    <main>
      <ExperienceHero />
      <Timeline />
      <CtaBand />
    </main>
  );
}
