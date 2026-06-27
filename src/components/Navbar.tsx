import { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 smooth-transition ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/brand/logo-color.png" alt="SuperConecta" className="h-10 w-auto object-contain" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="text-sm font-medium text-[#001A72] hover:text-[#0055FF] smooth-transition">Início</a>
          <a href="#beneficios" className="text-sm font-medium text-[#001A72] hover:text-[#0055FF] smooth-transition">Tecnologia</a>
          <a href="#planos" className="text-sm font-medium text-[#001A72] hover:text-[#0055FF] smooth-transition">Planos</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://superconecta.sgp.tsmx.com.br/central"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-[#001A72] hover:text-[#0055FF] smooth-transition"
          >
            <User size={18} />
            <span className="hidden lg:inline">Área do Cliente</span>
          </a>
          <a
            href="#planos"
            className="px-6 py-2.5 rounded-[32px] bg-gradient-to-r from-[#0055FF] to-[#0044CC] text-white text-sm font-extrabold shadow-[0_8px_20px_rgba(0,85,255,0.3)] hover:scale-105 hover:shadow-[0_8px_25px_rgba(0,85,255,0.4)] smooth-transition"
          >
            Assinar Agora
          </a>
        </div>

        <button
          className="md:hidden text-[#001A72]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-card mx-4 mt-2 rounded-[32px] p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className="text-[#001A72] font-medium hover:text-[#0055FF]">Início</a>
            <a href="#beneficios" onClick={() => setIsMobileMenuOpen(false)} className="text-[#001A72] font-medium hover:text-[#0055FF]">Tecnologia</a>
            <a href="#planos" onClick={() => setIsMobileMenuOpen(false)} className="text-[#001A72] font-medium hover:text-[#0055FF]">Planos</a>
            <div className="h-px w-full bg-[#001A72]/10 my-2" />
            <a href="https://superconecta.sgp.tsmx.com.br/central" target="_blank" className="text-[#001A72] font-medium hover:text-[#0055FF] flex items-center gap-2">
              <User size={18} /> Área do Cliente
            </a>
            <a href="#planos" onClick={() => setIsMobileMenuOpen(false)} className="text-center mt-2 px-4 py-3 rounded-[32px] bg-[#0055FF] text-white font-extrabold shadow-lg">
              Assinar Agora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
