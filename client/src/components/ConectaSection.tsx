const FEATURES = [
  { icon: "fa-play-circle", title: "Videoaulas Exclusivas", desc: "Conteúdo em vídeo sobre contabilidade, tributação e gestão empresarial." },
  { icon: "fa-certificate", title: "Certificados", desc: "Certificados de conclusão para valorizar o aprendizado da sua equipe." },
  { icon: "fa-users", title: "Para toda a equipe", desc: "Capacite seu time financeiro com conteúdo especializado e atualizado." },
  { icon: "fa-mobile-alt", title: "Acesso em qualquer lugar", desc: "Plataforma responsiva, acesse do celular, tablet ou computador." },
  { icon: "fa-sync", title: "Conteúdo Atualizado", desc: "Material sempre atualizado com as últimas mudanças tributárias e fiscais." },
  { icon: "fa-headset", title: "Suporte SBF", desc: "Suporte direto da equipe SBF para tirar dúvidas sobre o conteúdo." },
];

export default function ConectaSection() {
  return (
    <section
      id="conecta"
      className="sbf-section"
      style={{ background: "linear-gradient(135deg, #304366 0%, #1a2a3a 100%)" }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(186,152,99,0.15)", color: "#ba9863", border: "1px solid rgba(186,152,99,0.3)" }}
            >
              <i className="fas fa-graduation-cap"></i>
              Portal de Educação Corporativa
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-white">
              Conecta SBF
              <br />
              <span style={{ color: "#ba9863" }}>A Netflix da Contabilidade</span>
            </h2>

            <p className="text-white/70 leading-relaxed">
              O <strong className="text-white">Conecta SBF</strong> é o portal de educação corporativa da SBF Contabilidade. Uma plataforma completa com conteúdo exclusivo para empresários e equipes financeiras que querem dominar a gestão contábil e tributária do seu negócio.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 gap-4">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(186,152,99,0.15)" }}
                  >
                    <i className={`fas ${feature.icon} text-sm`} style={{ color: "#ba9863" }}></i>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{feature.title}</p>
                    <p className="text-white/60 text-xs mt-0.5">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://conectasbf.ensinio.com/browse"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #ba9863 0%, #d4b47a 100%)",
                  color: "#1a2a3a",
                  boxShadow: "0 8px 25px rgba(186,152,99,0.3)",
                }}
              >
                <i className="fas fa-external-link-alt"></i>
                Acessar o Conecta SBF
              </a>
              <a
                href="https://wa.me/5521988652452?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Conecta%20SBF."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all hover:bg-white/10"
                style={{ border: "2px solid rgba(186,152,99,0.5)", color: "#ba9863" }}
              >
                <i className="fab fa-whatsapp"></i>
                Saber mais
              </a>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="flex flex-col gap-6">
            {/* Platform preview card */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "2px solid rgba(186,152,99,0.3)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              }}
            >
              {/* Browser mockup header */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ background: "rgba(26,42,58,0.9)" }}
              >
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div
                  className="flex-1 mx-3 px-3 py-1 rounded text-xs text-white/50"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  conectasbf.ensinio.com/browse
                </div>
              </div>
              {/* Platform content preview */}
              <div
                className="p-6"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(186,152,99,0.2)" }}
                  >
                    <i className="fas fa-graduation-cap" style={{ color: "#ba9863" }}></i>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Conecta SBF</p>
                    <p className="text-white/50 text-xs">Portal de Educação Corporativa</p>
                  </div>
                </div>

                {/* Mock course cards */}
                {[
                  { title: "Lucro Real na Prática", lessons: "12 aulas", tag: "Tributário" },
                  { title: "Reforma Tributária 2025", lessons: "8 aulas", tag: "Atualização" },
                  { title: "Gestão Financeira Avançada", lessons: "15 aulas", tag: "Gestão" },
                ].map((course) => (
                  <div
                    key={course.title}
                    className="flex items-center gap-4 p-4 rounded-xl mb-3"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(186,152,99,0.15)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(186,152,99,0.15)" }}
                    >
                      <i className="fas fa-play text-xs" style={{ color: "#ba9863" }}></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-xs font-bold">{course.title}</p>
                      <p className="text-white/50 text-xs">{course.lessons}</p>
                    </div>
                    <span
                      className="px-2 py-0.5 rounded text-xs font-bold"
                      style={{ background: "rgba(186,152,99,0.15)", color: "#ba9863" }}
                    >
                      {course.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: "50+", label: "Cursos" },
                { num: "500+", label: "Alunos" },
                { num: "100%", label: "Online" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl"
                  style={{ background: "rgba(186,152,99,0.1)", border: "1px solid rgba(186,152,99,0.2)" }}
                >
                  <p className="text-2xl font-black" style={{ color: "#ba9863" }}>{stat.num}</p>
                  <p className="text-white/60 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
