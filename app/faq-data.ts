export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Hva er Helkrypt AI?",
    answer:
      "Helkrypt AI er et norsk selskap som spesialiserer seg på å hjelpe små og mellomstore bedrifter med å ta i bruk kunstig intelligens på en praktisk og lønnsom måte. Vi tilbyr AI-integrasjoner, arbeidsflytautomatisering og onboarding-programmer.",
  },
  {
    question: "Hvilke systemer integrerer Helkrypt AI med?",
    answer:
      "Helkrypt AI integrerer sømløst med over 50 norske og internasjonale systemer, inkludert Visma, Tripletex, 24SevenOffice og Fiken. Integrasjonene krever ingen koding.",
  },
  {
    question: "Trenger jeg teknisk kompetanse for å bruke Helkrypt AI?",
    answer:
      "Nei. Vi bygger, drifter og overleverer løsningen ferdig konfigurert. Du får opplæring tilpasset teamet og en kontaktperson hos oss for spørsmål underveis.",
  },
  {
    question: "Hvor mye koster en AI-automatisering hos Helkrypt?",
    answer:
      "Pris avhenger av kompleksitet. En AI-audit (2 timer) er gratis. Skreddersydde automatiseringsløsninger starter typisk fra 25 000 kr eks. mva. Webdesign starter fra 39 000 kr eks. mva pluss 1 900 kr/mnd i drift.",
  },
  {
    question: "Hvor raskt kan vi være i gang?",
    answer:
      "De fleste prosjekter går fra første samtale til ferdig løsning på 2–4 uker. Enkle workflow-automasjoner kan settes opp på under en uke.",
  },
  {
    question: "Er løsningene GDPR-kompatible?",
    answer:
      "Ja. Alle løsninger driftes på EU-baserte servere (Vercel EU, Supabase eu-west-1, Anthropic EU-DPA). Vi signerer databehandleravtale ved oppstart og overholder GDPR artiklene 28 og 32.",
  },
  {
    question: "Hvordan får jeg et tilbud fra Helkrypt AI?",
    answer:
      "Fyll ut kontaktskjemaet på nettsiden, så tar vi kontakt for en uforpliktende kartlegging og et skreddersydd tilbud tilpasset din bedrift.",
  },
  {
    question: "Hvordan kommer jeg i gang med Helkrypt AI?",
    answer:
      "Fyll ut kontaktskjemaet på nettsiden vår, så tar vi kontakt for en uforpliktende kartlegging av din bedrifts behov. Vi starter typisk med en AI-audit for å identifisere de største automatiseringsmulighetene.",
  },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
