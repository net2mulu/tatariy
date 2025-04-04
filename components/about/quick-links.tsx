"use client";

import { useState, useEffect } from "react";
import {
  Users,
  Briefcase,
  Heart,
  Award,
  HelpCircle,
  User,
  CheckCircle,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  //   { id: "hero", label: "Top", icon: Home },
  { id: "who-we-are", label: "Who We Are", icon: Users },
  { id: "what-we-deliver", label: "What We Deliver", icon: Briefcase },
  { id: "our-commitment", label: "Our Commitment", icon: Heart },
  { id: "why-tatariy", label: "Why TATARIY", icon: CheckCircle },
  { id: "vision", label: "Our Vision, Mission", icon: Target },
  { id: "core-values", label: "Core Values", icon: Award },
  { id: "faq", label: "FAQ", icon: HelpCircle },
  { id: "founder", label: "Founder", icon: User },
];

export default function QuickLinks() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Find the section that is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full py-4 px-2 shadow-lg">
        <ul className="flex flex-col items-center space-y-5">
          {sections.map((section) => (
            <li key={section.id} className="relative group">
              <button
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                  activeSection === section.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30"
                )}
                aria-label={`Scroll to ${section.label}`}
              >
                <section.icon className="w-5 h-5" />
              </button>

              {/* Tooltip */}
              <div className="absolute left-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-blue-600 text-white px-3 py-1 rounded whitespace-nowrap text-sm font-medium">
                  {section.label}
                </div>
                <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 border-8 border-transparent border-r-blue-600"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
