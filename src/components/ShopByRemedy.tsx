import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Droplets, Leaf, Package } from "lucide-react";

const categories = [
  {
    name: "Hair Growth Serums",
    description: "Nourish your scalp with herbal-infused oils",
    href: "/collections/hair-growth-serums",
    icon: Droplets,
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    name: "Body Butters",
    description: "Deep, plant-powered hydration",
    href: "/collections/body-butters",
    icon: Leaf,
    bgColor: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    name: "Bundles",
    description: "Curated sets for complete care",
    href: "/collections/bundles",
    icon: Package,
    bgColor: "bg-terracotta/10",
    iconColor: "text-terracotta",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const ShopByRemedy = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-lyfe">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-section mb-4">Shop by Remedy</h2>
          <p className="body-large max-w-2xl mx-auto">
            Find the perfect remedy for your wellness journey
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.name} variants={item}>
                <Link
                  to={category.href}
                  className={`block ${category.bgColor} rounded-3xl p-8 lg:p-10 text-center hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-border`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-background shadow-sm mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${category.iconColor}`} />
                  </div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-charcoal mb-3">
                    {category.name}
                  </h3>
                  <p className="font-body text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <span className="font-body font-semibold text-secondary group-hover:underline">
                    Shop Now →
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ShopByRemedy;
