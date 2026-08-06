export default function JornadaSection() {
  const passos = [
    {
      num: "01",
      titulo: "Diagnóstico",
      subtitulo: "Gratuito e sem compromisso",
      descricao: "Analisamos a situação atual da sua empresa: regime tributário, folha de pagamento, obrigações fiscais e oportunidades de economia.",
      icone: "fa-search",
      cor: "#ba9863",
    },
    {
      num: "02",
      titulo: "Proposta",
      subtitulo: "Personalizada para seu negócio",
      descricao: "Apresentamos um plano sob medida com escopo detalhado, plano de serviços e investimento transparente, sem surpresas.",
      icone: "fa-file-alt",
      cor: "#ba9863",
    },
    {
      num: "03",
      titulo: "Onboarding",
      subtitulo: "Transição tranquila e segura",
      descricao: "Nossa equipe cuida de toda a migração contábil, comunicação com o contador anterior e configuração dos sistemas.",
      icone: "fa-rocket",
      cor: "#ba9863",
    },
    {
      num: "04",
      titulo: "Início",
      subtitulo: "Parceria de longo prazo",
      descricao: "Com acesso ao portal SBF, reuniões periódicas e suporte prioritário, sua empresa passa a ter um verdadeiro parceiro estratégico.",
      icone: "fa-handshake",
      cor: "#ba9863",
    },
  ];

  return (
    <section
      id="jornada"
      style={{
        background: "linear-gradient(180deg, #0d1b2e 0%, #1a2a3a 100%)",
        padding: "96px 0",
        overflow: "hidden",
      }}
    >
      <div className="container">

        {/* Header */}
        <div className="text-center" style={{ marginBottom: 64 }}>
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
            <i className="fas fa-route" style={{ fontSize: 9 }}></i>
            Como Funciona
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
            Vamos Crescer{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ba9863 0%, #d4b47a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Juntos?
            </span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: "1rem",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Da primeira conversa ao início da parceria, garantimos uma transição tranquila e sem burocracia.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 gap-0" style={{ position: "relative" }}>

          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute"
            style={{
              top: 44,
              left: "12.5%",
              right: "12.5%",
              height: 2,
              background: "linear-gradient(90deg, #ba9863 0%, rgba(186,152,99,0.3) 100%)",
              zIndex: 0,
            }}
          />

          {passos.map((passo, i) => (
            <div
              key={passo.num}
              style={{
                position: "relative",
                zIndex: 1,
                padding: "0 16px",
                textAlign: "center",
              }}
            >
              {/* Step circle */}
              <div
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  background: i === 0
                    ? "linear-gradient(135deg, #ba9863 0%, #d4b47a 100%)"
                    : "rgba(13,27,46,0.9)",
                  border: `2px solid ${i === 0 ? "#ba9863" : "rgba(186,152,99,0.3)"}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 28px",
                  boxShadow: i === 0 ? "0 8px 32px rgba(186,152,99,0.4)" : "none",
                  transition: "all 0.3s",
                }}
              >
                <i
                  className={`fas ${passo.icone}`}
                  style={{
                    fontSize: 22,
                    color: i === 0 ? "#0d1b2e" : "#ba9863",
                    marginBottom: 4,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    color: i === 0 ? "#0d1b2e" : "rgba(186,152,99,0.7)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {passo.num}
                </span>
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "24px 16px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.125rem",
                    color: "white",
                    margin: "0 0 6px 0",
                  }}
                >
                  {passo.titulo}
                </h3>
                <p
                  style={{
                    color: "#ba9863",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    margin: "0 0 12px 0",
                    letterSpacing: "0.02em",
                  }}
                >
                  {passo.subtitulo}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.72)",
                    fontSize: "0.8125rem",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {passo.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center" style={{ marginTop: 56 }}>
          <a
            href="https://wa.me/5521988652452?text=Olá!%20Quero%20agendar%20um%20diagnóstico%20gratuito%20com%20a%20SBF%20Contabilidade."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 36px",
              borderRadius: 12,
              background: "linear-gradient(135deg, #ba9863 0%, #d4b47a 100%)",
              color: "#0d1b2e",
              fontWeight: 800,
              fontSize: "1rem",
              textDecoration: "none",
              boxShadow: "0 8px 32px rgba(186,152,99,0.4)",
              letterSpacing: "0.01em",
            }}
          >
            <i className="fas fa-calendar-check"></i>
            Agendar Diagnóstico Gratuito
          </a>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8125rem", marginTop: 12 }}>
            Sem compromisso · Resposta em até 2 horas
          </p>
        </div>
      </div>
    </section>
  );
}
