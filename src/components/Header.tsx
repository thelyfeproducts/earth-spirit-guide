import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import lyfeInfinity from "@/assets/lyfe-infinity.png";

const navLinks = [
  { name: "Shop", href: "#shop" },
  { name: "Our Story", href: "/our-story" },
  { name: "Community", href: "#community" },
  { name: "Our Team", href: "/team" },
  { name: "Ambassadors", href: "/ambassadors" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-lyfe">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src={lyfeInfinity} 
              alt="Lyfe Products" 
              className="h-10 md:h-12 w-auto"
            />
            <span className="font-display font-black text-xl md:text-2xl text-primary">
              Lyfe Products™
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-body font-semibold text-charcoal hover:text-secondary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-body font-semibold text-charcoal hover:text-secondary transition-colors duration-200"
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          {/* Cart & Menu */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-muted rounded-full transition-colors">
              <ShoppingBag className="w-6 h-6 text-charcoal" />
              <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-charcoal" />
              ) : (
                <Menu className="w-6 h-6 text-charcoal" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <nav className="container-lyfe py-6 px-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href.startsWith('/') ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="font-body font-semibold text-lg text-charcoal hover:text-secondary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-body font-semibold text-lg text-charcoal hover:text-secondary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <a
                href="#shop"
                className="btn-earth text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop Remedies
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
