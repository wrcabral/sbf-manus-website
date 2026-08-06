export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0d1a26 0%, #0a1520 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top gold line */}
      <div style={{ height: 3, background: "linear-gradient(90deg, transparent 0%, #ba9863 30%, #d4b47a 50%, #ba9863 70%, transparent 100%)" }} />

      {/* Background subtle dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(186,152,99,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* CTA strip */}
        <div
          className="flex flex-col md:flex-row items-center justify-between"
          style={{
            padding: "36px 40px",
            margin: "0 0 0",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            gap: 20,
          }}
        >
          <div>
            <h3
              style={{
                color: "white",
                fontWeight: 900,
                fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                letterSpacing: "-0.02em",
                margin: "0 0 6px",
              }}
            >
              Pronto para transformar sua contabilidade?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.9375rem", margin: 0 }}>
              Agende uma consultoria gratuita e descubra como economizar nos impostos.
            </p>
          </div>
          <a
            href="https://wa.me/5521988652452?text=Olá!%20Gostaria%20de%20agendar%20uma%20consultoria%20gratuita%20com%20a%20SBF%20Contabilidade."
            target="_blank"
            rel="noopener noreferrer"
            className="sbf-btn sbf-btn-gold"
            style={{ flexShrink: 0 }}
          >
            <i className="fab fa-whatsapp"></i>
            Consultoria Gratuita
          </a>
        </div>

        {/* Main footer grid */}
        <div className="grid md:grid-cols-4" style={{ gap: 40, padding: "56px 0 40px" }}>

          {/* Brand */}
          <div className="md:col-span-1 flex flex-col" style={{ gap: 20 }}>
            <img
              src="/images/sbf-prime-logo.webp"
              alt="SBF Contabilidade"
              style={{ height: 44, width: "auto", objectFit: "contain" }}
            />
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
              Contabilidade consultiva especializada para empresas que buscam crescimento sólido e conformidade fiscal.
            </p>
            {/* Social */}
            <div className="flex" style={{ gap: 10 }}>
              <a
                href="https://www.youtube.com/@sbfcontabilidade"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "rgba(255,0,0,0.12)",
                  border: "1px solid rgba(255,0,0,0.2)",
                  color: "#ff5555",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
              >
                <i className="fab fa-youtube" style={{ fontSize: 14 }}></i>
              </a>
              <a
                href="https://www.instagram.com/sbfprimecontabilidade/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "rgba(225,48,108,0.12)",
                  border: "1px solid rgba(225,48,108,0.2)",
                  color: "#e1306c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
              >
                <i className="fab fa-instagram" style={{ fontSize: 14 }}></i>
              </a>
              <a
                href="https://wa.me/5521988652452"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "rgba(37,211,102,0.12)",
                  border: "1px solid rgba(37,211,102,0.2)",
                  color: "#25D366",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
              >
                <i className="fab fa-whatsapp" style={{ fontSize: 14 }}></i>
              </a>
              <a
                href="https://conectasbf.ensinio.com/browse"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "rgba(186,152,99,0.12)",
                  border: "1px solid rgba(186,152,99,0.2)",
                  color: "#ba9863",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
              >
                <i className="fas fa-graduation-cap" style={{ fontSize: 14 }}></i>
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div className="flex flex-col" style={{ gap: 16 }}>
            <h4
              style={{
                color: "#ba9863",
                fontWeight: 700,
                fontSize: "0.6875rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Navegação
            </h4>
            <div className="flex flex-col" style={{ gap: 10 }}>
              {[
                { label: "Quem Somos", href: "#quem-somos" },
                { label: "Serviços", href: "#servicos" },
                { label: "Segmentos", href: "#segmentos" },
                { label: "Podcast SBF", href: "#podcast" },
                { label: "Conecta SBF", href: "#conecta" },
                { label: "Planos", href: "#planos" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  style={{
                    color: "rgba(255,255,255,0.72)",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.72)"; }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Serviços */}
          <div className="flex flex-col" style={{ gap: 16 }}>
            <h4
              style={{
                color: "#ba9863",
                fontWeight: 700,
                fontSize: "0.6875rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Serviços
            </h4>
            <div className="flex flex-col" style={{ gap: 10 }}>
              {[
                "Contabilidade Consultiva",
                "Planejamento Tributário",
                "BPO Financeiro",
                "Departamento Pessoal",
                "Legalização Societária",
                "Consultoria de Negócios",
              ].map((s) => (
                <span key={s} style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.875rem" }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div className="flex flex-col" style={{ gap: 16 }}>
            <h4
              style={{
                color: "#ba9863",
                fontWeight: 700,
                fontSize: "0.6875rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Contato
            </h4>
            <div className="flex flex-col" style={{ gap: 14 }}>
              <a
                href="https://wa.me/5521988652452"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                style={{ gap: 10, color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", textDecoration: "none" }}
              >
                <i className="fab fa-whatsapp" style={{ color: "#25D366", fontSize: 16 }}></i>
                (21) 98865-2452
              </a>
              <div className="flex items-start" style={{ gap: 10, color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>
                <i className="fas fa-map-marker-alt" style={{ color: "#ba9863", fontSize: 14, marginTop: 2, flexShrink: 0 }}></i>
                <span>Av. Ayrton Senna 2500, Sala 308 Bloco 2, Edifício Neolink, Rio de Janeiro — RJ</span>
              </div>
              <a
                href="https://conectasbf.ensinio.com/browse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                style={{ gap: 10, color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", textDecoration: "none" }}
              >
                <i className="fas fa-graduation-cap" style={{ color: "#ba9863", fontSize: 14 }}></i>
                Portal Conecta SBF
              </a>
              <a
                href="https://www.youtube.com/@sbfcontabilidade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                style={{ gap: 10, color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", textDecoration: "none" }}
              >
                <i className="fab fa-youtube" style={{ color: "#ff5555", fontSize: 14 }}></i>
                @sbfcontabilidade
              </a>
              <a
                href="https://www.instagram.com/sbfprimecontabilidade/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                style={{ gap: 10, color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", textDecoration: "none" }}
              >
                <i className="fab fa-instagram" style={{ color: "#e1306c", fontSize: 14 }}></i>
                @sbfprimecontabilidade
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "20px 0",
            gap: 12,
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", margin: 0, textAlign: "center" }}>
            © {new Date().getFullYear()} SBF Contabilidade. Todos os direitos reservados.
          </p>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", margin: 0, textAlign: "center" }}>
            CNPJ registrado · CRC — Conselho Regional de Contabilidade
          </p>
        </div>
      </div>
    </footer>
  );
}
