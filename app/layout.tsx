import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medsure - Know Your Coverage Before You Book",
  description:
    "Stop calling around to verify insurance. Upload your info, tell us which providers you're considering, and get clear answers about your coverage in hours, not days.",
  keywords: [
    "insurance verification",
    "healthcare",
    "in-network providers",
    "coverage check",
    "medical insurance",
  ],
  openGraph: {
    title: "Medsure - Know Your Coverage Before You Book",
    description:
      "Stop calling around to verify insurance. Get clear answers about your coverage in hours, not days.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
