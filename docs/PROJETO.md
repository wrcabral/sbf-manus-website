# SBF Contabilidade — Documentação do Projeto Web

> Documento vivo. Atualizar a cada ação relevante no projeto.
> Última atualização: **07/09/2026**. Sem senhas, tokens ou chaves — só estrutura, decisões e estado.

---

## 1. Visão geral

| Item | Valor |
|---|---|
| Empresa | SBF Contabilidade LTDA (CNPJ 32.302.889/0001-58, 2018) · marca em evolução para **SBF Prime Contabilidade** (segundo CNPJ 66.741.413/0001-35, aberto em 12/05/2026) |
| Sócio-diretor | Bruno Rodrigues Fonseca |
| Responsável técnico | Wanderson Cabral (GitHub `wrcabral`, e-mail wrcabral82@gmail.com) |
| Domínio | **sbfcontabilidade.com.br** (única URL pública; a marca "SBF Prime" aparece no conteúdo, não no domínio — decisão tomada para preservar SEO) |
| Endereço | Av. Ayrton Senna, 2500 · Bl 2, Sala 308 · Edifício Neolink · Barra da Tijuca · RJ · 22775-003 |
| Contatos públicos | WhatsApp (21) 98865-2452 · contato@sbfcontabilidade.com.br · bruno.fonseca@sbfcontabilidade.com.br |
| Objetivo do site | Gerar **reuniões de diagnóstico** com o Bruno (não downloads, não leads soltos). O parecer/simulador é isca; a reunião é a conversão. |

---

## 2. Repositórios (GitHub — conta `wrcabral`)

| Repositório | Status | O que é |
|---|---|---|
| **`wrcabral/sbf-manus-website`** (público) | **PRODUÇÃO — o único que importa** | Site ao vivo em sbfcontabilidade.com.br. Base gerada originalmente na plataforma Manus a partir do projeto do Bruno, depois higienizada e evoluída aqui. |
| `wrcabral/SBF` (privado) | Legado, parado | Primeira reconstrução em Next.js (blog migrado, SEO). Ficou fora do domínio. Não editar. |
| `wrcabral/SBF-Prime` (público) | Legado, descontinuado | Experimento de redesign inspirado no site Manus. Não editar. Pode ser apagado. |
| `wrcabral/portal-admissoes` | Outro produto | Portal de admissões (Next.js + Supabase), pilotos Legacy School. Não faz parte do site. |

**Regra:** toda mudança do site vai no `sbf-manus-website`, branch `main`. Push no `main` = deploy automático em produção.

---

## 3. Hospedagem, domínio e deploy

| Item | Valor |
|---|---|
| Hospedagem | **Vercel**, time **Reserva Barra**, projeto **`sbf-manus-website`**, plano Hobby |
| Domínio conectado | sbfcontabilidade.com.br → projeto `sbf-manus-website` (produção = branch `main`) |
| Deploy | Automático a cada push no `main` (build ~1 min). Nunca usar deploy manual. |
| Variáveis de ambiente na Vercel | **Nenhuma configurada** (ver Seção 6 — isso explica o que funciona e o que não funciona) |
| DNS / registro do domínio | Registro no Registro.br; DNS historicamente na Hostinger (WordPress antigo). **Verificar onde está o DNS hoje** antes de qualquer mudança de e-mail/MX. |
| Site antigo | WordPress na Hostinger — **não está mais no ar no domínio**. Todo o conteúdo dele foi migrado (Seção 5). |

**Vercel — outros projetos do mesmo time (não mexer):** wellness-clinica-site, serralheria-confianca, guia-hospede, inovalor-club, portal-admissoes, suite-barra, `sbf`, `sbf-prime`, `sbf-prime-contabilidade` (órfão, nunca conectado).

---

## 4. Stack e estrutura do código

**Stack:** Vite + React 19 + TypeScript (frontend, SPA com `wouter`) · Express + tRPC (backend Node, empacotado com esbuild) · Tailwind 4 + shadcn/ui · Drizzle ORM (schema MySQL, **sem banco conectado em produção**).

