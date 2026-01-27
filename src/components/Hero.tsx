import { motion } from "framer-motion";
import lyfePeace from "@/assets/lyfe-peace.png";
import herbLavender from "@/assets/herb-lavender.png";
import herbRosemary from "@/assets/herb-rosemary.png";
import herbRose from "@/assets/herb-rose.png";
import herbChamomile from "@/assets/herb-chamomile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
      </div>

      {/* Floating Herbs - Left Side */}
      <motion.img
        src={herbLavender}
        alt=""
        className="absolute top-32 left-4 md:left-16 w-16 md:w-24 h-auto opacity-70 pointer-events-none"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={herbRosemary}
        alt=""
        className="absolute bottom-32 left-8 md:left-24 w-14 md:w-20 h-auto opacity-60 pointer-events-none"
        animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Floating Herbs - Right Side */}
      <motion.img
        src={herbRose}
        alt=""
        className="absolute top-40 right-4 md:right-20 w-14 md:w-20 h-auto opacity-70 pointer-events-none"
        animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.img
        src={herbChamomile}
        alt=""
        className="absolute bottom-40 right-8 md:right-32 w-16 md:w-24 h-auto opacity-60 pointer-events-none"
        animate={{ y: [0, 10, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

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
              className="w-80 md:w-96 lg:w-[450px] h-auto drop-shadow-2xl"
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
