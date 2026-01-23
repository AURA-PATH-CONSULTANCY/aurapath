import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  FileCheck,
  Wallet,
  Home,
  HeartHandshake,
  Compass,
  Globe,
  ArrowLeft,
  Check,
  Phone,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const servicesData = {
  "career-counseling": {
    icon: Compass,
    title: "Career Clarity & Counseling",
    subtitle: "Discover Your True Calling",
    description: "Our personalized career counseling service helps students identify their strengths, interests, and aptitudes to make informed decisions about their educational and professional paths.",
    color: "from-blue-500 to-blue-600",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
    features: [
      "One-on-one career counseling sessions with certified counselors",
      "Comprehensive aptitude and psychometric assessments",
      "Industry insights and emerging career trends analysis",
      "Personalized career roadmap and action plans",
      "Regular follow-up sessions and progress tracking",
      "Parent counseling sessions for informed family decisions",
    ],
    process: [
      { step: 1, title: "Initial Assessment", description: "Complete psychometric tests and interest inventories" },
      { step: 2, title: "Counseling Session", description: "One-on-one discussion with our expert counselors" },
      { step: 3, title: "Career Mapping", description: "Identify suitable career paths based on your profile" },
      { step: 4, title: "Action Plan", description: "Receive a detailed roadmap for your chosen career" },
    ],
    benefits: [
      "Clarity on career direction",
      "Reduced decision-making stress",
      "Aligned educational choices",
      "Higher career satisfaction",
    ],
  },
  "university-selection": {
    icon: GraduationCap,
    title: "University & College Selection",
    subtitle: "Find Your Perfect Institution",
    description: "With access to a vast network of prestigious universities and colleges, we help you find the perfect institution that aligns with your academic goals, budget, and career aspirations.",
    color: "from-purple-500 to-purple-600",
    heroImage: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200",
    features: [
      "Access to 500+ partner universities worldwide",
      "Detailed course comparison and analysis",
      "Admission probability assessment tools",
      "Campus virtual tours and information sessions",
      "Scholarship opportunity identification",
      "Application timeline management",
    ],
    process: [
      { step: 1, title: "Profile Evaluation", description: "Assess your academic background and preferences" },
      { step: 2, title: "University Shortlisting", description: "Create a customized list of suitable institutions" },
      { step: 3, title: "Comparison Analysis", description: "Compare fees, placements, and facilities" },
      { step: 4, title: "Final Selection", description: "Make an informed decision with our guidance" },
    ],
    benefits: [
      "Access to top institutions",
      "Informed decision-making",
      "Higher admission success",
      "Value for investment",
    ],
  },
  "overseas-education": {
    icon: Globe,
    title: "Overseas Education Support",
    subtitle: "Your Gateway to Global Education",
    description: "Dreaming of studying abroad? Our comprehensive overseas education support covers everything from country selection to visa assistance, ensuring your international education journey is smooth.",
    color: "from-green-500 to-green-600",
    heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200",
    features: [
      "Country-specific education counseling (USA, UK, Canada, Australia, Germany)",
      "IELTS, TOEFL, and language coaching with cashback offers",
      "Complete visa application assistance",
      "SOP and LOR preparation guidance",
      "Pre-departure orientation sessions",
      "Part-time job and internship guidance abroad",
    ],
    process: [
      { step: 1, title: "Country Selection", description: "Choose the best destination for your goals" },
      { step: 2, title: "Test Preparation", description: "IELTS/TOEFL coaching and registration" },
      { step: 3, title: "Application Process", description: "University applications and document preparation" },
      { step: 4, title: "Visa & Travel", description: "Visa guidance and pre-departure support" },
    ],
    benefits: [
      "Global exposure",
      "International career opportunities",
      "Cultural enrichment",
      "World-class education",
    ],
  },
  "document-verification": {
    icon: FileCheck,
    title: "Document Verification",
    subtitle: "Hassle-Free Documentation",
    description: "We ensure all your academic and personal documents are properly verified, authenticated, and prepared to meet the requirements of your chosen institution and country.",
    color: "from-orange-500 to-orange-600",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200",
    features: [
      "Complete document checklist preparation",
      "Verification from issuing authorities",
      "Apostille and attestation services",
      "Document translation (certified)",
      "Notarization assistance",
      "Digital document management",
    ],
    process: [
      { step: 1, title: "Document Collection", description: "Gather all required certificates and documents" },
      { step: 2, title: "Verification", description: "Authenticate documents from respective authorities" },
      { step: 3, title: "Processing", description: "Apostille, attestation, or translation as needed" },
      { step: 4, title: "Submission Ready", description: "Organized documents ready for submission" },
    ],
    benefits: [
      "Error-free documentation",
      "Time-saving process",
      "Compliance assurance",
      "Peace of mind",
    ],
  },
  "education-loan": {
    icon: Wallet,
    title: "Education Loan Guidance",
    subtitle: "Fund Your Dreams",
    description: "Don't let finances hold you back. We guide you through the education loan process, helping you secure the best terms from leading banks and financial institutions.",
    color: "from-teal-500 to-teal-600",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200",
    features: [
      "Loan eligibility assessment",
      "Comparison of multiple bank offers",
      "Documentation support for loan applications",
      "Collateral and co-applicant guidance",
      "Interest rate negotiation assistance",
      "Disbursement tracking and follow-up",
    ],
    process: [
      { step: 1, title: "Eligibility Check", description: "Assess your loan eligibility and amount" },
      { step: 2, title: "Bank Selection", description: "Compare offers from multiple lenders" },
      { step: 3, title: "Application", description: "Complete documentation and submission" },
      { step: 4, title: "Disbursement", description: "Track and ensure timely fund release" },
    ],
    benefits: [
      "Best interest rates",
      "Quick approval",
      "Flexible repayment",
      "Complete support",
    ],
  },
  "accommodation": {
    icon: Home,
    title: "Accommodation Support",
    subtitle: "Your Home Away From Home",
    description: "Finding safe and comfortable accommodation is crucial for your academic success. We help you find the perfect living arrangement near your institution.",
    color: "from-pink-500 to-pink-600",
    heroImage: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200",
    features: [
      "University hostel assistance",
      "Private PG and apartment options",
      "Verified and safe locations",
      "Budget-friendly alternatives",
      "Roommate matching services",
      "Move-in support and guidance",
    ],
    process: [
      { step: 1, title: "Requirement Analysis", description: "Understand your preferences and budget" },
      { step: 2, title: "Options Research", description: "Find suitable accommodation options" },
      { step: 3, title: "Verification", description: "Verify safety and facilities" },
      { step: 4, title: "Booking Support", description: "Assist with booking and move-in" },
    ],
    benefits: [
      "Safe environment",
      "Convenient location",
      "Cost-effective options",
      "Stress-free transition",
    ],
  },
  "admissions": {
    icon: MapPin,
    title: "UG, PG & MBA Admissions",
    subtitle: "Direct Admission Assistance",
    description: "Whether you're applying for undergraduate, postgraduate, or MBA programs, we provide direct admission assistance with no application charges, making your journey seamless.",
    color: "from-indigo-500 to-indigo-600",
    heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200",
    features: [
      "Direct admission without extra charges",
      "Entrance exam preparation guidance",
      "Interview coaching and mock sessions",
      "Application form assistance",
      "Deadline management",
      "Quick offer letter processing",
    ],
    process: [
      { step: 1, title: "Course Selection", description: "Choose the right program for your goals" },
      { step: 2, title: "Application", description: "Complete and submit applications" },
      { step: 3, title: "Preparation", description: "Entrance exam and interview prep" },
      { step: 4, title: "Admission", description: "Secure your seat and begin your journey" },
    ],
    benefits: [
      "No hidden charges",
      "Expert guidance",
      "Higher success rate",
      "Quick processing",
    ],
  },
  "mental-health": {
    icon: HeartHandshake,
    title: "Mental Health Support",
    subtitle: "Your Well-being Matters",
    description: "Academic pressure can be overwhelming. Our mental health support services help students manage stress, anxiety, and maintain a healthy balance during their educational journey.",
    color: "from-rose-500 to-rose-600",
    heroImage: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200",
    features: [
      "Confidential counseling sessions",
      "Stress and anxiety management",
      "Academic pressure coping strategies",
      "Peer support group connections",
      "Mindfulness and wellness resources",
      "Crisis intervention support",
    ],
    process: [
      { step: 1, title: "Initial Consultation", description: "Confidential assessment of your needs" },
      { step: 2, title: "Support Plan", description: "Create a personalized wellness plan" },
      { step: 3, title: "Regular Sessions", description: "Ongoing counseling and support" },
      { step: 4, title: "Progress Tracking", description: "Monitor improvement and adjust support" },
    ],
    benefits: [
      "Reduced stress",
      "Better academic performance",
      "Improved well-being",
      "Confidential support",
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug as keyof typeof servicesData] : null;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-navy to-navy/95 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${service.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            <span className="text-gold font-semibold tracking-wider text-sm uppercase">{service.subtitle}</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6">
              {service.title}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                What We Offer
              </h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-border/30"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-foreground">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src={service.heroImage} 
                alt={service.title}
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-gold font-bold text-3xl">100%</p>
                <p className="text-muted-foreground text-sm">Student Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Process
            </h2>
            <p className="text-muted-foreground">
              A simple, transparent process designed for your success
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {service.process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-cream p-6 rounded-xl h-full">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                    {item.step}
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-navy mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gold/50" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                Benefits
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`p-6 rounded-xl bg-gradient-to-br ${service.color} text-center`}
                  >
                    <p className="text-navy font-semibold">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-navy p-8 rounded-2xl text-center"
            >
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-white/80 mb-6">
                Contact us today for a free consultation and take the first step towards your dream career.
              </p>
              <div className="space-y-4">
                <Link to="/#contact">
                  <Button variant="gold" size="lg" className="w-full">
                    Get Free Consultation
                  </Button>
                </Link>
                <a href="tel:+917483955647">
                  <Button variant="outline" size="lg" className="w-full border-white/30 text-white hover:bg-white/10">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us Now
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiceDetail;
