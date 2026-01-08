"use client";

import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLive, setIsLive] = useState(false);

  // SET YOUR LAUNCH DATE HERE (YYYY-MM-DDTHH:MM:SS)
  const launchDate = new Date("2026-01-10T18:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setIsLive(true);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  if (isLive) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="text-center">
          <div className="text-6xl mb-4">🚀</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            We are live!
          </h1>
          <p className="text-xl text-white/90">
            Welcome to Mallikarjuna FinCorp
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-7xl py-8 sm:py-12">
        {/* Logo/Brand */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-2 sm:mb-4 drop-shadow-2xl leading-tight">
            Mallikarjuna FinCorp
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-100 font-light">
            We Stand By You
          </p>
        </div>

        {/* Countdown Timer */}
        <div id="countdown" className="mb-8 sm:mb-12">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-blue-200 mb-6 sm:mb-8 md:mb-12 tracking-wider">
            COMING SOON
          </h2>

          {/* Horizontal Timer Layout */}
          <div className="flex items-center justify-center overflow-x-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 border border-white/20 shadow-2xl w-full max-w-5xl">
              <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 flex-wrap">
                <div className="text-center min-w-[60px] sm:min-w-[80px]">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white font-mono mb-1 sm:mb-2">
                    {String(timeLeft.days).padStart(2, "0")}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-200 font-semibold uppercase tracking-wider sm:tracking-widest">
                    Days
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white/80 hidden sm:block">
                  :
                </div>
                <div className="text-center min-w-[60px] sm:min-w-[80px]">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white font-mono mb-1 sm:mb-2">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-200 font-semibold uppercase tracking-wider sm:tracking-widest">
                    Hours
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white/80 hidden sm:block">
                  :
                </div>
                <div className="text-center min-w-[60px] sm:min-w-[80px]">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white font-mono mb-1 sm:mb-2">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-200 font-semibold uppercase tracking-wider sm:tracking-widest">
                    Minutes
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white/80 hidden sm:block">
                  :
                </div>
                <div className="text-center min-w-[60px] sm:min-w-[80px]">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white font-mono mb-1 sm:mb-2">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-200 font-semibold uppercase tracking-wider sm:tracking-widest">
                    Seconds
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Launch Date Info */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-blue-100">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium px-4">
            Launch Date:{" "}
            <span className="font-bold text-white block sm:inline mt-1 sm:mt-0">
              January 20, 2026 at 6:00 PM
            </span>
          </p>
        </div>

        {/* Admin Preview Link */}
        <div className="mt-6 sm:mt-8 md:mt-10">
          <a
            href="/adminpreview"
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full font-bold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl shadow-blue-500/50"
          >
            Admin Preview
          </a>
        </div>
      </div>
    </div>
  );
}
