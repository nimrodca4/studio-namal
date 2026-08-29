import type { Metadata } from "next";
import ContactDetails from "@/components/sections/contact/ContactDetails";
import ContactForm from "@/components/sections/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation with Studio Namal or reach the atelier by Instagram, WhatsApp, or email.",
};

export default function ContactPage() {
  return (
    <main className="container-studio grid gap-20 pb-28 pt-28 md:grid-cols-2 md:gap-24 md:pb-40 md:pt-36">
      <ContactDetails />
      <ContactForm />
    </main>
  );
}
