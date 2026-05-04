import { faqItems } from "../faq-data";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-32 md:py-40 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-[var(--blue-mid)] opacity-[0.08] rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--gold)]">
            Ofte stilte spørsmål
          </span>
          <h2 className="mt-3 font-extrabold text-3xl sm:text-4xl md:text-5xl -tracking-[0.02em] text-[var(--white)]">
            Spørsmål om AI-automatisering
          </h2>
          <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
            Korte, konkrete svar på det norske SMB-eiere lurer på før de starter med AI.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <details
              key={i}
              className="group bg-white/[0.03] border border-white/[0.06] rounded-2xl ring-1 ring-white/[0.04] overflow-hidden transition-colors hover:border-[var(--gold)]/30"
            >
              <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4">
                <h3 className="font-semibold text-[var(--white)] text-base sm:text-lg leading-snug">
                  {item.question}
                </h3>
                <span className="flex-shrink-0 w-7 h-7 rounded-full border border-[var(--gold)]/40 flex items-center justify-center text-[var(--gold)] transition-transform duration-300 group-open:rotate-45">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed border-t border-white/[0.04] pt-4">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