```
sbf-manus-website/
├── client/
│   ├── index.html                 # shell da SPA (meta tags, favicon)
│   ├── public/
│   │   ├── images/                # logo, fotos do Bruno (locais, sem CDN externo)
│   │   ├── blog/                  # imagens dos posts
│   │   ├── data/posts/            # JSON por post (fonte para o blog)
│   │   └── simulador-cbs/
│   │       ├── index.html         # LANDING de captação (curta)      → /simulador-cbs
│   │       └── completo/index.html# Diagnóstico Setorial do Bruno     → /simulador-cbs/completo
│   └── src/
│       ├── App.tsx                # rotas: /, /obrigado, /metodo-real, /rota-tributaria, /blog, /blog/:slug, /politica-de-privacidade
│       ├── pages/                 # Home, MetodoReal, RotaTributaria, Blog, BlogPost, Politica, Obrigado
│       ├── components/            # seções da home (Hero, QuemSomos, MissaoVisao, Abertura, Servicos, Calculadora, InteligenciaTributaria, Tecnologia, Segmentos, Podcast, Conecta, Planos, Depoimentos, Contato, Jornada, ExitPopup, Navbar, Footer, WhatsAppFloat…)
│       └── components/ui/         # shadcn/ui
├── server/
│   ├── routers.ts                 # tRPC: contact.send, leads.capture (ver Seção 6)
│   └── _core/                     # runtime (index, context, notification, storageProxy, dataApi, oauth…)
├── content/posts.json             # 243 posts do blog (migrados do WordPress)
├── scripts/generate-blog.mjs      # gera páginas estáticas do blog no build
├── drizzle/                       # schema (leads, users) e migrações — não usado em produção
├── vercel.json                    # redirects 301 das URLs antigas do WordPress + rewrite da SPA
└── package.json                   # name: sbf_contabilidade_website
```

**Comandos:** `npm install --legacy-peer-deps` (há conflito de peer deps pré-existente) · `npm run dev` · `npm run check` (tsc) · `npm run build` (gera blog + vite + servidor).

**Rotas públicas principais:** `/` (home única, seções com âncoras) · `/metodo-real` · `/rota-tributaria` · `/blog` (+243 posts em `/AAAA/MM/DD/slug`) · `/politica-de-privacidade` · `/obrigado` · **`/simulador-cbs`** · **`/simulador-cbs/completo`**.

**SEO:** todas as URLs do WordPress antigo têm 301 no `vercel.json` (páginas institucionais → âncoras da home; categorias/tags/autor → /blog). Posts mantêm a mesma URL de antes.

---

## 5. Conteúdo

- **Blog:** 243 posts (2021 → ago/2026), fonte em `content/posts.json` + `client/public/data/posts/`. Novo post = adicionar JSON + imagem e fazer push (o build gera a página). Último post: "IBS e CBS na Nota Fiscal: o que mudou a partir de agosto de 2026" (08/08/2026).
- **Identidade visual:** navy `#0d1b2e` / `#152236` / `#253550` / `#304366` · dourado `#ba9863` / `#d4b47a` / `#e8cfa0` / `#9a7a45` / `#7a5e30` · neutros quentes `#f8f7f4` / `#f0ede8` / `#e2ddd5` · fontes **Montserrat** (títulos) e **DM Sans** (corpo).
- **Assets:** `client/public/images/sbf-prime-logo.webp` (logo), `bruno-fonseca-hero.jpg` (hero/quem somos), `bruno-fonseca-retrato.jpg` (retrato novo, circular, usado na landing).
- **Produtos com página própria:** Método Real SBF (janela de decisão da reforma), Rota Tributária SBF (cronograma IVA Dual 2026–2033).
- **Conecta SBF:** portal educacional em `conectasbf.ensinio.com` (34 episódios do podcast "Jornadas de Sucesso", masterclasses por segmento). Fora do nosso código.

---

## 6. Captura de leads — o que funciona e o que não funciona

**Canal que funciona (o padrão do projeto):** **Google Apps Script** (web app na conta Workspace do Bruno) que recebe `POST` em texto puro (sem `Content-Type`, para evitar preflight), grava na **Planilha Google de leads** e **notifica por e-mail**. O código do script vive na conta Google do Bruno — **não está no repositório**.

| Formulário | Como envia | Status |
|---|---|---|
| Contato (home) | Apps Script | ✅ funciona |
| Landing `/simulador-cbs` | Apps Script (`source: landing-cbs`, assunto "URGENTE ·" no cenário vermelho) | ✅ funciona |
| Diagnóstico `/simulador-cbs/completo` | Apps Script (`source: diagnostico-cbs`) | ✅ funciona |
| Pop-up de saída (home) | tRPC `leads.capture` → `notifyOwner()` | ❌ **quebrado** — depende de `BUILT_IN_FORGE_API_URL/KEY` da Manus, inexistentes na Vercel |
| Calculadora da home (`CalculadoraSection`) | tRPC `leads.capture` → `notifyOwner()` | ❌ **quebrado** — mesmo motivo |

