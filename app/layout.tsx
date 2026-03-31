import type { Metadata, Viewport } from "next";
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
  title: "Medsure - Know Your Coverage Before You Book",
  description: "Stop calling around to verify insurance. Upload your info, tell us which providers you're considering, and get clear answers about your coverage in hours, not days.",
  keywords: ["insurance verification", "healthcare", "in-network providers", "coverage check", "medical insurance"],
  openGraph: {
    title: "Medsure - Know Your Coverage Before You Book",
    description: "Stop calling around to verify insurance. Get clear answers about your coverage in hours, not days.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f6f3",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
