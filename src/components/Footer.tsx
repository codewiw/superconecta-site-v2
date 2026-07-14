import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#001A72] text-[#F4F7FF] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img src="/brand/logo-white.png" alt="SuperConecta" className="h-12 w-auto object-contain mb-6" />
            <p className="text-[#F4F7FF]/70 max-w-sm mb-8 leading-relaxed font-medium">
              Conectando o Cariri com tecnologia de ponta, estabilidade e atendimento humano.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/5588981258770" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-[16px] bg-white/10 flex items-center justify-center text-white hover:bg-[#0055FF] smooth-transition">
                <MessageCircle size={24} />
              </a>
              <a href="https://instagram.com/super_conecta" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-[16px] bg-white/10 flex items-center justify-center text-white hover:bg-[#0055FF] smooth-transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-extrabold mb-6 text-lg">Navegação</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#inicio" className="text-[#F4F7FF]/70 hover:text-white smooth-transition">Início</a></li>
              <li><a href="#beneficios" className="text-[#F4F7FF]/70 hover:text-white smooth-transition">Tecnologia</a></li>
              <li><a href="#planos" className="text-[#F4F7FF]/70 hover:text-white smooth-transition">Planos</a></li>
              <li><a href="https://app.superconecta.com.br/" target="_blank" rel="noreferrer" className="text-[#F4F7FF]/70 hover:text-white smooth-transition">Área do Cliente</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-extrabold mb-6 text-lg">Fale Conosco</h4>
            <ul className="space-y-4 font-medium">
              <li className="flex items-start gap-3 text-[#F4F7FF]/70">
                <MapPin size={24} className="text-[#28B446] shrink-0 mt-1" />
                <span>Rua da Matriz, N99 <br/> Palestina do Cariri, Mauriti - CE</span>
              </li>
              <li className="flex items-center gap-3 text-[#F4F7FF]/70">
                <Phone size={24} className="text-[#28B446] shrink-0" />
                <span>(88) 98125-8770</span>
              </li>
              <li className="flex items-center gap-3 text-[#F4F7FF]/70">
                <Mail size={24} className="text-[#28B446] shrink-0" />
                <span>contato@superconecta.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col items-center justify-center">
          <p className="text-[#F4F7FF]/50 text-sm font-medium text-center">
            &copy; {new Date().getFullYear()} SuperConecta. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
