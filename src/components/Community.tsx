import { motion } from "framer-motion";
import { Users, Sprout, Star, Quote } from "lucide-react";
import week1 from "@/assets/transformation-week1.jpeg";
import week4 from "@/assets/transformation-week4.jpeg";

const stats = [
  { icon: Users, value: "10K+", label: "Happy Customers" },
  { icon: Sprout, value: "50+", label: "Youth Mentored" },
  { icon: Star, value: "4.9", label: "Average Rating" },
];

const testimonial = {
  quote: "This young student I mentor was bullied at school. After just 4 weeks of using our Hair Growth Oil, the transformation was remarkable. Not just his hair, but his confidence.",
  author: "Lyfe Products Team",
};

const Community = () => {
  return (
    <section id="community" className="section-padding bg-card/30 overflow-hidden">
      <div className="container-lyfe">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-section mb-4">
            Community &<span className="text-secondary"> Transformation</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            People feel the difference. Real stories from real healing journeys.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Transformation Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Testimonial */}
            <div className="bg-card rounded-2xl p-6 mb-8 shadow-sm border border-border">
              <Quote className="w-8 h-8 text-secondary/40 mb-4" />
              <p className="font-body text-charcoal leading-relaxed mb-4 italic">
                "{testimonial.quote}"
              </p>
              <p className="font-body font-semibold text-muted-foreground text-sm">
                — {testimonial.author}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-secondary/10 p-3 rounded-xl inline-flex mb-2">
                    <stat.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="font-display font-black text-xl text-charcoal">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Community;
