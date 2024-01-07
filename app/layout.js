import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Loi Vitrin - Sergi ve Müze Vitrinleri Tasarımı",
  description:
    "Loi Vitrin, müze ve sergi vitrinleri tasarlayan öncü bir şirkettir. Sanat eserlerinin en iyi şekilde sergilenmesini sağlar. Özgün tasarımları ve kaliteli üretimiyle kültürel mirasın vurgulanmasına katkıda bulunur.",
  keywords:
    "Vitrin, Müze Vitrin, Müze Vitrini, Müze Vitrinleri, Müze Vitrin Sistemleri, Müze Cam Vitrin, Müze Sergi, Müze Sergi Ekipmanları, Müze Sergi Sistemleri, Müze Depolama, Müze Depolama Sistemi, Müze Depolama Sistemleri, Vitrin İçi İklimlendirme, İklimlendirme",
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
        <Analytics />
      </body>
    </html>
  );
}
