import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import { I18nProvider } from "./i18n/i18nContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ResQNet | Disaster Awareness & Preparedness",
  description: "Learn about natural disasters, safety measures, and life-saving Dos and Don'ts. Be Aware. Be Prepared. Save Lives.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <I18nProvider>
          <CustomCursor />
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
