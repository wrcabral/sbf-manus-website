import { useState } from "react";

// Envio de leads pelo Google Apps Script (o mesmo do formulário de contato e do simulador).
// O corpo vai em texto puro, sem Content-Type, para evitar o preflight de CORS
// (o Apps Script não responde a OPTIONS). O script grava na planilha e avisa por e-mail.
export const LEADS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbyLT3tloJIIVcie9pNq5j_VxeeahOn-NI7mPlTr4N5wWUfQftObp0mMw1i2KrroXlM/exec";

export type LeadInput = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  source?: string;
  message?: string;
  // campos extras da calculadora, anexados à mensagem
  faturamento?: string;
  regime?: string;
};

const SUBJECT_BY_SOURCE: Record<string, string> = {
  exit_popup: "Pop-up de saída",
  calculator: "Calculadora de economia",
};

export async function sendLead(input: LeadInput): Promise<void> {
  const { faturamento, regime, ...rest } = input;
  const extra = [faturamento && `Faturamento: ${faturamento}`, regime && `Regime: ${regime}`]
    .filter(Boolean)
    .join(" | ");
  const source = rest.source ?? "site";
  const body = {
    name: "",
    email: "",
    phone: "",
    company: "",
    ...rest,
    source,
    subject: rest.subject ?? SUBJECT_BY_SOURCE[source] ?? "Contato pelo site",
    message: [rest.message, extra].filter(Boolean).join(" — "),
  };

  // Falha de rede lança erro aqui; o chamador mostra a mensagem de erro ao visitante.
  const res = await fetch(LEADS_ENDPOINT, { method: "POST", body: JSON.stringify(body) });
  if (!res.ok) throw new Error(`Lead não enviado (HTTP ${res.status})`);
  try {
    const json = await res.json();
    if (json && json.result && json.result !== "success") throw new Error("Lead recusado pelo script");
  } catch (e) {
    // Resposta ilegível (ex.: CORS na resposta) não significa falha: o envio foi feito.
    if (e instanceof Error && e.message === "Lead recusado pelo script") throw e;
  }
}

// Mesma forma de uso do useMutation do tRPC (mutate + isPending), para trocar sem mexer no resto.
export function useLeadMutation(opts: { onSuccess?: () => void; onError?: (e: unknown) => void } = {}) {
  const [isPending, setIsPending] = useState(false);
  const mutate = (input: LeadInput) => {
    setIsPending(true);
    sendLead(input)
      .then(() => opts.onSuccess?.())
      .catch((e) => {
        console.error("[lead]", e);
        opts.onError?.(e);
      })
      .finally(() => setIsPending(false));
  };
  return { mutate, isPending };
}
