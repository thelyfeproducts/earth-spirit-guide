import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LyfeBotWidget from "@/components/LyfeBot/LyfeBotWidget";
import { ExternalLink, Users, Gift, TrendingUp, DollarSign } from "lucide-react";

// Social media links - update these with actual URLs
const TIKTOK_URL = "https://tiktok.com/@lyfeproducts";
const INSTAGRAM_URL = "https://instagram.com/lyfeproducts";

interface Ambassador {
  name: string;
  handle: string;
  bio: string;
  followers: string;
  featured?: boolean;
  tiktok?: string;
  instagram?: string;
}

interface FeaturedContent {
  type: "Body Butter" | "Hair Oil" | "Bundle Deal";
  tiktokUrl?: string;
}

const ambassadors: Ambassador[] = [
  {
    name: "Ambassador Name 1",
    handle: "@ambassador1",
    bio: "Beauty enthusiast and skincare advocate. Sharing my journey to healthier skin with The Lyfe Products.",
    followers: "50K+",
    featured: true,
    tiktok: "#",
    instagram: "#",
  },
  {
    name: "Ambassador Name 2",
    handle: "@ambassador2",
    bio: "Natural hair care lover. Documenting my hair growth journey using organic products.",
    followers: "35K+",
    tiktok: "#",
    instagram: "#",
  },
  {
    name: "Ambassador Name 3",
    handle: "@ambassador3",
    bio: "Wellness coach and holistic health advocate. Promoting clean beauty for mind, body, and soul.",
    followers: "25K+",
    tiktok: "#",
    instagram: "#",
  },
  {
    name: "Ambassador Name 4",
    handle: "@ambassador4",
    bio: "Self-care enthusiast spreading the love for all-natural products. Join my journey!",
    followers: "40K+",
    featured: true,
    tiktok: "#",
    instagram: "#",
  },
];

const featuredContent: FeaturedContent[] = [
  { type: "Body Butter" },
  { type: "Hair Oil" },
  { type: "Bundle Deal" },
  { type: "Body Butter" },
  { type: "Hair Oil" },
  { type: "Bundle Deal" },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Exclusive Discounts",
    description: "Get up to 30% off on all products plus special promo codes for your followers",
  },
  {
    icon: Gift,
    title: "Early Access",
    description: "Be the first to try new product launches and limited edition items",
  },
  {
    icon: TrendingUp,
    title: "Commission Earnings",
    description: "Earn commission on every sale made through your unique referral link",
  },
];

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const AmbassadorCard = ({ ambassador, index }: { ambassador: Ambassador; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
      ambassador.featured ? 'ring-2 ring-secondary' : ''
    }`}
  >
    {ambassador.featured && (
      <div className="bg-secondary text-secondary-foreground text-center py-1 text-sm font-semibold">
        Featured
      </div>
    )}
    <div className="aspect-square bg-muted flex items-center justify-center">
      <div className="text-center p-6">
        <div className="w-24 h-24 mx-auto bg-secondary/20 rounded-full flex items-center justify-center mb-4">
          <Users className="w-12 h-12 text-secondary" />
        </div>
        <p className="font-display font-bold text-lg text-charcoal">{ambassador.name}</p>
      </div>
    </div>
    <div className="p-6">
      <p className="font-body font-semibold text-secondary text-sm mb-2">
        {ambassador.handle}
      </p>
      <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
        {ambassador.bio}
      </p>
      <div className="flex items-center justify-between">
        <span className="font-body font-semibold text-charcoal text-sm">
          {ambassador.followers} followers
        </span>
        <div className="flex gap-2">
          {ambassador.tiktok && (
            <a
              href={ambassador.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-muted rounded-full hover:bg-secondary/20 transition-colors"
            >
              <TikTokIcon />
            </a>
          )}
          {ambassador.instagram && (
            <a
              href={ambassador.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-muted rounded-full hover:bg-secondary/20 transition-colors"
            >
              <InstagramIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const ContentCard = ({ content, index }: { content: FeaturedContent; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group cursor-pointer"
  >
    <div className="aspect-[9/16] bg-muted flex items-center justify-center relative">
      <div className="text-center p-4">
        <TikTokIcon />
        <p className="font-body text-sm text-muted-foreground mt-2">{content.type}</p>
      </div>
      <div className="absolute inset-0 bg-charcoal/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="text-white font-body font-semibold text-sm">View on TikTok</span>
      </div>
    </div>
    <div className="p-3 text-center">
      <p className="font-body font-semibold text-charcoal text-sm">{content.type}</p>
    </div>
  </motion.div>
);

const Ambassadors = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 section-padding relative overflow-hidden bg-secondary/5">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="container-lyfe relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block bg-primary/10 text-primary font-body font-semibold px-4 py-2 rounded-full text-sm mb-6">
                Join Our Community
              </span>
              <h1 className="heading-hero mb-6">
                Ambassadors
                <br />
                <span className="text-secondary">& Influencers</span>
              </h1>
              <p className="body-large mb-8">
                Meet our amazing ambassadors who are spreading the word about natural, 
                organic skincare and haircare. Want to join the family?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-earth inline-flex items-center justify-center gap-2"
                >
                  <TikTokIcon />
                  Follow on TikTok
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-earth inline-flex items-center justify-center gap-2"
                >
                  <InstagramIcon />
                  Follow on Instagram
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Content */}
        <section className="section-padding">
          <div className="container-lyfe">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="heading-section mb-4">
                Featured <span className="text-secondary">Content</span>
              </h2>
              <p className="body-large max-w-2xl mx-auto">
                Check out our viral content and product reviews
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {featuredContent.map((content, index) => (
                <ContentCard key={index} content={content} index={index} />
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body font-semibold text-secondary hover:text-primary transition-colors"
              >
                <TikTokIcon />
                View on TikTok
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Featured Ambassadors */}
        <section className="section-padding bg-muted/30">
          <div className="container-lyfe">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="heading-section mb-4">
                Featured <span className="text-secondary">Ambassadors</span>
              </h2>
              <p className="body-large max-w-2xl mx-auto">
                Meet the faces behind our community
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ambassadors.map((ambassador, index) => (
                <AmbassadorCard key={ambassador.handle} ambassador={ambassador} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Become an Ambassador CTA */}
        <section className="section-padding bg-secondary/10">
          <div className="container-lyfe">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="heading-section mb-6">
                Become an
                <br />
                <span className="text-secondary">Ambassador</span>
              </h2>
              <p className="body-large mb-8">
                Love our products? Join our ambassador program and earn rewards while sharing 
                your favorite natural skincare and haircare products with your community. 
                Get exclusive discounts, early access to new products, and more!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:ambassadors@lyfeproducts.com" className="btn-earth">
                  Apply Now
                </a>
                <a href="#benefits" className="btn-outline-earth">
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ambassador Benefits */}
        <section id="benefits" className="section-padding">
          <div className="container-lyfe">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="heading-section mb-4">
                Ambassador <span className="text-secondary">Benefits</span>
              </h2>
              <p className="body-large max-w-2xl mx-auto">
                Why join The Lyfe Products family?
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                    <benefit.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-charcoal mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <LyfeBotWidget />
    </div>
  );
};

export default Ambassadors;
