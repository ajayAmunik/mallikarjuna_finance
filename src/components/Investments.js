"use client";

import { InvestmentIcon, CheckIcon, ShieldIcon } from "./Icons";

export default function Investments() {
  return (
    <section
      id="investments"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div
          data-aos="fade-up"
          className="flex flex-col items-center gap-4 mb-8 sm:mb-12"
        >
          <div className="p-3 bg-blue-100 rounded-full">
            <InvestmentIcon className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 text-center">
            Investments
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="mb-8 sm:mb-12">
          <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">
            Mallikarjuna FinCorp invites you to explore our specialized bond
            investment product. This innovative offering is structured similar
            to a traditional Fixed Deposit (FD) but is designed to deliver
            faster, competitive returns and superior liquidity, making your
            money work harder for you.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Our Investment Mechanism: The Bond Advantage
          </h3>
          <p className="text-gray-700 mb-4 text-base sm:text-lg">
            Unlike complex financial products, our system is built on simplicity
            and trust.
          </p>
          <ol className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </span>
              <span className="text-base sm:text-lg">
                <strong>Investment & Security:</strong> Upon confirmation of
                your funds, MallikarjunaFinCorp will issue you a legally binding
                Investment Bond. This bond serves as your guarantee and proof of
                investment.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </span>
              <span className="text-base sm:text-lg">
                <strong>Mutual Understanding:</strong> The bond terms—including
                the agreed-upon Interest Rate and the selected Tenure
                (Investment Period)—are based on a clear, mutual understanding
                and signed agreement between you and MallikarjunaFinCorp.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </span>
              <span className="text-base sm:text-lg">
                <strong>Simplicity & Speed:</strong> We have streamlined the
                process to eliminate lengthy paperwork and waiting times,
                ensuring you can secure your investment quickly and see returns
                faster.
              </span>
            </li>
          </ol>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mb-8 sm:mb-12 bg-gradient-to-br from-gray-50 to-blue-50 p-6 sm:p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Investment Details & Flexibility
          </h3>
          <p className="text-gray-700 mb-4 text-base sm:text-lg">
            We offer flexible options designed to meet various short-term
            financial goals:
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
                ₹15,000
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium mb-2">
                Minimum Investment
              </div>
              <p className="text-sm text-gray-600">
                This accessible entry point makes high-yield investing available
                to a wider audience.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
                2 Months
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium mb-2">
                Minimum Tenure
              </div>
              <p className="text-sm text-gray-600">
                Benefit from excellent returns even over a short period.
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
            Why Choose Mallikarjuna FinCorp?
          </h3>
          <p className="text-gray-700 mb-6 text-base sm:text-lg">
            Benefit from our specialized bond investment product designed for
            superior returns and transparency:
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <ShieldIcon className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-base sm:text-lg">
                  Accelerated Returns
                </strong>
                <p className="mt-1 text-sm sm:text-base text-gray-600">
                  Get your returns quicker compared to standard long-term Fixed
                  Deposits (FDs), significantly enhancing your cash flow and
                  helping you reach your financial goals faster.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ShieldIcon className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-base sm:text-lg">
                  Zero Process Fee
                </strong>
                <p className="mt-1 text-sm sm:text-base text-gray-600">
                  We believe in delivering full value; you keep 100% of your
                  earned interest without the deduction of any processing or
                  administrative charges.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ShieldIcon className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-base sm:text-lg">
                  Complete Transparency
                </strong>
                <p className="mt-1 text-sm sm:text-base text-gray-600">
                  Every aspect, from interest rate calculation to the term
                  duration, is clearly detailed and documented in the official
                  bond agreement, ensuring trust and clarity.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ShieldIcon className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-base sm:text-lg">
                  Security & Guarantee
                </strong>
                <p className="mt-1 text-sm sm:text-base text-gray-600">
                  Your investment is secured and guaranteed by the official,
                  documented Bond issued directly by Mallikarjuna FinCorp,
                  serving as your proof and security.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
