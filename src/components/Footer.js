"use client";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">
              Mallikarjuna FinCorp
            </h3>
            <p className="text-sm sm:text-base">
              We Stand By You. Your trusted financial partner for all your
              financial needs.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">
              Contact
            </h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a
                  href="tel:8008036253"
                  className="hover:text-white transition-colors"
                >
                  +91 8008036253
                </a>
              </li>
              <li>
                <a
                  href="mailto:mallikarjunafincorp@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  mallikarjunafincorp@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-sm sm:text-base">
          <p>
            © {new Date().getFullYear()} Mallikarjuna FinCorp. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
