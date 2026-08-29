import type { Metadata } from "next";
import ContactDetails from "@/components/sections/contact/ContactDetails";
import ContactForm from "@/components/sections/contact/ContactForm";
import { getContact } from "@/lib/sanity";

export async function generateMetadata(): Promise<Metadata> {
  const contact = await getContact();
  return {
    title: "יצירת קשר",
    description: contact.intro,
  };
}

export default async function ContactPage() {
  const contact = await getContact();

  return (
    <main className="container-studio grid gap-20 pb-28 pt-28 md:grid-cols-2 md:gap-24 md:pb-40 md:pt-36">
      <ContactDetails content={contact} />
      <ContactForm content={contact} />
    </main>
  );
}
