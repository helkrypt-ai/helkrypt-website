import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--navy-deep)] px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand + NAP */}
        <div className="lg:col-span-2">
          <span className="font-extrabold text-[var(--white)] text-lg flex items-center gap-2">
            Helkrypt<span className="text-[var(--gold)]">.</span>
          </span>
          <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed max-w-sm">
            AI-tjenester for norske SMB-er
          </p>
          <address className="mt-5 not-italic text-sm text-[var(--text-muted)] space-y-1.5">
            <div className="text-[var(--white)] font-semibold">Helkrypt AI AS</div>
            <div>Org.nr 936 351 034</div>
            <div>
              <a
                href="tel:+4741457425"
                className="hover:text-[var(--gold)] transition-colors"
              >
                +47 414 57 425
              </a>
            </div>
            <div>
              <a
                href="mailto:marius@helkrypt.no"
                className="hover:text-[var(--gold)] transition-colors"
              >
                marius@helkrypt.no
              </a>
            </div>
          </address>
        </div>

        {/* Tjenester */}
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--gold)] mb-4">
            Tjenester
          </h3>
          <ul className="space-y-2.5 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/#tjenester" className="hover:text-[var(--blue-light)] transition-colors">
                AI-automatisering
              </Link>
            </li>
            <li>
              <Link href="/#tjenester" className="hover:text-[var(--blue-light)] transition-colors">
                Skreddersydde AI-løsninger
              </Link>
            </li>
            <li>
              <Link href="/#tjenester" className="hover:text-[var(--blue-light)] transition-colors">
                AI-konsultasjon
              </Link>
            </li>
            <li>
              <Link href="/#hjemmesider" className="hover:text-[var(--blue-light)] transition-colors">
                Webdesign
              </Link>
            </li>
          </ul>
        </div>

        {/* Selskap */}
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--gold)] mb-4">
            Selskap
          </h3>
          <ul className="space-y-2.5 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/#om-oss" className="hover:text-[var(--blue-light)] transition-colors">
                Om oss
              </Link>
            </li>
            <li>
              <Link href="/blogg" className="hover:text-[var(--blue-light)] transition-colors">
                Blogg
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-[var(--blue-light)] transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/#kontakt" className="hover:text-[var(--blue-light)] transition-colors">
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/personvern" className="hover:text-[var(--blue-light)] transition-colors">
                Personvernerklæring
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-subtle)]">
        <p>© 2026 Helkrypt AI AS · Org.nr 936 351 034</p>
        <p>Norsk AI-selskap · Drift i hele Norge</p>
      </div>
    </footer>
  );
}
