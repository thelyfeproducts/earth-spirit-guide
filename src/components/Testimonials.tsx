import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maya Johnson",
    location: "Los Angeles, CA",
    quote: "I've tried so many hair products, but the Rosemary Hair Oil is the only thing that's actually helped with growth. My hair feels so much healthier!",
    rating: 5,
    product: "Hair Growth Oil",
    avatar: "M",
  },
  {
    id: 2,
    name: "David Chen",
    location: "Seattle, WA",
    quote: "The Body Butter is incredible. It's the first time I've found something that keeps my skin moisturized all day without feeling greasy. Love it!",
    rating: 5,
    product: "Body Butter",
    avatar: "D",
  },
  {
    id: 3,
    name: "Sophia Williams",
    location: "Austin, TX",
    quote: "As someone with sensitive skin, I'm always careful about what I use. These products are so gentle and the results speak for themselves. Thank you Lyfe!",
    rating: 5,
    product: "Healing Balm",
    avatar: "S",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Testimonials = () => {
  return (
    <section className="section-padding bg-card/50">
      <div className="container-lyfe">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-terracotta/10 text-terracotta font-body font-semibold px-4 py-2 rounded-full text-sm mb-6">
            Real Results
          </span>
          <h2 className="heading-section mb-4">
            People Feel
            <br />
            <span className="text-secondary">the Difference</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              className="lyfe-card relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 bg-secondary text-secondary-foreground p-3 rounded-full">
                <Quote className="w-5 h-5" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-charcoal leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <span className="font-display font-bold text-secondary text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-display font-bold text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Product Tag */}
              <div className="mt-4">
                <span className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-body font-medium">
                  Purchased: {testimonial.product}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
