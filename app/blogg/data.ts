export type BlogCategory = "ai-for-smb" | "case-study" | "guide" | "news";

export interface BlogPost {
  slug: string;
  title: { no: string; en: string };
  excerpt: { no: string; en: string };
  body: { no: string; en: string };
  category: BlogCategory;
  tags: string[];
  author: { name: string; role: string; avatar?: string };
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  featured?: boolean;
  featuredImage?: string;
  seo: {
    metaTitle?: { no: string; en: string };
    metaDescription?: { no: string; en: string };
    ogImage?: string;
  };
}

export const categoryColors: Record<
  BlogCategory,
  { border: string; bg: string; text: string }
> = {
  "ai-for-smb": {
    border: "border-[var(--gold)]/40",
    bg: "bg-[var(--gold)]/10",
    text: "text-[var(--gold)]",
  },
  "case-study": {
    border: "border-[var(--blue-light)]/40",
    bg: "bg-[var(--blue-light)]/10",
    text: "text-[var(--blue-light)]",
  },
  guide: {
    border: "border-[var(--blue-mid)]/50",
    bg: "bg-[var(--blue-mid)]/15",
    text: "text-[var(--blue-light)]",
  },
  news: {
    border: "border-white/15",
    bg: "bg-white/5",
    text: "text-white",
  },
};

