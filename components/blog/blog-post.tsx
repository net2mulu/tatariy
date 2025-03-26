"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Share2, Twitter, Facebook, Linkedin } from "lucide-react";

interface Post {
  title: string;
  date: string;
  author: string;
  image?: string;
  content: { type: string; text: string }[];
}

export function BlogPost({ post }: { post: Post }) {
  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 max-w-9xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Link
              href="/news/blog"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400 space-x-4 mb-8">
              <time dateTime={post.date}>{post.date}</time>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="relative h-[400px] md:h-[900px] w-[50vw] mx-auto">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              {post.content.map((block, index) => {
                if (block.type === "paragraph") {
                  return (
                    <p
                      key={index}
                      className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      {block.text}
                    </p>
                  );
                }
                return null;
              })}
            </motion.div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Share2 className="mr-2 h-5 w-5" />
                Share this article
              </h3>
              <div className="flex space-x-4">
                <button className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Share on Twitter</span>
                </button>
                <button className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Share on Facebook</span>
                </button>
                <button className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">Share on LinkedIn</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
