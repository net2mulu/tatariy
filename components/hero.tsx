"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ParticlesComponent from "./particles";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/50 dark:bg-blue-500/40 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/50 dark:bg-red-500/40 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        {/* Particles container */}
        <div className="absolute inset-0">
          <ParticlesComponent />
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 container mx-auto px-4 py-20 max-w-7xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 rounded-full border border-blue-600/30 dark:border-blue-400/30 mb-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              Government Technology Solutions
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="block mb-2">Experience You Trust,</span>
            <span className="block bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-400 dark:to-red-400 text-transparent bg-clip-text">
              Expertise You Need.
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Empowering government agencies with cutting-edge technology
            solutions and proven expertise in digital transformation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="/capabilities"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-red-500/30"
            >
              Explore Capabilities
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400 border-2 border-blue-600/20 dark:border-blue-400/20 hover:border-blue-600/40 dark:hover:border-blue-400/40 hover:bg-blue-50 dark:hover:bg-blue-900/10 rounded-lg transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Trust indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center">
            {[
              { number: "15+", text: "Years Experience" },
              { number: "100+", text: "Projects Delivered" },
              { number: "50+", text: "Agency Partners" },
              { number: "24/7", text: "Support Available" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-1">
                  {item.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  {item.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
