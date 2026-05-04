"use client";

import { useState } from "react";
import { translations, Locale } from "../../i18n";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ArticleHeader from "../../components/ArticleHeader";
import ArticleCTA from "../../components/ArticleCTA";
import RelatedPosts from "../../components/RelatedPosts";
import ShareButtons from "../../components/ShareButtons";
import { BlogPost, getRelatedPosts } from "../data";

interface ArticleContentProps {
  post: BlogPost;
}

/** Format inline markdown: **bold** */
function formatInlineMarkdown(text: string): string {
  return text.replace(
    /\*\*(.+?)\*\*/g,
    '<strong class="text-[var(--white)] font-bold">$1</strong>'
  );
}

function renderMarkdown(md: string): React.ReactNode[] {
  const lines = md.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-extrabold text-[var(--white)] mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-extrabold text-[var(--white)] mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={i}
          className="border-l-4 border-[var(--gold)] bg-[var(--gold)]/5 pl-4 py-3 my-6 text-[var(--white)] italic"
        >
          {line.slice(2)}
        </blockquote>
      );
      i++;
      continue;
    }

    if (line.startsWith("- ")) {
      const listItems: React.ReactNode[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(
          <li key={i} className="flex items-start gap-2.5">
            <svg
              className="w-4 h-4 text-[var(--gold)] mt-1 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span
              dangerouslySetInnerHTML={{
                __html: formatInlineMarkdown(lines[i].slice(2)),
              }}
            />
          </li>
        );
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2 my-4 text-[var(--text-muted)]">
          {listItems}
        </ul>
      );
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const listItems: React.ReactNode[] = [];
      let num = 1;
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        listItems.push(
          <li key={i} className="flex items-start gap-3">
            <span className="text-[var(--gold)] font-extrabold text-sm mt-0.5 flex-shrink-0">
              {num}.
            </span>
            <span
              dangerouslySetInnerHTML={{
                __html: formatInlineMarkdown(lines[i].replace(/^\d+\.\s/, "")),
              }}
            />
          </li>
        );
        i++;
        num++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="space-y-2 my-4 text-[var(--text-muted)]">
          {listItems}
        </ol>
      );
      continue;
    }

    if (line.includes("|") && line.trim().startsWith("|")) {
      const tableRows: string[][] = [];
      while (
        i < lines.length &&
        lines[i].includes("|") &&
        lines[i].trim().startsWith("|")
      ) {
        const cells = lines[i]
          .split("|")
          .filter((c) => c.trim() !== "")
          .map((c) => c.trim());
        if (!cells.every((c) => /^[-:]+$/.test(c))) {
          tableRows.push(cells);
        }
        i++;
      }
      if (tableRows.length > 0) {
        const [header, ...body] = tableRows;
        elements.push(
          <div
            key={`table-${i}`}
            className="my-6 overflow-x-auto rounded-[6px] border border-[var(--border-subtle)]"
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--navy)]">
                  {header.map((cell, ci) => (
                    <th
                      key={ci}
                      className="px-4 py-3 text-left font-bold uppercase tracking-[0.1em] text-[var(--gold)] text-xs"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, ri) => (
                  <tr key={ri} className="border-t border-[var(--border-subtle)]">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className="px-4 py-3 text-[var(--text-muted)]"
                        dangerouslySetInnerHTML={{
                          __html: formatInlineMarkdown(cell),
                        }}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    if (line.trim() === "") {
      i++;
      continue;
    }

    elements.push(
      <p
        key={i}
        className="text-[var(--text-muted)] leading-relaxed my-4"
        dangerouslySetInnerHTML={{
          __html: formatInlineMarkdown(line),
        }}
      />
    );
    i++;
  }

  return elements;
}

export default function ArticleContent({ post }: ArticleContentProps) {
  const [locale, setLocale] = useState<Locale>("no");
  const t = translations[locale];

  const relatedPosts = getRelatedPosts(post.slug, post.category);
  const bodyContent = post.body[locale];

  return (
    <main className="min-h-screen bg-[var(--navy-dark)]">
      <Navbar />

      <article className="relative pt-32 pb-20">
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-[var(--blue-mid)] opacity-[0.10] rounded-full blur-[128px]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArticleHeader post={post} t={t} locale={locale} />

          {/* Article body */}
          <div className="prose-custom">{renderMarkdown(bodyContent)}</div>

          {/* Share + Tags */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-12 pt-8 border-t border-[var(--border-subtle)]">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-[0.15em] font-bold bg-[var(--surface-card)] text-[var(--text-muted)] px-3 py-1 rounded-[4px] border border-[var(--border-subtle)]"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <ShareButtons title={post.title[locale]} slug={post.slug} t={t} />
          </div>

          {/* CTA */}
          <ArticleCTA t={t} />
        </div>

        {/* Related posts */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedPosts posts={relatedPosts} t={t} locale={locale} />
        </div>
      </article>

      <Footer />
    </main>
  );
}
