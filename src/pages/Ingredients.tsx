import { motion } from "framer-motion";
import { Leaf, Sparkles, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ingredients = [
  {
    name: "Rosemary",
    emoji: "🌿",
    tagline: "The Memory Herb",
    benefits: ["Stimulates hair growth", "Improves circulation", "Rich in antioxidants"],
    funFact: "We grow our own rosemary right in our garden! It's one of the oldest known herbs used for beauty.",
    color: "bg-secondary/10",
    borderColor: "border-secondary/30",
  },
  {
    name: "Lavender",
    emoji: "💜",
    tagline: "The Calm Queen",
    benefits: ["Soothes irritated skin", "Promotes relaxation", "Natural antiseptic"],
    funFact: "Our lavender is garden-grown with love! Ancient Egyptians used it in their mummification process.",
    color: "bg-purple-100",
    borderColor: "border-purple-200",
  },
  {
    name: "Jojoba Seed Oil",
    emoji: "🫒",
    tagline: "Nature's Moisturizer",
    benefits: ["Mimics skin's natural oils", "Non-comedogenic", "Deeply hydrating"],
    funFact: "Jojoba isn't actually an oil—it's a liquid wax! That's why it absorbs so beautifully.",
    color: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    name: "Fenugreek",
    emoji: "🌱",
    tagline: "The Ancient Secret",
    benefits: ["Promotes hair thickness", "Rich in proteins", "Strengthens follicles"],
    funFact: "Used for thousands of years in Ayurvedic medicine. Cleopatra reportedly used it for her hair!",
    color: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    name: "Hibiscus",
    emoji: "🌺",
    tagline: "The Botox Plant",
    benefits: ["Natural anti-aging", "Boosts collagen", "Adds shine to hair"],
    funFact: "Called 'Nature's Botox' because of its amazing ability to increase skin elasticity!",
    color: "bg-pink-50",
    borderColor: "border-pink-200",
  },
  {
    name: "Almond Oil",
    emoji: "🥜",
    tagline: "The Gentle Giant",
    benefits: ["Vitamin E powerhouse", "Reduces dark circles", "Softens skin"],
    funFact: "Sweet almond oil has been used since ancient times—it was a favorite of Egyptian queens!",
    color: "bg-orange-50",
    borderColor: "border-orange-200",
  },
  {
    name: "Grape Seed Oil",
    emoji: "🍇",
    tagline: "The Light Touch",
    benefits: ["Lightweight moisture", "Tightens pores", "Rich in linoleic acid"],
    funFact: "A gift from the wine industry! Grape seeds are pressed after wine production.",
    color: "bg-violet-50",
    borderColor: "border-violet-200",
  },
  {
    name: "Tea Tree Oil",
    emoji: "🌲",
    tagline: "The Healer",
    benefits: ["Natural antibacterial", "Fights acne", "Soothes scalp"],
    funFact: "Australian Aboriginals have used tea tree leaves for healing for thousands of years!",
    color: "bg-teal-50",
    borderColor: "border-teal-200",
  },
  {
    name: "Hemp Seed Oil",
    emoji: "🌿",
    tagline: "The Balancer",
    benefits: ["Perfect omega ratio", "Reduces inflammation", "Won't clog pores"],
    funFact: "Contains the ideal 3:1 ratio of omega-6 to omega-3 fatty acids for healthy skin!",
    color: "bg-lime-50",
    borderColor: "border-lime-200",
  },
  {
    name: "Coconut Oil",
    emoji: "🥥",
    tagline: "The Tropical Classic",
    benefits: ["Deep conditioning", "Natural antimicrobial", "Locks in moisture"],
    funFact: "Called 'the tree of life' in the Philippines because every part of the coconut palm is useful!",
    color: "bg-stone-50",
    borderColor: "border-stone-200",
  },
  {
    name: "Shea Butter",
    emoji: "🧈",
    tagline: "The African Gold",
    benefits: ["Intense hydration", "Healing properties", "UV protection"],
    funFact: "Shea trees can live for 200 years! The butter has been used in Africa for centuries.",
    color: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
  {
    name: "Mango Butter",
    emoji: "🥭",
    tagline: "The Tropical Treat",
    benefits: ["Super emollient", "Restores elasticity", "Vitamin A & E rich"],
    funFact: "Extracted from mango kernels—nothing goes to waste! It's softer than shea butter.",
    color: "bg-orange-100",
    borderColor: "border-orange-300",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Ingredients = () => {
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
              🌿 What's Inside
            </span>
            <h1 className="heading-hero mb-6">
              Meet Our
              <br />
              <span className="text-secondary">Ingredients</span> ✨
            </h1>
            <p className="body-large text-muted-foreground">
              Every ingredient in our products is chosen with intention. 
              No fillers, no synthetics—just pure, powerful plants that actually work! 🌱
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12">
        <div className="container-lyfe">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-secondary/5 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center gap-4 mb-6">
              <span className="text-4xl">🌍</span>
              <span className="text-4xl">💚</span>
              <span className="text-4xl">🌸</span>
            </div>
            <h2 className="heading-card text-2xl md:text-3xl mb-4">
              From the Earth, With Love
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              We believe the Earth already has everything we need. That's why we source ingredients 
              that have been used for generations—some we even grow ourselves in our own garden! 
              Each ingredient is selected for its unique healing properties and combined with care 
              to create products that truly nourish your skin and hair.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ingredients Grid */}
      <section className="py-16">
        <div className="container-lyfe">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {ingredients.map((ingredient) => (
              <motion.div
                key={ingredient.name}
                variants={item}
                className={`${ingredient.color} border ${ingredient.borderColor} rounded-3xl p-6 hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl group-hover:scale-125 transition-transform duration-300">
                    {ingredient.emoji}
                  </span>
                  <div>
                    <h3 className="heading-card text-lg">{ingredient.name}</h3>
                    <p className="font-body text-sm text-muted-foreground italic">
                      {ingredient.tagline}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="font-body font-semibold text-charcoal text-sm mb-2">Benefits:</p>
                  <ul className="space-y-1">
                    {ingredient.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 font-body text-sm text-charcoal">
                        <span className="text-secondary">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/50 rounded-xl p-3">
                  <p className="font-body text-xs text-muted-foreground">
                    <span className="font-semibold">Fun Fact:</span> {ingredient.funFact}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Garden Grown Badge */}
      <section className="py-16">
        <div className="container-lyfe">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-secondary/10 to-primary/5 rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Leaf className="w-6 h-6 text-secondary" />
                  <span className="font-body font-semibold text-secondary">Garden Grown</span>
                </div>
                <h2 className="heading-card text-2xl md:text-3xl mb-4">
                  Some Ingredients Come Straight From Our Garden! 🏡
                </h2>
                <p className="font-body text-muted-foreground mb-4">
                  We're proud to grow our own rosemary, lavender, and vegetables right in our backyard. 
                  There's something special about knowing exactly where your ingredients come from—planted 
                  with intention, tended with care, and harvested by hand.
                </p>
                <p className="font-body text-muted-foreground">
                  When you use our products, you're experiencing herbs that were nurtured with love 
                  from seed to bottle. 🌱💚
                </p>
              </div>
              <div className="flex justify-center">
                <div className="bg-white rounded-3xl p-8 shadow-soft text-center">
                  <span className="text-6xl mb-4 block">🌿</span>
                  <p className="font-display font-bold text-xl text-secondary mb-2">
                    Homegrown Goodness
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Rosemary • Lavender • Vegetables
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-16">
        <div className="container-lyfe">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="bg-terracotta/10 p-4 rounded-2xl inline-block mb-6">
              <Heart className="w-8 h-8 text-terracotta" />
            </div>
            <h2 className="heading-card text-2xl md:text-3xl mb-4">
              Our Promise to You 💕
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Every ingredient is chosen with care. We never use parabens, sulfates, 
              artificial fragrances, or any harsh chemicals. Just pure, plant-powered goodness 
              that your skin and hair will love!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["🚫 No Parabens", "🚫 No Sulfates", "🚫 No Synthetics", "💚 Always Natural", "🐰 Cruelty-Free"].map((badge) => (
                <span
                  key={badge}
                  className="bg-card border border-border px-4 py-2 rounded-full font-body text-sm text-charcoal"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ingredients;
