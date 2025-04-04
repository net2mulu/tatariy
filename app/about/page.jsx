import AboutHero from "@/components/about/about-hero";
import AboutMissionVision from "@/components/about/about-mission-vision";
import AboutCoreValues from "@/components/about/about-core-values";
import AboutFaq from "@/components/about/about-faq";
import WhoWeAre from "@/components/about/who-we-are";
import WhatWeDeliver from "@/components/about/what-we-deliver";
import OurCommitment from "@/components/about/our-commitment";
import WhyTatariy from "@/components/about/why-tatariy";
import QuickLinks from "@/components/about/quick-links";

import { FounderBioFooter } from "@/components/about/about-footer";

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <QuickLinks />
      <section id="hero">
        <AboutHero />
      </section>
      <section id="who-we-are">
        <WhoWeAre />
      </section>
      <section id="what-we-deliver">
        <WhatWeDeliver />
      </section>
      <section id="our-commitment">
        <OurCommitment />
      </section>
      <section id="why-tatariy">
        <WhyTatariy />
      </section>
      <section id="vision">
        <AboutMissionVision />
      </section>
      <section id="core-values">
        <AboutCoreValues />
      </section>
      <section id="faq">
        <AboutFaq />
      </section>
      <section id="founder">
        <FounderBioFooter />
      </section>
    </main>
  );
}
