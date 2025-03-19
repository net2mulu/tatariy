"use client";

import { motion } from "framer-motion";

export function BlogHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            TATARIY Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Welcome to TATARIYs Blog—where we ignite action in government
            contracting. Start here, win big.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
