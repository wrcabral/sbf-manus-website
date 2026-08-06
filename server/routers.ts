import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";
import { invokeLLM } from "./_core/llm";
import { getDb } from "./db";
import { leads, articles } from "../drizzle/schema";
import { eq, desc } from "drizzle-orm";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  // Formulário de contato principal
  contact: router({
    send: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().optional(),
        company: z.string().optional(),
        subject: z.string().optional(),
        message: z.string().min(1),
      }))
      .mutation(async ({ input }) => {
        const { name, email, phone, company, subject, message } = input;
        const db = await getDb();
        if (db) {
          await db.insert(leads).values({ name, email, phone, company, message, source: "contact_form" });
        }
        await notifyOwner({
          title: `[SBF Site] Nova mensagem de ${name} — ${subject || "Contato"}`,
          content: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone || "Não informado"}\nEmpresa: ${company || "Não informada"}\nAssunto: ${subject || "Não informado"}\n\nMensagem:\n${message}\n\n---\nEnviado pelo site sbfcontabilidade.com.br\nE-mail de resposta: ${email}\nPara: bruno.fonseca@sbfcontabilidade.com.br`,
        });
        return { success: true, recipientEmail: "bruno.fonseca@sbfcontabilidade.com.br" };
      }),
  }),

  // Leads do pop-up de saída e calculadora
  leads: router({
    capture: publicProcedure
      .input(z.object({
        name: z.string().optional(),
        email: z.string().email(),
        phone: z.string().optional(),
        company: z.string().optional(),
        source: z.enum(["exit_popup", "calculator", "contact_form"]).default("exit_popup"),
        faturamento: z.string().optional(),
        regime: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (db) {
          await db.insert(leads).values(input);
        }
        await notifyOwner({
          title: `[SBF Site] Novo lead (${input.source}) — ${input.email}`,
          content: `E-mail: ${input.email}\nNome: ${input.name || "Não informado"}\nTelefone: ${input.phone || "Não informado"}\nEmpresa: ${input.company || "Não informada"}\nFaturamento: ${input.faturamento || "—"}\nRegime atual: ${input.regime || "—"}\nOrigem: ${input.source}`,
        });
        return { success: true };
      }),
  }),

  // Chatbot IA treinado com informações da SBF
  chat: router({
    message: publicProcedure
      .input(z.object({
        messages: z.array(z.object({
          role: z.enum(["user", "assistant"]),
          content: z.string(),
        })),
      }))
      .mutation(async ({ input }) => {
        const systemPrompt = `Você é o assistente virtual da SBF Contabilidade, um escritório de contabilidade consultiva premium localizado no Rio de Janeiro.

SOBRE A SBF:
- Fundada por Bruno Fonseca, especialista em Gestão Contábil e Tributária (FGV), com mais de 15 anos de experiência
- Formado em Contabilidade pela Moraes Junior (2005), especialista em Lucro Real
- Experiência em grandes corporações: Deloitte, Brookfield, Enel, Contax
- Endereço: Av. Ayrton Senna 2500, Sala 308 Bloco 2, Edifício Neolink, Rio de Janeiro - RJ
- WhatsApp: (21) 98865-2452
- Portal educacional: https://conectasbf.ensinio.com/browse
- YouTube: @sbfcontabilidade.com.br

SERVIÇOS OFERECIDOS:
1. Contabilidade Consultiva (Lucro Real e Presumido)
2. Planejamento Tributário (redução legal de impostos)
3. BPO Financeiro (gestão financeira terceirizada)
4. Departamento Pessoal (folha, admissão, demissão)
5. Legalização Societária (abertura, alteração, encerramento)
6. Consultoria de Negócios
7. Endereço Fiscal (endereço profissional para empresas)
8. Recuperação Fiscal (créditos tributários)

PLANOS:
- SBF Start: Contabilidade Completa, Folha de Pagamento, Fiscal e Tributário, Acesso ao Portal SBF
- SBF Consultivo (mais escolhido): Tudo do Start + Planejamento Tributário, Reuniões Trimestrais, Dashboard de BI, Suporte Prioritário
- SBF BPO+: Contabilidade Consultiva, Gestão de Contas a Pagar, Gestão de Contas a Receber, Conciliação Bancária Diária

DIFERENCIAL EXCLUSIVO: Isenção de 13º Salário para sócios — economia real de impostos.

SEGMENTOS ATENDIDOS: E-commerce, Engenharia, Turismo, Tecnologia, Saúde, Instituições Financeiras, Serviços, Consultorias.

INSTRUÇÕES:
- Responda sempre em português brasileiro
- Seja cordial, profissional e objetivo
- Para dúvidas complexas ou orçamentos, sempre convide o visitante a agendar uma consultoria gratuita via WhatsApp: (21) 98865-2452
- Não invente informações que não estão neste contexto
- Máximo de 3 parágrafos por resposta
- Se perguntarem sobre preços, diga que os valores são personalizados e convide para uma consultoria gratuita`;

        const response = await invokeLLM({
          messages: [
            { role: "system", content: systemPrompt },
            ...input.messages,
          ],
        });

        const content = response.choices?.[0]?.message?.content || "Desculpe, não consegui processar sua mensagem. Por favor, entre em contato pelo WhatsApp (21) 98865-2452.";
        return { content };
      }),
  }),

  // Blog/Artigos
  articles: router({
    list: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) return [];
      return db.select({
        id: articles.id,
        slug: articles.slug,
        title: articles.title,
        summary: articles.summary,
        category: articles.category,
        readTime: articles.readTime,
        createdAt: articles.createdAt,
      }).from(articles).where(eq(articles.published, true)).orderBy(desc(articles.createdAt)).limit(9);
    }),

    bySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return null;
        const result = await db.select().from(articles).where(eq(articles.slug, input.slug)).limit(1);
        return result[0] || null;
      }),
  }),
});

export type AppRouter = typeof appRouter;
