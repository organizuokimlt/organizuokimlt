export const runtime = "nodejs";
// Serverio maršrutas formos apdorojimui
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { transporter } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const payload = {
      company_name: String(form.get("company_name") || ""),
      contact_name: String(form.get("contact_name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      city: String(form.get("city") || ""),
      description: String(form.get("description") || ""),
    };

    // rasti kategoriją pagal pavadinimą (laisvas atitikimas)
    const categoryName = String(form.get("category_name") || "");
    let category_id: string | null = null;
    if (categoryName) {
      const { data: cat } = await supabase
        .from("categories")
        .select("id")
        .ilike("name", categoryName)
        .maybeSingle();
      category_id = cat?.id ?? null;
    }

    // įrašas į DB
    const { error } = await supabase.from("suppliers").insert([{ ...payload, category_id }]);
    if (error) throw error;

    // Laiškai (tik jei SMTP konfigūruotas .env.local)
    const smtpReady = false;
    if (smtpReady) {
      await transporter.sendMail({
        from: `"Organizuokim.lt" <${process.env.SMTP_USER}>`,
        to: "admin@organizuokim.lt",
        subject: "Nauja tiekėjo paraiška",
        text: `Įmonė: ${payload.company_name}
Kontaktas: ${payload.contact_name}
El. paštas: ${payload.email}
Telefonas: ${payload.phone}
Miestas: ${payload.city}`,
      });

      if (payload.email) {
        await transporter.sendMail({
          from: `"Organizuokim.lt" <${process.env.SMTP_USER}>`,
          to: payload.email,
          subject: "Ačiū! Gavome jūsų registraciją",
          html: `<p>Sveiki, ${payload.contact_name || "kolega"},</p>
<p>Ačiū, kad registruojatės Organizuokim.lt — Profesionalų kūrybos aljanse. Susisieksime per 1–2 d. d. patvirtinimui.</p>
<p>— Organizuokim.lt komanda</p>`,
        });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}