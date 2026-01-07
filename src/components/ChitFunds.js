"use client";

import { ChitFundIcon, CheckIcon } from "./Icons";

export default function ChitFunds() {
  return (
    <section
      id="chit-funds"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div
          data-aos="fade-up"
          className="flex flex-col items-center gap-4 mb-8 sm:mb-12"
        >
          <div className="p-3 bg-blue-100 rounded-full">
            <ChitFundIcon className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 text-center">
            Chit Funds
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            How It Works
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">
            Our chit fund is a secure, structured financial arrangement way for
            a group of people to save money together and get access to a large
            sum of cash when they need it most.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            It is a unique, time-tested financial product that combines the
            benefits of systematic savings and easy access to lump-sum funds
            (like a loan), all within a secure, structured group.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Benefits
          </h3>
          <p className="text-gray-700 mb-4 text-base sm:text-lg">
            Our chit funds offer you flexible access to capital for all major
            life events and unexpected needs
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-base sm:text-lg">
                <strong>Major Purchases:</strong> Easily fund a new vehicle
                purchase or essential equipment.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-base sm:text-lg">
                <strong>Life Milestones:</strong> Finance a dream wedding or
                higher education expenses.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-base sm:text-lg">
                <strong>Property Development:</strong> Secure funds for house
                construction or home renovations.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-base sm:text-lg">
                <strong>Emergency Situations:</strong> Access a lump sum quickly
                for urgent emergencies or medical needs.
              </span>
            </li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Financial Advantages
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-base sm:text-lg">
                <strong>Lower Cost of Borrowing:</strong> Access funds with a
                significantly lower cost of borrowing (often compared to "low
                interest") than conventional loans.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-base sm:text-lg">
                <strong>Quick and Secure:</strong> Get a lump sum through a
                swift and secure process.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-base sm:text-lg">
                <strong>Flexible Repayment:</strong> Benefit from more flexible
                repayment options compared to rigid, fixed traditional loans.
              </span>
            </li>
          </ul>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
            Achievements
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckIcon className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
              <span className="text-base sm:text-lg">
                In just 5 years, Mallikarjuna Fincorp Chits has established
                itself as a reliable and trustworthy provider, driven by loyalty
                and a commitment to our members.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
              <span className="text-base sm:text-lg">
                We are proud to have successfully completed 15 chit groups
                spanning a value range from ₹50,000 up to ₹5 Lakhs, benefiting
                135 happy customers who have successfully achieved their
                financial goals.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
              <span className="text-base sm:text-lg">
                Currently, we have 4 active chit groups running seamlessly,
                ranging from ₹1 Lakh to ₹5 Lakhs, as we continue to lead with
                transparent management and dedication to our valued subscribers.
              </span>
            </li>
          </ul>
          <p className="mt-6 text-gray-800 font-semibold text-base sm:text-lg">
            Join the growing family of satisfied customers who trust
            Mallikarjuna Fincorp Chits with their financial future.
          </p>
        </div>
      </div>
    </section>
  );
}
