import { notFound } from "next/navigation";
import { PressDetail } from "@/components/press/press-detail";
import { getPressReleaseBySlug } from "@/data/press-data";

export default async function PressReleasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const press = getPressReleaseBySlug(slug);

  if (!press) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <PressDetail press={press} />
    </main>
  );
}
