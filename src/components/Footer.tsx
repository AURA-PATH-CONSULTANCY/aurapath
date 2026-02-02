import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import auraPathLogo from "@/assets/aura-path-logo-main.png";

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
    <footer className="bg-white text-gray-600 border-t border-gray-200">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="logo-container logo-glow-container-subtle">
                <img 
                  src={auraPathLogo} 
                  alt="AURA PATH CONSULTANCY ✔️" 
                  className="h-20 w-auto object-contain logo-glow-subtle"
                />
              </div>
              <span className="font-serif font-bold text-gray-900 text-xl">AURA PATH CONSULTANCY ✔️</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              India's Premier Educational Consultancy dedicated to helping students 
              achieve their academic dreams with personalized guidance and support.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-gray-900">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-500 text-sm hover:text-blue-600 transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-gray-900">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-500 text-sm hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-gray-900">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+910000000000" className="flex items-center gap-3 text-gray-500 hover:text-blue-600 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-sm">+91 0000000000</span>
              </a>
              <a href="mailto:contact@aurapathedu.in" className="flex items-center gap-3 text-gray-500 hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-sm">contact@aurapathedu.in</span>
              </a>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-500 italic">
                "Thank you for choosing us and being a part of our journey."
              </p>
              <p className="text-sm text-gray-900 mt-2 font-medium">— Althaf Allu</p>
              <p className="text-xs text-gray-500">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} AURA PATH CONSULTANCY ✔️. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="text-gray-500 text-sm hover:text-blue-600 transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-gray-500 text-sm hover:text-blue-600 transition-colors cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
