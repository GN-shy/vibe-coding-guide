import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DirectionGrid from "@/components/DirectionGrid";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zeekr-blue">
      <Navbar />
      <HeroSection />
      <DirectionGrid />
      <QuoteSection />
      <Footer />
    </main>
  );
}
