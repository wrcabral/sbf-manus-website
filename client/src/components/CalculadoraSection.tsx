import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

const FAIXAS = [
  { label: "Até R$ 100 mil/ano", value: "ate_100k", faturamento: 100000 },
  { label: "R$ 100k – R$ 360k/ano", value: "100k_360k", faturamento: 230000 },
  { label: "R$ 360k – R$ 1,2M/ano", value: "360k_1200k", faturamento: 780000 },
  { label: "R$ 1,2M – R$ 4,8M/ano", value: "1200k_4800k", faturamento: 3000000 },
  { label: "Acima de R$ 4,8M/ano", value: "acima_4800k", faturamento: 6000000 },
];

const REGIMES = [
  { label: "Simples Nacional", value: "simples", aliquota: 0.12 },
  { label: "Lucro Presumido", value: "presumido", aliquota: 0.135 },
  { label: "Lucro Real", value: "real", aliquota: 0.10 },
  { label: "Não sei / Quero descobrir", value: "nao_sei", aliquota: 0.14 },
];

const SETORES = [
  "Tecnologia / Software",
  "Saúde / Medicina",
  "Comércio / E-commerce",
  "Serviços / Consultoria",
  "Engenharia / Construção",
  "Turismo / Hotelaria",
  "Instituição Financeira",
  "Outro",
];

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

