import { motion } from "framer-motion";
import herbLavender from "@/assets/herb-lavender.png";
import herbRosemary from "@/assets/herb-rosemary.png";
import herbRose from "@/assets/herb-rose.png";
import herbChamomile from "@/assets/herb-chamomile.png";
import herbAloe from "@/assets/herb-aloe.png";

type HerbType = "lavender" | "rosemary" | "rose" | "chamomile" | "aloe";

interface HerbProps {
  type: HerbType;
  className?: string;
  size?: "sm" | "md" | "lg";
  animationDelay?: number;
  rotate?: number;
}

const herbImages: Record<HerbType, string> = {
  lavender: herbLavender,
  rosemary: herbRosemary,
  rose: herbRose,
  chamomile: herbChamomile,
  aloe: herbAloe,
};

const sizeClasses = {
  sm: "w-12 md:w-16",
  md: "w-16 md:w-24",
  lg: "w-24 md:w-32",
};

export const FloatingHerb = ({ 
  type, 
  className = "", 
  size = "md", 
  animationDelay = 0,
  rotate = 0 
}: HerbProps) => {
  return (
    <motion.img
      src={herbImages[type]}
      alt={`${type} herb`}
      className={`${sizeClasses[size]} h-auto pointer-events-none select-none mix-blend-multiply ${className}`}
      style={{ rotate: `${rotate}deg` }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 0.7, 
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: { duration: 0.8, delay: animationDelay },
        scale: { duration: 0.8, delay: animationDelay },
        y: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: animationDelay }
      }}
    />
  );
};

// Pre-configured herb arrangements for different sections - positioned at edges
export const HeroHerbs = () => (
  <>
    <FloatingHerb 
      type="lavender" 
      className="absolute top-40 left-2 hidden xl:block" 
      size="sm" 
      rotate={-15}
      animationDelay={0.5}
    />
    <FloatingHerb 
      type="chamomile" 
      className="absolute bottom-20 left-4 hidden xl:block" 
      size="sm" 
      rotate={10}
      animationDelay={0.8}
    />
  </>
);

export const StoryHerbs = () => (
  <>
    <FloatingHerb 
      type="rose" 
      className="absolute top-8 right-2 hidden xl:block" 
      size="sm" 
      rotate={-5}
      animationDelay={0.3}
    />
    <FloatingHerb 
      type="aloe" 
      className="absolute bottom-8 left-2 hidden xl:block" 
      size="sm" 
      rotate={15}
      animationDelay={0.5}
    />
  </>
);

export const WhyOrganicHerbs = () => (
  <>
    <FloatingHerb 
      type="chamomile" 
      className="absolute top-8 left-2 hidden xl:block" 
      size="sm" 
      rotate={-10}
      animationDelay={0.2}
    />
    <FloatingHerb 
      type="lavender" 
      className="absolute bottom-8 right-2 hidden xl:block" 
      size="sm" 
      rotate={20}
      animationDelay={0.4}
    />
  </>
);

export const RemediesHerbs = () => (
  <>
    <FloatingHerb 
      type="rosemary" 
      className="absolute top-4 left-2 hidden xl:block" 
      size="sm" 
      rotate={-20}
      animationDelay={0.3}
    />
    <FloatingHerb 
      type="rose" 
      className="absolute bottom-8 right-2 hidden xl:block" 
      size="sm" 
      rotate={15}
      animationDelay={0.6}
    />
  </>
);

export const TestimonialsHerbs = () => (
  <>
    <FloatingHerb 
      type="lavender" 
      className="absolute top-12 right-2 hidden xl:block" 
      size="sm" 
      rotate={10}
      animationDelay={0.4}
    />
    <FloatingHerb 
      type="chamomile" 
      className="absolute bottom-8 left-2 hidden xl:block" 
      size="sm" 
      rotate={-15}
      animationDelay={0.6}
    />
  </>
);

export const CommunityHerbs = () => (
  <>
    <FloatingHerb 
      type="rose" 
      className="absolute top-4 left-2 hidden xl:block" 
      size="sm" 
      rotate={20}
      animationDelay={0.3}
    />
    <FloatingHerb 
      type="rosemary" 
      className="absolute bottom-8 right-2 hidden xl:block" 
      size="sm" 
      rotate={-10}
      animationDelay={0.5}
    />
  </>
);

export const CTAHerbs = () => (
  <>
    <FloatingHerb 
      type="aloe" 
      className="absolute top-8 left-2 hidden xl:block" 
      size="sm" 
      rotate={-15}
      animationDelay={0.2}
    />
    <FloatingHerb 
      type="lavender" 
      className="absolute bottom-4 right-2 hidden xl:block" 
      size="sm" 
      rotate={25}
      animationDelay={0.4}
    />
  </>
);
