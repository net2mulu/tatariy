"use client";

import type React from "react";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function LegalModal({
  isOpen,
  onClose,
  title,
  children,
}: LegalModalProps) {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">{children}</div>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Legal content for Terms and Conditions
export const TermsContent = () => (
  <div className="prose dark:prose-invert max-w-none">
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
      Last Updated: April 09, 2025
    </p>

    <p className="mb-6">
      Welcome to www.tatariy.com, the official website of TATARIY LLC, a
      government contracting company. These Terms of Service (&quot;Terms&quot;)
      govern your use of our website and related services. By accessing or using
      our site, you agree to these Terms. If you do not agree, please refrain
      from using the site.
    </p>

    <h3 className="text-xl font-bold text-dark dark:text-white mt-8 mb-4">
      Use of the Website
    </h3>
    <ul className="list-disc pl-6 mb-6 space-y-2">
      <li>
        <span className="font-semibold">Permitted Use:</span> You may use the
        site to learn about TATARIY&apos;s services, contact us, or engage in
        authorized business activities related to our government contracting
        work.
      </li>
      <li>
        <span className="font-semibold">Prohibited Use:</span> You may not use
        the site for unlawful purposes, to infringe on intellectual property
        rights, to transmit harmful content (e.g., viruses), or to interfere
        with the site&apos;s operation.
      </li>
    </ul>

    <h3 className="text-xl font-bold text-dark dark:text-white mt-8 mb-4">
      Intellectual Property
    </h3>
    <p className="mb-6">
      All content on this site, including text, logos, and designs, is the
      property of TATARIY or its licensors and is protected by U.S. copyright
      and trademark laws. You may not reproduce, distribute, or modify this
      content without our written permission, except as allowed under applicable
      law.
    </p>

    <h3 className="text-xl font-bold text-dark dark:text-white mt-8 mb-4">
      Confidentiality
    </h3>
    <p className="mb-6">
      Information shared through this site related to government contracts or
      business operations may be confidential. You agree not to disclose such
      information without TATARIY&apos;s consent, unless required by law.
    </p>

    <h3 className="text-xl font-bold text-dark dark:text-white mt-8 mb-4">
      Disclaimers
    </h3>
    <ul className="list-disc pl-6 mb-6 space-y-2">
      <li>
        The site is provided &quot;as is&quot; without warranties of any kind,
        express or implied. We do not guarantee uninterrupted access, accuracy
        of content, or freedom from errors.
      </li>
      <li>
        Information on the site does not constitute a contractual offer unless
        explicitly stated.
      </li>
    </ul>

    <h3 className="text-xl font-bold text-dark dark:text-white mt-8 mb-4">
      Limitation of Liability
    </h3>
    <p className="mb-6">
      To the fullest extent permitted by law, TATARIY is not liable for any
      direct, indirect, incidental, or consequential damages arising from your
      use of the site, including but not limited to loss of data, profits, or
      business opportunities.
    </p>

    <h3 className="text-xl font-bold text-dark dark:text-white mt-8 mb-4">
      Third-Party Links
    </h3>
    <p className="mb-6">
      Our site may contain links to external websites. We are not responsible
      for the content, accuracy, or practices of these third-party sites.
    </p>

    <h3 className="text-xl font-bold text-dark dark:text-white mt-8 mb-4">
      Governing Law
    </h3>
    <p className="mb-6">
      These Terms are governed by the laws of the United States and the
      Commonwealth of Virginia, without regard to conflict of law principles.
      Disputes arising from these Terms will be resolved in the courts of
      Virginia, unless otherwise required by federal contract terms.
    </p>

    <h3 className="text-xl font-bold text-dark dark:text-white mt-8 mb-4">
      Changes to These Terms
    </h3>
    <p className="mb-6">
      We may update these Terms from time to time. The most current version will
      be posted on this page with the updated &quot;Last Updated&quot; date.
    </p>

    <h3 className="text-xl font-bold text-dark dark:text-white mt-8 mb-4">
      Contact Us
    </h3>
    <p className="mb-6">
      For questions about these Terms, please contact:
      <br />
      <span className="font-semibold">Email:</span> founders@tatariy.com
      <br />
      <span className="font-semibold">Phone:</span> (202) 250-4252
    </p>
  </div>
);

// Legal content for Privacy Policy
export const PrivacyContent = () => (
  <div className="prose dark:prose-invert max-w-none">
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
      Last Updated: April 09, 2025
    </p>

    <p className="mb-6">
      Your trust matters to us. At TATARIY, we are committed to protecting your
      privacy and security. As a government contracting company, we adhere to
      strict standards to safeguard the data we collect, use, and maintain
      during our operations. This Privacy Policy explains how we handle
      information collected through our website (www.tatariy.com) and related
      services.
    </p>

    <h3 className="text-xl font-bold text-dark dark:text-white mt-8 mb-4">
      Information We Collect
    </h3>
    <p className="mb-4">We may collect the following types of information:</p>
    <ul className="list-disc pl-6 mb-6 space-y-2">
      <li>
        <span className="font-semibold">Personal Information:</span> Name, email
        address, phone number, or other details you provide when contacting us
        via our website (e.g., through the contact form or subscription) or
        engaging with our services.
      </li>
      <li>
        <span className="font-semibold">Professional Information:</span> Job
        title, company name, or other business-related data submitted during
        inquiries or contract-related interactions.
      </li>
      <li>
        <span className="font-semibold">Website Usage Data:</span>{" "}
        Non-identifying information such as IP addresses, browser type, and
        pages visited, collected automatically via cookies or similar
        technologies to improve our site&apos;s functionality.
      </li>
    </ul>

    <h3 className="text-xl font-bold text-dark dark:text-white mt-8 mb-4">
      How We Use Your Information
    </h3>
    <p className="mb-4">We use your information to:</p>
    <ul className="list-disc pl-6 mb-6 space-y-2">
      <li>Respond to inquiries and provide customer support.</li>
      <li>
        Facilitate government contracting services, including project
        coordination and communication with clients or partners.
      </li>
      <li>
        Send newsletters or updates if you subscribe (you may unsubscribe from
        communications at any time by clicking the link in our emails).
      </li>
      <li>
        Comply with legal obligations, such as federal regulations or
        contractual requirements.
      </li>
      <li>Enhance our website&apos;s performance and user experience.</li>
    </ul>

    <h3 className="text-xl font-bold text-dark dark:text-white mt-8 mb-4">
      How We Protect Your Information
    </h3>
    <p className="mb-6">
      We implement industry-standard security measures to protect your data,
      including encryption, access controls, and secure storage practices. As a
      government contractor, we align our practices with applicable federal
      guidelines, such as those outlined in the Privacy Act of 1974 and NIST
      security standards, where required.
    </p>

    <h3 className="text-xl font-bold text-dark dark:text-white mt-8 mb-4">
      Sharing Your Information
    </h3>
    <p className="mb-4">
      We do not sell or rent your personal information. We may share your data:
    </p>
    <ul className="list-disc pl-6 mb-6 space-y-2">
      <li>
        With government agencies, clients, or partners as necessary to fulfill
        contractual obligations.
      </li>
      <li>
        With service providers (e.g., web hosting or IT support) who assist our
        operations, under strict confidentiality agreements.
      </li>
      <li>
        When required by law or to protect TATARIY&apos;s rights and safety.
      </li>
    </ul>

    <h3 className="text-xl font-bold text-dark dark:text-white mt-8 mb-4">
      Your Choices
    </h3>
    <p className="mb-6">
      You may contact us to request access to or correction of your personal
      information. Note that certain data may be retained as required by law or
      contract. You may unsubscribe from communications at any time by clicking
      the link in our emails.
    </p>

    <h3 className="text-xl font-bold text-dark dark:text-white mt-8 mb-4">
      Cookies and Tracking
    </h3>
    <p className="mb-6">
      We use cookies to optimize your experience on our site. By continuing to
      browse our site, you consent to our use of cookies in accordance with this
      policy. You can manage cookie preferences through your browser settings.
    </p>

    <h3 className="text-xl font-bold text-dark dark:text-white mt-8 mb-4">
      Contact Us
    </h3>
    <p className="mb-6">
      For questions about this Privacy Policy or our data practices, please
      reach out to us at:
      <br />
      <span className="font-semibold">Email:</span> founders@tatariy.com
      <br />
      <span className="font-semibold">Phone:</span> 202-250-4252
    </p>

    <p>
      We may update this policy periodically. Please check this page for the
      latest version.
    </p>
  </div>
);
