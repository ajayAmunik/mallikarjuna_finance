"use client";

import { useState } from "react";
import { ChitFundIcon, CheckIcon } from "./Icons";

export default function ChitFunds() {
  const [activeTab, setActiveTab] = useState("scheme1");

  const schemes = [
    {
      id: "scheme1",
      label: "₹1 Lakh Scheme",
      totalAmount: "1 Lakh",
      perHead: "5000",
      months: 20,
      members: 20,
      data: [
        { month: 1, amount: 95000 },
        { month: 2, amount: 96000 },
        { month: 3, amount: 97000 },
        { month: 4, amount: 98000 },
        { month: 5, amount: 99000 },
        { month: 6, amount: 100000 },
        { month: 7, amount: 101000 },
        { month: 8, amount: 102000 },
        { month: 9, amount: 103000 },
        { month: 10, amount: 104000 },
        { month: 11, amount: 105000 },
        { month: 12, amount: 106000 },
        { month: 13, amount: 107000 },
        { month: 14, amount: 108000 },
        { month: 15, amount: 109000 },
        { month: 16, amount: 110000 },
        { month: 17, amount: 111000 },
        { month: 18, amount: 112000 },
        { month: 19, amount: 113000 },
        { month: 20, amount: 114000 },
      ],
    },
    {
      id: "scheme2",
      label: "₹2 Lakh Scheme",
      totalAmount: "2 Lakh",
      perHead: "10000",
      months: 20,
      members: 20,
      data: [
        { month: 1, amount: 185000 },
        { month: 2, amount: 187300 },
        { month: 3, amount: 189600 },
        { month: 4, amount: 191900 },
        { month: 5, amount: 194200 },
        { month: 6, amount: 196500 },
        { month: 7, amount: 198800 },
        { month: 8, amount: 201100 },
        { month: 9, amount: 203400 },
        { month: 10, amount: 205700 },
        { month: 11, amount: 208000 },
        { month: 12, amount: 210300 },
        { month: 13, amount: 212600 },
        { month: 14, amount: 214900 },
        { month: 15, amount: 217200 },
        { month: 16, amount: 219500 },
        { month: 17, amount: 221800 },
        { month: 18, amount: 224100 },
        { month: 19, amount: 226400 },
        { month: 20, amount: 228700 },
      ],
    },
    {
      id: "scheme3",
      label: "₹50,000 Scheme",
      totalAmount: "50,000",
      perHead: "2500",
      months: 20,
      members: 20,
      data: [
        { month: 1, amount: 47500 },
        { month: 2, amount: 48000 },
        { month: 3, amount: 48500 },
        { month: 4, amount: 49000 },
        { month: 5, amount: 49500 },
        { month: 6, amount: 50000 },
        { month: 7, amount: 50500 },
        { month: 8, amount: 51000 },
        { month: 9, amount: 51500 },
        { month: 10, amount: 52000 },
        { month: 11, amount: 52500 },
        { month: 12, amount: 53000 },
        { month: 13, amount: 53500 },
        { month: 14, amount: 54000 },
        { month: 15, amount: 54500 },
        { month: 16, amount: 55000 },
        { month: 17, amount: 55500 },
        { month: 18, amount: 56000 },
        { month: 19, amount: 56500 },
        { month: 20, amount: 57000 },
      ],
    },
  ];

  const activeScheme = schemes.find((scheme) => scheme.id === activeTab);

  return (
    <section
      id="chit-funds"
      className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div
          data-aos="fade-up"
          className="flex flex-col items-center gap-3 mb-6 sm:mb-8"
        >
          <div className="p-3 bg-blue-100 rounded-full">
            <ChitFundIcon className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 text-center">
            Chit Funds
          </h2>
        </div>

        {/* Scheme Tabs */}
        <div data-aos="fade-up" data-aos-delay="100" className="mb-6 sm:mb-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4">
            {schemes.map((scheme) => (
              <button
                key={scheme.id}
                onClick={() => setActiveTab(scheme.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeTab === scheme.id
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {scheme.label}
              </button>
            ))}
          </div>

          {/* Scheme Details Card */}
          {activeScheme && (
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-2xl shadow-xl p-4 sm:p-6 border border-blue-100">
              {/* Header */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="inline-block bg-orange-200 px-4 py-2 rounded-lg mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
                    Mallikarjuna Fincorp
                  </h3>
                </div>
                <div className="inline-block bg-green-200 px-4 py-2 rounded-lg mb-3 mx-2">
                  <p className="text-lg sm:text-xl font-semibold text-blue-900">
                    {activeScheme.totalAmount} Chitti {activeScheme.perHead}/
                    head/month
                  </p>
                </div>
                <div className="inline-block bg-orange-200 px-4 py-2 rounded-lg">
                  <p className="text-base sm:text-lg font-semibold text-blue-900">
                    {activeScheme.months} months - {activeScheme.members}{" "}
                    members
                  </p>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                {activeScheme.data.map((row, index) => (
                  <div
                    key={row.month}
                    className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-3 sm:p-4 border-2 ${
                      row.month === activeScheme.months
                        ? "border-yellow-400 bg-yellow-50"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 font-medium">
                        Month
                      </div>
                      <div
                        className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${
                          row.month === activeScheme.months
                            ? "text-yellow-700"
                            : "text-blue-900"
                        }`}
                      >
                        {row.month}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 mb-1">
                        Amount
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-blue-900">
                        ₹{row.amount.toLocaleString("en-IN")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* How It Works Section */}
        <div data-aos="fade-up" data-aos-delay="200" className="mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            How It Works
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3 text-base sm:text-lg">
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

        {/* Benefits Grid */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8"
        >
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              Benefits
            </h3>
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
                  <strong>Emergency Situations:</strong> Access a lump sum
                  quickly for urgent emergencies or medical needs.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              Financial Advantages
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg">
                  <strong>Lower Cost of Borrowing:</strong> Access funds with a
                  significantly lower cost of borrowing than conventional loans.
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
                  <strong>Flexible Repayment:</strong> Benefit from more
                  flexible repayment options compared to traditional loans.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Achievements */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
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
