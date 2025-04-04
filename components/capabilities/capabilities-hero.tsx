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
    <section className="relative  min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/capitol.jpg"
          alt="Cherry blossoms with Washington Monument"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative container z-10  mx-auto px-4 py-20 max-w-9xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-lg italic text-white">Doers by Design</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Our <span className=" text-red-500">Capabilities</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            At TATARIY, our capabilities are rooted in action, precision, and
            purpose. We empower government missions through solutions that don’t
            just solve today’s problems—they anticipate tomorrow’s needs. As
            DOERS, we deliver with integrity, agility, and measurable
            impact—ensuring every engagement drives lasting value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-red-600 rounded-full p-4 hover:bg-red-700 text-white">
              <Link href="/statement.pdf" target="_blank">
                Download Our Capabilities
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
