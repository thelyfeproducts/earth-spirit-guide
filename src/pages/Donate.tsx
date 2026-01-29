import { motion } from "framer-motion";
import { Heart, Sprout, Users, BookOpen, Gift, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import lyfeWatering from "@/assets/lyfe-watering.png";

const donationTiers = [
  {
    name: "Seed Planter",
    amount: "$10",
    description: "Help us buy seeds and supplies for our community garden.",
    impact: "Plants 5 new seedlings",
    icon: Sprout,
  },
  {
    name: "Garden Grower",
    amount: "$25",
    description: "Support a youth workshop session with materials and snacks.",
    impact: "Funds 1 workshop session",
    icon: BookOpen,
  },
  {
    name: "Community Builder",
    amount: "$50",
    description: "Sponsor a young entrepreneur's first business project.",
    impact: "Empowers 1 youth entrepreneur",
    icon: Users,
  },
  {
    name: "Earth Guardian",
    amount: "$100",
    description: "Fund a full month of Earth School programming.",
    impact: "Supports 10+ youth for a month",
    icon: Heart,
  },
];

const impactAreas = [
  {
    title: "Earth School Programs",
    description:
      "Hands-on learning where young people connect with nature and discover their potential.",
    percentage: "40%",
  },
  {
    title: "Community Gardens",
    description: "Creating green spaces where neighborhoods can grow together.",
    percentage: "30%",
  },
  {
    title: "Youth Entrepreneurship",
    description:
      "Teaching kids that their ideas matter and they can build something real.",
    percentage: "20%",
  },
  {
    title: "Supplies & Materials",
    description:
      "Seeds, soil, tools, and educational materials for all our programs.",
    percentage: "10%",
  },
];

const Donate = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-cream to-background">
          <div className="container-lyfe">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block bg-secondary/10 text-secondary font-body font-semibold px-4 py-2 rounded-full text-sm mb-6"
                >
                  Support Our Mission
                </motion.span>
                
                <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
                  Help us grow
                  <br />
                  <span className="text-secondary">something beautiful.</span>
                </h1>
                
                <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                  Every dollar you give plants seeds of change. Your donation supports youth education, 
                  community gardens, and programs that help young people discover their potential.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="#donate-options" 
                    className="btn-earth inline-flex items-center justify-center gap-2"
                  >
                    <Gift className="w-5 h-5" />
                    Donate Now
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex justify-center"
              >
                <motion.img
                  src={lyfeWatering}
                  alt="Lyfe character watering plants"
                  className="w-64 md:w-80 lg:w-96 h-auto drop-shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Donation Tiers */}
        <section id="donate-options" className="section-padding bg-background">
          <div className="container-lyfe">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block bg-primary/10 text-primary font-body font-semibold px-4 py-2 rounded-full text-sm mb-6">
                Ways to Give
              </span>
              <h2 className="heading-section mb-6">Choose Your Impact</h2>
              <p className="body-large max-w-3xl mx-auto">
                No amount is too small. Every contribution helps us nurture the next generation 
                and build stronger communities.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {donationTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-cream rounded-2xl p-6 shadow-lyfe hover:shadow-lyfe-lg transition-shadow duration-300 flex flex-col"
                >
                  <div className="bg-secondary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <tier.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-charcoal text-center mb-2">
                    {tier.name}
                  </h3>
                  <p className="font-display font-black text-3xl text-secondary text-center mb-4">
                    {tier.amount}
                  </p>
                  <p className="font-body text-sm text-muted-foreground text-center mb-4 flex-grow">
                    {tier.description}
                  </p>
                  <div className="bg-secondary/10 rounded-xl p-3 text-center">
                    <p className="font-body text-sm font-semibold text-secondary">
                      {tier.impact}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Custom Amount Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-3xl p-8 md:p-12 text-center"
            >
              <h3 className="font-display font-bold text-2xl text-charcoal mb-4">
                Want to give a custom amount?
              </h3>
              <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
                We are grateful for any contribution. Reach out to us directly to discuss 
                how your donation can make the biggest impact.
              </p>
              <a 
                href="/contact" 
                className="btn-earth inline-flex items-center justify-center gap-2"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Where Your Money Goes */}
        <section className="section-padding bg-cream">
          <div className="container-lyfe">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block bg-secondary/10 text-secondary font-body font-semibold px-4 py-2 rounded-full text-sm mb-6">
                Transparency
              </span>
              <h2 className="heading-section mb-6">Where Your Money Goes</h2>
              <p className="body-large max-w-3xl mx-auto">
                We believe in complete transparency. Here is how we use every dollar 
                to create real, lasting change in our communities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {impactAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-6 shadow-lyfe flex items-start gap-4"
                >
                  <div className="bg-secondary/10 rounded-full px-4 py-2 flex-shrink-0">
                    <span className="font-display font-black text-2xl text-secondary">
                      {area.percentage}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-charcoal mb-2">
                      {area.title}
                    </h4>
                    <p className="font-body text-muted-foreground text-sm">
                      {area.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Ways to Help */}
        <section className="section-padding bg-background">
          <div className="container-lyfe">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="heading-section mb-6">Other Ways to Help</h2>
              <p className="body-large max-w-2xl mx-auto">
                Not ready to donate? There are still meaningful ways to support our mission.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-cream rounded-2xl p-6 shadow-lyfe text-center"
              >
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-display font-bold text-lg text-charcoal mb-3">
                  Volunteer
                </h4>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Share your time and skills at our community gardens or youth workshops.
                </p>
                <a 
                  href="/contact" 
                  className="font-body font-semibold text-primary hover:text-secondary transition-colors inline-flex items-center gap-1"
                >
                  Get Involved <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-cream rounded-2xl p-6 shadow-lyfe text-center"
              >
                <div className="bg-secondary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-display font-bold text-lg text-charcoal mb-3">
                  Shop With Purpose
                </h4>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  A portion of every Lyfe product purchase supports our community programs.
                </p>
                <a 
                  href="/#shop" 
                  className="font-body font-semibold text-secondary hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Shop Now <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-cream rounded-2xl p-6 shadow-lyfe text-center"
              >
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Gift className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-display font-bold text-lg text-charcoal mb-3">
                  Spread the Word
                </h4>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Share our mission with friends and family. Every voice helps us grow.
                </p>
                <a 
                  href="/ambassadors" 
                  className="font-body font-semibold text-primary hover:text-secondary transition-colors inline-flex items-center gap-1"
                >
                  Become an Ambassador <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Thank You Section */}
        <section className="section-padding bg-gradient-to-b from-cream to-background">
          <div className="container-lyfe text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-section mb-6">
                Thank you for
                <br />
                <span className="text-secondary">believing in us.</span>
              </h2>
              <p className="body-large max-w-2xl mx-auto">
                Your generosity plants seeds of hope in young hearts and builds communities 
                where everyone has the chance to grow. Together, we are creating something beautiful.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;
