"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-8 border-t border-gray-200 dark:border-gray-700 pt-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            LOCATION
          </h3>
          <div className="space-y-2">
            <p className="text-lg font-semibold text-red-600 dark:text-red-400">
              TATARIY, LLC
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Headquartered in Lake Ridge, VA
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            CONTACT
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-red-600 dark:text-red-400 mr-3" />
              <Link
                href="mailto:rahwa.haile@tatariy.com"
                className="text-red-600 dark:text-red-400 hover:underline"
              >
                rahwa.haile@tatariy.com
              </Link>
            </div>

            <div className="flex items-center">
              <Phone className="h-5 w-5 text-red-600 dark:text-red-400 mr-3" />
              <Link
                href="tel:+12022504252"
                className="text-red-600 dark:text-red-400 hover:underline"
              >
                (202) 250-4252
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
