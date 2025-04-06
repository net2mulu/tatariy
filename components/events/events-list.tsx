"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { eventsData } from "@/data/event-detail";

export function EventsList() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid gap-12">
          {eventsData.map((event, index) => (
            <motion.article
              key={event.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">
                    {event.type}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {event.title}
                </h2>

                <div className="flex flex-col space-y-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="mr-2 h-5 w-5 text-red-600 dark:text-red-400" />
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Clock className="mr-2 h-5 w-5 text-red-600 dark:text-red-400" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin className="mr-2 h-5 w-5 text-red-600 dark:text-red-400" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 line-clamp-4">
                  {event.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link
                    href={`/news/events/${event.slug}`}
                    className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    View Details
                  </Link>

                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 font-medium rounded-lg transition-colors"
                  >
                    Register
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
