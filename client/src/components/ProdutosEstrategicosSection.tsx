import { useLocation } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProdutosEstrategicosSection() {
  const [, navigate] = useLocation();
  return (
    <section
      id="produtos"
      style={{
        background: "linear-gradient(135deg, #0B132B 0%, #0d1f3c 50%, #0B132B 100%)",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(201,169,97,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <ScrollReveal animation="fadeInUp">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(201,169,97,0.12)",
                border: "1px solid rgba(201,169,97,0.3)",
                borderRadius: 100,
                padding: "4px 16px",
                color: "#C9A961",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Produtos Estratégicos
            </span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 900,
                color: "#FFFFFF",
                marginBottom: 16,
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Soluções Exclusivas para a
              <br />
              <span style={{ color: "#C9A961" }}>Reforma Tributária</span>
            </h2>
            <p
              style={{
                color: "rgba(224,224,224,0.72)",
                maxWidth: 560,
                margin: "0 auto",
                lineHeight: 1.7,
                fontSize: "1rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Metodologias proprietárias desenvolvidas pela SBF para proteger e posicionar sua empresa na maior mudança tributária das últimas décadas.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid Assimétrico — 3fr / 2fr */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: 24,
            maxWidth: 1040,
            margin: "0 auto",
          }}
        >
          {/* Card 1: Método Real — destaque (maior) */}
          <ScrollReveal animation="fadeInLeft" delay={100}>
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,169,97,0.25)",
                borderRadius: 24,
                padding: "40px",
                position: "relative",
                overflow: "hidden",
                height: "100%",
                transition: "border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,97,0.5)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,169,97,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,97,0.25)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Glow top-right */}
              <div
                style={{
                  position: "absolute",
                  top: -60,
                  right: -60,
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(201,169,97,0.12) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* Badge urgência */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "rgba(220,38,38,0.12)",
                  border: "1px solid rgba(220,38,38,0.3)",
                  borderRadius: 100,
                  padding: "3px 12px",
                  marginBottom: 24,
                }}
              >
                <i className="fas fa-clock" style={{ color: "#ef4444", fontSize: "0.65rem" }} />
                <span style={{ color: "#fca5a5", fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Decisão até Set/2026
                </span>
              </div>

              {/* Icon */}
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 14,
                  background: "rgba(201,169,97,0.12)",
                  border: "1px solid rgba(201,169,97,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <i className="fas fa-search-dollar" style={{ color: "#C9A961", fontSize: "1.5rem" }} />
              </div>

              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  marginBottom: 4,
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                MÉTODO REAL SBF
              </h3>
              <p style={{ color: "#C9A961", fontSize: "0.875rem", fontWeight: 600, marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
                A Única Rota Segura para a Reforma Tributária
              </p>
              <p style={{ color: "rgba(224,224,224,0.72)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 28, fontFamily: "'DM Sans', sans-serif" }}>
                Metodologia de 6 passos que descobre, com precisão matemática, se o Lucro Real é mais vantajoso para o seu negócio — com a exclusiva <strong style={{ color: "#FFFFFF" }}>Apuração Assistida de 90 dias</strong>, sem risco fiscal.
              </p>

              {/* Features */}
              <div style={{ marginBottom: 32 }}>
                {[
                  "Diagnóstico de margem e processos",
                  "Apuração Assistida 90 dias (sem comunicar RF)",
                  "Relatório executivo com economia em reais",
                  "Você só muda se houver economia comprovada",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <i className="fas fa-check" style={{ color: "#C9A961", fontSize: "0.75rem", flexShrink: 0 }} />
                    <span style={{ color: "rgba(224,224,224,0.82)", fontSize: "0.875rem", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="/metodo-real"
                onClick={(e) => { e.preventDefault(); navigate("/metodo-real"); }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "linear-gradient(135deg, #C9A961 0%, #e8c97a 100%)",
                  color: "#0B132B",
                  padding: "14px 28px",
                  borderRadius: 10,
                  fontWeight: 800,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  boxShadow: "0 6px 24px rgba(201,169,97,0.3)",
                  letterSpacing: "0.02em",
                  fontFamily: "'Montserrat', sans-serif",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(201,169,97,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(201,169,97,0.3)";
                }}
              >
                Conhecer o Método Real
                <i className="fas fa-arrow-right" style={{ fontSize: "0.8rem" }} />
              </a>
            </div>
          </ScrollReveal>

          {/* Card 2: Rota Tributária */}
          <ScrollReveal animation="fadeInRight" delay={200}>
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(74,144,217,0.2)",
                borderRadius: 24,
                padding: "40px",
                position: "relative",
                overflow: "hidden",
                height: "100%",
                transition: "border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,144,217,0.45)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(74,144,217,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,144,217,0.2)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Glow top-right */}
              <div
                style={{
                  position: "absolute",
                  top: -60,
                  right: -60,
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(74,144,217,0.08) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* Badge urgência */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "rgba(220,38,38,0.12)",
                  border: "1px solid rgba(220,38,38,0.3)",
                  borderRadius: 100,
                  padding: "3px 12px",
                  marginBottom: 24,
                }}
              >
                <i className="fas fa-exclamation-triangle" style={{ color: "#ef4444", fontSize: "0.65rem" }} />
                <span style={{ color: "#fca5a5", fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Janela até 2027
                </span>
              </div>

              {/* Icon */}
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 14,
                  background: "rgba(74,144,217,0.12)",
                  border: "1px solid rgba(74,144,217,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <i className="fas fa-route" style={{ color: "#4A90D9", fontSize: "1.5rem" }} />
              </div>

              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  marginBottom: 4,
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                ROTA TRIBUTÁRIA SBF
              </h3>
              <p style={{ color: "#4A90D9", fontSize: "0.875rem", fontWeight: 600, marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
                Acompanhamento Estratégico para a Reforma Tributária
              </p>
              <p style={{ color: "rgba(224,224,224,0.72)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 28, fontFamily: "'DM Sans', sans-serif" }}>
                Programa estruturado de acompanhamento contínuo (2026-2033) para guiar sua empresa na transição para o <strong style={{ color: "#FFFFFF" }}>IVA Dual (CBS + IBS)</strong>, transformando obrigações fiscais em vantagem competitiva.
              </p>

              {/* Features */}
              <div style={{ marginBottom: 32 }}>
                {[
                  "Diagnóstico e simulação CBS/IBS vs. sistema atual",
                  "Adequação de sistemas ERP e capacitação de equipes",
                  "Gestão mensal da transição (2026-2033)",
                  "Recuperação de créditos e maximização de caixa",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <i className="fas fa-check" style={{ color: "#4A90D9", fontSize: "0.75rem", flexShrink: 0 }} />
                    <span style={{ color: "rgba(224,224,224,0.82)", fontSize: "0.875rem", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="/rota-tributaria"
                onClick={(e) => { e.preventDefault(); navigate("/rota-tributaria"); }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: "#4A90D9",
                  padding: "14px 28px",
                  borderRadius: 10,
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  border: "1px solid rgba(74,144,217,0.4)",
                  letterSpacing: "0.02em",
                  fontFamily: "'Montserrat', sans-serif",
                  transition: "background 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(74,144,217,0.1)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,144,217,0.7)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,144,217,0.4)";
                }}
              >
                Conhecer a Rota Tributária
                <i className="fas fa-arrow-right" style={{ fontSize: "0.8rem" }} />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal animation="fadeInUp" delay={300}>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <p style={{ color: "rgba(224,224,224,0.6)", fontSize: "0.875rem", marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
              Não sabe qual produto é ideal para sua empresa?
            </p>
            <a
              href="https://wa.me/5521988652452?text=Ol%C3%A1!%20Gostaria%20de%20entender%20qual%20produto%20%C3%A9%20ideal%20para%20minha%20empresa%3A%20M%C3%A9todo%20Real%20ou%20Rota%20Tribut%C3%A1ria."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.85)",
                padding: "12px 24px",
                borderRadius: 10,
                fontWeight: 600,
                fontSize: "0.875rem",
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                transition: "background 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.09)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
              }}
            >
              <i className="fab fa-whatsapp" style={{ color: "#25D366" }} />
              Falar com um especialista — 30 min gratuitos
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
