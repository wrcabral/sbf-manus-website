import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const WHATSAPP_URL =
  "https://wa.me/5521988652452?text=Ol%C3%A1!%20Tenho%20interesse%20na%20Rota%20Tribut%C3%A1ria%20SBF%20e%20gostaria%20de%20agendar%20minha%20sess%C3%A3o%20de%20diagn%C3%B3stico.";

const FASES = [
  {
    num: "01",
    fase: "FASE 1",
    titulo: "Diagnóstico e Preparação",
    cor: "#C9A961",
    etapas: [
      {
        n: "01",
        titulo: "Auditoria e Revisão de Processos",
        tag: undefined as string | undefined,
        itens: [
          "Revisão de NCM, CFOP e CST para garantir conformidade.",
          "Mapeamento de créditos não aproveitados na operação atual.",
          "Saneamento completo do cadastro de produtos.",
        ],
        resultado: "Processos internos ajustados e blindados antes de qualquer mudança de regime.",
      },
      {
        n: "02",
        titulo: "Diagnóstico do Novo Regime",
        tag: undefined as string | undefined,
        itens: [
          "Simulação comparativa: Sistema Atual vs. CBS/IBS.",
          "Análise de impacto no preço final e na competitividade B2B.",
          "Avaliação do impacto do Split Payment no fluxo de caixa.",
        ],
        resultado: "Visão clara e matemática do impacto financeiro da Reforma no seu negócio.",
      },
    ],
  },
  {
    num: "02",
    fase: "FASE 2",
    titulo: "Adequação e Capacitação",
    cor: "#4A90D9",
    etapas: [
      {
        n: "03",
        titulo: "Adequação de Sistemas",
        tag: undefined as string | undefined,
        itens: [
          "Auditoria completa de ERP, faturamento e contabilidade.",
          "Checklist de funcionalidades obrigatórias (campos CBS/IBS, Split Payment).",
          "Recomendação de fornecedores de software adequados.",
          "Plano de implementação com cronograma e responsáveis.",
        ],
        resultado: "Segurança tecnológica para emitir notas e reter impostos sem travar a operação.",
      },
      {
        n: "04",
        titulo: "Capacitação das Equipes",
        tag: undefined as string | undefined,
        itens: [
          "Treinamento prático sobre as novas regras de crédito do CBS/IBS.",
          "Habilitação das equipes internas para operar no novo sistema.",
          "Preparação para a transição sem dependência de suporte constante.",
        ],
        resultado: "Uma equipe preparada para lidar com a duplicidade de obrigações durante a transição.",
      },
    ],
  },
  {
    num: "03",
    fase: "FASE 3",
    titulo: "Transição e Recuperação",
    cor: "#7B68EE",
    etapas: [
      {
        n: "05",
        titulo: "Gestão da Transição",
        tag: "O CORAÇÃO DO PROGRAMA (2026-2033)",
        itens: [
          "Apuração mensal simultânea: sistema antigo (ICMS/ISS) + novo (CBS/IBS).",
          "Gestão de créditos acumulados dos impostos antigos para compensação.",
          "Relatório gerencial mensal de carga tributária efetiva.",
          "Acompanhamento do Split Payment e seu impacto no capital de giro.",
        ],
        resultado: "Segurança total na transição, evitando pagamentos em duplicidade e protegendo o caixa da sua empresa.",
      },
      {
        n: "06",
        titulo: "Recuperação de Créditos",
        tag: "MAXIMIZAÇÃO DE CAIXA",
        itens: [
          "Auditoria detalhada de créditos de IVA não aproveitados.",
          "Pedidos de ressarcimento e compensação administrativa.",
          "Assessoria para setores com tratamento diferenciado (saúde, educação, agronegócio).",
          "Acompanhamento de regulamentação setorial específica.",
        ],
        resultado: "Maximização do fluxo de caixa através da recuperação de valores e enquadramento correto nas regras setoriais.",
      },
    ],
  },
];

