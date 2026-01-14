"use client";

import { useState } from "react";
import LaunchTimer from "@/components/LaunchTimer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import ServicesOverview from "@/components/ServicesOverview";
import ChitFunds from "@/components/ChitFunds";
import MoneyTransfers from "@/components/MoneyTransfers";
import Investments from "@/components/Investments";
import Loans from "@/components/Loans";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [showWebsite, setShowWebsite] = useState(false);

  const handleTimerComplete = () => {
    setShowWebsite(true);
  };

  return (
    <>
      {!showWebsite && <LaunchTimer onComplete={handleTimerComplete} />}
      {showWebsite && (
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Hero />
            <AboutUs />
            <ServicesOverview />
            <div id="services">
              <ChitFunds />
              <MoneyTransfers />
              <Investments />
              <Loans />
            </div>
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}
