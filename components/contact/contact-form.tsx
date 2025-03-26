"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ContactForm() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    newsletter: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const subjectOptions = [
    "General Inquiry",
    "Partnership Opportunity",
    "Service Information",
    "Career Information",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setFormState((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormState((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubjectSelect = (subject: string) => {
    setFormState((prev) => ({ ...prev, subject }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      newsletter: false,
    });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        CONTACT US
      </h2>

      {isSubmitted ? (
        <div className="bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-4 rounded-lg mb-6">
          Thank you for your message! We&apos;ll get back to you shortly.
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name <span className="text-gray-500">(required)</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm text-red-600 dark:text-red-400 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm text-red-600 dark:text-red-400 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Email <span className="text-gray-500">(required)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            checked={formState.newsletter}
            onChange={handleChange}
            className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
          />
          <label
            htmlFor="newsletter"
            className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
          >
            Sign up for news and updates
          </label>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Subject
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-left text-gray-700 dark:text-gray-300 flex justify-between items-center"
            >
              {formState.subject || "Select an option"}
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </button>

            {isDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
                <ul className="py-1">
                  {subjectOptions.map((option) => (
                    <li
                      key={option}
                      onClick={() => handleSubjectSelect(option)}
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-700 dark:text-gray-300"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Message <span className="text-gray-500">(required)</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-all duration-300 disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
