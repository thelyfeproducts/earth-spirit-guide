import { motion } from "framer-motion";
import { Truck, Package, Clock, MapPin, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const shippingInfo = [
  {
    icon: Truck,
    title: "Standard Shipping",
    description: "3-7 business days",
    details: "Free on orders over $35",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Clock,
    title: "Processing Time",
    description: "1-2 business days",
    details: "We hand-prepare each order",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Package,
    title: "Eco-Friendly Packaging",
    description: "Recyclable materials",
    details: "Minimal plastic, maximum love",
    color: "text-moss",
    bgColor: "bg-moss/10",
  },
  {
    icon: MapPin,
    title: "We Ship To",
    description: "United States",
    details: "All 50 states",
    color: "text-terracotta",
    bgColor: "bg-terracotta/10",
  },
];

const Shipping = () => {
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
              Shipping Information
            </span>
            <h1 className="heading-hero mb-6">
              From Our Hands
              <br />
              <span className="text-secondary">To Yours</span>
            </h1>
            <p className="body-large text-muted-foreground">
              Every order is carefully prepared and packaged with love. 
              Here's everything you need to know about getting your remedies delivered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shipping Info Cards */}
      <section className="py-16">
        <div className="container-lyfe">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {shippingInfo.map((item, index) => (
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
                <p className="font-body font-semibold text-charcoal mb-1">
                  {item.description}
                </p>
                <p className="font-body text-muted-foreground text-sm">
                  {item.details}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Detailed Shipping Info */}
          <div className="max-w-2xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-secondary/5 rounded-3xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-secondary/10 p-3 rounded-xl">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="heading-card text-xl mb-2">Small Batch, Big Love</h3>
                  <p className="font-body text-muted-foreground">
                    As a small family business, we personally prepare each order. This means your products 
                    are always fresh and made with intention. Please allow 1-2 business days for us to 
                    lovingly package your remedies before they ship.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-accent/10 rounded-3xl p-8"
            >
              <h3 className="heading-card text-xl mb-4">Questions About Your Order?</h3>
              <p className="font-body text-muted-foreground">
                We're always here to help! Email us at{" "}
                <a href="mailto:thelyfeproducts@gmail.com" className="text-secondary hover:underline font-semibold">
                  thelyfeproducts@gmail.com
                </a>
                {" "}and we'll get back to you as soon as possible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shipping;
