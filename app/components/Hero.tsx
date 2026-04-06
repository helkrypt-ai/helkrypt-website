import { Translations } from "../i18n";

interface HeroProps {
  t: Translations;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090b] pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* Gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[128px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[128px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-sm font-medium">{t.hero.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight mb-6 animate-fade-in-up-delay-1">
          <span className="gradient-text">{t.hero.headline}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up-delay-2">
          {t.hero.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
          <a
            href={t.hero.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            {t.hero.cta}
            <span className="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </a>
          <a
            href="#services"
            className="bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* Social proof line */}
        <div className="mt-20 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {[
              "bg-indigo-500",
              "bg-violet-500",
              "bg-cyan-500",
            ].map((color, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full ${color} border-2 border-[#09090b] flex items-center justify-center text-white text-xs font-bold`}
              >
                {["V", "T", "F"][i]}
              </div>
            ))}
          </div>
          <p className="text-zinc-500 text-sm">
            Integrerer med Visma, Tripletex, Fiken og 50+ systemer
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#09090b] to-transparent" />
    </section>
  );
}
