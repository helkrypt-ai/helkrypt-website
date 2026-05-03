"use client";

import { useEffect, useRef } from "react";

export default function WebDesign() {
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
      id="hjemmesider"
      ref={sectionRef}
      className="relative py-32 md:py-40 px-6 md:px-12 overflow-hidden"
    >
      {/* Large blue orb */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[var(--blue-mid)] opacity-[0.10] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left: text */}
          <div className="reveal">
            <h2 className="mt-0 font-extrabold text-3xl sm:text-4xl md:text-5xl -tracking-[0.02em] leading-tight text-[var(--white)]">
              Vi designer profesjonelle hjemmesider for bedriften din
            </h2>
            <p className="mt-5 text-[var(--text-muted)] leading-relaxed">
              En moderne, rask og søkemotoroptimalisert hjemmeside er ditt viktigste salgsverktøy. Vi leverer design og kode — du trenger bare å godkjenne resultatet.
            </p>

            {/* Feature list */}
            <ul className="mt-8 space-y-4">
              {[
                {
                  title: "PC & Mobil",
                  desc: "Responsivt design som ser perfekt ut på alle skjermstørrelser",
                },
                {
                  title: "SEO-optimalisert",
                  desc: "Teknisk SEO, strukturert data og innholdsoptimalisering innebygd fra dag én",
                },
                {
                  title: "GEO & AIO",
                  desc: "Optimalisert for lokal synlighet og AI-søkemotorer (ChatGPT, Perplexity)",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 bg-[var(--gold)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" />
                    </svg>
                  </span>
                  <div>
                    <span className="text-[var(--white)] font-semibold text-sm">{item.title}</span>
                    <p className="text-[var(--text-muted)] text-sm mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#kontakt"
              className="group mt-10 inline-flex items-center gap-3 bg-[var(--gold)] text-[var(--navy-dark)] font-bold text-[13px] tracking-[0.05em] rounded-[4px] px-7 py-3.5 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Design hjemmesiden din
              <span className="w-7 h-7 bg-black/10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-sm">
                →
              </span>
            </a>
          </div>

          {/* Right: Browser mockup med scroll-animasjon */}
          <div className="reveal reveal-delay-1">
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-1.5 ring-1 ring-white/[0.04]">
              <div className="bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] rounded-[calc(1.5rem-6px)] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)]">
                {/* Faux browser chrome */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                  <div className="ml-3 flex-1 h-5 bg-white/5 rounded-full flex items-center px-3">
                    <span className="text-[var(--text-muted)] text-[9px] truncate">helkrypt.no</span>
                  </div>
                </div>

                {/* Scrolling site preview */}
                <div className="browser-scroll-track bg-[var(--navy-deep)] rounded-lg">
                  <div className="browser-scroll-content px-3 pt-3">
                    {/* Nav bar simulation */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="h-2.5 w-16 bg-[var(--gold)]/40 rounded-full" />
                      <div className="flex gap-1.5">
                        <div className="h-2 w-10 bg-white/10 rounded-full" />
                        <div className="h-2 w-10 bg-white/10 rounded-full" />
                        <div className="h-2 w-10 bg-white/10 rounded-full" />
                      </div>
                    </div>
                    {/* Hero block */}
                    <div className="mt-3 text-center space-y-1.5 py-4 border-b border-white/[0.04]">
                      <div className="h-5 w-2/3 bg-white/15 rounded-lg mx-auto" />
                      <div className="h-3 w-1/2 bg-white/[0.08] rounded mx-auto" />
                      <div className="mt-2 h-6 w-24 bg-[var(--gold)]/40 rounded-full mx-auto" />
                    </div>
                    {/* Features row */}
                    <div className="mt-3 grid grid-cols-3 gap-2 py-3 border-b border-white/[0.04]">
                      <div className="h-12 bg-white/[0.05] rounded-xl" />
                      <div className="h-12 bg-white/[0.05] rounded-xl" />
                      <div className="h-12 bg-white/[0.05] rounded-xl" />
                    </div>
                    {/* Text content block */}
                    <div className="mt-3 space-y-1.5 py-3 border-b border-white/[0.04]">
                      <div className="h-3 w-full bg-white/[0.06] rounded" />
                      <div className="h-3 w-5/6 bg-white/[0.06] rounded" />
                      <div className="h-3 w-4/5 bg-white/[0.06] rounded" />
                    </div>
                    {/* CTA block */}
                    <div className="mt-3 flex gap-2 py-3">
                      <div className="h-6 w-20 bg-[var(--gold)]/35 rounded-full" />
                      <div className="h-6 w-16 bg-white/5 rounded-full" />
                    </div>
                    {/* Footer block */}
                    <div className="mt-2 flex items-center justify-between py-2 border-t border-white/[0.04]">
                      <div className="h-2 w-12 bg-white/10 rounded-full" />
                      <div className="flex gap-1">
                        <div className="h-2 w-8 bg-white/5 rounded-full" />
                        <div className="h-2 w-8 bg-white/5 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics bar */}
                <div className="mt-4 flex gap-4 pt-3 border-t border-white/[0.06]">
                  {[
                    { val: "100", label: "SEO" },
                    { val: "<2s", label: "Lastetid" },
                    { val: "A+", label: "Tilgjengelighet" },
                  ].map((m) => (
                    <div key={m.label} className="text-center flex-1">
                      <div className="text-[var(--gold)] font-extrabold text-base">
                        {m.val}
                      </div>
                      <div className="text-[var(--text-muted)] text-[10px] mt-0.5 uppercase tracking-[0.15em]">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
