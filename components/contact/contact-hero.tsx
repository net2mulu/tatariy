"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-900 dark:to-gray-800" />

      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-500/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Get in touch with our team to discuss how TATARIY can help your
            agency achieve its mission. Schedule a consultation or send us a
            message, and we&apos;ll respond promptly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
