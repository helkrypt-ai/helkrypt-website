import { Translations } from "../i18n";

interface ProcessProps {
  t: Translations;
}

export default function Process({ t }: ProcessProps) {
  return (
    <section className="relative py-28 bg-[#09090b]">
      {/* Subtle divider gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.process.sectionTitle}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.process.steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              {/* Step number */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/20 mb-6">
                <span className="text-xl font-bold gradient-text">{i + 1}</span>
              </div>

              {/* Connector line (desktop) */}
              {i < t.process.steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-indigo-500/20 to-violet-500/20" />
              )}

              <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-zinc-400 text-[15px] leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
