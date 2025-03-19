"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function CapabilitiesHero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("company-profile");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/dc.png"
          alt="Cherry blossoms with Washington Monument"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 dark:from-black/80 dark:to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            What we <span className=" text-red-500">do?</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            TATARIY is your premier Small Disadvantaged and Minority Women-Owned
            Government Contracting Services Company, delivering excellence
            through innovation and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-red-600 rounded-full p-4 hover:bg-red-700 text-white">
              <Link href="/statement.pdf" target="_blank">
                Download Now
              </Link>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        onClick={scrollToNextSection}
      >
        <ArrowDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  );
}
