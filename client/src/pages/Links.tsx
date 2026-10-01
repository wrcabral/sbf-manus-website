import { useEffect } from "react";

const WHATSAPP = "5521988652452";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Olá! Vim pelo Instagram e quero conversar com o Bruno, da SBF Prime Contabilidade."
)}`;

type LinkItem = {
  emoji: string;
  title: string;
  subtitle: string;
  href: string;
  primary?: boolean;
  external?: boolean;
};

const LINKS: LinkItem[] = [
  {
    emoji: "🧮",
    title: "Simulador de CBS",
    subtitle: "Veja em 1 minuto como a Reforma Tributária pesa na sua empresa",
    href: "/simulador-cbs",
    primary: true,
  },
  {
    emoji: "⚖️",
    title: "Simples normal × híbrido 2027",
    subtitle: "Compare os dois regimes com os números do seu negócio",
    href: "/simulador-hibrido",
    primary: true,
  },
  {
    emoji: "📰",
    title: "Reforma Tributária no blog",
    subtitle: "IBS, CBS, split payment e nota fiscal, explicados sem juridiquês",
    href: "/blog",
  },
  {
    emoji: "💬",
    title: "Fale com o Bruno no WhatsApp",
    subtitle: "Converse direto com a SBF Prime Contabilidade",
    href: WHATSAPP_LINK,
    external: true,
  },
  {
    emoji: "🌐",
    title: "Conheça a SBF",
    subtitle: "sbfcontabilidade.com.br",
    href: "/",
  },
];

const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bruno-rodrigues-fonseca-54556027/" },
  { label: "YouTube", href: "https://www.youtube.com/@sbfcontabilidade" },
  { label: "Instagram", href: "https://www.instagram.com/sbfprimecontabilidade" },
];

const NAVY = "#0d1b2e";
const GOLD = "#ba9863";
const GOLD_LIGHT = "#d4b47a";

export default function Links() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = "Links | SBF Prime Contabilidade";
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'DM Sans', 'Montserrat', sans-serif",
        background: NAVY,
        color: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <main style={{ width: "100%", maxWidth: 480, padding: "44px 20px 56px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 26 }}>
          <img
            src="/images/bruno-fonseca-retrato.jpg"
            alt="Bruno Fonseca"
            width={96}
            height={96}
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center top",
              border: `2px solid ${GOLD}`,
              marginBottom: 14,
            }}
          />
          <h1
            style={{
              fontFamily: "'Montserrat', 'DM Sans', sans-serif",
              fontSize: 22,
              fontWeight: 800,
              margin: "0 0 4px",
              textAlign: "center",
            }}
          >
            Bruno Fonseca
          </h1>
          <p style={{ color: GOLD_LIGHT, fontSize: 13, fontWeight: 600, margin: "0 0 14px", textAlign: "center" }}>
            Sócio-diretor · SBF Prime Contabilidade
          </p>
          <img
            src="/images/sbf-prime-logo.webp"
            alt="SBF Prime Contabilidade"
            style={{ height: 34, width: "auto", marginBottom: 16 }}
          />
          <p
            style={{
              color: "rgba(255,255,255,0.68)",
              fontSize: 15,
              lineHeight: 1.55,
              textAlign: "center",
              margin: 0,
              maxWidth: 340,
            }}
          >
            Contabilidade consultiva, Lucro Real e Reforma Tributária. Decisões para proteger a margem da sua
            empresa.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.16)",
                borderRadius: 999,
                padding: "6px 14px",
              }}
            >
              {s.label}
            </a>
          ))}
        </div>

        <div style={{ display: "grid", gap: 14 }}>
          {LINKS.map((l) => (
            <a
              key={l.title}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "16px 18px",
                borderRadius: 16,
                textDecoration: "none",
                color: "white",
                background: l.primary
                  ? "linear-gradient(135deg, rgba(186,152,99,0.26), rgba(186,152,99,0.08))"
                  : "rgba(255,255,255,0.05)",
                border: l.primary ? `1px solid rgba(186,152,99,0.55)` : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span style={{ fontSize: 26, lineHeight: 1, flexShrink: 0 }}>{l.emoji}</span>
              <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 16, fontWeight: 800 }}>{l.title}</span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.58)" }}>{l.subtitle}</span>
              </span>
            </a>
          ))}
        </div>

        <p
          style={{
            color: "rgba(255,255,255,0.32)",
            fontSize: 12,
            textAlign: "center",
            margin: "36px 0 0",
          }}
        >
          SBF Prime Contabilidade · Barra da Tijuca, RJ
        </p>
      </main>
    </div>
  );
}
