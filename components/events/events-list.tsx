"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";

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
      "Join government and industry leaders for a day of insights and discussions on the latest trends and strategies in federal IT modernization. Learn about cloud migration, cybersecurity, and AI implementation in government agencies.",
    image: "/placeholder.svg?height=600&width=800",
    registrationLink: "https://example.com/register",
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
      "This webinar is designed to help small businesses understand the government contracting landscape. Our experts will share insights on certification processes, finding opportunities, and developing winning proposals.",
    image: "/placeholder.svg?height=600&width=800",
    registrationLink: "https://example.com/register",
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
      "A hands-on workshop focused on helping contractors meet CMMC 2.0 requirements. Participants will learn about assessment processes, documentation requirements, and practical implementation strategies.",
    image: "/placeholder.svg?height=600&width=800",
    registrationLink: "https://example.com/register",
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
      "This forum brings together women leaders in government technology to share experiences, insights, and strategies for success. Networking opportunities, panel discussions, and keynote speeches from prominent industry figures.",
    image: "/placeholder.svg?height=600&width=800",
    registrationLink: "https://example.com/register",
  },
];

export function EventsList() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid gap-12">
          {events.map((event, index) => (
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

                <p className="text-gray-600 dark:text-gray-300">
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
