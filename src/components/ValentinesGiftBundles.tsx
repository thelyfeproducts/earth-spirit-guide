import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Gift, Sparkles, ShoppingBag, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const giftCategories = [
  {
    id: "for-her",
    title: "For Her",
    subtitle: "Luxurious self-care",
    icon: Heart,
    gradient: "from-primary/20 to-accent/10",
    matchTerms: ["velvet kiss", "slow burn", "vanilla bean"],
  },
  {
    id: "for-him",
    title: "For Him",
    subtitle: "Refined grooming",
    icon: Sparkles,
    gradient: "from-secondary/20 to-primary/10",
    matchTerms: ["midnight jazz", "sandalwood", "black butter"],
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

const ValentinesGiftBundles = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("for-her");
  const [displayProducts, setDisplayProducts] = useState<ShopifyProduct[]>([]);
  const { addItem, isLoading: cartLoading } = useCartStore();
  const [addingProduct, setAddingProduct] = useState<string | null>(null);

  // Fetch products once on mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        // Fetch more products to ensure we get all Valentine's items
        const data = await fetchProducts(100);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  // Filter products when category changes or products load
  useEffect(() => {
    if (products.length === 0) {
      setDisplayProducts([]);
      return;
    }

    const category = giftCategories.find(c => c.id === activeCategory);
    if (!category) {
      setDisplayProducts([]);
      return;
    }

    const matchingProducts = products.filter(p => {
      const title = p.node.title.toLowerCase();

      // Exclude bundles, duos, and trios
      if (title.includes('bundle') || title.includes('duo') || title.includes('trio')) {
        return false;
      }

      // Check if title matches any of the category terms
      return category.matchTerms.some(term => title.includes(term));
    });

    // Sort products by matchTerms order (first term = first position)
    const sortedProducts = matchingProducts.sort((a, b) => {
      const titleA = a.node.title.toLowerCase();
      const titleB = b.node.title.toLowerCase();
      const indexA = category.matchTerms.findIndex(term => titleA.includes(term));
      const indexB = category.matchTerms.findIndex(term => titleB.includes(term));
      return indexA - indexB;
    });

    setDisplayProducts(sortedProducts.slice(0, 3));
  }, [activeCategory, products]);

  const handleAddToCart = async (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant || !variant.availableForSale) {
      toast.error("This product is currently unavailable");
      return;
    }

    setAddingProduct(product.node.id);
    try {
      await addItem({
        product,
        variantId: variant.id,
        variantTitle: variant.title,
        price: variant.price,
        quantity: 1,
        selectedOptions: variant.selectedOptions || [],
      });
      toast.success(`${product.node.title} added to cart!`);
    } catch (error) {
      toast.error("Failed to add item to cart");
    } finally {
      setAddingProduct(null);
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
      {/* Decorative hearts */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <Heart className="absolute w-12 h-12 text-primary/20 top-10 left-[5%] animate-pulse" fill="currentColor" />
        <Heart className="absolute w-8 h-8 text-secondary/20 top-20 right-[10%] animate-pulse delay-300" fill="currentColor" />
        <Heart className="absolute w-10 h-10 text-accent/20 bottom-20 left-[15%] animate-pulse delay-500" fill="currentColor" />
      </div>

      <div className="container-lyfe relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-body font-semibold px-4 py-2 rounded-full text-sm mb-6">
            <Heart className="w-4 h-4" fill="currentColor" />
            Valentine's Gift Guide
          </span>
          <h2 className="heading-section mb-4">
            Give the Gift of
            <br />
            <span className="text-secondary">Self-Care</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Curated collections perfect for everyone you love — including yourself.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 md:gap-4 mb-10 flex-wrap">
          {giftCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-body font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-secondary text-secondary-foreground shadow-lg scale-105"
                    : "bg-card text-charcoal hover:bg-secondary/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-secondary" />
          </div>
        ) : displayProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground font-body">No gift sets available yet</p>
          </div>
        ) : (
          <motion.div
            key={activeCategory}
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-3 gap-6"
          >
            {displayProducts.map((product, index) => {
              const imageUrl = product.node.images.edges[0]?.node.url;
              const price = product.node.priceRange.minVariantPrice;
              const isAdding = addingProduct === product.node.id;
              const category = giftCategories.find(c => c.id === activeCategory);

              return (
                <motion.div
                  key={product.node.id}
                  variants={item}
                  className={`product-card group relative overflow-hidden bg-gradient-to-br ${category?.gradient || 'from-primary/10 to-accent/10'}`}
                >
                  {/* Valentine's badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-body font-bold">
                    <Heart className="w-3 h-3" fill="currentColor" />
                    Valentine's Pick
                  </div>

                  <Link to={`/products/${product.node.handle}`}>
                    <div className="h-64 flex items-center justify-center relative overflow-hidden">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={product.node.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-32 h-32 bg-secondary/20 rounded-full flex items-center justify-center">
                          <Gift className="w-12 h-12 text-secondary" />
                        </div>
                      )}
                    </div>
                  </Link>

                  {/* Quick Add */}
                  <motion.button
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                    disabled={isAdding || cartLoading}
                    className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-6 py-2.5 rounded-full font-body font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 disabled:opacity-50 shadow-lg"
                  >
                    {isAdding ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <ShoppingBag className="w-4 h-4" />
                    )}
                    {isAdding ? "Adding..." : "Add to Cart"}
                  </motion.button>

                  <div className="p-5 bg-card">
                    <Link to={`/products/${product.node.handle}`}>
                      <h3 className="heading-card mb-2 line-clamp-2 hover:text-secondary transition-colors">
                        {product.node.title}
                      </h3>
                    </Link>
                    <p className="font-body text-muted-foreground text-sm mb-3 line-clamp-2">
                      {product.node.description || "Perfect for your Valentine"}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-xl text-secondary">
                        ${parseFloat(price.amount).toFixed(2)}
                      </span>
                      <Link
                        to={`/products/${product.node.handle}`}
                        className="text-sm font-body font-semibold text-primary hover:text-secondary transition-colors"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link to="/collections/valentines" className="btn-earth inline-flex items-center gap-2">
            <Heart className="w-5 h-5" />
            Shop All Valentine's Gifts
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ValentinesGiftBundles;
