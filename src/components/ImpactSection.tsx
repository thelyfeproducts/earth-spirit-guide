import { motion } from "framer-motion";
import { TreePine, Users, Heart, GraduationCap, Infinity, LucideIcon } from "lucide-react";
import lyfeWatering from "@/assets/lyfe-watering.png";

interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
  bgColor: string;
  iconColor?: string;
}

const stats: StatItem[] = [
  { 
    icon: TreePine, 
    value: "10,000+", 
    label: "Trees Planted",
    bgColor: "bg-white/10",
  },
  { 
    icon: Users, 
    value: "500+", 
    label: "Youth Program Participants",
    bgColor: "bg-primary/30",
  },
  { 
    icon: Heart, 
    value: "$50K+", 
    label: "Donated to Wellness Initiatives",
    bgColor: "bg-accent/80",
    iconColor: "text-charcoal",
  },
  { 
    icon: GraduationCap, 
    value: "25", 
    label: "Community Workshops",
    bgColor: "bg-primary/40",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ImpactSection = () => {
  return (
    <section className="section-padding gradient-green relative overflow-hidden">
      {/* Lyfe Character - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 md:left-8 lg:left-16 pointer-events-none hidden md:block"
      >
        <motion.img
          src={lyfeWatering}
          alt="Lyfe watering plants"
          className="w-40 lg:w-52 h-auto opacity-90"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="container-lyfe relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-body font-medium text-white/70 uppercase tracking-widest text-sm mb-4 block">
            Community & Impact
          </span>
          <h2 className="heading-section text-white mb-6">
            Growing Together,
            <br />
            Healing Together
          </h2>
          <p className="body-large text-white/80 max-w-2xl mx-auto mb-8">
            Every purchase supports our mission to make wellness accessible to all.
            Through youth programs, community initiatives, and environmental action,
            we're nurturing the next generation of Earth stewards.
          </p>

          {/* Lyfe Gives Back Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="btn-lyfe-back"
          >
            <div className="bg-beige rounded-full p-2">
              <Infinity className="w-5 h-5 text-secondary" />
            </div>
            Lyfe Gives Back
          </motion.button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="stat-card"
            >
              <div className={`${stat.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor || 'text-white'}`} />
              </div>
              <p className="font-display font-black text-2xl md:text-3xl text-white mb-1">
                {stat.value}
              </p>
              <p className="font-body text-sm text-white/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
