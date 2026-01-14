"use client";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          data-aos="fade-up"
          className="flex flex-col items-center gap-4 mb-8 sm:mb-12"
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

        {/* Single Content Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10"
        >
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg lg:text-xl text-center max-w-4xl mx-auto">
            Founded in June 2020 by Sanike Ashok, Mallikarjuna Fincorp has grown
            over the last five years from a dedicated chit fund provider into a
            multi-faceted financial hub. Today, we proudly serve our community
            through secure money transfers, flexible loans, and strategic
            investment opportunities. Our business is built on the twin pillars
            of Trust and Loyalty—values we uphold in every transaction to ensure
            our customers' financial peace of mind. Visit us at our Sai Nagar,
            Jangaon office to experience a partnership rooted in integrity and
            growth.
          </p>
        </div>
      </div>
    </section>
  );
}
