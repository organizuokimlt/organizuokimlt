"use client";
import { useState } from "react";

export default function SupplierForm() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const formData = new FormData(e.currentTarget);
    const res = await fetch("/api/supplier", { method: "POST", body: formData });
    setState(res.ok ? "ok" : "err");
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-10">
      <h1 className="text-3xl font-semibold mb-6">Tapkite tiekėju</h1>
      <form onSubmit={onSubmit} className="grid gap-4">
        <input name="company_name" required placeholder="Įmonės pavadinimas" className="border rounded-md px-3 py-2" />
        <input name="contact_name" required placeholder="Kontaktinis asmuo" className="border rounded-md px-3 py-2" />
        <input type="email" name="email" required placeholder="El. paštas" className="border rounded-md px-3 py-2" />
        <input name="phone" placeholder="Telefonas" className="border rounded-md px-3 py-2" />
        <input name="city" placeholder="Miestas" className="border rounded-md px-3 py-2" />
        <input name="category_name" placeholder="Kategorija (pvz. Fotografai)" className="border rounded-md px-3 py-2" />
        <textarea name="description" placeholder="Aprašymas" className="border rounded-md px-3 py-2" rows={4} />
        <button
          disabled={state === "sending"}
          className="rounded-md bg-[#B68C2C] text-white px-4 py-2 hover:opacity-90"
        >
          {state === "sending" ? "Siunčiama..." : "Pateikti"}
        </button>
        {state === "ok" && <p className="text-green-600">Ačiū! Susisieksime netrukus.</p>}
        {state === "err" && <p className="text-red-600">Įvyko klaida. Pabandykite dar kartą.</p>}
      </form>
    </main>
  );
}