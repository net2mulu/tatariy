import { EventDetail } from "@/components/events/event-detail";
import { getEventBySlug } from "@/data/event-detail";
import { notFound } from "next/navigation";

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug);

  if (!event) {
    return notFound();
  }

  return (
    <main className="min-h-screen">
      <EventDetail event={event} />
    </main>
  );
}
