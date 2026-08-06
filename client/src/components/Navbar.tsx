import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";

const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Abertura & Transição", href: "#abertura-transicao" },
  { label: "Serviços", href: "#servicos" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Podcast", href: "#podcast" },
  { label: "Blog", href: "/blog" },
  { label: "Conecta SBF", href: "#conecta" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

const PRODUTOS_LINKS = [
  {
    label: "Método Real SBF",
    href: "/metodo-real",
    icon: "fa-search-dollar",
    desc: "Migração segura para Lucro Real",
    badge: "Novo",
  },
  {
    label: "Rota Tributária SBF",
    href: "/rota-tributaria",
    icon: "fa-route",
    desc: "Transição para o IVA Dual 2026-2033",
    badge: "Novo",
  },
];

export default function Navbar() {
  const [location, navigate] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [produtosOpen, setProdutosOpen] = useState(false);
  const produtosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Route-based pages (e.g. /blog) aren't tracked by scroll position —
    // highlight them directly based on the current path.
    if (location.startsWith("/blog")) {
      setActiveSection("/blog");
    } else if (location === "/") {
      setActiveSection("#hero");
    } else {
      setActiveSection("");
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      if (location !== "/") return; // scroll-spy only makes sense on the homepage

      // Track active section
      const sections = NAV_LINKS.map(l => l.href.replace("#", "")).filter(id => !id.startsWith("/"));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(`#${sections[i]}`);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (produtosRef.current && !produtosRef.current.contains(e.target as Node)) {
        setProdutosOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);

    // Route-based nav items (e.g. "/blog") — always a client-side SPA
    // navigation, never a section scroll.
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }

    // If we're not on the homepage, these section ids don't exist on the
    // current page — navigate home first, then scroll once it mounts.
    if (location !== "/") {
      navigate(`/${href}`);
      return;
    }

    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled
            ? "rgba(13, 27, 46, 0.97)"
            : "rgba(26, 42, 58, 0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: scrolled
            ? "0 1px 0 rgba(186,152,99,0.2), 0 4px 24px rgba(0,0,0,0.35)"
            : "0 1px 0 rgba(255,255,255,0.06)",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between" style={{ height: 72 }}>

            {/* Logo */}
              <a
                href="#hero"
                onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
                className="flex items-center gap-3 flex-shrink-0"
                aria-label="SBF Contabilidade - Ir para o início"
                style={{ textDecoration: "none" }}
              >
              <img
                src="/images/sbf-prime-logo.webp"
                alt="SBF Prime Contabilidade"
                style={{ height: 52, width: "auto", objectFit: "contain", filter: "drop-shadow(0 2px 8px rgba(201,169,97,0.3))" }}
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center" style={{ gap: 2 }}>
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    style={{
                      padding: "8px 12px",
                      fontSize: "0.8125rem",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#d4b47a" : "rgba(255,255,255,0.75)",
                      textDecoration: "none",
                      borderRadius: 8,
                      position: "relative",
                      transition: "color 0.2s ease, background 0.2s ease",
                      background: isActive ? "rgba(186,152,99,0.1)" : "transparent",
                      letterSpacing: "0.01em",
                      whiteSpace: "nowrap",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.color = "white";
                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)";
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                      }
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: 4,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 20,
                          height: 2,
                          background: "linear-gradient(90deg, #ba9863, #d4b47a)",
                          borderRadius: 2,
                        }}
                      />
                    )}
                  </a>
                );
              })}

              {/* Produtos Dropdown */}
              <div ref={produtosRef} style={{ position: "relative" }}>
                <button
                  onClick={() => setProdutosOpen(!produtosOpen)}
                  aria-expanded={produtosOpen}
                  aria-haspopup="menu"
                  style={{
                    padding: "8px 12px",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: produtosOpen ? "#d4b47a" : "rgba(255,255,255,0.75)",
                    background: produtosOpen ? "rgba(186,152,99,0.1)" : "transparent",
                    border: "none",
                    borderRadius: 8,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    transition: "color 0.2s ease, background 0.2s ease",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => {
                    if (!produtosOpen) {
                      (e.currentTarget as HTMLElement).style.color = "white";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!produtosOpen) {
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)";
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#C9A961",
                      marginRight: 2,
                    }}
                  />
                  Produtos
                  <i
                    className={`fas fa-chevron-down`}
                    style={{
                      fontSize: "0.65rem",
                      transition: "transform 0.2s ease",
                      transform: produtosOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>

                {/* Dropdown */}
                {produtosOpen && (
                  <div
                    role="menu"
                    aria-label="Produtos Estratégicos"
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      right: 0,
                      width: 320,
                      background: "rgba(13, 27, 46, 0.98)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(201,169,97,0.2)",
                      borderRadius: 16,
                      padding: 8,
                      boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,169,97,0.1)",
                      zIndex: 100,
                      animation: "scaleIn 200ms ease-out",
                      transformOrigin: "top right",
                    }}
                  >
                    <div
                      style={{
                        padding: "8px 12px 12px",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        marginBottom: 8,
                      }}
                    >
                      <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(201,169,97,0.7)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        Produtos Estratégicos
                      </p>
                    </div>
                    {PRODUTOS_LINKS.map((produto) => (
                      <a
                        key={produto.href}
                        href={produto.href}
                        onClick={(e) => { e.preventDefault(); setProdutosOpen(false); navigate(produto.href); }}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 12,
                          padding: "12px 12px",
                          borderRadius: 10,
                          textDecoration: "none",
                          transition: "background 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(201,169,97,0.08)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "transparent";
                        }}
                      >
                        <div
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: 8,
                            background: "rgba(201,169,97,0.12)",
                            border: "1px solid rgba(201,169,97,0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <i className={`fas ${produto.icon}`} style={{ color: "#C9A961", fontSize: "0.875rem" }} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                            <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#FFFFFF" }}>{produto.label}</span>
                            <span
                              style={{
                                fontSize: "0.6rem",
                                fontWeight: 800,
                                color: "#0B132B",
                                background: "#C9A961",
                                borderRadius: 4,
                                padding: "1px 6px",
                                textTransform: "uppercase",
                                letterSpacing: "0.05em",
                              }}
                            >
                              {produto.badge}
                            </span>
                          </div>
                          <p style={{ fontSize: "0.75rem", color: "rgba(224,224,224,0.6)", margin: 0 }}>{produto.desc}</p>
                        </div>
                        <i className="fas fa-arrow-right" style={{ color: "rgba(201,169,97,0.4)", fontSize: "0.75rem", marginTop: 10 }} />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <a
                href="https://wa.me/5521988652452?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20SBF%20Contabilidade."
                target="_blank"
                rel="noopener noreferrer"
                className="animate-pulse-gold"
                style={{
                  marginLeft: 12,
                  padding: "10px 20px",
                  borderRadius: 10,
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #ba9863 0%, #d4b47a 100%)",
                  color: "#1a2a3a",
                  textDecoration: "none",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: "0 4px 16px rgba(186,152,99,0.35)",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(186,152,99,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(186,152,99,0.35)";
                }}
              >
                <i className="fas fa-calendar-check" style={{ marginRight: 6 }}></i>
                Consultoria Gratuita
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: menuOpen ? "rgba(186,152,99,0.15)" : "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "white",
                fontSize: 18,
                transition: "background 0.2s ease",
              }}
            >
              <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          style={{
            maxHeight: menuOpen ? 800 : 0,
            overflow: "hidden",
            transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
            borderTop: menuOpen ? "1px solid rgba(186,152,99,0.2)" : "none",
            background: "rgba(13, 27, 46, 0.99)",
          }}
        >
          <div className="container" style={{ paddingTop: 16, paddingBottom: 20 }}>
            <div className="flex flex-col" style={{ gap: 4 }}>
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    style={{
                      padding: "12px 16px",
                      fontSize: "0.9375rem",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#d4b47a" : "rgba(255,255,255,0.8)",
                      textDecoration: "none",
                      borderRadius: 10,
                      background: isActive ? "rgba(186,152,99,0.1)" : "transparent",
                      borderLeft: isActive ? "3px solid #ba9863" : "3px solid transparent",
                      transition: "all 0.15s ease",
                    }}
                  >
                    {link.label}
                  </a>
                );
              })}

              {/* Mobile Produtos section */}
              <div style={{ borderTop: "1px solid rgba(201,169,97,0.15)", paddingTop: 12, marginTop: 4 }}>
                <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(201,169,97,0.6)", textTransform: "uppercase", letterSpacing: "0.1em", padding: "0 16px 8px" }}>
                  Produtos Estratégicos
                </p>
                {PRODUTOS_LINKS.map((produto) => (
                  <a
                    key={produto.href}
                    href={produto.href}
                    onClick={(e) => { e.preventDefault(); setMenuOpen(false); navigate(produto.href); }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "12px 16px",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "#C9A961",
                      textDecoration: "none",
                      borderRadius: 10,
                      borderLeft: "3px solid rgba(201,169,97,0.4)",
                    }}
                  >
                    <i className={`fas ${produto.icon}`} style={{ fontSize: "0.875rem" }} />
                    {produto.label}
                    <span
                      style={{
                        fontSize: "0.6rem",
                        fontWeight: 800,
                        color: "#0B132B",
                        background: "#C9A961",
                        borderRadius: 4,
                        padding: "1px 6px",
                        textTransform: "uppercase",
                      }}
                    >
                      Novo
                    </span>
                  </a>
                ))}
              </div>

              <a
                href="https://wa.me/5521988652452?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20SBF%20Contabilidade."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: 12,
                  padding: "14px 16px",
                  borderRadius: 12,
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  textAlign: "center",
                  background: "linear-gradient(135deg, #ba9863 0%, #d4b47a 100%)",
                  color: "#1a2a3a",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <i className="fas fa-calendar-check" style={{ marginRight: 8 }}></i>
                Consultoria Gratuita
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40"
          style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
