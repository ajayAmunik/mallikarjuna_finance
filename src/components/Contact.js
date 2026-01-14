"use client";

import { PhoneIcon, MailIcon } from "./Icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          data-aos="fade-up"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 text-center"
        >
          Contact Us
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center text-gray-600 mb-12 text-base sm:text-lg max-w-2xl mx-auto"
        >
          Get in touch with us. We're here to help you achieve your financial
          goals.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Phone Card */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-blue-900 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <PhoneIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                Call Us
              </h3>
              <a
                href="tel:8008036253"
                className="text-2xl sm:text-3xl font-bold text-blue-900 hover:text-blue-700 transition-colors"
              >
                8008036253
              </a>
              <p className="mt-4 text-gray-600 text-sm sm:text-base">
                Available Monday - Saturday, 9 AM - 6 PM
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-blue-900 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <MailIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                Email Us
              </h3>
              <a
                href="mailto:mallikarjunafincorp@gmail.com"
                className="text-base sm:text-lg font-semibold text-blue-900 hover:text-blue-700 transition-colors break-all px-4"
              >
                mallikarjunafincorp@gmail.com
              </a>
              <p className="mt-4 text-gray-600 text-sm sm:text-base">
                We'll respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
