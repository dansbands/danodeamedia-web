import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dan Odea",
    template: "%s | Dan Odea",
  },
  description: "Staff frontend engineer focused on clean, accessible, maintainable UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
