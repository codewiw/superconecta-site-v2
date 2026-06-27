import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, MapPin, Wifi } from 'lucide-react';

const features = [
  {
    icon: <Rocket className="text-[#0055FF]" size={32} />,
    title: 'Fibra Óptica Ultraveloz',
    description: 'Navegação instantânea, downloads rápidos e streaming em 4K sem interrupções. A verdadeira potência da fibra direto na sua casa.'
  },
  {
    icon: <MapPin className="text-[#28B446]" size={32} />,
    title: 'Suporte 100% Local',
    description: 'Nossa equipe está aqui em Palestina - Mauriti. Nada de call centers distantes. Atendimento humano, rápido e por quem entende da região.'
  },
  {
    icon: <ShieldCheck className="text-[#0055FF]" size={32} />,
    title: 'Internet Sem Travamentos',
    description: 'Jogue online com ping baixo e assista suas séries favoritas com a estabilidade que apenas uma rede moderna pode oferecer.'
  }
];

export function Features() {
  return (
    <section id="beneficios" className="py-24 relative bg-[#F4F7FF] overflow-hidden">
      {/* Elementos flutuantes (Ícones Wi-Fi estilizados) */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 text-[#0055FF]/10"
      >
        <Wifi size={120} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-10 text-[#28B446]/10"
      >
        <Wifi size={160} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#001A72] mb-4">
            Tecnologia de Ponta em <span className="text-gradient">Mauriti</span>
          </h2>
          <p className="text-[#001A72]/70 max-w-2xl mx-auto text-lg font-medium">
            A SuperConecta foi construída para entregar excelência aos moradores do Cariri. Conheça nossos pilares de qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-10 rounded-[32px] hover:-translate-y-2 smooth-transition group"
            >
              <div className="w-16 h-16 rounded-[24px] bg-[#0055FF]/10 flex items-center justify-center mb-6 group-hover:scale-110 smooth-transition">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-extrabold mb-4 text-[#001A72]">{feature.title}</h3>
              <p className="text-[#001A72]/70 leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
