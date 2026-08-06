// Generates static, crawlable HTML pages for every migrated blog post,
// plus paginated /blog listing pages. Runs as a post-build step so the
// output lands directly in dist/public alongside the Vite build — these
// are real static files, not client-rendered routes, which keeps them
// fast and indexable without needing a server-rendering setup.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "dist", "public");
const POSTS_PATH = path.join(ROOT, "content", "posts.json");

const SITE_NAME = "SBF Prime Contabilidade";
const SITE_URL = "https://sbfcontabilidade.com.br";
const WHATSAPP = "https://wa.me/5521988652452";
const PAGE_SIZE = 12;

const MESES = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
];

function formatDate(p) {
  const m = MESES[parseInt(p.month, 10) - 1] || p.month;
  return `${parseInt(p.day, 10)} de ${m} de ${p.year}`;
}

function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function postUrl(p) {
  return `/${p.year}/${p.month}/${p.day}/${p.slug}`;
}

// Shared page chrome — matches the main site's navy/gold identity.
function layout({ title, description, canonical, image, bodyHtml, headerEyebrow }) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}" />
<link rel="canonical" href="${SITE_URL}${canonical}" />
<meta property="og:type" content="article" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(description)}" />
<meta property="og:url" content="${SITE_URL}${canonical}" />
${image ? `<meta property="og:image" content="${SITE_URL}${image}" />` : ""}
<meta name="twitter:card" content="summary_large_image" />
<link rel="icon" href="/images/sbf-prime-logo.webp" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&family=Poppins:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<style>
  :root{--navy-950:#060d18;--navy-900:#0d1b2e;--navy-800:#1a2a3a;--gold:#ba9863;--gold-light:#d4b47a;}
  *{box-sizing:border-box;}
  body{margin:0;font-family:'DM Sans',sans-serif;background:var(--navy-950);color:#e8ecf3;line-height:1.7;}
  a{color:inherit;}
  .wrap{max-width:820px;margin:0 auto;padding:0 24px;}
  header.site{position:sticky;top:0;z-index:50;background:rgba(13,27,46,0.97);backdropFilter:blur(20px);border-bottom:1px solid rgba(186,152,99,0.15);}
  header.site .inner{max-width:1180px;margin:0 auto;padding:16px 24px;display:flex;align-items:center;justify-content:space-between;gap:16px;}
  header.site img{height:38px;width:auto;}
  header.site .back{color:var(--gold-light);text-decoration:none;font-weight:700;font-size:0.875rem;display:flex;align-items:center;gap:8px;}
  .hero{padding:64px 0 32px;}
  .eyebrow{color:var(--gold);font-weight:700;font-size:0.75rem;letter-spacing:0.1em;text-transform:uppercase;}
  h1{color:#fff;font-weight:900;font-size:clamp(28px,4vw,42px);line-height:1.2;margin:16px 0 12px;letter-spacing:-0.02em;}
  .date{color:rgba(255,255,255,0.5);font-size:0.875rem;}
  .featured-img{width:100%;border-radius:14px;display:block;margin:28px 0;box-shadow:0 30px 60px -30px rgba(0,0,0,0.6);border:1px solid rgba(186,152,99,0.2);}
  .content{background:#fff;color:#232c3a;border-radius:18px 18px 0 0;padding:48px 0;}
  .content .wrap{max-width:760px;}
  .content h2{color:var(--navy-900);font-weight:800;margin-top:36px;}
  .content h3{color:var(--navy-900);font-weight:700;margin-top:28px;}
  .content p{margin:0 0 18px;font-size:1.0625rem;}
  .content ul,.content ol{margin:0 0 18px;padding-left:1.4em;}
  .content li{margin-bottom:8px;}
  .content a{color:#9a7b3f;font-weight:600;text-decoration:underline;}
  .content img{max-width:100%;border-radius:10px;}
  .cta-wrap{background:#fff;padding:0 0 64px;text-align:center;}
  .btn-gold{display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,var(--gold-light),var(--gold));color:#0d1b2e;font-weight:800;padding:14px 28px;border-radius:10px;text-decoration:none;font-size:0.9375rem;}
  footer.site{background:var(--navy-950);border-top:1px solid rgba(186,152,99,0.12);padding:40px 24px;text-align:center;color:rgba(255,255,255,0.4);font-size:0.8125rem;}
  footer.site a{color:var(--gold-light);text-decoration:none;}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:24px;margin:36px 0 56px;}
  .card{display:block;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;text-decoration:none;transition:border-color .2s;}
  .card:hover{border-color:rgba(186,152,99,0.4);}
  .card img{width:100%;aspect-ratio:16/9;object-fit:cover;display:block;background:#1a2a3a;}
  .card .body{padding:18px 20px;}
  .card .body .date{display:block;color:var(--gold);font-size:0.6875rem;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:8px;}
  .card .body h3{margin:0;font-size:1rem;color:#fff;line-height:1.4;font-weight:700;}
  .pagination{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;padding-bottom:64px;}
  .pagination a,.pagination span{padding:10px 18px;border-radius:8px;border:1px solid rgba(186,152,99,0.3);color:var(--gold-light);text-decoration:none;font-size:0.875rem;font-weight:600;}
</style>
</head>
<body>
<header class="site">
  <div class="inner">
    <a class="back" href="/"><i class="fas fa-arrow-left"></i> Voltar ao site</a>
    <img src="/images/sbf-prime-logo.webp" alt="SBF Prime Contabilidade" />
    <a class="back" href="${WHATSAPP}" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i> Falar no WhatsApp</a>
  </div>
</header>
${bodyHtml}
<footer class="site">
  <p>© ${new Date().getFullYear()} SBF Prime Contabilidade. <a href="/">sbfcontabilidade.com.br</a></p>
</footer>
</body>
</html>`;
}

function renderPost(post) {
  const title = `${post.title} — ${SITE_NAME}`;
  const bodyHtml = `
<section class="hero"><div class="wrap">
  <div class="eyebrow">Blog SBF Prime</div>
  <h1>${esc(post.title)}</h1>
  <p class="date">${formatDate(post)}</p>
</div></section>
${post.imagePath ? `<div class="wrap"><img class="featured-img" src="${post.imagePath}" alt="${esc(post.title)}" /></div>` : ""}
<section class="content"><div class="wrap">
  ${post.contentHtml}
</div></section>
<section class="cta-wrap"><div class="wrap">
  <a class="btn-gold" href="${WHATSAPP}" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i> Falar com um especialista</a>
</div></section>`;

  return layout({
    title,
    description: post.metaDescription || post.title,
    canonical: postUrl(post),
    image: post.imagePath,
    bodyHtml,
  });
}

function renderListing(posts, page, totalPages) {
  const cards = posts
    .map(
      (p) => `
    <a class="card" href="${postUrl(p)}">
      ${p.imagePath ? `<img src="${p.imagePath}" alt="${esc(p.title)}" loading="lazy" />` : ""}
      <div class="body">
        <span class="date">${formatDate(p)}</span>
        <h3>${esc(p.title)}</h3>
      </div>
    </a>`
    )
    .join("\n");

  const prevHref = page > 1 ? (page - 1 === 1 ? "/blog" : `/blog/page/${page - 1}`) : null;
  const nextHref = page < totalPages ? `/blog/page/${page + 1}` : null;

  const bodyHtml = `
<section class="hero"><div class="wrap" style="max-width:1180px;">
  <div class="eyebrow">Blog</div>
  <h1>Conteúdo para quem empreende de verdade</h1>
  <p class="date" style="max-width:560px;">Tributos, gestão financeira e empreendedorismo, explicados sem economês.</p>
</div></section>
<section><div class="wrap" style="max-width:1180px;">
  <div class="grid">${cards}</div>
  <div class="pagination">
    ${prevHref ? `<a href="${prevHref}">← Anteriores</a>` : ""}
    <span>Página ${page} de ${totalPages}</span>
    ${nextHref ? `<a href="${nextHref}">Próximos →</a>` : ""}
  </div>
</div></section>`;

  return layout({
    title: `Blog — ${SITE_NAME}`,
    description: "Artigos sobre contabilidade, tributos, gestão financeira e empreendedorismo, direto da SBF Prime Contabilidade.",
    canonical: page === 1 ? "/blog" : `/blog/page/${page}`,
    image: null,
    bodyHtml,
  });
}

function writeFile(relPath, html) {
  const full = path.join(OUT_DIR, relPath, "index.html");
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, html, "utf-8");
}

function writeLatestPostsData(posts) {
  // Lightweight metadata (no HTML bodies) for the in-app teaser section —
  // must run BEFORE `vite build` so the client bundle picks it up.
  const latest = posts.slice(0, 6).map((p) => ({
    slug: p.slug,
    year: p.year,
    month: p.month,
    day: p.day,
    title: p.title,
    metaDescription: p.metaDescription,
    imagePath: p.imagePath,
    date: formatDate(p),
    url: postUrl(p),
  }));
  const dataOutPath = path.join(ROOT, "client", "src", "data", "latest-posts.json");
  fs.mkdirSync(path.dirname(dataOutPath), { recursive: true });
  fs.writeFileSync(dataOutPath, JSON.stringify(latest, null, 2), "utf-8");
  console.log(`[blog] Wrote latest-posts.json (${latest.length} posts) for the client bundle.`);
}

function writeStaticPages(posts) {
  // Real static HTML files — must run AFTER `vite build` since they land
  // directly in dist/public alongside the built assets.
  if (!fs.existsSync(OUT_DIR)) {
    console.error(`[blog] Output dir not found: ${OUT_DIR}. Run "vite build" first.`);
    process.exit(1);
  }
  for (const post of posts) {
    writeFile(postUrl(post), renderPost(post));
  }
  const totalPages = Math.ceil(posts.length / PAGE_SIZE);
  for (let page = 1; page <= totalPages; page++) {
    const slice = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    const html = renderListing(slice, page, totalPages);
    writeFile(page === 1 ? "blog" : `blog/page/${page}`, html);
  }
  console.log(`[blog] Generated ${posts.length} post pages and ${totalPages} listing pages.`);
}

function main() {
  const mode = process.argv[2]; // "pre" | "post"
  const posts = JSON.parse(fs.readFileSync(POSTS_PATH, "utf-8"));
  posts.sort((a, b) => (a.year + a.month + a.day > b.year + b.month + b.day ? -1 : 1));

  if (mode === "pre") {
    writeLatestPostsData(posts);
  } else if (mode === "post") {
    writeStaticPages(posts);
  } else {
    console.error('[blog] Usage: node generate-blog.mjs <pre|post>');
    process.exit(1);
  }
}

main();
