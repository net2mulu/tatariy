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
      words: [
        "Expertise You Need.",
        "Solutions That Work.",
        "Innovation That Delivers.",
        "Results That Matter.",
      ],
      loop: true,
      delaySpeed: 2000,
    });

    return <>{text}</>;
  };

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-start pt-44 gap-8 sm:pt-0 sm:justify-center sm:gap-0 overflow-hidden bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-900 dark:to-gray-800"
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

      <motion.div
        className="sm:mb-14 z-40 hover:scale-110"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a
          href="/statement.pdf"
          target="_blank"
          className="z-50 p-6 text-base py-3 font-medium text-white bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Government Technology Solutions
        </a>
      </motion.div>

      {/* tag line */}
      <div
        ref={taglineRef}
        className="relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.h1
          className="text-3xl md:text-6xl text-center flex flex-col md:flex-row font-bold text-gray-900 dark:text-white mx-auto"
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
            className="block bg-gradient-to-r from-red-600 to-blue-600 dark:from-red-400 dark:to-blue-400 text-transparent bg-clip-text mb-2 md:mb-0"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            Experience You Trust,
          </motion.span>
          <motion.span
            className="block md:ml-2 bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-400 dark:to-red-400 text-transparent bg-clip-text"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <TypewriterEffect />
          </motion.span>
        </motion.h1>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 container mx-auto py-4 sm:py-16 max-w-9xl lg:max-w-9xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-0">
          <motion.p
            className="text-sm sm:text-lg md:text-xl text-justify text-gray-600 dark:text-gray-300 mb-10 mx-auto"
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
              {
                number: "15+",
                text: "Years of Federal Contracting Experience",
              },
              { number: "Trusted", text: "By Civilian & Defense Agencies" },
              {
                number: "Certified",
                text: "EDWSOB/WOSB, MWAA-SLBA, DBE, SWaM, SBE",
              },
              { number: "100%", text: "Past Performance Success" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-white/50 dark:border-gray-700/50 min-h-40"
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
