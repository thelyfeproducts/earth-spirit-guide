import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import lyfeMeditation from "@/assets/lyfe-meditation.png";
import storyDorm from "@/assets/story-dorm-making.jpeg";
import storyCampus from "@/assets/story-campus-sales.jpeg";
import storyRetail from "@/assets/story-retail-store.jpeg";
import storyCommunity from "@/assets/story-community.jpeg";
import storyTeam from "@/assets/story-team.jpeg";

const OurStory = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-clay">
          <div className="container-lyfe">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block bg-secondary/10 text-secondary font-body font-semibold px-4 py-2 rounded-full text-sm mb-6"
              >
                My Story
              </motion.span>
              
              <h1 className="heading-hero mb-6">
                From a college dorm
                <br />
                <span className="text-secondary">to community shelves.</span>
              </h1>
              
              <p className="body-large text-muted-foreground">
                This is the story of how Lyfe Products™ grew from a student's dorm room experiment into a movement built on trust, intention, and healing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Story Content */}
        <section className="section-padding bg-cream relative overflow-hidden">
          {/* Subtle gradient accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-secondary/10 to-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          {/* Lyfe Character - subtle companion */}
          <motion.img
            src={lyfeMeditation}
            alt="Lyfe meditating"
            className="absolute bottom-20 right-10 w-40 h-auto opacity-15 hidden xl:block"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="container-lyfe relative z-10">
            {/* Chapter 1: The Beginning */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="font-body text-secondary font-semibold text-sm uppercase tracking-widest mb-4 block">Chapter One</span>
                <h2 className="heading-section mb-6">
                  It started with
                  <br />
                  <span className="text-secondary">awareness.</span>
                </h2>
                <p className="body-large mb-4">
                  As a college student, I began paying attention to what I was putting on my body: the ingredients in everyday products, the chemicals we accept as normal.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  That awareness changed everything. I started researching, experimenting, and learning about plant-based alternatives. What began as curiosity became a calling.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden shadow-lyfe-lg"
              >
                <img
                  src={storyDorm}
                  alt="Making products in the dorm room, where it all began"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/70 to-transparent p-6">
                  <p className="font-body text-white">Where it all began, making remedies by hand</p>
                </div>
              </motion.div>
            </div>

            {/* Chapter 2: The Vision */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden shadow-lyfe-lg order-2 lg:order-1"
              >
                <img
                  src={storyCampus}
                  alt="Selling products on campus"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/70 to-transparent p-6">
                  <p className="font-body text-white">First campus sales, sharing the vision</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <span className="font-body text-secondary font-semibold text-sm uppercase tracking-widest mb-4 block">Chapter Two</span>
                <h2 className="heading-section mb-6">
                  Creating something
                  <br />
                  <span className="text-secondary">honest.</span>
                </h2>
                <p className="body-large mb-4">
                  I couldn't find products that felt honest: clean, plant based, and made with real intention.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  So I started making them myself. Small batches. Simple ingredients. Remedies that actually worked. Each product was crafted with purpose, not profit margins.
                </p>
              </motion.div>
            </div>

            {/* Chapter 3: Community Growth */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="font-body text-secondary font-semibold text-sm uppercase tracking-widest mb-4 block">Chapter Three</span>
                <h2 className="heading-section mb-6">
                  Growing through
                  <br />
                  <span className="text-secondary">community.</span>
                </h2>
                <p className="body-large mb-4">
                  What happened next wasn't marketing. It was community.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  Classmates started asking for more. Friends told their families. Word spread through trust, not ads. That organic growth led to our products being carried in <strong className="text-charcoal">6 retail stores</strong> across the region.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Every store partnership started the same way: someone believed in what we were doing because they experienced it themselves.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lyfe">
                  <img
                    src={storyRetail}
                    alt="First retail store partnership"
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/70 to-transparent p-4">
                    <p className="font-body text-white text-sm">Our first retail partnership</p>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lyfe">
                  <img
                    src={storyCommunity}
                    alt="Community supporters with products"
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/70 to-transparent p-4">
                    <p className="font-body text-white text-sm">Community believers</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Chapter 4: Validation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden shadow-lyfe-lg order-2 lg:order-1"
              >
                <img
                  src={storyTeam}
                  alt="The Lyfe Products team"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-6">
                  <p className="font-display font-bold text-white text-lg">The Lyfe Family</p>
                  <p className="font-body text-white/80 text-sm mt-1">Building something bigger than ourselves</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <span className="font-body text-secondary font-semibold text-sm uppercase tracking-widest mb-4 block">Chapter Four</span>
                <h2 className="heading-section mb-6">
                  Earning trust
                  <br />
                  <span className="text-secondary">the right way.</span>
                </h2>
                <p className="body-large mb-4">
                  Along the way, I shared this mission through pitch competitions. Not for clout, but to be heard.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Winning <strong className="text-charcoal">10+ competitions</strong> helped validate what we already knew: people are ready for something real. Something healing. Something honest. These wins opened doors, but they never changed our heart.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-br from-secondary/10 to-primary/5">
          <div className="container-lyfe">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <div className="bg-card rounded-2xl p-6 shadow-card">
                <p className="font-display font-black text-4xl md:text-5xl text-secondary">6</p>
                <p className="font-body text-muted-foreground mt-2">Retail Stores</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-card">
                <p className="font-display font-black text-4xl md:text-5xl text-secondary">10+</p>
                <p className="font-body text-muted-foreground mt-2">Competitions Won</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-card">
                <p className="font-display font-black text-4xl md:text-5xl text-secondary">100%</p>
                <p className="font-body text-muted-foreground mt-2">Plant Based</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-card">
                <p className="font-display font-black text-4xl md:text-5xl text-secondary">∞</p>
                <p className="font-body text-muted-foreground mt-2">Gratitude</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-cream">
          <div className="container-lyfe">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="heading-section mb-6">
                This is just
                <br />
                <span className="text-secondary">the beginning.</span>
              </h2>
              <p className="body-large text-muted-foreground mb-8">
                After reading this, I hope you feel it: this brand started small, grew with intention, and earned trust the right way. Now, we'd love for you to be part of the journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/#shop" className="btn-earth">
                  Explore the Remedies
                </a>
                <a href="/team" className="btn-outline-earth">
                  Meet the Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurStory;
