"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-9xl mx-auto"
    >
      {mounted && (
        <div className="calendly-inline-widget h-[650px] rounded-lg overflow-hidden">
          <InlineWidget
            url="https://calendly.com/rahwa-haile-tatariy"
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
