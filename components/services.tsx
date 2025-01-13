"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Enterprise IT Solutions",
    description:
      "Transform Your Agency's Infrastructure. Comprehensive Solutions for Modern Government. From Cloud Migration to System Integration.",
    image: "/1.jpeg",
    slug: "enterprise-it-solutions",
  },
  {
    title: "Program Management",
    description:
      "Strategic Excellence in Project Delivery. Expert Guidance from Initiation to Completion. Ensuring Project Success at Every Step.",
    image: "/2.jpeg",
    slug: "program-management",
  },
  {
    title: "Cybersecurity Services",
    description:
      "Protect Your Agency's Digital Assets. Advanced Threat Detection and Prevention. Comprehensive Security Solutions.",
    image: "/3.jpeg",
    slug: "cybersecurity-services",
  },
  {
    title: "Digital Transformation",
    description:
      "Modernize Your Government Services. Citizen-Centric Digital Solutions. Streamlined Processes for Better Service Delivery.",
    image: "/4.jpeg",
    slug: "digital-transformation",
  },
];

const ServiceCard = ({
  title,
  description,
  image,
  slug,
}: {
  title: string;
  description: string;
  image: string;
  slug: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group relative flex flex-col md:flex-row items-start gap-6 p-6 rounded-3xl bg-white border border-gray-200 dark:border-none dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 backdrop-blur-sm"
  >
    <div className="w-full md:w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-700">
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-grow space-y-3">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
        {description}
      </p>
      <Link
        href={`/services/${slug}`}
        className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  </motion.div>
);

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-medium mb-2 block">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
