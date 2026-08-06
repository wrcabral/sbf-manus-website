const EXPERTISE = [
  "Lucro Real e Presumido",
  "Médias e Grandes Empresas",
  "Reforma Tributária",
  "Atendimento Full Service",
];

const COMPANIES = ["Deloitte", "Brookfield", "Enel", "Contax"];

const CURRICULUM = [
  { icon: "fa-graduation-cap", text: "Formado em Contabilidade — Moraes Junior (2005)" },
  { icon: "fa-university", text: "Pós-graduação em Gestão Financeira — FGV" },
  { icon: "fa-star", text: "Especialista em Lucro Real" },
  { icon: "fa-globe", text: "Especialista em Implementação de IFRS" },
  { icon: "fa-calculator", text: "Planejamento Tributário e Elisão Fiscal" },
  { icon: "fa-robot", text: "Automação de Processos Contábeis" },
];

const DNA = [
  {
    icon: "fa-trophy",
    title: "Expertise Consolidada",
    desc: "15+ anos liderando projetos em grandes corporações nacionais e multinacionais.",
  },
  {
    icon: "fa-rocket",
    title: "Inovação Contínua",
    desc: "Tecnologia de ponta com MonitorHub, dashboards em tempo real e processos automatizados.",
  },
  {
    icon: "fa-user-tie",
    title: "Personalização",
    desc: "Cada empresa recebe um plano sob medida. Você fala com especialistas, não com robôs.",
  },
  {
    icon: "fa-handshake",
    title: "Integridade",
    desc: "Transparência total em cada processo. Somos parceiros do seu crescimento.",
  },
];

