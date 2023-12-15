import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Head from "next/head";

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
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E6R1XGMHZL"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-E6R1XGMHZL');
              `,
          }}
        ></script>
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
