"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 via-blue-50 to-red-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-red-900/10">
      <div className="container mx-auto px-4 max-w-9xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Who We Are
          </h2>
          <span className="text-red-600 dark:text-red-400 font-medium mb-2 text-lg block">
            Doers by Design
          </span>
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
              <p className="text-lg text-left tracking-tight md:text-justify text-gray-700 dark:text-gray-300 mb-8">
                TATARIY is a purpose-driven government contracting firm built to
                deliver what matters: results, trust, and transformative impact.
                Headquartered in Lake Ridge, Virginia, we partner with federal,
                state, and local agencies to solve complex challenges across
                Information Technology, Program Management, Talent Acquisition,
                Training, and Professional Services.
              </p>
              <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                TATARIY means DOER — and that&apos;s who we are.
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
              <p className="text-gray-700  dark:text-gray-300">
                At TATARIY, we lead with experience you can trust and deliver
                with the expertise you need. With over 15 years in federal
                contracting, we bring deep, cross-sector experience supporting
                defense, civilian, and SLED missions. Our strength lies in
                delivering end-to-end IT solutions-from enterprise program
                management to cybersecurity, cloud migration, and systems
                integration. We pair that with high-impact talent acquisition
                and people-first training programs to ensure long-term success.
                Every engagement is grounded in operational excellence, mission
                alignment, and a commitment to getting the job done right.
              </p>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Track Record
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our past performance reflects a consistent ability to deliver
                with precision, speed, and impact. From leading talent
                acquisition efforts for Foreign Military Sales programs across
                four Air Force bases to supporting cybersecurity initiatives at
                the Department of State, TATARIY has earned trust across
                critical missions. Our experience also includes work under the
                ITATSS program with RNEC-NCR, where we contributed to RMF
                cybersecurity, VolP services, and C4IM operations demonstrating
                our ability to meet high-security, high-performance standards.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto text-center mt-8"
          >
            <p className="text-lg text-justify tracking-tight md:text-justify text-gray-700 dark:text-gray-300 mb-8">
              At TATARIY, we don&apos;t just show up - we solve. We lead with
              heart, build with brains, and deliver with integrity. Whether
              we&apos;re supporting a prime on a high-stakes initiative or
              helping a small agency scale with confidence, we bring our full
              capability to the table - and we get the job done
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