**Banco de dados:** o schema Drizzle (tabela `leads`) existe, mas **não há banco conectado** (sem `DATABASE_URL` na Vercel). Toda persistência real está na Planilha Google. Isso é deliberado por enquanto: simples, sem custo, o Bruno já usa.

**Removido na higienização (06/09):** chatbot com IA, mapa incorporado, painel/login via Manus, plugins de build da Manus, CSP do visualizador, pasta `__manus__`, imagens no CDN da Manus. Zero referências à Manus restantes no código.

---

## 7. Simulador CBS 2027 (funil de captação)

### 7.1 Duas páginas, um motor
- **`/simulador-cbs` — landing (curta):** destino dos anúncios. CNPJ (BrasilAPI preenche empresa/segmento/regime) + faturamento + compras → **resultado resumido grátis** com veredito em linguagem direta → contato (nome/e-mail/WhatsApp) → **agendamento embutido** ou parecer completo. Sem menu, com logo e retrato do Bruno.
- **`/simulador-cbs/completo` — Diagnóstico Setorial v2 (do Bruno):** ferramenta completa, parecer executivo de 8 páginas em PDF (impressão), abre já preenchida via URL (`?cnpj&empresa&rev&cost&setor&regime&lead=1`), gate único de contato. Recuperada do export de artefato do Claude do Bruno; lógica original preservada.

### 7.2 O motor de cálculo (6 passos, igual nas duas páginas)
1. **Referência 2026** (PIS/Cofins hoje): Presumido 3,65% do faturamento · Real 9,25% sobre (faturamento − 60% dos custos) · **Simples**: anualiza, acha a faixa, calcula a alíquota efetiva nos 4 anexos (I, II, III, V), pega a fatia PIS/Cofins do DAS (~15,5%) e **tira a média dos 4** (simplificação importante); acima de R$ 4,8 mi/ano não calcula.
2. **Base ajustada** = faturamento − referência.
3. **Débito CBS** = base × 8,8% × (1 − redução do setor).
4. **Crédito** = compras × 60% × 8,8%.
5. **Saldo** = débito − crédito.
6. **Diferença** = referência − saldo (positivo = paga menos).
- Reduções por setor: saúde/educação/funerário/artística/desportiva 60% · locação 70% · bares/hotel/turismo 40% · profissões regulamentadas 30% · comércio/indústria/serviços/tecnologia 0%.
- Veredito na landing: |diferença| < 0,5% do faturamento → "praticamente igual"; senão "paga menos" (verde) ou "paga mais" (vermelho).
- Premissas que decidem o resultado: alíquota-teste 8,8%; 60% das compras com crédito; tabela de redução; média dos anexos do Simples.

### 7.3 Comportamento por veredito (landing)
- 🔴 **Vermelho:** alerta em popup ~1s após o resultado, valor a mais por mês/ano, "Falar com o Bruno agora" (WhatsApp com mensagem de urgência) e "Agendar reunião urgente"; botão principal vermelho; lead com assunto "URGENTE".
- 🟢 **Verde:** sem popup; "Confirmar minha redução com o Bruno", tom tranquilo.
- ⚪ **Igual:** chamada neutra (validar créditos e enquadramento).

### 7.4 Agendamento embutido
Etapa dentro do funil (dias com contagem de horários, manhã/tarde, 30 min, Google Meet, nome/e-mail já preenchidos). Busca horários em `GET {AppsScript}?action=slots` e marca com `POST {action:'book'}`. **Enquanto o módulo não estiver instalado no Apps Script, cai automaticamente no link atual da agenda do Google** (agendamento de consultoria do Bruno). Módulo pronto: `Agenda.gs` (regras no topo: 30 min, seg–sex, 9–12h e 14–18h, 14 dias, 24h de antecedência, máx. 4/dia).

### 7.5 Correções relevantes já feitas no PDF/página completa
Página em branco no PDF (altura 297mm + quebra forçada → agora `calc(297mm − 2px)`); números quebrando nos cartões; responsividade (a página não empilhava no celular: coluna de resultados com 20px); paleta e fontes da marca só na tela (o PDF segue em Arial de propósito).

---

## 8. Integrações Google (conta Workspace do Bruno)

