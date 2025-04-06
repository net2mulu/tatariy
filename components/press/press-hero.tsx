"use client";

import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

export function PressHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-r from-blue-600/20 to-red-600/20 rounded-full">
            <Newspaper className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Press & Media
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest news, announcements, and achievements
            from TATARIY. Our press releases provide insights into our ongoing
            commitment to excellence in government contracting.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
