"use client";

import { motion } from "framer-motion";
import CertificationCarousel from "./certification-carousel";

export default function Certifications() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-9xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-medium mb-2 block">
            Our Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative">
            <div className="flex flex-wrap justify-center items-center gap-8 p-8 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CertificationCarousel />
            </div>

            <div className="w-full text-center mt-8">
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We maintain the highest standards of excellence through our
                diverse range of certifications, demonstrating our commitment to
                quality, diversity, and expertise in government contracting.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
