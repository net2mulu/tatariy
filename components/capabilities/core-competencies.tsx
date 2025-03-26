"use client";

import { motion } from "framer-motion";
import {
  Computer,
  BarChart2,
  Users2,
  GraduationCap,
  Shield,
} from "lucide-react";

const competencies = [
  {
    icon: Computer,
    title: "Information Technology",
    description:
      "Comprehensive IT solutions including automation, system integration, and infrastructure management.",
  },
  {
    icon: BarChart2,
    title: "Program Management",
    description:
      "Expert program and project management services ensuring successful delivery and implementation.",
  },
  {
    icon: Users2,
    title: "Professional Services",
    description:
      "Specialized consulting and professional services tailored to government needs.",
  },
  {
    icon: Shield,
    title: "Security Services",
    description:
      "Advanced security solutions for protecting sensitive government information and assets.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description:
      "Comprehensive training programs designed to enhance workforce capabilities and knowledge.",
  },
];

export default function CoreCompetencies() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 scroll-mt-16 overflow-hidden">
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
            {competencies.map((competency, index) => (
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