export default function QuemSomosSection() {
  return (
    <section
      id="quem-somos"
      className="sbf-section"
      style={{
        background: "linear-gradient(160deg, #1a2a3a 0%, #253550 50%, #304366 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(186,152,99,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: 64 }}>
          <span className="sbf-badge sbf-badge-gold-dark" style={{ marginBottom: 16, display: "inline-flex" }}>
            <i className="fas fa-users" style={{ fontSize: 10 }}></i>
            Nossa História
          </span>
          <h2
            style={{
              color: "white",
              fontWeight: 900,
              margin: "0 0 8px",
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Quem Somos
          </h2>
          <div className="gold-divider gold-divider-center" />
          <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
            A SBF Contabilidade nasce da atitude empreendedora de quem conhece o mercado corporativo por dentro.
          </p>
        </div>

        {/* Main grid: photo + content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start" style={{ marginBottom: 72 }}>

          {/* LEFT: Photo */}
          <div className="flex flex-col items-center" style={{ gap: 28 }}>
            <div style={{ position: "relative", display: "inline-block" }}>
              {/* Glow */}
              <div
                style={{
                  position: "absolute",
                  inset: -16,
                  borderRadius: 28,
                  background: "radial-gradient(ellipse, rgba(186,152,99,0.18) 0%, transparent 70%)",
                  filter: "blur(16px)",
                }}
              />
              {/* Photo frame */}
              <div
                style={{
                  position: "relative",
                  width: "clamp(220px, 28vw, 300px)",
                  height: "clamp(290px, 37vw, 400px)",
                  borderRadius: 24,
                  overflow: "hidden",
                  border: "3px solid rgba(186,152,99,0.65)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663261678160/LzLNKjUrGJAbzqVg.jpg"
                  alt="Bruno Fonseca - Sócio Diretor SBF Contabilidade"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "28px 20px 16px",
                    background: "linear-gradient(to top, rgba(13,27,46,0.95) 0%, transparent 100%)",
                  }}
                >
                  <p style={{ color: "white", fontWeight: 800, fontSize: "1rem", margin: 0 }}>Bruno Fonseca</p>
                  <p style={{ color: "#ba9863", fontSize: "0.8125rem", margin: "3px 0 0", fontWeight: 500 }}>Sócio Diretor</p>
                </div>
              </div>
            </div>

            {/* Company badges */}
            <div style={{ textAlign: "center", width: "100%", maxWidth: 320 }}>
              <p
                style={{
                  color: "#ba9863",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Experiência em
              </p>
              <div className="flex flex-wrap justify-center" style={{ gap: 8 }}>
                {COMPANIES.map((company) => (
                  <span
                    key={company}
                    style={{
                      padding: "6px 16px",
                      borderRadius: 100,
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      background: "rgba(186,152,99,0.1)",
                      border: "1px solid rgba(186,152,99,0.35)",
                      color: "#d4b47a",
                    }}
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="flex flex-col" style={{ gap: 24 }}>
            {/* Quote block */}
            <div
              style={{
                padding: "20px 24px",
                borderRadius: 16,
                background: "rgba(255,255,255,0.04)",
                borderLeft: "4px solid #ba9863",
                backdropFilter: "blur(8px)",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.75, margin: 0, fontSize: "0.9375rem" }}>
                A SBF Contabilidade nasce da atitude empreendedora de quem conhece o mercado corporativo por dentro. Somos a{" "}
                <strong style={{ color: "white" }}>solução contábil personalizada</strong> para empresas que buscam crescimento sólido, conformidade fiscal e oportunidades reais de economia tributária.
              </p>
            </div>

            {/* Curriculum */}
            <div>
              <p
                style={{
                  color: "#ba9863",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Formação e Especialidades
              </p>
              <div className="flex flex-col" style={{ gap: 10 }}>
                {CURRICULUM.map((item) => (
                  <div key={item.text} className="flex items-center" style={{ gap: 12 }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "rgba(186,152,99,0.12)",
                        border: "1px solid rgba(186,152,99,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <i className={`fas ${item.icon}`} style={{ color: "#ba9863", fontSize: 11 }}></i>
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.78)", fontSize: "0.875rem" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nossa Expertise */}
            <div>
              <p
                style={{
                  color: "#ba9863",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                <i className="fas fa-star" style={{ marginRight: 6 }}></i>
                Nossa Expertise
              </p>
              <div className="grid grid-cols-2" style={{ gap: 10 }}>
                {EXPERTISE.map((item) => (
                  <div key={item} className="flex items-center" style={{ gap: 8 }}>
                    <i className="fas fa-check-circle" style={{ color: "#ba9863", fontSize: 13, flexShrink: 0 }}></i>
                    <span style={{ color: "rgba(255,255,255,0.78)", fontSize: "0.875rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/5521988652452?text=Olá!%20Gostaria%20de%20agendar%20uma%20consultoria%20gratuita%20com%20a%20SBF%20Contabilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="sbf-btn sbf-btn-gold"
              style={{ alignSelf: "flex-start" }}
            >
              <i className="fab fa-whatsapp"></i>
              Fale com Bruno Fonseca
            </a>
          </div>
        </div>

        {/* DNA SBF — bento-style */}
        <div
          style={{
            borderRadius: 24,
            padding: "48px 40px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(186,152,99,0.18)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="text-center" style={{ marginBottom: 40 }}>
            <h3
              style={{
                color: "white",
                fontWeight: 900,
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                letterSpacing: "-0.02em",
                margin: "0 0 8px",
              }}
            >
              Liderança e DNA SBF
            </h3>
            <div className="gold-divider gold-divider-center" />
            <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 480, margin: "0 auto", fontSize: "0.9375rem" }}>
              Os pilares que guiam cada decisão e cada atendimento da SBF Contabilidade.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {DNA.map((item) => (
              <div
                key={item.title}
                className="sbf-card-dark flex flex-col items-center text-center"
                style={{ padding: "28px 20px", gap: 16, borderRadius: 20 }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: "rgba(186,152,99,0.12)",
                    border: "1px solid rgba(186,152,99,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i className={`fas ${item.icon}`} style={{ color: "#ba9863", fontSize: 22 }}></i>
                </div>
                <div>
                  <h4 style={{ color: "white", fontWeight: 800, fontSize: "0.9375rem", margin: "0 0 8px" }}>
                    {item.title}
                  </h4>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8125rem", lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
