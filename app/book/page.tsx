import BookHero from "@/components/book/book-header";
import { CalendlyWidget } from "@/components/contact/calendly-widget";

export default function BookPage() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <BookHero />
      <CalendlyWidget />
      <div className="my-16 flex gap-4"></div>
    </main>
  );
}
