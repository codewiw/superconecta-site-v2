import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star } from 'lucide-react';

type Plan = {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
};

const plans: Record<'urbano' | 'rural', Plan[]> = {
  urbano: [
    { name: '200 MEGAS', price: '69,90', features: ['Fibra Óptica Ultraveloz', 'Internet Ilimitada', 'Instalação Grátis', 'Suporte em Palestina - Mauriti'], popular: true },
    { name: '300 MEGAS', price: '79,90', features: ['Fibra Óptica Ultraveloz', 'Internet Ilimitada', 'Instalação Grátis', 'Suporte em Palestina - Mauriti'] },
    { name: '400 MEGAS', price: '89,90', features: ['Fibra Óptica Ultraveloz', 'Internet Ilimitada', 'Instalação Grátis', 'Suporte em Palestina - Mauriti'] },
  ],
  rural: [
    { name: '10 MEGAS', price: '65,00', features: ['Conexão via Rádio', 'Internet Ilimitada', 'Instalação Grátis', 'Suporte Especializado'] },
    { name: '15 MEGAS', price: '70,00', features: ['Conexão via Rádio', 'Internet Ilimitada', 'Instalação Grátis', 'Suporte Especializado'] },
    { name: '20 MEGAS', price: '80,00', features: ['Conexão via Rádio', 'Internet Ilimitada', 'Instalação Grátis', 'Suporte Especializado'], popular: true },
  ]
};

export function Plans() {
  const [activeTab, setActiveTab] = useState<'urbano' | 'rural'>('urbano');

  return (
    <section id="planos" className="py-24 relative bg-[#F4F7FF]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#001A72] mb-6">
            O Plano ideal para <span className="text-gradient">você</span>
          </h2>

          <div className="inline-flex p-1.5 rounded-[32px] bg-[#001A72]/5 mx-auto border border-[#001A72]/10">
            <button
              onClick={() => setActiveTab('urbano')}
              className={`px-8 py-3.5 rounded-[32px] font-extrabold transition-all duration-300 ${activeTab === 'urbano'
                  ? 'bg-gradient-to-r from-[#0055FF] to-[#0044CC] text-white shadow-[0_4px_15px_rgba(0,85,255,0.3)]'
                  : 'text-[#001A72] hover:text-[#0055FF]'
                }`}
            >
              URBANO (FIBRA)
            </button>
            <button
              onClick={() => setActiveTab('rural')}
              className={`px-8 py-3.5 rounded-[32px] font-extrabold transition-all duration-300 ${activeTab === 'rural'
                  ? 'bg-gradient-to-r from-[#28B446] to-[#20963A] text-white shadow-[0_4px_15px_rgba(40,180,70,0.3)]'
                  : 'text-[#001A72] hover:text-[#28B446]'
                }`}
            >
              RURAL (RÁDIO)
            </button>
          </div>

          <p className="text-[#001A72]/70 mt-6 max-w-2xl mx-auto font-medium">
            {activeTab === 'urbano'
              ? 'Cobertura em Fibra Óptica para Palestina do Cariri, VPR Descanso, Sítio Novo, Umbuzeiro, Cipó e Canabravinha.'
              : 'Conexão via rádio confiável para as demais áreas rurais da região.'}
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {plans[activeTab].map((plan, index) => (
              <motion.div
                key={plan.name + activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className={`relative rounded-[32px] p-8 flex flex-col smooth-transition ${plan.popular
                    ? 'glass-dark text-white scale-100 md:scale-105 z-10 border-[#0055FF] shadow-[0_0_30px_rgba(0,85,255,0.2)]'
                    : 'glass-card text-[#001A72] hover:shadow-[0_15px_40px_rgba(0,26,114,0.1)]'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-[#28B446] to-[#20963A] text-white text-[10px] sm:text-xs font-extrabold rounded-[32px] uppercase tracking-wider flex items-center gap-1 shadow-lg whitespace-nowrap">
                    <Star size={12} fill="currentColor" /> Favorito de Mauriti
                  </div>
                )}

                <h3 className={`text-2xl font-extrabold mb-2 ${plan.popular ? 'text-white' : 'text-[#001A72]'}`}>
                  {plan.name}
                </h3>

                <div className="mb-8">
                  <span className="text-sm font-bold uppercase tracking-widest opacity-80 block mb-1">Por apenas</span>
                  <span className="text-5xl font-extrabold">R$ {plan.price}</span>
                  <span className="font-medium opacity-80">/mês</span>
                </div>

                <ul className="flex-1 space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${plan.popular ? 'bg-white/20' : 'bg-[#0055FF]/10'}`}>
                        <Check size={14} className={plan.popular ? 'text-[#28B446]' : 'text-[#0055FF]'} />
                      </div>
                      <span className={plan.popular ? 'text-white/90' : 'text-[#001A72]/80'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://api.whatsapp.com/send/?phone=5588981258770&text=Ol%C3%A1%2C+tenho+interesse+em+contratar+o+plano+de+${plan.name.replace(' ', '+')}+da+Super+Conecta.&type=phone_number`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-[32px] font-extrabold text-center transition-all duration-300 ${plan.popular
                      ? 'bg-[#28B446] text-white hover:bg-[#20963A] hover:scale-105 shadow-lg'
                      : 'bg-[#001A72]/5 text-[#0055FF] hover:bg-[#0055FF] hover:text-white'
                    }`}
                >
                  Assinar Agora
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
