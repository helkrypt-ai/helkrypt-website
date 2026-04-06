"use client";

import { useLocale } from "./LocaleProvider";

export default function About() {
  const { t } = useLocale();
  return (
    <section id="about" className="relative py-28 bg-slate-50/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-300/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              {t.about.sectionTitle}
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              {t.about.body}
            </p>

            {/* Highlights */}
            <ul className="space-y-4">
              {t.about.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-5 h-5 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-600 text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual side — Mock dashboard */}
          <div className="relative">
            <div className="rounded-2xl bg-white border border-slate-200 p-8 card-shadow">
              <div className="text-xs font-semibold text-slate-400 mb-6 uppercase tracking-widest">
                Automatiseringsgrad
              </div>

              <div className="space-y-5">
                {[
                  { label: "Fakturering", pct: 94, color: "bg-indigo-500" },
                  { label: "Kundehandtering", pct: 78, color: "bg-violet-500" },
                  { label: "Lonnskjoring", pct: 100, color: "bg-emerald-500" },
                  { label: "Rapportering", pct: 85, color: "bg-cyan-500" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-500">{item.label}</span>
                      <span className="text-slate-900 font-semibold">{item.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-sm text-slate-400">3 agenter aktive</span>
                </div>
                <span className="text-sm font-semibold text-emerald-600">42 timer spart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
