"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

// Mock data for events
const events = [
  {
    id: 1,
    title: "Federal IT Modernization Summit",
    slug: "federal-it-modernization-summit",
    date: "June 15, 2025",
    time: "9:00 AM - 4:00 PM EST",
    location: "Washington Convention Center, Washington DC",
    type: "Conference",
    description:
      "Join government and industry leaders for a day of insights and discussions on the latest trends and strategies in federal IT modernization.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Navigating Government Contracting: A Webinar for Small Businesses",
    slug: "navigating-government-contracting-webinar",
    date: "May 20, 2025",
    time: "1:00 PM - 2:30 PM EST",
    location: "Virtual Event",
    type: "Webinar",
    description:
      "This webinar is designed to help small businesses understand the government contracting landscape.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Cybersecurity Compliance Workshop",
    slug: "cybersecurity-compliance-workshop",
    date: "July 8, 2025",
    time: "10:00 AM - 3:00 PM EST",
    location: "Tysons Corner Marriott, Virginia",
    type: "Workshop",
    description:
      "A hands-on workshop focused on helping contractors meet CMMC 2.0 requirements.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Women in Government Technology Leadership Forum",
    slug: "women-in-government-technology-leadership-forum",
    date: "August 12, 2025",
    time: "8:30 AM - 2:00 PM EST",
    location: "National Press Club, Washington DC",
    type: "Forum",
    description:
      "This forum brings together women leaders in government technology to share experiences, insights, and strategies for success.",
    image: "/placeholder.svg?height=400&width=600",
  },
];

export function RelatedEvents({ currentEventId }: { currentEventId: number }) {
  // Filter out the current event and get up to 3 related events
  const relatedEvents = events
    .filter((event) => event.id !== currentEventId)
    .slice(0, 3);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Related Events
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedEvents.map((event, index) => (
            <motion.div
              key={event.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-48">
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
              <div className="p-6">
                <div className="flex flex-col space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="mr-2 h-4 w-4 text-red-600 dark:text-red-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="mr-2 h-4 w-4 text-red-600 dark:text-red-400" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="mr-2 h-4 w-4 text-red-600 dark:text-red-400" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {event.description}
                </p>
                <Link
                  href={`/news/events/${event.slug}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  View Details
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