// Placeholder blog posts for design/development — replace with CMS data later
export const blogPosts: BlogPost[] = [
  {
    slug: "ai-automatisering-for-regnskap",
    title: {
      no: "Slik sparer regnskapsbedrifter 10+ timer i uken med AI",
      en: "How accounting firms save 10+ hours per week with AI",
    },
    excerpt: {
      no: "Norske regnskapsbedrifter bruker i snitt 15 timer i uken på repetitive oppgaver. Vi viser deg hvordan AI kan automatisere fakturering, avstemming og rapportering.",
      en: "Norwegian accounting firms spend an average of 15 hours per week on repetitive tasks. We show you how AI can automate invoicing, reconciliation, and reporting.",
    },
    body: {
      no: "## Hvorfor automatisering er viktig for regnskap\n\nRegnskapsbransjen i Norge står overfor en digital transformasjon. Med nye krav fra Skatteetaten og økende forventninger fra kunder, er det viktigere enn noensinne å effektivisere prosesser.\n\n## De vanligste flaskehalsene\n\n- **Manuell fakturering** — Tid brukt på å opprette, sende og følge opp fakturaer\n- **Bankavstemming** — Matching av transaksjoner mot reskontro\n- **Rapportering** — Månedlig og kvartalsvis rapportering til kunder\n\n## Slik fungerer AI-automatisering\n\nVed å koble sammen systemer som Tripletex, Fiken eller Visma med AI-drevne arbeidsflyter, kan du automatisere:\n\n1. **Fakturagjenkjenning** — AI leser innkommende fakturaer og kategoriserer dem automatisk\n2. **Smart avstemming** — Automatisk matching av banktransaksjoner\n3. **Rapportgenerering** — Automatiske månedlige rapporter sendt direkte til kunder\n\n## Resultater fra norske bedrifter\n\n> \"Vi sparer over 12 timer i uken etter at vi automatiserte fakturahåndteringen vår.\" — Daglig leder, regnskapsbyrå i Bergen\n\n## Kom i gang\n\nEn AI-audit på 2 timer gir deg en konkret handlingsplan for hva du kan automatisere i din bedrift.",
      en: "## Why automation matters for accounting\n\nThe accounting industry in Norway is facing a digital transformation. With new requirements from the Tax Administration and increasing customer expectations, it's more important than ever to streamline processes.\n\n## The most common bottlenecks\n\n- **Manual invoicing** — Time spent creating, sending, and following up invoices\n- **Bank reconciliation** — Matching transactions against ledgers\n- **Reporting** — Monthly and quarterly reporting to clients\n\n## How AI automation works\n\nBy connecting systems like Tripletex, Fiken, or Visma with AI-powered workflows, you can automate:\n\n1. **Invoice recognition** — AI reads incoming invoices and categorizes them automatically\n2. **Smart reconciliation** — Automatic matching of bank transactions\n3. **Report generation** — Automatic monthly reports sent directly to clients\n\n## Results from Norwegian businesses\n\n> \"We save over 12 hours per week after automating our invoice handling.\" — CEO, accounting firm in Bergen\n\n## Get started\n\nA 2-hour AI audit gives you a concrete action plan for what you can automate in your business.",
    },
    category: "ai-for-smb",
    tags: ["regnskap", "automatisering", "faktura", "tripletex"],
    author: { name: "Helkrypt AI", role: "AI-rådgiver" },
    publishedAt: "2026-04-01",
    readingTime: 5,
    featured: true,
    seo: {
      metaDescription: {
        no: "Lær hvordan norske regnskapsbedrifter sparer 10+ timer i uken med AI-automatisering av fakturering, avstemming og rapportering.",
        en: "Learn how Norwegian accounting firms save 10+ hours per week with AI automation of invoicing, reconciliation, and reporting.",
      },
    },
  },
  {
    slug: "kom-i-gang-med-ai-automatisering",
    title: {
      no: "Steg-for-steg: Kom i gang med AI-automatisering",
      en: "Step-by-step: Getting started with AI automation",
    },
    excerpt: {
      no: "En praktisk guide for norske bedriftseiere som vil starte med AI-automatisering — fra kartlegging til implementering.",
      en: "A practical guide for Norwegian business owners who want to start with AI automation — from assessment to implementation.",
    },
    body: {
      no: "## Steg 1: Kartlegg repetitive oppgaver\n\nStart med å identifisere oppgaver som tar mest tid og som gjentas ofte. Typiske eksempler:\n\n- Besvare kundehenvendelser\n- Sende og følge opp fakturaer\n- Oppdatere CRM-systemer\n- Generere rapporter\n\n## Steg 2: Prioriter etter ROI\n\nIkke alt bør automatiseres. Fokuser på oppgaver der:\n\n1. Volumet er høyt (daglig/ukentlig)\n2. Prosessen er forutsigbar\n3. Feil har begrenset konsekvens\n\n## Steg 3: Velg riktig verktøy\n\nFor norske SMB-er anbefaler vi:\n\n- Dedikerte workflow-plattformer for prosessautomatisering\n- **OpenAI API** for spesialtilpassede løsninger\n\n## Steg 4: Start smått\n\nBegynn med én prosess. Mål resultatet. Skaler deretter.\n\n## Steg 5: Book en AI-audit\n\nBook en uforpliktende 2-timers audit der vi kartlegger dine muligheter og gir deg en konkret handlingsplan.",
      en: "## Step 1: Map repetitive tasks\n\nStart by identifying tasks that take the most time and are repeated often. Typical examples:\n\n- Answering customer inquiries\n- Sending and following up invoices\n- Updating CRM systems\n- Generating reports\n\n## Step 2: Prioritize by ROI\n\nNot everything should be automated. Focus on tasks where:\n\n1. Volume is high (daily/weekly)\n2. The process is predictable\n3. Errors have limited consequences\n\n## Step 3: Choose the right tool\n\nFor Norwegian SMBs, we recommend:\n\n- Dedicated workflow platforms for process automation\n- **OpenAI API** for custom solutions\n\n## Step 4: Start small\n\nBegin with one process. Measure results. Then scale.\n\n## Step 5: Book an AI audit\n\nBook a no-obligation 2-hour audit where we map your opportunities and give you a concrete action plan.",
    },
    category: "guide",
    tags: ["guide", "kom-i-gang", "automatisering", "workflow"],
    author: { name: "Helkrypt AI", role: "AI-rådgiver" },
    publishedAt: "2026-03-20",
    readingTime: 6,
    seo: {
      metaDescription: {
        no: "Praktisk guide for norske bedrifter: Slik kommer du i gang med AI-automatisering i 5 steg.",
        en: "Practical guide for Norwegian businesses: How to get started with AI automation in 5 steps.",
      },
    },
  },
  {
    slug: "ai-trender-2026-norske-smb",
    title: {
      no: "AI-trender 2026: Hva norske SMB-er bør vite",
      en: "AI trends 2026: What Norwegian SMBs need to know",
    },
    excerpt: {
      no: "Fra agenter til automatisert compliance — de viktigste AI-trendene som påvirker norske småbedrifter i 2026.",
      en: "From agents to automated compliance — the most important AI trends affecting Norwegian small businesses in 2026.",
    },
    body: {
      no: "## 1. AI-agenter tar over rutineoppgaver\n\nI 2026 ser vi et skifte fra enkle chatbots til autonome AI-agenter som kan utføre flerstegsprosesser uten menneskelig tilsyn.\n\n## 2. Norskspråklig AI blir bedre\n\nMed forbedrede norske språkmodeller kan SMB-er nå bruke AI-verktøy som faktisk forstår norsk kontekst, lovverk og forretningspraksis.\n\n## 3. Automatisert compliance\n\nNye verktøy gjør det enklere å holde seg oppdatert på GDPR, bokføringsloven og andre regelverk.\n\n## 4. AI-as-a-Service for SMB\n\nKostnaden for AI-løsninger har falt dramatisk, noe som gjør avansert automatisering tilgjengelig for bedrifter med 2-50 ansatte.\n\n## Hva betyr dette for din bedrift?\n\nBedrifter som starter med AI i 2026 vil ha et betydelig konkurransefortrinn innen 2027.",
      en: "## 1. AI agents take over routine tasks\n\nIn 2026, we see a shift from simple chatbots to autonomous AI agents that can perform multi-step processes without human oversight.\n\n## 2. Norwegian-language AI improves\n\nWith improved Norwegian language models, SMBs can now use AI tools that actually understand Norwegian context, legislation, and business practices.\n\n## 3. Automated compliance\n\nNew tools make it easier to stay updated on GDPR, accounting laws, and other regulations.\n\n## 4. AI-as-a-Service for SMBs\n\nThe cost of AI solutions has dropped dramatically, making advanced automation accessible for businesses with 2-50 employees.\n\n## What does this mean for your business?\n\nBusinesses that start with AI in 2026 will have a significant competitive advantage by 2027.",
    },
    category: "news",
    tags: ["trender", "2026", "agenter", "compliance"],
    author: { name: "Helkrypt AI", role: "AI-rådgiver" },
    publishedAt: "2026-03-15",
    readingTime: 4,
    seo: {
      metaDescription: {
        no: "De viktigste AI-trendene for norske SMB-er i 2026: agenter, norskspråklig AI, automatisert compliance og AI-as-a-Service.",
        en: "The most important AI trends for Norwegian SMBs in 2026: agents, Norwegian-language AI, automated compliance, and AI-as-a-Service.",
      },
    },
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(
  currentSlug: string,
  category: BlogCategory,
  limit = 3
): BlogPost[] {
  return blogPosts
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}

export function getPostsByCategory(
  category: BlogCategory | null
): BlogPost[] {
  if (!category) return blogPosts;
  return blogPosts.filter((p) => p.category === category);
}
