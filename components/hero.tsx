"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
        <motion.div
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-purple-500/30 dark:bg-purple-500/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 8,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        {/* Particles container */}
        <div className="absolute inset-0">
          <ParticlesComponent />
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 container mx-auto px-4  py-4 sm:py-16 max-w-9xl lg:max-w-9xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="sm:mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/statement.pdf"
              target="_blank"
              className="hover:bg-blue-600 hover:text-white cursor-pointer hover:scale-105 inline-block px-4 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 rounded-full border border-blue-600/30 dark:border-blue-400/30 mb-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm"
            >
              Government Technology Solutions
            </Link>
          </motion.div>

          <motion.h1
            className="text-xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
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
            className="text-xs sm:text-lg md:text-xl text-balance text-gray-600 dark:text-gray-300 mb-10 mx-auto "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            TATARIY LLC is your trusted partner in government contracting,
            delivering excellence to every mission. We streamline IT, Program
            Management, Talent Acquisition, and Training, empowering agencies to
            excel in an AI-driven world with a people-first approach. Our track
            record of cost savings, uplifted teams, and uncompromised integrity
            speaks for itself.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn more
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            {/* <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-sm sm:text-base font-medium text-gray-800 dark:text-white border-2 border-gray-800/20 dark:border-white/20 hover:border-gray-800/40 dark:hover:border-white/40 hover:bg-gray-800/5 dark:hover:bg-white/5 rounded-lg transition-all duration-300"
            >
              Get in Touch
            </Link> */}
          </motion.div>
        </div>
      </motion.div>

      {/* Trust indicators */}
      <div className="absolute bottom-2 md:bottom-10 left-0 right-0 z-20">
        <div className="container mx-auto px-4 max-w-9xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center">
            {[
              { number: "15+", text: "Years Experience" },
              { number: "100+", text: "Projects Delivered" },
              { number: "50+", text: "Agency Partners" },
              { number: "24/7", text: "Support Available" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-white/50 dark:border-gray-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-400 dark:to-red-400 text-transparent bg-clip-text mb-1">
                  {item.number}
                </div>
                <div className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
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
