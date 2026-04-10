import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-16 md:py-24 max-w-5xl flex flex-col gap-32">
      <Navbar />
      <Hero />
      <BentoGrid />
      <Philosophy />
      <Footer />
    </main>
  );
}
