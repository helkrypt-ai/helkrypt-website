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
    { href: "#products", label: t.nav.products },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="font-bold text-gray-900 text-lg tracking-tight">
              Helkrypt<span className="text-indigo-600"> AI</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Locale switcher + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onLocaleChange(locale === "no" ? "en" : "no")}
              className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors border border-gray-200 rounded-md px-3 py-1.5"
            >
              {locale === "no" ? "EN" : "NO"}
            </button>
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-600 hover:text-indigo-600"
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
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-indigo-600 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              onLocaleChange(locale === "no" ? "en" : "no");
              setMenuOpen(false);
            }}
            className="text-sm font-medium text-gray-500 border border-gray-200 rounded-md px-3 py-1.5 w-fit"
          >
            {locale === "no" ? "Switch to English" : "Bytt til norsk"}
          </button>
        </div>
      )}
    </nav>
  );
}
