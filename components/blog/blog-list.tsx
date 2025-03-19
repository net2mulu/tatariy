"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title:
      "From Crawling to Conquering: Why Starting Beats Overthinking in Government Contracting",
    slug: "from-crawling-to-conquering",
    date: "March 06, 2025",
    author: "TATARIY",
    excerpt:
      "At TATARIY, we've seen it too often in government contracting: businesses—especially emerging ones like us—stall out, overanalyzing bids, fearing rejection, or waiting for the \"perfect\" solicitation. We're here to flip that.",
    image: "/rahwa2.jpg",
  },
  // More blog posts can be added here in the future
];

export function BlogList() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid gap-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="relative h-72 md:h-full rounded-lg overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>•</span>
                  <span>By {post.author}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>
                <Link
                  href={`/news/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
