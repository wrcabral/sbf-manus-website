const ESPECIALIDADES = [
  {
    icon: "fa-chart-line",
    title: "Contabilidade Consultiva",
    description:
      "Relatórios gerenciais e análises financeiras para decisões estratégicas. Muito além do cumprimento de obrigações — somos parceiros na gestão do seu negócio.",
    items: ["Relatórios gerenciais", "Análise financeira", "Balanço e DRE", "Indicadores de desempenho"],
    cta: "Quero contabilidade consultiva",
    ctaLink: "https://wa.me/5521988652452?text=Olá!%20Quero%20saber%20mais%20sobre%20Contabilidade%20Consultiva%20da%20SBF.",
  },
  {
    icon: "fa-search-dollar",
    title: "Planejamento Tributário",
    description:
      "Enquadramento no regime mais eficiente para reduzir a carga fiscal legalmente. Especialistas em Lucro Real, Presumido e Simples Nacional — com até 30% de economia potencial.",
    items: ["Lucro Real e Presumido", "Simples Nacional", "Elisão fiscal", "Recuperação de créditos"],
    cta: "Reduzir meus impostos",
    ctaLink: "https://wa.me/5521988652452?text=Olá!%20Quero%20uma%20consultoria%20de%20Planejamento%20Tributário%20com%20a%20SBF.",
  },
  {
    icon: "fa-coins",
    title: "BPO Financeiro",
    description:
      "Terceirização completa do financeiro: contas a pagar, contas a receber, conciliação bancária diária e fluxo de caixa. Libere seu tempo para focar no crescimento.",
    items: ["Contas a pagar e receber", "Conciliação bancária diária", "Fluxo de caixa", "DRE gerencial"],
    cta: "Terceirizar meu financeiro",
    ctaLink: "https://wa.me/5521988652452?text=Olá!%20Quero%20saber%20sobre%20BPO%20Financeiro%20da%20SBF.",
  },
  {
    icon: "fa-users",
    title: "Departamento Pessoal",
    description:
      "Folha de pagamento, benefícios e admissões com total compliance ao eSocial e legislação trabalhista vigente. Gestão de RH sem complicações.",
    items: ["Folha de pagamento", "eSocial e FGTS", "Admissões e demissões", "Gestão de benefícios"],
    cta: "Regularizar meu RH",
    ctaLink: "https://wa.me/5521988652452?text=Olá!%20Quero%20saber%20sobre%20Departamento%20Pessoal%20da%20SBF.",
  },
  {
    icon: "fa-building",
    title: "Legalização Societária",
    description:
      "Abertura, alterações e regularizações empresariais com suporte completo nos órgãos públicos. Da Junta Comercial à Receita Federal, cuidamos de tudo.",
    items: ["Abertura de empresa", "Alterações contratuais", "Regularizações fiscais", "CNPJ e alvarás"],
    cta: "Abrir minha empresa",
    ctaLink: "https://wa.me/5521988652452?text=Olá!%20Quero%20abrir%20minha%20empresa%20com%20a%20SBF%20Contabilidade.",
  },
  {
    icon: "fa-lightbulb",
    title: "Consultoria de Negócios",
    description:
      "Diagnóstico e mentoria para estruturar processos e ampliar o negócio. Análise estratégica personalizada para identificar oportunidades e eliminar gargalos.",
    items: ["Diagnóstico empresarial", "Mentoria com sócios", "Estruturação de processos", "Planejamento estratégico"],
    cta: "Agendar consultoria",
    ctaLink: "https://wa.me/5521988652452?text=Olá!%20Quero%20agendar%20uma%20Consultoria%20de%20Negócios%20com%20a%20SBF.",
  },
];

const ECOSSISTEMA = [
  { icon: "fa-landmark", title: "Consultoria Lucro Real", ideal: "Empresas em crescimento acelerado" },
  { icon: "fa-heart", title: "Gestão de Benefícios", ideal: "Contratação e retenção de talentos" },
  { icon: "fa-shield-alt", title: "Holding Patrimonial", ideal: "Proteção e sucessão familiar" },
  { icon: "fa-trademark", title: "Marcas e Patentes", ideal: "Parceiros e benefícios exclusivos" },
  { icon: "fa-chart-bar", title: "BPO Financeiro", ideal: "Gestão financeira sem complicações" },
  { icon: "fa-chalkboard-teacher", title: "Mentoria Empresarial", ideal: "Desorganização interna e processos" },
  { icon: "fa-map-marker-alt", title: "Endereço Fiscal", ideal: "Privacidade e endereço fiscal" },
  { icon: "fa-balance-scale", title: "Consultoria Tributária", ideal: "Reforma e compliance fiscal" },
  { icon: "fa-undo", title: "Recuperação Tributária", ideal: "Recuperar impostos pagos a maior" },
  { icon: "fa-certificate", title: "Certificado Digital", ideal: "Resiliência fiscal e segurança digital" },
];

