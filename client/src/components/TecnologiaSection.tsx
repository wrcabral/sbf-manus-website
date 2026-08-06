const FEATURES = [
  { icon: "fa-chart-bar", title: "Dashboards Financeiros", desc: "Visão completa das finanças em tempo real, de onde estiver." },
  { icon: "fa-file-invoice", title: "Emissão de Notas Fiscais", desc: "NF-e, NFS-e e CT-e integrados ao sistema contábil." },
  { icon: "fa-bell", title: "Alertas de Vencimento", desc: "Notificações automáticas para obrigações fiscais e pagamentos." },
  { icon: "fa-mobile-alt", title: "Acesso Mobile e Web", desc: "Disponível em qualquer dispositivo, a qualquer hora." },
];

export default function TecnologiaSection() {
  return (
    <section
      id="tecnologia"
      className="sbf-section"
      style={{ background: "linear-gradient(135deg, #304366 0%, #1a2a3a 100%)" }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit"
              style={{ background: "rgba(186,152,99,0.15)", color: "#ba9863", border: "1px solid rgba(186,152,99,0.3)" }}
            >
              Tecnologia Exclusiva
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Gestão na <span style={{ color: "#ba9863" }}>Palma da Mão</span>
            </h2>
            <div className="gold-divider"></div>
            <p className="text-white/70 leading-relaxed">
              Esqueça a papelada. Com o <strong className="text-white">MonitorHub</strong>, você tem acesso total aos dados da sua empresa em tempo real, de onde estiver.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="p-4 rounded-xl flex flex-col gap-3"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(186,152,99,0.2)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(186,152,99,0.15)" }}
                  >
                    <i className={`fas ${f.icon} text-sm`} style={{ color: "#ba9863" }}></i>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs mb-1">{f.title}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5521988652452?text=Olá!%20Quero%20conhecer%20o%20MonitorHub%20da%20SBF%20Contabilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90 w-fit"
              style={{
                background: "linear-gradient(135deg, #ba9863 0%, #d4b47a 100%)",
                color: "#1a2a3a",
              }}
            >
              <i className="fab fa-whatsapp"></i>
              Conhecer o MonitorHub
            </a>
          </div>

          {/* Right: Visual */}
          <div className="flex justify-center">
            <div
              className="w-full max-w-sm p-8 rounded-3xl flex flex-col gap-5"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(186,152,99,0.3)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-white font-black text-sm">MonitorHub</p>
                <span
                  className="px-2 py-1 rounded text-xs font-bold"
                  style={{ background: "rgba(186,152,99,0.2)", color: "#ba9863" }}
                >
                  LIVE
                </span>
              </div>

              {/* Mock dashboard */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Receita", value: "R$ 84.200", up: true },
                  { label: "Despesas", value: "R$ 31.450", up: false },
                  { label: "Lucro Líquido", value: "R$ 52.750", up: true },
                  { label: "Impostos", value: "R$ 8.920", up: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <p className="text-white/50 text-xs mb-1">{item.label}</p>
                    <p className="text-white font-black text-sm">{item.value}</p>
                    <p
                      className="text-xs mt-1"
                      style={{ color: item.up ? "#4ade80" : "#f87171" }}
                    >
                      <i className={`fas fa-arrow-${item.up ? "up" : "down"} mr-1`}></i>
                      {item.up ? "+12%" : "-3%"}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bar chart mock */}
              <div>
                <p className="text-white/50 text-xs mb-3">Fluxo de Caixa — Últimos 6 meses</p>
                <div className="flex items-end gap-2 h-16">
                  {[60, 75, 55, 90, 70, 85].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{
                        height: `${h}%`,
                        background: i === 5
                          ? "linear-gradient(to top, #ba9863, #d4b47a)"
                          : "rgba(186,152,99,0.3)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
