"use client";

import { motion } from "framer-motion";
import { Code, BarChart3, Users, GraduationCap, Briefcase } from "lucide-react";

export default function WhatWeDeliver() {
  const services = [
    {
      title: "Information Technology",
      description:
        "Custom software. Seamless integration. AI-enhanced support. We build secure, scalable systems that improve outcomes and drive mission performance.",
      icon: Code,
      delay: 0,
    },
    {
      title: "Program Management",
      description:
        "We deliver from start to finish — managing risk, scope, and cost with precision. Our approach blends agility with discipline, powered by data and intelligent insight.",
      icon: BarChart3,
      delay: 0.1,
    },
    {
      title: "Talent Acquisition",
      description:
        "We connect agencies with exceptional professionals in AI, cybersecurity, and advanced tech roles — many of whom others miss. We don't just fill roles; we build dream teams.",
      icon: Users,
      delay: 0.2,
    },
    {
      title: "Training",
      description:
        "Our learning solutions cultivate collaboration, resilience, and adaptability — preparing today's workforce for tomorrow's mission.",
      icon: GraduationCap,
      delay: 0.3,
    },
    {
      title: "Professional Services",
      description:
        "When the mission can't wait, we step in. Our experts fill critical gaps with precision support across IT, cybersecurity, and AI-driven transformation.",
      icon: Briefcase,
      delay: 0.4,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            WHAT WE DELIVER
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: service.delay }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
