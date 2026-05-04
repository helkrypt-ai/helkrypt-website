import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { faqSchema } from "./faq-data";

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
  telephone: "+4741457425",
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
  founder: {
    "@type": "Person",
    name: "Marius",
    jobTitle: "Grunnlegger og daglig leder",
    worksFor: { "@type": "Organization", name: "Helkrypt AI AS" },
    email: "marius@helkrypt.no",
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
    telephone: "+4741457425",
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
    name: "Workflow-automatisering",
    description: "Skreddersydd automatiseringsarbeidsflyt. Integrer systemer som Visma, Tripletex og 24SevenOffice uten koding.",
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Helkrypt AI",
  url: "https://www.helkrypt.no",
  inLanguage: ["nb-NO", "en"],
  publisher: { "@type": "Organization", name: "Helkrypt AI AS" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.helkrypt.no/blogg?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
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
