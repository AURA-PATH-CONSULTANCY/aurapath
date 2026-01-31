import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Award, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Career Clarity",
    description: "We help students identify their true potential and find the right career path aligned with their interests.",
  },
  {
    icon: Users,
    title: "Student-Centric",
    description: "Every student receives personalized guidance based on their individual academic background and aspirations.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We partner with top institutions in India and abroad to ensure quality education for our students.",
  },
  {
    icon: Heart,
    title: "Complete Support",
    description: "From admission to graduation, we provide end-to-end assistance including mental health and well-being support.",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">About Us</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Your Trusted Partner in
              <span className="text-gradient-gold block">Education Planning</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              AURA PATH CONSULTANCY ✔️ is a leading educational consultancy dedicated to helping 
              students identify the right career path, gain clarity in education planning, 
              and secure admissions in top institutions in India and abroad.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We understand student confusion and resolve it with expert solutions, ensuring 
              a smooth and transparent admission journey. Our personalized approach means 
              every student receives guidance tailored to their unique needs and goals.
            </p>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <p className="text-4xl font-serif font-bold text-primary">5+</p>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-4xl font-serif font-bold text-primary">98%</p>
                <p className="text-muted-foreground text-sm">Success Rate</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-4xl font-serif font-bold text-primary">24/7</p>
                <p className="text-muted-foreground text-sm">Support</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-card-hover border border-border group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
