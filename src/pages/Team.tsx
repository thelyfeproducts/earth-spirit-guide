import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LyfeBotWidget from "@/components/LyfeBot/LyfeBotWidget";
import { Users, Mail } from "lucide-react";
import founderHeadshot from "@/assets/founder-headshot.jpeg";
import maliHeadshot from "@/assets/mali-headshot.jpeg";

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
        description: "Driving operational excellence and ensuring smooth day-to-day business operations.",
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

        {/* Join CTA */}
        <section className="section-padding bg-secondary/10">
          <div className="container-lyfe">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="heading-section mb-6">
                Want to Join
                <br />
                <span className="text-secondary">Our Team?</span>
              </h2>
              <p className="body-large mb-8">
                We're always looking for passionate individuals who believe in natural wellness 
                and want to make a difference.
              </p>
              <a
                href="mailto:team@lyfeproducts.com"
                className="btn-earth inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
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
