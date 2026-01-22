import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-semibold tracking-wider text-sm uppercase">Contact Us</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-6">
              Ready to Start Your
              <span className="text-gradient-gold block">Brighter Future?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              For what you're waiting for? Contact us today and take the first 
              step towards your dream education. Our expert team is here to guide you.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <a
                href="tel:+910000000000"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <Phone className="w-6 h-6 text-gold group-hover:text-navy transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-lg font-semibold text-navy">+91 0000000000</p>
                </div>
              </a>

              <a
                href="mailto:contact@aurapathedu.in"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <Mail className="w-6 h-6 text-gold group-hover:text-navy transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-lg font-semibold text-navy">contact@aurapathedu.in</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-lg font-semibold text-navy">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl shadow-elevated p-8 border border-border">
              <h3 className="font-serif text-2xl font-bold text-navy mb-6">Get Free Consultation</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-navy mb-2">Thank You!</h4>
                  <p className="text-muted-foreground">We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-navy mb-2 block">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-navy mb-2 block">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-navy mb-2 block">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-navy mb-2 block">Course Interested In</label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    >
                      <option value="">Select a course</option>
                      <option value="ug">Undergraduate (UG)</option>
                      <option value="pg">Postgraduate (PG)</option>
                      <option value="mba">MBA</option>
                      <option value="mbbs">MBBS / Medical</option>
                      <option value="overseas">Overseas Education</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-navy mb-2 block">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your educational goals..."
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
                    />
                  </div>

                  <Button type="submit" variant="gold" size="xl" className="w-full">
                    Send Message
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
