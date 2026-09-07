# SBF Contabilidade — Contexto para continuar em outro chat

Cole este texto no início de uma nova conversa. Sem senhas nem tokens. Atualizado em 07/09/2026.

## Quem e o quê
- Empresa: SBF Contabilidade (marca evoluindo para SBF Prime Contabilidade). Sócio-diretor: Bruno Rodrigues Fonseca. Técnico/marketing: Wanderson Cabral (GitHub `wrcabral`).
- Objetivo do site: **gerar reuniões de diagnóstico com o Bruno**. Simulador/parecer = isca; reunião = conversão; métrica = reuniões marcadas.
- Comunicação em português. Discutir antes de executar em decisões de layout/estratégia; executar rápido depois de alinhado.

## Onde está tudo
- **Produção:** `github.com/wrcabral/sbf-manus-website` (branch `main`) → Vercel (time Reserva Barra, projeto `sbf-manus-website`, plano Hobby) → **sbfcontabilidade.com.br**. Push no `main` = deploy automático. **Nenhuma variável de ambiente na Vercel.**
- Repositórios legados, não editar: `wrcabral/SBF`, `wrcabral/SBF-Prime`.
- Stack: Vite + React 19 + TS + Tailwind 4 + shadcn/ui; Express + tRPC; Drizzle (schema sem banco conectado). Instalar com `npm install --legacy-peer-deps`; `npm run build`.
- Documentação completa: `docs/PROJETO.md` no repositório.

## Como o site funciona
- Home única com seções (âncoras) + páginas: `/metodo-real`, `/rota-tributaria`, `/blog` (243 posts em `content/posts.json`, gerados no build), `/politica-de-privacidade`, `/obrigado`.
- 301 de todas as URLs do WordPress antigo no `vercel.json`.
- **Leads: Google Apps Script** (na conta Workspace do Bruno; código NÃO está no repo) → Planilha Google + e-mail. Envio com `fetch` POST em texto puro (sem Content-Type). Funciona no contato, na landing e no diagnóstico. **Quebrado** no pop-up de saída e na calculadora da home (usam `leads.capture`/`notifyOwner`, dependência da Manus).
- Identidade: navy `#0d1b2e/#152236/#253550`, dourado `#ba9863/#d4b47a/#e8cfa0`, Montserrat + DM Sans. Assets em `client/public/images/`.

## Simulador CBS 2027 (funil)
- `/simulador-cbs` = landing curta (anúncios): CNPJ via BrasilAPI → resultado resumido grátis com veredito → contato → agendamento embutido (ou parecer). Vermelho abre alerta urgente (WhatsApp + agenda); verde tom suave; igual neutro.
- `/simulador-cbs/completo` = Diagnóstico Setorial v2 do Bruno, PDF de 8 páginas; abre preenchido por URL (`?cnpj&empresa&rev&cost&setor&regime&lead=1`).
- Motor (6 passos): referência 2026 por regime (Simples = média dos anexos I/II/III/V) → base = fat − ref → débito = base×8,8%×(1−redução setor) → crédito = compras×60%×8,8% → saldo → diferença = ref − saldo. Limiar "igual" = 0,5% do faturamento.
- Agendamento: chama `{AppsScript}?action=slots` e `POST {action:'book'}`; sem o módulo instalado, cai no link do Google Agenda. Módulo pronto: `Agenda.gs` (instalar na conta do Bruno).

## Pendente (ordem)
1. Instalar `Agenda.gs` no Apps Script do Bruno.
2. Apps Script: e-mail HTML ao cliente (link do parecer) + ficha do lead ao Bruno.
3. Corrigir pop-up de saída e calculadora da home (trocar por Apps Script).
4. Depois: enriquecimento (Serper/Places), PDF anexado (Chromium na Vercel + e-mail), Analytics/Ads (acesso pendente), `npm audit`, code-splitting, revogar tokens antigos.

## Regras que valem
- Não editar código fora de `sbf-manus-website`. Nunca commitar segredos. Ficha do lead é interna. Só dados públicos da empresa no enriquecimento.
- Testar em navegador (desktop e celular) antes de publicar; validar PDF quando mexer na página completa.
