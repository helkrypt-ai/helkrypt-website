import type { MetadataRoute } from "next";

/**
 * Robots.txt for helkrypt.no
 *
 * Tillater alle vanlige søkemotorer + AI-crawlere eksplisitt.
 * Blokkerer kun API-ruter og Next.js interne filer.
 *
 * Genereres automatisk til: https://www.helkrypt.no/robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard for alle søkemotorer (Google, Bing, etc.)
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // AI-crawlere som indekserer for sitering (GEO/AIO)
      {
        userAgent: [
          "GPTBot",              // OpenAI - trenings- og søkecrawler
          "ChatGPT-User",        // OpenAI - brukerinitierte oppslag
          "OAI-SearchBot",       // OpenAI - ChatGPT Search-indeks
          "ClaudeBot",           // Anthropic - Claude
          "anthropic-ai",        // Anthropic - eldre UA-streng
          "PerplexityBot",       // Perplexity - indeks
          "Perplexity-User",     // Perplexity - brukerinitierte oppslag
          "Google-Extended",     // Google - AI-opplæring (Gemini)
          "Applebot-Extended",   // Apple - AI-opplæring (Apple Intelligence)
          "CCBot",               // Common Crawl (brukes av mange LLM-er)
          "Bytespider",          // ByteDance/TikTok AI
          "FacebookBot",         // Meta AI
          "DuckAssistBot",       // DuckDuckGo AI
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.helkrypt.no/sitemap.xml",
    host: "https://www.helkrypt.no",
  };
}
