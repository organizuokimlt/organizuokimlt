// src/app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Fonas valdomas per globals.css (hero-desktop.png / hero-mobile.png) */}
      <section className="hero relative">
        {/* 🎭 Kaukė – dabar paslėpta (opacity valdo --mask-visible) */}
        <div aria-hidden className="mask-wrap">
          <Image
            src="/logo-mask.png"
            alt="Organizuokim.lt kaukė"
            width={1200}
            height={1200}
            priority
            className="mask-img"
          />
        </div>

        {/* ✨ Tobulas centrinis tekstas */}
        <div className="grid min-h-[92svh] place-items-center px-6 text-center">
          <div className="hero-inner">
            <h1 className="hero-title">Organizuokim.lt</h1>
            <p className="hero-sub">Profesionalų kūrybos aljansas</p>
          </div>
        </div>
      </section>
    </main>
  );
}