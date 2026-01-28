import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Leaf, Sparkles, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: "rosemary-oil-hair-growth",
    title: "Why Rosemary Oil is a Game-Changer for Hair Growth 🌿",
    excerpt: "Discover the science behind rosemary oil and why it's been compared to minoxidil for promoting healthy hair growth naturally.",
    category: "Hair Care",
    readTime: "5 min read",
    date: "January 25, 2025",
    image: "🌿",
    color: "bg-secondary/10",
    featured: true,
  },
  {
    id: "understanding-your-scalp",
    title: "Understanding Your Scalp: The Foundation of Healthy Hair 💆",
    excerpt: "Your scalp is living skin that needs care too! Learn how to identify your scalp type and create a routine that works.",
    category: "Education",
    readTime: "4 min read",
    date: "January 20, 2025",
    image: "💆",
    color: "bg-purple-100",
  },
  {
    id: "shea-butter-benefits",
    title: "Shea Butter: Africa's Best-Kept Beauty Secret 🧈",
    excerpt: "From the shea trees of West Africa to your skincare routine—explore the incredible moisturizing powers of this natural butter.",
    category: "Ingredients",
    readTime: "6 min read",
    date: "January 15, 2025",
    image: "🧈",
    color: "bg-yellow-50",
  },
  {
    id: "why-organic-matters",
    title: "Why We Choose Organic: It's Not Just a Label 🌱",
    excerpt: "What does 'organic' really mean for your skin? We break down the difference between organic and conventional ingredients.",
    category: "Education",
    readTime: "7 min read",
    date: "January 10, 2025",
    image: "🌱",
    color: "bg-green-50",
  },
  {
    id: "winter-skin-tips",
    title: "Winter Skincare: Protecting Your Skin in Cold Weather ❄️",
    excerpt: "Cold weather can be harsh on your skin. Here are natural ways to keep your skin hydrated and glowing all winter long.",
    category: "Skincare Tips",
    readTime: "5 min read",
    date: "January 5, 2025",
    image: "❄️",
    color: "bg-sky-50",
  },
  {
    id: "diy-hair-mask",
    title: "DIY Deep Conditioning Hair Mask You Can Make at Home 🥥",
    excerpt: "Using ingredients you probably already have, create a nourishing hair mask that rivals salon treatments.",
    category: "DIY",
    readTime: "4 min read",
    date: "December 28, 2024",
    image: "🥥",
    color: "bg-orange-50",
  },
  {
    id: "ingredient-spotlight-jojoba",
    title: "Ingredient Spotlight: Jojoba Oil—Nature's Perfect Moisturizer 🫒",
    excerpt: "Why jojoba oil is uniquely similar to your skin's natural sebum and how it can balance both dry and oily skin.",
    category: "Ingredients",
    readTime: "5 min read",
    date: "December 20, 2024",
    image: "🫒",
    color: "bg-amber-50",
  },
  {
    id: "our-garden-journey",
    title: "From Seed to Serum: Our Garden Journey 🏡",
    excerpt: "Follow along as we share our experience growing rosemary and lavender in our own backyard for our products.",
    category: "Behind the Scenes",
    readTime: "6 min read",
    date: "December 15, 2024",
    image: "🏡",
    color: "bg-lime-50",
  },
];

const categories = ["All", "Hair Care", "Skincare Tips", "Ingredients", "Education", "DIY", "Behind the Scenes"];

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

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container-lyfe">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block bg-accent/20 text-charcoal font-body font-semibold px-4 py-2 rounded-full text-sm mb-6">
              📚 Learn With Us
            </span>
            <h1 className="heading-hero mb-6">
              The Lyfe
              <br />
              <span className="text-secondary">Journal</span> ✨
            </h1>
            <p className="body-large text-muted-foreground">
              Tips, education, and stories about natural skincare, hair care, and living in harmony with the Earth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-8">
        <div className="container-lyfe">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full font-body text-sm transition-all bg-card border border-border hover:bg-secondary/10 hover:border-secondary/30 text-charcoal"
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-8">
          <div className="container-lyfe">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-secondary/10 to-primary/5 rounded-3xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <div className="bg-white rounded-3xl p-12 shadow-soft">
                    <span className="text-8xl">{featuredPost.image}</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-secondary" />
                    <span className="font-body font-semibold text-secondary text-sm">Featured Article</span>
                  </div>
                  <span className="inline-block bg-secondary/20 text-secondary font-body font-semibold px-3 py-1 rounded-full text-xs mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="heading-card text-2xl md:text-3xl mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="font-body text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full font-body font-semibold hover:bg-secondary/90 transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container-lyfe">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {regularPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={item}
                className="bg-card border border-border rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`${post.color} p-8 flex justify-center`}>
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {post.image}
                  </span>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-secondary/10 text-secondary font-body font-semibold px-3 py-1 rounded-full text-xs mb-3">
                    {post.category}
                  </span>
                  <h3 className="heading-card text-lg mb-3 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container-lyfe">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-accent/20 to-secondary/10 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <div className="bg-secondary/10 p-4 rounded-2xl inline-block mb-6">
              <Heart className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="heading-card text-2xl md:text-3xl mb-4">
              Stay in the Loop 💌
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
              Get natural beauty tips, exclusive recipes, and first access to new products delivered straight to your inbox. No spam, just good vibes!
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
              <button
                type="submit"
                className="bg-secondary text-white px-8 py-3 rounded-full font-body font-semibold hover:bg-secondary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
