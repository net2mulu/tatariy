"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowLeft,
  Share2,
  Twitter,
  Facebook,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import type { Event } from "@/data/event-detail";

type EventDetailProps = {
  event: Event;
};

export function EventDetail({ event }: EventDetailProps) {
  return (
    <article className="min-h-screen">
      {/* Hero Section with Refined Back Link Positioning */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Navigation Bar - Separate from main content */}
          <div className="mb-12">
            <Link
              href="/news/events"
              className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full mb-4">
              {event.type}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {event.title}
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center text-sm text-gray-600 dark:text-gray-400 space-y-2 md:space-y-0 md:space-x-6 mb-8">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-red-600 dark:text-red-400" />
                <time dateTime={event.date}>{event.date}</time>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-red-600 dark:text-red-400" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-red-600 dark:text-red-400" />
                <span>{event.location}</span>
              </div>
            </div>
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
            >
              Register Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Content Section with Integrated Image */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content with Integrated Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:col-span-2"
              >
                {/* Integrated Event Image */}
                <div className="mb-8">
                  <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Event Description */}
                <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                  <div
                    dangerouslySetInnerHTML={{ __html: event.fullDescription }}
                  />
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="md:col-span-1"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Event Details
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Date & Time
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        {event.date}
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        {event.time}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Location
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        {event.location}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {event.address}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Organizer
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        {event.organizer}
                      </p>
                    </div>
                  </div>

                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors mb-4"
                  >
                    Register Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>

                  {/* Share Section */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Share2 className="mr-2 h-5 w-5" />
                      Share this event
                    </h4>
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
