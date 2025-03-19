"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FounderBioFooter() {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-8 items-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl border border-white/50 dark:border-gray-700/50"
          >
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-700 aspect-square max-w-xs mx-auto">
                <Image
                  src="/rahwa.jpg"
                  alt="Rahwa Haile - Founder and CEO of TATARIY LLC"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="w-full md:w-2/3 text-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Rahwa Haile
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                Founder & CEO
              </p>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  TATARIY LLC soars under Rahwa Haile, our fearless Founder and
                  CEO, who named it to mirror her unstoppable go-getter
                  spirit—DOER! She gets it done, pulling up trailblazers with
                  core values rooted in the Most High, natural talents,
                  unmatched skills, and heart-driven determination—empowering
                  them to rise and pay it forward! In service to our country, we
                  ignite opportunities, making the BIGGEST impact!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
