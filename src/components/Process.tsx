import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, FileSearch, CreditCard, Mail, School, BookOpen } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Initial Consultation",
    description: "Connect with our expert counselors to discuss your academic goals and career aspirations.",
  },
  {
    icon: FileSearch,
    step: "02",
    title: "Document Verification",
    description: "Submit your documents for thorough verification to ensure eligibility for your chosen program.",
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Fee Payment",
    description: "Admission fees are payable directly to the respective institution as per official confirmation.",
  },
  {
    icon: Mail,
    step: "04",
    title: "Admission Letter",
    description: "After successful payment verification, receive your official admission letter from the institution.",
  },
  {
    icon: School,
    step: "05",
    title: "Reporting & Registration",
    description: "Get complete guidance for reporting to the institution, registration, and documentation.",
  },
  {
    icon: BookOpen,
    step: "06",
    title: "Ongoing Support",
    description: "Continuous academic guidance, fee tracking, and support until course completion.",
  },
];

export const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold tracking-wider text-sm uppercase">Admission Process</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Your Journey to
            <span className="text-gradient-gold block">Academic Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our streamlined admission process ensures a smooth and transparent 
            journey from consultation to graduation.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5 hidden sm:block" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col sm:flex-row gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <div className={`bg-card p-6 rounded-xl shadow-card border border-border inline-block ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
                    <span className="text-primary text-sm font-bold">Step {step.step}</span>
                    <h3 className="font-serif font-semibold text-xl text-foreground mt-2 mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm max-w-sm">{step.description}</p>
                  </div>
                </div>

                {/* Icon Circle */}
                <div className="absolute left-0 sm:left-4 md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg z-10">
                  <step.icon className="w-5 h-5 text-primary-foreground" />
                </div>

                {/* Empty space for layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
            Note: Students with education loans receive complete end-to-end assistance 
            throughout their academic journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
