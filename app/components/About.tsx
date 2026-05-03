"use client";

import { useEffect, useRef } from "react";

const metrics = [
  { label: "Fakturering", pct: 60 },
  { label: "Kundehandtering", pct: 45 },
  { label: "Lønnskjøring", pct: 70 },
  { label: "Rapportering", pct: 55 },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Animate progress bars when section becomes visible
            const bars = entry.target.querySelectorAll<HTMLElement>(".progress-bar-fill");
            bars.forEach((bar) => bar.classList.add("animated"));
          }
        });
      },
      { threshold: 0.2 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="om-oss"
      ref={sectionRef}
      className="py-32 md:py-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Right orb */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--blue-mid)] opacity-[0.10] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">

          {/* Left: text */}
          <div className="reveal">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--gold)]">
              Hvem er vi
            </span>
            <h2 className="mt-3 font-extrabold text-3xl sm:text-4xl md:text-5xl -tracking-[0.02em] leading-tight text-[var(--white)]">
              Om Helkrypt AI
            </h2>
            <p className="mt-5 text-[var(--text-muted)] leading-relaxed">
              Vi er et norsk AI-selskap som hjelper bedrifter spare tid og ressurser gjennom skreddersydde automatiseringsløsninger. Fra kartlegging til ferdig implementasjon — vi er med deg hele veien.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { strong: "Norsk selskap", rest: " — vi forstår norske systemer og regelverk" },
                { strong: "Fokus på konkrete resultater", rest: " og tidsbesparelser" },
                { strong: "Fra audit til full implementasjon", rest: " — alt under ett tak" },
              ].map((item) => (
                <li key={item.strong} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 bg-[var(--gold)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" />
                    </svg>
                  </span>
                  <span className="text-[var(--white)] text-sm leading-relaxed">
                    <strong className="font-semibold">{item.strong}</strong>
                    {item.rest}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: metrics card */}
          <div className="reveal reveal-delay-1">
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-1.5 ring-1 ring-white/[0.04]">
              <div className="bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] rounded-[calc(1.5rem-6px)] p-7 sm:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)] border-l-2 border-[var(--gold)]/40">
                {/* Card header */}
                <div className="flex items-center justify-between mb-7">
                  <h3 className="font-extrabold text-base text-[var(--white)]">
                    Automatiseringsgrad
                  </h3>
                  <div className="w-7 h-7 bg-[var(--gold)]/15 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-[var(--gold)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                </div>

                {/* Progress bars */}
                <div className="space-y-5">
                  {metrics.map((m) => (
                    <div key={m.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-[var(--text-muted)]">{m.label}</span>
                        <span className="text-xs font-bold text-[var(--gold)]">{m.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                        <div
                          className="progress-bar-fill"
                          style={{ ["--target-width" as string]: `${m.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Card footer */}
                <div className="mt-7 pt-5 border-t border-white/[0.06] flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-[var(--gold)] rounded-full animate-pulse" />
                    <span className="text-[11px] text-[var(--text-muted)]">3 agenter aktive</span>
                  </div>
                  <span className="text-white/20">·</span>
                  <span className="text-[11px] text-[var(--text-muted)]">42 timer spart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
