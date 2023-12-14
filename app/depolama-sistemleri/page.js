import Card from "@/components/card";
import cn from "@/utils/helpers/cn";
import React from "react";

export const metadata = {
  title: "Depo Sistemleri",
  description:
    "Loi Vitrin olarak depo sistemleri konusunda geniş bir hizmet yelpazesi sunuyoruz. Depolama çözümleri, raf sistemleri, lojistik planlama ve depo düzenleme gibi alanlarda uzmanız.",
  canonical: "/depo-sistemleri",
  openGraph: {
    title: "Depo Sistemleri",
    description:
      "Loi Vitrin olarak depo sistemleri konusunda geniş bir hizmet yelpazesi sunuyoruz. Depolama çözümleri, raf sistemleri, lojistik planlama ve depo düzenleme gibi alanlarda uzmanız.",
    url: "/hizmetlerimiz/depo-sistemleri",
    type: "website",
    images: [
      {
        url: "/images/depo-sistemleri.jpg",
        width: 1200,
        height: 630,
        alt: "Depo Sistemleri",
      },
    ],
  },
};

const Depo = (props) => {
  const images = [
    {
      title: "13li Tablo Saklama Sistemi",
      image: "/depo1.jpeg",
    },
    {
      title: "15li Açık Depolama Sistemi",
      image: "/depo2.jpeg",
    },
    {
      title: "16lı Kompakt Depolama Sistemi",
      image: "/depo3.jpeg",
    },
    {
      title: "14lü Açık Depolama Sistemi",
      image: "/depo4.jpeg",
    },
    {
      title: "18li Rulo Saklamalı Dolap",
      image: "/depo5.jpeg",
    },
    {
      title: "19lu Rulo Saklımalı Dolap",
      image: "/depo6.jpeg",
    },
    {
      title: "20li Çekmece Dolap",
      image: "/depo7.jpeg",
    },
    {
      title: "21li Tekli Çekmeceli Modül",
      image: "/depo8.jpeg",
    },
    {
      title: "17li Açık Kompakt",
      image: "/depo9.jpeg",
    },
  ];
  return (
    <div
      className={cn(
        "md:px-8 mx-auto xl:px-5 relative min-h-screen w-full",
        !props.alt && "py-16 lg:py-20",
        props.className
      )}
    >
      <div className="mx-auto mt-10 px-4 sm:px-8 h-full">
        <h1 className="mt-2 mb-3 text-3xl text-[#1a202c] font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl ">
          Depo Sistemleri
        </h1>
        <div className="text-center">
          <p className="text-lg text-white">
            Sizi dinlemekten mutluluk duyarız
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, i) => (
            <Card key={i} title={image.title} image={image.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Depo;
