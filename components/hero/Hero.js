"use client";
import { Typography } from "@material-tailwind/react";
import React from "react";
const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-[url('http://www.incase.com.tr/dosyalar/site_resim/sayfalar/9189098.JPG')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h3" color="white" className="mb-2">
            Incase Müze Vitrin ve Sergileme
          </Typography>
          <Typography variant="h1" color="white" className="lg:max-w-3xl">
            Incase Müze Vitrin ve Sergileme
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
          >
            Incase Müze Vitrin ve Sergileme
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Hero;