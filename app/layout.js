import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Head from "next/head";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Loi Vitrin - Sergi ve Müze Vitrinleri Tasarımı",
  description:
    "Loi Vitrin, müze ve sergi vitrinleri tasarlayan öncü bir şirkettir. Sanat eserlerinin en iyi şekilde sergilenmesini sağlar. Özgün tasarımları ve kaliteli üretimiyle kültürel mirasın vurgulanmasına katkıda bulunur.",
  keywords:
    "Müze vitrinleri, sergi vitrinleri, müze teşhircilik, sanat eserleri sergileme, özel sergi vitrinleri, antik eserler vitrini, tarihi eserler sergileme, özelleştirilmiş müze vitrinleri, kültürel miras sergileme çözümleri",
  image: "/logo.jpeg",
  url: "https://loivitrin.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {<GoogleAnalytics />}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
