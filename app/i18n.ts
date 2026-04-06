export type Locale = "no" | "en";

export const translations = {
  no: {
    nav: {
      home: "Hjem",
      services: "Tjenester",
      about: "Om oss",
      contact: "Kontakt",
      cta: "Book en samtale",
      blog: "Blogg",
    },
    hero: {
      badge: "AI-automatisering for norske bedrifter",
      headline: "Gjør din bedrift klar for fremtiden med AI",
      subheadline:
        "Vi hjelper norske SMB-er med å spare 5+ timer i uken gjennom AI-automatisering — fra audit til implementasjon, tilpasset din bedrift.",
      partnerLine:
        "Vi i Helkrypt er klare til å være din partner for smartere løsninger.",
      cta: "Book en gratis samtale",
      ctaSecondary: "Se våre tjenester",
      ctaLink: "https://calendly.com/helkrypt/30min",
    },
    services: {
      sectionTitle: "Tjenester",
      sectionSub:
        "Fra behovskartlegging til full implementasjon — vi tar deg gjennom hele AI-reisen.",
      items: [
        {
          name: "AI-audit",
          description:
            "En 2-timers gjennomgang av bedriften din der vi kartlegger konkret hva du kan automatisere og spare tid på. Du får en handlingsplan du kan bruke med en gang.",
          price: "2 500 NOK",
          features: [
            "2 timers gjennomgang",
            "Konkret handlingsplan",
            "Money-back garanti",
          ],
        },
        {
          name: "AI-workshop",
          description:
            "Halvdags workshop for teamet ditt der vi går gjennom AI-muligheter i praksis. Perfekt for å komme i gang og bygge intern kompetanse.",
          price: "4 500 NOK",
          features: [
            "Halvdags intensivkurs",
            "Praktiske øvelser",
            "Tilpasset din bransje",
          ],
        },
        {
          name: "Workflow-automatisering",
          description:
            "Vi bygger skreddersydde AI-drevne arbeidsflyter som automatiserer repetitive oppgaver — fakturering, kundehåndtering, rapportering og mer.",
          price: "Fra 5 000 NOK",
          features: [
            "Skreddersydd for din bedrift",
            "Integrasjon med norske systemer",
            "Komplett oppsett og opplæring",
          ],
        },
        {
          name: "AI-strategi",
          description:
            "Et mini-prosjekt der vi utvikler en helhetlig AI-strategi for bedriften din. Fra prioritering av tiltak til teknologivalg og veikart.",
          price: "10 000–15 000 NOK",
          features: [
            "Behovskartlegging og analyse",
            "Prioritert tiltaksliste",
            "Implementeringsveikart",
          ],
        },
      ],
    },
    process: {
      sectionTitle: "Slik jobber vi",
      steps: [
        {
          title: "Kartlegging",
          description:
            "Vi starter med å forstå bedriften din, prosessene og flaskehalsene. Gratis 30-min samtale.",
        },
        {
          title: "Løsningsdesign",
          description:
            "Vi designer en skreddersydd AI-løsning basert på dine behov og eksisterende systemer.",
        },
        {
          title: "Implementering",
          description:
            "Vi bygger, tester og ruller ut løsningen — og sørger for at teamet ditt kan bruke den.",
        },
      ],
    },
    about: {
      sectionTitle: "Om Helkrypt AI",
      body: "Helkrypt AI er et norsk selskap som hjelper små og mellomstore bedrifter med å ta i bruk kunstig intelligens på en praktisk og lønnsom måte. Vi kombinerer dyp teknisk kompetanse med forståelse for norske forretningsforhold.",
      highlights: [
        "Norsk selskap — vi forstår norske systemer og regelverk",
        "Fokus på konkrete resultater og tidsbesparelser",
        "Fra audit til full implementasjon — alt under ett tak",
      ],
    },
    contact: {
      sectionTitle: "Klar for å komme i gang?",
      sectionSub:
        "Book en gratis 30-minutters samtale, eller send oss en melding. Vi svarer innen 24 timer.",
      bookingCta: "Book gratis samtale",
      bookingLink: "https://calendly.com/helkrypt/30min",
      formTitle: "Eller send oss en melding",
      form: {
        name: "Navn",
        email: "E-post",
        company: "Bedrift",
        phone: "Telefon",
        message: "Melding",
        messagePlaceholder:
          "Fortell oss litt om din bedrift og hva du ønsker å automatisere...",
        submit: "Send forespørsel",
        success: "Takk! Vi tar kontakt innen 24 timer.",
      },
    },
    blog: {
      sectionTitle: "Blogg",
      sectionSub:
        "Innsikt, guider og nyheter om AI-automatisering for norske bedrifter.",
      allCategories: "Alle",
      categories: {
        "ai-for-smb": "AI for SMB",
        "case-study": "Case Study",
        guide: "Guider",
        news: "Nyheter",
      },
      readMore: "Les mer",
      readingTime: "min lesing",
      publishedAt: "Publisert",
      updatedAt: "Oppdatert",
      authorBy: "Av",
      relatedPosts: "Relaterte artikler",
      tableOfContents: "Innhold",
      shareArticle: "Del artikkel",
      copyLink: "Kopier lenke",
      linkCopied: "Lenke kopiert!",
      ctaTitle: "Klar for å automatisere?",
      ctaSub: "Book en gratis 30-minutters samtale og finn ut hvordan AI kan spare din bedrift tid og penger.",
      ctaButton: "Book gratis samtale",
      backToBlog: "Tilbake til blogg",
      noPosts: "Ingen artikler funnet.",
    },
    footer: {
      tagline: "Din partner for smartere løsninger",
      rights: "Alle rettigheter forbeholdt.",
      privacyPolicy: "Privacy Policy",
      personvern: "Personvernerklæring",
      cookieSettings: "Informasjonskapselinnstillinger",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      cta: "Book a call",
      blog: "Blog",
    },
    hero: {
      badge: "AI automation for Norwegian businesses",
      headline: "Get your business ready for the future with AI",
      subheadline:
        "We help Norwegian SMBs save 5+ hours per week through AI automation — from audit to implementation, tailored to your business.",
      partnerLine:
        "At Helkrypt, we're ready to be your partner for smarter solutions.",
      cta: "Book a free call",
      ctaSecondary: "See our services",
      ctaLink: "https://calendly.com/helkrypt/30min",
    },
    services: {
      sectionTitle: "Services",
      sectionSub:
        "From needs assessment to full implementation — we guide you through the entire AI journey.",
      items: [
        {
          name: "AI Audit",
          description:
            "A 2-hour review of your business where we map out exactly what you can automate and save time on. You get an actionable plan you can use right away.",
          price: "2,500 NOK",
          features: [
            "2-hour review",
            "Actionable plan",
            "Money-back guarantee",
          ],
        },
        {
          name: "AI Workshop",
          description:
            "Half-day workshop for your team where we explore AI opportunities in practice. Perfect for getting started and building internal competency.",
          price: "4,500 NOK",
          features: [
            "Half-day intensive course",
            "Hands-on exercises",
            "Tailored to your industry",
          ],
        },
        {
          name: "Workflow Automation",
          description:
            "We build custom AI-powered workflows that automate repetitive tasks — invoicing, customer management, reporting, and more.",
          price: "From 5,000 NOK",
          features: [
            "Custom-built for your business",
            "Integration with Norwegian systems",
            "Complete setup and training",
          ],
        },
        {
          name: "AI Strategy",
          description:
            "A mini-project where we develop a comprehensive AI strategy for your business. From prioritizing initiatives to technology choices and roadmap.",
          price: "10,000–15,000 NOK",
          features: [
            "Needs assessment and analysis",
            "Prioritized action list",
            "Implementation roadmap",
          ],
        },
      ],
    },
    process: {
      sectionTitle: "How we work",
      steps: [
        {
          title: "Discovery",
          description:
            "We start by understanding your business, processes, and bottlenecks. Free 30-min call.",
        },
        {
          title: "Solution Design",
          description:
            "We design a custom AI solution based on your needs and existing systems.",
        },
        {
          title: "Implementation",
          description:
            "We build, test, and deploy the solution — and make sure your team can use it.",
        },
      ],
    },
    about: {
      sectionTitle: "About Helkrypt AI",
      body: "Helkrypt AI is a Norwegian company that helps small and medium-sized businesses adopt artificial intelligence in a practical and profitable way. We combine deep technical expertise with an understanding of Norwegian business conditions.",
      highlights: [
        "Norwegian company — we understand local systems and regulations",
        "Focus on concrete results and time savings",
        "From audit to full implementation — everything under one roof",
      ],
    },
    contact: {
      sectionTitle: "Ready to get started?",
      sectionSub:
        "Book a free 30-minute call, or send us a message. We respond within 24 hours.",
      bookingCta: "Book free call",
      bookingLink: "https://calendly.com/helkrypt/30min",
      formTitle: "Or send us a message",
      form: {
        name: "Name",
        email: "Email",
        company: "Company",
        phone: "Phone",
        message: "Message",
        messagePlaceholder:
          "Tell us about your business and what you want to automate...",
        submit: "Send request",
        success: "Thank you! We'll be in touch within 24 hours.",
      },
    },
    blog: {
      sectionTitle: "Blog",
      sectionSub:
        "Insights, guides, and news about AI automation for Norwegian businesses.",
      allCategories: "All",
      categories: {
        "ai-for-smb": "AI for SMBs",
        "case-study": "Case Study",
        guide: "Guides",
        news: "News",
      },
      readMore: "Read more",
      readingTime: "min read",
      publishedAt: "Published",
      updatedAt: "Updated",
      authorBy: "By",
      relatedPosts: "Related articles",
      tableOfContents: "Contents",
      shareArticle: "Share article",
      copyLink: "Copy link",
      linkCopied: "Link copied!",
      ctaTitle: "Ready to automate?",
      ctaSub: "Book a free 30-minute call and discover how AI can save your business time and money.",
      ctaButton: "Book free call",
      backToBlog: "Back to blog",
      noPosts: "No articles found.",
    },
    footer: {
      tagline: "Your partner for smarter solutions",
      rights: "All rights reserved.",
      privacyPolicy: "Privacy Policy",
      personvern: "Personvernerklæring",
      cookieSettings: "Cookie settings",
    },
  },
};

export type Translations = (typeof translations)["no"];
