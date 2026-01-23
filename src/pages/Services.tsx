import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  MapPin,
  FileCheck,
  Wallet,
  Home,
  HeartHandshake,
  Compass,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Compass,
    title: "Career Clarity & Counseling",
    slug: "career-counseling",
    description: "Personalized guidance to help you discover your ideal career path based on your interests and strengths.",
    color: "from-blue-500/20 to-blue-600/20",
    features: [
      "One-on-one career counseling sessions",
      "Aptitude and interest assessment",
      "Industry insights and career mapping",
      "Personalized action plans",
    ],
  },
  {
    icon: GraduationCap,
    title: "University & College Selection",
    slug: "university-selection",
    description: "Expert assistance in choosing the right institution from our network of top universities in India and abroad.",
    color: "from-purple-500/20 to-purple-600/20",
    features: [
      "Comprehensive university database",
      "Course comparison and analysis",
      "Admission probability assessment",
      "Application strategy planning",
    ],
  },
  {
    icon: Globe,
    title: "Overseas Education Support",
    slug: "overseas-education",
    description: "Complete guidance for studying abroad including IELTS coaching, visa assistance, and country-specific requirements.",
    color: "from-green-500/20 to-green-600/20",
    features: [
      "Country-wise education guidance",
      "IELTS & language coaching",
      "Visa application assistance",
      "Pre-departure orientation",
    ],
  },
  {
    icon: FileCheck,
    title: "Document Verification",
    slug: "document-verification",
    description: "Thorough verification and preparation of all required documents for a seamless admission process.",
    color: "from-orange-500/20 to-orange-600/20",
    features: [
      "Document checklist preparation",
      "Verification and authentication",
      "Translation services",
      "Apostille assistance",
    ],
  },
  {
    icon: Wallet,
    title: "Education Loan Guidance",
    slug: "education-loan",
    description: "Comprehensive support in securing education loans with favorable terms from leading financial institutions.",
    color: "from-teal-500/20 to-teal-600/20",
    features: [
      "Loan eligibility assessment",
      "Bank comparison and selection",
      "Documentation support",
      "Disbursement tracking",
    ],
  },
  {
    icon: Home,
    title: "Accommodation Support",
    slug: "accommodation",
    description: "Assistance in finding safe and comfortable accommodation near your chosen institution.",
    color: "from-pink-500/20 to-pink-600/20",
    features: [
      "Hostel and PG arrangements",
      "Student housing options",
      "Location and safety verification",
      "Budget-friendly alternatives",
    ],
  },
  {
    icon: MapPin,
    title: "UG, PG & MBA Admissions",
    slug: "admissions",
    description: "Direct admission assistance for undergraduate, postgraduate, and MBA programs with no application charges.",
    color: "from-indigo-500/20 to-indigo-600/20",
    features: [
      "Direct admission support",
      "No application charges",
      "Entrance exam guidance",
      "Interview preparation",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Mental Health Support",
    slug: "mental-health",
    description: "Dedicated well-being support to help students manage stress and maintain balance during their academic journey.",
    color: "from-rose-500/20 to-rose-600/20",
    features: [
      "Stress management counseling",
      "Academic pressure support",
      "Peer support networks",
      "Wellness resources",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy to-navy/95">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-gold font-semibold tracking-wider text-sm uppercase">What We Offer</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
              Our Comprehensive
              <span className="text-gold block">Services</span>
            </h1>
            <p className="text-white/80 text-lg">
              From career counseling to post-admission support, we provide end-to-end 
              educational consultancy services tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  to={`/services/${service.slug}`}
                  className="block bg-card p-8 rounded-2xl shadow-card-hover border border-border/50 group hover:border-gold/30 transition-all duration-300 h-full"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-navy mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-gold font-medium group-hover:gap-3 transition-all duration-300">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/80 mb-8">
              Contact us today for a free consultation and take the first step towards your dream career.
            </p>
            <Link to="/#contact">
              <Button variant="gold" size="xl">
                Get Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
