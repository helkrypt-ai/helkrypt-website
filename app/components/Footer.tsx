import Link from "next/link";
import { Translations } from "../i18n";

interface FooterProps {
  t: Translations;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-[#09090b] border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">H</span>
              </div>
              <span className="font-semibold text-white text-base tracking-tight">
                Helkrypt<span className="text-indigo-400"> AI</span>
              </span>
            </div>

            <p className="text-sm text-zinc-600">{t.footer.tagline}</p>

            {/* Links */}
            <div className="flex items-center gap-4 text-sm">
              <Link href="/privacy" className="text-zinc-600 hover:text-zinc-400 transition-colors">
                {t.footer.privacyPolicy}
              </Link>
              <span className="text-zinc-800">·</span>
              <Link href="/personvern" className="text-zinc-600 hover:text-zinc-400 transition-colors">
                {t.footer.personvern}
              </Link>
              <span className="text-zinc-800">·</span>
              <button className="text-zinc-600 hover:text-zinc-400 transition-colors">
                {t.footer.cookieSettings}
              </button>
            </div>
          </div>

          {/* Bottom row */}
          <div className="text-center">
            <p className="text-xs text-zinc-700">
              &copy; {new Date().getFullYear()} Helkrypt AI. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