export default function ServicosSection() {
  return (
    <section
      id="servicos"
      className="sbf-section"
      style={{ background: "var(--sbf-neutral-50)" }}
    >
      <div className="container">

        {/* Header */}
        <div className="text-center" style={{ marginBottom: 56 }}>
          <span className="sbf-badge sbf-badge-navy" style={{ marginBottom: 16, display: "inline-flex" }}>
            <i className="fas fa-briefcase" style={{ fontSize: 10 }}></i>
            O que fazemos
          </span>
          <h2
            style={{
              color: "var(--sbf-navy)",
              fontWeight: 900,
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
            }}
          >
            Nossas Especialidades
          </h2>
          <div className="gold-divider gold-divider-center" />
          <p style={{ color: "var(--sbf-neutral-500)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Soluções contábeis completas e personalizadas para cada fase do seu negócio.
          </p>
        </div>

        {/* Especialidades grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: 20, marginBottom: 80 }}>
          {ESPECIALIDADES.map((s) => (
            <div
              key={s.title}
              className="service-card flex flex-col"
              style={{
                padding: "28px",
                borderRadius: 20,
                background: "white",
                border: "1px solid rgba(48,67,102,0.07)",
                boxShadow: "0 2px 12px rgba(48,67,102,0.06)",
                gap: 16,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "linear-gradient(135deg, var(--sbf-navy) 0%, var(--sbf-navy-dark) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(48,67,102,0.25)",
                }}
              >
                <i className={`fas ${s.icon}`} style={{ color: "#ba9863", fontSize: 20 }}></i>
              </div>

              {/* Title */}
              <h3
                style={{
                  color: "var(--sbf-navy)",
                  fontWeight: 800,
                  fontSize: "1.0625rem",
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "var(--sbf-neutral-500)",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  margin: 0,
                  flex: 1,
                }}
              >
                {s.description}
              </p>

              {/* Items */}
              <div className="grid grid-cols-2" style={{ gap: 6 }}>
                {s.items.map((item) => (
                  <div key={item} className="flex items-center" style={{ gap: 6 }}>
                    <i className="fas fa-check" style={{ color: "#ba9863", fontSize: 10, flexShrink: 0 }}></i>
                    <span style={{ color: "var(--sbf-neutral-500)", fontSize: "0.8125rem" }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={s.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                style={{
                  gap: 6,
                  color: "var(--sbf-gold-dark)",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  marginTop: "auto",
                  transition: "gap 0.2s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = "10px"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = "6px"; }}
              >
                {s.cta}
                <i className="fas fa-arrow-right" style={{ fontSize: 11 }}></i>
              </a>
            </div>
          ))}
        </div>

        {/* Ecossistema de Soluções */}
        <div
          style={{
            borderRadius: 28,
            padding: "clamp(32px, 5vw, 56px) clamp(24px, 4vw, 48px)",
            background: "linear-gradient(145deg, var(--sbf-navy) 0%, var(--sbf-navy-dark) 60%, var(--sbf-navy-deeper) 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background dots */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(186,152,99,0.1) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="text-center" style={{ marginBottom: 40, position: "relative", zIndex: 1 }}>
            <h3
              style={{
                color: "white",
                fontWeight: 900,
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                letterSpacing: "-0.02em",
                margin: "0 0 8px",
              }}
            >
              Ecossistema de Soluções Integradas
            </h3>
            <div className="gold-divider gold-divider-center" />
            <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 480, margin: "0 auto", fontSize: "0.9375rem" }}>
              Identificamos o momento da sua empresa e entregamos a solução exata.
            </p>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-5"
            style={{ gap: 12, marginBottom: 36, position: "relative", zIndex: 1 }}
          >
            {ECOSSISTEMA.map((item) => (
              <div
                key={item.title}
                className="sbf-card-dark flex flex-col items-center text-center"
                style={{ padding: "18px 12px", gap: 10, borderRadius: 16 }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: "rgba(186,152,99,0.14)",
                    border: "1px solid rgba(186,152,99,0.22)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i className={`fas ${item.icon}`} style={{ color: "#ba9863", fontSize: 14 }}></i>
                </div>
                <div>
                  <p style={{ color: "white", fontWeight: 700, fontSize: "0.8125rem", margin: "0 0 4px" }}>
                    {item.title}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.6875rem", lineHeight: 1.5, margin: 0 }}>
                    {item.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ position: "relative", zIndex: 1 }}>
            <a
              href="https://wa.me/5521988652452?text=Olá!%20Quero%20conhecer%20o%20ecossistema%20de%20soluções%20da%20SBF%20Contabilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="sbf-btn sbf-btn-gold"
            >
              <i className="fab fa-whatsapp"></i>
              Descobrir a solução ideal para minha empresa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
