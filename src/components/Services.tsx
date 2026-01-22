import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  MapPin,
  FileCheck,
  Wallet,
  Home,
  HeartHandshake,
  Compass,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Career Clarity & Counseling",
    description: "Personalized guidance to help you discover your ideal career path based on your interests and strengths.",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: GraduationCap,
    title: "University & College Selection",
    description: "Expert assistance in choosing the right institution from our network of top universities in India and abroad.",
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    icon: Globe,
    title: "Overseas Education Support",
    description: "Complete guidance for studying abroad including IELTS coaching, visa assistance, and country-specific requirements.",
    color: "from-green-500/20 to-green-600/20",
  },
  {
    icon: FileCheck,
    title: "Document Verification",
    description: "Thorough verification and preparation of all required documents for a seamless admission process.",
    color: "from-orange-500/20 to-orange-600/20",
  },
  {
    icon: Wallet,
    title: "Education Loan Guidance",
    description: "Comprehensive support in securing education loans with favorable terms from leading financial institutions.",
    color: "from-teal-500/20 to-teal-600/20",
  },
  {
    icon: Home,
    title: "Accommodation Support",
    description: "Assistance in finding safe and comfortable accommodation near your chosen institution.",
    color: "from-pink-500/20 to-pink-600/20",
  },
  {
    icon: MapPin,
    title: "UG, PG & MBA Admissions",
    description: "Direct admission assistance for undergraduate, postgraduate, and MBA programs with no application charges.",
    color: "from-indigo-500/20 to-indigo-600/20",
  },
  {
    icon: HeartHandshake,
    title: "Mental Health Support",
    description: "Dedicated well-being support to help students manage stress and maintain balance during their academic journey.",
    color: "from-rose-500/20 to-rose-600/20",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold font-semibold tracking-wider text-sm uppercase">Our Services</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-6">
            Comprehensive Education
            <span className="text-gradient-gold block">Consultancy Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From career counseling to post-admission support, we offer end-to-end 
            services to ensure your educational journey is smooth and successful.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-card-hover border border-border/50 group hover:border-gold/30 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-navy" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-navy mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-navy font-medium">
            ✨ All services come with <span className="text-gold font-semibold">FREE expert guidance</span> and transparent processes
          </p>
        </motion.div>
      </div>
    </section>
  );
};
