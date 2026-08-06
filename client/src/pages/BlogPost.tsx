import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import NotFound from "@/pages/NotFound";

type Post = {
  slug: string;
  year: string;
  month: string;
  day: string;
  title: string;
  metaDescription: string;
  contentHtml: string;
  imagePath: string | null;
  date: string;
};

export default function BlogPost() {
  const [, params] = useRoute("/:year/:month/:day/:slug");
  const [post, setPost] = useState<Post | null | undefined>(undefined); // undefined = loading, null = not found

  useEffect(() => {
    if (!params) return;
    setPost(undefined);
    const { year, month, day, slug } = params;
    let cancelled = false;
    fetch(`/data/posts/${year}-${month}-${day}-${slug}.json`)
      .then((r) => {
        if (!r.ok) throw new Error("not found");
        return r.json();
      })
      .then((data: Post) => {
        if (!cancelled) setPost(data);
      })
      .catch(() => {
        if (!cancelled) setPost(null);
      });
    return () => {
      cancelled = true;
    };
  }, [params?.year, params?.month, params?.day, params?.slug]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (post) {
      document.title = `${post.title} — SBF Prime Contabilidade`;
    }
  }, [post]);

  if (post === null) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', 'Montserrat', sans-serif", background: "#060d18" }}>
      <Navbar />

      {post === undefined ? (
        <div style={{ paddingTop: 200, textAlign: "center", color: "rgba(255,255,255,0.4)" }}>
          <i className="fas fa-circle-notch fa-spin" style={{ fontSize: 24 }}></i>
        </div>
      ) : (
        <>
          <section style={{ paddingTop: 150, paddingBottom: 32 }}>
            <div className="container" style={{ maxWidth: 820 }}>
              <Link
                href="/blog"
                style={{ color: "#ba9863", fontSize: "0.8125rem", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}
              >
                <i className="fas fa-arrow-left" style={{ fontSize: 11 }}></i> Voltar ao Blog
              </Link>
              <div>
                <span className="sbf-badge sbf-badge-gold-dark" style={{ marginBottom: 16, display: "inline-flex" }}>
                  Blog SBF Prime
                </span>
              </div>
              <h1 style={{ color: "white", fontWeight: 900, fontSize: "clamp(28px,4vw,42px)", lineHeight: 1.2, margin: "0 0 12px", letterSpacing: "-0.02em" }}>
                {post.title}
              </h1>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem" }}>{post.date}</p>
            </div>
          </section>

          {post.imagePath && (
            <div className="container" style={{ maxWidth: 820, marginBottom: 20 }}>
              <img
                src={post.imagePath}
                alt={post.title}
                style={{ width: "100%", borderRadius: 14, display: "block", boxShadow: "0 30px 60px -30px rgba(0,0,0,0.6)", border: "1px solid rgba(186,152,99,0.2)" }}
              />
            </div>
          )}

          <section style={{ background: "#fff", borderRadius: "18px 18px 0 0", padding: "48px 0" }}>
            <div className="container blog-content" style={{ maxWidth: 760 }} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            <div className="container" style={{ maxWidth: 760, textAlign: "center", marginTop: 40 }}>
              <a
                href="https://wa.me/5521988652452"
                target="_blank"
                rel="noopener noreferrer"
                className="sbf-btn sbf-btn-gold"
              >
                <i className="fab fa-whatsapp"></i>
                Falar com um especialista
              </a>
            </div>
          </section>
        </>
      )}

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
