import { EventsHero } from "@/components/events/events-hero";
import { EventsList } from "@/components/events/events-list";
import { NewsletterSignup } from "@/components/blog/newsletter-signup";

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <EventsHero />
      <EventsList />
      <NewsletterSignup />
    </main>
  );
}
