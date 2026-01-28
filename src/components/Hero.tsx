import { motion } from "framer-motion";
import lyfePeace from "@/assets/lyfe-peace.png";
import herbLavenderClean from "@/assets/herb-lavender-clean.png";
import herbRoseClean from "@/assets/herb-rose-clean.png";
import { HeroHerbs } from "./FloatingHerbs";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 section-padding relative overflow-hidden">
      {/* Floating Herbs */}
      <HeroHerbs />
      
      {/* Clean Lavender & Rose - Bottom of hero block */}
      <motion.img
        src={herbLavenderClean}
        alt="Lavender"
        className="absolute bottom-16 left-4 md:left-12 lg:left-20 w-16 md:w-20 lg:w-24 h-auto pointer-events-none mix-blend-multiply"
        style={{ rotate: "-20deg" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.8, y: [0, -6, 0] }}
        transition={{ 
          opacity: { duration: 1, delay: 0.3 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.img
        src={herbRoseClean}
        alt="Rose"
        className="absolute bottom-20 right-4 md:right-12 lg:right-24 w-14 md:w-18 lg:w-20 h-auto pointer-events-none mix-blend-multiply"
        style={{ rotate: "15deg" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.75, y: [0, -8, 0] }}
        transition={{ 
          opacity: { duration: 1, delay: 0.5 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
        }}
      />
      <motion.img
        src={herbLavenderClean}
        alt="Lavender"
        className="absolute bottom-24 right-8 md:right-32 lg:right-48 w-12 md:w-14 h-auto pointer-events-none mix-blend-multiply hidden md:block"
        style={{ rotate: "30deg" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: [0, -5, 0] }}
        transition={{ 
          opacity: { duration: 1, delay: 0.7 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
      />
      
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
              className="font-body font-semibold text-secondary uppercase tracking-widest mb-4"
            >
              Welcome back to the Earth
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="heading-hero mb-6"
            >
              Organic Remedies
              <br />
              <span className="text-secondary">Made with Love</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="body-large max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Plant-powered wellness products made with intention and care. 
              Rooted in indigenous wisdom, crafted for modern healing.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#shop" className="btn-earth">
                Shop the Remedies
              </a>
              <a href="#story" className="btn-outline-earth">
                Meet Lyfe
              </a>
            </motion.div>
          </motion.div>

          {/* Lyfe Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
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
              className="absolute top-10 -left-4 md:left-0 lg:-left-10 bg-card rounded-2xl p-4 shadow-lg max-w-48"
            >
              <p className="font-body font-semibold text-charcoal text-sm">
                "You're safe here. Let's heal together." 🌿
              </p>
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-card transform rotate-45" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
