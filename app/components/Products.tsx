"use client";

import { useEffect, useRef } from "react";

const cards = [
  {
    colSpan: "md:col-span-5",
    icon: (
      <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Automatisering",
    description: "Vi automatiserer manuelle prosesser med AI — spar 5+ timer per uke på oppgaver som ikke trenger et menneske.",
    delay: "",
    glow: false,
  },
  {
    colSpan: "md:col-span-7",
    icon: (
      <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Skreddersydde løsninger",
    description: "Ingen bedrift er lik. Vi bygger AI-løsninger skreddersydd til din bransje, dine systemer og dine behov — fra analyse til ferdig implementering.",
    delay: "reveal-delay-1",
    glow: false,
  },
  {
    colSpan: "md:col-span-7",
    icon: (
      <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "AI-konsultasjon",
    description: "Strategisk rådgivning om hvor og hvordan AI gir deg størst effekt. Vi kartlegger potensial og leverer en konkret handlingsplan.",
    delay: "reveal-delay-2",
    glow: false,
  },
  {
    colSpan: "md:col-span-5",
    icon: (
      <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: "Webdesign",
    description: "Moderne hjemmesider optimalisert for PC, telefon, SEO, GEO og AIO.",
    delay: "reveal-delay-3",
    glow: true,
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tjenester"
      ref={sectionRef}
      className="py-32 md:py-40 px-6 md:px-12 max-w-6xl mx-auto"
    >
      {/* Section header */}
      <div className="reveal mb-16">
        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--gold)]">
          Hva vi tilbyr
        </span>
        <h2 className="mt-3 font-extrabold text-3xl sm:text-4xl md:text-5xl -tracking-[0.02em] text-[var(--white)]">
          AI-tjenester tilpasset<br />din bedrift
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {cards.map((card) => (
          <div key={card.title} className={`reveal ${card.delay} ${card.colSpan}`}>
            <div className={`h-full bg-white/[0.03] border border-white/[0.06] rounded-3xl p-1.5 ring-1 ring-white/[0.04] ${card.glow ? "relative overflow-hidden" : ""}`}>
              {card.glow && (
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-[var(--blue-mid)] opacity-[0.18] rounded-full blur-2xl pointer-events-none" />
              )}
              <div className={`h-full bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] rounded-[calc(1.5rem-6px)] p-7 sm:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)] hover:shadow-[inset_0_1px_1px_rgba(201,162,39,0.18)] transition-shadow duration-700 border-l-2 border-[var(--gold)]/40 ${card.glow ? "relative z-10" : ""}`}>
                <div className="w-11 h-11 bg-[var(--gold)]/15 rounded-xl flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="font-extrabold text-xl text-[var(--white)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
