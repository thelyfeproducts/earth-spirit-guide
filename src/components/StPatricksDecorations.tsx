import { motion } from "framer-motion";

// Animated four-leaf clover SVG
const Clover = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 44" className={className} fill="currentColor" aria-hidden="true">
    <circle cx="20" cy="10" r="9" />
    <circle cx="30" cy="20" r="9" />
    <circle cx="10" cy="20" r="9" />
    <circle cx="20" cy="30" r="9" />
    <rect x="18" y="30" width="4" height="12" rx="2" />
  </svg>
);

// Rainbow arc
export const Rainbow = ({ className }: { className?: string }) => (
  <div className={`pointer-events-none ${className}`} aria-hidden="true">
    <svg viewBox="0 0 400 200" className="w-full h-full" fill="none">
      <path d="M10,190 Q200,-60 390,190" stroke="#e53e3e" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M28,190 Q200,-30 372,190" stroke="#ed8936" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M44,190 Q200,-4 356,190"  stroke="#ecc94b" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M60,190 Q200,18 340,190"  stroke="#48bb78" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M76,190 Q200,38 324,190"  stroke="#4299e1" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M92,190 Q200,56 308,190"  stroke="#9f7aea" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.7"/>
    </svg>
  </div>
);

// Pot of gold SVG
export const PotOfGold = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 80 80" className={className} aria-hidden="true" fill="none">
    {/* Gold coins */}
    <ellipse cx="40" cy="28" rx="22" ry="8" fill="#F6C90E" opacity="0.9"/>
    <ellipse cx="33" cy="24" rx="7" ry="4" fill="#F9D44A" opacity="0.8"/>
    <ellipse cx="50" cy="24" rx="6" ry="3.5" fill="#F9D44A" opacity="0.8"/>
    <ellipse cx="40" cy="22" rx="6" ry="3" fill="#FFE566" opacity="0.9"/>
    {/* Pot body */}
    <path d="M18 32 Q16 58 40 62 Q64 58 62 32 Z" fill="#1a1a2e"/>
    <path d="M18 32 Q16 58 40 62 Q64 58 62 32 Z" fill="#2d2d44" opacity="0.5"/>
    {/* Pot rim */}
    <ellipse cx="40" cy="32" rx="22" ry="6" fill="#111827"/>
    {/* Shine */}
    <ellipse cx="28" cy="44" rx="4" ry="8" fill="white" opacity="0.08" transform="rotate(-20 28 44)"/>
    {/* Gold shimmer on top */}
    <ellipse cx="40" cy="28" rx="18" ry="5" fill="#FFD700" opacity="0.3"/>
  </svg>
);

// Floating clovers for hero / sections
export const FloatingClovers = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
    {[
      { top: "8%",  left: "3%",  size: "w-10 h-10", delay: 0,   duration: 5,   opacity: "opacity-20", color: "text-green-500" },
      { top: "15%", left: "92%", size: "w-7 h-7",   delay: 1,   duration: 6,   opacity: "opacity-15", color: "text-green-400" },
      { top: "70%", left: "5%",  size: "w-8 h-8",   delay: 0.5, duration: 4.5, opacity: "opacity-20", color: "text-green-600" },
      { top: "80%", left: "88%", size: "w-9 h-9",   delay: 2,   duration: 5.5, opacity: "opacity-15", color: "text-green-500" },
      { top: "40%", left: "96%", size: "w-6 h-6",   delay: 1.5, duration: 7,   opacity: "opacity-10", color: "text-green-400" },
      { top: "55%", left: "1%",  size: "w-7 h-7",   delay: 3,   duration: 5,   opacity: "opacity-15", color: "text-green-500" },
    ].map((c, i) => (
      <motion.div
        key={i}
        className={`absolute ${c.color} ${c.opacity}`}
        style={{ top: c.top, left: c.left }}
        animate={{ y: [0, -12, 0], rotate: [0, 15, -10, 0] }}
        transition={{ duration: c.duration, delay: c.delay, repeat: Infinity, ease: "easeInOut" }}
      >
        <Clover className={c.size} />
      </motion.div>
    ))}
  </div>
);

// Emoji clovers for lighter sections
export const EmojiClovers = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
    {[
      { top: "10%", left: "5%",  size: "text-3xl", delay: 0,   duration: 5 },
      { top: "20%", left: "90%", size: "text-2xl", delay: 1.2, duration: 6 },
      { top: "75%", left: "8%",  size: "text-2xl", delay: 0.7, duration: 4.5 },
      { top: "65%", left: "85%", size: "text-3xl", delay: 2,   duration: 5.5 },
      { top: "45%", left: "93%", size: "text-xl",  delay: 1.5, duration: 7 },
    ].map((c, i) => (
      <motion.span
        key={i}
        className={`absolute ${c.size} opacity-30`}
        style={{ top: c.top, left: c.left }}
        animate={{ y: [0, -10, 0], rotate: [0, 10, -8, 0] }}
        transition={{ duration: c.duration, delay: c.delay, repeat: Infinity, ease: "easeInOut" }}
      >
        {i % 2 === 0 ? "🍀" : "☘️"}
      </motion.span>
    ))}
  </div>
);

export default FloatingClovers;
