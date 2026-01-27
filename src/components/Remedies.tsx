import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";

const remedies = [
  {
    id: 1,
    name: "Rosemary Hair Growth Oil",
    tagline: "Infused with herbs for luscious locks",
    price: "$28",
    rating: 4.9,
    reviews: 127,
    tag: "Bestseller",
    bgColor: "bg-secondary/15",
  },
  {
    id: 2,
    name: "Lavender Body Butter",
    tagline: "Deep moisture meets calming aromatherapy",
    price: "$32",
    rating: 4.8,
    reviews: 89,
    tag: "New",
    bgColor: "bg-primary/10",
  },
  {
    id: 3,
    name: "Turmeric Glow Serum",
    tagline: "Radiance from Earth's golden treasure",
    price: "$38",
    rating: 4.9,
    reviews: 156,
    tag: "Popular",
    bgColor: "bg-accent/20",
  },
  {
    id: 4,
    name: "Chamomile Healing Balm",
    tagline: "Gentle relief for irritated skin",
    price: "$24",
    rating: 4.7,
    reviews: 64,
    tag: null,
    bgColor: "bg-terracotta/10",
  },
  {
    id: 5,
    name: "Aloe Hydration Mist",
    tagline: "Refreshing burst of plant hydration",
    price: "$22",
    rating: 4.8,
    reviews: 98,
    tag: null,
    bgColor: "bg-moss/10",
  },
  {
    id: 6,
    name: "Tea Tree Spot Treatment",
    tagline: "Nature's solution for blemishes",
    price: "$18",
    rating: 4.6,
    reviews: 73,
    tag: null,
    bgColor: "bg-sky/10",
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Remedies = () => {
  return (
    <section id="remedies" className="section-padding">
      <div className="container-lyfe">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-secondary/10 text-secondary font-body font-semibold px-4 py-2 rounded-full text-sm mb-6">
            Our Remedies
          </span>
          <h2 className="heading-section mb-4">
            Earth's Healing
            <br />
            <span className="text-secondary">Gifts</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Prepared in small batches with plant-infused intention.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {remedies.map((remedy) => (
            <motion.div
              key={remedy.id}
              variants={item}
              className="product-card group"
            >
              {/* Product Image */}
              <div className={`${remedy.bgColor} h-64 relative overflow-hidden`}>
                {remedy.tag && (
                  <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-body font-bold">
                    {remedy.tag}
                  </span>
                )}
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-card/60 flex items-center justify-center">
                    <span className="font-display font-bold text-charcoal/50 text-center text-sm px-4">
                      {remedy.name.split(" ")[0]}
                    </span>
                  </div>
                </div>

                {/* Hover Add to Cart */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <button className="w-full bg-secondary text-secondary-foreground py-3 rounded-full font-body font-bold flex items-center justify-center gap-2 hover:bg-secondary/90 transition-colors">
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </button>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="heading-card mb-2">{remedy.name}</h3>
                <p className="font-body text-muted-foreground text-sm mb-4">
                  {remedy.tagline}
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(remedy.rating)
                            ? "text-accent fill-accent"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-body text-sm text-muted-foreground">
                    ({remedy.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-2xl text-secondary">
                    {remedy.price}
                  </span>
                  <button className="font-body font-semibold text-primary hover:text-secondary transition-colors">
                    Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Remedies;
