"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = [
    { id: "mission", label: "Mission" },
    { id: "vision", label: "Vision" },
    { id: "values", label: "Our Values" },
  ];

  const content = {
    mission: {
      title: "Our Mission",
      text: (
        <>
          Mallikarjunafincorp was founded in June 2020 by{" "}
          <span className="font-semibold text-gray-900">Sanike Ashok</span>.
          Mallikarjuna Fincorp has grown over the last five years from a
          dedicated chit fund provider into a multi-faceted financial hub.
          Today, we proudly serve our community through secure money transfers,
          flexible loans, and strategic investment opportunities.
        </>
      ),
    },
    vision: {
      title: "Our Vision",
      text: (
        <>
          Our business is built on the twin pillars of{" "}
          <span className="font-semibold text-gray-900">Trust and Loyalty</span>
          —values we uphold in every transaction to ensure our customers'
          financial peace of mind. We envision a future where financial services
          are accessible, transparent, and empowering for everyone in our
          community.
        </>
      ),
    },
    values: {
      title: "Our Values",
      text: (
        <>
          Visit us at our{" "}
          <span className="font-semibold text-gray-900">
            Sai Nagar, Jangaon
          </span>{" "}
          office to experience a partnership rooted in integrity and growth. We
          are committed to building lasting relationships through transparency,
          reliability, and a customer-first approach that puts your financial
          well-being at the heart of everything we do.
        </>
      ),
    },
  };

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          data-aos="fade-up"
          className="flex flex-col items-center gap-4 mb-12 sm:mb-16"
        >
          <div className="p-3 bg-blue-100 rounded-full">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-blue-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 text-center">
            About Us
          </h2>
        </div>

        {/* Main Content with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Content Section */}
          <div data-aos="fade-right" className="space-y-6">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              We help you achieve your financial goals
            </h3>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-4">
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-900">
                {content[activeTab].title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {content[activeTab].text}
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div
            data-aos="fade-left"
            className="relative h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
              alt="Financial Services - Professional Finance"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/20 to-transparent"></div>

            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-sm sm:text-base font-semibold text-gray-900">
                    Contact Us
                  </h5>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm text-gray-600">
                      Open Now
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  {/* Location */}
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <svg
                        className="w-4 h-4 text-blue-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Sai Nagar, Jangaon
                      </p>
                      <p className="text-xs text-gray-500">
                        Monday - Saturday, 9 AM - 6 PM
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <a
                    href="mailto:mallikarjunafincorp@gmail.com?subject=Inquiry%20about%20Services&body=Hello%2C%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20financial%20services.%0A%0AThank%20you"
                    className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors group"
                  >
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <svg
                        className="w-4 h-4 text-blue-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 group-hover:text-blue-900">
                        mallikarjunafincorp@gmail.com
                      </p>
                      <p className="text-xs text-gray-500">We respond 24/7</p>
                    </div>
                  </a>

                  {/* Phone/WhatsApp */}
                  <a
                    href="https://wa.me/918008036253?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Mallikarjuna%20Fincorp%20services.%20Please%20share%20more%20information."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors group"
                  >
                    <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                      <svg
                        className="w-4 h-4 text-green-700"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 group-hover:text-green-700">
                        8008036253
                      </p>
                      <p className="text-xs text-gray-500">We respond 24/7</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
