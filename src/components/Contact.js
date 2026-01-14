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
          {/* Phone/WhatsApp Card */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-green-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                WhatsApp Us
              </h3>
              <a
                href="https://wa.me/918008036253?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Mallikarjuna%20Fincorp%20services.%20Please%20share%20more%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl font-bold text-blue-900 hover:text-green-600 transition-colors"
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
                href="mailto:mallikarjunafincorp@gmail.com?subject=Inquiry%20about%20Services&body=Hello%2C%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20financial%20services.%0A%0AThank%20you"
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
