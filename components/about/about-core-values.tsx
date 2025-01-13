"use client";

import { motion } from "framer-motion";
import { Shield, Users, DiffIcon as Diversity, Heart } from "lucide-react";

const coreValues = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Operating with the utmost ethical standards in all our dealings with clients, employees, and partners.",
  },
  {
    icon: Users,
    title: "Empowerment",
    description:
      "Creating opportunities for growth and development while fostering a culture of innovation and leadership.",
  },
  {
    icon: Diversity,
    title: "Diversity & Inclusion",
    description:
      "Embracing diverse perspectives and creating an inclusive environment where everyone can thrive.",
  },
  {
    icon: Heart,
    title: "Community Engagement",
    description:
      "Actively participating in and contributing to the communities we serve, making a positive impact.",
  },
];

export default function AboutCoreValues() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Core Values
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-red-100 dark:from-blue-900/30 dark:to-red-900/30 rounded-lg mb-4">
                  <value.icon className="w-8 h-8 text-gray-900 dark:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
