"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function OurCommitment() {
  const commitments = [
    "We listen before we build.",
    "We align before we act.",
    "We do the work others won't touch.",
    "And when technology shifts the game — we're already one move ahead.",
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            OUR COMMITMENT
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            We believe in showing up with integrity, executing with excellence,
            and always delivering on our word.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
              <img
                src="/commit.png"
                alt="TATARIY Team Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <ul className="space-y-4">
              {commitments.map((commitment, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <Check className="text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {commitment}
                  </p>
                </motion.li>
              ))}
            </ul>

            <p className="text-lg text-gray-700 dark:text-gray-300 pt-4">
              Our team blends human-centered thinking with AI-informed
              strategies to give clients the edge they need in today&apos;s
              fast-changing landscape.
            </p>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 flex items-center space-x-2">
                <span>We lead with heart. We build with brains.</span>
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                And we never forget who we&apos;re doing it for.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
