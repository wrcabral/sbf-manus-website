import { useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";

// Mesmo Google Apps Script Web App já usado pelo formulário de contato
// (ContatoSection.tsx) — grava numa aba própria da mesma planilha e
// notifica por e-mail. Não depende do serviço interno da Manus, que não
// está configurado neste deploy na Vercel.
const LEAD_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbyLT3tloJIIVcie9pNq5j_VxeeahOn-NI7mPlTr4N5wWUfQftObp0mMw1i2KrroXlM/exec";

// ---------------------------------------------------------------------------
// Segmentos e faixas de redução de CBS previstas na reforma tributária.
// Mesma lógica de negócio já validada com o Bruno para o funil de diagnóstico.
// ---------------------------------------------------------------------------
type Sector = {
  reducao: number;
  cor: "verde" | "amarelo" | "vermelho";
  titulo: string;
  texto: string;
};

const SETORES: Record<string, Sector> = {
  saude: { reducao: 0.6, cor: "verde", titulo: "Redução de 60% · enquadramento a confirmar", texto: "Serviços de saúde elegíveis ao tratamento reduzido. Isso não comprova redução em relação ao imposto atual." },
  educacao: { reducao: 0.6, cor: "verde", titulo: "Redução de 60% · enquadramento a confirmar", texto: "Serviços educacionais abrangidos pelo tratamento reduzido. A atividade efetivamente prestada precisa ser validada." },
  funerario: { reducao: 0.6, cor: "verde", titulo: "Redução de 60% · enquadramento a confirmar", texto: "Serviços funerários abrangidos pelo tratamento reduzido. A operação efetiva precisa ser validada." },
  artistica: { reducao: 0.6, cor: "verde", titulo: "Redução de 60% · enquadramento a confirmar", texto: "Produção artística e cultural elegível ao tratamento reduzido, sujeita às condições legais." },
  desportiva: { reducao: 0.6, cor: "verde", titulo: "Redução de 60% · enquadramento a confirmar", texto: "Atividades desportivas elegíveis ao tratamento reduzido, sujeitas às condições legais." },
  locacao: { reducao: 0.7, cor: "verde", titulo: "Redução de 70% · regime específico", texto: "Locação de imóveis com tratamento próprio. Base, prazo e condições contratuais precisam ser avaliados." },
  prof: { reducao: 0.3, cor: "amarelo", titulo: "Redução de 30% · condições específicas", texto: "Cenário de serviços profissionais elegíveis (advocacia, engenharia). Profissão e operação precisam ser confirmadas." },
  bares: { reducao: 0.4, cor: "amarelo", titulo: "Redução de 40% · regime específico", texto: "Cenário simplificado de alimentação. Créditos nas compras seguem requisitos legais próprios." },
  hotel: { reducao: 0.4, cor: "amarelo", titulo: "Redução de 40% · regime específico", texto: "Cenário simplificado de hospedagem elegível. Alimentação e bebidas exigem análise própria." },
  turismo: { reducao: 0.4, cor: "amarelo", titulo: "Redução de 40% · regime específico", texto: "Cenário simplificado de intermediação turística. Comissões e repasses exigem análise própria." },
  comercio: { reducao: 0, cor: "amarelo", titulo: "Comércio · análise por produto e cadeia", texto: "Sem redução aplicada a esta hipótese geral. Produtos podem ter tratamentos distintos entre si." },
  industria: { reducao: 0, cor: "amarelo", titulo: "Indústria · análise por cadeia de créditos", texto: "Sem redução nas vendas nesta hipótese. O peso principal está nos créditos de insumos e energia." },
  servicos: { reducao: 0, cor: "vermelho", titulo: "Alíquota-padrão · atenção ao cenário", texto: "Sem redução aplicada nesta hipótese. Créditos, preços e regime atual precisam ser avaliados com cuidado." },
  tecnologia: { reducao: 0, cor: "vermelho", titulo: "Alíquota-padrão · atenção ao cenário", texto: "Sem redução aplicada. Serviços intensivos em folha tendem a gerar pouco crédito; preço e contrato pesam mais." },
};

const CNAE_PARA_SETOR: Record<string, string> = {
  "69": "prof", "71": "prof", "86": "saude", "85": "educacao", "62": "tecnologia", "63": "tecnologia",
  "47": "comercio", "56": "bares", "55": "hotel", "79": "turismo", "96": "funerario", "90": "artistica",
  "93": "desportiva", "68": "locacao",
  "10": "industria", "11": "industria", "13": "industria", "14": "industria", "15": "industria",
  "16": "industria", "17": "industria", "18": "industria", "20": "industria", "22": "industria",
  "23": "industria", "24": "industria", "25": "industria", "26": "industria", "27": "industria",
  "28": "industria", "29": "industria", "31": "industria", "32": "industria",
};

const REGIMES = [
  { value: "simples", label: "Simples Nacional", ref: 0.0196 },
  { value: "presumido", label: "Lucro Presumido", ref: 0.0365 },
  { value: "real", label: "Lucro Real", ref: 0.0925 },
];

function formatCurrency(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function maskCnpj(raw: string) {
  const v = raw.replace(/\D/g, "").slice(0, 14);
  if (v.length > 12) return v.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})/, "$1.$2.$3/$4-$5");
  if (v.length > 8) return v.replace(/(\d{2})(\d{3})(\d{3})(\d{1,4})/, "$1.$2.$3/$4");
  if (v.length > 5) return v.replace(/(\d{2})(\d{3})(\d{1,3})/, "$1.$2.$3");
  if (v.length > 2) return v.replace(/(\d{2})(\d{1,3})/, "$1.$2");
  return v;
}

