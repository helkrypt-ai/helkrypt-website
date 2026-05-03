import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts } from "./data";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blogg | Helkrypt AI",
  description:
    "Guider, case studies og innsikt om AI-automatisering for norske små og mellomstore bedrifter.",
  alternates: {
    canonical: "/blogg",
  },
  openGraph: {
    title: "Blogg | Helkrypt AI",
    description:
      "Guider, case studies og innsikt om AI-automatisering for norske SMB-er.",
    url: "https://www.helkrypt.no/blogg",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[var(--navy-dark)]">
      <Navbar />

      {/* Hero — renderes server-side for SEO */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[var(--blue-mid)] opacity-[0.18] rounded-full blur-[128px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] bg-[var(--gold)] opacity-[0.10] rounded-full blur-[128px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--gold)] mb-4">
            Helkrypt journal
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text">Innsikt og guider om AI for norske SMB-er</span>
          </h1>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            Praktiske guider, case studies og nyheter fra vår verden av AI-automatisering.
          </p>
          <hr className="gold-stripe mx-auto mt-8 w-24" />
        </div>
      </section>

      {/* Interaktivt filter + liste — eneste klient-komponent */}
      <BlogList initialPosts={blogPosts} />

      <Footer />
    </main>
  );
}
