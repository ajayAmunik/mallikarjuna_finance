"use client";

import { MoneyTransferIcon, CheckIcon } from "./Icons";

export default function MoneyTransfers() {
  return (
    <section
      id="money-transfers"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div
          data-aos="fade-up"
          className="flex flex-col items-center gap-4 mb-8 sm:mb-12"
        >
          <div className="p-3 bg-blue-100 rounded-full">
            <MoneyTransferIcon className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 text-center">
            Money Transfers
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="mb-8 sm:mb-12">
          <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">
            Did you know that credit card funds are primarily limited to
            payments, often making cash inaccessible when you need it most?
            We've solved that problem!
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Key Features
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-base sm:text-lg">
                <strong>Cash Your Credit Limit:</strong> Use our unique service
                to transfer funds directly from your credit card into your bank
                account, giving you immediate, liquid cash access.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-base sm:text-lg">
                <strong>Low Convenience Charges:</strong> We facilitate this
                critical transfer with significantly low charges, making it a
                cost-effective alternative to high-interest personal loans or
                ATM cash advances.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-base sm:text-lg">
                <strong>Flexible Access:</strong> Whether it's for an urgent
                bill, an immediate business expense, or any cash-only situation,
                your credit limit is now truly accessible.
              </span>
            </li>
          </ul>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mb-8 sm:mb-12 bg-white p-6 sm:p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Process
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            "Need cash fast? Our streamlined processing service allows you to
            instantly transfer funds directly from your card's cash limit to
            your bank account—simply provide your card details and authenticate
            via OTP—and receive the money within 2 minutes."
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            We Also Provide
          </h3>
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-4">
            <span className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-100 text-blue-900 rounded-full font-medium text-sm sm:text-base shadow-sm">
              ICICI
            </span>
            <span className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-100 text-blue-900 rounded-full font-medium text-sm sm:text-base shadow-sm">
              HDFC
            </span>
            <span className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-100 text-blue-900 rounded-full font-medium text-sm sm:text-base shadow-sm">
              SBI
            </span>
          </div>
          <p className="text-gray-700 text-base sm:text-lg">
            Credit cards based on your CIBIL Score and payslips
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Achievements
          </h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Within a single year, our services have empowered our customers to
            seamlessly transfer a cumulative worth of ₹15 Crores. This rapid
            growth confirms our commitment to providing fast, reliable, and
            high-value financial solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
