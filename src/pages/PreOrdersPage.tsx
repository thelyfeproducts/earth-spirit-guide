import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2, ShoppingBag, Clock, Bell, CheckCircle, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LyfeBotWidget from "@/components/LyfeBot/LyfeBotWidget";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Email validation schema
const emailSchema = z.string().trim().email("Please enter a valid email address").max(255);

// ============================================
// 🎁 SEASONAL DROP CONFIGURATION
// Update these values for each holiday drop
// ============================================
const DROP_CONFIG = {
  // Drop details
  name: "Valentine's Day Collection",
  tagline: "Limited edition romantic scents crafted with love",
  date: new Date("2026-02-14T00:00:00"),
  slug: "valentines-2026",
  
  // Styling theme (valentines | spring | summer | fall | winter | holiday)
  theme: "valentines" as const,
  
  // Product search terms - Valentine's scents
  searchTerms: ["slow burn", "velvet kiss", "midnight jazz", "sandalwood", "vanilla bean", "black butter", "valentine"],
  
  // Exclude bundles, trios, duos, etc. (except allowed ones)
  excludeTerms: ["trio", "duo", "collection", "essentials", "grooming", "holiday", "radiance", "masculine", "autumn", "fall", "seasonal", "complete"],
  
  // Allowed bundles (exceptions to the exclude rule) - Valentine's Romance Trio is allowed
  allowedBundles: ["valentine's romance trio", "valentines romance trio"],
  
  // Badge text
  badgeText: "Pre-order",
  buttonText: "Pre-order",
};
// ============================================

const themeStyles = {
  valentines: {
    gradient: "from-[#C4213B]/10 via-[#8C2339]/5 to-transparent",
    badgeBg: "bg-[#C4213B]",
    badgeText: "text-white",
    accentColor: "text-[#C4213B]",
    buttonBg: "bg-[#C4213B] hover:bg-[#8C2339]",
    icon: Heart,
  },
  spring: {
    gradient: "from-green-100 via-emerald-50 to-transparent",
    badgeBg: "bg-emerald-500",
    badgeText: "text-white",
    accentColor: "text-emerald-600",
    buttonBg: "bg-emerald-500 hover:bg-emerald-600",
    icon: Clock,
  },
  summer: {
    gradient: "from-amber-100 via-orange-50 to-transparent",
    badgeBg: "bg-amber-500",
    badgeText: "text-white",
    accentColor: "text-amber-600",
    buttonBg: "bg-amber-500 hover:bg-amber-600",
    icon: Clock,
  },
  fall: {
    gradient: "from-orange-100 via-amber-50 to-transparent",
    badgeBg: "bg-orange-600",
    badgeText: "text-white",
    accentColor: "text-orange-600",
    buttonBg: "bg-orange-600 hover:bg-orange-700",
    icon: Clock,
  },
  winter: {
    gradient: "from-sky-100 via-blue-50 to-transparent",
    badgeBg: "bg-sky-500",
    badgeText: "text-white",
    accentColor: "text-sky-600",
    buttonBg: "bg-sky-500 hover:bg-sky-600",
    icon: Clock,
  },
  holiday: {
    gradient: "from-red-100 via-green-50 to-transparent",
    badgeBg: "bg-red-600",
    badgeText: "text-white",
    accentColor: "text-red-600",
    buttonBg: "bg-red-600 hover:bg-red-700",
    icon: Clock,
  },
};

