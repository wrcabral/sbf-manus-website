export default function ClientesSection() {
  const clientes = [
    { nome: "HSMED Saúde", icone: "fa-heartbeat", setor: "Saúde" },
    { nome: "Devex Solution", icone: "fa-laptop-code", setor: "Tecnologia" },
    { nome: "Health Med", icone: "fa-hospital", setor: "Saúde" },
    { nome: "One Company", icone: "fa-briefcase", setor: "Serviços" },
    { nome: "Nolar Home Care", icone: "fa-home", setor: "Saúde" },
    { nome: "IBH Hipnose", icone: "fa-brain", setor: "Educação" },
    { nome: "Legacy School", icone: "fa-graduation-cap", setor: "Educação" },
    { nome: "Brasil Modal", icone: "fa-truck", setor: "Logística" },
  ];

  const stats = [
    { num: "150+", label: "Empresas Atendidas" },
    { num: "20+", label: "Segmentos de Mercado" },
    { num: "98%", label: "Satisfação NPS" },
    { num: "R$2.3M+", label: "Economia Gerada" },
  ];

  return (
    <section
      id="clientes"
      style={{
        background: "linear-gradient(180deg, #0a0f1a 0%, #0d1b2e 100%)",
        padding: "80px 0",
        overflow: "hidden",
      }}
    >
      <div className="container">

        {/* Header */}
        <div className="text-center" style={{ marginBottom: 56 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 16px",
              borderRadius: 100,
              background: "rgba(186,152,99,0.1)",
              border: "1px solid rgba(186,152,99,0.25)",
              color: "#ba9863",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            <i className="fas fa-handshake" style={{ fontSize: 9 }}></i>
            Quem Confia na SBF
          </span>
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "white",
              margin: "0 0 16px 0",
              letterSpacing: "-0.02em",
            }}
          >
            Empresas que Crescem com a{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ba9863 0%, #d4b47a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SBF
            </span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: "1rem",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Mais de 150 empresas em mais de 20 segmentos confiam na SBF Contabilidade para crescer com segurança e inteligência tributária.
          </p>
        </div>

        {/* Stats bar */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "rgba(186,152,99,0.1)",
            borderRadius: 16,
            overflow: "hidden",
            marginBottom: 56,
            border: "1px solid rgba(186,152,99,0.15)",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                background: "rgba(13,27,46,0.8)",
                padding: "24px 16px",
                textAlign: "center",
                borderRight: i < 3 ? "1px solid rgba(186,152,99,0.1)" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  background: "linear-gradient(135deg, #ba9863 0%, #d4b47a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  margin: "0 0 4px 0",
                }}
              >
                {stat.num}
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  margin: 0,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Client logos grid */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
        >
          {clientes.map((cliente) => (
            <div
              key={cliente.nome}
              style={{
                padding: "24px 20px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                textAlign: "center",
                transition: "border-color 0.3s, background 0.3s",
                cursor: "default",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(186,152,99,0.3)";
                (e.currentTarget as HTMLElement).style.background = "rgba(186,152,99,0.05)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "rgba(186,152,99,0.1)",
                  border: "1px solid rgba(186,152,99,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className={`fas ${cliente.icone}`} style={{ color: "#ba9863", fontSize: 20 }}></i>
              </div>
              <div>
                <p style={{ color: "white", fontWeight: 700, fontSize: "0.875rem", margin: "0 0 4px 0" }}>
                  {cliente.nome}
                </p>
                <span
                  style={{
                    padding: "2px 10px",
                    borderRadius: 100,
                    background: "rgba(186,152,99,0.08)",
                    border: "1px solid rgba(186,152,99,0.15)",
                    color: "#ba9863",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                  }}
                >
                  {cliente.setor}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.3)",
            fontSize: "0.8125rem",
            marginTop: 32,
          }}
        >
          E muitos outros parceiros em mais de 20 segmentos de mercado.
        </p>
      </div>
    </section>
  );
}
