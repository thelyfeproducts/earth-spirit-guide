import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import lyfeInfinity from "@/assets/lyfe-infinity.png";

const navItems = [
  { label: "Shop", href: "#shop" },
  { label: "Our Story", href: "#story" },
  { label: "Why Organic", href: "#why-organic" },
  { label: "Community", href: "#community" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-lyfe">
        <nav className="flex items-center justify-between px-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src={lyfeInfinity}
              alt="The Lyfe"
              className="w-10 h-10 transition-transform group-hover:scale-110"
            />
            <span className={`font-display font-bold text-xl transition-colors ${
              isScrolled ? "text-charcoal" : "text-white"
            }`}>
              The Lyfe
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-body font-medium transition-colors relative group ${
                  isScrolled ? "text-charcoal hover:text-secondary" : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-secondary" : "bg-white"
                }`} />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className={`p-2 rounded-full transition-colors ${
              isScrolled ? "hover:bg-muted" : "hover:bg-white/10"
            }`}>
              <ShoppingBag className={`w-5 h-5 ${isScrolled ? "text-charcoal" : "text-white"}`} />
            </button>
            <a
              href="#shop"
              className={`font-display font-bold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? "bg-secondary text-white"
                  : "bg-white text-charcoal"
              }`}
            >
              Shop Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-charcoal" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-charcoal" : "text-white"}`} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-border"
          >
            <div className="container-lyfe py-6 px-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-body font-medium text-charcoal hover:text-secondary transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#shop"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block btn-earth text-center mt-4"
              >
                Shop Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
