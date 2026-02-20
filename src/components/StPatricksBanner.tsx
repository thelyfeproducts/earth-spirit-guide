import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const ST_PATRICKS_DAY = new Date("2026-03-17T00:00:00");

const getTimeLeft = () => {
  const now = new Date();
  const diff = ST_PATRICKS_DAY.getTime() - now.getTime();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const Clover = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} fill="currentColor" aria-hidden="true">
    <circle cx="20" cy="10" r="8" />
    <circle cx="30" cy="20" r="8" />
    <circle cx="10" cy="20" r="8" />
    <circle cx="20" cy="30" r="8" />
    <rect x="18" y="28" width="4" height="10" rx="2" />
  </svg>
);

export const StPatricksBanner = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (dismissed || !timeLeft) return null;

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative z-50 bg-gradient-to-r from-[#1a5c1a] via-[#2d8a2d] to-[#1a5c1a] text-white overflow-hidden"
    >
      {/* Floating clovers decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Clover className="absolute top-1 left-4 w-6 h-6 text-white/20 rotate-12" />
        <Clover className="absolute top-2 left-[15%] w-4 h-4 text-white/15 -rotate-6" />
        <Clover className="absolute bottom-1 right-[20%] w-5 h-5 text-white/20 rotate-45" />
        <Clover className="absolute top-1 right-[10%] w-6 h-6 text-white/15 rotate-12" />
        <Clover className="absolute bottom-1 left-[40%] w-4 h-4 text-white/20 -rotate-12" />
        <Clover className="absolute top-2 right-4 w-5 h-5 text-white/15 rotate-30" />
      </div>

      <div className="container-lyfe relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 py-3 px-4 text-center">
          {/* Message */}
          <div className="flex items-center gap-2">
            <span className="text-lg" aria-hidden="true">🍀</span>
            <p className="font-body font-semibold text-sm text-white/95">
              St. Patrick's Day is almost here — luck-infused wellness incoming!
            </p>
            <span className="text-lg" aria-hidden="true">🍀</span>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-2 bg-white/15 rounded-xl px-4 py-1.5 backdrop-blur-sm border border-white/20">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hrs", value: timeLeft.hours },
              { label: "Min", value: timeLeft.minutes },
              { label: "Sec", value: timeLeft.seconds },
            ].map((unit, i) => (
              <div key={unit.label} className="flex items-center gap-2">
                <div className="text-center">
                  <span className="font-display font-bold text-lg leading-none tabular-nums">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <p className="font-body text-[10px] text-white/70 uppercase tracking-wide leading-none mt-0.5">
                    {unit.label}
                  </p>
                </div>
                {i < 3 && <span className="font-bold text-white/50 text-lg">:</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dismiss button */}
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
        aria-label="Dismiss St. Patrick's Day banner"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export default StPatricksBanner;
