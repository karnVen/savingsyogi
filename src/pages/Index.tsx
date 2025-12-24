import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { FeaturesSection } from "@/components/FeaturesSection";
import { InsightsSection } from "@/components/InsightsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <InsightsSection />
      <Footer />
    </main>
  );
};

export default Index;
