import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const GivingBack = () => {
  return (
    <section className="section-padding bg-secondary/5">
      <div className="container-lyfe">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-6">
            <Leaf className="w-7 h-7 text-secondary" />
          </div>
          
          <h2 className="heading-section mb-6">
            Ready to return<span className="text-secondary"> to the Earth</span>
          </h2>
          
          <p className="body-large text-muted-foreground">
            Every purchase supports youth programs, community gardens, and sustainable practices. 
            We give back because the Earth gave first.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GivingBack;
