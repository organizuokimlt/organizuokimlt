// Viešai rodome tik patvirtintus tiekėjus iš vaizdo suppliers_public
import { supabase } from "@/lib/supabase";

export const revalidate = 60;

export default async function SuppliersPage() {
  const { data, error } = await supabase.from("suppliers_public").select("*").limit(50);
  if (error) {
    return <main className="mx-auto max-w-6xl px-6 py-10">Klaida kraunant duomenis.</main>;
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-semibold mb-6">Tiekėjai</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {data && data.length > 0 ? data.map((s) => (
          <div key={s.id} className="border rounded-xl p-5">
            <div className="font-semibold">{s.company_name}</div>
            <div className="text-sm text-neutral-500">{s.category} • {s.city || "Lietuva"}</div>
            {s.description && <p className="mt-2 text-neutral-700">{s.description}</p>}
          </div>
        )) : <p>Dar nėra patvirtintų tiekėjų.</p>}
      </div>
    </main>
  );
}