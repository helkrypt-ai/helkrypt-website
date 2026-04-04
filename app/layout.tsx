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
  openGraph: {
    title: "Helkrypt AI — AI for norske bedrifter",
    description: "Automatiser din bedrift med AI. Integrert med norske systemer.",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
