import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import ChitFunds from "@/components/ChitFunds";
import MoneyTransfers from "@/components/MoneyTransfers";
import Investments from "@/components/Investments";
import Loans from "@/components/Loans";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PasswordProtection from "@/components/PasswordProtection";

export default function AdminPreview() {
  return (
    <PasswordProtection>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
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
    </PasswordProtection>
  );
}
