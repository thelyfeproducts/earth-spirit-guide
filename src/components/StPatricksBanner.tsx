import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ST_PATRICKS_DAY = new Date("2026-03-17T00:00:00");

export const getTimeLeft = () => {
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
  <svg viewBox="0 0 40 44" className={className} fill="currentColor" aria-hidden="true">
    <circle cx="20" cy="10" r="9" />
    <circle cx="30" cy="20" r="9" />
    <circle cx="10" cy="20" r="9" />
    <circle cx="20" cy="30" r="9" />
    <rect x="18" y="30" width="4" height="12" rx="2" />
  </svg>
);

const StPatricksBanner = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (dismissed || !timeLeft) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -80, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-[60] bg-gradient-to-r from-[#155c15] via-[#237a23] to-[#155c15] text-white overflow-hidden"
      >
        {/* Shamrock decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <Clover className="absolute top-0.5 left-3 w-7 h-7 text-white/20 rotate-12" />
          <Clover className="absolute top-1 left-[12%] w-4 h-4 text-white/15 -rotate-6" />
          <Clover className="absolute bottom-0.5 right-[22%] w-5 h-5 text-white/20 rotate-45" />
          <Clover className="absolute top-0.5 right-[8%] w-6 h-6 text-white/15 rotate-12" />
          <Clover className="absolute bottom-0.5 left-[38%] w-4 h-4 text-white/20 -rotate-12" />
          <Clover className="absolute top-1 right-3 w-5 h-5 text-white/15 rotate-30" />
          <Clover className="absolute top-1 left-[55%] w-3 h-3 text-white/10 rotate-20" />
        </div>

        <div className="relative z-10 px-4 py-2.5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
            {/* Message */}
            <div className="flex items-center gap-2">
              <span className="text-base" aria-hidden="true">🍀</span>
              <p className="font-body font-semibold text-sm text-white/95 tracking-wide">
                St. Patrick's Day is coming — get lucky with natural wellness!
              </p>
              <span className="text-base" aria-hidden="true">☘️</span>
            </div>

            {/* Countdown */}
            <div className="flex items-center gap-2 bg-white/15 rounded-xl px-4 py-1.5 backdrop-blur-sm border border-white/25 shrink-0">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hrs", value: timeLeft.hours },
                { label: "Min", value: timeLeft.minutes },
                { label: "Sec", value: timeLeft.seconds },
              ].map((unit, i) => (
                <div key={unit.label} className="flex items-center gap-2">
                  <div className="text-center min-w-[28px]">
                    <span className="font-display font-bold text-lg leading-none tabular-nums block">
                      {String(unit.value).padStart(2, "0")}
                    </span>
                    <p className="font-body text-[9px] text-white/65 uppercase tracking-widest leading-none mt-0.5">
                      {unit.label}
                    </p>
                  </div>
                  {i < 3 && <span className="font-bold text-white/40 text-base pb-3">:</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dismiss */}
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10"
          aria-label="Dismiss St. Patrick's Day banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default StPatricksBanner;
