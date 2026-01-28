import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send, MessageCircle, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Open email client with pre-filled data
    const mailtoLink = `mailto:thelyfeproducts@gmail.com?subject=${encodeURIComponent(formData.subject || "Inquiry from Website")}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Opening your email client...");
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container-lyfe">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block bg-accent/20 text-charcoal font-body font-semibold px-4 py-2 rounded-full text-sm mb-6">
              Get in Touch
            </span>
            <h1 className="heading-hero mb-6">
              We'd Love to
              <br />
              <span className="text-secondary">Hear From You</span>
            </h1>
            <p className="body-large text-muted-foreground">
              Have questions about our products, need skincare advice, or just want to say hello? 
              We're here to help and always happy to connect with our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container-lyfe">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Mail,
                title: "Email Us",
                description: "We typically respond within 24-48 hours",
                contact: "thelyfeproducts@gmail.com",
                href: "mailto:thelyfeproducts@gmail.com",
                color: "text-secondary",
                bgColor: "bg-secondary/10",
              },
              {
                icon: Clock,
                title: "Response Time",
                description: "We're a small team with big hearts",
                contact: "24-48 hours",
                href: null,
                color: "text-primary",
                bgColor: "bg-primary/10",
              },
              {
                icon: Heart,
                title: "Made with Love",
                description: "Every product, every response",
                contact: "From our family to yours",
                href: null,
                color: "text-terracotta",
                bgColor: "bg-terracotta/10",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="lyfe-card text-center group"
              >
                <div className={`${item.bgColor} p-4 rounded-2xl inline-block mb-4 transition-transform group-hover:scale-110`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="heading-card mb-2">{item.title}</h3>
                <p className="font-body text-muted-foreground text-sm mb-3">
                  {item.description}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className={`font-body font-semibold ${item.color} hover:underline`}
                  >
                    {item.contact}
                  </a>
                ) : (
                  <span className={`font-body font-semibold ${item.color}`}>
                    {item.contact}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Direct Email */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-3xl p-8 shadow-soft"
            >
              <h2 className="heading-card text-2xl mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block font-body font-medium text-charcoal mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-body font-medium text-charcoal mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block font-body font-medium text-charcoal mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-charcoal focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select a topic</option>
                    <option value="Product Question">Product Question</option>
                    <option value="Order Inquiry">Order Inquiry</option>
                    <option value="Skincare Advice">Skincare Advice</option>
                    <option value="Wholesale Inquiry">Wholesale Inquiry</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block font-body font-medium text-charcoal mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-earth w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Opening Email..." : "Send Message"}
                </button>
              </form>
            </motion.div>

            {/* Direct Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-secondary/5 rounded-3xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-secondary/10 p-3 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="heading-card text-xl mb-2">Prefer to Email Directly?</h3>
                    <p className="font-body text-muted-foreground">
                      No problem! You can reach us anytime at:
                    </p>
                  </div>
                </div>
                <a
                  href="mailto:thelyfeproducts@gmail.com"
                  className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-6 py-4 rounded-xl font-body font-semibold hover:bg-secondary/90 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  thelyfeproducts@gmail.com
                </a>
              </div>

              <div className="bg-accent/10 rounded-3xl p-8">
                <h3 className="heading-card text-xl mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    "We read every message personally",
                    "Response within 24-48 hours",
                    "Personalized skincare recommendations",
                    "Honest answers, always",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-secondary rounded-full" />
                      <span className="font-body text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/5 rounded-3xl p-8">
                <h3 className="heading-card text-xl mb-4">Common Questions</h3>
                <p className="font-body text-muted-foreground mb-4">
                  Before reaching out, you might find your answer in our FAQ section or by chatting with our LyfeBot assistant!
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  Look for the chat bubble in the corner of your screen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
