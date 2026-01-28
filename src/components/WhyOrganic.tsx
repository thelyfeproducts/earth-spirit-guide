import { motion } from "framer-motion";
import { Leaf, Droplets, Heart, Shield, Sprout, Sun } from "lucide-react";
import { WhyOrganicHerbs } from "./FloatingHerbs";
import gardenGrowing from "@/assets/garden-growing.jpeg";
import gardenWeek1 from "@/assets/garden-week1.jpeg";
import gardenWeek2 from "@/assets/garden-week2.jpeg";

const benefits = [
  {
    icon: Leaf,
    title: "Plant-Infused",
    description: "Every ingredient comes from the Earth",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Shield,
    title: "No Chemicals",
    description: "Free from harmful synthetics",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Droplets,
    title: "Small-Batch",
    description: "Crafted with care, not mass-produced",
    color: "text-sky",
    bgColor: "bg-sky/10",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Intention in every formulation",
    color: "text-terracotta",
    bgColor: "bg-terracotta/10",
  },
  {
    icon: Sprout,
    title: "Earth-Respectful",
    description: "Sustainable practices always",
    color: "text-moss",
    bgColor: "bg-moss/10",
  },
  {
    icon: Sun,
    title: "Sun-Dried Herbs",
    description: "Traditional preparation methods",
    color: "text-accent",
    bgColor: "bg-accent/20",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const WhyOrganic = () => {
  return (
    <section id="why-organic" className="section-padding bg-card/50 relative overflow-hidden">
      <WhyOrganicHerbs />
      <div className="container-lyfe">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-accent/20 text-charcoal font-body font-semibold px-4 py-2 rounded-full text-sm mb-6">
            Why Organic Matters
          </span>
          <h2 className="heading-section mb-4">
            Nature Already
            <br />
            <span className="text-secondary">Knows</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            We believe the Earth has everything we need. Our job is simply to listen.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={item}
              className="lyfe-card flex items-start gap-4 group"
            >
              <div className={`${benefit.bgColor} p-4 rounded-2xl transition-transform group-hover:scale-110`}>
                <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
              </div>
              <div>
                <h3 className="heading-card mb-2">{benefit.title}</h3>
                <p className="font-body text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Garden Transformation Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <span className="inline-block bg-secondary/10 text-secondary font-body font-semibold px-4 py-2 rounded-full text-sm mb-4">
              Our Garden Journey
            </span>
            <h3 className="heading-card text-2xl md:text-3xl">
              From Bare Soil to Blooming Herbs
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { image: gardenWeek1, label: "The Beginning", desc: "Our garden beds with early plantings" },
              { image: gardenWeek2, label: "Preparing the Soil", desc: "Tilling and enriching the earth" },
              { image: gardenGrowing, label: "Thriving Garden", desc: "Rosemary and lavender flourishing" },
            ].map((stage, index) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
                  <img
                    src={stage.image}
                    alt={stage.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-body font-semibold text-secondary">Step {index + 1}</span>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="heading-card text-lg">{stage.label}</h4>
                  <p className="font-body text-muted-foreground text-sm">{stage.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Growing Our Own Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background rounded-3xl p-8 md:p-12 shadow-soft"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-secondary/10 text-secondary font-body font-semibold px-4 py-2 rounded-full text-sm mb-4">
                Growing Our Own
              </span>
              <h3 className="heading-card text-2xl md:text-3xl mb-4">
                From Our Garden to Your Hands
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                We decided to buy two garden beds to grow our own ingredients. This was a very hard task and took a lot of time and effort, but we decided to do it because we believe in growing our own ingredients that God gave us.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                We grew rosemary and lavender, nurturing each plant with care and intention. When you use our products, you're experiencing herbs that were planted, tended, and harvested by our own hands.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={gardenGrowing}
                alt="Growing our own herbs in the garden"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent/20 p-4 rounded-2xl">
                <Sprout className="w-8 h-8 text-secondary" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyOrganic;