const MODELOS = [
  {
    num: "MODELO 1",
    titulo: "Diagnóstico Pontual",
    desc: "Para empresas que precisam entender o impacto exato antes de tomar qualquer decisão.",
    destaque: false,
    badge: null,
    itens: [
      "Simulação CBS+IBS vs. Sistema Atual",
      "Identificação de despesas geradoras de crédito",
      "Projeção de impacto no capital de giro (Split Payment)",
      "Relatório Executivo de Impacto com recomendações",
      "Análise matemática do melhor regime tributário",
    ],
  },
  {
    num: "MODELO 2",
    titulo: "Programa Completo Fase 1",
    subtitulo: "(2026-2027)",
    desc: "Para empresas que precisam se preparar estruturalmente para o início da transição.",
    destaque: false,
    badge: "Mais Contratado",
    itens: [
      "Tudo do Modelo 1",
      "Auditoria de adequação tecnológica (ERP, faturamento, NF-e)",
      "Plano de ação detalhado para adequação de sistemas",
      "Treinamento das equipes fiscais e financeiras internas",
      "Acompanhamento consultivo durante 2026 e 2027",
    ],
  },
  {
    num: "MODELO 3",
    titulo: "Programa Rota Total",
    subtitulo: "(2026-2033)",
    desc: "Para empresas que querem uma parceria estratégica e gestão completa em toda a transição.",
    destaque: true,
    badge: "RECOMENDADO",
    itens: [
      "Tudo dos Modelos 1 e 2",
      "Gestão mensal de CBS e IBS (apuração, créditos, conciliação)",
      "Relatórios gerenciais mensais de carga tributária efetiva",
      "Gestão e recuperação de créditos acumulados antigos",
      "Assessoria especializada para regimes diferenciados setoriais",
      "Webinars mensais de atualização regulatória",
    ],
  },
];

