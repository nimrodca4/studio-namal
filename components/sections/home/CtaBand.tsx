import Reveal from "@/components/ui/Reveal";
import { ButtonPrimary } from "@/components/ui/Button";

export default function CtaBand() {
  return (
    <section className="bg-ink py-28 text-center md:py-40">
      <div className="container-studio flex flex-col items-center">
        <Reveal>
          <p className="eyebrow text-cream/50">By Appointment Only</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl text-4xl leading-[1.15] text-cream md:text-6xl">
            Begin your gown with a conversation.
          </h2>
        </Reveal>
        <Reveal delay={0.2} className="mt-12">
          <ButtonPrimary
            href="/contact"
            className="border-cream/80 text-cream hover:bg-cream hover:text-ink"
          >
            Book a Consultation
          </ButtonPrimary>
        </Reveal>
      </div>
    </section>
  );
}
