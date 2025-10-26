// src/app/page.tsx  — HERO v1 (LOCKED)
export default function Home() {
  return (
    <main>
      <section className="hero">
        {/* 🎭 Kaukė — overlay (nieko nestumia) */}
        <div className="mask-wrap">
          <img
            src="/logo-mask.png"
            alt="Organizuokim.lt — kaukė"
            className="mask-img"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* ✨ Tekstai centre */}
        <div className="grid min-h-[92svh] place-items-center px-6 text-center hero-inner">
          <div>
            <h1
              className="
                hero-title
              "
            >
              Organizuokim.lt
            </h1>

            <p
              className="
                hero-sub
              "
            >
              Profesionalų kūrybos aljansas
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}