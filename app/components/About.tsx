import { Translations } from "../i18n";

interface AboutProps {
  t: Translations;
}

export default function About({ t }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t.about.sectionTitle}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{t.about.body}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {t.about.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-extrabold text-indigo-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual side */}
          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 p-8 text-white shadow-2xl">
              <div className="text-sm font-semibold text-indigo-200 mb-4 uppercase tracking-widest">
                Helkrypt AI Dashboard
              </div>
              {/* Mock dashboard UI */}
              <div className="space-y-4">
                {[
                  { label: "Faktura-automatisering", pct: 94, color: "bg-indigo-300" },
                  { label: "Kundehåndtering", pct: 78, color: "bg-violet-300" },
                  { label: "Lønnskjøring", pct: 100, color: "bg-emerald-300" },
                  { label: "Rapportering", pct: 85, color: "bg-blue-300" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-indigo-100">{item.label}</span>
                      <span className="text-white font-semibold">{item.pct}%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/20 flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm text-indigo-100">3 agenter kjører nå</span>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500">Spart denne måneden</div>
                <div className="font-bold text-gray-900">42 timer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
