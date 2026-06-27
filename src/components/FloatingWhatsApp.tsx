import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://api.whatsapp.com/send/?phone=5588981258770&text=Ol%C3%A1%2C+tenho+interesse+em+contratar+a+Super+Conecta."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#28B446] rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(40,180,70,0.4)] hover:scale-110 smooth-transition cursor-pointer"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute inset-0 flex h-full w-full">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#28B446] opacity-40"></span>
      </span>
    </motion.a>
  );
}
