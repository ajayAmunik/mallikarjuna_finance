"use client";

import { LoanIcon, CheckIcon, ShieldIcon } from "./Icons";

export default function Loans() {
  return (
    <section
      id="loans"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div
          data-aos="fade-up"
          className="flex flex-col items-center gap-4 mb-8 sm:mb-12"
        >
          <div className="p-3 bg-blue-100 rounded-full">
            <LoanIcon className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 text-center">
            Loans from Mallikarjuna FinCorp
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="mb-8 sm:mb-12">
          <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">
            Mallikarjuna FinCorp offers streamlined and flexible loan products
            designed to meet your immediate financial needs. Our process is
            built on speed, transparency, and mutual trust, ensuring you get the
            funds you need without unnecessary delays.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            How Our Loan Process Works
          </h3>
          <p className="text-gray-700 mb-4 text-base sm:text-lg">
            Our lending process mirrors the simplicity of our investment
            structure, focusing on a clear, mutual agreement:
          </p>
          <ol className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </span>
              <span className="text-base sm:text-lg">
                <strong>Application & Approval:</strong> Once your loan
                application is approved, we move quickly to finalize the terms.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </span>
              <span className="text-base sm:text-lg">
                <strong>Mutual Agreement & Documentation:</strong> A formal Loan
                Agreement Bond is prepared. This document formalizes the lending
                terms based on a mutual understanding between you and
                Mallikarjuna FinCorp.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </span>
              <span className="text-base sm:text-lg">
                <strong>Clear Terms:</strong> The Loan Agreement Bond explicitly
                outlines all critical details, including:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm sm:text-base">
                  <li>The principal loan amount disbursed.</li>
                  <li>The applicable interest rate and repayment schedule.</li>
                  <li>The tenure (repayment period) of the loan.</li>
                </ul>
              </span>
            </li>
          </ol>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mb-8 sm:mb-12 bg-white p-6 sm:p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
            Loan Details
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-blue-900 mb-1">
                ₹10,000
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Min Amount</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-blue-900 mb-1">
                ₹10 Lakhs
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Max Amount</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-blue-900 mb-1">
                3-24 Months
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Tenure</div>
            </div>
          </div>
          <p className="text-gray-700 text-base sm:text-lg">
            Our lending mechanism is based on a clear, mutual agreement. Once
            your application is approved, we rapidly prepare a formal Loan
            Agreement Bond. This bond legally formalizes the terms based on a
            mutual understanding, explicitly outlining the principal loan
            amount, the applicable interest rate, and the precise repayment
            schedule.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
            Why Choose Mallikarjuna FinCorp for Your Loan?
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <ShieldIcon className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-base sm:text-lg">
                  Fast Disbursement
                </strong>
                <p className="mt-1 text-sm sm:text-base text-gray-600">
                  We eliminate lengthy bureaucratic processes, ensuring the
                  funds are transferred to your account quickly once the
                  agreement is signed. This is crucial for urgent needs.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ShieldIcon className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-base sm:text-lg">
                  No Hidden Charges
                </strong>
                <p className="mt-1 text-sm sm:text-base text-gray-600">
                  We maintain a policy of full transparency. There are no hidden
                  process fees or unexpected charges, ensuring you know the
                  exact cost of borrowing upfront.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ShieldIcon className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-base sm:text-lg">
                  Flexible Repayment Options
                </strong>
                <p className="mt-1 text-sm sm:text-base text-gray-600">
                  Our loan terms are designed to be flexible, allowing us to
                  agree on a repayment schedule that suits your financial
                  capability and timeline.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ShieldIcon className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-base sm:text-lg">
                  Complete Transparency & Trust
                </strong>
                <p className="mt-1 text-sm sm:text-base text-gray-600">
                  All terms, including the interest rate and repayment schedule,
                  are clearly documented in the Loan Agreement Bond,
                  establishing a relationship based on trust and clarity.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
