import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { CalendlyWidget } from "@/components/contact/calendly-widget";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <div className="container mx-auto px-4 py-16 max-w-9xl">
        <div className="mb-16 flex flex-col md:flex-row gap-4">
          <ContactForm />
          <CalendlyWidget />
        </div>
        <ContactInfo />
      </div>
    </main>
  );
}
