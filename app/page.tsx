import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import FederalExperience from "@/components/federal-experience";
import CertificationCarousel from "@/components/certification-carousel";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <Hero />
      <About />
      <Services />

      <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
              Our Certifications
            </h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2">
              TATARIY is proud to hold multiple certifications that demonstrate
              our commitment to excellence and diversity in government
              contracting.
            </p>
          </div>
          <CertificationCarousel />
        </div>
      </section>
      <FederalExperience />
    </main>
  );
}
