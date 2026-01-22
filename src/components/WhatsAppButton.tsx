import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "917483955647";
const WHATSAPP_MESSAGE = "Hello! I'm interested in learning more about Aura Path Consultancy services.";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      
      {/* Button */}
      <div className="relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-4 rounded-full shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#25D366]/30">
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="font-semibold text-sm hidden sm:inline-block pr-1">
          Chat with us
        </span>
      </div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-navy text-cream text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg hidden lg:block pointer-events-none"
      >
        Instant Support on WhatsApp
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-navy" />
      </motion.div>
    </motion.button>
  );
};
