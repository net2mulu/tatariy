"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-900 dark:to-gray-800 px-4">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/40 dark:bg-blue-500/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 10,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/40 dark:bg-red-500/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 10,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-gray-900 dark:text-white">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Page Not Found
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white font-medium hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800 transition-all duration-300"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Contact Support
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
