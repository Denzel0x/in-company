import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorTrail from "@/components/CursorTrail";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://invorious.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Invorious Software Agency — Custom Software Development, Sydney",
    template: "%s — Invorious Software Agency",
  },
  description:
    "Invorious builds tailored web, mobile and blockchain software for Sydney businesses. Technology consulting, Web2 apps, and Web3 development, delivered by a client-centred team.",
  keywords: [
    "custom software development Sydney",
    "web3 development Australia",
    "software consultancy Sydney",
    "blockchain development agency",
    "web app development",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "Invorious Software Agency",
    title: "Invorious Software Agency — Custom Software Development, Sydney",
    description:
      "Tailored software solutions across technology consulting, Web2 and Web3. Trust Invorious to help your business succeed through technology.",
    images: [{ url: "/brand/cover.jpg", width: 1128, height: 191 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invorious Software Agency — Custom Software Development, Sydney",
    description:
      "Tailored software solutions across technology consulting, Web2 and Web3.",
    images: ["/brand/cover.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':true;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <CursorTrail />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
