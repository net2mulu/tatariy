"use client";

import type React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceLayoutProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  children?: React.ReactNode;
  caseStudy?: {
    title: string;
    overview: string;
    approach?: string;
    solution?: string;
    results?: string;
  };
}

export default function ServiceLayout({
  title,
  description,
  imageSrc,
  imageAlt,
  children,
  caseStudy,
}: ServiceLayoutProps) {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {description}
              </p>
            </div>
            <div className="relative h-64 md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      {children && (
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {children}
            </div>
          </div>
        </section>
      )}

      {/* Case Study Section */}
      {caseStudy && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-red-600 dark:text-red-400 font-medium mb-2 text-3xl block">
                Case Study
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {caseStudy.title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto" />
            </motion.div>

            <div className="max-w-7xl mx-auto">
              <div className="grid gap-8">
                {/* Overview Card */}
                {caseStudy.overview && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-100 dark:border-gray-800">
                      Overview
                    </h3>
                    <div className="text-gray-600 dark:text-gray-300 space-y-4">
                      <div
                        className="text-gray-600 dark:text-gray-300 space-y-4 case-study-content"
                        dangerouslySetInnerHTML={{ __html: caseStudy.overview }}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Approach Card */}
                {caseStudy.approach && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-100 dark:border-gray-800">
                      Approach
                    </h3>
                    <div
                      className="text-gray-600 dark:text-gray-300 space-y-4 case-study-content"
                      dangerouslySetInnerHTML={{ __html: caseStudy.approach }}
                    />
                  </motion.div>
                )}

                {/* Solution Card - Only show if solution exists and is not empty */}
                {caseStudy.solution && caseStudy.solution.trim() !== "" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-100 dark:border-gray-800">
                      Solution
                    </h3>
                    <div
                      className="text-gray-600 dark:text-gray-300 space-y-4 case-study-content"
                      dangerouslySetInnerHTML={{ __html: caseStudy.solution }}
                    />
                  </motion.div>
                )}

                {/* Results Card */}
                {caseStudy.results && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay:
                        caseStudy.solution && caseStudy.solution.trim() !== ""
                          ? 0.3
                          : 0.2,
                    }}
                    className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-100 dark:border-gray-800">
                      Results
                    </h3>
                    <div
                      className="text-gray-600 dark:text-gray-300 space-y-4 case-study-content"
                      dangerouslySetInnerHTML={{ __html: caseStudy.results }}
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
