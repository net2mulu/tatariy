"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Users, CheckCircle, Building } from "lucide-react";
import FederalExperienceParticles from "./federal-experience-particles";

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
    icon: CheckCircle,
    title: "Integrity First",
    description:
      "Rooted in unwavering honesty and integrity, our business foundation mirrors the service experience you can expect.",
  },
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
];

export default function FederalExperience() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br  from-blue-500 to-violet-800" />

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
              <p className="text-blue-50 text-lg">
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
                  className="flex items-start gap-4 bg-white/10 dark:bg-gray-900/30 rounded-xl p-4 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-violet-900/20 transition-all duration-300 border border-white/10"
                >
                  <feature.icon className="w-6 h-6 flex-shrink-0 mt-1 text-blue-100" />
                  <div>
                    <h3 className="font-semibold mb-1 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-blue-50 text-sm">
                      {feature.description}
                    </p>
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
              <h3 className="text-2xl font-bold mb-6 text-white border-b border-violet-200/20 pb-2">
                NAICS CODES
              </h3>
              <div className="grid gap-4">
                {naicsCodes.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="p-4 bg-white/10 dark:bg-gray-900/30 rounded-lg backdrop-blur-sm hover:bg-blue-300/20 dark:hover:bg-violet-700/30 transition-all duration-300 border border-white/10"
                  >
                    <div className="flex flex-col">
                      <div className="flex items-center mb-2">
                        <span className="text-xl font-semibold text-white">
                          {item.code}
                        </span>
                      </div>
                      <p className="text-blue-50 text-sm">{item.description}</p>
                    </div>
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
