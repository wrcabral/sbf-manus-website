import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function ContatoSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const errors = {
    name: touched.name && !form.name.trim() ? "Nome é obrigatório" : "",
    email: touched.email && (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) ? "E-mail inválido" : "",
    message: touched.message && !form.message.trim() ? "Mensagem é obrigatória" : "",
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const sendContact = trpc.contact.send.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    },
    onError: (err: unknown) => {
      toast.error("Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.");
      console.error(err);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Marcar todos os campos como tocados para exibir erros
    setTouched({ name: true, email: true, message: true });
    if (!form.name.trim() || !form.email.trim() || !form.message.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) {
      toast.error("Preencha os campos obrigatórios corretamente.");
      return;
    }
    sendContact.mutate(form);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contato"
      className="sbf-section"
      style={{ background: "linear-gradient(135deg, #304366 0%, #1a2a3a 100%)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: "rgba(186,152,99,0.15)", color: "#ba9863", border: "1px solid rgba(186,152,99,0.3)" }}
          >
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Entre em Contato
          </h2>
          <div className="gold-divider gold-divider-center"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Agende sua consultoria gratuita de 1 hora ou tire suas dúvidas. Estamos prontos para ajudar sua empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info + Calendar */}
          <div className="flex flex-col gap-8">
            {/* Contact cards */}
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/5521988652452?text=Olá!%20Gostaria%20de%20agendar%20uma%20consultoria%20gratuita%20com%20a%20SBF%20Contabilidade."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl transition-all hover:opacity-90"
                style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.3)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#25D366" }}
                >
                  <i className="fab fa-whatsapp text-white text-xl"></i>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">WhatsApp</p>
                  <p className="text-white/60 text-xs">(21) 98865-2452</p>
                  <p className="text-xs mt-0.5" style={{ color: "#25D366" }}>Clique para conversar</p>
                </div>
              </a>

              <div
                className="flex items-center gap-4 p-5 rounded-xl"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(186,152,99,0.2)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(186,152,99,0.15)" }}
                >
                  <i className="fas fa-map-marker-alt" style={{ color: "#ba9863" }}></i>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Endereço</p>
                  <p className="text-white/60 text-xs">Av. Ayrton Senna 2500, Sala 308 Bloco 2</p>
                  <p className="text-white/60 text-xs">Edifício Neolink — Rio de Janeiro, RJ</p>
                </div>
              </div>

              <a
                href="mailto:contato@sbfcontabilidade.com.br"
                className="flex items-center gap-4 p-5 rounded-xl transition-all hover:opacity-90"
                style={{ background: "rgba(186,152,99,0.08)", border: "1px solid rgba(186,152,99,0.25)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(186,152,99,0.15)" }}
                >
                  <i className="fas fa-envelope" style={{ color: "#ba9863" }}></i>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">E-mail</p>
                  <p className="text-white/60 text-xs">contato@sbfcontabilidade.com.br</p>
                  <p className="text-xs mt-0.5" style={{ color: "#ba9863" }}>Clique para enviar e-mail</p>
                </div>
              </a>

              <a
                href="https://www.youtube.com/@sbfcontabilidade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl transition-all hover:opacity-90"
                style={{ background: "rgba(255,0,0,0.08)", border: "1px solid rgba(255,0,0,0.2)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,0,0,0.15)" }}
                >
                  <i className="fab fa-youtube text-red-400 text-xl"></i>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">YouTube</p>
                  <p className="text-white/60 text-xs">@sbfcontabilidade.com.br</p>
                  <p className="text-xs mt-0.5 text-red-400">Assista nossos conteúdos</p>
                </div>
              </a>
            </div>

          </div>

          {/* Right: Contact form */}
          <div>
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center gap-6 p-10 rounded-2xl text-center h-full"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(186,152,99,0.3)" }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(186,152,99,0.2)" }}
                >
                  <i className="fas fa-check text-3xl" style={{ color: "#ba9863" }}></i>
                </div>
                <div>
                  <h3 className="text-white font-black text-xl mb-2">Mensagem Enviada!</h3>
                  <p className="text-white/70 text-sm">
                    Recebemos sua mensagem e entraremos em contato em breve. Você também pode nos chamar pelo WhatsApp para atendimento imediato.
                  </p>
                </div>
                <a
                  href="https://wa.me/5521988652452?text=Olá!%20Acabei%20de%20enviar%20uma%20mensagem%20pelo%20site%20da%20SBF%20Contabilidade."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-xl font-bold text-sm"
                  style={{ background: "#25D366", color: "white" }}
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  Falar pelo WhatsApp
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl flex flex-col gap-5"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(186,152,99,0.2)" }}
              >
                <h3 className="text-white font-black text-xl mb-2">Envie sua mensagem</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/70 text-xs font-medium">Nome *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      onBlur={handleBlur}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "error-name" : undefined}
                      className="px-4 py-3 rounded-xl text-sm text-white placeholder-white/30 outline-none focus:ring-2"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: errors.name ? "1px solid rgba(239,68,68,0.7)" : "1px solid rgba(186,152,99,0.3)",
                        focusRingColor: "#ba9863",
                      } as React.CSSProperties}
                    />
                    {errors.name && <span id="error-name" className="text-red-400 text-xs mt-0.5">{errors.name}</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/70 text-xs font-medium">E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "error-email" : undefined}
                      placeholder="seu@email.com"
                      required
                      className="px-4 py-3 rounded-xl text-sm text-white placeholder-white/30 outline-none"
                      style={{ background: "rgba(255,255,255,0.08)", border: errors.email ? "1px solid rgba(239,68,68,0.7)" : "1px solid rgba(186,152,99,0.3)" }}
                    />
                    {errors.email && <span id="error-email" className="text-red-400 text-xs mt-0.5">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/70 text-xs font-medium">Telefone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(21) 99999-9999"
                      className="px-4 py-3 rounded-xl text-sm text-white placeholder-white/30 outline-none"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(186,152,99,0.3)" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/70 text-xs font-medium">Empresa</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Nome da empresa"
                      className="px-4 py-3 rounded-xl text-sm text-white placeholder-white/30 outline-none"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(186,152,99,0.3)" }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-white/70 text-xs font-medium">Assunto</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl text-sm text-white outline-none"
                    style={{ background: "rgba(48,67,102,0.8)", border: "1px solid rgba(186,152,99,0.3)" }}
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="abertura">Abertura de Empresa</option>
                    <option value="troca">Trocar de Contador</option>
                    <option value="tributario">Consultoria Tributária</option>
                    <option value="financeiro">Gestão Financeira</option>
                    <option value="recuperacao">Recuperação Fiscal</option>
                    <option value="planos">Planos e Preços</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-white/70 text-xs font-medium">Mensagem *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "error-message" : undefined}
                    placeholder="Descreva sua necessidade..."
                    required
                    rows={4}
                    className="px-4 py-3 rounded-xl text-sm text-white placeholder-white/30 outline-none resize-none"
                    style={{ background: "rgba(255,255,255,0.08)", border: errors.message ? "1px solid rgba(239,68,68,0.7)" : "1px solid rgba(186,152,99,0.3)" }}
                  />
                  {errors.message && <span id="error-message" className="text-red-400 text-xs mt-0.5">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={sendContact.isPending}
                  className="w-full py-4 rounded-xl font-bold text-sm relative overflow-hidden"
                  style={{
                    background: sendContact.isPending
                      ? "linear-gradient(135deg, #8a6a3f 0%, #a07840 100%)"
                      : "linear-gradient(135deg, #ba9863 0%, #d4b47a 100%)",
                    color: "#1a2a3a",
                    cursor: sendContact.isPending ? "not-allowed" : "pointer",
                    transition: "background 0.3s ease, transform 0.15s ease, box-shadow 0.2s ease",
                    boxShadow: sendContact.isPending
                      ? "0 0 0 3px rgba(186,152,99,0.3), 0 4px 20px rgba(186,152,99,0.2)"
                      : "0 4px 16px rgba(186,152,99,0.25)",
                    transform: sendContact.isPending ? "scale(0.99)" : "scale(1)",
                  }}
                  onMouseEnter={(e) => {
                    if (!sendContact.isPending) {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(186,152,99,0.4)";
                      (e.currentTarget as HTMLElement).style.transform = "scale(1.01)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!sendContact.isPending) {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(186,152,99,0.25)";
                      (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                    }
                  }}
                >
                  {/* Shimmer de progresso enquanto envia */}
                  {sendContact.isPending && (
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)",
                        backgroundSize: "200% 100%",
                        animation: "sbf-shimmer 1.4s infinite linear",
                      }}
                    />
                  )}
                  <span className="relative flex items-center justify-center gap-2">
                    {sendContact.isPending ? (
                      <>
                        {/* Spinner SVG nativo — sem dependência de Font Awesome */}
                        <svg
                          aria-hidden="true"
                          width="16" height="16" viewBox="0 0 16 16"
                          style={{ animation: "spin 0.8s linear infinite", flexShrink: 0 }}
                        >
                          <circle cx="8" cy="8" r="6" fill="none" stroke="rgba(26,42,58,0.35)" strokeWidth="2.5" />
                          <path d="M8 2 A6 6 0 0 1 14 8" fill="none" stroke="#1a2a3a" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                        <span>Enviando mensagem...</span>
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane" style={{ fontSize: "0.875rem" }}></i>
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </span>
                </button>

                <p className="text-white/40 text-xs text-center">
                  Ao enviar, você concorda com nossa política de privacidade. Seus dados são tratados com sigilo.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Google Calendar Embed — full width so the widget has room to render all 7 days */}
        <div className="mt-12">
          <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
            <i className="fas fa-calendar-alt" style={{ color: "#ba9863" }}></i>
            Agendar Consultoria Gratuita
          </h3>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(186,152,99,0.3)" }}
          >
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ05R_cON9I_nb-GbDOMnLsYwaj7jqcH0vMxBwCnvt4UFV7tZALrY__Fh1AX8Z9rlpPURmrgVCBp?gv=true"
              style={{ border: 0, width: "100%", height: "650px", display: "block" }}
              title="Agendar Consultoria SBF Contabilidade"
              frameBorder="0"
            ></iframe>
          </div>
          <p className="text-white/50 text-xs mt-2 text-center">
            Ou entre em contato pelo WhatsApp para agendamento imediato
          </p>
        </div>
      </div>
    </section>
  );
}
