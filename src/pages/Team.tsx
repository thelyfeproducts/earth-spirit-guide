import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LyfeBotWidget from "@/components/LyfeBot/LyfeBotWidget";
import { Users, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import founderHeadshot from "@/assets/founder-headshot.jpeg";
import maliHeadshot from "@/assets/mali-headshot.jpeg";
import miracleKingHeadshot from "@/assets/miracle-king-headshot.jpeg";
import malachiJonesHeadshot from "@/assets/malachi-jones-headshot.jpeg";
import richayaDunbarHeadshot from "@/assets/richaya-dunbar-headshot.jpeg";

interface TeamMember {
  name: string;
  role: string;
  description?: string;
  image?: string;
}

interface TeamSection {
  title: string;
  subtitle: string;
  members: TeamMember[];
  subsections?: {
    title: string;
    members: TeamMember[];
  }[];
}

const teamData: TeamSection[] = [
  {
    title: "CEO/Founder",
    subtitle: "The visionary behind The Lyfe Products",
    members: [
      {
        name: "Justin Pruitt",
        role: "CEO & Founder",
        description: "Justin Pruitt is the founder of The Lyfe Products™, an organic wellness brand built on healing, sustainability, and community empowerment, inspired by his indigenous roots and purpose to heal and inspire.",
        image: founderHeadshot,
      },
    ],
  },
  {
    title: "Head of Operations",
    subtitle: "Leading operational excellence",
    members: [
      {
        name: "Mali Strayhorn",
        role: "Head of Operations",
        description: "As Head of Operations at Lyfe Products, I apply the discipline and leadership forged through collegiate football and graduation to drive operational excellence. I manage daily operations, optimize systems, and lead teams with a results-driven, execution-focused mindset built on accountability and long-term growth.",
        image: maliHeadshot,
      },
    ],
  },
  {
    title: "Project Management",
    subtitle: "Coordinating projects and initiatives",
    members: [
      {
        name: "Richaya Dunbar",
        role: "Project Manager",
        description: "Coordinating projects and ensuring timely delivery of all initiatives.",
        image: richayaDunbarHeadshot,
      },
    ],
  },
  {
    title: "Sales Team",
    subtitle: "Driving growth and customer relationships",
    members: [],
    subsections: [
      {
        title: "Sales Leads",
        members: [
          {
            name: "Bryce Maddox",
            role: "Head of Colorado Sales",
            description: "Leading sales operations in Colorado with passion for natural wellness products.",
          },
          {
            name: "Tre Jones",
            role: "Head of Connecticut Sales",
            description: "Driving growth in Connecticut through exceptional customer relationships.",
          },
          {
            name: "Malachi Jones",
            role: "Head of North Carolina Sales",
            description: "Expanding the Lyfe brand presence across North Carolina.",
            image: malachiJonesHeadshot,
          },
          {
            name: "Jared Rios",
            role: "Head of Texas Sales",
            description: "Leading Texas sales operations with dedication to customer success.",
          },
        ],
      },
    ],
  },
  {
    title: "Production Team",
    subtitle: "Crafting quality products with care",
    members: [],
    subsections: [
      {
        title: "Production Interns",
        members: [
          {
            name: "Miracle King",
            role: "Production Intern",
            description: "Learning the craft of natural product creation.",
            image: miracleKingHeadshot,
          },
          {
            name: "Anastasia Stellers",
            role: "Production Intern",
            description: "Supporting production operations and quality control.",
          },
        ],
      },
    ],
  },
  {
    title: "Street Team",
    subtitle: "Spreading the word in local communities",
    members: [
      {
        name: "Jaden Fuqua",
        role: "Street Team Member",
        description: "Community outreach and brand representation.",
      },
      {
        name: "Mario Townson",
        role: "Street Team Member",
        description: "Spreading the Lyfe brand through local engagement.",
      },
    ],
  },
  {
    title: "Design Team",
    subtitle: "Creating beautiful brand experiences",
    members: [],
  },
];

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="aspect-square bg-muted flex items-center justify-center">
    {member.image ? (
      <img 
        src={member.image} 
        alt={member.name}
        className="w-full h-full object-cover object-top"
      />
    ) : (
      <div className="text-center p-6">
        <div className="w-24 h-24 mx-auto bg-secondary/20 rounded-full flex items-center justify-center mb-4">
          <Users className="w-12 h-12 text-secondary" />
        </div>
        <p className="font-body text-muted-foreground text-sm">Coming Soon</p>
      </div>
    )}
    </div>
    <div className="p-6">
      <h3 className="font-display font-bold text-xl text-charcoal mb-1">
        {member.name}
      </h3>
      <p className="font-body font-semibold text-secondary text-sm mb-3">
        {member.role}
      </p>
      {member.description && (
        <p className="font-body text-muted-foreground text-sm leading-relaxed">
          {member.description}
        </p>
      )}
    </div>
  </motion.div>
);

