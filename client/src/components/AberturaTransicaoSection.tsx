import { useState } from "react";
import { Building2, ArrowRightLeft, CheckCircle2, ArrowRight, Phone } from "lucide-react";

const aberturaSteps = [
  { step: "01", title: "Consultoria Inicial", desc: "Análise do melhor regime tributário para o seu negócio — Simples Nacional, Lucro Presumido ou Lucro Real." },
  { step: "02", title: "Documentação", desc: "Cuidamos de toda a documentação: contrato social, CNPJ, inscrição estadual e municipal." },
  { step: "03", title: "Registros e Alvarás", desc: "Registro na Junta Comercial, INSS, FGTS e obtenção de todos os alvarás necessários." },
  { step: "04", title: "Empresa Ativa", desc: "Sua empresa pronta para operar, com toda a estrutura contábil e fiscal configurada." },
];

const transicaoSteps = [
  { step: "01", title: "Diagnóstico Gratuito", desc: "Auditoria completa da situação fiscal e contábil atual da sua empresa, sem custo." },
  { step: "02", title: "Plano de Migração", desc: "Elaboramos um plano personalizado de transição para garantir continuidade sem riscos." },
  { step: "03", title: "Transferência Segura", desc: "Recebemos toda a documentação e histórico contábil com sigilo e responsabilidade." },
  { step: "04", title: "Onboarding SBF", desc: "Sua empresa integrada ao ecossistema SBF com acesso ao portal, dashboard e suporte prioritário." },
];

const aberturaVantagens = [
  "Abertura em até 5 dias úteis",
  "Escolha do melhor regime tributário",
  "CNPJ, Inscrição Estadual e Municipal",
  "Endereço Fiscal disponível",
  "Consultoria tributária inclusa",
  "Suporte completo no primeiro ano",
];

const transicaoVantagens = [
  "Diagnóstico fiscal gratuito",
  "Migração sem burocracia",
  "Histórico contábil preservado",
  "Sem interrupção das obrigações",
  "Economia média de 23% em impostos",
  "Onboarding dedicado",
];

export default function AberturaTransicaoSection() {
  const [activeTab, setActiveTab] = useState<"abertura" | "transicao">("abertura");

  const isAbertura = activeTab === "abertura";
  const steps = isAbertura ? aberturaSteps : transicaoSteps;
  const vantagens = isAbertura ? aberturaVantagens : transicaoVantagens;

  return (
    <section id="abertura-transicao" className="py-24 bg-[#0d1b2e] relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ba9863]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#304366]/30 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#ba9863 1px, transparent 1px), linear-gradient(90deg, #ba9863 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#ba9863] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Soluções Completas
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Abertura de Empresa &{" "}
            <span className="text-[#ba9863]">Transição de Contador</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Seja para abrir seu negócio do zero ou migrar para uma contabilidade que realmente entende o seu mercado, a SBF cuida de tudo.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-[#1a2d45] rounded-2xl p-1.5 gap-1">
            <button
              onClick={() => setActiveTab("abertura")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                isAbertura
                  ? "bg-[#ba9863] text-[#0d1b2e] shadow-lg shadow-[#ba9863]/30"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Building2 size={18} />
              Abertura de Empresa
            </button>
            <button
              onClick={() => setActiveTab("transicao")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                !isAbertura
                  ? "bg-[#ba9863] text-[#0d1b2e] shadow-lg shadow-[#ba9863]/30"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <ArrowRightLeft size={18} />
              Transição de Contador
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Passos */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#ba9863]" />
              Como Funciona
            </h3>
            <div className="space-y-4">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-5 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-[#ba9863]/30 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#ba9863]/10 border border-[#ba9863]/20 flex items-center justify-center">
                    <span className="text-[#ba9863] text-xs font-black">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 group-hover:text-[#ba9863] transition-colors">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vantagens + CTA */}
          <div className="space-y-6">
            {/* Card de vantagens */}
            <div className="p-7 rounded-2xl bg-gradient-to-br from-[#304366]/60 to-[#1a2d45]/80 border border-[#ba9863]/20">
              <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#ba9863]" />
                {isAbertura ? "Vantagens SBF" : "Por que Migrar para a SBF?"}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {vantagens.map((v, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#ba9863] flex-shrink-0" />
                    <span className="text-white/80 text-sm">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Destaque especial */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#ba9863]/20 to-[#ba9863]/5 border border-[#ba9863]/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ba9863] flex items-center justify-center flex-shrink-0">
                  {isAbertura ? <Building2 size={22} className="text-[#0d1b2e]" /> : <ArrowRightLeft size={22} className="text-[#0d1b2e]" />}
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">
                    {isAbertura ? "Abertura em até 5 dias úteis" : "Migração sem dor de cabeça"}
                  </h4>
                  <p className="text-white/60 text-sm">
                    {isAbertura
                      ? "Cuidamos de toda a burocracia para que você foque no que realmente importa: o seu negócio."
                      : "Nossa equipe cuida de toda a transição. Você não precisa se preocupar com nada."}
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/5521988652452?text=${encodeURIComponent(isAbertura ? "Olá! Gostaria de saber mais sobre Abertura de Empresa na SBF Contabilidade." : "Olá! Gostaria de saber mais sobre Transição de Contador para a SBF Contabilidade.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#ba9863] text-[#0d1b2e] font-bold text-sm hover:bg-[#d4af7a] transition-all duration-300 shadow-lg shadow-[#ba9863]/20"
              >
                Falar com Especialista
                <ArrowRight size={16} />
              </a>
              <a
                href="#contato"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-[#ba9863]/40 text-[#ba9863] font-semibold text-sm hover:bg-[#ba9863]/10 transition-all duration-300"
              >
                <Phone size={16} />
                Agendar Consultoria
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
