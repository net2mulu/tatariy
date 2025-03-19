"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CareersHero() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            At TATARIY, were looking for passionate individuals who want to
            make a difference in government technology. Join us in shaping the
            future of public sector innovation.
          </p>
          <Link
            href="#job-openings"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Open Positions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
