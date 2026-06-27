import { MapPin, Radio, Wifi, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function Coverage() {
  return (
    <section id="cobertura" className="py-24 relative bg-[#001A72] text-[#F4F7FF] overflow-hidden">
      {/* Background patterns representing radio waves/fiber */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0 100 C 30 20 60 20 100 100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0 100 C 40 40 70 40 100 100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              Nossa <span className="text-[#0055FF]">Cobertura</span> no Cariri
            </h2>
            <p className="text-[#F4F7FF]/80 text-lg mb-8 max-w-xl font-medium leading-relaxed">
              Atendemos com exclusividade e infraestrutura robusta o distrito de <strong className="text-white">Palestina do Cariri</strong>, no município de Mauriti, além dos sítios próximos. Estamos onde você precisa.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0055FF]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#0055FF]" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-extrabold mb-1">Rede 100% Fibra Óptica</h4>
                  <p className="text-[#F4F7FF]/70 font-medium">Palestina do Cariri, VPR Descanso, Sítio Novo, Umbuzeiro, Cipó e Canabravinha.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#28B446]/20 flex items-center justify-center flex-shrink-0">
                  <Radio className="text-[#28B446]" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-extrabold mb-1">Outras Localidades</h4>
                  <p className="text-[#F4F7FF]/70 font-medium">Ampla cobertura via rádio para demais áreas rurais da região.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=5588981258770&text=Ol%C3%A1%2C+gostaria+de+consultar+a+viabilidade+no+meu+endere%C3%A7o." 
                target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 rounded-[32px] bg-[#0055FF] text-white font-extrabold text-center hover:bg-[#0044CC] hover:scale-105 smooth-transition shadow-[0_10px_30px_rgba(0,85,255,0.3)]"
              >
                Consultar Viabilidade
              </a>
              <a 
                href="https://instagram.com/super_conecta"
                target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 rounded-[32px] glass-dark border border-[#F4F7FF]/10 text-white font-extrabold text-center hover:bg-white/10 smooth-transition"
              >
                Acompanhe nosso Instagram
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square relative flex items-center justify-center"
            >
              {/* Concentric animated rings */}
              <div className="absolute w-[80%] h-[80%] rounded-full border border-[#0055FF]/20 animate-[ping_3s_linear_infinite]" />
              <div className="absolute w-[60%] h-[60%] rounded-full border border-[#0055FF]/40 animate-[ping_2s_linear_infinite]" />
              <div className="absolute w-[40%] h-[40%] rounded-full border border-[#28B446]/40 animate-[ping_1.5s_linear_infinite]" />
              
              <div className="w-32 h-32 bg-gradient-to-tr from-[#0055FF] to-[#28B446] rounded-full z-10 flex items-center justify-center shadow-[0_0_50px_rgba(0,85,255,0.6)]">
                <Wifi size={56} className="text-white" />
              </div>

              {/* Floating elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[10%] glass-dark px-4 py-2 rounded-2xl flex items-center gap-2 border border-white/10"
              >
                <Zap size={16} className="text-[#28B446]" />
                <span className="font-extrabold text-sm">Ultra Rápida</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[10%] right-[10%] glass-dark px-4 py-2 rounded-2xl flex items-center gap-2 border border-white/10"
              >
                <MapPin size={16} className="text-[#0055FF]" />
                <span className="font-extrabold text-sm">100% Local</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
