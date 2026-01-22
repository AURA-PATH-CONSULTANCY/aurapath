import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Gift, Zap, Globe, BookOpen, Briefcase, Shield } from "lucide-react";

const benefits = [
  {
    icon: Gift,
    title: "Free Expert Guidance",
    description: "Get personalized counseling from experienced professionals at no cost.",
  },
  {
    icon: Zap,
    title: "Quick Offer Letters",
    description: "Fast-track your admission with our streamlined application process.",
  },
  {
    icon: Globe,
    title: "Overseas Education Support",
    description: "Complete guidance for studying in top international universities.",
  },
  {
    icon: BookOpen,
    title: "IELTS & German Coaching Cashback",
    description: "Get cashback offers on language training and coaching programs.",
  },
  {
    icon: Briefcase,
    title: "Part-Time Job Assistance",
    description: "Support in finding part-time opportunities while studying abroad.",
  },
  {
    icon: Shield,
    title: "Transparent & Ethical Process",
    description: "100% transparent admission process with no hidden charges.",
  },
];

export const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-20 md:py-28 bg-hero-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold font-semibold tracking-wider text-sm uppercase">Why Choose Us</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-cream mt-3 mb-6">
            The Aura Path
            <span className="text-gradient-gold block">Advantage</span>
          </h2>
          <p className="text-cream/70 text-lg">
            Discover why thousands of students trust us with their educational journey.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-light/50 backdrop-blur-sm border border-gold/20 rounded-xl p-6 hover:border-gold/40 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold/30 transition-colors">
                  <benefit.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-lg text-cream mb-2">{benefit.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gold/10 border border-gold/30 rounded-2xl p-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-navy border-2 border-gold flex items-center justify-center">
                  <Check className="w-4 h-4 text-gold" />
                </div>
              ))}
            </div>
            <p className="text-cream font-medium">
              Join <span className="text-gold font-bold">1000+</span> students who chose Aura Path
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
