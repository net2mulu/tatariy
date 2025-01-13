"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-red-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-red-900/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 dark:text-red-400 font-medium mb-2 block">
            Who we are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto" />
        </motion.div>

        <div className="grid gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-6 text-center">
              <p className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white leading-relaxed">
                Welcome to TATARIY – your premier Small Disadvantaged and
                Minority Women-Owned Government Contracting Services Company.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Founded by three dedicated professionals committed to excellence
                and innovation, TATARIY brings a unique blend of expertise and
                passion to the table.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mt-8"
          >
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Experience & Expertise
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                With a combined 30 years of leadership experience serving major
                federal agencies, we have positioned ourselves to offer a unique
                blend of expertise, including Information Technology, Program
                Management, Professional Services, Talent Acquisition, and
                Training services. Our team has been cleared up to TS/SCI,
                reflecting our commitment to upholding the highest standards of
                security and trustworthiness in our operations.
              </p>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Track Record
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                From spearheading Information Technology Automation and
                Technical Support Services and Foreign Military Sales programs
                for the Department of Defense to fortifying the security of
                overseas diplomatic missions at the Department of State, our
                track record speaks for itself.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto text-center mt-8"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              At TATARIY, we are more than just a contracting company – we are
              your trusted partner in driving innovation, efficiency, and
              success within the state and federal government. Join us on our
              journey to redefine excellence in government contracting services.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              More about us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
