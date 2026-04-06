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
  title: "Helkrypt AI — AI for norske bedrifter",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Helkrypt AI",
  url: "https://www.helkrypt.no",
  logo: "https://www.helkrypt.no/favicon.ico",
  description:
    "Helkrypt AI hjelper norske SMB-er med å automatisere prosesser, integrere systemer og bygge smarte AI-agenter.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NO",
  },
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["Norwegian", "English"],
  },
};

const productSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AI Integration Suite",
    description:
      "Sømløs integrasjon mot Visma, Tripletex, 24SevenOffice og andre norske systemer. La AI håndtere dataflyten mellom systemene dine automatisk.",
    brand: { "@type": "Brand", name: "Helkrypt AI" },
    offers: {
      "@type": "Offer",
      priceCurrency: "NOK",
      availability: "https://schema.org/InStock",
    },
    category: "Software",
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Agentic Workflow Builder",
    description:
      "Bygg intelligente AI-agenter som jobber for deg 24/7. Automatiser repeterende oppgaver og la agentene ta avgjørelser basert på dine regler.",
    brand: { "@type": "Brand", name: "Helkrypt AI" },
    offers: {
      "@type": "Offer",
      priceCurrency: "NOK",
      availability: "https://schema.org/InStock",
    },
    category: "Software",
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AI Onboarding Program",
    description:
      "Strukturert program for å komme raskt i gang med AI. Vi guider deg fra idé til implementasjon — tilpasset din bedrift og bransje.",
    brand: { "@type": "Brand", name: "Helkrypt AI" },
    offers: {
      "@type": "Offer",
      priceCurrency: "NOK",
      availability: "https://schema.org/InStock",
    },
    category: "Professional Services",
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
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {productSchemas.map((schema, i) => (
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
