"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  ArrowLeft,
  Share2,
  Twitter,
  Facebook,
  Linkedin,
  ExternalLink,
  Mail,
  Phone,
} from "lucide-react";
import type { PressRelease } from "@/data/press-data";

type PressDetailProps = {
  press: PressRelease;
};

export function PressDetail({ press }: PressDetailProps) {
  return (
    <article className="min-h-screen">
      {/* Hero Section with Back Link */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Navigation Bar - Separate from main content */}
          <div className="mb-12">
            <Link
              href="/news/press"
              className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors shadow-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4 text-blue-600" />
              Back to Press Releases
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-red-600 text-white text-sm font-medium rounded-full mb-4">
              {press.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {press.title}
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center text-sm text-gray-600 dark:text-gray-400 space-y-2 md:space-y-0 md:space-x-6 mb-8">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                <time dateTime={press.date}>{press.date}</time>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span>{press.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:col-span-2"
              >
                {/* Press Release Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                  <div dangerouslySetInnerHTML={{ __html: press.content }} />
                </div>

                {/* Links Section */}
                {press.links && press.links.length > 0 && (
                  <div className="mt-8 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Related Links
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {press.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target={
                            link.url.startsWith("http") ? "_blank" : "_self"
                          }
                          rel={
                            link.url.startsWith("http")
                              ? "noopener noreferrer"
                              : ""
                          }
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/10 to-red-600/10 hover:from-blue-600/20 hover:to-red-600/20 text-blue-600 dark:text-blue-400 rounded-lg transition-colors"
                        >
                          {link.label}
                          {link.url.startsWith("http") && (
                            <ExternalLink className="ml-2 h-4 w-4" />
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="md:col-span-1"
              >
                <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-800 dark:to-blue-900/10 rounded-lg p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Press Contact
                  </h3>

                  {press.contact && (
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {press.contact.name}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {press.contact.title}
                        </p>
                      </div>

                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                        <a
                          href={`mailto:${press.contact.email}`}
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {press.contact.email}
                        </a>
                      </div>

                      {press.contact.phone && (
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                          <a
                            href={`tel:${press.contact.phone}`}
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            {press.contact.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Share Section */}
                  <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Share2 className="mr-2 h-5 w-5" />
                      Share this release
                    </h4>
                    <div className="flex space-x-4">
                      <button className="p-2 rounded-full bg-gradient-to-r from-blue-600/20 to-red-600/20 hover:from-blue-600/30 hover:to-red-600/30 text-blue-600 dark:text-blue-400 transition-colors">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Share on Twitter</span>
                      </button>
                      <button className="p-2 rounded-full bg-gradient-to-r from-blue-600/20 to-red-600/20 hover:from-blue-600/30 hover:to-red-600/30 text-blue-600 dark:text-blue-400 transition-colors">
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Share on Facebook</span>
                      </button>
                      <button className="p-2 rounded-full bg-gradient-to-r from-blue-600/20 to-red-600/20 hover:from-blue-600/30 hover:to-red-600/30 text-blue-600 dark:text-blue-400 transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">Share on LinkedIn</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
