import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhyOrganic from "@/components/WhyOrganic";
import LyfeBotWidget from "@/components/LyfeBot/LyfeBotWidget";

const WhyOrganicPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <WhyOrganic />
      </main>
      <Footer />
      <LyfeBotWidget />
    </div>
  );
};

export default WhyOrganicPage;
