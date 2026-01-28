import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Hair Growth Oil",
    benefit: "Supports healthy, nourished hair growth",
    price: "$28",
    bgColor: "bg-secondary/10",
    accentColor: "bg-secondary",
  },
  {
    id: 2,
    name: "Body Butter",
    benefit: "Deep moisture, plant-powered hydration",
    price: "$32",
    bgColor: "bg-primary/10",
    accentColor: "bg-primary",
  },
  {
    id: 3,
    name: "Face Serum",
    benefit: "Gentle glow from nature's best herbs",
    price: "$38",
    bgColor: "bg-accent/20",
    accentColor: "bg-accent",
  },
  {
    id: 4,
    name: "Healing Balm",
    benefit: "Soothing relief for skin & soul",
    price: "$24",
    bgColor: "bg-terracotta/10",
    accentColor: "bg-terracotta",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const QuickShop = () => {
  return (
    <section id="shop" className="section-padding bg-background">
      <div className="container-lyfe">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-secondary/10 text-secondary font-body font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Shop the Remedies
          </span>
          <h2 className="heading-section text-charcoal mb-4">
            Our Bestsellers
          </h2>
          <p className="body-large text-muted-foreground max-w-xl mx-auto">
            Crafted with intention. Rooted in nature.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              className="product-card group cursor-pointer"
            >
              {/* Product Image Area */}
              <div className={`${product.bgColor} aspect-square flex items-center justify-center relative overflow-hidden`}>
                <div className={`w-24 h-24 ${product.accentColor} rounded-full opacity-50`} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-charcoal/10">
                  <button className="bg-white text-charcoal px-4 py-2 rounded-full font-display font-bold text-sm flex items-center gap-2 shadow-medium">
                    <ShoppingBag className="w-4 h-4" />
                    Quick Add
                  </button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-charcoal mb-1">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-3">
                  {product.benefit}
                </p>
                <p className="font-display font-black text-xl text-secondary">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a href="#remedies" className="btn-outline-earth">
            View All Products
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickShop;
