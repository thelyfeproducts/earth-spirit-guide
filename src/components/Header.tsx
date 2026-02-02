import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import lyfeLogo from "@/assets/lyfe-logo.png";
import ValentinesBanner from "./ValentinesBanner";
import { CartDrawer } from "@/components/CartDrawer";

const shopLinks = [
  { name: "All Remedies", href: "/collections/all-remedies" },
  { name: "Hair Growth Serums", href: "/collections/hair-growth-serums" },
  { name: "Body Butters", href: "/collections/body-butters" },
  { name: "Bundles", href: "/collections/bundles" },
  { name: "Pre-orders", href: "/pre-orders" },
];

const navLinks = [
  { name: "Our Story", href: "/our-story" },
  { name: "Why Organic", href: "/why-organic" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Reviews", href: "/reviews" },
  { name: "Community", href: "/community" },
  { name: "Team", href: "/team" },
  { name: "Ambassadors", href: "/ambassadors" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <ValentinesBanner />
      <div className="bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-lyfe">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={lyfeLogo} 
              alt="Lyfe Products" 
              className="h-12 md:h-14 w-auto"
            />
            <span className="font-display font-black text-xl md:text-2xl text-primary">
              Lyfe Products™
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {/* Shop Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsShopOpen(true)}
              onMouseLeave={() => setIsShopOpen(false)}
            >
              <button 
                className="font-body font-semibold text-charcoal hover:text-secondary transition-colors duration-200 flex items-center gap-1"
                onClick={() => setIsShopOpen(!isShopOpen)}
              >
                Shop
                <ChevronDown className={`w-4 h-4 transition-transform ${isShopOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isShopOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2 z-50"
                  >
                    <div className="bg-background border border-border rounded-xl shadow-lg py-2 min-w-[200px]">
                      {shopLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          className="block px-4 py-2 font-body text-charcoal hover:bg-secondary/10 hover:text-secondary transition-colors"
                          onClick={() => setIsShopOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              link.href.startsWith('/') && !link.href.includes('#') ? (
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
            <CartDrawer />
            
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
            <nav className="container-lyfe py-6 px-4 flex flex-col gap-2">
              {/* Shop Section */}
              <div className="pb-2 mb-2 border-b border-border">
                <p className="font-body font-semibold text-xs text-muted-foreground uppercase tracking-wide mb-2">
                  Shop
                </p>
                {shopLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block font-body text-charcoal hover:text-secondary transition-colors py-2 pl-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              {/* Other Links */}
              {navLinks.map((link) => (
                link.href.startsWith('/') && !link.href.includes('#') ? (
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
              
              <Link
                to="/collections/all-remedies"
                className="btn-earth text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop All Remedies
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
