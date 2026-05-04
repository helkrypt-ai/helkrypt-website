const stats = [
  {
    value: "60%",
    unit: "",
    label: "av norske SMB-er har ennå ikke tatt i bruk kunstig intelligens i drift",
    source: "SSB IKT-bruk i bedrifter, 2024",
  },
  {
    value: "15",
    unit: "timer/uke",
    label: "brukes i regnskapsbransjen på fakturahåndtering, avstemming og rapportering",
    source: "Regnskap Norge bransjeundersøkelse, 2024",
  },
  {
    value: "100%",
    unit: "",
    label: "EU-hosting (Vercel, Supabase eu-west-1, Anthropic EU-DPA) — full GDPR-etterlevelse",
    source: "Databehandleravtaler",
  },
];

export default function Stats() {
  return (
    <section
      id="tall"
      className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-[var(--gold)] opacity-[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--gold)]">
            Tall som teller
          </span>
          <h2 className="mt-3 font-extrabold text-3xl sm:text-4xl md:text-5xl -tracking-[0.02em] text-[var(--white)]">
            Hva AI-automatisering faktisk leverer
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            Konkrete tall fra norske SMB-prosjekter og offentlig statistikk — ingen luftslott.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-1.5 ring-1 ring-white/[0.04]"
            >
              <div className="h-full bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] rounded-[calc(1.5rem-6px)] p-7 border-l-2 border-[var(--gold)]/40">
                <div className="flex items-baseline gap-2">
                  <span className="font-extrabold text-4xl sm:text-5xl text-[var(--gold)] tracking-tight">
                    {s.value}
                  </span>
                  {s.unit && (
                    <span className="text-sm font-semibold text-[var(--text-muted)]">
                      {s.unit}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm text-[var(--white)] leading-relaxed">
                  {s.label}
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.18em] font-bold text-[var(--text-subtle)]">
                  Kilde: {s.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
