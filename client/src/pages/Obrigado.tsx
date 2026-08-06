import { useEffect } from "react";
import { Link } from "wouter";

export default function Obrigado() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #1a2a3a 0%, #253550 60%, #304366 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(186,152,99,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gold top line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, transparent 0%, #ba9863 30%, #d4b47a 50%, #ba9863 70%, transparent 100%)",
        }}
      />

      <div
        style={{
          maxWidth: 560,
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Logo */}
        <img
          src="/images/logo-full.png"
          alt="SBF Contabilidade"
          style={{ height: 48, width: "auto", objectFit: "contain", marginBottom: 40 }}
        />

        {/* Success icon */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(186,152,99,0.12)",
            border: "2px solid #ba9863",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 28px",
          }}
        >
          <i className="fas fa-check" style={{ color: "#ba9863", fontSize: 32 }}></i>
        </div>

        <h1
          style={{
            color: "white",
            fontWeight: 900,
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            letterSpacing: "-0.02em",
            margin: "0 0 16px",
            lineHeight: 1.1,
          }}
        >
          Mensagem recebida com sucesso!
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "1.0625rem",
            lineHeight: 1.7,
            margin: "0 0 40px",
          }}
        >
          Obrigado pelo contato. Nossa equipe analisará sua mensagem e entrará em contato em até <strong style={{ color: "#d4b47a" }}>24 horas úteis</strong>. Para resposta imediata, fale pelo WhatsApp.
        </p>

        {/* Next steps */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(186,152,99,0.15)",
            borderRadius: 20,
            padding: "28px 24px",
            marginBottom: 32,
            textAlign: "left",
          }}
        >
          <h3 style={{ color: "#d4b47a", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 16px" }}>
            Próximos passos
          </h3>
          <div className="flex flex-col" style={{ gap: 14 }}>
            {[
              { icon: "fa-envelope", text: "Você receberá um e-mail de confirmação em breve." },
              { icon: "fa-phone", text: "Um especialista SBF entrará em contato para entender melhor suas necessidades." },
              { icon: "fa-calendar-check", text: "Agendaremos uma consultoria gratuita no melhor horário para você." },
            ].map((item, i) => (
              <div key={i} className="flex items-start" style={{ gap: 12 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "rgba(186,152,99,0.1)",
                    border: "1px solid rgba(186,152,99,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i className={`fas ${item.icon}`} style={{ color: "#ba9863", fontSize: 12 }}></i>
                </div>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9375rem", margin: 0, lineHeight: 1.6 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row" style={{ gap: 12, justifyContent: "center" }}>
          <a
            href="https://wa.me/5521988652452?text=Olá!%20Acabei%20de%20enviar%20uma%20mensagem%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20especialista."
            target="_blank"
            rel="noopener noreferrer"
            className="sbf-btn sbf-btn-gold"
          >
            <i className="fab fa-whatsapp"></i>
            Falar no WhatsApp agora
          </a>
          <a
            href="https://www.youtube.com/@sbfcontabilidade.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="sbf-btn sbf-btn-outline"
          >
            <i className="fab fa-youtube"></i>
            Ver nosso Podcast
          </a>
        </div>

        <div style={{ marginTop: 32 }}>
          <Link
            href="/"
            style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.875rem", textDecoration: "none" }}
          >
            ← Voltar ao site
          </Link>
        </div>
      </div>
    </div>
  );
}
