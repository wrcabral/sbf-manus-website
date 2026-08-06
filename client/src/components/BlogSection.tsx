import { Link } from "wouter";
import latestPosts from "@/data/latest-posts.json";

export default function BlogSection() {
  const posts = latestPosts.slice(0, 3);

  return (
    <section
      id="blog"
      style={{
        background: "linear-gradient(180deg, #253550 0%, #304366 100%)",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background subtle pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(186,152,99,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(186,152,99,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between"
          style={{ marginBottom: 48, gap: 20 }}
        >
          <div>
            <span className="sbf-badge sbf-badge-gold-dark" style={{ marginBottom: 16, display: "inline-flex" }}>
              <i className="fas fa-newspaper" style={{ fontSize: 10 }}></i>
              Conteúdo Especializado
            </span>
            <h2
              style={{
                color: "white",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                margin: "0 0 8px",
              }}
            >
              Insights & Artigos SBF
            </h2>
            <div className="gold-divider" style={{ margin: "0 0 12px" }} />
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", margin: 0, maxWidth: 480 }}>
              Conteúdo especializado para empresários que querem tomar decisões financeiras mais inteligentes.
            </p>
          </div>
          <Link
            href="/blog"
            className="sbf-btn sbf-btn-outline"
            style={{ flexShrink: 0 }}
          >
            <i className="fas fa-book-open"></i>
            Ver todos os artigos
          </Link>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-3" style={{ gap: 20 }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={post.url}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                transition: "transform 0.25s ease, border-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(186,152,99,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              {/* Cover image */}
              {post.imagePath && (
                <div style={{ aspectRatio: "16/9", overflow: "hidden", background: "#1a2a3a" }}>
                  <img
                    src={post.imagePath}
                    alt={post.title}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              )}

              {/* Article header */}
              <div
                style={{
                  padding: "20px 24px 16px",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  flex: 1,
                }}
              >
                <span style={{ color: "#ba9863", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {post.date}
                </span>

                <h3
                  style={{
                    color: "white",
                    fontWeight: 800,
                    fontSize: "1.0625rem",
                    lineHeight: 1.35,
                    margin: "10px 0 10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {post.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>
                  {post.metaDescription}
                </p>
              </div>

              {/* Footer */}
              <div
                style={{
                  padding: "14px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <span
                  style={{
                    color: "#ba9863",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  Ler artigo completo <i className="fas fa-arrow-right" style={{ fontSize: 10 }}></i>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center" style={{ marginTop: 40 }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9375rem", margin: "0 0 16px" }}>
            Mais de 240 artigos sobre tributos, gestão e empreendedorismo esperando por você.
          </p>
          <Link
            href="/blog"
            className="sbf-btn sbf-btn-gold"
          >
            <i className="fas fa-book-open"></i>
            Explorar o Blog SBF
          </Link>
        </div>
      </div>
    </section>
  );
}
