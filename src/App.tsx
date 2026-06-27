import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Plans } from './components/Plans';
import { Coverage } from './components/Coverage';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-[#F4F7FF] text-[#001A72] selection:bg-[#0055FF]/20 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Plans />
        <Coverage />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
