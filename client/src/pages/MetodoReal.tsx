import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const WHATSAPP_URL =
  "https://wa.me/5521988652452?text=Ol%C3%A1!%20Tenho%20interesse%20no%20M%C3%A9todo%20Real%20SBF%20e%20gostaria%20de%20agendar%20minha%20sess%C3%A3o%20de%20diagn%C3%B3stico.";

const FASES = [
  {
    fase: "FASE 1",
    titulo: "RAIO-X DA OPERAÇÃO",
    subtitulo: "O Diagnóstico da Realidade",
    cor: "#C9A961",
    passos: [
      {
        num: "01",
        titulo: "Diagnóstico de Margem",
        tag: "A PERGUNTA QUE O FISCO NÃO FAZ",
        desc: "O governo assume que você lucra 8% ou 32% e cobra imposto sobre isso, independente do seu ganho real. Se sua margem for menor, você está pagando imposto sobre dinheiro que nunca entrou no seu bolso. Calculamos exatamente quanto isso representa por mês.",
        resultado: "O valor exato em reais que sua empresa paga a mais de imposto e se o Lucro Real compensaria na sua situação específica.",
      },
      {
        num: "02",
        titulo: "Avaliação de Processos",
        tag: "ORGANIZAÇÃO ANTES DE EXPOSIÇÃO",
        desc: "O Lucro Real exige escrituração rigorosa. Se o seu ERP não funciona bem ou se o extrato não bate com o sistema, uma mudança sem preparação é um risco enorme. Avaliamos sua maturidade operacional e corrigimos falhas antes de qualquer movimento.",
        resultado: "Se sua operação está pronta ou se há vulnerabilidades que precisam ser resolvidas primeiro para evitar autuações.",
      },
    ],
  },
  {
    fase: "FASE 2",
    titulo: "OTIMIZAÇÃO E BLINDAGEM",
    subtitulo: "Eficiência e Blindagem",
    cor: "#4A90D9",
    passos: [
      {
        num: "03",
        titulo: "Custo de Pessoal",
        tag: "DA FOLHA À EFICIÊNCIA TRIBUTÁRIA",
        desc: "Analisamos o custo real do pessoal próprio (encargos, benefícios, INSS patronal) para avaliar se a estrutura compensa ou se há viabilidade de terceirização estratégica com segurança jurídica e sem improvisação.",
        resultado: "Se há oportunidade real de reduzir custo fixo com terceirização, antes de qualquer mudança de regime.",
      },
      {
        num: "04",
        titulo: "Estrutura Societária",
        tag: "BLINDAGEM ANTES DO PROBLEMA",
        desc: "Avaliamos o substrato econômico da operação, os riscos de desconsideração da personalidade jurídica e o propósito negocial para garantir que a operação entre empresas do grupo seja juridicamente irrepreensível.",
        resultado: "Se as relações do seu grupo resistem à Receita e o que precisa ser ajustado para uma estrutura sólida e defensável.",
      },
    ],
  },
  {
    fase: "FASE 3",
    titulo: "INTELIGÊNCIA E DECISÃO",
    subtitulo: "A Decisão Estratégica",
    cor: "#7B68EE",
    passos: [
      {
        num: "05",
        titulo: "Impacto da Reforma Tributária",
        tag: "O FUTURO JÁ COMEÇOU",
        desc: "Com a substituição do PIS/COFINS pelo IBS/CBS, empresas no Lucro Real estarão melhor posicionadas para aproveitar o creditamento sobre insumos. Mapeamos o impacto específico para o seu setor e construímos uma estratégia de transição para que você chegue em 2026 preparado, não reativo.",
        resultado: "Como a Reforma afeta sua cadeia B2B e quais decisões tomar agora para que o Lucro Real seja uma vantagem competitiva.",
      },
      {
        num: "06",
        titulo: "Relatório Executivo",
        tag: "A DECISÃO BASEADA EM DADOS",
        desc: "Consolidamos todos os dados da Apuração Sombra em um documento executivo claro e objetivo. Comparamos centavo por centavo o regime atual com o Lucro Real projetado, entregando a resposta definitiva sobre a viabilidade da migração.",
        resultado: "A economia exata em reais e o plano de ação definitivo para uma migração segura e rentável.",
      },
    ],
  },
];

