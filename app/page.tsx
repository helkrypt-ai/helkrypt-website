"use client";

import { useState } from "react";
import { translations, Locale } from "./i18n";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("no");
  const t = translations[locale];

  return (
    <main className="min-h-screen">
      <Navbar t={t} locale={locale} onLocaleChange={setLocale} />
      <Hero t={t} />
      <Products t={t} />
      <About t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </main>
  );
}
