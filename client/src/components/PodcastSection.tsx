export default function PodcastSection() {
  return (
    <section
      id="podcast"
      style={{
        background: "linear-gradient(160deg, #060c14 0%, #0d1b2e 50%, #0a1220 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "100px 0",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(186,152,99,0.06) 0%, transparent 65%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      {/* Sound wave rings */}
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: i * 300,
            height: i * 300,
            borderRadius: "50%",
            border: `1px solid rgba(186,152,99,${0.04 - i * 0.008})`,
            pointerEvents: "none",
          }}
        />
      ))}

      <div className="container relative" style={{ zIndex: 1 }}>

        {/* ── AUTHORITY HERO ── */}
        <div className="text-center" style={{ marginBottom: 72 }}>
          {/* Badge */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 18px",
              borderRadius: 100,
              background: "rgba(186,152,99,0.1)",
              border: "1px solid rgba(186,152,99,0.3)",
              color: "#ba9863",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            <i className="fas fa-microphone" style={{ fontSize: 10 }}></i>
            Canal de Autoridade
          </span>

          {/* Quote */}
          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
              color: "rgba(186,152,99,0.9)",
              margin: "0 0 20px 0",
              letterSpacing: "0.01em",
            }}
          >
            "Um empreendedor bem informado toma melhores decisões"
          </p>

          {/* Main headline */}
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.035em",
              color: "white",
              margin: "0 0 24px 0",
            }}
          >
            A Voz da{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ba9863 0%, #e0c07a 50%, #ba9863 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Contabilidade
            </span>
            <br />
            Consultiva no Brasil
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: "clamp(0.9rem, 1.2vw, 1.0625rem)",
              maxWidth: 620,
              margin: "0 auto 36px",
              lineHeight: 1.75,
            }}
          >
            Bruno Fonseca compartilha semanalmente conhecimento estratégico sobre tributação, gestão empresarial e as mudanças que impactam o seu negócio. Conteúdo direto de quem viveu as maiores corporações do Brasil.
          </p>

          {/* Authority badges */}
          <div className="flex justify-center flex-wrap" style={{ gap: 10 }}>
            {[
              { icon: "fa-tv", text: "Band News TV" },
              { icon: "fa-building", text: "Ex-Deloitte" },
              { icon: "fa-building", text: "Ex-Brookfield" },
              { icon: "fa-graduation-cap", text: "Pós-Graduado FGV" },
              { icon: "fa-university", text: "Moraes Junior" },
              { icon: "fa-award", text: "15+ Anos de Mercado" },
            ].map((badge) => (
              <span
                key={badge.text}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "7px 16px",
                  borderRadius: 100,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
              >
                <i className={`fas ${badge.icon}`} style={{ color: "#ba9863", fontSize: 10 }}></i>
                {badge.text}
              </span>
            ))}
          </div>
        </div>

        {/* ── MAIN LAYOUT: video + right panel ── */}
        <div className="grid lg:grid-cols-5 gap-8 items-start" style={{ marginBottom: 56 }}>

          {/* LEFT: YouTube embed (3 cols) */}
          <div className="lg:col-span-3">
            {/* YouTube header */}
            <div
              style={{
                padding: "14px 20px",
                background: "rgba(13,27,46,0.95)",
                borderRadius: "16px 16px 0 0",
                border: "1px solid rgba(186,152,99,0.2)",
                borderBottom: "none",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "#FF0000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <i className="fab fa-youtube" style={{ color: "white", fontSize: 16 }}></i>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ color: "white", fontWeight: 700, fontSize: "0.875rem", margin: 0 }}>SBF Contabilidade</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", margin: "2px 0 0 0" }}>@sbfcontabilidade.com.br · Canal Oficial</p>
              </div>
              <a
                href="https://www.youtube.com/@sbfcontabilidade.com.br"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "7px 16px",
                  borderRadius: 8,
                  background: "#FF0000",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  flexShrink: 0,
                }}
              >
                <i className="fab fa-youtube"></i>
                Inscrever-se
              </a>
            </div>

            {/* Embed */}
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                borderRadius: "0 0 16px 16px",
                overflow: "hidden",
                border: "1px solid rgba(186,152,99,0.2)",
                borderTop: "none",
                boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed?listType=user_uploads&list=sbfcontabilidade&rel=0&modestbranding=1"
                title="SBF Contabilidade - Canal YouTube"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* RIGHT: Channels + topics (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Channels */}
            {[
              {
                icon: "fab fa-youtube",
                iconColor: "#FF0000",
                name: "YouTube",
                badge: "Canal Principal",
                desc: "Vídeos semanais com análises tributárias e gestão empresarial.",
                link: "https://www.youtube.com/@sbfcontabilidade.com.br",
                cta: "Assistir",
              },
              {
                icon: "fas fa-graduation-cap",
                iconColor: "#ba9863",
                name: "Conecta SBF",
                badge: "Netflix Corporativa",
                desc: "Cursos, mentorias e conteúdos exclusivos para empresários.",
                link: "https://conectasbf.ensinio.com/browse",
                cta: "Acessar Portal",
              },
              {
                icon: "fab fa-instagram",
                iconColor: "#E1306C",
                name: "Instagram",
                badge: "Conteúdo Diário",
                desc: "Dicas rápidas, cases de sucesso e bastidores da SBF.",
                link: "https://instagram.com/consultoriasbfcontabilidade",
                cta: "Seguir",
              },
            ].map((ch) => (
              <a
                key={ch.name}
                href={ch.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "18px 20px",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  textDecoration: "none",
                  transition: "border-color 0.25s, background 0.25s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(186,152,99,0.35)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(186,152,99,0.05)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 11,
                    background: `${ch.iconColor}18`,
                    border: `1px solid ${ch.iconColor}35`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i className={ch.icon} style={{ color: ch.iconColor, fontSize: 18 }}></i>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="flex items-center" style={{ gap: 8, marginBottom: 3 }}>
                    <p style={{ color: "white", fontWeight: 700, fontSize: "0.875rem", margin: 0 }}>{ch.name}</p>
                    <span
                      style={{
                        padding: "2px 8px",
                        borderRadius: 100,
                        background: "rgba(186,152,99,0.1)",
                        border: "1px solid rgba(186,152,99,0.2)",
                        color: "#ba9863",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {ch.badge}
                    </span>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", margin: 0, lineHeight: 1.5 }}>{ch.desc}</p>
                </div>
                <span style={{ color: "#ba9863", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0 }}>
                  {ch.cta} →
                </span>
              </a>
            ))}

            {/* Topics */}
            <div
              style={{
                padding: "20px",
                borderRadius: 14,
                background: "rgba(186,152,99,0.06)",
                border: "1px solid rgba(186,152,99,0.18)",
              }}
            >
              <p style={{ color: "white", fontWeight: 700, fontSize: "0.8125rem", margin: "0 0 14px 0" }}>
                <i className="fas fa-fire" style={{ color: "#ba9863", marginRight: 8 }}></i>
                Temas Abordados
              </p>
              <div className="flex flex-wrap" style={{ gap: 8 }}>
                {[
                  "Reforma Tributária",
                  "Lucro Real",
                  "Planejamento Tributário",
                  "Gestão Financeira",
                  "Abertura de Empresa",
                  "Recuperação Fiscal",
                  "BPO Financeiro",
                  "Isenção 13º",
                ].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "5px 12px",
                      borderRadius: 100,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      color: "rgba(255,255,255,0.65)",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div
          style={{
            padding: "32px 40px",
            borderRadius: 20,
            background: "linear-gradient(135deg, rgba(186,152,99,0.12) 0%, rgba(186,152,99,0.06) 100%)",
            border: "1px solid rgba(186,152,99,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <p style={{ color: "white", fontWeight: 800, fontSize: "1.125rem", margin: "0 0 6px 0" }}>
              Quer aprender mais sobre contabilidade estratégica?
            </p>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.875rem", margin: 0 }}>
              Inscreva-se no canal e receba conteúdo exclusivo toda semana.
            </p>
          </div>
          <div className="flex" style={{ gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://www.youtube.com/@sbfcontabilidade.com.br"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "13px 28px",
                borderRadius: 10,
                background: "#FF0000",
                color: "white",
                fontWeight: 700,
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              <i className="fab fa-youtube"></i>
              Ver Canal no YouTube
            </a>
            <a
              href="https://conectasbf.ensinio.com/browse"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "13px 28px",
                borderRadius: 10,
                background: "linear-gradient(135deg, #ba9863 0%, #d4b47a 100%)",
                color: "#0d1b2e",
                fontWeight: 700,
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              <i className="fas fa-graduation-cap"></i>
              Conecta SBF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
