import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import ChatWindow from "./ChatWindow";

const LyfeBotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
      </AnimatePresence>

      {/* Floating Bubble */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:right-6 w-14 h-14 bg-secondary text-secondary-foreground rounded-full shadow-lg flex items-center justify-center z-50 hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      >
        {isOpen ? (
          <span className="text-2xl">🌿</span>
        ) : (
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
          </div>
        )}
      </motion.button>

      {/* Tooltip on first visit */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ delay: 2, duration: 0.3 }}
            className="fixed bottom-6 right-20 md:right-24 bg-card rounded-xl px-4 py-2 shadow-lg z-40 hidden md:block"
          >
            <p className="font-body text-sm text-charcoal whitespace-nowrap">
              Need help? Ask Lyfe! 🌿
            </p>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-card" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LyfeBotWidget;
