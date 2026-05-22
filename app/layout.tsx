import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaval — A digital safety agent that sits between you and the internet",
  description:
    "Kaval verifies what's real, watches what matters to you, and briefs you in plain language. For your family. For your company. WhatsApp-first.",
  metadataBase: new URL("https://kaval.chat"),
  openGraph: {
    title: "Kaval — Trust infrastructure for the AI era",
    description:
      "A digital safety agent that sits between you and the internet. Verify · Watch · Brief.",
    url: "https://kaval.chat",
    siteName: "Kaval",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23D88B3F'/%3E%3Ctext x='50%25' y='62%25' text-anchor='middle' font-family='Georgia,serif' font-size='52' fill='white'%3E*%3C/text%3E%3C/svg%3E",
      },
    ],
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
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-ink">{children}</body>
    </html>
  );
}
