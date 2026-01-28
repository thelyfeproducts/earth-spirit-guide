import { motion } from "framer-motion";
import lyfeMeditation from "@/assets/lyfe-meditation.png";

const StorySection = () => {
  return (
    <section id="story" className="section-padding bg-beige overflow-hidden relative">
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
              src={lyfeMeditation}
              alt="Lyfe meditating"
              className="w-64 md:w-72 lg:w-80 h-auto drop-shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
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
            
            <h2 className="heading-section text-charcoal mb-6">
              More Than a Brand.
              <br />
              <span className="text-secondary">A Way of Living.</span>
            </h2>
            
            <p className="body-large text-charcoal/80 mb-6">
              Born from indigenous wisdom and a return to nature, The Lyfe exists to help people heal — gently, honestly, naturally.
            </p>
            
            <p className="font-body text-muted-foreground mb-8">
              When modern products filled homes with chemicals, sickness followed. 
              The Lyfe was born as a return — a return to plants, to simplicity, 
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
