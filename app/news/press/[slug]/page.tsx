import { PressDetail } from "@/components/press/press-detail";
import { getPressReleaseBySlug } from "@/data/press-data";
import { notFound } from "next/navigation";

export default function PressReleasePage({
  params,
}: {
  params: { slug: string };
}) {
  const press = getPressReleaseBySlug(params.slug);

  if (!press) {
    return notFound();
  }

  return (
    <main className="min-h-screen">
      <PressDetail press={press} />
    </main>
  );
}
