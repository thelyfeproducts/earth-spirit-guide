import { motion } from "framer-motion";
import { Star, Quote, ChevronRight, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import week1 from "@/assets/transformation-week1.jpeg";
import week2 from "@/assets/transformation-week2.jpeg";
import week3 from "@/assets/transformation-week3.jpeg";
import week4 from "@/assets/transformation-week4.jpeg";

const transformationSteps = [
  {
    week: 1,
    image: week1,
    title: "The Beginning",
    description: "Starting the journey with Lyfe Products Hair Growth Oil. First application and commitment to consistent use.",
  },
  {
    week: 2,
    image: week2,
    title: "Early Progress",
    description: "Visible improvement beginning to show. Scalp health improving and new growth starting to appear.",
  },
  {
    week: 3,
    image: week3,
    title: "Building Momentum",
    description: "Significant changes becoming apparent. Confidence growing as results continue to improve.",
  },
  {
    week: 4,
    image: week4,
    title: "Transformation Complete",
    description: "Remarkable progress achieved. A journey from struggle to confidence, from doubt to self-belief.",
  },
];

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

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary/5 to-background">
          <div className="container-lyfe text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-secondary/10 text-secondary font-body font-semibold px-4 py-2 rounded-full text-sm mb-6"
            >
              Real Stories, Real Results
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-hero mb-6"
            >
              Transformations That
              <br />
              <span className="text-secondary">Speak for Themselves</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="body-large max-w-2xl mx-auto"
            >
              Every journey is unique, but they all share one thing: the power of natural healing. 
              These are the stories of real people who trusted the process.
            </motion.p>
          </div>
        </section>

        {/* Featured Transformation Story */}
        <section className="section-padding">
          <div className="container-lyfe">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border mb-16"
            >
              {/* Story Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="font-body font-semibold text-sm">Featured Transformation</span>
                </div>
                
                <h2 className="heading-section mb-4">
                  From Struggle to
                  <span className="text-secondary"> Confidence</span>
                </h2>
                
                <p className="body-large max-w-3xl mx-auto text-muted-foreground">
                  This is the story of a young student I mentor. He was bullied and made fun of at school. 
                  After just a few weeks of using Lyfe Products, the transformation was remarkable, 
                  not just in his hair, but in his confidence and self-belief.
                </p>
              </div>

              {/* Week by Week Timeline */}
              <div className="grid md:grid-cols-4 gap-6 md:gap-8">
                {transformationSteps.map((step, index) => (
                  <motion.div
                    key={step.week}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative"
                  >
                    {/* Connector Line (desktop) */}
                    {index < transformationSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/3 -right-4 w-8 z-10">
                        <ChevronRight className="w-6 h-6 text-secondary/40" />
                      </div>
                    )}
                    
                    <div className="bg-background rounded-2xl overflow-hidden shadow-md border border-border hover:shadow-xl transition-shadow duration-300">
                      {/* Week Badge */}
                      <div className="relative">
                        <div className="absolute top-3 left-3 z-10 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-body font-bold">
                          Week {step.week}
                        </div>
                        <img
                          src={step.image}
                          alt={`Week ${step.week} progress`}
                          className="w-full aspect-square object-cover"
                        />
                      </div>
                      
                      <div className="p-4">
                        <h3 className="font-display font-bold text-lg text-charcoal mb-2">
                          {step.title}
                        </h3>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Impact Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12 text-center bg-secondary/5 rounded-2xl p-8"
              >
                <Quote className="w-10 h-10 text-secondary mx-auto mb-4" />
                <p className="font-display text-xl md:text-2xl text-charcoal italic mb-4">
                  "It's not just about the hair. It's about watching someone believe in themselves again."
                </p>
                <p className="font-body text-muted-foreground">
                  — A mentor's perspective on the power of natural healing
                </p>
              </motion.div>
            </motion.div>

            {/* Other Testimonials */}
            <div className="text-center mb-12">
              <h2 className="heading-section mb-4">
                More Stories from
                <span className="text-secondary"> Our Community</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-secondary/5">
          <div className="container-lyfe text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-section mb-6"
            >
              Ready to Start Your
              <span className="text-secondary"> Transformation?</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="body-large mb-8 max-w-xl mx-auto"
            >
              Join thousands who have discovered the power of natural, plant-based healing.
            </motion.p>
            
            <motion.a
              href="/collections/all-remedies"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="btn-earth inline-flex items-center gap-2"
            >
              Shop Our Remedies
              <ChevronRight className="w-5 h-5" />
            </motion.a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
