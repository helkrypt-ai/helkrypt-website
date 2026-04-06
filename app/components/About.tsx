import { Translations } from "../i18n";

interface AboutProps {
  t: Translations;
}

export default function About({ t }: AboutProps) {
  return (
    <section id="about" className="relative py-28 bg-[#09090b]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              {t.about.sectionTitle}
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              {t.about.body}
            </p>

            {/* Highlights */}
            <ul className="space-y-4">
              {t.about.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-300 text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual side — Mock dashboard */}
          <div className="relative">
            <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-8 glow">
              <div className="text-xs font-semibold text-zinc-500 mb-6 uppercase tracking-widest">
                Automatiseringsgrad
              </div>

              <div className="space-y-5">
                {[
                  { label: "Fakturering", pct: 94, color: "bg-indigo-500" },
                  { label: "Kundehåndtering", pct: 78, color: "bg-violet-500" },
                  { label: "Lønnskjøring", pct: 100, color: "bg-emerald-500" },
                  { label: "Rapportering", pct: 85, color: "bg-cyan-500" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-zinc-400">{item.label}</span>
                      <span className="text-white font-semibold">{item.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-sm text-zinc-500">3 agenter aktive</span>
                </div>
                <span className="text-sm font-semibold text-emerald-400">42 timer spart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
