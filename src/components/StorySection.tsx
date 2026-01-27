import { motion } from "framer-motion";
import lyfeWatering from "@/assets/lyfe-watering.png";
import herbAloe from "@/assets/herb-aloe.png";
import herbRosemary from "@/assets/herb-rosemary.png";

const StorySection = () => {
  return (
    <section id="story" className="section-padding overflow-hidden relative">
      {/* Floating Herbs */}
      <motion.img
        src={herbAloe}
        alt=""
        className="absolute bottom-20 left-4 md:left-16 w-16 md:w-28 h-auto opacity-50 pointer-events-none"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={herbRosemary}
        alt=""
        className="absolute top-20 right-8 md:right-20 w-12 md:w-20 h-auto opacity-50 pointer-events-none rotate-45"
        animate={{ y: [0, 6, 0], rotate: [45, 50, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      <div className="container-lyfe">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lyfe Character */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            <motion.img
              src={lyfeWatering}
              alt="Lyfe watering plants"
              className="w-72 md:w-80 lg:w-96 h-auto drop-shadow-xl"
              animate={{ rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-charcoal/5 rounded-full blur-xl" />
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-1 lg:order-2"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block bg-secondary/10 text-secondary font-body font-semibold px-4 py-2 rounded-full text-sm mb-6"
            >
              The Lyfe Story
            </motion.span>
            
            <h2 className="heading-section mb-6">
              Lyfe is more than
              <br />
              <span className="text-secondary">a product.</span>
            </h2>
            
            <p className="body-large mb-6">
              Born from indigenous wisdom and a return to nature, Lyfe Products™ exists to help people heal — gently, honestly, naturally.
            </p>
            
            <p className="font-body text-muted-foreground mb-8">
              When modern products filled homes with chemicals, sickness followed. 
              Lyfe was born as a return — a return to plants, to simplicity, 
              to listening to the Earth. We don't sell products. We offer remedies 
              from the Earth, prepared with intention.
            </p>
            
            <a href="#about" className="btn-earth inline-flex items-center gap-2">
              Enter the Lyfe World
              <span className="text-xl">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