| Integração | Uso | Onde |
|---|---|---|
| Google Workspace (e-mail) | remetente dos e-mails do Apps Script (cota 1.500/dia) | conta do Bruno |
| Google Sheets | planilha de leads (aba de leads; aba "Reuniões" após instalar `Agenda.gs`) | Drive do Bruno |
| Google Apps Script | webhook de leads + (a instalar) agenda + (planejado) e-mails HTML e ficha do lead | conta do Bruno |
| Google Calendar | agenda de consultoria (link de agendamento já usado no site) + eventos criados pelo `Agenda.gs` | conta do Bruno |
| Google Business Profile | perfil do escritório (nota 5,0, 2 avaliações) | acesso via wrcabral82@gmail.com |
| Analytics / Tag Manager / Search Console / Ads | IDs existem (G-3PKNR06KBB, GTM-TNKLG87, AW-17265491429) — **acesso de editor ainda pendente**; `VITE_ANALYTICS_*` não configurados na Vercel | — |

**APIs externas:** BrasilAPI (CNPJ, pública, sem chave) ✅ · Serper e Google Places (enriquecimento da ficha do lead) — planejados, **sem chave configurada**.

---

## 9. Segurança e acessos (sem segredos)

- Acesso ao GitHub pelo chat é feito com **tokens fine-grained por sessão**, restritos a um repositório, `Contents: Read and write`, 90 dias. Já criados (revogar os que não estiverem em uso): `claude-chat-sbf-access`, `claude-chat-sbf-prime-access`, e o token do `sbf-manus-website` de 07/09. Tokens **nunca** vão para o repositório nem para este documento.
- A URL do Apps Script e o link da agenda aparecem no HTML público por natureza (não são segredos).
- `npm audit`: 11 vulnerabilidades nas dependências (8 moderadas, 2 altas, 1 crítica), pré-existentes. Tratar em janela própria.
- Bundle JS da SPA ~680 KB (acima do ideal); code-splitting é melhoria futura.
- LGPD: só dados públicos da empresa no enriquecimento; a ficha do lead é **interna** (o cliente nunca a recebe).

---

## 10. Pendências e roadmap

**Curto prazo**
1. Instalar `Agenda.gs` no Apps Script do Bruno (3 passos no cabeçalho do arquivo) → agendamento real na landing.
2. Apps Script: e-mail HTML para o **cliente** (link do parecer preenchido + botão de agenda) e **ficha do lead** para o Bruno (cadastro BrasilAPI + simulação + observações). Precisa de acesso ao script ou do código atual para integrar.
3. Corrigir pop-up de saída e calculadora da home (trocar `leads.capture`/`notifyOwner` pelo Apps Script, como já feito nos outros).
4. Decidir se a foto nova do Bruno substitui as antigas na home/Quem Somos.

**Médio prazo**
5. Enriquecimento da ficha (Serper + Places) e "observações do motor" (marca duplicada, NAP divergente, prova social).
6. PDF do parecer como **anexo** automático (Chromium headless na Vercel + serviço de e-mail; atenção ao limite de 10s do plano Hobby e às fontes).
7. Google Analytics/Ads: acesso de editor, eventos do funil (viu resultado → contato → agendou), conversão de WhatsApp.
8. Métrica-guia: **reuniões marcadas**, não PDFs baixados.

**Higiene**
9. `npm audit`, code-splitting, remover repositórios legados (`SBF`, `SBF-Prime`) se não forem usados.
10. Consolidar Instagram (@sbfcontabilidade × @sbfprimecontabilidade) e o segundo endereço citado em conteúdos antigos.

---

## 11. Histórico desta frente (set/2026)

| Data | Commit | Entrega |
|---|---|---|
| 06/09 | 6c76c1e | Simulador CBS como landing isolada (primeira versão) |
| 06/09 | f8e8735 | Fix crítico: lead do simulador não chegava (dependência Manus) → Apps Script |
| 06/09 | c06a002 | Higienização: código morto e referências à Manus removidos |
| 06/09 | 45d5ccd | Diagnóstico Setorial v2 do Bruno vira o simulador completo |
| 06/09 | de0e06d / 389e23b | PDF: página em branco e números quebrados corrigidos (robusto em qualquer escala) |
| 06/09 | 8fe95fc | Consulta automática de CNPJ (BrasilAPI) |
| 06/09 | 425a186 | Paleta e fontes da marca + correção crítica de responsividade |
| 07/09 | c548f1f | Landing de captação em `/simulador-cbs`; completa em `/simulador-cbs/completo` |
| 07/09 | a99543e | Agendamento embutido no funil + `Agenda.gs` |
| 07/09 | b751015 | Chamada por veredito (alerta vermelho / tom verde) |

---

## 12. Como manter este documento
Ele vive em **`docs/PROJETO.md`** no repositório de produção (versionado com o código) e uma cópia é gerada para download. A cada ação relevante: atualizar a tabela de histórico, a seção afetada e a data no topo. Para levar o contexto a outra conversa/ferramenta, usar **`docs/CONTEXTO.md`** (resumo curto).
