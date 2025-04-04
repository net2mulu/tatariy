"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CareersHero() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-9xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className=" mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Careers at TATARIY
            </h1>
            <span className="text-xs md:text-sm font-bold text-gray-600 dark:text-white">
              Built by Doers. Driven by Purpose.
            </span>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            At TATARIY, talent isn&apos;t an alterthought - its our foundation.
            As a company that delivers Talent Acquisition as a core service we
            know how to recognize potential and match it with purpose
            That&apos;s exactly now we crow our own team.
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            We&apos;re looking for people who take action, lead with integrity.
            and are committed to delivering results that matter if that&apos;s
            you. let&apos;s build something great together.
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
