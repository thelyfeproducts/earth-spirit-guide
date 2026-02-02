import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Countdown to Valentine's Day
const DROP_DATE = new Date("2026-02-14T00:00:00");

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): CountdownTime | null => {
  const difference = targetDate.getTime() - new Date().getTime();
  if (difference <= 0) return null;
  
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const ValentinesPreorderBanner = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime | null>(calculateTimeLeft(DROP_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(DROP_DATE));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Don't show if the drop is live
  if (!timeLeft) return null;

  return (
    <section className="py-12 bg-gradient-to-r from-[#FDF2F4] via-[#FCE7EB] to-[#FDF2F4]">
      <div className="container-lyfe px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-br from-[#C4213B] to-[#8C2339] rounded-3xl p-8 md:p-12 text-white"
        >
          {/* Background hearts */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Heart className="absolute top-4 right-8 w-16 h-16 text-white/10 fill-current" />
            <Heart className="absolute bottom-4 left-12 w-12 h-12 text-white/10 fill-current" />
            <Heart className="absolute top-1/2 right-1/4 w-8 h-8 text-white/10 fill-current" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
                <Heart className="w-4 h-4 fill-current" />
                <span className="font-body font-semibold text-sm">Limited Edition</span>
              </div>
              
              <h2 className="font-display font-black text-3xl md:text-4xl mb-3">
                Valentine's Day Collection
              </h2>
              
              <p className="font-body text-white/90 max-w-md mb-6">
                Pre-order our exclusive romantic scents before they sell out. 
                Perfect for gifting or treating yourself.
              </p>

              <Link to="/pre-orders">
                <Button 
                  size="lg" 
                  className="bg-white text-[#C4213B] hover:bg-white/90 font-body font-semibold"
                >
                  <Heart className="w-4 h-4 mr-2 fill-current" />
                  Shop Pre-orders
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Countdown */}
            <div className="flex flex-col items-center">
              <p className="font-body text-white/80 text-sm mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Drops in
              </p>
              <div className="flex gap-3">
                {[
                  { value: timeLeft.days, label: "Days" },
                  { value: timeLeft.hours, label: "Hrs" },
                  { value: timeLeft.minutes, label: "Min" },
                  { value: timeLeft.seconds, label: "Sec" },
                ].map((unit) => (
                  <div
                    key={unit.label}
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-3 min-w-[60px] text-center"
                  >
                    <div className="font-display font-black text-2xl">
                      {unit.value.toString().padStart(2, "0")}
                    </div>
                    <div className="font-body text-white/80 text-xs">
                      {unit.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValentinesPreorderBanner;
