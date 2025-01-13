"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
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
            About TATARIY
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            TATARIY is a premier Small Disadvantaged and Minority Women-Owned
            Government Contracting Services Company committed to excellence and
            innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              With a combined 30 years of leadership experience serving major
              federal agencies, we have positioned ourselves to offer a unique
              blend of expertise, including Information Technology, Program
              Management, Professional Services, Talent Acquisition, and
              Training services.
            </p>
            <p>
              Our leadership team is equipped with an array of educational
              backgrounds and certifications, including MBA, PM, ITS, VA, and
              CSM, ensuring that we are not only well-versed in industry best
              practices but also at the forefront of emerging trends and
              technologies.
            </p>
            <p>
              What sets us apart is not just our expertise, but also our
              extensive network of connections across various government
              agencies and positions. This network gives us unparalleled access
              to vital resources and enables us to ensure the seamless and
              quality execution of operations, no matter the scale or
              complexity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
