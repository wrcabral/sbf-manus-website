import { useState } from "react";

const DEPOIMENTOS = [
  {
    name: "Omar do Rio",
    company: "Empresário",
    text: "Não tenho um contador, tenho um amigo. A SBF transformou a gestão financeira da minha empresa com atendimento próximo e proativo.",
    stars: 5,
    initial: "O",
  },
  {
    name: "AW Negócios",
    company: "Empresa de Negócios",
    text: "SBF tem meu respeito e admiração pelos serviços prestados por todos os profissionais, mas com destaque ao Marcus e o sócio Bruno.",
    stars: 5,
    initial: "A",
  },
  {
    name: "Ekatommíria Utilidades",
    company: "Comércio",
    text: "Muito boa a experiência. A rápida resposta às demandas e dúvidas é sem dúvida o diferencial, assim como a manutenção dos movimentos contábeis praticamente em dia.",
    stars: 5,
    initial: "E",
  },
  {
    name: "Braslin Serviços",
    company: "Prestação de Serviços",
    text: "O comprometimento das pessoas da SBF é o ponto forte, tanto no envio de informações como prestação de suporte.",
    stars: 5,
    initial: "B",
  },
  {
    name: "Golf Agentes de Investimentos",
    company: "Mercado Financeiro",
    text: "Para uma empresa do mercado financeiro, ter um contador que entende as particularidades do setor é essencial. A SBF demonstra conhecimento profundo e nos dá total segurança.",
    stars: 5,
    initial: "G",
  },
  {
    name: "KW Tech",
    company: "Tecnologia",
    text: "A SBF nos ajudou a estruturar nossa empresa de tecnologia desde o início. O suporte na abertura e na escolha do regime tributário foi impecável.",
    stars: 5,
    initial: "K",
  },
  {
    name: "JCS Informática LTDA",
    company: "Tecnologia da Informação",
    text: "Recomendo a SBF Contabilidade para qualquer empresa de TI. Eles entendem as especificidades do setor e nos orientam de forma personalizada.",
    stars: 5,
    initial: "J",
  },
  {
    name: "Sons de Adoração",
    company: "Organização",
    text: "Profissionalismo e dedicação são as palavras que definem a SBF. Sempre disponíveis para esclarecer dúvidas e com uma visão estratégica que vai muito além da contabilidade tradicional.",
    stars: 5,
    initial: "S",
  },
];

const NPS_METRICS = [
  { label: "Atendimento", score: "5.0", icon: "fa-headset" },
  { label: "Rapidez e Eficiência", score: "4.97", icon: "fa-bolt" },
  { label: "Qualidade dos Serviços", score: "5.0", icon: "fa-star" },
  { label: "Prazos de Obrigações", score: "4.92", icon: "fa-clock" },
  { label: "Tecnologia Adotada", score: "4.85", icon: "fa-microchip" },
];

export default function DepoimentosSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = DEPOIMENTOS.length - visibleCount;

  const handlePrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setActiveIndex((i) => Math.min(maxIndex, i + 1));

  const visible = DEPOIMENTOS.slice(activeIndex, activeIndex + visibleCount);

  return (
    <section
      id="depoimentos"
      className="sbf-section"
      style={{
        background: "linear-gradient(160deg, #1a2a3a 0%, #253550 60%, #304366 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(186,152,99,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div className="text-center" style={{ marginBottom: 56 }}>
          <span className="sbf-badge sbf-badge-gold-dark" style={{ marginBottom: 16, display: "inline-flex" }}>
            <i className="fas fa-quote-left" style={{ fontSize: 10 }}></i>
            Prova Social
          </span>
          <h2
            style={{
              color: "white",
              fontWeight: 900,
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
            }}
          >
            O que dizem nossos clientes
          </h2>
          <div className="gold-divider gold-divider-center" />
          <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Empresas que transformaram sua gestão com a nossa parceria.
          </p>
        </div>

        {/* NPS Metrics bar */}
        <div
          style={{
            borderRadius: 20,
            padding: "24px 32px",
            marginBottom: 12,
            background: "rgba(186,152,99,0.07)",
            border: "1px solid rgba(186,152,99,0.18)",
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 16,
          }}
          className="grid-cols-2 md:grid-cols-5"
        >
          {NPS_METRICS.map((m) => (
            <div key={m.label} className="flex flex-col items-center text-center" style={{ gap: 6 }}>
              <i className={`fas ${m.icon}`} style={{ color: "rgba(186,152,99,0.5)", fontSize: 14 }}></i>
              <p
                className="sbf-stat-number"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1 }}
              >
                {m.score}
              </p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.75rem", lineHeight: 1.4, margin: 0 }}>
                {m.label}
              </p>
            </div>
          ))}
        </div>
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.6875rem", textAlign: "center", marginBottom: 40 }}>
          Fonte: Pesquisa de Satisfação NPS SBF Contabilidade
        </p>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3" style={{ gap: 16, marginBottom: 28 }}>
          {visible.map((dep) => (
            <div
              key={dep.name}
              className="testimonial-card flex flex-col"
              style={{
                padding: "28px 24px",
                borderRadius: 20,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(186,152,99,0.12)",
                gap: 16,
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Quote mark */}
              <i
                className="fas fa-quote-left"
                style={{ color: "rgba(186,152,99,0.3)", fontSize: 28, lineHeight: 1 }}
              />

              {/* Stars */}
              <div className="flex" style={{ gap: 3 }}>
                {Array.from({ length: dep.stars }).map((_, i) => (
                  <i key={i} className="fas fa-star" style={{ color: "#ba9863", fontSize: 12 }}></i>
                ))}
              </div>

              {/* Text */}
              <p
                style={{
                  color: "rgba(255,255,255,0.78)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  flex: 1,
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                "{dep.text}"
              </p>

              {/* Author */}
              <div
                className="flex items-center"
                style={{
                  gap: 12,
                  paddingTop: 16,
                  borderTop: "1px solid rgba(186,152,99,0.15)",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(186,152,99,0.25) 0%, rgba(186,152,99,0.1) 100%)",
                    border: "1px solid rgba(186,152,99,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "#d4b47a",
                    fontWeight: 800,
                    fontSize: "1rem",
                  }}
                >
                  {dep.initial}
                </div>
                <div>
                  <p style={{ color: "white", fontWeight: 700, fontSize: "0.875rem", margin: 0 }}>{dep.name}</p>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", margin: 0, marginTop: 2 }}>
                    {dep.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center" style={{ gap: 16 }}>
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "1.5px solid rgba(186,152,99,0.45)",
              color: "#ba9863",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease",
              opacity: activeIndex === 0 ? 0.3 : 1,
              cursor: activeIndex === 0 ? "not-allowed" : "pointer",
            }}
          >
            <i className="fas fa-chevron-left" style={{ fontSize: 12 }}></i>
          </button>

          <div className="flex" style={{ gap: 8 }}>
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                style={{
                  height: 6,
                  borderRadius: 3,
                  background: i === activeIndex ? "#ba9863" : "rgba(186,152,99,0.25)",
                  width: i === activeIndex ? 28 : 6,
                  transition: "all 0.25s ease",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={activeIndex === maxIndex}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "1.5px solid rgba(186,152,99,0.45)",
              color: "#ba9863",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease",
              opacity: activeIndex === maxIndex ? 0.3 : 1,
              cursor: activeIndex === maxIndex ? "not-allowed" : "pointer",
            }}
          >
            <i className="fas fa-chevron-right" style={{ fontSize: 12 }}></i>
          </button>
        </div>
      </div>
    </section>
  );
}
