"use client";

import { useState } from "react";
import { translations, Locale } from "../i18n";
import BlogCard from "../components/BlogCard";
import { BlogPost, BlogCategory, getPostsByCategory } from "./data";

const categories: (BlogCategory | null)[] = [
  null,
  "ai-for-smb",
  "case-study",
  "guide",
  "news",
];

export default function BlogList({ initialPosts }: { initialPosts: BlogPost[] }) {
  const [locale, setLocale] = useState<Locale>("no");
  const [activeCategory, setActiveCategory] = useState<BlogCategory | null>(null);
  const t = translations[locale];
  const filteredPosts = activeCategory
    ? getPostsByCategory(activeCategory)
    : initialPosts;

  return (
    <>
      {/* Category filter */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const label = cat
              ? t.blog.categories[cat as keyof typeof t.blog.categories]
              : t.blog.allCategories;

            return (
              <button
                key={cat ?? "all"}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-[4px] text-[13px] font-bold tracking-[0.05em] uppercase transition-all duration-200 ${
                  isActive
                    ? "bg-[var(--gold)] text-[var(--navy-dark)]"
                    : "bg-[var(--surface-card)] text-[var(--text-muted)] hover:bg-white/10 hover:text-[var(--white)] border border-[var(--border-subtle)]"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Blog grid */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        <div className="absolute inset-0 bg-dots opacity-30" />
        {filteredPosts.length > 0 ? (
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} t={t} locale={locale} />
            ))}
          </div>
        ) : (
          <p className="relative text-center text-[var(--text-subtle)] py-20">
            {t.blog.noPosts}
          </p>
        )}
      </section>
    </>
  );
}
