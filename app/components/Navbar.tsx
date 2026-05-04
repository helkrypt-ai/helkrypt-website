"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const anchor = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center mt-5 px-4">
      <nav
        className={`w-full max-w-5xl flex items-center justify-between bg-[var(--navy)]/80 backdrop-blur-2xl border border-white/10 rounded-full px-5 py-3 ${menuOpen ? "nav-open" : ""}`}
      >
        {/* Logo */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center">
          <Image
            src="/helkrypt-logo-white.png"
            alt="Helkrypt AI"
            width={120}
            height={32}
            className="h-7 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href={anchor("tjenester")}
            className="text-[var(--text-muted)] hover:text-[var(--white)] text-sm transition-colors duration-300"
          >
            Tjenester
          </a>
          <a
            href={anchor("om-oss")}
            className="text-[var(--text-muted)] hover:text-[var(--white)] text-sm transition-colors duration-300"
          >
            Om oss
          </a>
          <Link
            href="/blogg"
            className="text-[var(--text-muted)] hover:text-[var(--white)] text-sm transition-colors duration-300"
          >
            Blogg
          </Link>
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={anchor("kontakt")}
            className="hidden md:inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--navy-dark)] text-[13px] font-bold tracking-[0.05em] rounded-[4px] px-5 py-2.5 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Book en samtale
          </a>

          {/* Hamburger */}
          <button
            id="hamburger-btn"
            aria-label="Meny"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              id="nav-line-1"
              className="w-5 h-px bg-[var(--white)] block origin-center"
              style={menuOpen ? { transform: "translateY(6px) rotate(45deg)" } : {}}
            />
            <span
              id="nav-line-2"
              className="w-5 h-px bg-[var(--white)] block"
              style={menuOpen ? { opacity: 0 } : {}}
            />
            <span
              id="nav-line-3"
              className="w-5 h-px bg-[var(--white)] block origin-center"
              style={menuOpen ? { transform: "translateY(-6px) rotate(-45deg)" } : {}}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 bg-[var(--navy)]/95 backdrop-blur-2xl border border-white/10 rounded-3xl px-6 py-8 flex flex-col gap-6 z-50">
          <a
            href={anchor("tjenester")}
            className="text-[var(--white)] font-semibold text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Tjenester
          </a>
          <a
            href={anchor("om-oss")}
            className="text-[var(--white)] font-semibold text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Om oss
          </a>
          <Link
            href="/blogg"
            className="text-[var(--white)] font-semibold text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Blogg
          </Link>
          <a
            href={anchor("kontakt")}
            className="inline-flex items-center justify-center bg-[var(--gold)] text-[var(--navy-dark)] text-[13px] font-bold tracking-[0.05em] rounded-[4px] px-6 py-3 mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Book en samtale
          </a>
        </div>
      )}
    </header>
  );
}
