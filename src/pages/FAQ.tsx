import { motion } from "framer-motion";
import { HelpCircle, Leaf, Truck, Package, Sparkles, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "About Our Products",
    icon: Leaf,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    questions: [
      {
        question: "Are your products really 100% organic?",
        answer: "We use organic and natural ingredients whenever possible. While not every single ingredient is certified organic (some natural ingredients like certain clays and minerals don't have organic certifications), we never use synthetic chemicals, parabens, sulfates, or artificial fragrances. Everything we use comes from the Earth.",
      },
      {
        question: "Do you test on animals?",
        answer: "Absolutely not! We are proudly cruelty-free. We test our products on willing family members and friends only! Our commitment to nature extends to all living creatures.",
      },
      {
        question: "What is the shelf life of your products?",
        answer: "Because we use natural ingredients without harsh preservatives, our products have a shelf life of 6-12 months. We recommend storing them in a cool, dry place away from direct sunlight. Each product has a best-by date on the label.",
      },
      {
        question: "Are your products safe for sensitive skin?",
        answer: "Our products are formulated with gentle, natural ingredients that are generally well-tolerated by sensitive skin. However, everyone's skin is unique. We always recommend doing a patch test before full use, especially if you have known allergies or sensitivities.",
      },
      {
        question: "Do you grow your own ingredients?",
        answer: "Yes! We have our own garden beds where we grow rosemary, lavender, and vegetables. We believe in knowing exactly where our ingredients come from. What we can't grow ourselves, we source from trusted organic suppliers.",
      },
    ],
  },
  {
    title: "Ordering & Payment",
    icon: Package,
    color: "text-primary",
    bgColor: "bg-primary/10",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and Shop Pay for convenient checkout.",
      },
      {
        question: "Can I modify or cancel my order?",
        answer: "We begin preparing orders quickly, so please contact us at thelyfeproducts@gmail.com as soon as possible if you need to make changes. If your order hasn't shipped yet, we'll do our best to accommodate your request.",
      },
      {
        question: "Do you offer gift cards?",
        answer: "Not currently, but we're working on it! In the meantime, feel free to reach out if you'd like to send a gift to someone special and we can help arrange something.",
      },
      {
        question: "Is my payment information secure?",
        answer: "Absolutely! We use industry-standard SSL encryption and never store your complete payment information. All transactions are processed securely through trusted payment providers.",
      },
    ],
  },
  {
    title: "Shipping & Delivery",
    icon: Truck,
    color: "text-terracotta",
    bgColor: "bg-terracotta/10",
    questions: [
      {
        question: "How long does shipping take?",
        answer: "Standard shipping takes 3-7 business days. We also offer express shipping (2-3 business days) for an additional fee. Please allow 1-2 business days for us to prepare your order before it ships.",
      },
      {
        question: "Do you offer free shipping?",
        answer: "Yes! We offer free standard shipping on all orders over $35 within the United States.",
      },
      {
        question: "Do you ship internationally?",
        answer: "Currently, we only ship within the United States (all 50 states). We hope to expand internationally in the future! Sign up for our newsletter to be the first to know when we do.",
      },
      {
        question: "How can I track my order?",
        answer: "Once your order ships, you'll receive an email with a tracking number. You can use this to follow your package's journey to your doorstep.",
      },
    ],
  },
  {
    title: "Returns & Concerns",
    icon: Heart,
    color: "text-moss",
    bgColor: "bg-moss/10",
    questions: [
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy. If you're not satisfied with your purchase, contact us within 30 days of delivery for a full refund. Please note that for hygiene reasons, items that have been opened or used extensively cannot be returned.",
      },
      {
        question: "What if my order arrives damaged?",
        answer: "We're so sorry if that happens! Please email us at thelyfeproducts@gmail.com with photos of the damage within 48 hours of receiving your order. We'll send a replacement right away.",
      },
      {
        question: "What if I have an allergic reaction?",
        answer: "Please discontinue use immediately and consult a healthcare provider if needed. Contact us so we can help identify which ingredient may have caused the reaction. Your safety is our priority.",
      },
    ],
  },
  {
    title: "About Lyfe Products",
    icon: Sparkles,
    color: "text-sky",
    bgColor: "bg-sky/10",
    questions: [
      {
        question: "Who makes Lyfe Products?",
        answer: "We're a small family business rooted in indigenous wisdom and a deep love for natural healing. Every product is handcrafted with intention and care. We believe in the power of plants and the importance of connecting with nature.",
      },
      {
        question: "Why did you start Lyfe Products?",
        answer: "We started because we believe the Earth has everything we need to heal and thrive. We wanted to create products that honor traditional knowledge while serving modern wellness needs—without the chemicals and synthetic ingredients found in most commercial products.",
      },
      {
        question: "How can I become a Lyfe Ambassador?",
        answer: "We'd love to have you! Visit our Ambassadors page to learn more about the program and apply. We're looking for passionate individuals who share our values and want to spread the word about natural wellness.",
      },
      {
        question: "How can I contact you?",
        answer: "You can reach us anytime at thelyfeproducts@gmail.com. We typically respond within 24-48 hours. You can also chat with our LyfeBot assistant (look for the chat bubble!) for quick answers.",
      },
    ],
  },
];

const FAQ = () => {
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
              Frequently Asked Questions
            </span>
            <h1 className="heading-hero mb-6">
              Got Questions?
              <br />
              <span className="text-secondary">We've Got Answers</span>
            </h1>
            <p className="body-large text-muted-foreground">
              Everything you need to know about our products, shipping, and more. 
              Can't find what you're looking for? Just reach out!
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container-lyfe">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-card rounded-3xl p-8 shadow-soft"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${category.bgColor} p-3 rounded-xl`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h2 className="heading-card text-2xl">{category.title}</h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.title}-${index}`}
                      className="border border-border rounded-xl px-4 data-[state=open]:bg-muted/30"
                    >
                      <AccordionTrigger className="font-body font-semibold text-charcoal text-left hover:no-underline py-4">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="font-body text-muted-foreground pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>

          {/* Still Have Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center bg-secondary/5 rounded-3xl p-12"
          >
            <div className="bg-secondary/10 p-4 rounded-2xl inline-block mb-6">
              <HelpCircle className="w-10 h-10 text-secondary" />
            </div>
            <h2 className="heading-card text-2xl mb-4">Still Have Questions?</h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto mb-6">
              We're always here to help! Reach out to us anytime and we'll get back to you 
              as soon as possible.
            </p>
            <a
              href="mailto:thelyfeproducts@gmail.com"
              className="btn-earth inline-flex items-center gap-2"
            >
              Email Us
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
