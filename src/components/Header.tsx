import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import auraPathLogo from "@/assets/aura-path-logo-new.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy text-cream py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+910000000000" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 0000000000</span>
            </a>
            <a href="mailto:contact@aurapathedu.in" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4" />
              <span>contact@aurapathedu.in</span>
            </a>
          </div>
          <p className="text-gold font-medium">📢 Admissions Open 2026–2027</p>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-card"
            : "bg-card"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <div className="logo-container">
                <img 
                  src={auraPathLogo} 
                  alt="Aura Path Consultancy Logo" 
                  className="h-14 w-auto object-contain logo-glow logo-no-bg"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-serif font-bold text-navy text-lg leading-tight">
                  AURA PATH CONSULTANCY ✔️
                </h1>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground/80 hover:text-navy font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="gold" onClick={() => scrollToSection("#contact")}>
                Get Free Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-navy" />
              ) : (
                <Menu className="w-6 h-6 text-navy" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground/80 hover:text-navy font-medium py-2 text-left"
                >
                  {link.name}
                </button>
              ))}
              <Button variant="gold" className="mt-2" onClick={() => scrollToSection("#contact")}>
                Get Free Consultation
              </Button>
            </nav>
          </motion.div>
        )}
      </motion.header>
    </>
  );
};
