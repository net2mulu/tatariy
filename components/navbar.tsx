"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Information Technology",
    href: "/services/information-technology",
    description:
      "Comprehensive IT solutions and digital transformation services.",
  },
  {
    title: "Program Management",
    href: "/services/program-management",
    description: "Expert program and project management services.",
  },
  {
    title: "Professional Services",
    href: "/services/professional-services",
    description: "Specialized consulting and professional services.",
  },
  {
    title: "Talent Acquisition",
    href: "/services/talent-acquisition",
    description: "Strategic recruitment and staffing solutions.",
  },
  {
    title: "Training",
    href: "/services/training",
    description: "Comprehensive training and development programs.",
  },
];

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(isMobile);
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setShowServicesMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  if (!mounted) return null;

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={
                  resolvedTheme === "dark"
                    ? "/hero/logo-white.png"
                    : "/hero/logo.png"
                } // Use different logos
                alt="TATARIY logo"
                width={200}
                height={100}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/capabilities">Capabilities</NavLink>

            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setShowServicesMenu(!showServicesMenu)}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {showServicesMenu && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-md">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition ease-in-out duration-150"
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-white">
                              {service.title}
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink href="/careers">Careers</NavLink>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="lg:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-lg">
            <div className="px-4 py-2">
              <NavLink href="/about">About</NavLink>
            </div>
            <div className="px-4 py-2">
              <NavLink href="/capabilities">Capabilities</NavLink>
            </div>

            {/* Mobile Services Dropdown */}
            <div className="px-4 py-2">
              <button
                onClick={() => setShowServicesMenu(!showServicesMenu)}
                className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showServicesMenu ? "rotate-180" : ""
                  }`}
                />
              </button>
              {showServicesMenu && (
                <div className="pl-4 mt-2 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block py-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 py-2">
              <NavLink href="/careers">Careers</NavLink>
            </div>

            {/* Mobile Theme Toggle */}
            <div className="px-4 py-2">
              <button
                onClick={toggleTheme}
                className="flex items-center w-full p-2 rounded-md text-gray-800 dark:text-gray-200"
              >
                {resolvedTheme === "dark" ? (
                  <>
                    <Sun className="h-5 w-5 mr-2" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 mr-2" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
