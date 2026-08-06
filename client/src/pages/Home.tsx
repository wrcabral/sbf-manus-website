import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsCounter from "@/components/StatsCounter";
import QuemSomosSection from "@/components/QuemSomosSection";
import ServicosSection from "@/components/ServicosSection";
import CalculadoraSection from "@/components/CalculadoraSection";
import InteligenciaTributariaSection from "@/components/InteligenciaTributariaSection";
import TecnologiaSection from "@/components/TecnologiaSection";
import SegmentosSection from "@/components/SegmentosSection";
import PodcastSection from "@/components/PodcastSection";
import ConectaSection from "@/components/ConectaSection";
import PlanosSection from "@/components/PlanosSection";
import BlogSection from "@/components/BlogSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import ContatoSection from "@/components/ContatoSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ChatbotWidget from "@/components/ChatbotWidget";
import ExitPopup from "@/components/ExitPopup";
import ClientesSection from "@/components/ClientesSection";
import JornadaSection from "@/components/JornadaSection";
import AberturaTransicaoSection from "@/components/AberturaTransicaoSection";
import MissaoVisaoSection from "@/components/MissaoVisaoSection";
import ContactFloat from "@/components/ContactFloat";
import ProdutosEstrategicosSection from "@/components/ProdutosEstrategicosSection";
import { useEffect } from "react";

export default function Home() {
  // If we arrived here via a #section link from another page (e.g. the
  // navbar on /metodo-real or /rota-tributaria), scroll to that section
  // once the page has mounted and rendered.
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash;
      // Wait for layout (images, fonts) to settle before measuring position,
      // otherwise the offset is calculated against a still-shifting page.
      const scrollToSection = () => {
        const el = document.querySelector(id);
        if (el) {
          const offset = 80;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      };
      const timer = setTimeout(scrollToSection, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', 'Montserrat', sans-serif" }}>
      <Navbar />
      <HeroSection />

      {/* Stats counter strip — logo abaixo do Hero */}
      <div
        style={{
          background: "linear-gradient(90deg, #1a2a3a 0%, #253550 50%, #1a2a3a 100%)",
          borderTop: "1px solid rgba(186,152,99,0.15)",
          borderBottom: "1px solid rgba(186,152,99,0.15)",
          padding: "32px 0",
        }}
      >
        <div className="container">
          <StatsCounter />
        </div>
      </div>

      <QuemSomosSection />
      <MissaoVisaoSection />
      <ClientesSection />
      <AberturaTransicaoSection />
      <ServicosSection />
      <ProdutosEstrategicosSection />
      <CalculadoraSection />
      <InteligenciaTributariaSection />
      <TecnologiaSection />
      <SegmentosSection />
      <PodcastSection />
      <ConectaSection />
      <PlanosSection />
      <BlogSection />
      <JornadaSection />
      <DepoimentosSection />
      <ContatoSection />
      <Footer />

      {/* Floating widgets */}
      <WhatsAppFloat />
      <ContactFloat />
      <ChatbotWidget />
      <ExitPopup />
    </div>
  );
}
