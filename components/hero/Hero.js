"use client";
import { Typography } from "@material-tailwind/react";
import React from "react";
const Hero = () => {
  return (
    <div
      className="relative min-h-screen w-full"
      style={{
        backgroundImage:
          "url('https://fibu.la/cache/1900_960_Projeler/5d84c6cc2fb4b48a452cadd3752eba9b.JPG')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
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
