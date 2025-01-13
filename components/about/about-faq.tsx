"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What makes TATARIY unique in government contracting?",
    answer:
      "TATARIY stands out through our combination of extensive experience, diverse expertise, and commitment to excellence. As a Small Disadvantaged and Minority Women-Owned business, we bring unique perspectives and innovative solutions to government contracting.",
  },
  {
    question: "What types of services does TATARIY offer?",
    answer:
      "We offer a comprehensive range of services including Information Technology, Program Management, Professional Services, Talent Acquisition, and Training services. Our team is equipped with various certifications and backgrounds to handle complex government projects.",
  },
  {
    question: "What security clearances does TATARIY hold?",
    answer:
      "Our team has been cleared up to TS/SCI, demonstrating our commitment to handling sensitive government projects with the highest levels of security and trustworthiness.",
  },
  {
    question: "Which federal agencies has TATARIY worked with?",
    answer:
      "We have extensive experience working with major federal agencies including the Department of Defense (US Army & US Air Force), Department of Transportation (FAA), Department of State, and Department of Veterans Affairs.",
  },
  {
    question: "How does TATARIY ensure quality in its services?",
    answer:
      "We maintain rigorous quality standards through our experienced leadership team, comprehensive certifications, and commitment to continuous improvement. Our team stays current with industry best practices and emerging technologies.",
  },
  {
    question: "What is TATARIY's approach to project management?",
    answer:
      "We employ a robust, agile project management methodology that emphasizes clear communication, adaptability, and continuous improvement. Our approach ensures timely delivery, cost-effectiveness, and high-quality outcomes for all our projects.",
  },
];

interface FAQItemProps {
  faq: { question: string; answer: string };
  index: number;
  openIndex: number | null;
  setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const FAQItem = ({ faq, index, openIndex, setOpenIndex }: FAQItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="mb-4"
  >
    <button
      onClick={() => setOpenIndex(openIndex === index ? null : index)}
      className="w-full flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
    >
      <span className="text-lg font-medium text-gray-900 dark:text-white text-left">
        {faq.question}
      </span>
      {openIndex === index ? (
        <Minus className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
      ) : (
        <Plus className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
      )}
    </button>
    <AnimatePresence>
      {openIndex === index && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="p-6 bg-white dark:bg-gray-800 rounded-b-lg border-t border-gray-100 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export default function AboutFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Split faqs into two arrays for two columns
  const leftColumnFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightColumnFaqs = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {leftColumnFaqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
          <div className="space-y-4">
            {rightColumnFaqs.map((faq, index) => (
              <FAQItem
                key={index + leftColumnFaqs.length}
                faq={faq}
                index={index + leftColumnFaqs.length}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
