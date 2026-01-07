"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Ensure elements are visible first
    if (titleRef.current) gsap.set(titleRef.current, { opacity: 1, y: 0 });
    if (taglineRef.current) gsap.set(taglineRef.current, { opacity: 1, y: 0 });
    if (descRef.current) gsap.set(descRef.current, { opacity: 1, y: 0 });
    if (buttonsRef.current) gsap.set(buttonsRef.current, { opacity: 1, y: 0 });

    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        taglineRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        descRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        buttonsRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto text-center w-full">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-900 mb-4 leading-tight"
        >
          Mallikarjuna FinCorp
        </h1>
        <p
          ref={taglineRef}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 font-medium mb-6"
        >
          We Stand By You
        </p>
        <p
          ref={descRef}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Your trusted financial partner for chit funds, money transfers,
          investments, and loans. Empowering your financial future with
          transparency and reliability.
        </p>
        <div
          ref={buttonsRef}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => {
              const element = document.getElementById("services");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-blue-900 text-white rounded-full font-semibold hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Services
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-white text-blue-900 border-2 border-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
