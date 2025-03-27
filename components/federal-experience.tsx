"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Users,
  CheckCircle,
  Building,
  Info,
} from "lucide-react";
import FederalExperienceParticles from "./federal-experience-particles";
import { useMobileDetector } from "@/hooks/use-mobile-detector";

const agencies = [
  "DEPARTMENT OF DEFENSE - US-ARMY & US-Air Force",
  "DEPARTMENT OF TRANSPORTATION- FEDERAL AVIATION ADMINISTRATION",
  "DEPARTMENT OF STATE",
  "DEPARTMENT OF VETERANS AFFAIRS",
];

// Enhanced NAICS codes with descriptions
const naicsCodes = [
  {
    code: "541611",
    description:
      "Administrative Management and General Management Consulting Services",
  },
  {
    code: "541618",
    description: "Other Management Consulting Services",
  },
  {
    code: "541511",
    description: "Custom Computer Programming Services",
  },
  {
    code: "541512",
    description: "Computer Systems Design Services",
  },
  {
    code: "541513",
    description: "Computer Facilities Management Services",
  },
  {
    code: "541519",
    description: "Other Computer Related Services",
  },
  {
    code: "561311",
    description: "Employment Placement Agencies",
  },
  {
    code: "611430",
    description: "Professional and Management Development Training",
  },
];

const features = [
  {
    icon: Shield,
    title: "Exceptional Problem-Solving",
    description:
      "Our team consistently garners government accolades for their exceptional Problem-Solving Skills.",
  },
  {
    icon: Clock,
    title: "Proactive Solutions",
    description:
      "Anticipating government challenges, we take the lead in offering solutions before they become issues.",
  },
  {
    icon: Users,
    title: "Real-time Insights",
    description:
      "With hands-on service to diverse government agencies, we possess real-time insights into the exact service quality required.",
  },
  {
    icon: Building,
    title: "24/7 Availability",
    description:
      "We stand ready 24/7, every day of the year, ensuring unwavering availability for your needs.",
  },
  {
    icon: CheckCircle,
    title: "Integrity First",
    description:
      "Rooted in unwavering honesty and integrity, our business foundation mirrors the service experience you can expect.",
  },
];

export default function FederalExperience() {
  const isMobile = useMobileDetector();
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/90 via-purple-600/90 to-blue-600/90 dark:from-red-900/90 dark:via-purple-800/90 dark:to-blue-900/90" />

      {/* Particles */}
      <div className="absolute inset-0">
        <FederalExperienceParticles />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-9xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
                Leveraging a combined 15+ years of expertise in government
                contracting
              </h2>
              <p className="text-red-50 text-lg">
                Our leadership team is driven by excellence and strives to
                exceed expectations in every endeavor.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white/10 dark:bg-gray-900/30 rounded-xl p-4 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-900/40 transition-all duration-300 border border-white/10"
                >
                  <feature.icon className="w-6 h-6 flex-shrink-0 mt-1 text-red-100" />
                  <div>
                    <h3 className="font-semibold mb-1 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-red-50 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white border-b border-red-200/20 pb-2">
                FEDERAL AGENCIES SERVED BY OUR LEADERSHIP TEAM
              </h3>
              <div className="space-y-4">
                {agencies.map((agency, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 bg-white/10 dark:bg-gray-900/30 rounded-lg backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-900/40 transition-all duration-300 text-white border border-white/10"
                  >
                    {agency}
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-white border-b border-red-200/20 pb-2 flex items-center">
                NAICS CODES
                <span className="ml-2 text-sm font-normal text-white/70 italic">
                  (Hover for details)
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {naicsCodes.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="relative group"
                    onMouseEnter={() => setActiveTooltip(item.code)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <div className="p-3 bg-white/10 dark:bg-gray-900/30 rounded-lg text-center backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-900/40 transition-all duration-300 text-white border border-white/10 cursor-help">
                      {item.code}
                      <Info className="inline-block ml-1 h-3 w-3 text-white/70" />
                    </div>

                    {/* Tooltip */}
                    {activeTooltip === item.code && (
                      <div
                        className={`absolute z-20 ${
                          isMobile
                            ? "top-full text-pretty left-0 right-0 mt-1"
                            : "left-1/2 transform -translate-x-1/2 -top-1 -translate-y-full"
                        } w-auto `}
                      >
                        <div className="relative px-3 py-2 h-[80px] md:h-auto text-xs font-medium text-white bg-black/50 rounded-md shadow-lg backdrop-blur-sm">
                          {item.description}
                          {!isMobile && (
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-black/30"></div>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
