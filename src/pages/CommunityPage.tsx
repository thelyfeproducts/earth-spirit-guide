import { motion } from "framer-motion";
import { Sprout, Heart, Users, Award, Lightbulb, HandHeart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import lyfeWatering from "@/assets/lyfe-watering.png";
import lyfePeace from "@/assets/lyfe-peace.png";
import communityGroup from "@/assets/community-group.jpeg";
import communityGardening from "@/assets/community-gardening.jpeg";

const workshopCards = [
  {
    icon: Sprout,
    title: "Plant, Water, Grow",
    description: "Kids learn to plant seeds, care for gardens, and watch their work come to life over time."
  },
  {
    icon: Heart,
    title: "Where Food Comes From",
    description: "Understanding the journey from soil to table builds respect for nature and healthy eating."
  },
  {
    icon: Users,
    title: "Working Together",
    description: "Outdoor teamwork teaches cooperation, shared responsibility, and community care."
  },
  {
    icon: Award,
    title: "Pride Through Growth",
    description: "Watching something grow because of your effort builds confidence that lasts a lifetime."
  },
];

const entrepreneurshipCards = [
  {
    icon: Lightbulb,
    title: "Ideas Become Real",
    description: "Kids learn that every business starts with a simple idea and the courage to try."
  },
  {
    icon: Users,
    title: "Confidence in Sharing",
    description: "Presenting ideas to others builds public speaking skills and self belief."
  },
  {
    icon: Heart,
    title: "Creativity and Leadership",
    description: "Entrepreneurship is about solving problems creatively and leading with purpose."
  },
  {
    icon: HandHeart,
    title: "Ownership and Responsibility",
    description: "Taking ownership of a project teaches accountability and the value of hard work."
  },
];

const impactStats = [
  { value: "50+", label: "Youth Empowered" },
  { value: "12", label: "Workshops Hosted" },
  { value: "3", label: "Community Gardens" },
  { value: "5", label: "Partner Organizations" },
];

const CommunityPage = () => {
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
                  Our Community
                </motion.span>
                
                <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
                  Growing more than products.
                  <br />
                  <span className="text-secondary">Growing people.</span>
                </h1>
                
                <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                  Lyfe is more than wellness products. It is a living community rooted in education, 
                  empowerment, and the belief that everyone deserves the chance to grow.
                </p>
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

        {/* Earth School Section */}
        <section className="section-padding bg-background">
          <div className="container-lyfe">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block bg-primary/10 text-primary font-body font-semibold px-4 py-2 rounded-full text-sm mb-6">
                Learning by Doing
              </span>
              <h2 className="heading-section mb-6">Earth School</h2>
              <p className="body-large max-w-3xl mx-auto">
                Earth School is a hands on learning space where young people connect with nature, 
                build real skills, and discover their potential through the simple act of growing.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl overflow-hidden shadow-lyfe-lg"
              >
                <img
                  src={communityGroup}
                  alt="Youth gathered at the community garden"
                  className="w-full h-auto"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="font-display font-bold text-2xl md:text-3xl text-charcoal">
                  What Kids Learn
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-xl flex-shrink-0">
                      <Sprout className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-charcoal">Gardening and Growing Food</p>
                      <p className="font-body text-muted-foreground">Planting seeds, nurturing growth, and harvesting the rewards of patience.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-charcoal">Understanding Nature</p>
                      <p className="font-body text-muted-foreground">Learning how ecosystems work and why sustainability matters for the future.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-xl flex-shrink-0">
                      <Users className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-charcoal">Responsibility and Care</p>
                      <p className="font-body text-muted-foreground">Taking ownership of a garden teaches commitment and follow through.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-charcoal">Confidence Through Creation</p>
                      <p className="font-body text-muted-foreground">Creating something real builds self belief that transfers to every part of life.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gardening Workshops Section */}
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
                Hands On Learning
              </span>
              <h2 className="heading-section mb-6">Hands in the Soil</h2>
              <p className="body-large max-w-3xl mx-auto">
                Our gardening workshops teach kids the art of growing through direct experience. 
                There is no better teacher than the earth itself.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  {workshopCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-background rounded-2xl p-6 shadow-lyfe"
                    >
                      <div className="bg-secondary/10 p-3 rounded-xl w-fit mb-4">
                        <card.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <h4 className="font-display font-bold text-lg text-charcoal mb-2">
                        {card.title}
                      </h4>
                      <p className="font-body text-sm text-muted-foreground">
                        {card.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-lyfe-lg"
              >
                <img
                  src={communityGardening}
                  alt="Kids working in the garden with soil and plants"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Entrepreneurship Section */}
        <section className="section-padding bg-background">
          <div className="container-lyfe">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block bg-primary/10 text-primary font-body font-semibold px-4 py-2 rounded-full text-sm mb-6">
                Empowerment
              </span>
              <h2 className="heading-section mb-6">Planting the Seeds of Entrepreneurship</h2>
              <p className="body-large max-w-3xl mx-auto">
                Entrepreneurship is not about hustle. It is about empowerment. We teach kids that their ideas matter, 
                their creativity has value, and they have the power to build something real.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {entrepreneurshipCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-cream rounded-2xl p-6 shadow-lyfe text-center"
                >
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <card.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-charcoal mb-3">
                    {card.title}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Impact Section */}
        <section className="section-padding bg-gradient-to-b from-cream to-background">
          <div className="container-lyfe">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block bg-secondary/10 text-secondary font-body font-semibold px-4 py-2 rounded-full text-sm mb-6">
                Our Impact
              </span>
              <h2 className="heading-section mb-6">Rooted in Community</h2>
              <p className="body-large max-w-3xl mx-auto">
                Every workshop, every garden, every lesson adds up to something bigger. 
                We are building a community where young people feel seen, valued, and capable.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-6 shadow-lyfe text-center"
                >
                  <p className="font-display font-black text-4xl md:text-5xl text-secondary mb-2">
                    {stat.value}
                  </p>
                  <p className="font-body text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="section-padding bg-background">
          <div className="container-lyfe">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <motion.img
                  src={lyfePeace}
                  alt="Lyfe character in peaceful pose"
                  className="w-56 md:w-72 lg:w-80 h-auto drop-shadow-xl"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <h2 className="heading-section mb-6">
                  This is just
                  <br />
                  <span className="text-secondary">the beginning.</span>
                </h2>
                
                <p className="body-large mb-8">
                  Our mission is ongoing. Every seed planted, every lesson taught, every young person empowered 
                  brings us closer to a world where everyone has the chance to grow. We are not just building a brand. 
                  We are building a movement.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="/donate" className="btn-earth">
                    Support the Mission
                  </a>
                  <a 
                    href="/ambassadors" 
                    className="inline-flex items-center justify-center gap-2 font-body font-semibold text-charcoal hover:text-secondary transition-colors"
                  >
                    Join the Community
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CommunityPage;
