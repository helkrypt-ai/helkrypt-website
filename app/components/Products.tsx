import { Translations } from "../i18n";

interface ProductsProps {
  t: Translations;
}

const icons = [
  // AI Audit - magnifying glass
  <svg key="audit" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>,
  // Workshop - academic cap
  <svg key="workshop" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>,
  // Workflow - bolt
  <svg key="workflow" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  // Strategy - chart
  <svg key="strategy" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>,
];

const accentColors = [
  { border: "border-indigo-500/20", bg: "bg-indigo-500/10", text: "text-indigo-400", icon: "text-indigo-400" },
  { border: "border-violet-500/20", bg: "bg-violet-500/10", text: "text-violet-400", icon: "text-violet-400" },
  { border: "border-cyan-500/20", bg: "bg-cyan-500/10", text: "text-cyan-400", icon: "text-cyan-400" },
  { border: "border-emerald-500/20", bg: "bg-emerald-500/10", text: "text-emerald-400", icon: "text-emerald-400" },
];

export default function Products({ t }: ProductsProps) {
  return (
    <section id="services" className="relative py-28 bg-[#09090b]">
      <div className="absolute inset-0 bg-dots opacity-50" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.services.sectionTitle}
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            {t.services.sectionSub}
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.services.items.map((service, i) => {
            const colors = accentColors[i];
            return (
              <div
                key={i}
                className={`group relative rounded-2xl bg-white/[0.02] border ${colors.border} p-8 hover:bg-white/[0.04] transition-all duration-300`}
              >
                {/* Icon + Price row */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.icon}`}>
                    {icons[i]}
                  </div>
                  <span className={`text-sm font-semibold ${colors.text} bg-white/5 px-3 py-1 rounded-full`}>
                    {service.price}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>

                {/* Description */}
                <p className="text-zinc-400 mb-6 leading-relaxed text-[15px]">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-zinc-300">
                      <svg className={`w-4 h-4 flex-shrink-0 ${colors.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
