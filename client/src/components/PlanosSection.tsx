const PLANOS = [
  {
    id: "start",
    name: "SBF START",
    subtitle: "Conformidade e Segurança",
    featured: false,
    features: [
      "Contabilidade Completa",
      "Folha de Pagamento",
      "Fiscal e Tributário",
      "Acesso ao Portal SBF",
    ],
    cta: "Falar com Especialista",
    ctaLink:
      "https://wa.me/5521988652452?text=Olá!%20Tenho%20interesse%20no%20Plano%20SBF%20Start.",
  },
  {
    id: "consultivo",
    name: "SBF CONSULTIVO",
    subtitle: "O mais escolhido",
    featured: true,
    features: [
      { text: "Tudo do Plano Start", bold: true },
      "Planejamento Tributário",
      "Reuniões Trimestrais",
      "Dashboard de BI",
      "Suporte Prioritário",
    ],
    cta: "Falar com Especialista",
    ctaLink:
      "https://wa.me/5521988652452?text=Olá!%20Tenho%20interesse%20no%20Plano%20SBF%20Consultivo.",
  },
  {
    id: "bpo",
    name: "SBF BPO +",
    subtitle: "Gestão Financeira Total",
    featured: false,
    features: [
      "Contabilidade Consultiva",
      "Gestão de Contas a Pagar",
      "Gestão de Contas a Receber",
      "Conciliação Bancária Diária",
    ],
    cta: "Falar com Especialista",
    ctaLink:
      "https://wa.me/5521988652452?text=Olá!%20Tenho%20interesse%20no%20Plano%20SBF%20BPO%2B.",
  },
];

export default function PlanosSection() {
  return (
    <section
      id="planos"
      className="sbf-section"
      style={{ background: "linear-gradient(135deg, #1e2d45 0%, #253550 100%)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              background: "rgba(186,152,99,0.15)",
              color: "#ba9863",
              border: "1px solid rgba(186,152,99,0.3)",
            }}
          >
            Investimento
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Planos e Soluções
          </h2>
          <div className="gold-divider gold-divider-center"></div>
          <p className="text-white/60 max-w-2xl mx-auto text-sm">
            Transparência total e tecnologia para impulsionar seu negócio.
          </p>
        </div>

        {/* Banner 13º */}
        <div
          className="flex items-center justify-center gap-4 py-5 px-8 rounded-xl mb-8"
          style={{
            background: "linear-gradient(135deg, #ba9863 0%, #d4b47a 100%)",
          }}
        >
          <i className="fas fa-gift text-2xl" style={{ color: "#1a2a3a" }}></i>
          <p
            className="font-black text-base md:text-lg uppercase tracking-wide text-center"
            style={{ color: "#1a2a3a" }}
          >
            Diferencial Exclusivo SBF: Isenção de 13º Salário
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-0 rounded-xl overflow-hidden"
          style={{ border: "1px solid rgba(186,152,99,0.25)" }}
        >
          {PLANOS.map((plano, idx) => (
            <div
              key={plano.id}
              className="flex flex-col"
              style={{
                background: plano.featured ? "#1a2a3a" : "#253550",
                borderRight:
                  idx < PLANOS.length - 1
                    ? "1px solid rgba(186,152,99,0.2)"
                    : "none",
                outline: plano.featured ? "2px solid #ba9863" : "none",
                outlineOffset: "-1px",
                position: "relative",
              }}
            >
              {/* Plan header */}
              <div
                className="px-8 py-7 text-center"
                style={{
                  borderBottom: "1px solid rgba(186,152,99,0.2)",
                }}
              >
                <h3
                  className="text-xl font-black mb-2"
                  style={{ color: plano.featured ? "#ba9863" : "white" }}
                >
                  {plano.name}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: plano.featured ? "#ba9863" : "rgba(255,255,255,0.55)" }}
                >
                  {plano.subtitle}
                </p>
              </div>

              {/* Features */}
              <div className="px-8 py-8 flex flex-col gap-4 flex-1">
                {plano.features.map((feature) => {
                  const text = typeof feature === "string" ? feature : feature.text;
                  const bold = typeof feature === "object" && feature.bold;
                  return (
                    <div key={text} className="flex items-center gap-3">
                      <i
                        className="fas fa-check text-sm flex-shrink-0"
                        style={{ color: "#ba9863" }}
                      ></i>
                      <span
                        className={`text-sm ${bold ? "font-bold" : ""}`}
                        style={{ color: bold ? "white" : "rgba(255,255,255,0.75)" }}
                      >
                        {text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="px-8 pb-8">
                <a
                  href={plano.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3.5 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                  style={{
                    background: plano.featured
                      ? "linear-gradient(135deg, #ba9863 0%, #d4b47a 100%)"
                      : "rgba(186,152,99,0.15)",
                    color: plano.featured ? "#1a2a3a" : "#ba9863",
                    border: plano.featured ? "none" : "1px solid rgba(186,152,99,0.4)",
                  }}
                >
                  {plano.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-white/30 text-xs mt-6">
          Preços sob consulta. Entre em contato para uma proposta personalizada para o seu negócio.
        </p>
      </div>
    </section>
  );
}
