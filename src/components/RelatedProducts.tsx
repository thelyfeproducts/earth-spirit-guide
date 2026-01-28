import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader2, ShoppingBag } from "lucide-react";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

interface RelatedProductsProps {
  currentProductId: string;
  currentProductTitle: string;
}

const RelatedProducts = ({ currentProductId, currentProductTitle }: RelatedProductsProps) => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const { addItem, isLoading: cartLoading } = useCartStore();
  const [addingProduct, setAddingProduct] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        // Determine query based on product title
        let query = "";
        if (currentProductTitle.toLowerCase().includes("butter")) {
          query = "title:Body Butter";
        } else if (currentProductTitle.toLowerCase().includes("hair") || currentProductTitle.toLowerCase().includes("serum")) {
          query = "title:Hair Growth OR title:Serum";
        } else if (currentProductTitle.toLowerCase().includes("bundle") || currentProductTitle.toLowerCase().includes("trio")) {
          query = "title:Bundle OR title:Trio";
        }
        
        const data = await fetchProducts(8, query);
        // Filter out current product
        const filtered = data.filter(p => p.node.id !== currentProductId).slice(0, 4);
        setProducts(filtered);
      } catch (error) {
        console.error("Failed to fetch related products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [currentProductId, currentProductTitle]);

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

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-secondary" />
      </div>
    );
  }

  if (products.length === 0) return null;

  return (
    <section className="py-16 bg-card/50">
      <div className="container-lyfe px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black text-2xl md:text-3xl text-charcoal text-center mb-10"
        >
          You May Also Like
        </motion.h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const imageUrl = product.node.images.edges[0]?.node.url;
            const price = product.node.priceRange.minVariantPrice;
            const isAdding = addingProduct === product.node.id;

            return (
              <motion.div
                key={product.node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
              >
                <Link to={`/products/${product.node.handle}`}>
                  <div className="aspect-square bg-secondary/10 relative overflow-hidden">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={product.node.images.edges[0]?.node.altText || product.node.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-20 h-20 bg-secondary rounded-full opacity-50" />
                      </div>
                    )}
                  </div>
                </Link>
                
                <div className="p-4">
                  <Link to={`/products/${product.node.handle}`}>
                    <h3 className="font-display font-bold text-sm text-charcoal mb-1 line-clamp-2 hover:text-secondary transition-colors">
                      {product.node.title}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-between gap-2 mt-3">
                    <span className="font-display font-bold text-lg text-secondary">
                      ${parseFloat(price.amount).toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={isAdding || cartLoading}
                      className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 transition-colors disabled:opacity-50"
                    >
                      {isAdding ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <ShoppingBag className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
