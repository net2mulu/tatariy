"use client";

import { motion } from "framer-motion";
import { Compass, Target } from "lucide-react";

export default function AboutMissionVision() {
  return (
    <section className="py-12 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-9xl">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg h-full flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <Target className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Our Mission
              </h2>
            </div>
            <div className="flex flex-col flex-grow justify-between">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To foster an environment for our clients and employees where
                integrity, excellence and empowerment are paramount.
              </p>

              {/* This empty div helps push content to the top while maintaining equal height */}
              <div className="mt-auto"></div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg h-full flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Compass className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Our Vision
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
              To be the premier Women-Owned Government Contracting company. We
              want to become the governments first choice for mission solutions
              by serving to greater heights. We want to create a work-space
              where employees are known to thrive.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
