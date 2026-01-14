"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Small delay to ensure elements are mounted
    const timer = setTimeout(() => {
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
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Check if scrolled past threshold
          setIsScrolled(currentScrollY > 50);

          // Only hide/show on desktop (not mobile)
          if (window.innerWidth >= 768) {
            // Scrolling down - hide header
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
              setIsHeaderVisible(false);
            }
            // Scrolling up - show header
            else if (currentScrollY < lastScrollY.current) {
              setIsHeaderVisible(true);
            }
            // At top of page - always show
            if (currentScrollY < 10) {
              setIsHeaderVisible(true);
            }
          } else {
            // Always show on mobile
            setIsHeaderVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
      style={{
        transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
      }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-lg shadow-lg border-b border-gray-100 transition-all duration-300 ease-in-out ${
        isScrolled ? "py-2 shadow-xl" : "py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo - Left */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-2"
            >
              {/* Logo */}
              <div className="relative h-12 w-12 sm:h-16 sm:w-16 rounded-full overflow-hidden bg-white">
                <Image
                  src="/logo.png"
                  alt="Mallikarjuna FinCorp logo"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 48px, 64px"
                />
              </div>
              {/* Brand text */}
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
                Mallikarjuna FinCorp
              </span>
            </button>
          </div>

          {/* Menu and Connect Button - Right */}
          <div className="flex items-center gap-6 lg:gap-8">
            {/* Menu */}
            <div
              ref={navRef}
              className="hidden lg:flex items-center space-x-6 xl:space-x-8"
            >
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium relative group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all group-hover:w-full"></span>
              </button>

              {/* Services with Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 hover:text-blue-900 transition-colors font-medium relative"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all group-hover:w-full"></span>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <button
                      onClick={() => scrollToSection("chit-funds")}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors font-medium"
                    >
                      Chit Funds
                    </button>
                    <button
                      onClick={() => scrollToSection("money-transfers")}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors font-medium"
                    >
                      Money Transfers
                    </button>
                    <button
                      onClick={() => scrollToSection("investments")}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors font-medium"
                    >
                      Investments
                    </button>
                    <button
                      onClick={() => scrollToSection("loans")}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors font-medium"
                    >
                      Loans
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all group-hover:w-full"></span>
              </button>
            </div>

            {/* Connect Button */}
            <a
              href="https://wa.me/918008036253?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Mallikarjuna%20Fincorp%20services.%20Please%20share%20more%20information."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Connect</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-blue-900 font-medium p-2"
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
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium text-left"
              >
                About Us
              </button>
              <div className="flex flex-col">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 hover:text-blue-900 transition-colors font-medium text-left"
                >
                  Services
                </button>
                <div className="ml-4 mt-2 space-y-2 flex flex-col">
                  <button
                    onClick={() => scrollToSection("chit-funds")}
                    className="text-sm text-gray-600 hover:text-blue-900 transition-colors text-left"
                  >
                    • Chit Funds
                  </button>
                  <button
                    onClick={() => scrollToSection("money-transfers")}
                    className="text-sm text-gray-600 hover:text-blue-900 transition-colors text-left"
                  >
                    • Money Transfers
                  </button>
                  <button
                    onClick={() => scrollToSection("investments")}
                    className="text-sm text-gray-600 hover:text-blue-900 transition-colors text-left"
                  >
                    • Investments
                  </button>
                  <button
                    onClick={() => scrollToSection("loans")}
                    className="text-sm text-gray-600 hover:text-blue-900 transition-colors text-left"
                  >
                    • Loans
                  </button>
                </div>
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium text-left"
              >
                Contact
              </button>
              {/* Mobile WhatsApp Button */}
              <a
                href="https://wa.me/918008036253?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Mallikarjuna%20Fincorp%20services.%20Please%20share%20more%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
