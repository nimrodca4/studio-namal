import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";

const values = [
  {
    title: "One Gown, One Bride",
    text: "No silhouette is repeated for two clients in the same season. Your gown is drafted from your measurements alone.",
  },
  {
    title: "Hand Over Machine",
    text: "Beading, draping, and finishing are done by hand in our Tel Aviv workroom, never outsourced.",
  },
  {
    title: "Time, Not Trend",
    text: "We design for the photographs you'll look at in thirty years, not the season we happen to be in.",
  },
];

export default function StudioValues() {
  return (
    <section className="border-t border-hairline bg-paper py-28 md:py-36">
      <div className="container-studio">
        <Reveal>
          <Eyebrow>How We Work</Eyebrow>
        </Reveal>
        <div className="mt-14 divide-y divide-hairline">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.08}>
              <div className="grid gap-4 py-10 md:grid-cols-[80px_1fr_2fr] md:items-baseline">
                <span className="font-display text-2xl text-wine">
                  0{i + 1}
                </span>
                <h3 className="text-2xl text-ink md:text-3xl">{value.title}</h3>
                <p className="max-w-xl text-sm leading-relaxed text-muted">
                  {value.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
