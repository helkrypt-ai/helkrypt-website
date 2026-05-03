"use client";

import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceType: "",
    website: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          serviceType: formData.serviceType,
          website: formData.website,
          message: formData.message,
        }),
      });
    } catch {
      // Silently fail
    }
    setSubmitted(true);
    setLoading(false);
  };

  const inputClass =
    "bg-white/[0.04] border border-[var(--border-subtle)] rounded-[6px] px-4 py-3 text-sm text-[var(--white)] placeholder:text-[var(--text-muted)]/70 outline-none focus:border-[var(--blue-light)]/60 focus:ring-1 focus:ring-[var(--blue-light)]/40 transition-all duration-300 w-full";

  const labelClass = "text-xs font-bold text-[var(--gold)] uppercase tracking-[0.18em]";

  return (
    <section
      id="kontakt"
      ref={sectionRef}
      className="py-32 md:py-40 px-6 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[var(--blue-mid)] opacity-[0.10] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="reveal text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--gold)]">
            Kom i gang
          </span>
          <h2 className="mt-4 font-extrabold text-3xl sm:text-4xl md:text-5xl -tracking-[0.02em] text-[var(--white)]">
            Ta kontakt med oss
          </h2>
          <p className="mt-5 text-[var(--text-muted)]">
            Fyll ut skjemaet nedenfor, så tar vi kontakt innen 24 timer for en gratis samtale om hva AI kan gjøre for din bedrift.
          </p>
        </div>

        <div className="reveal reveal-delay-1 mt-12">
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-1.5 ring-1 ring-white/[0.04]">
            <div className="bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] rounded-[calc(1.5rem-6px)] p-8 sm:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)] border-l-2 border-[var(--gold)]/40">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-[var(--gold)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-extrabold text-xl text-[var(--white)] mb-2">
                    Takk! Vi tar kontakt innen kort tid.
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm">
                    Vi har mottatt din henvendelse og vil følge opp innen 24 timer.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>Navn</label>
                      <input
                        type="text"
                        required
                        placeholder="Ola Nordmann"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>Bedrift</label>
                      <input
                        type="text"
                        placeholder="Bedriften AS"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>E-post</label>
                      <input
                        type="email"
                        required
                        placeholder="ola@bedriften.no"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>
                        Telefon <span className="normal-case text-[var(--text-muted)]/70">(valgfritt)</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+47 000 00 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>Hva trenger du hjelp med?</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled className="bg-[#0f1b2d] text-white">Velg en tjeneste…</option>
                      <option value="automatisering" className="bg-[#0f1b2d] text-white">Automatisering</option>
                      <option value="skreddersydd" className="bg-[#0f1b2d] text-white">Skreddersydde løsninger</option>
                      <option value="konsultasjon" className="bg-[#0f1b2d] text-white">AI-konsultasjon</option>
                      <option value="webdesign" className="bg-[#0f1b2d] text-white">Webdesign / Hjemmeside</option>
                      <option value="annet" className="bg-[#0f1b2d] text-white">Annet</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>
                      Nettside <span className="normal-case text-[var(--text-muted)]/70">(valgfritt)</span>
                    </label>
                    <input
                      type="url"
                      placeholder="https://bedriften.no"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>
                      Melding <span className="normal-case text-[var(--text-muted)]/70">(valgfritt)</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Fortell oss litt om din bedrift og hva du ønsker å oppnå…"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${inputClass} min-h-[100px]`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full inline-flex items-center justify-center gap-3 bg-[var(--gold)] text-[var(--navy-dark)] font-bold text-[13px] tracking-[0.05em] uppercase rounded-[4px] px-7 py-4 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sender…
                      </>
                    ) : (
                      <>
                        Send henvendelse
                        <span className="w-6 h-6 bg-black/10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:translate-x-0.5 text-xs">
                          →
                        </span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-[var(--text-muted)]">
                    Ingen binding · Vi svarer innen 24 timer ·{" "}
                    <span className="text-[var(--gold)]">100% konfidensielt</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
