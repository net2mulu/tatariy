"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
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
          <h1 className="text-4xl mb-4 md:text-5xl lg:text-6xl font-bold text-gray-700 dark:text-white">
            About Us
          </h1>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 max-w-9xl mx-auto"
        >
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
            <div>
              <p className="text-gray-900 dark:text-gray-400 leading-relaxed">
                WHO WE ARE
              </p>
              <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed italic">
                DOERS BY DESIGN
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We’re problem-solvers, builders, and strategic doers who deliver
              measurable impact.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether it&apos;s integrating intelligent systems or strengthening
              workforce capability, we empower agencies to operate smarter,
              faster, and better — always with people at the center.
            </p>{" "}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Headquartered in Lake Ridge, Virginia, we serve federal and state
              agencies with a sharp focus on Information Technology, Program
              Management, Talent Acquisition, Training, and Professional
              Services.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              TATARIY means DOER — and that’s who we are.
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
