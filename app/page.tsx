import Hero from "@/components/hero";
import Services from "@/components/services";
import Certifications from "@/components/certifications";
import About from "@/components/about";
import FederalExperience from "@/components/federal-experience";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <Hero />
      <About />
      <Services />
      <Certifications />
      <FederalExperience />
    </main>
  );
}
