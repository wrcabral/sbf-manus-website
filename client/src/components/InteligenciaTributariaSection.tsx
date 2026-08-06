const ESTRATEGIAS = [
  {
    icon: "fa-search",
    title: "Revisão Fiscal Permanente",
    desc: "Monitoramento contínuo da legislação para identificar benefícios fiscais aplicáveis ao seu negócio imediatamente.",
  },
  {
    icon: "fa-balance-scale",
    title: "Lucro Real vs. Presumido",
    desc: "Análise comparativa anual para definir o regime tributário mais econômico para o próximo exercício.",
  },
  {
    icon: "fa-undo",
    title: "Recuperação de Créditos",
    desc: "Levantamento administrativo de impostos pagos a maior nos últimos 5 anos (PIS, COFINS, ICMS).",
  },
];

const LUCRO_REAL = [
  {
    icon: "fa-gavel",
    title: "Justiça Fiscal",
    desc: "Pague impostos apenas sobre o lucro efetivo. Se não houve lucro no período, não há pagamento de IRPJ e CSLL.",
  },
  {
    icon: "fa-bolt",
    title: "Créditos de PIS/COFINS",
    desc: "Recupere créditos sobre despesas essenciais como energia elétrica, aluguel, fretes e insumos de produção.",
  },
  {
    icon: "fa-chart-line",
    title: "Compensação de Prejuízos",
    desc: "Prejuízos fiscais de períodos anteriores podem ser utilizados para abater o lucro futuro, otimizando o fluxo de caixa.",
  },
];

const REFORMA_ETAPAS = [
  {
    icon: "fa-stethoscope",
    title: "Diagnóstico de Impacto",
    desc: "Simulamos como a nova carga tributária afetará seus custos e margens de lucro atuais.",
  },
  {
    icon: "fa-tags",
    title: "Revisão de Precificação",
    desc: "Ajuste estratégico na formação de preços para manter a competitividade sem perder rentabilidade.",
  },
  {
    icon: "fa-boxes",
    title: "Gestão de Estoque e Créditos",
    desc: "Planejamento para maximizar o aproveitamento dos novos créditos financeiros sobre insumos.",
  },
];

export default function InteligenciaTributariaSection() {
  return (
    <section
      id="inteligencia-tributaria"
      className="sbf-section sbf-section-light"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: "rgba(48,67,102,0.08)", color: "#304366", border: "1px solid rgba(48,67,102,0.2)" }}
          >
            Estratégia Fiscal
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: "#304366" }}>
            Inteligência Tributária
          </h2>
          <div className="gold-divider gold-divider-center"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transformando obrigações fiscais em oportunidades de caixa.
          </p>
        </div>

        {/* Estratégias + Métrica */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {ESTRATEGIAS.map((e) => (
            <div
              key={e.title}
              className="p-7 rounded-2xl bg-white flex flex-col gap-4"
              style={{ boxShadow: "0 4px 20px rgba(48,67,102,0.08)", border: "1px solid rgba(48,67,102,0.08)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #304366 0%, #1a2a3a 100%)" }}
              >
                <i className={`fas ${e.icon} text-lg`} style={{ color: "#ba9863" }}></i>
              </div>
              <h3 className="font-black text-base" style={{ color: "#304366" }}>{e.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>

        {/* Por que Lucro Real */}
        <div
          className="rounded-3xl p-10 mb-12"
          style={{ background: "linear-gradient(135deg, #304366 0%, #1a2a3a 100%)" }}
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                Por Que <span style={{ color: "#ba9863" }}>Lucro Real?</span>
              </h3>
              <div className="gold-divider"></div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                A estratégia tributária mais justa para empresas com margens apertadas ou custos elevados.
                <strong className="text-white block mt-2">Não pague imposto sobre o que você não lucrou.</strong>
                Muitas empresas estão no Simples Nacional ou Lucro Presumido pagando mais do que deveriam.
              </p>
              <div
                className="inline-flex items-center gap-3 px-6 py-4 rounded-xl"
                style={{ background: "rgba(186,152,99,0.15)", border: "1px solid rgba(186,152,99,0.3)" }}
              >
                <span className="text-4xl font-black" style={{ color: "#ba9863" }}>30%</span>
                <span className="text-white/80 text-sm">De Economia Tributária Potencial</span>
              </div>
            </div>
            <div className="grid gap-4">
              {LUCRO_REAL.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(186,152,99,0.15)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(186,152,99,0.15)" }}
                  >
                    <i className={`fas ${item.icon} text-sm`} style={{ color: "#ba9863" }}></i>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">{item.title}</p>
                    <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reforma Tributária */}
        <div
          className="rounded-3xl p-10"
          style={{ background: "rgba(48,67,102,0.04)", border: "1px solid rgba(48,67,102,0.12)" }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-black mb-3" style={{ color: "#304366" }}>
              Especialistas na <span style={{ color: "#ba9863" }}>Reforma Tributária</span>
            </h3>
            <div className="gold-divider gold-divider-center"></div>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Seu negócio preparado para a maior mudança fiscal das últimas décadas.
            </p>
          </div>

          {/* Impostos substituídos */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["PIS", "COFINS", "IPI", "ICMS", "ISS"].map((imp) => (
              <div key={imp} className="flex items-center gap-2">
                <span
                  className="px-3 py-1.5 rounded-lg text-xs font-black"
                  style={{ background: "rgba(48,67,102,0.1)", color: "#304366", border: "1px solid rgba(48,67,102,0.2)" }}
                >
                  {imp}
                </span>
                <i className="fas fa-arrow-right text-xs text-gray-400"></i>
              </div>
            ))}
            <div className="flex gap-2">
              {["IBS", "CBS"].map((imp) => (
                <span
                  key={imp}
                  className="px-3 py-1.5 rounded-lg text-xs font-black"
                  style={{ background: "rgba(186,152,99,0.15)", color: "#ba9863", border: "1px solid rgba(186,152,99,0.3)" }}
                >
                  {imp}
                </span>
              ))}
            </div>
          </div>
          <p className="text-center text-gray-500 text-xs mb-10">
            Simplificação radical com novas regras de creditamento e alíquotas.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {REFORMA_ETAPAS.map((e) => (
              <div
                key={e.title}
                className="p-6 rounded-2xl flex flex-col gap-4"
                style={{ background: "white", boxShadow: "0 4px 20px rgba(48,67,102,0.08)", border: "1px solid rgba(48,67,102,0.08)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #304366 0%, #1a2a3a 100%)" }}
                >
                  <i className={`fas ${e.icon} text-lg`} style={{ color: "#ba9863" }}></i>
                </div>
                <h4 className="font-black text-sm" style={{ color: "#304366" }}>{e.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-8 p-4 rounded-xl text-center"
            style={{ background: "rgba(186,152,99,0.08)", border: "1px solid rgba(186,152,99,0.2)" }}
          >
            <p className="text-sm font-bold" style={{ color: "#304366" }}>
              <i className="fas fa-exclamation-triangle mr-2" style={{ color: "#ba9863" }}></i>
              Não espere a vigência total. A transição exige preparação antecipada para evitar passivos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
