"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Briefcase, MapPin, DollarSign, Clock } from "lucide-react";
import { jobs } from "@/lib/jobs";
import ReactMarkdown from "react-markdown";

export default function JobDetails() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {job.title}
          </h1>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Briefcase className="w-5 h-5 mr-2" />
                {job.department}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 mr-2" />
                {job.location}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <DollarSign className="w-5 h-5 mr-2" />
                {job.salary}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Clock className="w-5 h-5 mr-2" />
                {job.type}
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown>{job.content}</ReactMarkdown>
            </div>

            <div className="mt-8">
              <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-lg font-semibold">
                Apply Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