export default function RotaTributaria() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "Montserrat, sans-serif", background: "#0B132B" }}>
      <Navbar />

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0B132B 0%, #0d1f3c 50%, #0B132B 100%)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          paddingTop: 100,
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(201,169,97,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow effects */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "10%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,169,97,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: "5%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(74,144,217,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "clamp(32px, 5vw, 64px)", alignItems: "center" }}>
            {/* Left: Text */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(201,169,97,0.12)",
                  border: "1px solid rgba(201,169,97,0.3)",
                  borderRadius: 100,
                  padding: "6px 16px",
                  marginBottom: 24,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C9A961", display: "inline-block" }} />
                <span style={{ color: "#C9A961", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Programa Estratégico SBF
                </span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                  fontWeight: 900,
                  color: "#C9A961",
                  lineHeight: 1.05,
                  marginBottom: 8,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                }}
              >
                ROTA
              </h1>
              <h1
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  lineHeight: 1.05,
                  marginBottom: 8,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                }}
              >
                TRIBUTÁRIA
              </h1>
              <h1
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                  fontWeight: 900,
                  color: "#C9A961",
                  lineHeight: 1.05,
                  marginBottom: 24,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                }}
              >
                SBF
              </h1>

              <p style={{ fontSize: "1.2rem", color: "#E0E0E0", lineHeight: 1.6, marginBottom: 12, fontWeight: 600 }}>
                Acompanhamento Estratégico para a Reforma Tributária
              </p>
              <p style={{ fontSize: "1rem", color: "rgba(224,224,224,0.7)", lineHeight: 1.7, marginBottom: 40 }}>
                Um programa estruturado para guiar sua empresa na transição para o IVA Dual (2026-2033), transformando obrigações fiscais em vantagem competitiva.
              </p>

              {/* Urgency badge */}
              <div
                style={{
                  background: "rgba(220,38,38,0.12)",
                  border: "1px solid rgba(220,38,38,0.4)",
                  borderRadius: 12,
                  padding: "12px 20px",
                  marginBottom: 32,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <i className="fas fa-exclamation-triangle" style={{ color: "#ef4444", fontSize: "1rem" }} />
                <span style={{ color: "#fca5a5", fontSize: "0.875rem", fontWeight: 600 }}>
                  A janela de reestruturação se fecha em <strong style={{ color: "#ef4444" }}>2027</strong>
                </span>
              </div>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: "linear-gradient(135deg, #C9A961 0%, #e8c97a 100%)",
                    color: "#0B132B",
                    padding: "16px 32px",
                    borderRadius: 12,
                    fontWeight: 800,
                    fontSize: "1rem",
                    textDecoration: "none",
                    boxShadow: "0 8px 32px rgba(201,169,97,0.35)",
                    letterSpacing: "0.02em",
                  }}
                >
                  <i className="fas fa-calendar-check" />
                  Agendar Diagnóstico Gratuito
                </a>
                <a
                  href="#modelos"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: "transparent",
                    color: "#C9A961",
                    padding: "16px 32px",
                    borderRadius: 12,
                    fontWeight: 700,
                    fontSize: "1rem",
                    textDecoration: "none",
                    border: "1px solid rgba(201,169,97,0.4)",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("modelos")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <i className="fas fa-arrow-down" />
                  Ver Modelos de Proposta
                </a>
              </div>
            </div>

            {/* Right: Timeline visual */}
            <div>
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,169,97,0.15)",
                  borderRadius: 20,
                  padding: 32,
                }}
              >
                <p style={{ color: "#C9A961", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 24 }}>
                  Cronograma da Transição
                </p>
                {[
                  { ano: "2026", label: "Início do IVA Dual", desc: "CBS e IBS entram em vigor. Período de coexistência começa.", cor: "#ef4444" },
                  { ano: "2027", label: "Janela de Reestruturação", desc: "Prazo final para adequação estrutural. Empresas não preparadas perdem competitividade.", cor: "#f97316" },
                  { ano: "2029", label: "Extinção Gradual dos Tributos Antigos", desc: "PIS, COFINS, ICMS e ISS começam a ser extintos progressivamente.", cor: "#C9A961" },
                  { ano: "2033", label: "Transição Completa", desc: "Sistema tributário totalmente reformulado. IVA Dual em plena vigência.", cor: "#22c55e" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, marginBottom: i < 3 ? 24 : 0 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          background: `${item.cor}20`,
                          border: `2px solid ${item.cor}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.65rem",
                          fontWeight: 900,
                          color: item.cor,
                          flexShrink: 0,
                        }}
                      >
                        {item.ano}
                      </div>
                      {i < 3 && <div style={{ width: 2, flex: 1, background: "rgba(255,255,255,0.08)", marginTop: 4 }} />}
                    </div>
                    <div style={{ paddingTop: 8 }}>
                      <p style={{ fontWeight: 800, color: "#FFFFFF", fontSize: "0.9rem", marginBottom: 4 }}>{item.label}</p>
                      <p style={{ color: "rgba(224,224,224,0.6)", fontSize: "0.8rem", lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOR DO MERCADO */}
      <section style={{ background: "#0d1f3c", padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 900, color: "#FFFFFF", marginBottom: 16, textTransform: "uppercase" }}>
              A Reforma Tributária Já Começou.
              <br />
              <span style={{ color: "#C9A961" }}>Você Está Preparado?</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 24 }}>
            {[
              {
                icon: "fa-exchange-alt",
                titulo: "O Novo IVA Dual (CBS e IBS)",
                desc: "Substituição de 5 impostos (PIS, COFINS, ICMS, ISS, IPI). Novas alíquotas que podem elevar drasticamente sua carga tributária efetiva se não houver planejamento.",
                destaque: "5 impostos substituídos",
              },
              {
                icon: "fa-university",
                titulo: "O Impacto do Split Payment",
                desc: "O tributo será retido automaticamente pelo banco no momento do pagamento. Fim do 'float' financeiro e impacto direto e imediato no seu fluxo de caixa.",
                destaque: "Impacto imediato no caixa",
              },
              {
                icon: "fa-link",
                titulo: "O Efeito Dominó no B2B",
                desc: "Seus clientes exigirão créditos tributários integrais. O Simples Nacional tradicional pode se tornar um 'vilão' comercial, fazendo você perder competitividade.",
                destaque: "Perda de competitividade B2B",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: 32,
                  borderTop: "3px solid rgba(220,38,38,0.5)",
                }}
              >
                <i className={`fas ${item.icon}`} style={{ color: "#ef4444", fontSize: "1.75rem", marginBottom: 16, display: "block" }} />
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#FFFFFF", marginBottom: 12 }}>{item.titulo}</h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(224,224,224,0.7)", lineHeight: 1.7, marginBottom: 16 }}>{item.desc}</p>
                <div
                  style={{
                    background: "rgba(220,38,38,0.1)",
                    border: "1px solid rgba(220,38,38,0.3)",
                    borderRadius: 8,
                    padding: "8px 12px",
                    fontSize: "0.8rem",
                    color: "#fca5a5",
                    fontWeight: 700,
                  }}
                >
                  ⚠ {item.destaque}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FASES DO PROGRAMA */}
      <section style={{ background: "#0B132B", padding: "96px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(201,169,97,0.12)",
                border: "1px solid rgba(201,169,97,0.3)",
                borderRadius: 100,
                padding: "4px 16px",
                color: "#C9A961",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              O Programa
            </span>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 900, color: "#FFFFFF", marginBottom: 16, textTransform: "uppercase" }}>
              3 Fases. 6 Etapas. Transição Segura.
            </h2>
            <p style={{ color: "rgba(224,224,224,0.7)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
              Um programa estruturado do diagnóstico inicial até a gestão completa da transição para o IVA Dual.
            </p>
          </div>

          {FASES.map((fase, fi) => (
            <div key={fi} style={{ marginBottom: 64 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 32,
                  paddingBottom: 20,
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    background: fase.cor,
                    color: "#0B132B",
                    borderRadius: 8,
                    padding: "6px 14px",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {fase.fase}
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {fase.titulo}
                </h3>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 24 }}>
                {fase.etapas.map((etapa, ei) => (
                  <div
                    key={ei}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 16,
                      padding: 32,
                      borderLeft: `4px solid ${fase.cor}`,
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 24,
                        right: 24,
                        fontSize: "3rem",
                        fontWeight: 900,
                        color: "rgba(255,255,255,0.05)",
                        lineHeight: 1,
                      }}
                    >
                      {etapa.n}
                    </div>
                    {etapa.tag && (
                      <div
                        style={{
                          display: "inline-block",
                          background: "rgba(201,169,97,0.1)",
                          border: "1px solid rgba(201,169,97,0.3)",
                          borderRadius: 6,
                          padding: "3px 10px",
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          color: "#C9A961",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: 8,
                        }}
                      >
                        {etapa.tag}
                      </div>
                    )}
                    <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#FFFFFF", marginBottom: 16 }}>{etapa.titulo}</h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: 20 }}>
                      {etapa.itens.map((item, ii) => (
                        <li key={ii} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                          <i className="fas fa-chevron-right" style={{ color: fase.cor, fontSize: "0.75rem", marginTop: 4, flexShrink: 0 }} />
                          <span style={{ color: "rgba(224,224,224,0.8)", fontSize: "0.875rem", lineHeight: 1.6 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div
                      style={{
                        background: "rgba(201,169,97,0.06)",
                        border: "1px solid rgba(201,169,97,0.2)",
                        borderRadius: 10,
                        padding: "12px 16px",
                      }}
                    >
                      <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#C9A961", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        → O que você ganha:{" "}
                      </span>
                      <span style={{ fontSize: "0.85rem", color: "#E0E0E0", fontWeight: 600 }}>{etapa.resultado}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODELOS DE PROPOSTA */}
      <section id="modelos" style={{ background: "#0d1f3c", padding: "96px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(201,169,97,0.12)",
                border: "1px solid rgba(201,169,97,0.3)",
                borderRadius: 100,
                padding: "4px 16px",
                color: "#C9A961",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Modelos de Proposta
            </span>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 900, color: "#FFFFFF", marginBottom: 16, textTransform: "uppercase" }}>
              Escolha a Jornada Ideal
            </h2>
            <p style={{ color: "rgba(224,224,224,0.7)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
              Para o momento da sua empresa. Investimento sob consulta, dimensionado de acordo com o porte, volume de dados e complexidade da operação.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 24, alignItems: "start" }}>
            {MODELOS.map((modelo, i) => (
              <div
                key={i}
                style={{
                  background: modelo.destaque ? "rgba(201,169,97,0.08)" : "rgba(255,255,255,0.03)",
                  border: modelo.destaque ? "2px solid rgba(201,169,97,0.5)" : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 20,
                  padding: 32,
                  position: "relative",
                  boxShadow: modelo.destaque ? "0 20px 60px rgba(201,169,97,0.15)" : "none",
                }}
              >
                {modelo.badge && (
                  <div
                    style={{
                      position: "absolute",
                      top: -14,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: modelo.destaque ? "linear-gradient(135deg, #C9A961 0%, #e8c97a 100%)" : "rgba(74,144,217,0.8)",
                      color: modelo.destaque ? "#0B132B" : "#FFFFFF",
                      borderRadius: 100,
                      padding: "4px 16px",
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {modelo.badge}
                  </div>
                )}

                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "rgba(201,169,97,0.7)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: 8,
                  }}
                >
                  {modelo.num}
                </div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 900, color: "#FFFFFF", marginBottom: 4 }}>{modelo.titulo}</h3>
                {modelo.subtitulo && (
                  <p style={{ color: "#C9A961", fontSize: "0.9rem", fontWeight: 700, marginBottom: 12 }}>{modelo.subtitulo}</p>
                )}
                <p style={{ color: "rgba(224,224,224,0.6)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: 24, fontStyle: "italic" }}>
                  {modelo.desc}
                </p>

                <div style={{ marginBottom: 32 }}>
                  {modelo.itens.map((item, ii) => (
                    <div key={ii} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                      <i
                        className="fas fa-check"
                        style={{ color: modelo.destaque ? "#C9A961" : "#4A90D9", marginTop: 3, flexShrink: 0, fontSize: "0.8rem" }}
                      />
                      <span
                        style={{
                          color: item === "Tudo do Modelo 1" || item === "Tudo dos Modelos 1 e 2" ? "#C9A961" : "rgba(224,224,224,0.8)",
                          fontSize: "0.875rem",
                          lineHeight: 1.5,
                          fontWeight: item === "Tudo do Modelo 1" || item === "Tudo dos Modelos 1 e 2" ? 700 : 400,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    background: modelo.destaque ? "linear-gradient(135deg, #C9A961 0%, #e8c97a 100%)" : "transparent",
                    color: modelo.destaque ? "#0B132B" : "#C9A961",
                    padding: "14px 24px",
                    borderRadius: 10,
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    border: modelo.destaque ? "none" : "1px solid rgba(201,169,97,0.4)",
                    boxShadow: modelo.destaque ? "0 8px 24px rgba(201,169,97,0.3)" : "none",
                  }}
                >
                  <i className="fab fa-whatsapp" />
                  Solicitar Proposta
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        style={{
          background: "linear-gradient(135deg, #C9A961 0%, #b8943f 100%)",
          padding: "80px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p style={{ color: "rgba(11,19,43,0.7)", fontSize: "0.875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
            O Tempo de Preparação Está Correndo
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", fontWeight: 900, color: "#0B132B", marginBottom: 16, textTransform: "uppercase" }}>
            DECISÃO MATEMÁTICA
          </h2>
          <p style={{ color: "rgba(11,19,43,0.8)", fontSize: "1.1rem", marginBottom: 8 }}>
            Agende sua Sessão de Diagnóstico.
          </p>
          <p style={{ color: "rgba(11,19,43,0.7)", fontSize: "1rem", marginBottom: 40 }}>
            30 minutos. Sem compromisso. <strong>Você só muda de regime se houver economia comprovada.</strong>
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#0B132B",
                color: "#C9A961",
                padding: "18px 40px",
                borderRadius: 12,
                fontWeight: 800,
                fontSize: "1.1rem",
                textDecoration: "none",
                boxShadow: "0 8px 32px rgba(11,19,43,0.3)",
              }}
            >
              <i className="fab fa-whatsapp" />
              Falar com Bruno Fonseca
            </a>
            <a
              href="mailto:bruno.fonseca@sbfcontabilidade.com.br"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "transparent",
                color: "#0B132B",
                padding: "18px 40px",
                borderRadius: 12,
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                border: "2px solid rgba(11,19,43,0.4)",
              }}
            >
              <i className="fas fa-envelope" />
              bruno.fonseca@sbfcontabilidade.com.br
            </a>
          </div>
          <div style={{ marginTop: 24 }}>
            <a
              href="/simulador-cbs"
              style={{
                color: "#0B132B",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "underline",
              }}
            >
              Ou simule agora o impacto da CBS no seu caixa →
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
