import { motion } from "framer-motion";
import { Leaf, Heart, FlaskConical, Sparkles } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Recognizable Ingredients",
    description: "Simple, organic ingredients you can actually pronounce. No mystery chemicals, ever.",
  },
  {
    icon: Heart,
    title: "Gentle on Skin",
    description: "Formulated for sensitive skin. Nourishing without irritation or harsh reactions.",
  },
  {
    icon: FlaskConical,
    title: "Small Batch Made",
    description: "Crafted in small batches with care and intention. Quality over quantity, always.",
  },
  {
    icon: Sparkles,
    title: "Plant-Based Care",
    description: "Harnessing the healing power of plants. Nature's remedies, bottled with love.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const WhyOrganic = () => {
  return (
    <section id="why-organic" className="section-padding gradient-blue relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-lyfe relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-body font-medium text-white/70 uppercase tracking-widest text-sm mb-4 block">
            Our Approach
          </span>
          <h2 className="heading-section text-white mb-4">
            Why Go Organic?
          </h2>
          <p className="body-large text-white/80 max-w-2xl mx-auto">
            Nature has perfected healing over millions of years. We simply bottle that wisdom.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={item}
              className="value-card text-left flex flex-col items-start"
            >
              <div className="icon-badge mb-6">
                <value.icon className="w-7 h-7 text-charcoal" strokeWidth={2.5} />
              </div>
              <h3 className="heading-card text-white mb-3">
                {value.title}
              </h3>
              <p className="font-body text-white/75 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyOrganic;
