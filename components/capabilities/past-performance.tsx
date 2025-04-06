"use client";

import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const clients = [
  { name: "Department of Defense", logo: "/logo/dod.png" },
  { name: "U.S. Army", logo: "/logo/us-army.png" },
  { name: "U.S. Air Force", logo: "/logo/us-air-force.png" },
  { name: "DC Public Libraries", logo: "/logo/dc-liabrary.png" },
  { name: "Department of State", logo: "/logo/dos.png" },
  { name: "African Union", logo: "/logo/african_union.png" },
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
    <section className="py-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 scroll-mt-16">
      <div className="container mx-auto px-4 max-w-9xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-2"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Agencies we&apos;ve serverd
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
                    width={130}
                    height={90}
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
