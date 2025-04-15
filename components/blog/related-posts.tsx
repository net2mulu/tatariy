"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// This is a placeholder for future blog posts
const relatedPosts = [
  {
    title: "5 Essential Strategies for Small Business Set-Asides",
    slug: "5-essential-strategies-for-small-business-set-asides",
    date: "February 24, 2025",
    excerpt:
      "Navigating the world of government contracting can be challenging for small businesses, especially with the competitive nature of federal and state procurement processes. One significant opportunity available to small businesses is set-aside contracts, which are designed to level the playing field by reserving specific contracts exclusively for small businesses.",
    image: "/art1.png",
  },
  {
    title:
      "Understanding the FAR (Federal Acquisition Regulation) for Cybersecurity Contracts",
    slug: "understanding-the-far-federal-acquisition-regulation-for-cybersecurity-contracts",
    date: "October 28, 2024",
    excerpt:
      "As cyber threats continue to rise, the federal government places increasing importance on cybersecurity in its contracts. To ensure transparency, fairness, and, most importantly, security, contractors working with federal agencies must adhere to the Federal Acquisition Regulation (FAR).",
    image: "/art2.png",
  },
];

export function RelatedPosts() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-9xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Related Articles
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {relatedPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-48">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/news/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
