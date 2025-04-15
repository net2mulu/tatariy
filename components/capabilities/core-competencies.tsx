"use client";

import { motion } from "framer-motion";
import {
  Computer,
  BarChart2,
  Users2,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const competencies = [
  {
    icon: Computer,
    title: "Information Technology",
    description:
      "Custom software. Seamless integration. AI-enhanced support. We build secure, scalable systems that improve outcomes and drive mission performance.",
  },
  {
    icon: BarChart2,
    title: "Program Management",
    description:
      "We deliver from start to finish — managing risk, scope, and cost with precision. Our approach blends agility with discipline, powered by data and intelligent insight.",
  },
  {
    icon: Users2,
    title: "Talent Acquisition",
    description:
      "We connect agencies with exceptional professionals in AI, cybersecurity, and advanced tech roles — many of whom others miss. We don't just fill roles; we build dream teams.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description:
      "Our learning solutions cultivate collaboration, resilience, and adaptability — preparing today's workforce for tomorrow's mission.",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description:
      "When the mission can't wait, we step in. Our experts fill critical gaps with precision support across IT, cybersecurity, and AI-driven transformation.",
  },
];

export default function CoreCompetencies() {
  return (
    <section className="py-8 bg-white dark:bg-gray-900 scroll-mt-16 overflow-hidden">
      <div className="container mx-auto px-4 max-w-9xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Core Competencies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-red-500/10 dark:from-blue-500/5 dark:to-red-500/5 rounded-3xl" />
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {competencies.slice(0, 3).map((competency, index) => (
              <motion.div
                key={competency.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white  dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className={`flex items-start gap-4`}>
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-red-100 dark:from-blue-900/30 dark:to-red-900/30 rounded-lg">
                    <competency.icon className="w-6 h-6 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {competency.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {competency.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-2  gap-8 p-8">
            {competencies.slice(3, 5).map((competency, index) => (
              <motion.div
                key={competency.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white  dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className={`flex items-start gap-4`}>
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-red-100 dark:from-blue-900/30 dark:to-red-900/30 rounded-lg">
                    <competency.icon className="w-6 h-6 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {competency.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {competency.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
