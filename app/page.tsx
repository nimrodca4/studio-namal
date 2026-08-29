import Hero from "@/components/sections/home/Hero";
import Manifesto from "@/components/sections/home/Manifesto";
import FeaturedGowns from "@/components/sections/home/FeaturedGowns";
import StudioPreview from "@/components/sections/home/StudioPreview";
import CtaBand from "@/components/sections/home/CtaBand";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <FeaturedGowns />
      <StudioPreview />
      <CtaBand />
    </main>
  );
}
