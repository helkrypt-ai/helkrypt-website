"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
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
      ref={sectionRef}
      className="relative min-h-[90dvh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Radial blue glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--blue-mid)] opacity-[0.10] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <span className="reveal inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--gold)] mb-6">
          AI-automatisering for norske SMB-er
        </span>

        {/* H1 */}
        <h1 className="reveal reveal-delay-1 font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] -tracking-[0.02em] text-[var(--white)]">
          Spar 5+ timer<br />
          <span className="text-[var(--gold)] italic">hver uke</span> med AI
        </h1>

        {/* Subheading */}
        <p className="reveal reveal-delay-2 mt-6 text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
          Vi hjelper norske bedrifter å automatisere manuelle prosesser med skreddersydde AI-løsninger — fra analyse til ferdig implementering.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-3 bg-[var(--gold)] text-[var(--navy-dark)] font-bold text-[13px] tracking-[0.05em] rounded-[4px] px-7 py-3.5 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Book en samtale
            <span className="w-6 h-6 bg-black/15 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 text-sm">
              →
            </span>
          </a>
          <a
            href="#tjenester"
            className="inline-flex items-center gap-2 border border-[var(--blue-mid)]/60 text-[var(--white)] text-[13px] font-semibold tracking-[0.05em] rounded-[4px] px-7 py-3.5 transition-all duration-300 hover:border-[var(--blue-light)] hover:bg-[var(--blue-mid)]/10"
          >
            Se hva vi tilbyr
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="reveal reveal-delay-4 absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-[var(--gold)] to-transparent mx-auto" />
      </div>
    </section>
  );
}
