"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Briefcase, MapPin, DollarSign } from "lucide-react";
import Link from "next/link";
import { jobs } from "@/lib/jobs";

export default function JobOpenings() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="job-openings" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Current Job Openings
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {job.title}
              </h3>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                <Briefcase className="w-4 h-4 mr-2" />
                {job.department}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                {job.location}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                <DollarSign className="w-4 h-4 mr-2" />
                {job.salary}
              </div>
              <Link href={`/careers/${job.id}`} className="block w-full">
                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300">
                  View Details
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
