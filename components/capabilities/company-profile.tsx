"use client";

import { motion } from "framer-motion";
import { Building2, Globe2, Shield, Users } from "lucide-react";

const companyInfo = [
  {
    label: "CAGE",
    value: "95HF3",
  },
  {
    label: "DUNS",
    value: "071939012",
  },
  {
    label: "UEI",
    value: "HQ1ZLRCN9QZ1",
  },
];

const highlights = [
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Diverse qualifications including MBA, PMI, ITIL-V4, CSM, ensuring comprehensive expertise.",
  },
  {
    icon: Shield,
    title: "Security Cleared",
    description:
      "Industry veterans cleared up to TS/SCI with 30 years of combined experience.",
  },
  {
    icon: Globe2,
    title: "Well Connected",
    description:
      "Strategic connections and vital resources across government agencies.",
  },
  {
    icon: Building2,
    title: "Established",
    description:
      "Small Disadvantaged and Minority Women-Owned Government Contracting Services Company.",
  },
];

export default function CompanyProfile() {
  return (
    <section
      id="company-profile"
      className="py-24 bg-gray-50 dark:bg-gray-800 scroll-mt-16"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Company Profile
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {companyInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
                {info.label}
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {info.value}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
                  <highlight.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
