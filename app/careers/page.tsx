import CareersHero from "@/components/careers/careers-hero";
import { JobOpenings } from "@/components/careers/job-openings";

export default function CareersPage() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <CareersHero />
      <JobOpenings />
    </main>
  );
}
