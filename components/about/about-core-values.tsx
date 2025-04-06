"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Award,
  Shield,
  HandHelping,
  X,
  ChevronRight,
} from "lucide-react";

const coreValues = [
  {
    icon: Heart,
    title: "FAITH-DRIVEN",
    description: "Rooted in purpose, guided by God's will.",
    details:
      "Our faith is the foundation of everything we do. We believe in serving a higher purpose and allowing our values to guide our decisions. We strive to honor God through our work, relationships, and commitment to excellence.",
  },
  {
    icon: HandHelping,
    title: "SERVANT LEADERSHIP",
    description: "Leading by serving, lifting others as we grow.",
    details:
      "We believe true leadership comes through service. Our leaders focus on the growth and well-being of our team and the communities we serve. By empowering others and putting their needs first, we all rise together.",
  },
  {
    icon: Shield,
    title: "INTEGRITY",
    description: "Doing what's right, every time, no shortcuts.",
    details:
      "Integrity is non-negotiable in our organization. We maintain the highest ethical standards in all our dealings, ensuring transparency, honesty, and accountability. We do what's right, even when no one is watching.",
  },
  {
    icon: Award,
    title: "EXCELLENCE",
    description: "Giving our best, because nothing less will do.",
    details:
      "We pursue excellence in everything we do. From the quality of our services to how we treat our clients and each other, we strive to exceed expectations. We continuously improve, innovate, and deliver results that make a difference.",
  },
];

export default function AboutCoreValues() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 max-w-9xl">
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
              // transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden ${
                expandedIndex === index ? "z-10" : ""
              }`}
              whileHover={{
                scale: expandedIndex === null ? 1.03 : 1,
                boxShadow:
                  expandedIndex === null
                    ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    : "",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Card Front */}
              <div
                className={`p-6 h-full cursor-pointer`}
                onClick={() => toggleExpand(index)}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-red-100 dark:from-blue-900/30 dark:to-red-900/30 rounded-lg mb-4">
                    <value.icon className="w-8 h-8 text-gray-900 dark:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>

                  <motion.div
                    className="mt-4 text-blue-600 dark:text-blue-400 flex items-center"
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                    }}
                  >
                    <span className="text-sm">Learn more</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </motion.div>
                </div>
              </div>

              {/* Expanded Card */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600 to-red-600 text-white p-6 flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <button
                      className="absolute top-3 right-3 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedIndex(null);
                      }}
                    >
                      <X className="h-5 w-5" />
                    </button>

                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-white/20 rounded-lg mr-3">
                        <value.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{value.title}</h3>
                    </div>

                    <p className="text-white/90 leading-relaxed">
                      {value.details}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
