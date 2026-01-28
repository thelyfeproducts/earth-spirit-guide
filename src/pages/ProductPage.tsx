import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Loader2, ArrowLeft, Minus, Plus, Truck, Leaf, Star } from "lucide-react";
import { fetchProductByHandle, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LyfeBotWidget from "@/components/LyfeBot/LyfeBotWidget";
import RelatedProducts from "@/components/RelatedProducts";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      setLoading(true);
      setSelectedImage(0);
      setQuantity(1);
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
    window.scrollTo(0, 0);
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
        <div className="container-lyfe px-4">
          {/* Breadcrumb */}
          <Link 
            to="/collections/all-remedies" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Remedies
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
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

              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
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
              <div className="mb-6">
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
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-semibold mb-6"
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
              <div className="grid grid-cols-3 gap-4 text-center py-6 border-y border-border">
                <div>
                  <Leaf className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <p className="text-xs font-body font-semibold text-charcoal">100% Organic</p>
                </div>
                <div>
                  <Truck className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <p className="text-xs font-body font-semibold text-charcoal">Free Ship $50+</p>
                </div>
                <div>
                  <span className="text-lg">✋</span>
                  <p className="text-xs font-body font-semibold text-charcoal">Handmade</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product Details Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <Tabs defaultValue="ingredients" className="w-full">
              <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0 gap-8">
                <TabsTrigger 
                  value="ingredients"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-secondary rounded-none pb-3 px-0 font-body font-semibold"
                >
                  Ingredients
                </TabsTrigger>
                <TabsTrigger 
                  value="how-to-use"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-secondary rounded-none pb-3 px-0 font-body font-semibold"
                >
                  How to Use
                </TabsTrigger>
                <TabsTrigger 
                  value="shipping"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-secondary rounded-none pb-3 px-0 font-body font-semibold"
                >
                  Shipping
                </TabsTrigger>
                <TabsTrigger 
                  value="reviews"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-secondary rounded-none pb-3 px-0 font-body font-semibold"
                >
                  Reviews
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="ingredients" className="mt-6">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-display font-bold text-lg mb-4">Key Ingredients</h3>
                  <ul className="space-y-3 font-body text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-secondary">•</span>
                      <span><strong className="text-charcoal">Mango Butter</strong> — Deeply moisturizing, rich in vitamins A and E</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary">•</span>
                      <span><strong className="text-charcoal">Shea Butter</strong> — Nourishing, anti-inflammatory, skin-softening</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary">•</span>
                      <span><strong className="text-charcoal">Jojoba Oil</strong> — Mimics natural skin oils, fast-absorbing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary">•</span>
                      <span><strong className="text-charcoal">Hemp Seed Oil</strong> — Omega-rich, supports skin barrier</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary">•</span>
                      <span><strong className="text-charcoal">Herbal Infusion</strong> — Lavender, rosemary, cloves, fenugreek</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary">•</span>
                      <span><strong className="text-charcoal">Vitamin E</strong> — Antioxidant protection</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="how-to-use" className="mt-6">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-display font-bold text-lg mb-4">How to Use</h3>
                  <ol className="space-y-4 font-body text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center">1</span>
                      <span>Scoop a small amount with clean, dry fingers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center">2</span>
                      <span>Warm between your palms until it melts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center">3</span>
                      <span>Apply to clean skin, massaging in gentle circular motions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center">4</span>
                      <span>Best used after shower when pores are open</span>
                    </li>
                  </ol>
                  <p className="mt-4 text-sm text-muted-foreground italic">
                    A little goes a long way! Start with less, add more as needed.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="shipping" className="mt-6">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-display font-bold text-lg mb-4">Shipping Information</h3>
                  <div className="space-y-4 font-body text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <Truck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-charcoal">Free Shipping on Orders $50+</p>
                        <p className="text-sm">Standard shipping within the continental US</p>
                      </div>
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="mb-2"><strong className="text-charcoal">Processing Time:</strong> 1-3 business days</p>
                      <p className="mb-2"><strong className="text-charcoal">Standard Shipping:</strong> 5-7 business days</p>
                      <p><strong className="text-charcoal">Express Shipping:</strong> 2-3 business days (additional cost)</p>
                    </div>
                    <p className="text-sm italic">
                      Orders are lovingly packed by hand. Thank you for supporting small batch wellness!
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="bg-card rounded-2xl p-6 border border-border text-center">
                  <div className="flex justify-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 text-muted-foreground/30" />
                    ))}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">No Reviews Yet</h3>
                  <p className="font-body text-muted-foreground">
                    Be the first to share your experience with this remedy!
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <RelatedProducts 
            currentProductId={product.id} 
            currentProductTitle={product.title} 
          />
        </div>
      </main>

      <Footer />
      <LyfeBotWidget />
    </div>
  );
};

export default ProductPage;
