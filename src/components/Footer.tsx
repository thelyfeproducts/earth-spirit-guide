import { Heart, Instagram, Facebook, Twitter } from "lucide-react";
import lyfeInfinity from "@/assets/lyfe-infinity.png";

const footerLinks = {
  shop: [
    { name: "All Products", href: "#shop" },
    { name: "Hair Care", href: "#shop" },
    { name: "Body Care", href: "#shop" },
    { name: "Face Care", href: "#shop" },
  ],
  learn: [
    { name: "Our Story", href: "#story" },
    { name: "Why Organic", href: "#why-organic" },
    { name: "Ingredients", href: "#" },
    { name: "Blog", href: "#" },
  ],
  support: [
    { name: "Contact Us", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream/90 section-padding">
      <div className="container-lyfe">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={lyfeInfinity} 
                alt="Lyfe Products" 
                className="h-12 w-auto brightness-110"
              />
              <span className="font-display font-black text-2xl text-cream">
                Lyfe Products™
              </span>
            </div>
            <p className="font-body text-cream/70 mb-6 max-w-sm">
              Organic remedies made with plants, intention, and care. 
              Rooted in indigenous wisdom, crafted for modern healing.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-cream/10 hover:bg-cream/20 p-3 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-cream/10 hover:bg-cream/20 p-3 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-cream/10 hover:bg-cream/20 p-3 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-cream">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-body text-cream/70 hover:text-cream transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-cream">Learn</h4>
            <ul className="space-y-3">
              {footerLinks.learn.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-body text-cream/70 hover:text-cream transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-cream">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-body text-cream/70 hover:text-cream transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-cream/50">
            © 2025 Lyfe Products™. All rights reserved.
          </p>
          <p className="font-body text-sm text-cream/50 flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-terracotta fill-terracotta" /> for the Earth
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
