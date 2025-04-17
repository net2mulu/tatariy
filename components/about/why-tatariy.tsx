"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function WhyTatariy() {
  const benefits = [
    {
      audience: "For clients",
      value: "We deliver smarter, faster, and better.",
    },
    {
      audience: "For partners",
      value: "We help you stand-out, grow organically and authentically.",
    },
    {
      audience: "For communities",
      value: "We build long-term value through service, and action.",
    },
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            WHY TATARIY
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-xl text-gray-700 dark:text-gray-300 italic">
                We don&apos;t chase opportunities — we create them. We
                don&apos;t just show potential — we fulfill it.
              </p>
            </div>

            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {benefit.audience}:
                    </span>
                    <p className="text-gray-700 dark:text-gray-300">
                      {benefit.value}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                At TATARIY, we don&apos;t just promise —{" "}
                <span className="text-blue-600 dark:text-blue-400">We do.</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg -z-10"></div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
              <img
                src="/team.png"
                alt="TATARIY Impact"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold text-lg">Delivering Excellence</p>
              <p className="text-sm">Since Day One</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
