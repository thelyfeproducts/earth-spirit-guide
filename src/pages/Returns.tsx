import { motion } from "framer-motion";
import { RotateCcw, ShieldCheck, MessageCircle, Heart, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Returns = () => {
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
              Returns & Refunds
            </span>
            <h1 className="heading-hero mb-6">
              Your Satisfaction
              <br />
              <span className="text-secondary">Matters to Us</span>
            </h1>
            <p className="body-large text-muted-foreground">
              We stand behind every product we make. If something isn't right, 
              we'll make it right. That's our promise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="py-16">
        <div className="container-lyfe">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: RotateCcw,
                title: "30-Day Returns",
                description: "Not satisfied? Return within 30 days of delivery for a full refund.",
                color: "text-secondary",
                bgColor: "bg-secondary/10",
              },
              {
                icon: ShieldCheck,
                title: "Quality Guarantee",
                description: "If your product arrives damaged, we'll replace it immediately.",
                color: "text-primary",
                bgColor: "bg-primary/10",
              },
              {
                icon: MessageCircle,
                title: "Easy Process",
                description: "Just email us and we'll guide you through every step.",
                color: "text-terracotta",
                bgColor: "bg-terracotta/10",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="lyfe-card text-center group"
              >
                <div className={`${item.bgColor} p-4 rounded-2xl inline-block mb-4 transition-transform group-hover:scale-110`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="heading-card mb-2">{item.title}</h3>
                <p className="font-body text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Detailed Return Policy */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-3xl p-8 shadow-soft"
            >
              <h2 className="heading-card text-2xl mb-6">How to Return</h2>
              <ol className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Contact Us",
                    description: "Email thelyfeproducts@gmail.com with your order number and reason for return.",
                  },
                  {
                    step: "2",
                    title: "Get Instructions",
                    description: "We'll respond within 24-48 hours with return shipping details.",
                  },
                  {
                    step: "3",
                    title: "Ship It Back",
                    description: "Pack your items securely and send them to the address we provide.",
                  },
                  {
                    step: "4",
                    title: "Receive Refund",
                    description: "Once we receive your return, we'll process your refund within 5-7 business days.",
                  },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center font-display font-bold text-secondary">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-body font-semibold text-charcoal">{item.title}</h4>
                      <p className="font-body text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-secondary/5 rounded-3xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-secondary/10 p-3 rounded-xl">
                    <Heart className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="heading-card text-xl mb-2">Our Philosophy</h3>
                    <p className="font-body text-muted-foreground">
                      We believe in the power of our products, but we also understand that 
                      everyone's skin is different. If something doesn't work for you, we want 
                      to know so we can help you find what does.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 rounded-3xl p-8">
                <h3 className="heading-card text-xl mb-4">Refund Details</h3>
                <ul className="space-y-3">
                  {[
                    "Refunds issued to original payment method",
                    "Original shipping costs are non-refundable",
                    "Return shipping is the customer's responsibility",
                    "Exchanges available for damaged items only",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2" />
                      <span className="font-body text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-terracotta/10 rounded-3xl p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-terracotta/20 p-3 rounded-xl">
                    <AlertCircle className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="heading-card text-xl mb-2">Non-Returnable Items</h3>
                    <p className="font-body text-muted-foreground">
                      For hygiene reasons, items that have been opened or used extensively 
                      cannot be returned. If you have concerns about a product, please 
                      contact us before opening it.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Returns;
