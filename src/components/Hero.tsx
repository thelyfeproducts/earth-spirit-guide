import { motion } from "framer-motion";
import lyfePeace from "@/assets/lyfe-peace.png";

const Hero = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Subtle decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-lyfe relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body font-medium text-white/80 uppercase tracking-widest text-sm mb-6"
            >
              Welcome to The Lyfe
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="heading-hero text-white mb-6"
            >
              Organic Wellness,
              <br />
              Rooted in Nature
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="body-large text-white/85 max-w-2xl mx-auto mb-10"
            >
              Plant-powered remedies made with intention and care. 
              Step into a world where healing happens naturally.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a href="#shop" className="btn-white inline-flex items-center gap-2">
                Shop the Remedies
              </a>
            </motion.div>
          </motion.div>

          {/* Lyfe Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative mt-8"
          >
            <motion.img
              src={lyfePeace}
              alt="Lyfe - Your Earth Guardian"
              className="w-48 md:w-56 lg:w-64 h-auto drop-shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Speech Bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -top-4 -right-20 md:-right-28 bg-white rounded-2xl py-3 px-4 shadow-medium"
            >
              <p className="font-body font-semibold text-charcoal text-sm whitespace-nowrap">
                Welcome home 🌿
              </p>
              <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white transform rotate-45" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