const TeamSectionComponent = ({ section, index }: { section: TeamSection; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="mb-16"
  >
    <div className="text-center mb-10">
      <h2 className="font-display font-bold text-2xl md:text-3xl text-charcoal mb-2">
        {section.title}
      </h2>
      <p className="font-body text-muted-foreground">
        {section.subtitle}
      </p>
    </div>

    {/* Direct members */}
    {section.members.length > 0 && (
      <div className={`grid gap-8 ${section.members.length === 1 ? 'max-w-md mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
        {section.members.map((member, idx) => (
          <TeamMemberCard key={member.name + idx} member={member} index={idx} />
        ))}
      </div>
    )}

    {/* Subsections */}
    {section.subsections?.map((subsection, subIdx) => (
      <div key={subsection.title} className="mt-10">
        <h3 className="font-display font-semibold text-xl text-charcoal mb-6 text-center">
          {subsection.title}
        </h3>
        <div className={`grid gap-6 ${subsection.members.length === 1 ? 'max-w-md mx-auto' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
          {subsection.members.map((member, idx) => (
            <TeamMemberCard key={member.name + idx} member={member} index={idx + subIdx} />
          ))}
        </div>
      </div>
    ))}

    {/* Empty state for Design Team */}
    {section.members.length === 0 && !section.subsections && (
      <div className="bg-muted/50 rounded-2xl p-8 text-center max-w-md mx-auto">
        <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center mb-4">
          <Users className="w-8 h-8 text-secondary" />
        </div>
        <p className="font-body text-muted-foreground">
          Our design team is growing! Check back soon for updates.
        </p>
      </div>
    )}
  </motion.div>
);

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

const JoinTeamSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Team Application: ${formData.position || "General"} – ${formData.name}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          position: formData.position,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", position: "", message: "" });
      } else {
        toast.error("Failed to send application", { description: "Please try again." });
      }
    } catch {
      toast.error("Something went wrong", { description: "Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-secondary/10">
      <div className="container-lyfe">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="heading-section mb-4">
              Want to Join
              <br />
              <span className="text-secondary">Our Team?</span>
            </h2>
            <p className="body-large">
              We're always looking for passionate individuals who believe in natural wellness
              and want to make a difference. Fill out the form below to apply!
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Send className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal mb-2">Application Sent!</h3>
              <p className="font-body text-muted-foreground mb-6">
                Thank you for your interest in joining The Lyfe Team. We'll review your application and get back to you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="font-body font-semibold text-secondary hover:underline text-sm"
              >
                Submit another application
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-lg space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-body font-semibold text-sm text-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-body font-semibold text-sm text-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="position" className="block font-body font-semibold text-sm text-charcoal mb-2">
                  Position of Interest *
                </label>
                <select
                  id="position"
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                >
                  <option value="">Select a position...</option>
                  <option value="Sales">Sales</option>
                  <option value="Production">Production</option>
                  <option value="Street Team">Street Team</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Ambassador">Ambassador</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-body font-semibold text-sm text-charcoal mb-2">
                  Why do you want to join The Lyfe Team? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about yourself, your experience, and why you're passionate about natural wellness..."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-earth w-full inline-flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Application
                  </>
                )}
              </button>

              <p className="text-center font-body text-xs text-muted-foreground">
                Your application will be sent to{" "}
                <a href="mailto:thelyfeproducts@gmail.com" className="text-secondary hover:underline">
                  thelyfeproducts@gmail.com
                </a>
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 section-padding relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="container-lyfe relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block bg-primary/10 text-primary font-body font-semibold px-4 py-2 rounded-full text-sm mb-6">
                Our Family
              </span>
              <h1 className="heading-hero mb-6">
                Members of
                <br />
                <span className="text-secondary">The Lyfe Team</span>
              </h1>
              <p className="body-large">
                Meet the dedicated individuals behind The Lyfe Products who work tirelessly 
                to bring you the best natural skincare and haircare.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Sections */}
        <section className="section-padding bg-muted/30">
          <div className="container-lyfe">
            {teamData.map((section, index) => (
              <TeamSectionComponent key={section.title} section={section} index={index} />
            ))}
          </div>
        </section>

        {/* Join CTA with Application Form */}
        <JoinTeamSection />
      </main>
      <Footer />
      <LyfeBotWidget />
    </div>
  );
};

export default Team;
