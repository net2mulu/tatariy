"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const performances = [
  {
    title: "IT Automation & Technical Support Services",
    description:
      "Led end-to-end IT services (remote operations, systems administration, security, hardware & software configuration management) for RNEC-NCR and supporting agencies delivering C4IM.",
  },
  {
    title: "Diplomatic Mission Security",
    description:
      "Enhanced security for 285 U.S. missions by managing sensitive information, collaborating with stakeholders, and conducting thorough budgetary analysis.",
  },
  {
    title: "Budget Management",
    description:
      "Successfully managed portfolios totaling over $500M, ensuring traceability, precise allocation, effective risk mitigation, and significant cost savings.",
  },
  {
    title: "Onboarding & Training",
    description:
      "Developed and implemented robust onboarding and training programs, ensuring compliance, security and success in federal agencies.",
  },
];

const clients = [
  { name: "Department of Defense", logo: "/logo/dod.png" },
  // { name: "Department of State", logo: "/logo/dos.png" },
  { name: "Federal Aviation Administration", logo: "/logo/faa.svg" },
  { name: "Department of Veterans Affairs", logo: "/logo/dva.svg" },
];

export default function PastPerformance() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 scroll-mt-16">
      <div className="container mx-auto px-4 max-w-9xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Past Performance
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {performances.map((performance, index) => (
            <motion.div
              key={performance.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {performance.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {performance.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Our leadership team has successfully delivered projects for:
          </h3>
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index} className="px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center justify-center h-48"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={150}
                    height={100}
                    className="mb-4 object-contain"
                  />
                  <p className="font-medium text-gray-900 dark:text-white text-center">
                    {client.name}
                  </p>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}
