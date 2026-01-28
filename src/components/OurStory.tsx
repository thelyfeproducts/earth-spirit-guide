import { motion } from "framer-motion";
import lyfeMeditation from "@/assets/lyfe-meditation.png";
import storyDorm from "@/assets/story-dorm-making.jpeg";
import storyCampus from "@/assets/story-campus-sales.jpeg";
import storyRetail from "@/assets/story-retail-store.jpeg";
import storyCommunity from "@/assets/story-community.jpeg";
import storyTeam from "@/assets/story-team.jpeg";

const OurStory = () => {
  return (
    <section id="about" className="section-padding overflow-hidden relative bg-clay">
      <div className="container-lyfe">
        {/* Main Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-cream rounded-3xl shadow-lyfe-lg p-8 md:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Subtle gradient accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-secondary/10 to-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          {/* Lyfe Character - subtle companion */}
          <motion.img
            src={lyfeMeditation}
            alt="Lyfe meditating"
            className="absolute -bottom-8 -right-4 w-32 md:w-40 h-auto opacity-20 hidden lg:block"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10">
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block bg-secondary/10 text-secondary font-body font-semibold px-4 py-2 rounded-full text-sm mb-6"
            >
              My Story
            </motion.span>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="heading-section mb-8 max-w-2xl"
            >
              From a college dorm
              <br />
              <span className="text-secondary">to community shelves.</span>
            </motion.h2>

            {/* Story Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Text */}
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="body-large"
                >
                  It started in a college dorm room. As a student, I began paying attention to what I was putting on my body — the ingredients in everyday products, the chemicals we accept as normal. That awareness changed everything.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-body text-muted-foreground leading-relaxed"
                >
                  I couldn't find products that felt honest — clean, plant-based, and made with real intention. So I started making them myself. Small batches. Simple ingredients. Remedies that actually worked.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="font-body text-muted-foreground leading-relaxed"
                >
                  What happened next wasn't marketing — it was community. Classmates started asking for more. Friends told their families. Word spread through trust, not ads. That organic growth led to our products being carried in <strong className="text-charcoal">6 retail stores</strong> across the region.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="font-body text-muted-foreground leading-relaxed"
                >
                  Along the way, I shared this mission through pitch competitions — not for clout, but to be heard. Winning <strong className="text-charcoal">10+ competitions</strong> helped validate what we already knew: people are ready for something real. Something healing. Something honest.
                </motion.p>

                {/* Soft CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="pt-4"
                >
                  <a href="#shop" className="btn-earth inline-flex items-center gap-2">
                    Explore the Remedies
                    <span className="text-xl">→</span>
                  </a>
                </motion.div>
              </div>

              {/* Right Column - Images */}
              <div className="space-y-6">
                {/* Featured Image - Dorm Room Making */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-card-hover"
                >
                  <img
                    src={storyDorm}
                    alt="Making products in the dorm room - where it all began"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/70 to-transparent p-4">
                    <p className="font-body text-white text-sm">Where it all began — making remedies by hand</p>
                  </div>
                </motion.div>

                {/* Two-column image grid */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative rounded-xl overflow-hidden shadow-card"
                  >
                    <img
                      src={storyCampus}
                      alt="Selling products on campus"
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/60 to-transparent p-2">
                      <p className="font-body text-white text-xs">Campus sales days</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="relative rounded-xl overflow-hidden shadow-card"
                  >
                    <img
                      src={storyRetail}
                      alt="First retail store partnership"
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/60 to-transparent p-2">
                      <p className="font-body text-white text-xs">First retail partnership</p>
                    </div>
                  </motion.div>
                </div>

                {/* Community image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="relative rounded-xl overflow-hidden shadow-card"
                >
                  <img
                    src={storyCommunity}
                    alt="Community supporters with products"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/60 to-transparent p-3">
                    <p className="font-body text-white text-sm">Growing through community trust</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Stats/Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 pt-8 border-t border-charcoal/10"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="font-display font-black text-3xl md:text-4xl text-secondary">6</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Retail Stores</p>
                </div>
                <div>
                  <p className="font-display font-black text-3xl md:text-4xl text-secondary">10+</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Competitions Won</p>
                </div>
                <div>
                  <p className="font-display font-black text-3xl md:text-4xl text-secondary">100%</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Plant-Based</p>
                </div>
                <div>
                  <p className="font-display font-black text-3xl md:text-4xl text-secondary">∞</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Gratitude</p>
                </div>
              </div>
            </motion.div>

            {/* Team Photo - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 relative rounded-2xl overflow-hidden shadow-lyfe-lg"
            >
              <img
                src={storyTeam}
                alt="The Lyfe Products team"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-6">
                <p className="font-display font-bold text-white text-lg md:text-xl">The Lyfe Family</p>
                <p className="font-body text-white/80 text-sm mt-1">Building something bigger than ourselves</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
