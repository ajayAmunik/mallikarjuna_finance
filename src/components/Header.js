"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    // Ensure header is visible, then animate
    if (headerRef.current) {
      gsap.set(headerRef.current, { opacity: 1, y: 0 });
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    }

    if (navRef.current) {
      const children = Array.from(navRef.current.children);
      children.forEach((child, index) => {
        gsap.set(child, { opacity: 1, y: 0 });
        gsap.from(child, {
          opacity: 0,
          y: -10,
          duration: 0.4,
          delay: 0.2 + index * 0.1,
          ease: "power2.out",
        });
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 ${
        isScrolled ? "py-3 shadow-lg" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl sm:text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors"
            >
              Mallikarjuna FinCorp
            </button>
          </div>
          <div ref={navRef} className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-900 transition-colors font-medium relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-900 transition-colors font-medium relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-900 transition-colors font-medium relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all group-hover:w-full"></span>
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-blue-900 font-medium p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
