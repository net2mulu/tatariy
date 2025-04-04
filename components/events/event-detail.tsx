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
  User,
} from "lucide-react";

type Speaker = {
  name: string;
  title: string;
  bio: string;
};

type AgendaItem = {
  time: string;
  title: string;
  speaker?: string;
};

type EventDetailProps = {
  event: {
    id: number;
    title: string;
    slug: string;
    date: string;
    time: string;
    location: string;
    address: string;
    type: string;
    description: string;
    fullDescription: string;
    image: string;
    registrationLink: string;
    organizer: string;
    speakers?: Speaker[];
    agenda?: AgendaItem[];
  };
};

export function EventDetail({ event }: EventDetailProps) {
  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Link
              href="/news/events"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Link>
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

      {/* Featured Image */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
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
                <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                  <div
                    dangerouslySetInnerHTML={{ __html: event.fullDescription }}
                  />
                </div>

                {/* Speakers Section */}
                {event.speakers && event.speakers.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Featured Speakers
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {event.speakers.map((speaker, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
                        >
                          <div className="flex items-start gap-4">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                              <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {speaker.name}
                              </h3>
                              <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                                {speaker.title}
                              </p>
                              <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {speaker.bio}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Agenda Section */}
                {event.agenda && event.agenda.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Event Agenda
                    </h2>
                    <div className="space-y-4">
                      {event.agenda.map((item, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 py-2"
                        >
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {item.time}
                          </p>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {item.title}
                          </h3>
                          {item.speaker && (
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                              Presenter: {item.speaker}
                            </p>
                          )}
                        </div>
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
