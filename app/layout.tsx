import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["normal"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "AI-automatisering for SMB | Helkrypt",
  description:
    "AI-automatisering for norske SMB-er. Implementer chatbots, workflow automation og kundesupport AI. Gratis audit og demo booking.",
  keywords: ["AI-automatisering", "AI", "kunstig intelligens", "norske bedrifter", "SMB", "automatisering", "Visma", "Tripletex"],
  metadataBase: new URL("https://www.helkrypt.no"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI-automatisering for SMB | Helkrypt",
    description: "Automatiser bedriftsprosesser med AI. Spar tid, reduser kostnader, og fokuser på vekst.",
    url: "https://www.helkrypt.no",
    siteName: "Helkrypt AI",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "https://www.helkrypt.no/helkrypt-logo-white.png",
        width: 1200,
        height: 630,
        alt: "Helkrypt AI — AI-automatisering for norske SMB-er",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Helkrypt AI",
  legalName: "Helkrypt AI AS",
  description:
    "AI-automatisering for norske SMBer. Vi hjelper små og mellomstore bedrifter med prosessautomatisering, AI-kundestøtte og workflow-automatisering.",
  url: "https://www.helkrypt.no",
  logo: "https://www.helkrypt.no/helkrypt-logo-white.png",
  image: "https://www.helkrypt.no/helkrypt-logo-white.png",
  email: "marius@helkrypt.no",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NO",
  },
  identifier: {
    "@type": "PropertyValue",
    propertyID: "organisasjonsnummer",
    value: "936351034",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Helkrypt Holding AS",
  },
  currenciesAccepted: "NOK",
  paymentAccepted: "Invoice, Bank Transfer",
  areaServed: {
    "@type": "Country",
    name: "Norway",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "marius@helkrypt.no",
    availableLanguage: ["Norwegian", "English"],
  },
  sameAs: [
    // Legg inn etter hvert som kontoer opprettes:
    // "https://www.linkedin.com/company/helkrypt-ai",
    // "https://www.facebook.com/helkryptai",
    // "https://twitter.com/helkryptai",
    // "https://www.instagram.com/helkryptai",
  ],
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
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "n8n Workflow-bygg",
    description: "Skreddersydd automatiseringsarbeidsflyt bygget med n8n. Integrer systemer som Visma, Tripletex og 24SevenOffice uten koding.",
    provider: { "@type": "LocalBusiness", name: "Helkrypt AI" },
    areaServed: { "@type": "Country", name: "Norway" },
    serviceType: "Workflow Automation",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Workshop",
    description: "Halvdags workshop for å lære teamet ditt å bruke AI-verktøy effektivt i hverdagen. Tilpasset din bransje og behov.",
    provider: { "@type": "LocalBusiness", name: "Helkrypt AI" },
    areaServed: { "@type": "Country", name: "Norway" },
    serviceType: "AI Training",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI-strategi miniprosjekt",
    description: "Strategisk miniprosjekt for å kartlegge og planlegge AI-implementering i din bedrift. Fra idé til handlingsplan.",
    provider: { "@type": "LocalBusiness", name: "Helkrypt AI" },
    areaServed: { "@type": "Country", name: "Norway" },
    serviceType: "AI Strategy Consulting",
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
      name: "Hvordan får jeg et tilbud fra Helkrypt AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Helkrypt AI tilbyr skreddersydde løsninger tilpasset din bedrifts behov. Kontakt oss for et tilpasset tilbud.",
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
      className={`${fraunces.variable} ${plusJakartaSans.variable} h-full antialiased`}
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
