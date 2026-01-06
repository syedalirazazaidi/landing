import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import MarketplaceCapabilities from "./components/MarketplaceCapabilities";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-slate-900">
      <Navbar />
      <Hero />
      <ContactForm />
      <MarketplaceCapabilities />
    </main>
  );
}
