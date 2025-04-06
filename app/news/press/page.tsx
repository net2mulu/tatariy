import { PressHero } from "@/components/press/press-hero";
import { PressList } from "@/components/press/press-list";
import { NewsletterSignup } from "@/components/blog/newsletter-signup";

export default function PressPage() {
  return (
    <main className="min-h-screen">
      <PressHero />
      <PressList />
      <NewsletterSignup />
    </main>
  );
}
