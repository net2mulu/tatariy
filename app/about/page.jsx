import AboutHero from "@/components/about/about-hero";
import AboutMissionVision from "@/components/about/about-mission-vision";
import AboutCoreValues from "@/components/about/about-core-values";
import AboutFaq from "@/components/about/about-faq";

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <AboutHero />
      <AboutMissionVision />
      <AboutCoreValues />
      <AboutFaq />
    </main>
  );
}
