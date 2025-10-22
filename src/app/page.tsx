import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="flex items-center gap-4 mb-10">
        <div className="logo-aura">
          <div className="logo-card">
            <img
              src="/logo.png"
              alt="Organizuokim.lt"
              className="h-12 md:h-14 w-auto"
              loading="eager"
            />
          </div>
        </div>

        <div className="h-6 w-px" style={{ backgroundColor: "rgba(182,140,44,0.6)" }} />
        <span className="text-sm tracking-wide" style={{ color: "var(--foreground)" }}>
          Renginių tiekėjų portalas
        </span>
      </header>

      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Rask ir užsakyk <span style={{ color: "var(--gold)" }}>renginių tiekėjus</span> vienoje vietoje
          </h1>
          <p className="mt-4 text-lg" style={{ color: "rgba(0,0,0,0.6)" }}>
            Fotografai, muzikantai, vedėjai, dekoratoriai, vietos – viskas Organizuokim.lt
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/tapk-tiekeju"
              className="inline-flex items-center rounded-md px-5 py-3 text-black font-medium hover:opacity-90"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Tapkite tiekėju
            </Link>
            <Link
              href="/tiekejai"
              className="inline-flex items-center rounded-md border px-5 py-3 font-medium hover:bg-neutral-50"
              style={{ borderColor: "rgba(0,0,0,0.18)", color: "var(--foreground)" }}
            >
              Peržiūrėti tiekėjus
            </Link>
          </div>
        </div>

        <div
          className="rounded-2xl border p-6"
          style={{ borderColor: "rgba(0,0,0,0.15)", background: "transparent", color: "var(--foreground)" }}
        >
          <h3 className="font-semibold mb-2">Greita paieška</h3>
          <form action="/tiekejai" className="grid gap-3">
            <input
              className="border rounded-md px-3 py-2"
              placeholder="Kategorija (pvz. Fotografai)"
              style={{ borderColor: "rgba(0,0,0,0.18)", background: "transparent", color: "var(--foreground)" }}
            />
            <input
              className="border rounded-md px-3 py-2"
              placeholder="Miestas (pvz. Vilnius)"
              style={{ borderColor: "rgba(0,0,0,0.18)", background: "transparent", color: "var(--foreground)" }}
            />
            <button
              className="rounded-md px-4 py-2 hover:opacity-90"
              type="submit"
              style={{ background: "#000", color: "#fff", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              Ieškoti
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}