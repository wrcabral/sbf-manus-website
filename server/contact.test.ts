import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the notifyOwner function
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("contact.send", () => {
  it("should send a contact message with all fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.send({
      name: "João Silva",
      email: "joao@empresa.com.br",
      phone: "(21) 99999-9999",
      company: "Empresa Teste LTDA",
      subject: "abertura",
      message: "Gostaria de abrir minha empresa com a SBF.",
    });

    expect(result).toEqual({ success: true, recipientEmail: "bruno.fonseca@sbfcontabilidade.com.br" });
  });

  it("should send a contact message with only required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.send({
      name: "Maria Santos",
      email: "maria@email.com",
      message: "Tenho interesse em trocar de contador.",
    });

    expect(result).toEqual({ success: true, recipientEmail: "bruno.fonseca@sbfcontabilidade.com.br" });
  });

  it("should reject message with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.send({
        name: "Pedro",
        email: "email-invalido",
        message: "Mensagem de teste",
      })
    ).rejects.toThrow();
  });

  it("should reject message with empty name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.send({
        name: "",
        email: "pedro@email.com",
        message: "Mensagem de teste",
      })
    ).rejects.toThrow();
  });

  it("should reject message with empty message body", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.send({
        name: "Pedro",
        email: "pedro@email.com",
        message: "",
      })
    ).rejects.toThrow();
  });
});
