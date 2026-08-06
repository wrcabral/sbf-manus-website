import { useState, useEffect, useCallback } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function ExitPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const capture = trpc.leads.capture.useMutation({
    onSuccess: () => {
      setSubmitted(true);
    },
    onError: () => {
      toast.error("Erro ao enviar. Tente novamente.");
    },
  });

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !dismissed) {
      setVisible(true);
    }
  }, [dismissed]);

  useEffect(() => {
    // Não mostrar se já foi dispensado nesta sessão
    const alreadyDismissed = sessionStorage.getItem("sbf_exit_popup_dismissed");
    if (alreadyDismissed) {
      setDismissed(true);
      return;
    }

    // Aguardar 3 segundos antes de ativar o listener
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("sbf_exit_popup_dismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    capture.mutate({ name, email, source: "exit_popup" });
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(4px)",
        padding: 20,
        animation: "fadeIn 0.3s ease",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) handleDismiss(); }}
    >
      <div
        style={{
          background: "linear-gradient(160deg, #1e2d40 0%, #253550 100%)",
          border: "1px solid rgba(186,152,99,0.3)",
          borderRadius: 24,
          padding: "48px 40px",
          maxWidth: 520,
          width: "100%",
          position: "relative",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
        }}
      >
        {/* Close button */}
        <button
          onClick={handleDismiss}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.15)",
            background: "transparent",
            color: "rgba(255,255,255,0.72)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
          }}
        >
          <i className="fas fa-times"></i>
        </button>

        {submitted ? (
          <div className="text-center" style={{ padding: "16px 0" }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "rgba(186,152,99,0.15)",
                border: "2px solid #ba9863",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <i className="fas fa-check" style={{ color: "#ba9863", fontSize: 24 }}></i>
            </div>
            <h3 style={{ color: "white", fontWeight: 800, fontSize: "1.5rem", margin: "0 0 12px", letterSpacing: "-0.02em" }}>
              Perfeito! Aguarde nosso contato.
            </h3>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: "0 0 24px" }}>
              Em breve um especialista da SBF entrará em contato para o seu Diagnóstico Tributário Gratuito.
            </p>
            <a
              href="https://wa.me/5521988652452?text=Olá!%20Quero%20meu%20diagnóstico%20tributário%20gratuito."
              target="_blank"
              rel="noopener noreferrer"
              className="sbf-btn sbf-btn-gold"
              style={{ display: "inline-flex" }}
            >
              <i className="fab fa-whatsapp"></i>
              Falar agora no WhatsApp
            </a>
          </div>
        ) : (
          <>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(186,152,99,0.12)",
                border: "1px solid rgba(186,152,99,0.3)",
                borderRadius: 100,
                padding: "4px 12px",
                marginBottom: 20,
                color: "#d4b47a",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <i className="fas fa-gift" style={{ fontSize: 10 }}></i>
              Oferta Exclusiva
            </div>

            <h3
              style={{
                color: "white",
                fontWeight: 900,
                fontSize: "clamp(1.375rem, 3vw, 1.75rem)",
                letterSpacing: "-0.02em",
                margin: "0 0 12px",
                lineHeight: 1.2,
              }}
            >
              Antes de ir… descubra quanto sua empresa pode economizar em impostos.
            </h3>

            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: "0 0 28px", fontSize: "0.9375rem" }}>
              Receba um <strong style={{ color: "#d4b47a" }}>Diagnóstico Tributário Gratuito</strong> personalizado para o seu negócio. Sem compromisso.
            </p>

            {/* Benefits */}
            <div className="flex flex-col" style={{ gap: 8, marginBottom: 28 }}>
              {[
                "Análise do seu regime tributário atual",
                "Identificação de oportunidades de economia",
                "Estratégias para isenção de 13º salário",
              ].map((b) => (
                <div key={b} className="flex items-center" style={{ gap: 10 }}>
                  <i className="fas fa-check-circle" style={{ color: "#ba9863", fontSize: 14, flexShrink: 0 }}></i>
                  <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem" }}>{b}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 12 }}>
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 10,
                  padding: "12px 16px",
                  color: "white",
                  fontSize: "0.9375rem",
                  outline: "none",
                  width: "100%",
                }}
              />
              <input
                type="email"
                placeholder="Seu melhor e-mail *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 10,
                  padding: "12px 16px",
                  color: "white",
                  fontSize: "0.9375rem",
                  outline: "none",
                  width: "100%",
                }}
              />
              <button
                type="submit"
                disabled={capture.isPending || !email}
                className="sbf-btn sbf-btn-gold"
                style={{ width: "100%", justifyContent: "center", opacity: !email ? 0.5 : 1 }}
              >
                {capture.isPending ? (
                  <><i className="fas fa-spinner fa-spin"></i> Enviando...</>
                ) : (
                  <><i className="fas fa-search-dollar"></i> Quero meu Diagnóstico Gratuito</>
                )}
              </button>
            </form>

            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", textAlign: "center", marginTop: 12 }}>
              Sem spam. Seus dados estão seguros conosco.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
