import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickShop from "@/components/QuickShop";
import StorySection from "@/components/StorySection";
import WhyOrganic from "@/components/WhyOrganic";
import Remedies from "@/components/Remedies";
import Testimonials from "@/components/Testimonials";
import Community from "@/components/Community";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <QuickShop />
        <StorySection />
        <WhyOrganic />
        <Remedies />
        <Testimonials />
        <Community />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
