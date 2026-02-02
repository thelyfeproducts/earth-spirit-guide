import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LyfeBotWidget from "@/components/LyfeBot/LyfeBotWidget";
import { Users, Mail, Send, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";
import founderHeadshot from "@/assets/founder-headshot.jpeg";
import maliHeadshot from "@/assets/mali-headshot.jpeg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Form validation schema
const applicationSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(20).optional(),
  role_interest: z.string().min(1, "Please select a role"),
  message: z.string().trim().min(10, "Please tell us a bit more about yourself").max(2000),
});

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

const JoinTeamForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role_interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = applicationSchema.safeParse(formData);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("team_applications")
        .insert({
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone || null,
          role_interest: result.data.role_interest,
          message: result.data.message,
        });

      if (error) throw error;

      setIsSubmitted(true);
      toast.success("Application submitted!", {
        description: "We'll be in touch soon.",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-display font-bold text-2xl text-charcoal mb-2">
          Application Received!
        </h3>
        <p className="font-body text-muted-foreground max-w-md mx-auto">
          Thank you for your interest in joining The Lyfe Team. We'll review your application and get back to you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block font-body font-medium text-charcoal mb-2">
            Full Name *
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="h-12"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-body font-medium text-charcoal mb-2">
            Email *
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="h-12"
          />
        </div>
      </div>
      
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block font-body font-medium text-charcoal mb-2">
            Phone (Optional)
          </label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className="h-12"
          />
        </div>
        <div>
          <label htmlFor="role_interest" className="block font-body font-medium text-charcoal mb-2">
            Role Interest *
          </label>
          <select
            id="role_interest"
            name="role_interest"
            value={formData.role_interest}
            onChange={handleChange}
            required
            className="w-full h-12 px-4 rounded-md bg-background border border-input font-body text-charcoal focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <option value="">Select a role</option>
            <option value="Sales">Sales</option>
            <option value="Production">Production</option>
            <option value="Street Team">Street Team</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Ambassador">Ambassador</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block font-body font-medium text-charcoal mb-2">
          Tell Us About Yourself *
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Why do you want to join The Lyfe Team? What skills or experience do you bring?"
          className="resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full bg-secondary hover:bg-secondary/90"
      >
        {isSubmitting ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Submit Application
          </>
        )}
      </Button>
    </form>
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

        {/* Join CTA with Form */}
        <section className="section-padding bg-secondary/10">
          <div className="container-lyfe">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl mx-auto mb-10"
            >
              <h2 className="heading-section mb-6">
                Want to Join
                <br />
                <span className="text-secondary">Our Team?</span>
              </h2>
              <p className="body-large">
                We're always looking for passionate individuals who believe in natural wellness 
                and want to make a difference. Fill out the form below to apply!
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-3xl p-8 shadow-soft max-w-2xl mx-auto"
            >
              <JoinTeamForm />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <LyfeBotWidget />
    </div>
  );
};

export default Team;
