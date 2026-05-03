import Link from "next/link";
import { BlogPost, categoryColors } from "../blogg/data";
import { Translations, Locale } from "../i18n";

interface ArticleHeaderProps {
  post: BlogPost;
  t: Translations;
  locale: Locale;
}

export default function ArticleHeader({
  post,
  t,
  locale,
}: ArticleHeaderProps) {
  const colors = categoryColors[post.category];
  const categoryLabel =
    t.blog.categories[post.category as keyof typeof t.blog.categories];

  return (
    <header className="mb-12">
      {/* Back link */}
      <Link
        href="/blogg"
        className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--blue-light)] transition-colors duration-200 mb-8"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        {t.blog.backToBlog}
      </Link>

      {/* Category + metadata row */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span
          className={`text-[10px] font-bold uppercase tracking-[0.18em] ${colors.text} ${colors.bg} px-3 py-1 rounded-[4px]`}
        >
          {categoryLabel}
        </span>
        <span className="text-[11px] uppercase tracking-[0.15em] font-bold text-[var(--gold)]">
          {t.blog.publishedAt}{" "}
          {new Date(post.publishedAt).toLocaleDateString(
            locale === "no" ? "nb-NO" : "en-US",
            { year: "numeric", month: "long", day: "numeric" }
          )}
        </span>
        <span className="text-[var(--text-subtle)]">&middot;</span>
        <span className="text-[11px] uppercase tracking-[0.15em] font-bold text-[var(--text-subtle)]">
          {post.readingTime} {t.blog.readingTime}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
        <span className="gradient-text">{post.title[locale]}</span>
      </h1>

      {/* Excerpt */}
      <p className="text-lg text-[var(--text-muted)] leading-relaxed max-w-3xl">
        {post.excerpt[locale]}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-8 pt-6 border-t border-[var(--border-subtle)]">
        <div className="w-10 h-10 rounded-full bg-[var(--gold)]/20 flex items-center justify-center text-[var(--gold)] font-extrabold text-sm">
          {post.author.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--white)]">
            {t.blog.authorBy} {post.author.name}
          </p>
          <p className="text-xs text-[var(--text-muted)]">{post.author.role}</p>
        </div>
      </div>
    </header>
  );
}
