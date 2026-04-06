"use client";

import { useState } from "react";
import { Translations, Locale } from "../i18n";

interface NavbarProps {
  t: Translations;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export default function Navbar({ t, locale, onLocaleChange }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="font-semibold text-white text-lg tracking-tight">
              Helkrypt<span className="text-indigo-400"> AI</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Locale switcher + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onLocaleChange(locale === "no" ? "en" : "no")}
              className="text-sm font-medium text-zinc-500 hover:text-white transition-colors border border-zinc-800 rounded-lg px-3 py-1.5 hover:border-zinc-600"
            >
              {locale === "no" ? "EN" : "NO"}
            </button>
            <a
              href={t.hero.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#09090b]/95 backdrop-blur-xl border-t border-white/5 px-4 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-300 hover:text-white font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-white/5">
            <button
              onClick={() => {
                onLocaleChange(locale === "no" ? "en" : "no");
                setMenuOpen(false);
              }}
              className="text-sm font-medium text-zinc-500 border border-zinc-800 rounded-lg px-3 py-2"
            >
              {locale === "no" ? "Switch to English" : "Bytt til norsk"}
            </button>
            <a
              href={t.hero.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
