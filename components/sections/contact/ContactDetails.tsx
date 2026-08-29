import { MessageCircle, Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { ButtonPrimary } from "@/components/ui/Button";
import type { ContactContent } from "@/lib/sanity";

const icons = {
  whatsapp: MessageCircle,
  email: Mail,
};

export default function ContactDetails({ content }: { content?: ContactContent }) {
  const contact = content ?? {
    eyebrow: "ביקור באטלייה",
    title: "יצירת קשר",
    intro: "בתיאום מראש בלבד, מיום ראשון עד חמישי. ספרי לנו על התאריך שלך, ונמצא יחד זמן להיפגש בסלון או בשיחה.",
    buttonLabel: "לתיאום פגישת ייעוץ",
    channels: [
      { label: "אינסטגרם", value: "@studionamal", href: "https://instagram.com" },
      { label: "וואטסאפ", value: "+972 00 000 0000", href: "https://wa.me/972000000000" },
      { label: "אימייל", value: "namal@studionamal.com", href: "mailto:namal@studionamal.com" },
    ],
    successTitle: "הפנייה התקבלה",
    successText: "נחזור אלייך מהאטלייה בתוך שני ימי עסקים כדי לתאם את הפגישה.",
    formButtonLabel: "שליחת הפנייה",
    fields: {
      fullName: "שם מלא",
      email: "כתובת אימייל",
      weddingDate: "תאריך החתונה (רשות)",
      message: "ספרי לנו על היום שלך",
    },
  };

  const channels = contact.channels.map((channel, index) => ({
    ...channel,
    icon: index === 0 ? icons.email : index === 1 ? icons.whatsapp : icons.email,
  }));

  return (
    <div>
      <Reveal>
        <Eyebrow>{contact.eyebrow}</Eyebrow>
        <h1 className="mt-4 text-4xl leading-[1.05] text-ink md:text-6xl">
          {contact.title}
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
          {contact.intro}
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
                <span className="block text-[13px] uppercase tracking-widest2 text-muted">
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
        <ButtonPrimary href={contact.channels[1]?.href || "https://wa.me/972000000000"}>
          {contact.buttonLabel}
        </ButtonPrimary>
      </Reveal>
    </div>
  );
}
