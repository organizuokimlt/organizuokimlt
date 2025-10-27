// src/app/page.tsx
export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Organizuokim.lt</h1>
          <p className="hero-sub">Profesionalų kūrybos aljansas</p>
        </div>
        <div className="mask-wrap" aria-hidden="true">
          <img src="/logo-mask.png" alt="" className="mask-img" />
        </div>
      </section>
    </main>
  );
}