export default function SimuladorCBS() {
  const [cnpj, setCnpj] = useState("");
  const [cnpjHint, setCnpjHint] = useState<{ text: string; ok: boolean } | null>(null);
  const [empresaNome, setEmpresaNome] = useState<string | null>(null);
  const [setor, setSetor] = useState("saude");
  const [faturamento, setFaturamento] = useState("");
  const [despesas, setDespesas] = useState("");
  const [regime, setRegime] = useState("presumido");

  const [showModal, setShowModal] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [resultado, setResultado] = useState<null | {
    efetiva: number; ref: number; debito: number; credito: number; saldo: number; diferenca: number;
  }>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleCnpjBlur() {
    const digits = cnpj.replace(/\D/g, "");
    if (digits.length !== 14) return;
    setCnpjHint({ text: "Consultando...", ok: false });
    try {
      const r = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${digits}`);
      if (!r.ok) throw new Error("not ok");
      const j = await r.json();
      const nomeEmpresa = j.nome_fantasia || j.razao_social;
      setEmpresaNome(nomeEmpresa || null);
      setCnpjHint(nomeEmpresa ? { text: `Encontramos: ${nomeEmpresa}`, ok: true } : null);
      const prefixo = String(j.cnae_fiscal ?? "").slice(0, 2);
      if (CNAE_PARA_SETOR[prefixo]) setSetor(CNAE_PARA_SETOR[prefixo]);
      if (j.opcao_pelo_simples) setRegime("simples");
    } catch {
      // Falha silenciosa: não expõe erro de infraestrutura, só não preenche sozinho.
      setCnpjHint(null);
    }
  }

  function handleVerSimulacao(e: React.FormEvent) {
    e.preventDefault();
    if (!faturamento) return;
    setShowModal(true);
  }

  async function handleEnviar(e: React.FormEvent) {
    e.preventDefault();
    if (!nome || !email || !whatsapp) {
      toast.error("Preencha nome, e-mail e WhatsApp.");
      return;
    }

    const fat = Number(faturamento.replace(/\D/g, ""));
    const comp = Number(despesas.replace(/\D/g, "")) || 0;
    const setorInfo = SETORES[setor];
    const regimeInfo = REGIMES.find((r) => r.value === regime)!;
    const CBS = 0.088;
    const ELEGIVEL = 0.6;

    const ref = fat * regimeInfo.ref;
    const base = fat - ref;
    const debito = base * CBS * (1 - setorInfo.reducao);
    const credito = comp * ELEGIVEL * CBS;
    const saldo = debito - credito;
    const diferenca = ref - saldo;
    const efetiva = base > 0 ? (saldo / base) * 100 : 0;

    setResultado({ efetiva, ref, debito, credito, saldo, diferenca });
    setShowModal(false);
    setIsSubmitting(true);

    try {
      // Corpo em texto puro (sem Content-Type) evita preflight OPTIONS,
      // que o Apps Script Web App não sabe responder — mesma técnica do
      // formulário de contato.
      await fetch(LEAD_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({
          name: nome,
          email,
          phone: whatsapp,
          company: empresaNome || "",
          subject: "Simulador CBS 2027",
          source: "simulador-cbs",
          message: [
            `Simulador CBS 2027 — landing de captação`,
            `CNPJ: ${cnpj || "não informado"}`,
            `Segmento: ${setor} (${setorInfo.titulo})`,
            `Faturamento mensal: ${formatCurrency(fat)}`,
            `Despesas/compras: ${formatCurrency(comp)}`,
            `Regime atual: ${regimeInfo.label}`,
            `CBS efetiva estimada: ${efetiva.toFixed(1)}%`,
            `Saldo CBS a recolher/mês: ${formatCurrency(saldo)}`,
            `Diferença vs. referência 2026: ${diferenca >= 0 ? "-" : "+"}${formatCurrency(Math.abs(diferenca))}/mês`,
          ].join("\n"),
        }),
      });
    } catch (err) {
      console.error(err);
      toast.error("Não conseguimos registrar seus dados agora. Seu resultado continua na tela, mas fale com a gente pelo WhatsApp pra garantir o contato.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const setorInfo = SETORES[setor];
  const corMap = { verde: "#2E9E6E", amarelo: "#ba9863", vermelho: "#C94A3F" };

  return (
    <div style={{ background: "#F7F5F0", minHeight: "100vh", fontFamily: "'Inter', sans-serif", color: "#2A3245" }}>
      {/* Header enxuto — página isolada para tráfego pago, sem menu completo */}
      <header style={{ background: "#16233F", borderBottom: "1px solid rgba(202,163,84,.25)", padding: "16px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 10 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, color: "#fff", textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#CAA354,#9c7a37)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0D1526", fontWeight: 800, fontSize: 13 }}>
              SP
            </div>
            <div style={{ fontWeight: 600, fontSize: 15 }}>
              SBF Prime Contabilidade
              <small style={{ display: "block", fontWeight: 400, fontSize: 10.5, color: "#E4C88A" }}>
                Especialistas em direito tributário
              </small>
            </div>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: "#16233F", color: "#fff", padding: "56px 0 100px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 48, alignItems: "center" }}>
          <div>
            <div style={{ color: "#E4C88A", fontSize: 13.5, fontWeight: 600, marginBottom: 14 }}>
              Reforma Tributária · CBS 2027
            </div>
            <h1 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.12, letterSpacing: "-.5px", fontFamily: "'Poppins', sans-serif" }}>
              Veja o que a CBS vai fazer <span style={{ color: "#E4C88A" }}>com o caixa da sua empresa</span> em 2027.
            </h1>
            <p style={{ marginTop: 16, color: "#C6CDDC", fontSize: 16, maxWidth: 480 }}>
              Em menos de 2 minutos, simule débitos, créditos e o impacto líquido no seu cenário. Gratuito e sem compromisso.
            </p>
          </div>
          <div style={{ background: "#0D1526", border: "1px solid rgba(202,163,84,.35)", borderRadius: 18, padding: 24, textAlign: "center" }}>
            <div style={{ width: 84, height: 84, borderRadius: "50%", margin: "0 auto 12px", padding: 3, background: "conic-gradient(from 200deg,#CAA354,#E4C88A,#CAA354)" }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#16233F", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Poppins'", fontWeight: 700, fontSize: 22, color: "#E4C88A", border: "3px solid #0D1526" }}>
                BF
              </div>
            </div>
            <div style={{ fontWeight: 600, color: "#fff" }}>Bruno Rodrigues Fonseca</div>
            <div style={{ fontSize: 12, color: "#E4C88A" }}>Especialista Tributário · Sócio-diretor</div>
            <div style={{ marginTop: 12, fontSize: 13, color: "#B9C1D3", borderTop: "1px solid rgba(202,163,84,.18)", paddingTop: 12 }}>
              "A reforma tem data. Quem simular agora decide com calma; quem esperar 2027 vai decidir com pressa."
            </div>
          </div>
        </div>
      </section>

      {/* Simulator card */}
      <section style={{ marginTop: -80, position: "relative" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 40px 70px -35px rgba(13,21,38,.35)", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: ".9fr 1.1fr" }} className="sim-grid-responsive">
              {/* Left: inputs */}
              <form onSubmit={handleVerSimulacao} style={{ padding: 36 }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Poppins'" }}>Dados da simulação</h2>
                <div style={{ fontSize: 13.5, color: "#6E7891", marginTop: 6 }}>
                  Informe o CNPJ e identificamos sua empresa automaticamente.
                </div>

                <div style={{ marginTop: 16 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 6 }}>CNPJ</label>
                  <input
                    value={cnpj}
                    onChange={(e) => { setCnpj(maskCnpj(e.target.value)); setCnpjHint(null); }}
                    onBlur={handleCnpjBlur}
                    placeholder="00.000.000/0000-00"
                    maxLength={18}
                    inputMode="numeric"
                    style={{ width: "100%", padding: "12px 13px", fontSize: 14.5, border: "1.5px solid #E2E5EC", borderRadius: 10, background: "#FBFBFA" }}
                  />
                  <div style={{ fontSize: 11.5, marginTop: 5, minHeight: 14, color: cnpjHint?.ok ? "#1F6F4E" : "#8A93A6", fontWeight: cnpjHint?.ok ? 600 : 400 }}>
                    {cnpjHint?.text ?? "\u00A0"}
                  </div>
                </div>

                <div style={{ marginTop: 16 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 6 }}>Segmento / atividade</label>
                  <select value={setor} onChange={(e) => setSetor(e.target.value)} style={{ width: "100%", padding: "12px 13px", fontSize: 14.5, border: "1.5px solid #E2E5EC", borderRadius: 10, background: "#FBFBFA" }}>
                    <optgroup label="Padrão — CBS de teste 8,8%">
                      <option value="comercio">Comércio varejista</option>
                      <option value="industria">Indústria</option>
                      <option value="servicos">Serviços gerais</option>
                      <option value="tecnologia">Tecnologia / software</option>
                    </optgroup>
                    <optgroup label="Redução de 30%">
                      <option value="prof">Profissões regulamentadas*</option>
                    </optgroup>
                    <optgroup label="Redução de 40%">
                      <option value="bares">Bares e restaurantes</option>
                      <option value="hotel">Hotelaria</option>
                      <option value="turismo">Agências de turismo</option>
                    </optgroup>
                    <optgroup label="Redução de 60%">
                      <option value="saude">Serviços de saúde</option>
                      <option value="educacao">Serviços de educação</option>
                      <option value="funerario">Serviços funerários</option>
                      <option value="artistica">Produção artística</option>
                      <option value="desportiva">Atividades desportivas</option>
                    </optgroup>
                    <optgroup label="Redução de 70%">
                      <option value="locacao">Locação de imóveis</option>
                    </optgroup>
                  </select>
                  <div style={{ marginTop: 10, display: "grid", gridTemplateColumns: "auto 1fr", gap: 12, alignItems: "start", padding: "12px 14px", borderRadius: 11, borderLeft: `4px solid ${corMap[setorInfo.cor]}`, background: "#FBFBFA" }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#16233F", color: "#E4C88A", fontWeight: 700, fontSize: 10.5, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      CBS
                    </div>
                    <div>
                      <b style={{ display: "block", fontSize: 12.5, color: "#16233F", fontWeight: 600 }}>{setorInfo.titulo}</b>
                      <span style={{ display: "block", fontSize: 12, color: "#6E7891", marginTop: 2, lineHeight: 1.45 }}>{setorInfo.texto}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: 11.5, color: "#8A93A6", marginTop: 5 }}>
                    *Advocacia e engenharia elegíveis. Medicina, psicologia e enfermagem: ver serviços de saúde.
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 16 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 6 }}>Faturamento mensal (R$)</label>
                    <input
                      value={faturamento}
                      onChange={(e) => { const n = e.target.value.replace(/\D/g, ""); setFaturamento(n ? Number(n).toLocaleString("pt-BR") : ""); }}
                      placeholder="100.000"
                      inputMode="numeric"
                      style={{ width: "100%", padding: "12px 13px", fontSize: 14.5, border: "1.5px solid #E2E5EC", borderRadius: 10, background: "#FBFBFA" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 6 }}>Compras/despesas s/ folha (R$)</label>
                    <input
                      value={despesas}
                      onChange={(e) => { const n = e.target.value.replace(/\D/g, ""); setDespesas(n ? Number(n).toLocaleString("pt-BR") : ""); }}
                      placeholder="30.000"
                      inputMode="numeric"
                      style={{ width: "100%", padding: "12px 13px", fontSize: 14.5, border: "1.5px solid #E2E5EC", borderRadius: 10, background: "#FBFBFA" }}
                    />
                  </div>
                </div>

                <div style={{ marginTop: 16 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 6 }}>Regime atual</label>
                  <select value={regime} onChange={(e) => setRegime(e.target.value)} style={{ width: "100%", padding: "12px 13px", fontSize: 14.5, border: "1.5px solid #E2E5EC", borderRadius: 10, background: "#FBFBFA" }}>
                    {REGIMES.map((r) => (
                      <option key={r.value} value={r.value}>{r.label}</option>
                    ))}
                  </select>
                </div>

                <button type="submit" style={{ marginTop: 22, width: "100%", padding: 14, border: "none", borderRadius: 11, background: "linear-gradient(135deg,#CAA354,#B78E44)", color: "#0D1526", fontWeight: 700, fontSize: 14.5, cursor: "pointer" }}>
                  Ver minha simulação
                </button>
                <div style={{ fontSize: 11, color: "#9CA3B4", marginTop: 10 }}>
                  Cenário ilustrativo de CBS no regime regular. Alíquota-padrão de teste 8,8%; compras creditáveis 60%. Não é apuração fiscal.
                </div>
              </form>

              {/* Right: results */}
              <div style={{ padding: 36, background: "#16233F", color: "#fff" }}>
                {!resultado ? (
                  <div style={{ minHeight: 420, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(202,163,84,.15)", border: "1px solid rgba(202,163,84,.45)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, fontSize: 22 }}>
                      🔒
                    </div>
                    <h3 style={{ color: "#fff", fontSize: 18, fontFamily: "'Poppins'" }}>Seu cenário aparece aqui</h3>
                    <p style={{ color: "#B9C1D3", fontSize: 13.5, maxWidth: 340, marginTop: 8 }}>
                      Preencha os dados ao lado e clique em "Ver minha simulação".
                    </p>
                  </div>
                ) : (
                  <div>
                    <h3 style={{ color: "#E4C88A", fontSize: 13, fontWeight: 600 }}>CBS EFETIVA ESTIMADA NO SEU CENÁRIO</h3>
                    <div style={{ marginTop: 8, fontFamily: "'Poppins'", fontWeight: 800, fontSize: 46, lineHeight: 1, letterSpacing: "-1px" }}>
                      {resultado.efetiva.toFixed(1).replace(".", ",")}%
                      <small style={{ fontSize: 16, fontWeight: 600, color: "#B9C1D3", marginLeft: 6 }}>da base de vendas</small>
                    </div>
                    <div style={{ marginTop: 8, fontSize: 13.5, fontWeight: 600, color: resultado.diferenca >= 0 ? "#7BD4A6" : "#F0A39E" }}>
                      ● {resultado.diferenca >= 0 ? "Redução estimada frente à referência de 2026" : "Aumento estimado frente à referência de 2026"}
                    </div>
                    <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, padding: "13px 14px" }}>
                        <div style={{ fontSize: 10.5, color: "#9CA3B4" }}>Referência PIS/Cofins 2026</div>
                        <div style={{ fontFamily: "'Poppins'", fontWeight: 700, fontSize: 17, marginTop: 2 }}>{formatCurrency(resultado.ref)}</div>
                      </div>
                      <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, padding: "13px 14px" }}>
                        <div style={{ fontSize: 10.5, color: "#9CA3B4" }}>Débito CBS nas vendas</div>
                        <div style={{ fontFamily: "'Poppins'", fontWeight: 700, fontSize: 17, marginTop: 2 }}>{formatCurrency(resultado.debito)}</div>
                      </div>
                      <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, padding: "13px 14px" }}>
                        <div style={{ fontSize: 10.5, color: "#9CA3B4" }}>Crédito estimado nas compras</div>
                        <div style={{ fontFamily: "'Poppins'", fontWeight: 700, fontSize: 17, marginTop: 2 }}>{formatCurrency(resultado.credito)}</div>
                      </div>
                      <div style={{ background: "rgba(202,163,84,.14)", border: "1px solid rgba(202,163,84,.4)", borderRadius: 12, padding: "13px 14px" }}>
                        <div style={{ fontSize: 10.5, color: "#9CA3B4" }}>Saldo CBS a recolher / mês</div>
                        <div style={{ fontFamily: "'Poppins'", fontWeight: 700, fontSize: 17, marginTop: 2, color: "#E4C88A" }}>{formatCurrency(resultado.saldo)}</div>
                      </div>
                    </div>
                    <div style={{ marginTop: 14, fontSize: 11.5, color: "#9CA3B4", lineHeight: 1.5 }}>
                      O número calculado é só o começo. A exposição está nas variáveis ainda não validadas: mix real de receitas, elegibilidade dos créditos, contratos e apuração efetiva de 2026.
                    </div>

                    <a
                      href={`https://wa.me/5521988652452?text=${encodeURIComponent(
                        `Olá Bruno, sou ${nome} da ${empresaNome || "minha empresa"}. Acabei de simular a CBS 2027 no site e quero conversar sobre o parecer.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginTop: 18, display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: 14, borderRadius: 11, background: "#1F6F4E", color: "#fff", fontFamily: "'Poppins'", fontWeight: 700, fontSize: 14, textDecoration: "none" }}
                    >
                      Falar com o Bruno agora
                    </a>
                    <div style={{ fontSize: 11, color: "#9CA3B4", marginTop: 10, textAlign: "center" }}>
                      Recebemos seus dados e o Bruno também. Ele costuma responder pessoalmente.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: "#0D1526", color: "#8A93A6", padding: "30px 0", marginTop: 60, fontSize: 12 }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <b style={{ color: "#E4C88A", fontFamily: "'Poppins'" }}>SBF Prime Contabilidade</b>
          <span>Barra da Tijuca, Rio de Janeiro · Consultoria tributária estratégica</span>
        </div>
      </footer>

      {/* Modal de captura */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(13,21,38,.72)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 20 }}
        >
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleEnviar}
            style={{ background: "#fff", borderRadius: 18, width: "100%", maxWidth: 440, padding: "30px 30px 26px", position: "relative" }}
          >
            <button type="button" onClick={() => setShowModal(false)} style={{ position: "absolute", top: 14, right: 16, border: "none", background: "none", fontSize: 20, color: "#9CA3B4", cursor: "pointer" }}>
              ×
            </button>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, color: "#8A6D2E", background: "rgba(202,163,84,.18)", padding: "4px 10px", borderRadius: 999 }}>
              Seu cenário está pronto
            </span>
            <h3 style={{ fontSize: 20, marginTop: 12, fontFamily: "'Poppins'" }}>Para onde enviamos o parecer?</h3>
            <p style={{ fontSize: 13.5, color: "#6E7891", marginTop: 6 }}>
              Você vê o resultado agora na tela e recebe o parecer completo por e-mail.
            </p>
            <div style={{ marginTop: 16 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 6 }}>Seu nome</label>
              <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome completo" required style={{ width: "100%", padding: "12px 13px", fontSize: 14.5, border: "1.5px solid #E2E5EC", borderRadius: 10 }} />
            </div>
            <div style={{ marginTop: 16 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 6 }}>E-mail</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="voce@empresa.com.br" required style={{ width: "100%", padding: "12px 13px", fontSize: 14.5, border: "1.5px solid #E2E5EC", borderRadius: 10 }} />
            </div>
            <div style={{ marginTop: 16 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 6 }}>WhatsApp</label>
              <input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="(21) 90000-0000" required inputMode="tel" style={{ width: "100%", padding: "12px 13px", fontSize: 14.5, border: "1.5px solid #E2E5EC", borderRadius: 10 }} />
            </div>
            <button type="submit" disabled={isSubmitting} style={{ marginTop: 22, width: "100%", padding: 14, border: "none", borderRadius: 11, background: "linear-gradient(135deg,#CAA354,#B78E44)", color: "#0D1526", fontWeight: 700, fontSize: 14.5, cursor: "pointer", opacity: isSubmitting ? 0.7 : 1 }}>
              {isSubmitting ? "Enviando..." : "Ver resultado e receber o parecer"}
            </button>
            <div style={{ fontSize: 11, color: "#9CA3B4", marginTop: 10 }}>
              Usamos seus dados apenas para enviar o parecer e para o contato da SBF Prime.
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
