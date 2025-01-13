import CapabilitiesHero from "@/components/capabilities/capabilities-hero";
import CompanyProfile from "@/components/capabilities/company-profile";
import CoreCompetencies from "@/components/capabilities/core-competencies";
import PastPerformance from "@/components/capabilities/past-performance";
import Certifications from "@/components/certifications";

export default function CapabilitiesPage() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <CapabilitiesHero />
      <CompanyProfile />
      <PastPerformance />
      <CoreCompetencies />
      <Certifications />
    </main>
  );
}
