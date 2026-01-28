import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickShop from "@/components/QuickShop";
import ShopByRemedy from "@/components/ShopByRemedy";
import StorySection from "@/components/StorySection";
import WhyOrganic from "@/components/WhyOrganic";
import CompetitorComparison from "@/components/CompetitorComparison";
import Testimonials from "@/components/Testimonials";
import FeaturedTransformation from "@/components/FeaturedTransformation";
import Community from "@/components/Community";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import LyfeBotWidget from "@/components/LyfeBot/LyfeBotWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <QuickShop />
        <ShopByRemedy />
        <StorySection />
        <WhyOrganic />
        <CompetitorComparison />
        <FeaturedTransformation />
        <Testimonials />
        <Community />
        <FinalCTA />
      </main>
      <Footer />
      <LyfeBotWidget />
    </div>
  );
};

export default Index;
