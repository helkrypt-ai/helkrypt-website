import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Helkrypt AI — Din partner for smartere løsninger",
  description:
    "Helkrypt AI hjelper norske SMB-er med å automatisere prosesser, integrere systemer og bygge smarte AI-agenter. AI Integration Suite, Agentic Workflow Builder, AI Onboarding Program.",
  keywords: ["AI", "kunstig intelligens", "norske bedrifter", "SMB", "automatisering", "Visma", "Tripletex"],
  metadataBase: new URL("https://www.helkrypt.no"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Helkrypt AI — AI for norske bedrifter",
    description: "Automatiser din bedrift med AI. Integrert med norske systemer.",
    url: "https://www.helkrypt.no",
    siteName: "Helkrypt AI",
    locale: "nb_NO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Helkrypt AI",
  description: "AI-automatisering for norske SMBer. Vi hjelper små og mellomstore bedrifter med prosessautomatisering, AI-kundestøtte og workflow-automatisering.",
  url: "https://www.helkrypt.no",
  logo: "https://www.helkrypt.no/favicon.ico",
  image: "https://www.helkrypt.no/favicon.ico",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Oslo",
    addressCountry: "NO",
  },
  priceRange: "2500-15000 NOK",
  currenciesAccepted: "NOK",
  paymentAccepted: "Invoice, Bank Transfer",
  areaServed: {
    "@type": "Country",
    name: "Norway",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["Norwegian", "English"],
  },
  sameAs: [],
};

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI-automatiseringsaudit",
    description: "2-timers audit av dine prosesser og automatiseringspotensial. Vi identifiserer de største mulighetene for AI-automatisering i din bedrift.",
    provider: { "@type": "LocalBusiness", name: "Helkrypt AI" },
    areaServed: { "@type": "Country", name: "Norway" },
    serviceType: "AI Consulting",
    offers: {
      "@type": "Offer",
      price: "2500",
      priceCurrency: "NOK",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "n8n Workflow-bygg",
    description: "Skreddersydd automatiseringsarbeidsflyt bygget med n8n. Integrer systemer som Visma, Tripletex og 24SevenOffice uten koding.",
    provider: { "@type": "LocalBusiness", name: "Helkrypt AI" },
    areaServed: { "@type": "Country", name: "Norway" },
    serviceType: "Workflow Automation",
    offers: {
      "@type": "Offer",
      price: "5000",
      priceCurrency: "NOK",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Workshop",
    description: "Halvdags workshop for å lære teamet ditt å bruke AI-verktøy effektivt i hverdagen. Tilpasset din bransje og behov.",
    provider: { "@type": "LocalBusiness", name: "Helkrypt AI" },
    areaServed: { "@type": "Country", name: "Norway" },
    serviceType: "AI Training",
    offers: {
      "@type": "Offer",
      price: "4500",
      priceCurrency: "NOK",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI-strategi miniprosjekt",
    description: "Strategisk miniprosjekt for å kartlegge og planlegge AI-implementering i din bedrift. Fra idé til handlingsplan.",
    provider: { "@type": "LocalBusiness", name: "Helkrypt AI" },
    areaServed: { "@type": "Country", name: "Norway" },
    serviceType: "AI Strategy Consulting",
    offers: {
      "@type": "Offer",
      price: "10000",
      priceCurrency: "NOK",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Månedlig AI-retainer",
    description: "Løpende støtte og vedlikehold av AI-automatiseringer. Inkluderer overvåking, optimalisering og nye arbeidsflyter etter behov.",
    provider: { "@type": "LocalBusiness", name: "Helkrypt AI" },
    areaServed: { "@type": "Country", name: "Norway" },
    serviceType: "AI Managed Services",
    offers: {
      "@type": "Offer",
      price: "2500",
      priceCurrency: "NOK",
      availability: "https://schema.org/InStock",
    },
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hva er Helkrypt AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Helkrypt AI er et norsk selskap som spesialiserer seg på å hjelpe små og mellomstore bedrifter med å ta i bruk kunstig intelligens på en praktisk og lønnsom måte. Vi tilbyr AI-integrasjoner, arbeidsflytautomatisering og onboarding-programmer.",
      },
    },
    {
      "@type": "Question",
      name: "Hvilke systemer integrerer Helkrypt AI med?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Helkrypt AI integrerer sømløst med over 50 norske og internasjonale systemer, inkludert Visma, Tripletex, 24SevenOffice og Fiken. Integrasjonene krever ingen koding.",
      },
    },
    {
      "@type": "Question",
      name: "Trenger jeg teknisk kompetanse for å bruke Helkrypt AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nei, Helkrypt AI er designet for å brukes uten koding eller store IT-ressurser. Vår visuell flytbygger og AI Onboarding Program gjør det enkelt å komme i gang, uansett teknisk bakgrunn.",
      },
    },
    {
      "@type": "Question",
      name: "Hva koster tjenestene til Helkrypt AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Helkrypt AI tilbyr fleksible prismodeller: AI-audit fra 2 500 NOK, n8n workflow-bygg fra 5 000 NOK, AI-workshop fra 4 500 NOK, og månedlige retainere fra 2 500 NOK/måned. Kontakt oss for et tilpasset tilbud.",
      },
    },
    {
      "@type": "Question",
      name: "Hvordan kommer jeg i gang med Helkrypt AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fyll ut kontaktskjemaet på nettsiden vår, så tar vi kontakt for en uforpliktende kartlegging av din bedrifts behov. Vi starter typisk med en AI-audit for å identifisere de største automatiseringsmulighetene.",
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Helkrypt AI",
  url: "https://www.helkrypt.no",
  inLanguage: ["nb-NO", "en"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {serviceSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
