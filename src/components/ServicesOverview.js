"use client";

import Image from "next/image";
import {
  ChitFundIcon,
  MoneyTransferIcon,
  InvestmentIcon,
  LoanIcon,
} from "./Icons";

export default function ServicesOverview() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const services = [
    {
      id: "chit-funds",
      title: "Chit Funds",
      description:
        "Secure, structured financial arrangement for systematic savings and easy access to lump-sum funds.",
      Icon: ChitFundIcon,
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop",
    },
    {
      id: "money-transfers",
      title: "Money Transfers",
      description:
        "Transfer funds directly from your credit card to your bank account with low convenience charges.",
      Icon: MoneyTransferIcon,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    },
    {
      id: "investments",
      title: "Investments",
      description:
        "Specialized bond investment product with faster returns and superior liquidity.",
      Icon: InvestmentIcon,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      id: "loans",
      title: "Loans",
      description:
        "Streamlined and flexible loan products from ₹10,000 to ₹10 Lakhs with fast disbursement.",
      Icon: LoanIcon,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Matching other sections */}
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
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 text-center">
            Our Services
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center text-gray-600 max-w-2xl mx-auto text-base sm:text-lg"
          >
            Comprehensive financial solutions designed to meet your diverse
            needs with transparency and trust.
          </p>
        </div>

        {/* Service Cards with Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.Icon;
            return (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => scrollToSection(service.id)}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 hover:border-blue-300 transform hover:-translate-y-2 group"
              >
                {/* Image Section */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="p-2 bg-white/90 backdrop-blur-sm rounded-lg inline-flex">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-900" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base text-center leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-center text-blue-900 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Learn more</span>
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
