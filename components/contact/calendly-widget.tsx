"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { InlineWidget } from "react-calendly";

export function CalendlyWidget() {
  const [mounted, setMounted] = useState(false);

  // Only render the widget on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      id="calendly"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-5xl mx-auto"
    >
      <div className="flex items-center mb-6 justify-center">
        <Calendar className="h-6 w-6 text-red-600 dark:text-red-400 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Schedule a Consultation
        </h2>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-6 text-center max-w-2xl mx-auto">
        Choose a convenient time for a 30-minute consultation with our team.
        We&apos;ll discuss your needs and how TATARIY can help you achieve your
        goals.
      </p>

      {mounted && (
        <div className="calendly-inline-widget h-[650px] rounded-lg overflow-hidden">
          <InlineWidget
            url="https://calendly.com/nati2mulugeta"
            styles={{
              height: "650px",
              width: "100%",
            }}
          />
        </div>
      )}
    </motion.div>
  );
}
