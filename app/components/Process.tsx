"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "1",
    title: "Kartlegging",
    desc: "Vi starter med å forstå bedriften din, prosessene og flaskehalsene.",
    badge: "Gratis 30-min samtale",
    delay: "",
  },
  {
    num: "2",
    title: "Løsningsdesign",
    desc: "Vi designer en skreddersydd AI-løsning basert på dine behov og eksisterende systemer.",
    badge: null,
    delay: "reveal-delay-1",
  },
  {
    num: "3",
    title: "Implementering",
    desc: "Vi bygger, tester og ruller ut løsningen — og sørger for at teamet ditt kan bruke den.",
    badge: null,
    delay: "reveal-delay-2",
  },
];

export default function Process() {
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
      id="prosess"
      ref={sectionRef}
      className="py-32 md:py-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Left orb */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--blue-mid)] opacity-[0.10] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal text-center mb-20">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--gold)]">
            Vår metodikk
          </span>
          <h2 className="mt-3 font-extrabold text-3xl sm:text-4xl md:text-5xl -tracking-[0.02em] text-[var(--white)]">
            Slik jobber vi
          </h2>
          <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
            Fra første samtale til ferdig løsning — en tydelig prosess uten overraskelser.
          </p>
        </div>

        {/* 3-stegs prosess */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {steps.map((step) => (
            <div key={step.num} className={`reveal ${step.delay} relative`}>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-1.5 ring-1 ring-white/[0.04] h-full">
                <div className="bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] rounded-[calc(1.5rem-6px)] p-7 sm:p-8 h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)] hover:shadow-[inset_0_1px_1px_rgba(201,162,39,0.18)] transition-shadow duration-700">
                  {/* Step number */}
                  <div className="w-10 h-10 rounded-full border-2 border-[var(--gold)]/60 flex items-center justify-center mb-6 relative z-10 bg-[var(--navy-dark)]">
                    <span className="font-extrabold text-[var(--gold)] text-sm">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-xl text-[var(--white)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
                    {step.desc}
                  </p>
                  {step.badge && (
                    <div className="mt-5 inline-flex items-center gap-2 bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-[4px] px-3 py-1">
                      <svg className="w-3 h-3 text-[var(--gold)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[var(--gold)] text-[11px] font-bold uppercase tracking-[0.15em]">{step.badge}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
