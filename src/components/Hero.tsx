import { motion } from 'framer-motion';
import { ArrowRight, Wifi } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#F4F7FF]">
      {/* Light Streaks Effects */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#0055FF] rounded-full blur-[150px] opacity-40 pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 50, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-0 w-[500px] h-[300px] bg-[#28B446] rounded-full blur-[150px] opacity-30 pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Lado A - Esquerda (Copy & CTA) */}
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-[32px] glass-card text-sm font-medium text-[#001A72] mb-8 shadow-sm"
            >
              <Wifi size={16} className="text-[#0055FF]" />
              <span>A melhor conexão de Mauriti</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#001A72] mb-6 leading-tight"
            >
              A Internet que te <span className="text-[#0055FF]">conecta</span> ao que <span className="text-gradient">importa.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-[#001A72]/70 mb-10 max-w-xl font-medium"
            >
              Conectando o distrito de Palestina do Cariri e sítios próximos. Ultravelocidade, estabilidade e suporte 100% local. Viva a verdadeira experiência da fibra óptica.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#planos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[32px] bg-gradient-to-r from-[#0055FF] to-[#0044CC] text-white font-extrabold text-lg shadow-[0_10px_30px_rgba(0,85,255,0.4)] hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,85,255,0.5)] smooth-transition"
              >
                Assinar Agora
                <ArrowRight size={20} />
              </a>
              <a
                href="#beneficios"
                className="inline-flex items-center justify-center px-8 py-4 rounded-[32px] glass border border-[#001A72]/10 text-[#001A72] font-extrabold text-lg hover:bg-white/50 transition-colors smooth-transition"
              >
                Conheça a Tecnologia
              </a>
            </motion.div>
          </div>

          {/* Lado B - Direita (Imagem Lifestyle) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 relative w-full max-w-lg lg:max-w-none"
          >
            <div className="relative aspect-[4/5] lg:aspect-square rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Família conectada e feliz"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001A72]/40 to-transparent"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
