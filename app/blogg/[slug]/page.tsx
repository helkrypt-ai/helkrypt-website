import type { Metadata } from "next";
import { getPostBySlug, blogPosts } from "../data";
import { notFound } from "next/navigation";
import ArticleContent from "./ArticleContent";

// Statisk generering av alle slugs ved build
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Per-artikkel metadata
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Ikke funnet | Helkrypt AI" };

  const title = post.seo.metaTitle?.no ?? post.title.no;
  const description = post.seo.metaDescription?.no ?? post.excerpt.no;

  return {
    title: `${title} | Helkrypt AI`,
    description,
    alternates: {
      canonical: `/blogg/${post.slug}`,
      languages: {
        "nb-NO": `/blogg/${post.slug}`,
        en: `/blogg/${post.slug}?lang=en`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://www.helkrypt.no/blogg/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: post.seo.ogImage ? [{ url: post.seo.ogImage, alt: title }] : [],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Article JSON-LD schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title.no,
    description: post.excerpt.no,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "Helkrypt AI",
      logo: {
        "@type": "ImageObject",
        url: "https://www.helkrypt.no/helkrypt-logo-white.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.helkrypt.no/blogg/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    inLanguage: "nb-NO",
    articleSection: post.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ArticleContent post={post} />
    </>
  );
}
