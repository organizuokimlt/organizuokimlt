// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
        {/* Kairė: logotipo kaukė + tekstas */}
        <Link href="/" className="group inline-flex items-center gap-3">
          <img
            src="/logo-mask.png"
            alt="Organizuokim.lt"
            className="h-8 w-auto drop-shadow-[0_6px_14px_rgba(0,0,0,0.55)]"
            loading="eager"
            fetchPriority="high"
          />
          <span className="text-[15px] font-semibold tracking-wide text-white/90 group-hover:text-white transition-colors">
            Organizuokim.lt
          </span>
        </Link>

        {/* Dešinė: CTA mygtukai */}
        <nav className="flex items-center gap-2">
          <Link
            href="/tiekejai"
            className="rounded-md border border-white/18 px-3 py-2 text-sm text-white/90 hover:bg-white/10 transition"
          >
            Tiekėjų katalogas
          </Link>
          <Link
            href="/tapk-tiekeju"
            className="rounded-md bg-[#B68C2C] px-3.5 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
          >
            Tapk tiekėju
          </Link>
        </nav>
      </div>
    </header>
  );
}