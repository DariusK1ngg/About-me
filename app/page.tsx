import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechBands from "@/components/TechBands";
import BridgeArchitecture from "@/components/BridgeArchitecture";
import TerminalSection from "@/components/TerminalSection";
import TechnicalMetrics from "@/components/TechnicalMetrics";
import Footer from "@/components/Footer";
import Mascots from "@/components/Mascots";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Mascots />
      <main>
        <Hero />
        <TechBands />
        <div className="max-w-[1400px] mx-auto gutter flex flex-col gap-28 md:gap-40 py-24 md:py-36">
          <BridgeArchitecture />
          <TerminalSection />
          <TechnicalMetrics />
        </div>
      </main>
      <Footer />
    </div>
  );
}
