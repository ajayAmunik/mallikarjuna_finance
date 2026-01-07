"use client";

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
    },
    {
      id: "money-transfers",
      title: "Money Transfers",
      description:
        "Transfer funds directly from your credit card to your bank account with low convenience charges.",
      Icon: MoneyTransferIcon,
    },
    {
      id: "investments",
      title: "Investments",
      description:
        "Specialized bond investment product with faster returns and superior liquidity.",
      Icon: InvestmentIcon,
    },
    {
      id: "loans",
      title: "Loans",
      description:
        "Streamlined and flexible loan products from ₹10,000 to ₹10 Lakhs with fast disbursement.",
      Icon: LoanIcon,
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2
          data-aos="fade-up"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 text-center"
        >
          Our Services
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-base sm:text-lg"
        >
          Comprehensive financial solutions designed to meet your diverse needs
          with transparency and trust.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.Icon;
            return (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => scrollToSection(service.id)}
                className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-blue-100 hover:border-blue-300 transform hover:-translate-y-2 group"
              >
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2 sm:mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base text-center leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center justify-center text-blue-900 opacity-0 group-hover:opacity-100 transition-opacity">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
