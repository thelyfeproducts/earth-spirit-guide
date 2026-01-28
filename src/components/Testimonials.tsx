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
    <section className="section-padding bg-background">
      <div className="container-lyfe">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-accent/20 text-charcoal font-body font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Real Stories
          </span>
          <h2 className="heading-section text-charcoal mb-4">
            People Feel the Difference
          </h2>
          <p className="body-large text-muted-foreground max-w-xl mx-auto">
            Honest words from our community.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              className="lyfe-card"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                  <span className="font-display font-bold text-secondary">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-display font-bold text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.product}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
