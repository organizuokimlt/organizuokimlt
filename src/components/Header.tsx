"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../app/globals.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        {/* Logo (uždaro mobilų meniu paspaudus) */}
        <div className="logo" onClick={() => setOpen(false)}>
          <Link href="/">
            <Image
              src="/logo-light.png"
              alt="Organizuokim.lt"
              width={180}
              height={60}
              className="logo-img"
              priority
            />
          </Link>
        </div>

        {/* Burger */}
        <button
          className="burger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Desktop meniu */}
        <nav className="nav">
          <Link href="/tiekejai" className="nav-link link-rask">Rask tiekėją</Link>
          <Link href="/ziniu-scena" className="nav-link link-zinios">Žinių scena</Link>
          <Link href="/apie" className="nav-link link-kodel">Kodėl mes?</Link>
          <Link href="/tapk-tiekeju" className="nav-link link-tapk">Tapk tiekėju / Prisijungti</Link>
        </nav>
      </header>

      {/* Mobile dropdown + backdrop (uždaro paspaudus šalia) */}
      {open && (
        <>
          <button className="menu-backdrop" onClick={() => setOpen(false)} aria-label="Close menu"></button>
          <div className="mobile-menu">
            <Link href="/tiekejai" onClick={() => setOpen(false)}>
              <p>Rask tiekėją</p>
              <small>Paslaugų tiekėjų katalogas</small>
            </Link>
            <Link href="/ziniu-scena" onClick={() => setOpen(false)}>
              <p>Žinių scena</p>
              <small>Dalinkis patirtimi ir įžvalgomis</small>
            </Link>
            <Link href="/apie" onClick={() => setOpen(false)}>
              <p>Kodėl mes?</p>
              <small>Kas mes ir kodėl verta jungtis</small>
            </Link>
            <Link href="/tapk-tiekeju" onClick={() => setOpen(false)}>
              <p>Tapk tiekėju / Prisijungti</p>
              <small>Registracija ar prisijungimas tiekėjams</small>
            </Link>
          </div>
        </>
      )}
    </>
  );
}