export default function MetodoReal() {
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
            top: "20%",
            left: "10%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,169,97,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: 500,
            height: 500,
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
                  Metodologia Exclusiva SBF
                </span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  marginBottom: 8,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                }}
              >
                MÉTODO
              </h1>
              <h1
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 900,
                  color: "#C9A961",
                  lineHeight: 1.1,
                  marginBottom: 24,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                }}
              >
                REAL SBF
              </h1>

              <p
                style={{
                  fontSize: "1.25rem",
                  color: "#E0E0E0",
                  lineHeight: 1.6,
                  marginBottom: 16,
                  fontWeight: 400,
                }}
              >
                A Única Rota Segura para a Reforma Tributária
              </p>
              <p style={{ fontSize: "1rem", color: "rgba(224,224,224,0.7)", lineHeight: 1.7, marginBottom: 40 }}>
                Uma metodologia de 6 passos que descobre, com precisão matemática, se o Lucro Real é mais vantajoso para o seu negócio — antes de qualquer mudança de regime.
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
                <i className="fas fa-clock" style={{ color: "#ef4444", fontSize: "1rem" }} />
                <span style={{ color: "#fca5a5", fontSize: "0.875rem", fontWeight: 600 }}>
                  Janela de decisão: <strong style={{ color: "#ef4444" }}>Setembro de 2026</strong> — irretratável
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
                  Agendar Sessão de Diagnóstico
                </a>
                <a
                  href="#metodologia"
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
                    document.getElementById("metodologia")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <i className="fas fa-arrow-down" />
                  Ver Metodologia
                </a>
              </div>
            </div>

            {/* Right: Stats cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 16 }}>
              {[
                { icon: "fa-search-dollar", num: "6", label: "Passos Estruturados", sub: "3 fases de análise" },
                { icon: "fa-shield-alt", num: "90", label: "Dias de Apuração", sub: "Sem risco fiscal" },
                { icon: "fa-chart-line", num: "100%", label: "Baseado em Dados", sub: "Sem estimativas" },
                { icon: "fa-check-circle", num: "0", label: "Risco de Mudança", sub: "Só muda se compensar" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(201,169,97,0.15)",
                    borderRadius: 16,
                    padding: "24px 20px",
                    textAlign: "center",
                  }}
                >
                  <i className={`fas ${item.icon}`} style={{ color: "#C9A961", fontSize: "1.5rem", marginBottom: 12, display: "block" }} />
                  <div style={{ fontSize: "2rem", fontWeight: 900, color: "#C9A961", lineHeight: 1 }}>{item.num}</div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#FFFFFF", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(224,224,224,0.7)", marginTop: 2 }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOR DO MERCADO */}
      <section style={{ background: "#0d1f3c", padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(220,38,38,0.12)",
                border: "1px solid rgba(220,38,38,0.3)",
                borderRadius: 100,
                padding: "4px 16px",
                color: "#fca5a5",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              O Problema
            </span>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 900, color: "#FFFFFF", marginBottom: 16, textTransform: "uppercase" }}>
              A Ilusão do Lucro Presumido
            </h2>
            <p style={{ color: "rgba(224,224,224,0.7)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
              Três realidades que estão corroendo a competitividade da sua empresa agora mesmo
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 24 }}>
            {[
              {
                icon: "fa-balance-scale",
                titulo: "A Pergunta que o Fisco Não Faz",
                desc: "O governo assume que você lucra 8% ou 32% e cobra imposto sobre isso, independente do seu ganho real. Se sua margem for menor, você está pagando imposto sobre dinheiro que nunca entrou no seu bolso.",
                destaque: "Imposto sobre lucro que não existe",
              },
              {
                icon: "fa-university",
                titulo: "O Fim do Float Financeiro",
                desc: 'A Reforma Tributária acaba com a retenção de caixa. Com o Split Payment, a liquidação será instantânea. A ilusão de reter o imposto para pagar no mês seguinte acabou.',
                destaque: "Split Payment em vigor a partir de 2026",
              },
              {
                icon: "fa-hourglass-half",
                titulo: "O Relógio Está Correndo",
                desc: "A janela de decisão irretratável se encerra em Setembro de 2026. Quem não se planejar agora, perderá competitividade na cadeia B2B e ficará refém de um regime tributário desvantajoso.",
                destaque: "Setembro/2026 — decisão irretratável",
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

      {/* METODOLOGIA */}
      <section id="metodologia" style={{ background: "#0B132B", padding: "96px 0" }}>
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
              A Metodologia
            </span>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 900, color: "#FFFFFF", marginBottom: 16, textTransform: "uppercase" }}>
              6 Passos. 3 Fases. 1 Certeza.
            </h2>
            <p style={{ color: "rgba(224,224,224,0.7)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
              Cada passo foi desenhado para eliminar o risco e construir a certeza matemática antes de qualquer decisão.
            </p>
          </div>

          {FASES.map((fase, fi) => (
            <div key={fi} style={{ marginBottom: 64 }}>
              {/* Fase header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 32,
                  paddingBottom: 20,
                  borderBottom: `1px solid rgba(255,255,255,0.08)`,
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
                <div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {fase.titulo}
                  </h3>
                  <p style={{ color: fase.cor, fontSize: "0.875rem", fontWeight: 600 }}>{fase.subtitulo}</p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 24 }}>
                {fase.passos.map((passo, pi) => (
                  <div
                    key={pi}
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
                      {passo.num}
                    </div>
                    <div
                      style={{
                        display: "inline-block",
                        background: `rgba(${fase.cor === "#C9A961" ? "201,169,97" : fase.cor === "#4A90D9" ? "74,144,217" : "123,104,238"},0.12)`,
                        border: `1px solid ${fase.cor}40`,
                        borderRadius: 6,
                        padding: "3px 10px",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        color: fase.cor,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: 12,
                      }}
                    >
                      {passo.tag}
                    </div>
                    <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#FFFFFF", marginBottom: 12 }}>{passo.titulo}</h4>
                    <p style={{ fontSize: "0.9rem", color: "rgba(224,224,224,0.75)", lineHeight: 1.7, marginBottom: 20 }}>{passo.desc}</p>
                    <div
                      style={{
                        background: "rgba(201,169,97,0.06)",
                        border: "1px solid rgba(201,169,97,0.2)",
                        borderRadius: 10,
                        padding: "12px 16px",
                      }}
                    >
                      <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#C9A961", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        → O que você descobre:{" "}
                      </span>
                      <span style={{ fontSize: "0.85rem", color: "#E0E0E0", fontWeight: 600 }}>{passo.resultado}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APURAÇÃO ASSISTIDA */}
      <section style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #0B132B 100%)", padding: "96px 0" }}>
        <div className="container">
          <div
            style={{
              maxWidth: 800,
              margin: "0 auto",
              textAlign: "center",
              background: "rgba(201,169,97,0.05)",
              border: "1px solid rgba(201,169,97,0.2)",
              borderRadius: 24,
              padding: "64px 48px",
            }}
          >
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
                marginBottom: 24,
              }}
            >
              O Próximo Passo no Método Real
            </span>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 900, color: "#FFFFFF", marginBottom: 8, textTransform: "uppercase" }}>
              A Apuração Assistida
            </h2>
            <p style={{ color: "#C9A961", fontSize: "1.1rem", fontWeight: 600, marginBottom: 24 }}>
              O "Teste Drive" do Lucro Real. Sem risco. Com certeza.
            </p>
            <p style={{ color: "rgba(224,224,224,0.8)", fontSize: "1rem", lineHeight: 1.8, marginBottom: 40 }}>
              Durante <strong style={{ color: "#FFFFFF" }}>90 dias</strong>, a SBF roda o cálculo completo do Lucro Real em paralelo ao seu regime atual —{" "}
              <strong style={{ color: "#C9A961" }}>sem comunicar nada à Receita Federal</strong>.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 16, marginBottom: 40, textAlign: "left" }}>
              {[
                "Testamos seus processos internos e fluxo de caixa na prática.",
                "Corrigimos falhas operacionais antes de qualquer exposição.",
                "Comprovamos a economia real em reais, não em estimativas.",
                "Garantimos total segurança jurídica e conformidade fiscal.",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <i className="fas fa-check" style={{ color: "#C9A961", marginTop: 3, flexShrink: 0 }} />
                  <span style={{ color: "#E0E0E0", fontSize: "0.9rem", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "rgba(201,169,97,0.1)",
                border: "1px solid rgba(201,169,97,0.4)",
                borderRadius: 12,
                padding: "16px 24px",
                marginBottom: 40,
              }}
            >
              <p style={{ color: "#C9A961", fontWeight: 800, fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                VOCÊ MUDA DE REGIME COM CERTEZA MATEMÁTICA.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                background: "linear-gradient(135deg, #C9A961 0%, #e8c97a 100%)",
                color: "#0B132B",
                padding: "18px 40px",
                borderRadius: 12,
                fontWeight: 800,
                fontSize: "1.1rem",
                textDecoration: "none",
                boxShadow: "0 12px 40px rgba(201,169,97,0.4)",
                letterSpacing: "0.02em",
              }}
            >
              <i className="fas fa-calendar-check" />
              Agendar Sessão de Diagnóstico
            </a>
            <p style={{ color: "rgba(224,224,224,0.7)", fontSize: "0.8rem", marginTop: 12 }}>
              30 minutos. Sem compromisso. Você só muda de regime se houver economia comprovada.
            </p>
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
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", fontWeight: 900, color: "#0B132B", marginBottom: 16, textTransform: "uppercase" }}>
            DECISÃO MATEMÁTICA
          </h2>
          <p style={{ color: "rgba(11,19,43,0.8)", fontSize: "1.1rem", marginBottom: 8 }}>
            Antes de mudar qualquer coisa, testamos. <strong>Sem risco. Com certeza.</strong>
          </p>
          <p style={{ color: "rgba(11,19,43,0.7)", fontSize: "1rem", marginBottom: 40 }}>
            Você só muda de regime se houver economia comprovada.
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
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