export default function CalculadoraSection() {
  const [step, setStep] = useState(1);
  const [faixaSelecionada, setFaixaSelecionada] = useState<string>("");
  const [regimeSelecionado, setRegimeSelecionado] = useState<string>("");
  const [setorSelecionado, setSetorSelecionado] = useState<string>("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [leadSent, setLeadSent] = useState(false);

  const capture = trpc.leads.capture.useMutation({
    onSuccess: () => setLeadSent(true),
    onError: () => toast.error("Erro ao enviar. Tente novamente."),
  });

  const faixa = FAIXAS.find((f) => f.value === faixaSelecionada);
  const regime = REGIMES.find((r) => r.value === regimeSelecionado);

  // Cálculo estimado de economia
  const calcularEconomia = () => {
    if (!faixa || !regime) return null;
    const impostoAtual = faixa.faturamento * regime.aliquota;
    // SBF consegue reduzir em média 25–40% da carga tributária via planejamento
    const economiaMin = impostoAtual * 0.20;
    const economiaMax = impostoAtual * 0.38;
    return { impostoAtual, economiaMin, economiaMax };
  };

  const resultado = calcularEconomia();

  const handleCaptureLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    capture.mutate({
      email,
      phone,
      source: "calculator",
      faturamento: faixa?.label,
      regime: regime?.label,
    });
  };

  return (
    <section
      id="calculadora"
      style={{
        background: "linear-gradient(160deg, #0d1a26 0%, #1a2a3a 100%)",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(186,152,99,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(186,152,99,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid md:grid-cols-2" style={{ gap: 48, alignItems: "center" }}>

          {/* Left: Header + Benefits */}
          <div>
            <span className="sbf-badge sbf-badge-gold-dark" style={{ marginBottom: 20, display: "inline-flex" }}>
              <i className="fas fa-calculator" style={{ fontSize: 10 }}></i>
              Calculadora Tributária
            </span>
            <h2
              style={{
                color: "white",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                margin: "0 0 8px",
                lineHeight: 1.1,
              }}
            >
              Quanto sua empresa pode
              <span className="sbf-text-gold"> economizar</span> em impostos?
            </h2>
            <div className="gold-divider" style={{ margin: "16px 0 20px" }} />
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: "0 0 32px", fontSize: "1.0625rem" }}>
              Descubra em 3 passos o potencial de economia tributária da sua empresa com a estratégia certa da SBF.
            </p>

            <div className="flex flex-col" style={{ gap: 16 }}>
              {[
                { icon: "fa-search-dollar", title: "Diagnóstico Personalizado", desc: "Análise do seu regime tributário atual e oportunidades de redução." },
                { icon: "fa-shield-alt", title: "Planejamento 100% Legal", desc: "Estratégias dentro da lei para reduzir impostos sem riscos." },
                { icon: "fa-gift", title: "Isenção de 13º Salário", desc: "Diferencial exclusivo SBF: economia real na folha de pagamento." },
              ].map((b) => (
                <div key={b.title} className="flex items-start" style={{ gap: 14 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "rgba(186,152,99,0.12)",
                      border: "1px solid rgba(186,152,99,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i className={`fas ${b.icon}`} style={{ color: "#ba9863", fontSize: 14 }}></i>
                  </div>
                  <div>
                    <p style={{ color: "white", fontWeight: 700, fontSize: "0.9375rem", margin: "0 0 2px" }}>{b.title}</p>
                    <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.875rem", margin: 0, lineHeight: 1.5 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Calculator widget */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(186,152,99,0.2)",
              borderRadius: 24,
              padding: "36px 32px",
              backdropFilter: "blur(8px)",
            }}
          >
            {/* Progress */}
            <div className="flex items-center" style={{ gap: 8, marginBottom: 28 }}>
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center" style={{ gap: 8, flex: s < 3 ? 1 : "none" }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: step >= s ? "#ba9863" : "rgba(255,255,255,0.08)",
                      border: step >= s ? "none" : "1px solid rgba(255,255,255,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: step >= s ? "#1a2a3a" : "rgba(255,255,255,0.3)",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      flexShrink: 0,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {step > s ? <i className="fas fa-check" style={{ fontSize: 10 }}></i> : s}
                  </div>
                  {s < 3 && (
                    <div
                      style={{
                        flex: 1,
                        height: 2,
                        background: step > s ? "#ba9863" : "rgba(255,255,255,0.08)",
                        borderRadius: 1,
                        transition: "background 0.3s ease",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Faturamento */}
            {step === 1 && (
              <div>
                <h3 style={{ color: "white", fontWeight: 800, fontSize: "1.125rem", margin: "0 0 6px" }}>
                  Qual o faturamento anual da sua empresa?
                </h3>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.875rem", margin: "0 0 20px" }}>
                  Selecione a faixa mais próxima da realidade atual.
                </p>
                <div className="flex flex-col" style={{ gap: 8 }}>
                  {FAIXAS.map((f) => (
                    <button
                      key={f.value}
                      onClick={() => { setFaixaSelecionada(f.value); setStep(2); }}
                      style={{
                        padding: "12px 16px",
                        borderRadius: 10,
                        border: `1.5px solid ${faixaSelecionada === f.value ? "#ba9863" : "rgba(255,255,255,0.1)"}`,
                        background: faixaSelecionada === f.value ? "rgba(186,152,99,0.12)" : "transparent",
                        color: faixaSelecionada === f.value ? "#d4b47a" : "rgba(255,255,255,0.7)",
                        textAlign: "left",
                        cursor: "pointer",
                        fontSize: "0.9375rem",
                        fontWeight: faixaSelecionada === f.value ? 700 : 400,
                        transition: "all 0.2s ease",
                      }}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Regime */}
            {step === 2 && (
              <div>
                <h3 style={{ color: "white", fontWeight: 800, fontSize: "1.125rem", margin: "0 0 6px" }}>
                  Qual o regime tributário atual?
                </h3>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.875rem", margin: "0 0 20px" }}>
                  Se não souber, selecione a última opção.
                </p>
                <div className="flex flex-col" style={{ gap: 8, marginBottom: 20 }}>
                  {REGIMES.map((r) => (
                    <button
                      key={r.value}
                      onClick={() => { setRegimeSelecionado(r.value); setStep(3); }}
                      style={{
                        padding: "12px 16px",
                        borderRadius: 10,
                        border: `1.5px solid ${regimeSelecionado === r.value ? "#ba9863" : "rgba(255,255,255,0.1)"}`,
                        background: regimeSelecionado === r.value ? "rgba(186,152,99,0.12)" : "transparent",
                        color: regimeSelecionado === r.value ? "#d4b47a" : "rgba(255,255,255,0.7)",
                        textAlign: "left",
                        cursor: "pointer",
                        fontSize: "0.9375rem",
                        fontWeight: regimeSelecionado === r.value ? 700 : 400,
                        transition: "all 0.2s ease",
                      }}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setStep(1)}
                  style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: "0.875rem" }}
                >
                  ← Voltar
                </button>
              </div>
            )}

            {/* Step 3: Resultado + Captura */}
            {step === 3 && resultado && (
              <div>
                {!leadSent ? (
                  <>
                    {/* Preview do resultado (parcial) */}
                    <div
                      style={{
                        background: "rgba(186,152,99,0.08)",
                        border: "1px solid rgba(186,152,99,0.2)",
                        borderRadius: 14,
                        padding: "20px",
                        marginBottom: 20,
                      }}
                    >
                      <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.8125rem", margin: "0 0 6px" }}>
                        Estimativa de economia anual com a SBF:
                      </p>
                      <p
                        className="sbf-stat-number"
                        style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", margin: "0 0 4px", lineHeight: 1 }}
                      >
                        {formatCurrency(resultado.economiaMin)} – {formatCurrency(resultado.economiaMax)}
                      </p>
                      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", margin: 0 }}>
                        *Estimativa baseada em médias do setor. Resultado real pode ser maior.
                      </p>
                    </div>

                    <h3 style={{ color: "white", fontWeight: 800, fontSize: "1rem", margin: "0 0 6px" }}>
                      Receba a análise completa gratuitamente
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.875rem", margin: "0 0 16px" }}>
                      Um especialista SBF entrará em contato para detalhar as estratégias.
                    </p>

                    <form onSubmit={handleCaptureLead} className="flex flex-col" style={{ gap: 10 }}>
                      <input
                        type="email"
                        placeholder="Seu e-mail *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          borderRadius: 10,
                          padding: "12px 14px",
                          color: "white",
                          fontSize: "0.9375rem",
                          outline: "none",
                          width: "100%",
                        }}
                      />
                      <input
                        type="tel"
                        placeholder="WhatsApp (opcional)"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          borderRadius: 10,
                          padding: "12px 14px",
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
                        style={{ justifyContent: "center", opacity: !email ? 0.5 : 1 }}
                      >
                        {capture.isPending ? (
                          <><i className="fas fa-spinner fa-spin"></i> Enviando...</>
                        ) : (
                          <><i className="fas fa-paper-plane"></i> Ver análise completa</>
                        )}
                      </button>
                    </form>
                    <button
                      onClick={() => setStep(2)}
                      style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: "0.875rem", marginTop: 8 }}
                    >
                      ← Voltar
                    </button>
                  </>
                ) : (
                  <div className="text-center" style={{ padding: "16px 0" }}>
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        background: "rgba(186,152,99,0.15)",
                        border: "2px solid #ba9863",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 16px",
                      }}
                    >
                      <i className="fas fa-check" style={{ color: "#ba9863", fontSize: 20 }}></i>
                    </div>
                    <h3 style={{ color: "white", fontWeight: 800, fontSize: "1.25rem", margin: "0 0 10px" }}>
                      Análise enviada!
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: "0 0 20px", fontSize: "0.9375rem" }}>
                      Nossa equipe entrará em contato em breve. Para resposta imediata, fale pelo WhatsApp.
                    </p>
                    <a
                      href={`https://wa.me/5521988652452?text=Olá!%20Fiz%20a%20calculadora%20no%20site%20e%20quero%20saber%20mais%20sobre%20como%20economizar%20${formatCurrency(resultado.economiaMin)}%20em%20impostos.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sbf-btn sbf-btn-gold"
                      style={{ display: "inline-flex" }}
                    >
                      <i className="fab fa-whatsapp"></i>
                      Falar agora no WhatsApp
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
