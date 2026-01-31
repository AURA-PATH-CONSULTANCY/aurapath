import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import auraPathLogo from "@/assets/aura-path-logo-new.png";

const footerLinks = {
  services: [
    "Career Counseling",
    "University Selection",
    "Overseas Education",
    "Document Verification",
    "Education Loans",
    "Accommodation Support",
  ],
  quickLinks: [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ],
};

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card text-foreground border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="logo-container">
                <img 
                  src={auraPathLogo} 
                  alt="AURA PATH CONSULTANCY" 
                  className="h-16 w-auto object-contain logo-no-bg-dark"
                />
              </div>
              <h3 className="font-serif font-bold text-xl group-hover:text-primary transition-colors">AURA PATH CONSULTANCY ✔️</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              India's Premier Educational Consultancy dedicated to helping students 
              achieve their academic dreams with personalized guidance and support.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-primary">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-primary">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+910000000000" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-sm">+91 0000000000</span>
              </a>
              <a href="mailto:contact@aurapathedu.in" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-sm">contact@aurapathedu.in</span>
              </a>
            </div>

            <div className="mt-8 p-4 bg-secondary rounded-xl border border-border">
              <p className="text-sm text-muted-foreground italic">
                "Thank you for choosing us and being a part of our journey."
              </p>
              <p className="text-sm text-primary mt-2 font-medium">— Althaf Allu</p>
              <p className="text-xs text-muted-foreground">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} AURA PATH CONSULTANCY ✔️. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
