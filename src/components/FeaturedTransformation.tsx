import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import week1 from "@/assets/transformation-week1.jpeg";
import week4 from "@/assets/transformation-week4.jpeg";

const FeaturedTransformation = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/5 overflow-hidden">
      <div className="container-lyfe">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground font-body font-semibold px-4 py-2 rounded-full text-sm mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            Real Results
          </span>
          
          <h2 className="heading-section mb-4">
            See the
            <span className="text-secondary"> Transformation</span>
          </h2>
          
          <p className="body-large max-w-2xl mx-auto text-muted-foreground">
            Real stories from real people. This young student went from being bullied to gaining 
            newfound confidence, all in just 4 weeks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Before/After Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative">
              <div className="absolute top-3 left-3 z-10 bg-charcoal/80 text-white px-3 py-1 rounded-full text-sm font-body font-bold">
                Week 1
              </div>
              <img
                src={week1}
                alt="Week 1 - Before"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="relative">
              <div className="absolute top-3 left-3 z-10 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-body font-bold">
                Week 4
              </div>
              <img
                src={week4}
                alt="Week 4 - After"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center md:text-left"
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl text-charcoal mb-4">
              From Struggle to Confidence
            </h3>
            
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              "This young student I mentor was bullied and made fun of at school. After just a few weeks 
              of using our Hair Growth Oil, the transformation was remarkable. Not just his hair, 
              but his confidence, his spirit, his belief in himself."
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-body font-medium">
                4 Week Journey
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-body font-medium">
                Youth Mentorship
              </span>
              <span className="bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-body font-medium">
                Natural Healing
              </span>
            </div>
            
            <Link
              to="/testimonials"
              className="btn-earth inline-flex items-center gap-2"
            >
              See Full Transformation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTransformation;
