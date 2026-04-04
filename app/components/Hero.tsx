import { Translations } from "../i18n";

interface HeroProps {
  t: Translations;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-8">
          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
          <span className="text-indigo-300 text-sm font-medium">{t.hero.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          {t.hero.headline.split(" med AI")[0]}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent"> med AI</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          {t.hero.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            {t.hero.cta}
          </a>
          <a
            href="#products"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all hover:scale-105"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* Trust logos placeholder */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-50">
          {["Visma", "Tripletex", "24SevenOffice", "Fiken"].map((brand) => (
            <span key={brand} className="text-slate-400 font-semibold text-sm tracking-widest uppercase">
              {brand}
            </span>
          ))}
        </div>
        <p className="text-slate-500 text-xs mt-3">Integrerer med ledende norske systemer</p>
      </div>
    </section>
  );
}
