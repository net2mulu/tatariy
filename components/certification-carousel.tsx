"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useMobileDetector } from "@/hooks/use-mobile-detector";

const certifications = [
  {
    id: 1,
    path: "/cirtificates/wosb.png",
    alt: "WOSB Certification",
    description: "Women-Owned Small Business (WOSB) Certification",
  },
  {
    id: 2,
    path: "/cirtificates/edwosb.png",
    alt: "EDWOSB Certification",
    description:
      "Economically Disadvantaged Women-Owned Small Business (EDWOSB) Certification",
  },
  {
    id: 3,
    path: "/cirtificates/SWAM_LOGO.jpg",
    alt: "SWaM Certification",
    description:
      "Small, Women-owned, and Minority-owned Business (SWaM) Certification",
  },
  {
    id: 4,
    path: "/cirtificates/MWAA.jpg",
    alt: "MWAA Certification",
    description:
      "Metropolitan Washington Airports Authority (MWAA) Certification",
  },
  {
    id: 5,
    path: "/cirtificates/DBE.png",
    alt: "DBE Certification",
    description: "Disadvantaged Business Enterprise (DBE) Certification",
  },
  {
    id: 6,
    path: "/cirtificates/MWBE.png",
    alt: "MWBE Certification",
    description:
      "Minority and Women-owned Business Enterprise (MWBE) Certification",
  },
  {
    id: 7,
    path: "/cirtificates/SBE-Logo.png",
    alt: "SBE Certification",
    description: "Small Business Enterprise (SBE) Certification",
  },
  {
    id: 8,
    path: "/cirtificates/MBE.png",
    alt: "MBE Certification",
    description: "Minority Business Enterprise (MBE) Certification",
  },
];

export default function CertificationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState<
    null | (typeof certifications)[0]
  >(null);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const isMobile = useMobileDetector();
  const itemsPerPage = isMobile ? 1 : 4;
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Handle auto-rotation
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
      }, 3000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  // Pause rotation when modal is open
  useEffect(() => {
    if (selectedCert) {
      setIsPaused(true);
    } else {
      setIsPaused(false);
    }
  }, [selectedCert]);

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + certifications.length) % certifications.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  const handleCertClick = (cert: (typeof certifications)[0]) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }

    // Reset values
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="w-full">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="relative py-8 px-2 md:py-10 md:px-4 bg-gradient-to-r from-blue-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-md"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Arrows - Larger on mobile for easier touch */}
        <button
          onClick={handlePrevious}
          className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-2 md:p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors touch-manipulation"
          aria-label="Previous certification"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-700 dark:text-gray-200" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-2 md:p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors touch-manipulation"
          aria-label="Next certification"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-700 dark:text-gray-200" />
        </button>

        {/* Carousel Items */}
        <div className="flex items-center justify-center h-36 md:h-48 relative mx-10 md:mx-12">
          <AnimatePresence initial={false}>
            {[...Array(itemsPerPage)].map((_, offset) => {
              const index = (currentIndex + offset) % certifications.length;
              const cert = certifications[index];
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`absolute ${
                    isMobile ? "w-full px-8" : "w-1/4 px-4"
                  }`}
                  style={{
                    left: isMobile ? "0%" : `${offset * 25}%`,
                  }}
                >
                  <div
                    className="relative w-full h-28 md:h-36 bg-white dark:bg-gray-800 p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:scale-105 active:scale-95"
                    onClick={() => handleCertClick(cert)}
                  >
                    <Image
                      src={cert.path || "/placeholder.svg"}
                      alt={cert.alt}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Indicator Dots - Larger on mobile for easier touch */}
        <div className="flex justify-center mt-4 md:mt-6 space-x-2 md:space-x-2">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 w-2.5 md:h-2 md:w-2 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-blue-600 dark:bg-blue-400"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to certification ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal for Enlarged View - Optimized for mobile */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 max-w-sm md:max-w-2xl w-full max-h-[90vh] overflow-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 md:top-4 md:right-4 bg-gray-100 dark:bg-gray-700 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              </button>

              <div className="relative h-48 md:h-64 w-full mb-4 md:mb-6">
                <Image
                  src={selectedCert.path || "/placeholder.svg"}
                  alt={selectedCert.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedCert.alt}
              </h3>

              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                {selectedCert.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
