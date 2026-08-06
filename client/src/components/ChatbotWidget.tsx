import { useState, useRef, useEffect } from "react";
import { trpc } from "@/lib/trpc";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "Qual o melhor regime tributário para minha empresa?",
  "Como funciona a isenção de 13º salário?",
  "Quais serviços a SBF oferece?",
  "Como agendar uma consultoria gratuita?",
];

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Olá! Sou o assistente virtual da **SBF Contabilidade**. Posso te ajudar com dúvidas sobre contabilidade, tributação ou nossos serviços. Como posso ajudar? 😊",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessage = trpc.chat.message.useMutation({
    onSuccess: (data) => {
      const content = typeof data.content === "string" ? data.content : "Desculpe, não consegui processar sua mensagem.";
      setMessages((prev) => [...prev, { role: "assistant", content }]);
    },
    onError: () => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Desculpe, tive um problema. Por favor, entre em contato pelo WhatsApp (21) 98865-2452." },
      ]);
    },
  });

  useEffect(() => {
    if (open) {
      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open, messages]);

  const handleSend = (text?: string) => {
    const msg = text || input.trim();
    if (!msg || sendMessage.isPending) return;
    setInput("");
    const newMessages: Message[] = [...messages, { role: "user", content: msg }];
    setMessages(newMessages);
    sendMessage.mutate({ messages: newMessages });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Simple markdown-like rendering
  const renderContent = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br/>");
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar assistente virtual" : "Abrir assistente virtual SBF"}
        aria-expanded={open}
        style={{
          position: "fixed",
          bottom: 88,
          right: 24,
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #304366 0%, #253550 100%)",
          border: "2px solid rgba(186,152,99,0.5)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          color: "#ba9863",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9990,
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.1)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
        title="Assistente SBF"
      >
        <i className={`fas ${open ? "fa-times" : "fa-robot"}`} style={{ fontSize: 20 }}></i>
      </button>

      {/* Chat window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 152,
            right: 24,
            width: "min(380px, calc(100vw - 48px))",
            height: "min(520px, calc(100vh - 200px))",
            background: "linear-gradient(160deg, #1a2a3a 0%, #253550 100%)",
            border: "1px solid rgba(186,152,99,0.25)",
            borderRadius: 20,
            boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
            zIndex: 9989,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            animation: "slideUp 0.25s ease",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid rgba(186,152,99,0.15)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(186,152,99,0.15)",
                border: "1.5px solid rgba(186,152,99,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <i className="fas fa-robot" style={{ color: "#ba9863", fontSize: 14 }}></i>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ color: "white", fontWeight: 700, fontSize: "0.875rem", margin: 0 }}>Assistente SBF</p>
              <div className="flex items-center" style={{ gap: 5 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80" }} />
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", margin: 0 }}>Online agora</p>
              </div>
            </div>
            <a
              href="https://wa.me/5521988652452"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "rgba(37,211,102,0.12)",
                border: "1px solid rgba(37,211,102,0.2)",
                color: "#25D366",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                flexShrink: 0,
              }}
              title="Falar no WhatsApp"
            >
              <i className="fab fa-whatsapp" style={{ fontSize: 14 }}></i>
            </a>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "10px 14px",
                    borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                    background: msg.role === "user"
                      ? "linear-gradient(135deg, #ba9863 0%, #d4b47a 100%)"
                      : "rgba(255,255,255,0.06)",
                    border: msg.role === "user" ? "none" : "1px solid rgba(255,255,255,0.08)",
                    color: msg.role === "user" ? "#1a2a3a" : "rgba(255,255,255,0.85)",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    fontWeight: msg.role === "user" ? 600 : 400,
                  }}
                  dangerouslySetInnerHTML={{ __html: renderContent(msg.content) }}
                />
              </div>
            ))}

            {sendMessage.isPending && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: "16px 16px 16px 4px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    gap: 4,
                    alignItems: "center",
                  }}
                >
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "rgba(186,152,99,0.6)",
                        animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Suggested questions (only at start) */}
            {messages.length === 1 && (
              <div className="flex flex-col" style={{ gap: 6, marginTop: 4 }}>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", margin: 0 }}>Perguntas frequentes:</p>
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    style={{
                      background: "rgba(186,152,99,0.06)",
                      border: "1px solid rgba(186,152,99,0.2)",
                      borderRadius: 8,
                      padding: "8px 12px",
                      color: "rgba(255,255,255,0.65)",
                      fontSize: "0.8125rem",
                      textAlign: "left",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      lineHeight: 1.4,
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: "12px 16px",
              borderTop: "1px solid rgba(186,152,99,0.1)",
              display: "flex",
              gap: 8,
              flexShrink: 0,
            }}
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Digite sua dúvida..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={sendMessage.isPending}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10,
                padding: "10px 14px",
                color: "white",
                fontSize: "0.875rem",
                outline: "none",
                minWidth: 0,
              }}
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || sendMessage.isPending}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: input.trim() ? "linear-gradient(135deg, #ba9863 0%, #d4b47a 100%)" : "rgba(255,255,255,0.06)",
                border: "none",
                color: input.trim() ? "#1a2a3a" : "rgba(255,255,255,0.3)",
                cursor: input.trim() ? "pointer" : "not-allowed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.2s ease",
              }}
            >
              <i className="fas fa-paper-plane" style={{ fontSize: 14 }}></i>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }
      `}</style>
    </>
  );
}
