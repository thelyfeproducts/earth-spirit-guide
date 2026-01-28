import { motion } from "framer-motion";
import { Users, Heart, Sprout, Award } from "lucide-react";
import lyfeMeditation from "@/assets/lyfe-meditation.png";
import { CommunityHerbs } from "./FloatingHerbs";

const stats = [
  { icon: Users, value: "10K+", label: "Happy Customers" },
  { icon: Sprout, value: "50+", label: "Youth Mentored" },
  { icon: Award, value: "4.9", label: "Average Rating" },
];

const Community = () => {
  return (
    <section id="community" className="section-padding overflow-hidden relative">
      <CommunityHerbs />
      <div className="container-lyfe">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-section mb-6">
              Community
              <span className="text-secondary"> & Impact</span>
            </h2>
            
            <p className="body-large mb-8">
              Real people, real transformations. We're committed to healing communities 
              and supporting youth through mentorship and wellness.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="bg-secondary/10 p-3 rounded-xl">
                    <stat.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-display font-black text-2xl text-charcoal">
                      {stat.value}
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lyfe Meditation Character */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <motion.img
              src={lyfeMeditation}
              alt="Lyfe meditating peacefully"
              className="w-72 md:w-80 lg:w-[400px] h-auto drop-shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Floating elements */}
            <motion.div
              className="absolute top-10 right-10 text-4xl"
              animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              🌿
            </motion.div>
            <motion.div
              className="absolute bottom-20 left-10 text-3xl"
              animate={{ y: [0, -6, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              🌱
            </motion.div>
            <motion.div
              className="absolute top-1/2 right-0 text-2xl"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              ✨
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Community;
