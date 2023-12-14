import Image from "next/image";
import React from "react";

const Card = ({ title, image }) => {
  return (
    <div className="flex flex-col justify-between shadow-md cursor-pointer hover:scale-105 transition-all duration-150">
      <div className="relative h-[350px]">
        <Image src={image} alt={title} fill className="w-full" />
      </div>
      <div className="flex items-center justify-center h-16">
        <h1 className="text-xl sm:text-lg md:text-lg xl:text-xl font-bold">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Card;
