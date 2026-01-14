"use client";

import { useState, useEffect } from "react";

export default function LaunchTimer({ onComplete }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isComplete, setIsComplete] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleSecretClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 5) {
      // After 5 clicks, show website
      setIsComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  };

  // Keyboard shortcut: Press 'S' key 5 times to skip
  useEffect(() => {
    let keyPressCount = 0;
    const handleKeyPress = (e) => {
      if (e.key === "s" || e.key === "S") {
        keyPressCount++;
        if (keyPressCount >= 5) {
          setIsComplete(true);
          if (onComplete) {
            onComplete();
          }
        }
        // Reset after 2 seconds if not enough presses
        setTimeout(() => {
          keyPressCount = 0;
        }, 2000);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [onComplete]);

  // SET YOUR LAUNCH DATE HERE (YYYY-MM-DDTHH:MM:SS)
  // Change this date to your desired launch date
  const launchDate = new Date("2026-01-15T15:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setIsComplete(true);
        if (onComplete) {
          onComplete();
        }
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
  }, [launchDate, onComplete]);

  if (isComplete) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-6xl py-8 sm:py-12">
        {/* Logo/Brand - Secret click area */}
        <div
          className="mb-8 sm:mb-12 md:mb-16 cursor-pointer"
          onClick={handleSecretClick}
          title="Click 5 times to skip"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 sm:mb-4 drop-shadow-2xl leading-tight">
            Mallikarjuna FinCorp
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 font-light">
            We Stand By You
          </p>
        </div>

        {/* Countdown Timer */}
        <div id="countdown" className="mb-8 sm:mb-12">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-blue-200 mb-6 sm:mb-8 md:mb-12 tracking-wider">
            WE'RE LAUNCHING SOON
          </h2>

          {/* Timer Display */}
          <div className="flex items-center justify-center overflow-x-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/20 shadow-2xl w-full max-w-5xl">
              <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
                <div className="text-center min-w-[70px] sm:min-w-[90px]">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white font-mono mb-2">
                    {String(timeLeft.days).padStart(2, "0")}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-blue-200 font-semibold uppercase tracking-wider">
                    Days
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/80 hidden sm:block">
                  :
                </div>
                <div className="text-center min-w-[70px] sm:min-w-[90px]">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white font-mono mb-2">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-blue-200 font-semibold uppercase tracking-wider">
                    Hours
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/80 hidden sm:block">
                  :
                </div>
                <div className="text-center min-w-[70px] sm:min-w-[90px]">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white font-mono mb-2">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-blue-200 font-semibold uppercase tracking-wider">
                    Minutes
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/80 hidden sm:block">
                  :
                </div>
                <div className="text-center min-w-[70px] sm:min-w-[90px]">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white font-mono mb-2">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-blue-200 font-semibold uppercase tracking-wider">
                    Seconds
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Launch Date Info */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-blue-100">
          <p className="text-sm sm:text-base md:text-lg font-medium px-4">
            Stay tuned for our official launch!
          </p>
        </div>
      </div>
    </div>
  );
}
