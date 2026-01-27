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
    <section id="shop" className="section-padding bg-card/50">
      <div className="container-lyfe">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-section mb-4">Our Bestsellers</h2>
          <p className="body-large max-w-2xl mx-auto">
            Crafted to support your body, not fight it.
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
              {/* Product Image Placeholder */}
              <div className={`${product.bgColor} h-56 flex items-center justify-center relative overflow-hidden`}>
                <div className={`w-24 h-24 ${product.accentColor} rounded-full opacity-50`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-bold text-charcoal/60 text-lg">
                    {product.name.split(" ")[0]}
                  </span>
                </div>
                
                {/* Quick Add Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-6 py-2 rounded-full font-body font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Quick Add
                </motion.button>
              </div>
              
              {/* Product Info */}
              <div className="p-5">
                <h3 className="heading-card mb-2">{product.name}</h3>
                <p className="font-body text-muted-foreground text-sm mb-3">
                  {product.benefit}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-xl text-secondary">
                    {product.price}
                  </span>
                  <button className="text-sm font-body font-semibold text-primary hover:text-secondary transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#remedies" className="btn-outline-earth">
            View All Remedies
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickShop;
