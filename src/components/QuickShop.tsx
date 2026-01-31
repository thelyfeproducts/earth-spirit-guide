import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import ValentinesBadge, { getValentineBadgeType } from "./ValentinesBadge";

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
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const { addItem, isLoading: cartLoading } = useCartStore();
  const [addingProduct, setAddingProduct] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        // Fetch products and filter to show variety with hair growth serums
        const data = await fetchProducts(20);
        
        // Filter out Peppermint Bark and prioritize hair growth products
        const filtered = data.filter(p => 
          !p.node.title.toLowerCase().includes('peppermint bark') &&
          !p.node.title.toLowerCase().includes('masculine grooming bundle') &&
          !p.node.title.toLowerCase().includes('herbal hair growth oil duo')
        );
        
        // Sort to put pumpkin spice first, then hair growth products
        const sorted = filtered.sort((a, b) => {
          const aIsPumpkin = a.node.title.toLowerCase().includes('pumpkin spice');
          const bIsPumpkin = b.node.title.toLowerCase().includes('pumpkin spice');
          if (aIsPumpkin && !bIsPumpkin) return -1;
          if (!aIsPumpkin && bIsPumpkin) return 1;
          
          const aIsHair = a.node.title.toLowerCase().includes('hair') || a.node.title.toLowerCase().includes('growth');
          const bIsHair = b.node.title.toLowerCase().includes('hair') || b.node.title.toLowerCase().includes('growth');
          if (aIsHair && !bIsHair) return -1;
          if (!aIsHair && bIsHair) return 1;
          return 0;
        });
        // Ensure we have a multiple of 4 for even grid display
        const count = Math.min(sorted.length, 12);
        const evenCount = Math.floor(count / 4) * 4;
        setProducts(sorted.slice(0, evenCount || 4));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

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

  const bgColors = [
    "bg-secondary/10",
    "bg-primary/10",
    "bg-accent/20",
    "bg-terracotta/10",
  ];

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

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-secondary" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground font-body">No products found</p>
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products.map((product, index) => {
              const imageUrl = product.node.images.edges[0]?.node.url;
              const price = product.node.priceRange.minVariantPrice;
              const isAdding = addingProduct === product.node.id;

              return (
                <motion.div
                  key={product.node.id}
                  variants={item}
                  className="product-card group cursor-pointer"
                >
                      <Link to={`/products/${product.node.handle}`}>
                        <div className={`${bgColors[index % 4]} h-56 flex items-center justify-center relative overflow-hidden`}>
                          {imageUrl ? (
                            <img
                              src={imageUrl}
                              alt={product.node.images.edges[0]?.node.altText || product.node.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-24 h-24 bg-secondary rounded-full opacity-50" />
                          )}
                          {/* Valentine's Badge */}
                          {getValentineBadgeType(product.node.title) && (
                            <div className="absolute top-3 left-3 z-10">
                              <ValentinesBadge type={getValentineBadgeType(product.node.title)!} />
                            </div>
                          )}
                        </div>
                      </Link>
                  
                  {/* Quick Add Button */}
                  <motion.button
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                    disabled={isAdding || cartLoading}
                    className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-6 py-2 rounded-full font-body font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 disabled:opacity-50"
                  >
                    {isAdding ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <ShoppingBag className="w-4 h-4" />
                    )}
                    {isAdding ? "Adding..." : "Quick Add"}
                  </motion.button>
                  
                  {/* Product Info */}
                  <div className="p-5">
                      <Link to={`/products/${product.node.handle}`}>
                        <h3 className="heading-card mb-2 line-clamp-2 hover:text-secondary transition-colors">
                          {product.node.title}
                        </h3>
                      </Link>
                      <p className="font-body text-muted-foreground text-sm mb-3 line-clamp-2">
                        {product.node.description || "Natural, handcrafted wellness"}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/collections/all-remedies" className="btn-outline-earth">
            View All Remedies
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickShop;