const currentTheme = themeStyles[DROP_CONFIG.theme];
const ThemeIcon = currentTheme.icon;

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): CountdownTime | null => {
  const difference = targetDate.getTime() - new Date().getTime();
  
  if (difference <= 0) return null;
  
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
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

const PreOrdersPage = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState<CountdownTime | null>(calculateTimeLeft(DROP_CONFIG.date));
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { addItem, isLoading: cartLoading } = useCartStore();
  const [addingProduct, setAddingProduct] = useState<string | null>(null);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(DROP_CONFIG.date));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch pre-order products based on search terms
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        // Fetch all products and filter client-side for reliability
        const data = await fetchProducts(100);
        const filtered = data.filter((p) => {
          const title = p.node.title.toLowerCase();
          // Must match a Valentine's scent term
          const matchesScent = DROP_CONFIG.searchTerms.some((term) => title.includes(term.toLowerCase()));
          // Check if it's an allowed bundle (exception)
          const isAllowedBundle = DROP_CONFIG.allowedBundles.some((term) => title.includes(term.toLowerCase()));
          // Check if it's a disallowed bundle/trio/duo
          const isExcludedBundle = DROP_CONFIG.excludeTerms.some((term) => title.includes(term.toLowerCase()));
          // Include if: matches scent AND (is allowed bundle OR not an excluded bundle)
          return matchesScent && (isAllowedBundle || !isExcludedBundle);
        });
        
        // Sort: Velvet Kiss first, then Midnight Jazz, then Slow Burn (individual), then Valentine's Trio, then others
        // Note: More specific matches first to avoid false positives
        const priorityOrder = [
          { term: "velvet kiss", exclude: "trio" },
          { term: "midnight jazz", exclude: "trio" },
          { term: "slow burn", exclude: "trio" },
          { term: "valentine's romance trio", exclude: null },
        ];
        
        filtered.sort((a, b) => {
          const titleA = a.node.title.toLowerCase();
          const titleB = b.node.title.toLowerCase();
          
          const getPriority = (title: string) => {
            for (let i = 0; i < priorityOrder.length; i++) {
              const { term, exclude } = priorityOrder[i];
              if (title.includes(term) && (!exclude || !title.includes(exclude))) {
                return i;
              }
            }
            return priorityOrder.length; // Not in priority list
          };
          
          return getPriority(titleA) - getPriority(titleB);
        });
        
        setProducts(filtered);
      } catch (error) {
        console.error("Failed to fetch pre-order products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const handleNotifyMe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    setIsSubscribing(true);
    try {
      const { error } = await supabase
        .from("preorder_signups")
        .insert({ email: result.data, collection_slug: DROP_CONFIG.slug });

      if (error) throw error;

      setIsSubscribed(true);
      setEmail("");
      toast.success("You're on the list!", {
        description: "We'll notify you when the drop goes live.",
      });
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

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
      toast.success(`${product.node.title} pre-ordered!`);
    } catch (error) {
      toast.error("Failed to add item to cart");
    } finally {
      setAddingProduct(null);
    }
  };

  const isDropLive = !timeLeft;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section with Countdown */}
        <section className={`bg-gradient-to-b ${currentTheme.gradient} py-16 md:py-24`}>
          <div className="container-lyfe px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-flex items-center gap-2 ${currentTheme.badgeBg}/20 ${currentTheme.accentColor} px-4 py-2 rounded-full mb-6`}
            >
              <ThemeIcon className="w-4 h-4" />
              <span className="font-body font-semibold text-sm">Coming Soon</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display font-black text-4xl md:text-6xl text-charcoal mb-4"
            >
              {DROP_CONFIG.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body text-muted-foreground max-w-2xl mx-auto text-lg mb-10"
            >
              {DROP_CONFIG.tagline}. Pre-order now and secure your items before they sell out.
            </motion.p>

            {/* Countdown Timer */}
            {timeLeft && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center gap-4 md:gap-6 mb-10"
              >
                {[
                  { value: timeLeft.days, label: "Days" },
                  { value: timeLeft.hours, label: "Hours" },
                  { value: timeLeft.minutes, label: "Minutes" },
                  { value: timeLeft.seconds, label: "Seconds" },
                ].map((unit) => (
                  <div
                    key={unit.label}
                    className="bg-card border border-border rounded-2xl p-4 md:p-6 min-w-[70px] md:min-w-[90px] shadow-sm"
                  >
                    <div className={`font-display font-black text-2xl md:text-4xl ${currentTheme.accentColor}`}>
                      {unit.value.toString().padStart(2, "0")}
                    </div>
                    <div className="font-body text-muted-foreground text-xs md:text-sm mt-1">
                      {unit.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {isDropLive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-flex items-center gap-2 bg-green-500/20 text-green-700 px-6 py-3 rounded-full mb-10"
              >
                <CheckCircle className="w-5 h-5" />
                <span className="font-body font-bold">The drop is live!</span>
              </motion.div>
            )}

            {/* Email Notification Signup */}
            {!isSubscribed ? (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onSubmit={handleNotifyMe}
                className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubscribing}
                  className={`h-12 px-6 ${currentTheme.buttonBg} text-white`}
                >
                  {isSubscribing ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Bell className="w-4 h-4 mr-2" />
                      Notify Me
                    </>
                  )}
                </Button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center gap-2 text-green-600"
              >
                <CheckCircle className="w-5 h-5" />
                <span className="font-body font-semibold">You're on the list!</span>
              </motion.div>
            )}
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container-lyfe px-4">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-charcoal text-center mb-8">
              {isDropLive ? "Shop the Collection" : "Preview What's Coming"}
            </h2>

            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-secondary" />
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground font-body text-lg mb-4">
                  No pre-order products available yet. Check back soon!
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  To add products here, tag them with "pre-order" in your Shopify admin.
                </p>
                <Link to="/collections/all-remedies" className="btn-earth">
                  Shop Current Collection
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
                      className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow relative"
                    >
                      {/* Pre-order Badge */}
                      <Badge className={`absolute top-3 left-3 z-10 ${currentTheme.badgeBg} ${currentTheme.badgeText}`}>
                        <ThemeIcon className="w-3 h-3 mr-1" />
                        {DROP_CONFIG.badgeText}
                      </Badge>

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
                          <span className={`font-display font-bold text-xl ${currentTheme.accentColor}`}>
                            ${parseFloat(price.amount).toFixed(2)}
                          </span>
                          <button
                            onClick={() => handleAddToCart(product)}
                            disabled={isAdding || cartLoading}
                            className={`flex items-center gap-2 ${currentTheme.buttonBg} text-white px-4 py-2 rounded-full font-body font-semibold text-sm transition-colors disabled:opacity-50`}
                          >
                            {isAdding ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <ShoppingBag className="w-4 h-4" />
                            )}
                            {DROP_CONFIG.buttonText}
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

export default PreOrdersPage;
