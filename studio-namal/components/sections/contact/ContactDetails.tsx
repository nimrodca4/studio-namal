import { Instagram, MessageCircle, Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { ButtonPrimary } from "@/components/ui/Button";

const channels = [
  {
    label: "Instagram",
    value: "@studionamal",
    href: "https://instagram.com",
    icon: Instagram,
  },
  {
    label: "WhatsApp",
    value: "+972 00 000 0000",
    href: "https://wa.me/972000000000",
    icon: MessageCircle,
  },
  {
    label: "Email",
    value: "atelier@studionamal.com",
    href: "mailto:atelier@studionamal.com",
    icon: Mail,
  },
];

export default function ContactDetails() {
  return (
    <div>
      <Reveal>
        <Eyebrow>Visit the Atelier</Eyebrow>
        <h1 className="mt-4 text-4xl leading-[1.05] text-ink md:text-6xl">
          Contact
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
          By appointment only, Sunday through Thursday. Tell us about your
          date and we'll find a time to meet in the salon or over a call.
        </p>
      </Reveal>

      <div className="mt-14 space-y-8">
        {channels.map((channel, i) => (
          <Reveal key={channel.label} delay={0.15 + i * 0.05}>
            <a
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 border-t border-hairline pt-8 first:border-t-0 first:pt-0"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink/15 text-ink transition-colors duration-500 group-hover:border-wine group-hover:text-wine">
                <channel.icon size={16} strokeWidth={1.25} />
              </span>
              <span>
                <span className="block text-[11px] uppercase tracking-widest2 text-muted">
                  {channel.label}
                </span>
                <span className="block font-display text-xl text-ink group-hover:text-wine">
                  {channel.value}
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.35} className="mt-14">
        <ButtonPrimary href="https://wa.me/972000000000">
          Book a Consultation
        </ButtonPrimary>
      </Reveal>
    </div>
  );
}
