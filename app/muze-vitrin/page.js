import Card from "@/components/card";
import cn from "@/utils/helpers/cn";
import React from "react";

const MuzeVitrin = (props) => {
  return (
    <div
      className={cn(
        "md:px-8 mx-auto xl:px-5 relative min-h-screen w-full",
        !props.alt && "py-16 lg:py-20",
        props.className
      )}
    >
      <div className=" mx-auto mt-10 px-8 h-full">
        <h1 className="mt-2 mb-3 text-3xl text-[#1a202c] font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl ">
          Müze Vitrin ve Sergileme
        </h1>
        <div className="text-center">
          <p className="text-lg text-white">
            Sizi dinlemekten mutluluk duyarız
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default MuzeVitrin;
