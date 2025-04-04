"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function BookHero() {
  return (
    <section className="pt-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-900 dark:to-gray-800" />

      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-500/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-9xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center mb-6 justify-center">
            <Calendar className="h-10 w-10 text-red-600 dark:text-red-400 mr-2" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Let&apos;s talk strategy
            </h1>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6 text-center max-w-2xl mx-auto">
            Choose a time that works for you. and we&apos;ll walk you through
            how TATARIY can support your mission with solutions tailored to your
            goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
