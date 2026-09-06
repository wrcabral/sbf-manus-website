import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";
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
        message: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (db) {
          await db.insert(leads).values(input);
        }
        await notifyOwner({
          title: `[SBF Site] Novo lead (${input.source}) — ${input.email}`,
          content: `E-mail: ${input.email}\nNome: ${input.name || "Não informado"}\nTelefone: ${input.phone || "Não informado"}\nEmpresa: ${input.company || "Não informada"}\nFaturamento: ${input.faturamento || "—"}\nRegime atual: ${input.regime || "—"}\nOrigem: ${input.source}${input.message ? `\n\n${input.message}` : ""}`,
        });
        return { success: true };
      }),
  }),


  // (Chatbot removido — nao utilizado; dependia do proxy de LLM da Manus)

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
