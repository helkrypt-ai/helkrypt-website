export type Locale = "no" | "en";

export const translations = {
  no: {
    nav: {
      home: "Hjem",
      products: "Produkter",
      about: "Om oss",
      contact: "Kontakt",
    },
    hero: {
      badge: "AI for norske bedrifter",
      headline: "Gjør din bedrift klar for fremtiden med AI",
      subheadline:
        "Helkrypt AI hjelper norske SMB-er med å automatisere prosesser, integrere systemer og bygge smarte arbeidsflyter — uten behov for store IT-ressurser.",
      cta: "Kom i gang",
      ctaSecondary: "Les mer",
    },
    products: {
      sectionTitle: "Våre løsninger",
      sectionSub: "Alt du trenger for å ta i bruk AI i din bedrift",
      items: [
        {
          name: "AI Integration Suite",
          description:
            "Sømløs integrasjon mot Visma, Tripletex, 24SevenOffice og andre norske systemer. La AI håndtere dataflyten mellom systemene dine automatisk.",
          features: [
            "Kobler til 50+ norske og internasjonale systemer",
            "Automatisk datasyknronisering",
            "Ingen koding nødvendig",
          ],
        },
        {
          name: "Agentic Workflow Builder",
          description:
            "Bygg intelligente AI-agenter som jobber for deg 24/7. Automatiser repeterende oppgaver og la agentene ta avgjørelser basert på dine regler.",
          features: [
            "Visuell flytbygger",
            "Forhåndslagde maler for norske bedrifter",
            "Full revisjonskontroll",
          ],
        },
        {
          name: "AI Onboarding Program",
          description:
            "Strukturert program for å komme raskt i gang med AI. Vi guider deg fra idé til implementasjon — tilpasset din bedrift og bransje.",
          features: [
            "Behovskartlegging og strategi",
            "Opplæring av ansatte",
            "Løpende støtte og optimalisering",
          ],
        },
      ],
    },
    about: {
      sectionTitle: "Om Helkrypt AI",
      body: "Helkrypt AI er et norsk selskap som spesialiserer seg på å hjelpe små og mellomstore bedrifter med å ta i bruk kunstig intelligens på en praktisk og lønnsom måte. Vi kombinerer dyp teknisk kompetanse med forståelse for norske forretningsforhold og regelverk.",
      stats: [
        { label: "Norske kunder", value: "200+" },
        { label: "Automatiserte prosesser", value: "1500+" },
        { label: "Timer spart per uke", value: "5000+" },
      ],
    },
    contact: {
      sectionTitle: "Ta kontakt",
      sectionSub:
        "Interessert i å se hva Helkrypt AI kan gjøre for din bedrift? Fyll ut skjemaet, så tar vi kontakt.",
      form: {
        name: "Navn",
        email: "E-post",
        company: "Bedrift",
        message: "Melding",
        messagePlaceholder: "Fortell oss litt om din bedrift og hva du ønsker å automatisere...",
        submit: "Send forespørsel",
        success: "Takk! Vi tar kontakt snart.",
      },
    },
    footer: {
      tagline: "AI for norske bedrifter",
      rights: "Alle rettigheter forbeholdt.",
    },
  },
  en: {
    nav: {
      home: "Home",
      products: "Products",
      about: "About",
      contact: "Contact",
    },
    hero: {
      badge: "AI for Norwegian businesses",
      headline: "Prepare your business for the future with AI",
      subheadline:
        "Helkrypt AI helps Norwegian SMBs automate processes, integrate systems, and build intelligent workflows — without the need for large IT resources.",
      cta: "Get started",
      ctaSecondary: "Learn more",
    },
    products: {
      sectionTitle: "Our solutions",
      sectionSub: "Everything you need to adopt AI in your business",
      items: [
        {
          name: "AI Integration Suite",
          description:
            "Seamless integration with Visma, Tripletex, 24SevenOffice, and other Norwegian systems. Let AI handle data flows between your systems automatically.",
          features: [
            "Connects to 50+ Norwegian and international systems",
            "Automatic data synchronization",
            "No coding required",
          ],
        },
        {
          name: "Agentic Workflow Builder",
          description:
            "Build intelligent AI agents that work for you 24/7. Automate repetitive tasks and let agents make decisions based on your rules.",
          features: [
            "Visual flow builder",
            "Pre-built templates for Norwegian businesses",
            "Full audit trail",
          ],
        },
        {
          name: "AI Onboarding Program",
          description:
            "Structured program to get started with AI quickly. We guide you from idea to implementation — tailored to your business and industry.",
          features: [
            "Needs assessment and strategy",
            "Employee training",
            "Ongoing support and optimization",
          ],
        },
      ],
    },
    about: {
      sectionTitle: "About Helkrypt AI",
      body: "Helkrypt AI is a Norwegian company specializing in helping small and medium-sized businesses adopt artificial intelligence in a practical and profitable way. We combine deep technical expertise with an understanding of Norwegian business conditions and regulations.",
      stats: [
        { label: "Norwegian customers", value: "200+" },
        { label: "Automated processes", value: "1500+" },
        { label: "Hours saved per week", value: "5000+" },
      ],
    },
    contact: {
      sectionTitle: "Get in touch",
      sectionSub:
        "Interested in seeing what Helkrypt AI can do for your business? Fill out the form and we'll be in touch.",
      form: {
        name: "Name",
        email: "Email",
        company: "Company",
        message: "Message",
        messagePlaceholder: "Tell us a bit about your business and what you want to automate...",
        submit: "Send request",
        success: "Thank you! We'll be in touch soon.",
      },
    },
    footer: {
      tagline: "AI for Norwegian businesses",
      rights: "All rights reserved.",
    },
  },
};

export type Translations = typeof translations.no;
