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
    "Vi hjelper norske SMB-er med å spare 5+ timer i uken gjennom AI-automatisering. Fra audit til implementasjon, tilpasset din bedrift.",
  keywords: [
    "AI",
    "kunstig intelligens",
    "norske bedrifter",
    "SMB",
    "automatisering",
    "AI-audit",
    "AI-strategi",
    "workflow-automatisering",
  ],
  openGraph: {
    title: "Helkrypt AI — Din partner for smartere løsninger",
    description:
      "Vi hjelper norske SMB-er med å spare 5+ timer i uken gjennom AI-automatisering.",
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
      lang="nb"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
