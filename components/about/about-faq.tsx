"use client";

import type React from "react";

import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What's TATARIY all about?",
    answer:
      "TATARIY means DOER—the force that acts, builds, and delivers. We're all about relentless drive and mission success. At our core, we're the team that makes it happen, no excuses.",
  },
  {
    question: "What sets TATARIY apart?",
    answer:
      "We're not just contractors—we're your mission-critical ally. With 15+ years of federal expertise, and a knack for IT, cybersecurity, and talent solutions, we execute with precision and heart. As a Minority Women-Owned Small Business, we bring fresh perspectives and proven results—think DoD (Army and Airforce) experience. We don't just meet the mark; we redefine it.",
  },
  {
    question: "What services do you deliver?",
    answer:
      "We've got you covered with:\n• IT firepower (end-to-end IT solutions, infrastructure, automation, cybersecurity, AI)\n• Program management that keeps things on track\n• Professional services with impact\n• Talent acquisition for those impossible-to-fill roles\n• Training that levels up your team\nTailored for federal and state missions, we bring efficiency and serious results.",
  },
  {
    question: "Who do you work with?",
    answer:
      "We partner with federal and state agencies, including the Department of Defense and Department of State, to support critical missions like national security and IT modernization. Our collaborations are built on shared goals, ensuring impactful results for every project.",
  },
  {
    question: "Can you handle classified projects?",
    answer: "Yes. Sensitive? Secure? We've got it locked down.",
  },
  {
    question: "Are you a certified small business?",
    answer:
      "Absolutely. We're proud to be:\n• Economically Disadvantaged Woman-Owned Small Business (EDWOSB)\n• Minority Business Enterprise (MBE)\n• Small Business Enterprise (SBE)\n• Minority Women-Owned Business Enterprise (MWBE)\n• Small Local Business Enterprise (SLBE)\n• Disadvantaged Business Enterprise (DBE)\n• SLBE-MWAA certified\nThese creds mean we bring value and diversity to every contract.",
  },
  {
    question: "Do you play well in teaming setups?",
    answer:
      "You bet. Whether we're leading as prime or supporting as a sub, we bring expertise, agility, and reliability to the table. Collaboration's our strength—we make every partnership a win.",
  },
  {
    question: "How does TATARIY turn procurement headaches into mission wins?",
    answer:
      "We know the stakes: tight deadlines, complex requirements, and zero room for error. With over 15 years of federal experience, and a track record of delivering for agencies like DoD, we cut through the noise. We anticipate challenges, streamline execution, and deliver solutions that don't just check boxes—they move your mission forward. Think of us as the partner who's already in the trenches with you, making it work.",
  },
  {
    question: "How do you work with clients?",
    answer:
      "We start by listening—really listening—then craft strategies that nail your goals. Expect agility, clear communication, and accountability. We don't just meet expectations; we crush them.",
  },
  {
    question: "Where are you based?",
    answer:
      "Headquartered in Virginia, with roots in Prince William County and the DMV region, we're positioned to serve clients nationwide.",
  },
  {
    question: "What's your UEI, Cage and DUNS number?",
    answer:
      "Our Unique Entity Identifier (UEI) is HGT2LRCN9QZ1, CAGE is 9SHF3 and DUNS is 071939012",
  },
  {
    question: "How do I get in touch?",
    answer:
      "Hit us up through our website, email us at rahwa.haile@tatariy.com or call 202.250.4252. Tell us your mission—we're ready to make it happen.",
  },
  {
    question: "How does TATARIY ensure quality and compliance?",
    answer:
      "We uphold the highest standards through rigorous quality controls, alignment with federal acquisition regulations, and a team trained to deliver excellence consistently, trained to meet CMMI, ISO, and client-specific standards, mitigate risks, and ensure mission success—every time.",
  },
  {
    question: "What is TATARIY's approach to innovation?",
    answer:
      "We blend proven methodologies with emerging technologies to create forward-thinking, mission-aligned solutions. From automation and data-driven processes to advanced IT program management, we deliver innovation that drives practical and impactful results. We are all about technical innovation with practical people centered solution to thrive into today's AI world.",
  },
  {
    question: "How does TATARIY manage projects to ensure success?",
    answer:
      "We apply proven project management frameworks like PMI's PMBOK, Agile principles, and ITIL v4 service strategies to ensure every project is delivered on time, within scope, and aligned with client goals. Whether waterfall, agile, or hybrid approaches, our certified team is equipped to tailor our project delivery to fit your mission.",
  },
  {
    question: "How does TATARIY stay ahead in a fast-evolving industry?",
    answer:
      "At TATARIY, we are committed to continuous learning and innovation. Our team stays ahead by:\n• Investing in professional development, earning certifications across project management (PMP), agile delivery (CSM, Agile), service management (ITIL v4), cloud technologies (AWS Certified), and financial management.\n• Leveraging emerging technologies, including AI-driven solutions, automation, and data analytics to enhance project delivery and client outcomes.\n• Actively monitoring federal and commercial trends to bring forward-thinking, mission-aligned innovations to every engagement.\n\nWe believe that staying ahead means being adaptable and bold — integrating the latest technologies while staying rooted in the trusted frameworks that ensure operational success.",
  },
];

interface FAQItemProps {
  faq: { question: string; answer: string };
  index: number;
  openIndex: number | null;
  setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

// Function to format the answer text with proper bullet points
const formatAnswer = (text: string) => {
  // Split the text by newlines
  const lines = text.split("\n");
  const formattedContent: JSX.Element[] = [];
  let currentParagraph: string[] = [];
  let inBulletList = false;
  let bulletItems: string[] = [];

  lines.forEach((line, i) => {
    // Check if this line is a bullet point
    if (line.trim().startsWith("•")) {
      // If we were building a paragraph, add it now
      if (currentParagraph.length > 0) {
        formattedContent.push(
          <p key={`p-${i}`} className="mb-3">
            {currentParagraph.join(" ")}
          </p>
        );
        currentParagraph = [];
      }

      // Start or continue a bullet list
      inBulletList = true;
      bulletItems.push(line.trim().substring(1).trim()); // Remove the bullet and trim
    } else {
      // If we were in a bullet list, end it and add it to the content
      if (inBulletList) {
        formattedContent.push(
          <ul key={`ul-${i}`} className="list-disc pl-5 mb-3 space-y-1">
            {bulletItems.map((item, j) => (
              <li key={j} className="text-gray-600 dark:text-gray-300">
                {item}
              </li>
            ))}
          </ul>
        );
        bulletItems = [];
        inBulletList = false;
      }

      // Add to current paragraph or start a new one if line is empty
      if (line.trim() === "") {
        if (currentParagraph.length > 0) {
          formattedContent.push(
            <p key={`p-${i}`} className="mb-3">
              {currentParagraph.join(" ")}
            </p>
          );
          currentParagraph = [];
        }
      } else {
        currentParagraph.push(line);
      }
    }
  });

  // Add any remaining paragraph
  if (currentParagraph.length > 0) {
    formattedContent.push(
      <p key="final-p" className="mb-3">
        {currentParagraph.join(" ")}
      </p>
    );
  }

  // Add any remaining bullet list
  if (bulletItems.length > 0) {
    formattedContent.push(
      <ul key="final-ul" className="list-disc pl-5 mb-3 space-y-1">
        {bulletItems.map((item, j) => (
          <li key={j} className="text-gray-600 dark:text-gray-300">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return formattedContent;
};

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
            <div className="text-gray-600 dark:text-gray-300">
              {formatAnswer(faq.answer)}
            </div>
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
    <section id="faq" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-9xl">
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
