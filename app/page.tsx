import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="container mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-24 max-w-5xl flex flex-col gap-16 md:gap-32 min-h-screen">
      <Navbar />
      <Hero />
      <BentoGrid />
      <Philosophy />
      <Footer />
    </main>
  );
}
