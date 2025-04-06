import { EventDetail } from "@/components/events/event-detail";
import { getEventBySlug } from "@/data/event-detail";
import { notFound } from "next/navigation";

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <EventDetail event={event} />
    </main>
  );
}
