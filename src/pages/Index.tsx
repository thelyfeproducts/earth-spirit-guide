import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ShopByRemedy from "@/components/ShopByRemedy";
import WhyOrganic from "@/components/WhyOrganic";
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
        <ShopByRemedy />
        <WhyOrganic />
        <Community />
        <FinalCTA />
      </main>
      <Footer />
      <LyfeBotWidget />
    </div>
  );
};

export default Index;
