import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="flex items-center gap-4 mb-10">
        <img src="/logo.png" alt="Organizuokim.lt" className="h-10 w-auto" />
        <div className="h-6 w-px bg-[#B68C2C99]" />
        <span className="text-sm tracking-wide text-neutral-600">
          Renginių tiekėjų portalas
        </span>
      </header>

      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Rask ir užsakyk <span className="text-[#B68C2C]">renginių tiekėjus</span> vienoje vietoje
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Fotografai, muzikantai, vedėjai, dekoratoriai, vietos – viskas Organizuokim.lt
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/tapk-tiekeju"
              className="inline-flex items-center rounded-md bg-[#B68C2C] px-5 py-3 text-white font-medium hover:opacity-90"
            >
              Tapkite tiekėju
            </Link>
            <Link
              href="/tiekejai"
              className="inline-flex items-center rounded-md border border-neutral-300 px-5 py-3 font-medium hover:bg-neutral-50"
            >
              Peržiūrėti tiekėjus
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-6">
          <h3 className="font-semibold mb-2">Greita paieška</h3>
          <form action="/tiekejai" className="grid gap-3">
            <input className="border rounded-md px-3 py-2" placeholder="Kategorija (pvz. Fotografai)" />
            <input className="border rounded-md px-3 py-2" placeholder="Miestas (pvz. Vilnius)" />
            <button className="rounded-md bg-black text-white px-4 py-2 hover:opacity-90" type="submit">
              Ieškoti
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}