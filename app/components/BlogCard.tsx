import { BlogPost, categoryColors } from "../blogg/data";
import { Translations } from "../i18n";
import { Locale } from "../i18n";

interface BlogCardProps {
  post: BlogPost;
  t: Translations;
  locale: Locale;
}

export default function BlogCard({ post, t, locale }: BlogCardProps) {
  const colors = categoryColors[post.category];
  const categoryLabel =
    t.blog.categories[post.category as keyof typeof t.blog.categories];

  return (
    <a
      href={`/blogg/${post.slug}`}
      className={`group relative rounded-[6px] bg-[var(--surface-card)] border-l-2 border ${colors.border} p-6 hover:bg-white/[0.06] transition-all duration-300 block`}
    >
      {/* Category badge + reading time */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`text-[10px] font-bold uppercase tracking-[0.18em] ${colors.text} ${colors.bg} px-3 py-1 rounded-[4px]`}
        >
          {categoryLabel}
        </span>
        <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[var(--text-subtle)]">
          {post.readingTime} {t.blog.readingTime}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-extrabold text-[var(--white)] mb-3 group-hover:text-[var(--blue-light)] transition-colors duration-200 line-clamp-2">
        {post.title[locale]}
      </h3>

      {/* Excerpt */}
      <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4 line-clamp-3">
        {post.excerpt[locale]}
      </p>

      {/* Footer: date + read more */}
      <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]">
        <time className="text-[10px] uppercase tracking-[0.15em] font-bold text-[var(--gold)]" dateTime={post.publishedAt}>
          {new Date(post.publishedAt).toLocaleDateString(
            locale === "no" ? "nb-NO" : "en-US",
            { year: "numeric", month: "short", day: "numeric" }
          )}
        </time>
        <span className="text-[13px] font-semibold text-[var(--blue-light)] group-hover:text-[var(--gold)] transition-colors duration-200 flex items-center gap-1">
          {t.blog.readMore}
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}
