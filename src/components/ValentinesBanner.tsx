import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ST_PATRICKS_DAY = new Date("2026-03-17T23:59:59");

const ValentinesBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = ST_PATRICKS_DAY.getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setIsVisible(false);
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        className="bg-gradient-to-r from-[#155c15] via-[#237a23] to-[#155c15] text-white py-2.5 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <span className="absolute top-1 left-[8%] text-white/20 text-lg">🍀</span>
          <span className="absolute top-1 left-[28%] text-white/20 text-base">☘️</span>
          <span className="absolute top-1 right-[28%] text-white/20 text-base">🍀</span>
          <span className="absolute top-1 right-[8%] text-white/20 text-lg">☘️</span>
        </div>

        <div className="container-lyfe flex items-center justify-center gap-3 md:gap-6 text-sm md:text-base relative z-10">
          <div className="flex items-center gap-2">
            <span className="text-base">🍀</span>
            <span className="font-body font-semibold hidden sm:inline">St. Patrick's Day Sale</span>
          </div>
          <span className="hidden md:inline text-white/60">|</span>
          <span className="font-body font-bold">FREE Shipping on $50+</span>
          <span className="hidden md:inline text-white/60">|</span>
          <div className="flex items-center gap-1.5 font-display font-bold">
            <span className="hidden sm:inline text-xs opacity-90">Ends in:</span>
            <div className="flex gap-1">
              <span className="bg-white/20 px-1.5 py-0.5 rounded text-xs">{timeLeft.days}d</span>
              <span className="bg-white/20 px-1.5 py-0.5 rounded text-xs">{timeLeft.hours}h</span>
              <span className="bg-white/20 px-1.5 py-0.5 rounded text-xs">{timeLeft.minutes}m</span>
              <span className="bg-white/20 px-1.5 py-0.5 rounded text-xs">{timeLeft.seconds}s</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ValentinesBanner;
