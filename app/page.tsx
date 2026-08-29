import Hero from "@/components/sections/home/Hero";
import Manifesto from "@/components/sections/home/Manifesto";
import FeaturedGowns from "@/components/sections/home/FeaturedGowns";
import StudioPreview from "@/components/sections/home/StudioPreview";
import CtaBand from "@/components/sections/home/CtaBand";
import { getDresses, getHomepage, getSiteSettings } from "@/lib/sanity";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const homepage = await getHomepage();

  return {
    title: homepage.heroTitle,
  };
}

export default async function HomePage() {
  const [homepage, dresses, site] = await Promise.all([getHomepage(), getDresses(), getSiteSettings()]);

  return (
    <main>
      <Hero content={homepage} logo={site.logo} />
      <Manifesto content={homepage} />
      <FeaturedGowns content={homepage} dresses={dresses} />
      <StudioPreview content={homepage} />
      <CtaBand content={homepage} />
    </main>
  );
}
