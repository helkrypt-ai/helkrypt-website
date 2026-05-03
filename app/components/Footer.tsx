"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--navy-deep)] px-6 md:px-12 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-extrabold text-[var(--white)] text-lg flex items-center gap-2">
          Helkrypt<span className="text-[var(--gold)]">.</span>
        </span>

        <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-[var(--text-muted)]">
          <Link href="/personvern" className="hover:text-[var(--blue-light)] transition-colors">
            Personvernerklæring
          </Link>
        </div>

        <p className="text-[var(--text-subtle)] text-xs text-center sm:text-right">
          © 2026 Helkrypt AI AS &nbsp;·&nbsp; Org.nr: 936351034
        </p>
      </div>
    </footer>
  );
}
