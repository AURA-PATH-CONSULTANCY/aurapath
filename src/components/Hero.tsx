import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

const highlights = [
  "Free Expert Guidance",
  "Direct Admission Support",
  "Overseas Education",
  "Career Counseling",
];

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-hero-gradient overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-5 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-medium text-sm">ADMISSIONS OPEN 2026–2027</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            India's Premier
            <span className="block text-gradient-gold">Educational Consultancy</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            End-to-End Dedicated Support by Team AURA PATH ✔️. Helping students 
            identify the right career path and secure admissions in top institutions.
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-muted-foreground text-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl" onClick={() => {
              const element = document.querySelector("#services");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}>
              Explore Our Services
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "1000+", label: "Students Guided" },
                { number: "50+", label: "Partner Universities" },
                { number: "15+", label: "Countries Covered" },
                { number: "100%", label: "Transparent Process" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-serif font-bold text-primary">{stat.number}</p>
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
