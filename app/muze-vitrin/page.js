import Card from "@/components/card";
import MuzeCard from "@/components/muzeCard";
import cn from "@/utils/helpers/cn";
import React from "react";

export const metadata = {
  title: "Müze Vitrin ve Sergileme",
  description:
    "Loi Vitrin olarak, müze vitrin tasarımı, özelleştirme ve satış sonrası destek gibi geniş bir hizmet yelpazesi sunmaktayız, kültürel mirasın en iyi şekilde sergilenmesine odaklanıyoruz",
  canonical: "/muze-vitrin",
  openGraph: {
    title: "Müze Vitrin ve Sergileme",
    description:
      "Loi Vitrin olarak, müze vitrin tasarımı, özelleştirme ve satış sonrası destek gibi geniş bir hizmet yelpazesi sunmaktayız, kültürel mirasın en iyi şekilde sergilenmesine odaklanıyoruz",
    url: "/hizmetlerimiz",
    type: "website",
    images: [
      {
        url: "/images/loi-vitrin-hizmetlerimiz.jpg",
        width: 1200,
        height: 630,
        alt: "MÜze Vitrin",
      },
    ],
  },
};

const MuzeVitrin = (props) => {
  const images = [
    {
      title: "Masa Tipi Vitrin",
      image: "/muze1.jpeg",
    },
    {
      title: "Dairesel Vitrin",
      image: "/muze2.jpeg",
    },
    {
      title: "Kule Tipi Vitrin",
      image: "/muze3.jpeg",
    },
    {
      title: "Duvar Tipi Vitrin",
      image: "/muze4.jpeg",
    },
    {
      title: "Duvar Tipi Vitrin",
      image: "/muze5.jpeg",
    },
    {
      title: "Dörtyüzü Cam Dairesel Vitrin",
      image: "/muze6.jpeg",
    },
    {
      title: "Gömü Vitrin",
      image: "/muze7.jpeg",
    },
    {
      title: "Askı Niş Vitrin",
      image: "/muze8.jpeg",
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
      <div className=" mx-auto mt-10 px-4 sm:px-8 h-full">
        <h1 className="mt-2 mb-3 text-3xl text-[#1a202c] font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl ">
          Müze Vitrin ve Sergileme
        </h1>
        <div className="text-center">
          <p className="text-lg text-white">
            Sizi dinlemekten mutluluk duyarız
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, i) => (
            <MuzeCard key={i} title={image.title} image={image.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MuzeVitrin;
