"use client";

import type React from "react";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ParticlesComponent from "./particles";
import { useTypewriter } from "../hooks/use-typewriter";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  // Mouse interaction values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform mouse position to subtle rotation values (very limited range)
  const rotateX = useTransform(mouseY, [-300, 300], [2, -2]);
  const rotateY = useTransform(mouseX, [-300, 300], [-2, 2]);

  // Handle mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (taglineRef.current) {
      const rect = taglineRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const TypewriterEffect = () => {
    const [text] = useTypewriter({
      words: ["Expertise You Need.", "Expertise You Need."],
      loop: false,
      delaySpeed: 1000,
      stopAtLastWord: true, // This will make it stop completely at the last word
    });

    return <>{text}</>;
  };

  return (
    <div
      ref={ref}
      className="relative min-h-screen w-full overflow-x-hidden flex flex-col items-center bg-red-400 justify-center bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500/40 dark:bg-blue-500/30 rounded-full filter blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-red-500/40 dark:bg-red-500/30 rounded-full filter blur-3xl"
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
          className="absolute top-1/2 right-1/3 w-48 md:w-72 h-48 md:h-72 bg-purple-500/30 dark:bg-purple-500/20 rounded-full filter blur-3xl"
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

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Download button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hover:scale-110"
          >
            <div
              className="px-6 py-1 text-base font-medium text-blue-600 dark:text-white border dark:border-white border-blue-600 rounded-full select-none"
              rel="noreferrer"
            >
              Government Technology Solutions
            </div>
          </motion.div>

          {/* Tagline */}
          <div
            ref={taglineRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full"
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-center flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <motion.span
                className="bg-gradient-to-r from-red-600 to-blue-600 dark:from-red-400 dark:to-blue-400 text-transparent bg-clip-text whitespace-nowrap"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                Experience You Trust,
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-400 dark:to-red-400 text-transparent bg-clip-text whitespace-nowrap"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <TypewriterEffect />
              </motion.span>
            </motion.h1>
          </div>

          {/* Description and CTA */}
          <div className="w-full max-w-3xl mx-auto text-center space-y-8 px-4">
            <motion.p
              className="text-sm sm:text-lg md:text-xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              TATARIY LLC is your trusted partner in government contracting,
              delivering excellence to every mission. We streamline IT, Program
              Management, Talent Acquisition, and Training, empowering agencies
              to excel in an AI-driven world with a people-first approach.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center"
            >
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 md:mt-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                number: "15+",
                text: "Years of Federal Contracting Experience",
              },
              { number: "Trusted", text: "By Civilian & Defense Agencies" },
              {
                number: "Certified",
                text: "EDWOSB/WOSB, MWAA-SLBE, DBE, SWaM, SBE, WBE",
              },
              { number: "100%", text: "Past Performance Success" },
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
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-400 dark:to-red-400 text-transparent bg-clip-text mb-1">
                  {item.number}
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.text}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
