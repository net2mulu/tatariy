"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ApplicationForm } from "./application-form";

const jobs = [
  {
    title: "Senior IT Project Manager",
    location: "Washington, DC",
    type: "Full-time",
    description:
      "Lead and manage complex IT projects for government clients, ensuring on-time and on-budget delivery.",
    slug: "senior-it-project-manager",
  },
  {
    title: "Cybersecurity Analyst",
    location: "Remote",
    type: "Full-time",
    description:
      "Protect government systems and data by implementing and monitoring security measures.",
    slug: "cybersecurity-analyst",
  },
  {
    title: "Software Developer",
    location: "Arlington, VA",
    type: "Full-time",
    description:
      "Develop and maintain applications for government agencies using modern technologies.",
    slug: "software-developer",
  },
  {
    title: "Business Analyst",
    location: "Washington, DC",
    type: "Full-time",
    description:
      "Analyze business processes and requirements to help government agencies improve their operations.",
    slug: "business-analyst",
  },
];

export function JobOpenings() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>("");

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsFormOpen(true);
  };

  return (
    <section id="job-openings" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xl font-bold text-red-500 ">
            Doers Wanted. Purpose Delivered.
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Current Openings
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto" />
        </motion.div>

        <div className="grid gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                      {job.location}
                    </span>
                    <span className="text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    {job.description}
                  </p>
                </div>
                <button
                  onClick={() => handleApply(job.title)}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Application Form Modal */}
      <ApplicationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        jobTitle={selectedJob}
      />
    </section>
  );
}
