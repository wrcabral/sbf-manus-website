import { useEffect, useState } from "react";
import { Link, useRoute } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

type PostSummary = {
  slug: string;
  year: string;
  month: string;
  day: string;
  title: string;
  metaDescription: string;
  imagePath: string | null;
  date: string;
  url: string;
};

const PAGE_SIZE = 12;

export default function Blog() {
  const [, params] = useRoute("/blog/page/:page");
  const page = params?.page ? Math.max(1, parseInt(params.page, 10) || 1) : 1;

  const [posts, setPosts] = useState<PostSummary[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/data/blog-index.json")
      .then((r) => r.json())
      .then((data: PostSummary[]) => {
        if (!cancelled) setPosts(data);
      })
      .catch(() => {
        if (!cancelled) setPosts([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  const totalPages = posts ? Math.ceil(posts.length / PAGE_SIZE) : 1;
  const slice = posts ? posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE) : [];

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', 'Montserrat', sans-serif", background: "#060d18" }}>
      <Navbar />

      <section style={{ paddingTop: 150, paddingBottom: 40 }}>
        <div className="container">
          <span className="sbf-badge sbf-badge-gold-dark" style={{ marginBottom: 16, display: "inline-flex" }}>
            <i className="fas fa-newspaper" style={{ fontSize: 10 }}></i>
            Blog
          </span>
          <h1 style={{ color: "white", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 12px", fontSize: "clamp(30px,4vw,46px)" }}>
            Conteúdo para quem empreende de verdade
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.0625rem", margin: 0, maxWidth: 560 }}>
            Tributos, gestão financeira e empreendedorismo, explicados sem economês.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          {posts === null ? (
            <div style={{ color: "rgba(255,255,255,0.4)", padding: "60px 0", textAlign: "center" }}>
              <i className="fas fa-circle-notch fa-spin" style={{ fontSize: 24 }}></i>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-3" style={{ gap: 24, marginBottom: 48 }}>
                {slice.map((post) => (
                  <Link
                    key={post.slug}
                    href={post.url}
                    style={{
                      display: "block",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 16,
                      overflow: "hidden",
                      textDecoration: "none",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(186,152,99,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    }}
                  >
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
                    <div style={{ padding: "18px 20px" }}>
                      <span style={{ color: "#ba9863", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        {post.date}
                      </span>
                      <h3 style={{ color: "white", fontWeight: 700, fontSize: "1rem", lineHeight: 1.4, margin: "8px 0 0" }}>
                        {post.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center" style={{ gap: 12, flexWrap: "wrap" }}>
                {page > 1 && (
                  <Link
                    href={page - 1 === 1 ? "/blog" : `/blog/page/${page - 1}`}
                    className="sbf-btn sbf-btn-outline"
                  >
                    ← Anteriores
                  </Link>
                )}
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", padding: "0 8px" }}>
                  Página {page} de {totalPages}
                </span>
                {page < totalPages && (
                  <Link href={`/blog/page/${page + 1}`} className="sbf-btn sbf-btn-outline">
                    Próximos →
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
