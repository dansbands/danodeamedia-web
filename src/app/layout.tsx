import type { Metadata } from "next";
import "../styles/globals.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HashScroll } from "@/components/layout/HashScroll";

export const metadata: Metadata = {
  title: {
    default: "Dan O'Dea Media",
    template: "%s | Dan O'Dea Media",
  },
  description: "Dan O'Dea Media",
  icons: {
    icon: "/dam/images/Favicon3.png",
    apple: "/dam/images/Favicon3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <HashScroll />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
