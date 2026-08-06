import { Target, Eye, Heart, Lightbulb, Shield, Users, TrendingUp, Award } from "lucide-react";

const valores = [
  {
    icon: Heart,
    title: "Compromisso",
    desc: "Comprometimento total com o sucesso de cada cliente, tratando cada empresa como se fosse a nossa.",
  },
  {
    icon: Shield,
    title: "Integridade",
    desc: "Transparência e ética em todas as relações, sem exceção. Sua confiança é nosso maior ativo.",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    desc: "Tecnologia e metodologias modernas para entregar contabilidade consultiva de alto nível.",
  },
  {
    icon: Users,
    title: "Parceria",
    desc: "Mais do que um contador, somos um verdadeiro parceiro estratégico no crescimento do seu negócio.",
  },
  {
    icon: TrendingUp,
    title: "Resultados",
    desc: "Foco em resultados concretos: redução de impostos, aumento de lucratividade e conformidade fiscal.",
  },
  {
    icon: Award,
    title: "Excelência",
    desc: "Equipe especializada com formação FGV, IFRS e experiência em grandes corporações como Deloitte e Enel.",
  },
];

export default function MissaoVisaoSection() {
  return (
    <section id="missao-visao" className="py-24 bg-[#304366] relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ba9863]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0d1b2e]/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        {/* Diagonal lines */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #ba9863 0px, #ba9863 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#ba9863] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Nossa Essência
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Missão, Visão e{" "}
            <span className="text-[#ba9863]">Valores</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Os princípios que guiam cada decisão e cada relacionamento na SBF Contabilidade.
          </p>
        </div>

        {/* Missão e Visão */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Missão */}
          <div className="group relative p-8 rounded-2xl bg-[#0d1b2e]/40 border border-[#ba9863]/20 hover:border-[#ba9863]/50 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ba9863]/5 rounded-full blur-2xl group-hover:bg-[#ba9863]/10 transition-all duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-[#ba9863]/10 border border-[#ba9863]/30 flex items-center justify-center group-hover:bg-[#ba9863]/20 transition-all duration-300">
                  <Target size={26} className="text-[#ba9863]" />
                </div>
                <div>
                  <span className="text-[#ba9863] text-xs font-semibold tracking-[0.15em] uppercase">Nossa</span>
                  <h3 className="text-2xl font-black text-white">Missão</h3>
                </div>
              </div>
              <p className="text-white/75 text-lg leading-relaxed">
                Proporcionar soluções contábeis e tributárias de excelência que impulsionem o crescimento sustentável dos nossos clientes, através de uma contabilidade consultiva personalizada, tecnológica e comprometida com resultados reais.
              </p>
            </div>
          </div>

          {/* Visão */}
          <div className="group relative p-8 rounded-2xl bg-[#0d1b2e]/40 border border-[#ba9863]/20 hover:border-[#ba9863]/50 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ba9863]/5 rounded-full blur-2xl group-hover:bg-[#ba9863]/10 transition-all duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-[#ba9863]/10 border border-[#ba9863]/30 flex items-center justify-center group-hover:bg-[#ba9863]/20 transition-all duration-300">
                  <Eye size={26} className="text-[#ba9863]" />
                </div>
                <div>
                  <span className="text-[#ba9863] text-xs font-semibold tracking-[0.15em] uppercase">Nossa</span>
                  <h3 className="text-2xl font-black text-white">Visão</h3>
                </div>
              </div>
              <p className="text-white/75 text-lg leading-relaxed">
                Ser reconhecida até 2027 como o escritório de contabilidade consultiva de referência no Rio de Janeiro para médias e grandes empresas, liderando a transformação digital do setor contábil com foco em inteligência tributária e inovação.
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div>
          <h3 className="text-center text-xl font-bold text-white/80 mb-8 flex items-center justify-center gap-3">
            <span className="w-12 h-0.5 bg-[#ba9863]/40" />
            Nossos Valores
            <span className="w-12 h-0.5 bg-[#ba9863]/40" />
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {valores.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group p-5 rounded-xl bg-[#0d1b2e]/30 border border-white/[0.06] hover:border-[#ba9863]/30 hover:bg-[#0d1b2e]/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#ba9863]/10 flex items-center justify-center group-hover:bg-[#ba9863]/20 transition-all duration-300">
                      <Icon size={18} className="text-[#ba9863]" />
                    </div>
                    <h4 className="text-white font-bold text-sm">{item.title}</h4>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 text-center">
          <blockquote className="relative inline-block max-w-3xl">
            <span className="absolute -top-4 -left-2 text-[#ba9863]/20 text-8xl font-serif leading-none">"</span>
            <p className="text-white/70 text-xl italic leading-relaxed px-8">
              Possuímos valores centrados no atendimento e no compromisso pela busca das melhores oportunidades para os nossos clientes.
            </p>
            <span className="absolute -bottom-8 -right-2 text-[#ba9863]/20 text-8xl font-serif leading-none">"</span>
            <footer className="mt-6 text-[#ba9863] font-semibold">
              Bruno Fonseca — Sócio Diretor, SBF Contabilidade
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
