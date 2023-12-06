import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <section className="shadow-md w-full p-4 cursor-pointer hover:scale-110 transition-all duration-150">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="https://fibu.la/cache/357_238_Urunler/2f28fefb30f3e7c7c8dbfc2f7f62ddd7.JPG"
          alt="random"
          width={357}
          height={238}
          className="w-full"
        />
        <div className="flex flex-col px-4 mt-10 items-center justify-center">
          <h1 className="text-2xl sm:text-lg md:text-lg  xl:text-xl font-bold">
            DUVAR TİPİ VİTRİNLER
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Card;
