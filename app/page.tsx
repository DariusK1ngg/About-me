import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BridgeArchitecture from "@/components/BridgeArchitecture";
import CodeWorkbench from "@/components/CodeWorkbench";
import TechnicalMetrics from "@/components/TechnicalMetrics";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#05070A] text-slate-100 selection:bg-cyber-cyan selection:text-slate-950 font-sans">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-12 pt-6">
        <Hero />
        <BridgeArchitecture />
        <CodeWorkbench />
        <TechnicalMetrics />
      </main>
      <Footer />
    </div>
  );
}
