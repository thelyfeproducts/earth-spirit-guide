import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface ComparisonFeature {
  name: string;
  lyfe: boolean;
  competitors: {
    name: string;
    value: boolean;
  }[];
}

const competitors = ["Jentl", "Native", "Kobees CO"];

const features: ComparisonFeature[] = [
  {
    name: "Chemical-Free Formula",
    lyfe: true,
    competitors: [
      { name: "Jentl", value: true },
      { name: "Native", value: false },
      { name: "Kobees CO", value: true },
    ],
  },
  {
    name: "Commitment to Giving Back",
    lyfe: true,
    competitors: [
      { name: "Jentl", value: false },
      { name: "Native", value: false },
      { name: "Kobees CO", value: true },
    ],
  },
  {
    name: "Education Focus",
    lyfe: true,
    competitors: [
      { name: "Jentl", value: true },
      { name: "Native", value: true },
      { name: "Kobees CO", value: true },
    ],
  },
  {
    name: "Mentorship",
    lyfe: true,
    competitors: [
      { name: "Jentl", value: true },
      { name: "Native", value: false },
      { name: "Kobees CO", value: false },
    ],
  },
  {
    name: "Local Ingredients",
    lyfe: true,
    competitors: [
      { name: "Jentl", value: false },
      { name: "Native", value: false },
      { name: "Kobees CO", value: false },
    ],
  },
];

const CheckIcon = () => (
  <div className="flex items-center justify-center">
    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
      <Check className="w-5 h-5 text-secondary" strokeWidth={3} />
    </div>
  </div>
);

const XIcon = () => (
  <div className="flex items-center justify-center">
    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
      <X className="w-5 h-5 text-destructive" strokeWidth={3} />
    </div>
  </div>
);

const CompetitorComparison = () => {
  return (
    <section className="section-padding bg-cream/50">
      <div className="container-lyfe">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-secondary/10 text-secondary font-body font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="heading-section">
            What Sets Us <span className="text-secondary">Apart</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto mt-4">
            See how The Lyfe Products™ compares to other brands in the wellness space.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[640px]">
            {/* Header Row */}
            <div className="grid grid-cols-5 gap-2 mb-2">
              <div className="bg-primary rounded-2xl p-4 flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-sm md:text-base">
                  Competitor
                </span>
              </div>
              <div className="bg-secondary rounded-2xl p-4 flex items-center justify-center">
                <span className="font-display font-bold text-secondary-foreground text-sm md:text-base text-center">
                  The Lyfe Products
                </span>
              </div>
              {competitors.map((competitor) => (
                <div
                  key={competitor}
                  className="bg-primary rounded-2xl p-4 flex items-center justify-center"
                >
                  <span className="font-display font-bold text-primary-foreground text-sm md:text-base text-center">
                    {competitor}
                  </span>
                </div>
              ))}
            </div>

            {/* Feature Rows */}
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="grid grid-cols-5 gap-2 mb-2"
              >
                <div className="bg-accent/30 rounded-2xl p-4 flex items-center justify-center">
                  <span className="font-body font-semibold text-charcoal text-sm md:text-base text-center">
                    {feature.name}
                  </span>
                </div>
                <div className="bg-muted rounded-2xl p-4">
                  <CheckIcon />
                </div>
                {feature.competitors.map((comp) => (
                  <div
                    key={comp.name}
                    className="bg-muted rounded-2xl p-4"
                  >
                    {comp.value ? <CheckIcon /> : <XIcon />}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted-foreground font-body text-sm mt-8"
        >
          We're committed to transparency, community, and using only the purest ingredients.
        </motion.p>
      </div>
    </section>
  );
};

export default CompetitorComparison;
