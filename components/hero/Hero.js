"use client";
import { Typography } from "@material-tailwind/react";
import React from "react";
const Hero = () => {
  return (
    <div
      className="relative min-h-screen w-full"
      style={{
        backgroundImage: "url('/banner.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-4 sm:px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h3" color="white" className="mb-2">
            Sanatı Estetikle Buluşturan Müze Vitrinleri
          </Typography>
          <Typography variant="h1" color="white" className="lg:max-w-3xl">
            Loi Vitrin, sanat eserlerini en iyi şekilde sergileyen özgün
            tasarımlı müze vitrinleri sunar. Estetik ve işlevsellikte birleşen
            ürünleriyle kültürel mirası vurgular.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Hero;
