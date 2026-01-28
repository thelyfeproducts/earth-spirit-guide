import { motion } from "framer-motion";
import { Leaf, Droplets, Heart, Shield, Sprout, Sun } from "lucide-react";
import { WhyOrganicHerbs } from "./FloatingHerbs";

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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
      </div>
    </section>
  );
};

export default WhyOrganic;
