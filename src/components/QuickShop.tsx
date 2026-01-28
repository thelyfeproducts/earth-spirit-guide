import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

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
        const data = await fetchProducts(8);
        setProducts(data);
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
                  <Link to={`/product/${product.node.handle}`}>
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
                    <Link to={`/product/${product.node.handle}`}>
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
                        to={`/product/${product.node.handle}`}
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
          <Link to="/shop" className="btn-outline-earth">
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickShop;
