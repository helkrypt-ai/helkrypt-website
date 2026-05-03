import { Translations } from "../i18n";

interface ArticleCTAProps {
  t: Translations;
}

export default function ArticleCTA({ t }: ArticleCTAProps) {
  return (
    <div className="relative rounded-[8px] bg-[var(--surface-card)] border-l-4 border border-[var(--gold)]/30 border-l-[var(--gold)] p-8 sm:p-10 mt-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--blue-mid)] opacity-[0.18] rounded-full blur-[80px]" />

      <div className="relative">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--gold)] mb-3">
          Helkrypt AI
        </span>
        <h3 className="text-2xl font-extrabold text-[var(--white)] mb-3">
          {t.blog.ctaTitle}
        </h3>
        <p className="text-[var(--text-muted)] mb-6 max-w-xl">{t.blog.ctaSub}</p>
        <a
          href="https://calendly.com/helkrypt/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--navy-dark)] font-bold text-[13px] tracking-[0.05em] uppercase px-6 py-3 rounded-[4px] transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
        >
          {t.blog.ctaButton}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
