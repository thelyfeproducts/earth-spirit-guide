import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Share2, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Blog post content data
const blogPostsContent: Record<string, {
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  content: string[];
  keyTakeaways?: string[];
}> = {
  "rosemary-oil-hair-growth": {
    title: "Why Rosemary Oil is a Game-Changer for Hair Growth 🌿",
    category: "Hair Care",
    readTime: "5 min read",
    date: "January 25, 2025",
    image: "🌿",
    content: [
      "If you've been on a journey to grow healthier, fuller hair, you've probably heard whispers about rosemary oil. But here's the thing—it's not just hype. Science is actually backing up what traditional medicine has known for centuries.",
      "## The Science Behind Rosemary Oil",
      "A landmark 2015 study compared rosemary oil to minoxidil (the active ingredient in Rogaine) over six months. The results? Rosemary oil performed just as well as the pharmaceutical treatment, with fewer side effects like scalp itching.",
      "Rosemary oil works by improving blood circulation to the scalp. When your follicles get better blood flow, they receive more nutrients and oxygen—everything they need to produce strong, healthy hair.",
      "## How to Use Rosemary Oil Effectively",
      "The key to seeing results is consistency. Here's our recommended routine:",
      "**Daily Scalp Massage**: Mix 3-5 drops of rosemary essential oil with a carrier oil like jojoba or our Hair Growth Serum. Massage into your scalp for 5 minutes.",
      "**Weekly Deep Treatment**: Apply generously to your scalp, cover with a shower cap, and leave for 30 minutes to an hour before washing.",
      "**Be Patient**: Most people start seeing results around the 3-month mark. Hair growth is a slow process, so consistency is key!",
      "## Why Our Hair Growth Serum Works",
      "We've combined rosemary oil with other powerhouse ingredients like peppermint oil (which also promotes circulation), castor oil (rich in ricinoleic acid), and vitamin E. Together, they create a synergistic blend that nourishes your scalp ecosystem.",
      "## Real Results from Our Community",
      "We've received countless messages from customers who've seen significant improvement in their hair thickness and growth. Some have even noticed baby hairs sprouting in areas that had been thinning for years.",
      "Remember: healthy hair starts with a healthy scalp. Treat your scalp like you treat your face—with care, consistency, and the right ingredients.",
    ],
    keyTakeaways: [
      "Rosemary oil is clinically proven to be as effective as minoxidil",
      "Consistency is key—expect results around 3 months",
      "Always dilute essential oils with a carrier oil",
      "Scalp massage improves circulation and product absorption",
    ],
  },
  "understanding-your-scalp": {
    title: "Understanding Your Scalp: The Foundation of Healthy Hair 💆",
    category: "Education",
    readTime: "4 min read",
    date: "January 20, 2025",
    image: "💆",
    content: [
      "We spend so much time focusing on our hair strands that we often forget about the soil from which they grow: our scalp. Just like a garden needs healthy soil, your hair needs a balanced, nourished scalp to thrive.",
      "## Your Scalp is Skin, Too",
      "Your scalp is an extension of your facial skin, yet we often treat it as an afterthought. It has sebaceous glands, hair follicles, and its own microbiome. When this ecosystem is out of balance, it shows in your hair.",
      "## Common Scalp Types",
      "**Oily Scalp**: If you find yourself needing to wash daily, you likely have overactive sebaceous glands. This can be genetic or caused by over-washing (which triggers more oil production).",
      "**Dry Scalp**: Flaking, tightness, and itchiness are signs of a dry scalp. This can be exacerbated by harsh shampoos, cold weather, or not drinking enough water.",
      "**Sensitive Scalp**: Redness, burning, or reactions to products indicate sensitivity. This often requires gentle, fragrance-free products.",
      "**Balanced Scalp**: The goal! Your hair stays fresh for 2-3 days, no flaking or excess oil.",
      "## How to Care for Your Scalp",
      "**Cleanse Properly**: Use a gentle, sulfate-free shampoo. Focus on your scalp, not your lengths.",
      "**Exfoliate Weekly**: Just like your face, your scalp benefits from gentle exfoliation to remove buildup.",
      "**Massage Regularly**: This stimulates blood flow and helps distribute natural oils.",
      "**Protect Your Microbiome**: Avoid antibacterial products that can disrupt your scalp's natural balance.",
      "Start paying attention to your scalp, and you'll be amazed at how your hair transforms!",
    ],
    keyTakeaways: [
      "Your scalp is living skin that needs care",
      "Identify your scalp type for targeted treatment",
      "Regular massage improves scalp health",
      "A healthy scalp microbiome is essential for hair growth",
    ],
  },
  "shea-butter-benefits": {
    title: "Shea Butter: Africa's Best-Kept Beauty Secret 🧈",
    category: "Ingredients",
    readTime: "6 min read",
    date: "January 15, 2025",
    image: "🧈",
    content: [
      "For centuries, women across West Africa have relied on shea butter to protect and nourish their skin and hair. Today, this incredible ingredient has become a cornerstone of natural beauty worldwide—and for good reason.",
      "## What is Shea Butter?",
      "Shea butter comes from the nuts of the shea tree (Vitellaria paradoxa), which grows in the savannah regions of West Africa. The extraction process is labor-intensive and traditionally done by women, who have passed down their techniques for generations.",
      "## The Nutritional Powerhouse",
      "Shea butter is packed with beneficial compounds:",
      "**Fatty Acids**: Oleic and stearic acids provide deep moisturization and help repair the skin barrier.",
      "**Vitamins A & E**: These antioxidants protect against environmental damage and promote skin healing.",
      "**Cinnamic Acid**: Provides mild natural sun protection (though not a replacement for sunscreen!).",
      "**Triterpenes**: Anti-inflammatory compounds that soothe irritated skin.",
      "## Benefits for Skin",
      "Shea butter is truly versatile. It helps with dry skin, eczema, stretch marks, and even minor burns. Its non-comedogenic nature means it moisturizes without clogging pores.",
      "## Benefits for Hair",
      "For hair, shea butter seals in moisture, reduces frizz, and protects against heat damage. It's especially beneficial for curly and coily hair types that need extra moisture.",
      "## How We Source Our Shea Butter",
      "We partner directly with women's cooperatives in Ghana to source unrefined, fair-trade shea butter. This ensures the highest quality while supporting the communities who have preserved this tradition.",
      "When you use our products, you're not just nourishing your skin—you're supporting sustainable practices and women's economic empowerment.",
    ],
    keyTakeaways: [
      "Shea butter is rich in vitamins A & E and essential fatty acids",
      "It's beneficial for both skin and hair",
      "Unrefined shea butter retains more nutrients",
      "Fair-trade sourcing supports African communities",
    ],
  },
  "why-organic-matters": {
    title: "Why We Choose Organic: It's Not Just a Label 🌱",
    category: "Education",
    readTime: "7 min read",
    date: "January 10, 2025",
    image: "🌱",
    content: [
      "When you see 'organic' on a product, what does it really mean? Is it worth the extra cost? We believe the answer is a resounding yes—and here's why.",
      "## What 'Organic' Really Means",
      "For an ingredient to be certified organic, it must be grown without synthetic pesticides, herbicides, or fertilizers. The soil must be free of prohibited substances for at least three years. It's a commitment to working with nature, not against it.",
      "## The Problem with Conventional Ingredients",
      "Conventional farming often relies on chemicals that can leave residues on plants. When these ingredients are concentrated into skincare products, those residues can be absorbed through your skin.",
      "Studies have found pesticide residues in blood and urine samples of people who use conventional personal care products. While the long-term effects are still being studied, we prefer to err on the side of caution.",
      "## Benefits of Organic Ingredients",
      "**Purity**: No synthetic chemical residues on your skin.",
      "**Nutrient Density**: Some studies suggest organic plants have higher antioxidant levels.",
      "**Environmental Impact**: Organic farming supports biodiversity, healthy soil, and cleaner water.",
      "**Worker Safety**: Farm workers aren't exposed to harmful chemicals.",
      "## Our Organic Commitment",
      "Every ingredient we can source organically, we do. From our rosemary essential oil to our shea butter, we prioritize organic certification. When organic isn't available (some ingredients simply aren't produced organically), we choose the highest quality, sustainably sourced alternatives.",
      "## Reading Labels Wisely",
      "Be aware of 'greenwashing'—when brands use words like 'natural' without meaningful certification. Look for recognized certifications like USDA Organic, Ecocert, or COSMOS.",
      "Your skin is your body's largest organ. We believe it deserves ingredients grown with care, harvested with intention, and processed with respect.",
    ],
    keyTakeaways: [
      "Organic means no synthetic pesticides or fertilizers",
      "Conventional ingredients may carry chemical residues",
      "Organic farming is better for the environment",
      "Look for recognized certifications, not just 'natural' claims",
    ],
  },
  "winter-skin-tips": {
    title: "Winter Skincare: Protecting Your Skin in Cold Weather ❄️",
    category: "Skincare Tips",
    readTime: "5 min read",
    date: "January 5, 2025",
    image: "❄️",
    content: [
      "As temperatures drop, many of us notice our skin becoming drier, tighter, and more irritated. Cold weather combined with indoor heating creates the perfect storm for dehydrated skin. Here's how to keep your skin glowing all winter long.",
      "## Why Winter is Hard on Skin",
      "Cold air holds less moisture than warm air. Add heated indoor environments (which further reduce humidity) and harsh winds, and your skin's moisture barrier takes a beating.",
      "## Adjust Your Routine",
      "**Switch to Creamier Cleansers**: Foaming cleansers can be too stripping in winter. Opt for cream or oil-based cleansers.",
      "**Layer Your Moisturizers**: Apply products from thinnest to thickest. Start with a hydrating serum, then a moisturizer, then an oil or butter to seal everything in.",
      "**Don't Skip SPF**: UV rays are present year-round, and snow can reflect up to 80% of UV radiation.",
      "**Exfoliate Gently**: Dead skin buildup prevents moisturizers from absorbing. Use a gentle exfoliant once or twice a week.",
      "## Our Winter Favorites",
      "Our Body Butter is perfect for winter because it creates a protective barrier that locks in moisture. Apply right after showering when skin is slightly damp for maximum absorption.",
      "For lips and any extra-dry patches, our multi-purpose Healing Balm works wonders.",
      "## Lifestyle Tips",
      "**Use a Humidifier**: Adding moisture to indoor air helps your skin (and respiratory system!).",
      "**Stay Hydrated**: Drink plenty of water and herbal teas.",
      "**Avoid Hot Showers**: As tempting as they are, hot water strips natural oils. Opt for lukewarm instead.",
      "With a few adjustments, you can maintain healthy, radiant skin even in the coldest months!",
    ],
    keyTakeaways: [
      "Cold weather and indoor heating dehydrate skin",
      "Switch to richer, creamier products in winter",
      "Layer moisturizers for maximum hydration",
      "Use a humidifier and stay hydrated from within",
    ],
  },
  "diy-hair-mask": {
    title: "DIY Deep Conditioning Hair Mask You Can Make at Home 🥥",
    category: "DIY",
    readTime: "4 min read",
    date: "December 28, 2024",
    image: "🥥",
    content: [
      "Sometimes your hair needs a little extra love, and you don't need expensive salon treatments to give it that. With ingredients probably already in your kitchen, you can create a deeply nourishing hair mask.",
      "## The Power of Kitchen Ingredients",
      "Many foods are packed with nutrients that benefit hair:",
      "**Avocado**: Rich in healthy fats and vitamin E for moisture and shine.",
      "**Coconut Oil**: Penetrates the hair shaft to reduce protein loss.",
      "**Honey**: A natural humectant that draws moisture into hair.",
      "**Banana**: Contains potassium and vitamins that strengthen hair.",
      "**Egg**: Protein-rich for strengthening damaged strands.",
      "## Our Favorite Recipe: Tropical Moisture Mask",
      "**Ingredients:**",
      "- 1 ripe avocado",
      "- 2 tablespoons coconut oil",
      "- 1 tablespoon honey",
      "- 1 tablespoon of our Hair Growth Serum (optional but recommended!)",
      "**Instructions:**",
      "1. Mash the avocado until completely smooth (lumps = hard to wash out!)",
      "2. Warm the coconut oil slightly and mix in",
      "3. Add honey and Hair Growth Serum, mixing well",
      "4. Apply to damp hair, focusing on mid-lengths and ends",
      "5. Cover with a shower cap and leave for 30-45 minutes",
      "6. Rinse thoroughly and shampoo as normal",
      "## Tips for Success",
      "**Blend well**: Use a blender if possible for a smoother consistency.",
      "**Adjust for your hair**: Oily hair? Skip the coconut oil. Dry hair? Add more!",
      "**Don't overdo it**: Once a week is plenty for most hair types.",
      "Your hair will feel silky, strong, and deeply nourished. Plus, you'll smell amazing!",
    ],
    keyTakeaways: [
      "Kitchen ingredients can nourish hair effectively",
      "Blend ingredients smooth to avoid residue",
      "Customize the recipe for your hair type",
      "Weekly treatments are usually sufficient",
    ],
  },
  "ingredient-spotlight-jojoba": {
    title: "Ingredient Spotlight: Jojoba Oil—Nature's Perfect Moisturizer 🫒",
    category: "Ingredients",
    readTime: "5 min read",
    date: "December 20, 2024",
    image: "🫒",
    content: [
      "If there's one ingredient that deserves a permanent spot in your skincare and haircare routine, it's jojoba oil. But here's a fun fact: it's not actually an oil at all—it's a liquid wax!",
      "## What Makes Jojoba Special",
      "Jojoba oil closely mimics the sebum naturally produced by our skin. This means it's recognized by your skin as 'familiar' and absorbs beautifully without clogging pores or leaving a greasy residue.",
      "## The Science",
      "Jojoba is composed of long-chain fatty acids and fatty alcohols called wax esters. Human sebum contains about 25% wax esters—the same type found in jojoba. This is why it's so compatible with our skin.",
      "## Benefits for Skin",
      "**Balances Oil Production**: Yes, applying oil can actually reduce oiliness! When your skin is properly moisturized, it produces less excess sebum.",
      "**Non-Comedogenic**: Won't clog pores, making it suitable even for acne-prone skin.",
      "**Anti-Inflammatory**: Helps calm redness and irritation.",
      "**Antioxidant Protection**: Rich in vitamin E to fight free radicals.",
      "## Benefits for Hair",
      "Jojoba is lightweight enough to use on fine hair without weighing it down. It adds shine, reduces frizz, and can help with scalp health by moisturizing without clogging follicles.",
      "## How We Use It",
      "Jojoba is a key ingredient in many of our products because of its versatility and skin-compatibility. It's the perfect carrier oil for our essential oil blends, helping active ingredients penetrate effectively.",
      "Whether you have oily, dry, or combination skin, jojoba adapts to your needs. It's truly nature's perfect moisturizer.",
    ],
    keyTakeaways: [
      "Jojoba is actually a liquid wax, not an oil",
      "It closely mimics human sebum",
      "Suitable for all skin types, including oily and acne-prone",
      "Works beautifully for both skin and hair",
    ],
  },
  "our-garden-journey": {
    title: "From Seed to Serum: Our Garden Journey 🏡",
    category: "Behind the Scenes",
    readTime: "6 min read",
    date: "December 15, 2024",
    image: "🏡",
    content: [
      "One of the most rewarding parts of our journey has been growing our own herbs. There's something magical about knowing exactly where your ingredients come from—because they came from your own backyard!",
      "## How It Started",
      "When we first started Lyfe Products, we were sourcing all our ingredients. But we kept dreaming about growing our own rosemary, lavender, and other herbs. Last spring, we finally took the plunge.",
      "## The Learning Curve",
      "We won't lie—gardening is hard work! We learned quickly that each plant has its own personality. Rosemary loves well-drained soil and full sun. Lavender needs similar conditions but is even more particular about drainage. Mint, on the other hand, will take over your entire garden if you let it!",
      "## Our Current Garden",
      "Today, we're growing:",
      "**Rosemary**: For our bestselling Hair Growth Serum. The aroma when harvesting is incredible!",
      "**Lavender**: For calming products and aromatherapy blends.",
      "**Peppermint**: For that cooling, tingling sensation in our scalp treatments.",
      "**Chamomile**: For soothing, sensitive skin formulations.",
      "**Aloe Vera**: For burns, irritation, and after-sun care.",
      "## The Distillation Process",
      "We've invested in a small copper still to create our own hydrosols and essential oils. Watching steam rise from fresh-cut rosemary and condense into fragrant oil is pure magic.",
      "## What's Next",
      "We're expanding! This year, we're adding calendula, comfrey, and more lavender varieties. Our dream is to eventually source a majority of our ingredients from our own organic garden.",
      "Every bottle you purchase supports this dream of truly farm-to-face beauty. Thank you for being part of our journey!",
    ],
    keyTakeaways: [
      "We grow many of our own herbs organically",
      "Each plant requires specific growing conditions",
      "We distill our own essential oils on-site",
      "Your purchases support our farming expansion",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsContent[slug] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Article Header */}
      <section className="pt-32 pb-12">
        <div className="container-lyfe max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors mb-8 font-body"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Journal
            </Link>

            {/* Category Badge */}
            <span className="inline-block bg-secondary/10 text-secondary font-body font-semibold px-4 py-2 rounded-full text-sm mb-6">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="heading-section text-3xl md:text-4xl lg:text-5xl mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground font-body mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            {/* Featured Image/Emoji */}
            <div className="bg-gradient-to-br from-secondary/10 to-primary/5 rounded-3xl p-12 md:p-16 flex justify-center mb-12">
              <span className="text-[8rem] md:text-[10rem]">{post.image}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container-lyfe max-w-3xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {post.content.map((paragraph, index) => {
              // Check if it's a heading
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="font-display text-2xl font-bold text-charcoal mt-10 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              // Check if it's a bold line (instruction or ingredient)
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <p key={index} className="font-body font-semibold text-charcoal my-2">
                    {paragraph.replace(/\*\*/g, "")}
                  </p>
                );
              }
              // Check if it's a list item
              if (paragraph.startsWith("- ")) {
                return (
                  <li key={index} className="font-body text-muted-foreground ml-6 my-1">
                    {paragraph.replace("- ", "")}
                  </li>
                );
              }
              // Check if it contains bold text
              if (paragraph.includes("**")) {
                const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                return (
                  <p key={index} className="font-body text-muted-foreground leading-relaxed my-4">
                    {parts.map((part, i) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        return (
                          <strong key={i} className="text-charcoal font-semibold">
                            {part.replace(/\*\*/g, "")}
                          </strong>
                        );
                      }
                      return part;
                    })}
                  </p>
                );
              }
              // Regular paragraph
              return (
                <p key={index} className="font-body text-muted-foreground leading-relaxed my-4">
                  {paragraph}
                </p>
              );
            })}

            {/* Key Takeaways */}
            {post.keyTakeaways && (
              <div className="bg-secondary/10 rounded-2xl p-6 md:p-8 mt-12">
                <h3 className="font-display text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                  🌿 Key Takeaways
                </h3>
                <ul className="space-y-2">
                  {post.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-secondary mt-1">✓</span>
                      <span className="font-body text-muted-foreground">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.article>

          {/* Share & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-12 pt-8 border-t border-border"
          >
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border font-body font-semibold hover:bg-secondary/10 transition-colors">
              <Share2 className="w-4 h-4" />
              Share Article
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border font-body font-semibold hover:bg-secondary/10 transition-colors">
              <Heart className="w-4 h-4" />
              Save for Later
            </button>
          </motion.div>

          {/* Back to Blog */}
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-display font-bold hover:bg-secondary/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Explore More Articles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
