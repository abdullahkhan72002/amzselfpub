import { getPpcDetails } from "@/lib/ppc";

export async function submitLead(form: HTMLFormElement, formName: string) {
  const fields = Object.fromEntries(new FormData(form).entries());
  const response = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      formName,
      fields,
      ppc: getPpcDetails(),
    }),
  });

  if (!response.ok) {
    throw new Error("Could not send your message.");
  }

  window.location.assign("/thank-you");
}
