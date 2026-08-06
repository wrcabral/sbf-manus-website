import { useState, useEffect, useRef } from "react";

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(145deg, #060d18 0%, #0a1628 35%, #0d1b2e 60%, #152236 100%)" }}
    >
      {/* Background texture + particles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated floating particles */}
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: i % 3 === 0 ? 4 : i % 3 === 1 ? 2 : 3,
              height: i % 3 === 0 ? 4 : i % 3 === 1 ? 2 : 3,
              borderRadius: "50%",
              background: i % 4 === 0 ? "rgba(186,152,99,0.7)" : "rgba(186,152,99,0.35)",
              left: `${(i * 17 + 5) % 95}%`,
              top: `${(i * 23 + 10) % 85}%`,
              animation: `float-particle ${4 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${(i * 0.4) % 3}s`,
              boxShadow: i % 4 === 0 ? "0 0 8px rgba(186,152,99,0.6)" : "none",
            }}
          />
        ))}
        <style>{`
          @keyframes float-particle {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
            25% { transform: translateY(-18px) translateX(8px); opacity: 0.9; }
            50% { transform: translateY(-8px) translateX(-6px); opacity: 0.6; }
            75% { transform: translateY(-22px) translateX(4px); opacity: 0.8; }
          }
        `}</style>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(186,152,99,0.12) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Diagonal golden accent */}
        <div
          className="absolute"
          style={{
            top: 0,
            right: 0,
            width: "55%",
            height: "100%",
            background: "linear-gradient(145deg, transparent 0%, rgba(186,152,99,0.04) 50%, rgba(186,152,99,0.08) 100%)",
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        />
        {/* Glow top-right */}
        <div
          className="absolute"
          style={{
            top: "-15%",
            right: "-10%",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(186,152,99,0.1) 0%, transparent 60%)",
          }}
        />
        {/* Glow bottom-left */}
        <div
          className="absolute"
          style={{
            bottom: "-20%",
            left: "-10%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(48,67,102,0.4) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="container relative z-10" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Content */}
          <div className="flex flex-col" style={{ gap: 32 }}>

            {/* Badge */}
            <div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 16px",
                  borderRadius: 100,
                  background: "rgba(186,152,99,0.12)",
                  border: "1px solid rgba(186,152,99,0.3)",
                  color: "#ba9863",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                <i className="fas fa-star" style={{ fontSize: 9 }}></i>
                Contabilidade Consultiva Premium · Rio de Janeiro
              </span>
            </div>

            {/* Headline — dual typography: serif accent + sans bold */}
            <div style={{ lineHeight: 1.05 }}>
              <p
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                  color: "#ba9863",
                  margin: "0 0 6px 0",
                  letterSpacing: "0.02em",
                }}
              >
                Sua empresa merece
              </p>
              <h1
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  color: "white",
                  margin: 0,
                }}
              >
                Mais que um
                <br />
                Contador.
              </h1>
              <h2
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  margin: "4px 0 0 0",
                  background: "linear-gradient(135deg, #ba9863 0%, #d4b47a 50%, #ba9863 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Um Parceiro.
              </h2>
            </div>

            {/* Subheadline */}
            <p
              style={{
                fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.75,
                maxWidth: 500,
                margin: 0,
              }}
            >
              A SBF Contabilidade oferece soluções contábeis personalizadas para empresas que buscam crescimento sólido, conformidade fiscal e economia tributária real.
            </p>

            {/* Key differentials */}
            <div className="flex flex-col" style={{ gap: 10 }}>
              {[
                { icon: "fa-gift", text: "Isenção de 13º Salário — Diferencial exclusivo SBF" },
                { icon: "fa-user-tie", text: "15+ anos de experiência em grandes corporações" },
                { icon: "fa-chart-line", text: "Especialistas em Lucro Real e Planejamento Tributário" },
              ].map((item) => (
                <div key={item.text} className="flex items-center" style={{ gap: 12 }}>
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: "rgba(186,152,99,0.12)",
                      border: "1px solid rgba(186,152,99,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i className={`fas ${item.icon}`} style={{ color: "#ba9863", fontSize: 11 }}></i>
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem", fontWeight: 500 }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row" style={{ gap: 12 }}>
              <a
                href="https://wa.me/5521988652452?text=Olá!%20Quero%20abrir%20minha%20empresa%20com%20a%20SBF%20Contabilidade."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "14px 24px",
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #ba9863 0%, #d4b47a 100%)",
                  color: "#0d1b2e",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                  boxShadow: "0 8px 30px rgba(186,152,99,0.45), 0 0 0 1px rgba(186,152,99,0.2)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(186,152,99,0.5)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(186,152,99,0.35)"; }}
              >
                <i className="fas fa-building"></i>
                Abrir Empresa
              </a>
              <button
                onClick={() => handleScroll("#contato")}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "14px 24px",
                  borderRadius: 10,
                  background: "transparent",
                  border: "1.5px solid rgba(186,152,99,0.4)",
                  color: "rgba(255,255,255,0.85)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  cursor: "pointer",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#ba9863"; (e.currentTarget as HTMLElement).style.background = "rgba(186,152,99,0.08)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(186,152,99,0.4)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                <i className="fas fa-exchange-alt"></i>
                Trocar de Contador
              </button>
            </div>

            {/* Stats bar — real data */}
            <div
              className="flex"
              style={{
                paddingTop: 24,
                borderTop: "1px solid rgba(186,152,99,0.15)",
              }}
            >
              {[
                { num: 15, suffix: "+", label: "Anos de Experiência" },
                { num: 150, suffix: "+", label: "Empresas Atendidas" },
                { num: 98, suffix: "%", label: "Satisfação NPS" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center"
                  style={{
                    flex: 1,
                    borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                      background: "linear-gradient(135deg, #ba9863 0%, #d4b47a 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <AnimatedCounter target={stat.num} suffix={stat.suffix} />
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.7rem", fontWeight: 600, marginTop: 2, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Photo with diagonal frame */}
          <div className="relative flex justify-center lg:justify-end" style={{ paddingTop: 20 }}>

            {/* Diagonal accent shape behind photo */}
            <div
              className="absolute"
              style={{
                top: "5%",
                right: "-5%",
                width: "85%",
                height: "90%",
                borderRadius: 32,
                background: "linear-gradient(145deg, rgba(186,152,99,0.08) 0%, rgba(186,152,99,0.02) 100%)",
                border: "1px solid rgba(186,152,99,0.12)",
                transform: "rotate(3deg)",
                zIndex: 0,
              }}
            />

            <div className="relative" style={{ zIndex: 1 }}>
              {/* Glow behind photo */}
              <div
                style={{
                  position: "absolute",
                  inset: -30,
                  borderRadius: 32,
                  background: "radial-gradient(ellipse, rgba(186,152,99,0.18) 0%, transparent 65%)",
                  filter: "blur(24px)",
                  zIndex: 0,
                }}
              />

              {/* Main photo */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "clamp(280px, 32vw, 380px)",
                  height: "clamp(360px, 44vw, 500px)",
                  borderRadius: 24,
                  overflow: "hidden",
                  border: "2px solid rgba(186,152,99,0.5)",
                  boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(186,152,99,0.1)",
                }}
              >
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663261678160/LzLNKjUrGJAbzqVg.jpg"
                  alt="Bruno Fonseca - Sócio Diretor SBF Contabilidade"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                />
                {/* Name overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "32px 20px 18px",
                    background: "linear-gradient(to top, rgba(8,15,26,0.97) 0%, transparent 100%)",
                  }}
                >
                  <p style={{ color: "white", fontWeight: 700, fontSize: "1rem", margin: 0 }}>Bruno Fonseca</p>
                  <p style={{ color: "#ba9863", fontSize: "0.8125rem", margin: "3px 0 0 0" }}>Sócio Diretor · Especialista Lucro Real</p>
                </div>
              </div>

              {/* Floating badge: Band News */}
              <a
                href="https://www.youtube.com/watch?v=SsM3Yqu2ePg"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "absolute",
                  top: -14,
                  right: -20,
                  zIndex: 2,
                  padding: "8px 16px",
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #ba9863 0%, #d4b47a 100%)",
                  color: "#0d1b2e",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  boxShadow: "0 6px 20px rgba(186,152,99,0.5)",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 26px rgba(186,152,99,0.65)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(186,152,99,0.5)";
                }}
              >
                <i className="fas fa-tv" style={{ marginRight: 6 }}></i>
                Band News TV
              </a>

              {/* Floating card: Isenção 13º */}
              <div
                style={{
                  position: "absolute",
                  bottom: -24,
                  left: -28,
                  zIndex: 2,
                  padding: "14px 18px",
                  borderRadius: 14,
                  background: "rgba(13,27,46,0.92)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(186,152,99,0.3)",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
                }}
              >
                <div className="flex items-center" style={{ gap: 12 }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background: "rgba(186,152,99,0.15)",
                      border: "1.5px solid rgba(186,152,99,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i className="fas fa-gift" style={{ color: "#ba9863", fontSize: 16 }}></i>
                  </div>
                  <div>
                    <p style={{ color: "#ba9863", fontWeight: 800, fontSize: "0.8125rem", margin: 0, letterSpacing: "0.02em" }}>Diferencial Exclusivo</p>
                    <p style={{ color: "white", fontWeight: 600, fontSize: "0.75rem", margin: "2px 0 0 0" }}>Isenção de 13º Salário</p>
                  </div>
                </div>
              </div>

              {/* Floating card: Deloitte */}
              <div
                style={{
                  position: "absolute",
                  top: "30%",
                  left: -36,
                  zIndex: 2,
                  padding: "10px 16px",
                  borderRadius: 12,
                  background: "rgba(13,27,46,0.88)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                }}
              >
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.65rem", fontWeight: 600, margin: "0 0 4px 0", letterSpacing: "0.06em", textTransform: "uppercase" }}>Experiência em</p>
                <div className="flex" style={{ gap: 6 }}>
                  {["Deloitte", "Enel", "Brookfield"].map(c => (
                    <span key={c} style={{ padding: "2px 8px", borderRadius: 6, background: "rgba(186,152,99,0.12)", border: "1px solid rgba(186,152,99,0.2)", color: "#ba9863", fontSize: "0.6875rem", fontWeight: 700 }}>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: 80, overflow: "hidden" }}
      >
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
          <path d="M0,80 L1440,20 L1440,80 Z" fill="#0a0f1a" />
        </svg>
      </div>
    </section>
  );
}
