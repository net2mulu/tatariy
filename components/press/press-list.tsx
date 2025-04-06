"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { pressData } from "@/data/press-data";

export function PressList() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid gap-8">
          {pressData.map((press, index) => (
            <motion.article
              key={press.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-[1px] rounded-lg overflow-hidden group"
            >
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>

              {/* Content */}
              <div className="relative bg-white dark:bg-gray-900 rounded-lg p-6 h-full">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-red-600 text-white text-sm font-medium rounded-full">
                      {press.category}
                    </span>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <Calendar className="mr-1 h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>{press.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <MapPin className="mr-1 h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>{press.location}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {press.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {press.summary}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Link
                      href={`/news/press/${press.slug}`}
                      className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      Read Full Release
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>

                    {press.links && press.links[0] && (
                      <a
                        href={press.links[0].url}
                        target={
                          press.links[0].url.startsWith("http")
                            ? "_blank"
                            : "_self"
                        }
                        rel={
                          press.links[0].url.startsWith("http")
                            ? "noopener noreferrer"
                            : ""
                        }
                        className="inline-flex items-center justify-center px-6 py-2 border border-transparent bg-gradient-to-r from-blue-600/10 to-red-600/10 hover:from-blue-600/20 hover:to-red-600/20 text-blue-600 dark:text-blue-400 font-medium rounded-lg transition-colors"
                      >
                        {press.links[0].label}
                        {press.links[0].url.startsWith("http") && (
                          <ExternalLink className="ml-2 h-4 w-4" />
                        )}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
