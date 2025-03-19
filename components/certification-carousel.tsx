"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const certifications = [
  { id: 1, path: "/cirtificates/SBA.jpg", alt: "SBA Certification" },
  { id: 2, path: "/cirtificates/SBA2.jpg", alt: "WOSB Certification" },
  { id: 3, path: "/cirtificates/SWAM_LOGO.jpg", alt: "EDWOSB Certification" },
  { id: 4, path: "/cirtificates/MWAA.jpg", alt: "DBE Certification" },
  { id: 5, path: "/cirtificates/DBE.png", alt: "WBE Certification" },
  { id: 6, path: "/cirtificates/MWBE.png", alt: "SBE Certification" },
  { id: 7, path: "/cirtificates/SBE-Logo.png", alt: "MBE Certification" },
  { id: 8, path: "/cirtificates/MBE.png", alt: "LDBE Certification" },
];

export default function CertificationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="flex items-center justify-center h-40 relative">
        <AnimatePresence initial={false}>
          {[...Array(itemsPerPage)].map((_, offset) => {
            const index = (currentIndex + offset) % certifications.length;
            return (
              <motion.div
                key={certifications[index].id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-1/4 px-2"
                style={{
                  left: `${offset * 25}%`,
                }}
              >
                <div className="relative w-full h-32">
                  <Image
                    src={certifications[index].path}
                    alt={certifications[index].alt}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
