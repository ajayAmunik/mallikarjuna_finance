"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

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
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-white">
        <Image
          src="/finance-bg.jpeg"
          alt="Finance background"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
          style={{
            objectPosition: "center",
          }}
          onError={(e) => {
            // Hide image if it fails to load, fallback gradient will show
            e.target.style.display = "none";
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-900/70"></div>
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-lg"
        >
          Mallikarjuna FinCorp
        </h1>
        <p
          ref={taglineRef}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-medium mb-6 drop-shadow-md"
        >
          We Stand By You
        </p>
        <p
          ref={descRef}
          className="mt-6 text-base sm:text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-md"
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
            className="px-8 py-3 bg-white/95 text-blue-900 border-2 border-white rounded-full font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
