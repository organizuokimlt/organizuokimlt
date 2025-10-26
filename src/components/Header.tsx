// src/components/Header.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header className={`site-header ${open ? "is-open" : ""}`}>
      <div className="header-inner">
        <Link className="logo" href="/">
          <img src="/logo-light.png" alt="Organizuokim.lt" />
        </Link>

        <nav className="nav">
          <Link href="/tiekejai" className="nav-link">Rask tiekėją</Link>
          <Link href="/ziniu-scena" className="nav-link">Žinių scena</Link>
          <Link href="/apie" className="nav-link">Kodėl mes?</Link>
          <Link href="/tapk-tiekeju" className="cta">Tapk tiekėju / Prisijungti</Link>
        </nav>

        <button
          aria-label="Meniu"
          className="burger"
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="mobile-panel">
        <Link href="/tiekejai" onClick={() => setOpen(false)} className="m-link">Rask tiekėją</Link>
        <Link href="/ziniu-scena" onClick={() => setOpen(false)} className="m-link">Žinių scena</Link>
        <Link href="/apie" onClick={() => setOpen(false)} className="m-link">Kodėl mes?</Link>
        <Link href="/tapk-tiekeju" onClick={() => setOpen(false)} className="m-cta">Tapk tiekėju / Prisijungti</Link>
      </div>
    </header>
  );
}