import { Translations } from "../i18n";

interface FooterProps {
  t: Translations;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">H</span>
            </div>
            <span className="font-bold text-white text-base tracking-tight">
              Helkrypt<span className="text-indigo-400"> AI</span>
            </span>
          </div>
          <p className="text-sm text-slate-500">{t.footer.tagline}</p>
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Helkrypt AI. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
