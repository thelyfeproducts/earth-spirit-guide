import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Gift } from "lucide-react";

const ValentinesBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    // Valentine's Day 2025: February 14
    const valentinesDay = new Date("2025-02-14T23:59:59");
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = valentinesDay.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        className="bg-gradient-to-r from-secondary via-primary to-secondary text-secondary-foreground py-2.5 px-4 relative overflow-hidden"
      >
        {/* Floating hearts background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Heart className="absolute w-4 h-4 opacity-20 top-1 left-[10%] animate-pulse" fill="currentColor" />
          <Heart className="absolute w-3 h-3 opacity-15 top-2 left-[30%] animate-pulse delay-300" fill="currentColor" />
          <Heart className="absolute w-4 h-4 opacity-20 top-1 right-[20%] animate-pulse delay-500" fill="currentColor" />
          <Heart className="absolute w-3 h-3 opacity-15 top-2 right-[40%] animate-pulse delay-700" fill="currentColor" />
        </div>

        <div className="container-lyfe flex items-center justify-center gap-3 md:gap-6 text-sm md:text-base relative z-10">
          <div className="flex items-center gap-2">
            <Gift className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-body font-semibold hidden sm:inline">
              💝 Valentine's Special
            </span>
          </div>
          
          <span className="hidden md:inline text-secondary-foreground/80">|</span>
          
          <span className="font-body font-bold">
            FREE Shipping on $50+ 
          </span>
          
          <span className="hidden md:inline text-secondary-foreground/80">|</span>
          
          <div className="flex items-center gap-1.5 font-display font-bold">
            <span className="hidden sm:inline text-xs opacity-90">Order by:</span>
            <div className="flex gap-1">
              <span className="bg-secondary-foreground/20 px-1.5 py-0.5 rounded text-xs">
                {timeLeft.days}d
              </span>
              <span className="bg-secondary-foreground/20 px-1.5 py-0.5 rounded text-xs">
                {timeLeft.hours}h
              </span>
              <span className="bg-secondary-foreground/20 px-1.5 py-0.5 rounded text-xs">
                {timeLeft.minutes}m
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-secondary-foreground/20 rounded-full transition-colors"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ValentinesBanner;
