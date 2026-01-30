import { motion } from "framer-motion";
import lyfePeace from "@/assets/lyfe-peace.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="container-lyfe">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body font-semibold text-secondary uppercase tracking-[0.2em] mb-6"
            >
              💝 Valentine's Day Special 💝
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="heading-hero mb-8"
            >
              Love Yourself,
              <br />
              <span className="text-secondary">Love the Earth</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="body-large max-w-xl mx-auto lg:mx-0 mb-12"
            >
              This Valentine's Day, gift yourself and your loved ones nature's purest remedies. 🌹
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a href="#shop" className="btn-earth">
                Shop the Remedies
              </a>
            </motion.div>
          </motion.div>

          {/* Lyfe Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end pt-24"
          >
            <motion.img
              src={lyfePeace}
              alt="Lyfe - Your Earth Guardian"
              className="w-64 md:w-72 lg:w-80 h-auto drop-shadow-2xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Speech Bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -top-4 lg:top-4 -left-2 md:left-4 lg:left-0 bg-card rounded-xl p-3 shadow-lg max-w-36"
            >
              <p className="font-body font-semibold text-charcoal text-xs">
                "Spread love, naturally!" 💕🌿
              </p>
              <div className="absolute -bottom-2 right-6 w-3 h-3 bg-card transform rotate-45" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
