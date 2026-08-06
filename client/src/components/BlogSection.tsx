const ARTICLES = [
  {
    slug: "reforma-tributaria-2024-impactos",
    title: "Reforma Tributária 2024: O que muda para sua empresa?",
    summary: "A Reforma Tributária aprovada traz mudanças significativas no sistema fiscal brasileiro. Entenda os impactos no seu negócio e como se preparar para a transição.",
    category: "Reforma Tributária",
    readTime: 7,
    icon: "fa-balance-scale",
    color: "#e8a838",
    date: "Mar 2024",
    highlights: ["Unificação de impostos (IBS, CBS e IS)", "Período de transição até 2033", "Impactos no Simples Nacional"],
  },
  {
    slug: "lucro-real-quando-vale-a-pena",
    title: "Lucro Real: Quando vale a pena para sua empresa?",
    summary: "Muitas empresas pagam mais impostos do que deveriam por não conhecerem o Lucro Real. Descubra quando essa opção pode gerar economia significativa.",
    category: "Planejamento Tributário",
    readTime: 6,
    icon: "fa-chart-line",
    color: "#ba9863",
    date: "Fev 2024",
    highlights: ["Empresas com margem de lucro abaixo de 32%", "Possibilidade de compensar prejuízos", "Créditos de PIS/COFINS"],
  },
  {
    slug: "planejamento-tributario-pme",
    title: "Planejamento Tributário para PMEs: 5 estratégias legais",
    summary: "Pequenas e médias empresas podem reduzir legalmente sua carga tributária com estratégias simples. Conheça as 5 principais abordagens utilizadas pela SBF.",
    category: "Gestão Empresarial",
    readTime: 8,
    icon: "fa-lightbulb",
    color: "#4a9eff",
    date: "Jan 2024",
    highlights: ["Escolha correta do regime tributário", "Isenção de 13º salário para sócios", "Aproveitamento de créditos fiscais"],
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      style={{
        background: "linear-gradient(180deg, #253550 0%, #304366 100%)",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background subtle pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(186,152,99,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(186,152,99,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between"
          style={{ marginBottom: 48, gap: 20 }}
        >
          <div>
            <span className="sbf-badge sbf-badge-gold-dark" style={{ marginBottom: 16, display: "inline-flex" }}>
              <i className="fas fa-newspaper" style={{ fontSize: 10 }}></i>
              Conteúdo Especializado
            </span>
            <h2
              style={{
                color: "white",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                margin: "0 0 8px",
              }}
            >
              Insights & Artigos SBF
            </h2>
            <div className="gold-divider" style={{ margin: "0 0 12px" }} />
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", margin: 0, maxWidth: 480 }}>
              Conteúdo especializado para empresários que querem tomar decisões financeiras mais inteligentes.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@sbfcontabilidade"
            target="_blank"
            rel="noopener noreferrer"
            className="sbf-btn sbf-btn-outline"
            style={{ flexShrink: 0 }}
          >
            <i className="fab fa-youtube"></i>
            Ver todos os vídeos
          </a>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-3" style={{ gap: 20 }}>
          {ARTICLES.map((article) => (
            <article
              key={article.slug}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.25s ease, border-color 0.25s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(186,152,99,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              {/* Article header */}
              <div
                style={{
                  padding: "28px 24px 20px",
                  background: `linear-gradient(135deg, rgba(${article.color === "#ba9863" ? "186,152,99" : article.color === "#e8a838" ? "232,168,56" : "74,158,255"},0.1) 0%, transparent 100%)`,
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div className="flex items-center justify-between" style={{ marginBottom: 16 }}>
                  <span
                    style={{
                      background: `rgba(${article.color === "#ba9863" ? "186,152,99" : article.color === "#e8a838" ? "232,168,56" : "74,158,255"},0.12)`,
                      border: `1px solid rgba(${article.color === "#ba9863" ? "186,152,99" : article.color === "#e8a838" ? "232,168,56" : "74,158,255"},0.25)`,
                      color: article.color,
                      borderRadius: 100,
                      padding: "3px 10px",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {article.category}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" }}>{article.date}</span>
                </div>

                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `rgba(${article.color === "#ba9863" ? "186,152,99" : article.color === "#e8a838" ? "232,168,56" : "74,158,255"},0.12)`,
                    border: `1px solid rgba(${article.color === "#ba9863" ? "186,152,99" : article.color === "#e8a838" ? "232,168,56" : "74,158,255"},0.2)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                  }}
                >
                  <i className={`fas ${article.icon}`} style={{ color: article.color, fontSize: 18 }}></i>
                </div>

                <h3
                  style={{
                    color: "white",
                    fontWeight: 800,
                    fontSize: "1.0625rem",
                    lineHeight: 1.35,
                    margin: "0 0 10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {article.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>
                  {article.summary}
                </p>
              </div>

              {/* Highlights */}
              <div style={{ padding: "16px 24px", flex: 1 }}>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.6875rem", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 10px" }}>
                  Principais pontos
                </p>
                <div className="flex flex-col" style={{ gap: 7 }}>
                  {article.highlights.map((h) => (
                    <div key={h} className="flex items-center" style={{ gap: 8 }}>
                      <i className="fas fa-check-circle" style={{ color: article.color, fontSize: 11, flexShrink: 0, opacity: 0.8 }}></i>
                      <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8125rem" }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div
                style={{
                  padding: "14px 24px",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" }}>
                  <i className="fas fa-clock" style={{ marginRight: 5 }}></i>
                  {article.readTime} min de leitura
                </span>
                <a
                  href="https://wa.me/5521988652452?text=Olá!%20Vi%20o%20artigo%20no%20site%20da%20SBF%20e%20gostaria%20de%20saber%20mais."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ba9863",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  Saiba mais <i className="fas fa-arrow-right" style={{ fontSize: 10 }}></i>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center" style={{ marginTop: 40 }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9375rem", margin: "0 0 16px" }}>
            Quer conteúdo exclusivo sobre gestão tributária e financeira?
          </p>
          <a
            href="https://www.youtube.com/@sbfcontabilidade"
            target="_blank"
            rel="noopener noreferrer"
            className="sbf-btn sbf-btn-gold"
          >
            <i className="fab fa-youtube"></i>
            Assinar o canal no YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
