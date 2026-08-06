import { useState } from "react";
import { Phone, X, Send, User, MessageSquare, Loader2, CheckCircle2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function ContactFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const sendContact = trpc.contact.send.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setForm({ name: "", phone: "", message: "" });
    },
    onError: () => {
      toast.error("Erro ao enviar. Tente novamente.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Por favor, preencha nome e contato.");
      return;
    }
    // Usa email padrão quando o usuário fornece apenas telefone
    const emailValue = form.phone.includes('@') ? form.phone : `contato+${form.phone.replace(/\D/g, '')}@sbfcontabilidade.com.br`;
    sendContact.mutate({
      name: form.name,
      email: emailValue,
      phone: form.phone,
      message: form.message || `Contato rápido de ${form.name} — Telefone: ${form.phone}`,
      subject: "Contato Rápido via Ícone de Telefone",
    });
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating Button */}
      <div className="fixed bottom-24 right-5 z-50 flex flex-col items-end gap-3">
        {/* Popup Form */}
        {isOpen && (
          <div className="w-80 bg-[#0d1b2e] border border-[#ba9863]/30 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#304366] to-[#1a2d45] px-5 py-4 flex items-center justify-between border-b border-[#ba9863]/20">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#ba9863] flex items-center justify-center">
                  <Phone size={16} className="text-[#0d1b2e]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Fale Conosco</p>
                  <p className="text-white/50 text-xs">Resposta em até 1h</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-5">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-[#ba9863]/10 border border-[#ba9863]/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={28} className="text-[#ba9863]" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Mensagem Enviada!</h4>
                  <p className="text-white/50 text-sm mb-4">
                    Entraremos em contato em breve.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setIsOpen(false); }}
                    className="text-[#ba9863] text-sm font-semibold hover:underline"
                  >
                    Fechar
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="text-white/60 text-xs font-medium mb-1.5 block">
                      Seu Nome *
                    </label>
                    <div className="relative">
                      <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Como podemos te chamar?"
                        className="w-full pl-9 pr-3 py-2.5 bg-white/[0.06] border border-white/10 rounded-lg text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#ba9863]/50 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white/60 text-xs font-medium mb-1.5 block">
                      Telefone / WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(21) 9 0000-0000"
                        className="w-full pl-9 pr-3 py-2.5 bg-white/[0.06] border border-white/10 rounded-lg text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#ba9863]/50 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white/60 text-xs font-medium mb-1.5 block">
                      Mensagem (opcional)
                    </label>
                    <div className="relative">
                      <MessageSquare size={14} className="absolute left-3 top-3 text-white/30" />
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Como podemos ajudar?"
                        rows={2}
                        className="w-full pl-9 pr-3 py-2.5 bg-white/[0.06] border border-white/10 rounded-lg text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#ba9863]/50 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={sendContact.isPending}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#ba9863] text-[#0d1b2e] font-bold text-sm hover:bg-[#d4af7a] transition-all duration-300 disabled:opacity-60"
                  >
                    {sendContact.isPending ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Send size={16} />
                    )}
                    {sendContact.isPending ? "Enviando..." : "Enviar Mensagem"}
                  </button>

                  <p className="text-white/30 text-xs text-center">
                    Ou ligue: <a href="tel:+5521988652452" className="text-[#ba9863] hover:underline">(21) 98865-2452</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Phone Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
            isOpen
              ? "bg-white/10 border border-white/20 text-white rotate-12"
              : "bg-[#304366] border-2 border-[#ba9863] text-[#ba9863] hover:scale-110 hover:shadow-[#ba9863]/30"
          }`}
          aria-label="Contato rápido"
        >
          {isOpen ? <X size={22} /> : <Phone size={22} />}
          {/* Pulse ring */}
          {!isOpen && (
            <span className="absolute w-14 h-14 rounded-full border-2 border-[#ba9863]/40 animate-ping" />
          )}
        </button>
      </div>
    </>
  );
}
