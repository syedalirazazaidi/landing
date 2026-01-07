import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import MarketplaceCapabilities from "./components/MarketplaceCapabilities";
import PricingPlans from "./components/PricingPlans";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-slate-900">
      <Navbar />
      <Hero />
      <ContactForm />
      <MarketplaceCapabilities />
      <PricingPlans />
      <FaqSection />
      <Footer />
    </main>
  );
}
