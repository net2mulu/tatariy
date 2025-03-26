"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-900 dark:to-gray-800" />

      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-500/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-9xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About TATARIY
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            TATARIY is a premier Small Disadvantaged and Minority Women-Owned
            Government Contracting Services Company committed to excellence and
            innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 max-w-9xl mx-auto"
        >
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              TATARIY LLC, headquartered in Lake Ridge, Virginia, is a
              government contracting firm built on a singular principle: TATARIY
              means DOER, and we are one. We deliver efficient, innovative
              solutions in Information Technology (IT), Program Management,
              Talent Acquisition, and Training, empowering state and federal
              agencies to thrive in today’s AI-driven world. Our people-centered
              approach ensures government operations are streamlined, costs are
              reduced, and results are transformative.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We tackle challenges head-on with IT solutions that optimize
              workflows through custom software, system integration, and
              technical support. Our Program Management delivers projects with
              precision, ensuring measurable success from start to finish.
              Talent Acquisition connects agencies with top professionals in AI,
              cybersecurity, and advanced IT roles, recognizing potential and
              building teams that excel. Our Training programs foster
              collaboration and adaptability, equipping workforces for the
              future.
            </p>{" "}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              At TATARIY, efficiency is our hallmark. Our commitment is simple:
              delivering results that speak for themselves. For our clients,
              this means achieving measurable success and building trust. For
              our partners, we ensure excellence that makes them stand out and
              grow organically. In the end, we want those we serve to walk away
              saying, “TATARIY brings the experience I trust and the expertise I
              need.” We engage stakeholders with alignment, develop teams
              through tailored mentoring, manage change with empathy, and get
              the job done with integrity—because at TATARIY, we don’t just
              promise, we do.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
