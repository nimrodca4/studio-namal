import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    index: "01",
    title: "Consultation",
    text: "We begin in the salon, without sketches or fabric — just a conversation about the day you're imagining and the woman you'll be in it.",
  },
  {
    index: "02",
    title: "Design",
    text: "From that conversation, a silhouette emerges. We draft your pattern from your measurements alone and present the first sketch in person.",
  },
  {
    index: "03",
    title: "Craftsmanship",
    text: "Your gown is cut, draped, and hand-finished across a series of fittings — often over three to five months of quiet, careful work.",
  },
  {
    index: "04",
    title: "Your Wedding Day",
    text: "The gown arrives at your door in its final form. We ask for one thing in return: a photograph, for our own archive of the women who wore it.",
  },
];

export default function Timeline() {
  return (
    <section className="container-studio py-28 md:py-36">
      <div className="relative">
        <div className="absolute left-[15px] top-2 hidden h-[calc(100%-1rem)] w-px bg-hairline md:left-[39px] md:block" />

        {steps.map((step, i) => (
          <Reveal key={step.index} delay={i * 0.05} className="relative">
            <div className="grid gap-6 border-t border-hairline py-14 first:border-t-0 md:grid-cols-[80px_1fr_2fr] md:items-start md:gap-10">
              <span className="relative z-10 font-display text-2xl text-wine md:text-3xl">
                {step.index}
              </span>
              <h3 className="text-3xl leading-tight text-ink md:text-4xl">
                {step.title}
              </h3>
              <p className="max-w-lg text-sm leading-relaxed text-muted md:text-base">
                {step.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
