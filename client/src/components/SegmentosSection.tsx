const SEGMENTOS = [
  { icon: "fa-shopping-bag", title: "Comércio & Varejo", desc: "Lojas físicas, e-commerce e marketplaces" },
  { icon: "fa-graduation-cap", title: "Educação", desc: "Escolas, cursos e plataformas educacionais" },
  { icon: "fa-concierge-bell", title: "Serviços", desc: "Prestadores de serviços em geral" },
  { icon: "fa-heartbeat", title: "Saúde", desc: "Clínicas, consultórios e laboratórios" },
  { icon: "fa-hard-hat", title: "Construção Civil", desc: "Construtoras e incorporadoras" },
  { icon: "fa-laptop-code", title: "Tecnologia", desc: "Startups, SaaS, fintechs e TI" },
  { icon: "fa-utensils", title: "Alimentação", desc: "Restaurantes, franquias e food service" },
  { icon: "fa-shield-alt", title: "Holdings", desc: "Holdings patrimoniais e empresas familiares" },
];

const REGULATORIO = [
  { sigla: "ANS", desc: "Agência Nacional de Saúde", icon: "fa-heartbeat" },
  { sigla: "BACEN", desc: "Banco Central do Brasil", icon: "fa-university" },
  { sigla: "ANTT", desc: "Agência Nacional de Transportes", icon: "fa-truck" },
];

export default function SegmentosSection() {
  return (
    <section
      id="segmentos"
      className="sbf-section"
      style={{
        background: "linear-gradient(160deg, #253550 0%, #1a2a3a 50%, #0d1b2e 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(186,152,99,0.07) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div className="text-center" style={{ marginBottom: 56 }}>
          <span className="sbf-badge sbf-badge-gold-dark" style={{ marginBottom: 16, display: "inline-flex" }}>
            <i className="fas fa-layer-group" style={{ fontSize: 10 }}></i>
            Nossa Expertise
          </span>
          <h2
            style={{
              color: "white",
              fontWeight: 900,
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
            }}
          >
            Segmentos Atendidos
          </h2>
          <div className="gold-divider gold-divider-center" />
          <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Expertise setorizada para oferecer soluções contábeis precisas para cada tipo de negócio.
          </p>
        </div>

        {/* Segmentos grid */}
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 14, marginBottom: 48 }}>
          {SEGMENTOS.map((seg) => (
            <div
              key={seg.title}
              className="sbf-card-dark flex flex-col items-center text-center"
              style={{ padding: "28px 16px", gap: 14, borderRadius: 20 }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: "rgba(186,152,99,0.12)",
                  border: "1px solid rgba(186,152,99,0.22)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <i className={`fas ${seg.icon}`} style={{ color: "#ba9863", fontSize: 22 }}></i>
              </div>
              <div>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "0.9375rem", margin: "0 0 6px" }}>
                  {seg.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.8125rem", lineHeight: 1.5, margin: 0 }}>
                  {seg.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Regulatória */}
        <div
          style={{
            borderRadius: 24,
            padding: "32px 36px",
            background: "rgba(186,152,99,0.06)",
            border: "1px solid rgba(186,152,99,0.2)",
            marginBottom: 36,
          }}
        >
          <div className="text-center" style={{ marginBottom: 24 }}>
            <h3
              style={{
                color: "white",
                fontWeight: 800,
                fontSize: "1.25rem",
                margin: "0 0 6px",
                letterSpacing: "-0.01em",
              }}
            >
              Expertise Regulatória
            </h3>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", margin: 0 }}>
              Dominamos as burocracias mais complexas para que sua empresa opere com total segurança e compliance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center" style={{ gap: 12 }}>
            {REGULATORIO.map((r) => (
              <div
                key={r.sigla}
                className="flex items-center"
                style={{
                  gap: 16,
                  padding: "16px 24px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(186,152,99,0.18)",
                  flex: 1,
                  maxWidth: 280,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "rgba(186,152,99,0.14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i className={`fas ${r.icon}`} style={{ color: "#ba9863", fontSize: 18 }}></i>
                </div>
                <div>
                  <p
                    style={{
                      color: "#d4b47a",
                      fontWeight: 900,
                      fontSize: "1.25rem",
                      margin: 0,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {r.sigla}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.75rem", margin: 0, marginTop: 2 }}>
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.875rem", marginBottom: 16 }}>
            Seu segmento não está listado? Atendemos todos os setores da economia.
          </p>
          <a
            href="https://wa.me/5521988652452?text=Olá!%20Gostaria%20de%20saber%20se%20a%20SBF%20atende%20meu%20segmento."
            target="_blank"
            rel="noopener noreferrer"
            className="sbf-btn sbf-btn-outline"
            style={{ display: "inline-flex" }}
          >
            <i className="fab fa-whatsapp"></i>
            Consultar meu segmento
          </a>
        </div>
      </div>
    </section>
  );
}
