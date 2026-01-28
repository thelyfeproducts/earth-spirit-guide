import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import lyfePointing from "@/assets/lyfe-pointing.png";
import { CTAHerbs } from "./FloatingHerbs";

const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="section-padding bg-secondary/10 relative overflow-hidden">
      {/* Floating Herbs */}
      <CTAHerbs />
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-lyfe relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="heading-section mb-6">
              Join the
              <span className="text-secondary"> Lyfe</span>
            </h2>
            
            <p className="body-large mb-8 max-w-lg mx-auto lg:mx-0">
              Be the first to know about new remedies, Earth wisdom, and exclusive offers.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-card border border-border font-body text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="btn-earth flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    Joined!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Join the Lyfe
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Lyfe Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <motion.img
              src={lyfePointing}
              alt="Lyfe pointing up"
              className="w-64 md:w-72 lg:w-80 h-auto drop-shadow-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Speech Bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-8 right-4 md:right-16 lg:right-20 bg-card rounded-xl p-3 shadow-lg max-w-32"
            >
              <p className="font-body font-semibold text-charcoal text-xs">
                "The Earth provides!" 🌍
              </p>
              <div className="absolute -bottom-2 left-6 w-3 h-3 bg-card transform rotate-45" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
