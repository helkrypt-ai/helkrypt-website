import { BlogPost } from "../blogg/data";
import { Translations, Locale } from "../i18n";
import BlogCard from "./BlogCard";

interface RelatedPostsProps {
  posts: BlogPost[];
  t: Translations;
  locale: Locale;
}

export default function RelatedPosts({
  posts,
  t,
  locale,
}: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-20 pt-12 border-t border-[var(--border-subtle)]">
      <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--gold)] mb-2">
        Mer fra journalen
      </span>
      <h2 className="text-2xl font-extrabold text-[var(--white)] mb-8">
        {t.blog.relatedPosts}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} t={t} locale={locale} />
        ))}
      </div>
    </section>
  );
}
