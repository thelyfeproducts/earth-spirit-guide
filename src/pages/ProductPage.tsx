import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Loader2, ArrowLeft, Minus, Plus } from "lucide-react";
import { fetchProductByHandle, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LyfeBotWidget from "@/components/LyfeBot/LyfeBotWidget";
import { Button } from "@/components/ui/button";

const ProductPage = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct['node'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem, isLoading: cartLoading } = useCartStore();

  useEffect(() => {
    const loadProduct = async () => {
      if (!handle) return;
      try {
        const data = await fetchProductByHandle(handle);
        setProduct(data);
        if (data?.variants.edges[0]) {
          setSelectedVariant(data.variants.edges[0].node.id);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [handle]);

  const handleAddToCart = async () => {
    if (!product || !selectedVariant) return;
    
    const variant = product.variants.edges.find(v => v.node.id === selectedVariant)?.node;
    if (!variant || !variant.availableForSale) {
      toast.error("This variant is currently unavailable");
      return;
    }

    try {
      await addItem({
        product: { node: product } as ShopifyProduct,
        variantId: variant.id,
        variantTitle: variant.title,
        price: variant.price,
        quantity,
        selectedOptions: variant.selectedOptions || [],
      });
      toast.success(`${product.title} added to cart!`);
    } catch (error) {
      toast.error("Failed to add item to cart");
    }
  };

  const currentVariant = product?.variants.edges.find(v => v.node.id === selectedVariant)?.node;

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex justify-center items-center py-40">
          <Loader2 className="w-8 h-8 animate-spin text-secondary" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container-lyfe py-40 text-center">
          <h1 className="heading-section mb-4">Product Not Found</h1>
          <Link to="/#shop" className="btn-earth">
            Back to Shop
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
        <div className="container-lyfe px-4">
          {/* Back Link */}
          <Link 
            to="/#shop" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-secondary/10 rounded-2xl overflow-hidden aspect-square mb-4">
                {product.images.edges[selectedImage]?.node.url ? (
                  <img
                    src={product.images.edges[selectedImage].node.url}
                    alt={product.images.edges[selectedImage].node.altText || product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-secondary rounded-full opacity-50" />
                  </div>
                )}
              </div>
              
              {/* Image Thumbnails */}
              {product.images.edges.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.images.edges.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === idx ? 'border-secondary' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={img.node.url}
                        alt={img.node.altText || `${product.title} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              <h1 className="font-display font-black text-3xl md:text-4xl text-charcoal mb-4">
                {product.title}
              </h1>
              
              <p className="font-display font-bold text-3xl text-secondary mb-6">
                ${parseFloat(currentVariant?.price.amount || product.priceRange.minVariantPrice.amount).toFixed(2)}
              </p>

              <p className="font-body text-muted-foreground mb-8 leading-relaxed">
                {product.description || "Handcrafted with organic ingredients, designed to nourish your body naturally."}
              </p>

              {/* Variant Selection */}
              {product.options.length > 0 && product.options[0].name !== "Title" && (
                <div className="mb-6">
                  {product.options.map((option) => (
                    <div key={option.name} className="mb-4">
                      <label className="font-body font-semibold text-sm mb-2 block">
                        {option.name}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {option.values.map((value) => {
                          const matchingVariant = product.variants.edges.find(v =>
                            v.node.selectedOptions.some(
                              opt => opt.name === option.name && opt.value === value
                            )
                          );
                          const isSelected = currentVariant?.selectedOptions.some(
                            opt => opt.name === option.name && opt.value === value
                          );
                          
                          return (
                            <button
                              key={value}
                              onClick={() => matchingVariant && setSelectedVariant(matchingVariant.node.id)}
                              className={`px-4 py-2 rounded-full border font-body text-sm transition-colors ${
                                isSelected
                                  ? 'bg-secondary text-secondary-foreground border-secondary'
                                  : 'border-border hover:border-secondary'
                              }`}
                            >
                              {value}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <label className="font-body font-semibold text-sm mb-2 block">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="font-body font-semibold text-lg w-12 text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                onClick={handleAddToCart}
                disabled={cartLoading || !currentVariant?.availableForSale}
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-semibold"
              >
                {cartLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    {currentVariant?.availableForSale ? "Add to Cart" : "Out of Stock"}
                  </>
                )}
              </Button>

              {/* Trust badges */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="font-display font-bold text-primary">🌿 Organic</p>
                    <p className="text-xs text-muted-foreground font-body">100% Natural</p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-primary">✋ Handmade</p>
                    <p className="text-xs text-muted-foreground font-body">Small Batch</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
      <LyfeBotWidget />
    </div>
  );
};

export default ProductPage;
