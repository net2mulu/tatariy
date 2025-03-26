import Link from "next/link";
import {
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import Newsletter from "./newsletter";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-9xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/hero/logo.png"
                alt="TATARIY logo"
                width={150}
                height={75}
                className="dark:invert"
              />
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Empowering government agencies with cutting-edge technology
              solutions and proven expertise in digital transformation.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <LinkedIn size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Instagram size={20} />
              </a>
            </div>
            <div className="py-6">
              <Newsletter />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Address
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>123 Tech Avenue</li>
              <li>Washington, D.C. 20001</li>
              <li>Phone: (202) 555-0123</li>
              <li>Email: info@tatariy.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2023 TATARIY. All rights reserved.
            </p>

            <div className="mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 mr-4"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
