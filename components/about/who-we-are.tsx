"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-700 dark:text-white ">
            WHO WE ARE
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300  leading-relaxed">
            We are DOERS!
          </p>
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
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white ">
                DOERS BY DESIGN
              </h3>
              <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                TATARIY means DOER — and that&apos;s who we are.
              </p>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                We&apos;re problem-solvers, builders, and strategic doers by
                design, delivering measurable impact.
              </p>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              Whether it&apos;s integrating intelligent systems or strengthening
              workforce capability, we empower agencies to operate smarter,
              faster, and better — always with people at the center.
            </p>

            <div className="flex items-start space-x-3">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Headquartered in Lake Ridge, Virginia, we serve federal and
                state agencies with a sharp focus on Information Technology,
                Program Management, Talent Acquisition, Training, and
                Professional Services.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
              <img
                src="/who.jpeg"
                alt="TATARIY Team at Work"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
