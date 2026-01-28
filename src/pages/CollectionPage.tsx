import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader2, ShoppingBag } from "lucide-react";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LyfeBotWidget from "@/components/LyfeBot/LyfeBotWidget";

interface CollectionConfig {
  title: string;
  description: string;
  query?: string;
}

const collections: Record<string, CollectionConfig> = {
  "all-remedies": {
    title: "All Remedies",
    description: "Our complete collection of handcrafted, organic wellness products.",
  },
  "hair-growth-serums": {
    title: "Hair Growth Serums",
    description: "Nourish your scalp and support healthy hair growth with our herbal-infused oils.",
    query: "title:Hair Growth OR title:Serum",
  },
  "body-butters": {
    title: "Body Butters",
    description: "Deep, plant-powered hydration for soft, nourished skin all day long.",
    query: "title:Body Butter",
  },
  "bundles": {
    title: "Bundles",
    description: "Save more with our curated remedy bundles, perfect for gifting or self-care routines.",
    query: "title:Bundle OR title:Trio OR title:Duo OR title:Collection OR title:Essentials",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const CollectionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const { addItem, isLoading: cartLoading } = useCartStore();
  const [addingProduct, setAddingProduct] = useState<string | null>(null);

  const collection = slug ? collections[slug] : null;

  useEffect(() => {
    const loadProducts = async () => {
      if (!collection) return;
      setLoading(true);
      try {
        const data = await fetchProducts(50, collection.query);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [slug, collection?.query]);

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

  if (!collection) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container-lyfe py-40 text-center">
          <h1 className="heading-section mb-4">Collection Not Found</h1>
          <Link to="/collections/all-remedies" className="btn-earth">
            View All Remedies
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-transparent py-16">
          <div className="container-lyfe px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display font-black text-4xl md:text-5xl text-charcoal mb-4"
            >
              {collection.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-body text-muted-foreground max-w-2xl mx-auto text-lg"
            >
              {collection.description}
            </motion.p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container-lyfe px-4">
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-secondary" />
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground font-body text-lg mb-4">No products found in this collection.</p>
                <Link to="/collections/all-remedies" className="btn-earth">
                  View All Remedies
                </Link>
              </div>
            ) : (
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {products.map((product) => {
                  const imageUrl = product.node.images.edges[0]?.node.url;
                  const price = product.node.priceRange.minVariantPrice;
                  const isAdding = addingProduct === product.node.id;

                  return (
                    <motion.div
                      key={product.node.id}
                      variants={item}
                      className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
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
                              <div className="w-24 h-24 bg-secondary rounded-full opacity-50" />
                            </div>
                          )}
                        </div>
                      </Link>
                      
                      <div className="p-5">
                        <Link to={`/products/${product.node.handle}`}>
                          <h3 className="font-display font-bold text-lg text-charcoal mb-2 line-clamp-2 hover:text-secondary transition-colors">
                            {product.node.title}
                          </h3>
                        </Link>
                        <p className="font-body text-muted-foreground text-sm mb-4 line-clamp-2">
                          {product.node.description || "Organic, handcrafted wellness"}
                        </p>
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-display font-bold text-xl text-secondary">
                            ${parseFloat(price.amount).toFixed(2)}
                          </span>
                          <button
                            onClick={() => handleAddToCart(product)}
                            disabled={isAdding || cartLoading}
                            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-body font-semibold text-sm hover:bg-secondary/90 transition-colors disabled:opacity-50"
                          >
                            {isAdding ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <ShoppingBag className="w-4 h-4" />
                            )}
                            Add
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <LyfeBotWidget />
    </div>
  );
};

export default CollectionPage;
