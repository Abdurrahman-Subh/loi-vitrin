import Image from "next/image";
import React from "react";

const Card = ({ image, title }) => {
  return (
    <section className="shadow-md w-full p-4 cursor-pointer hover:scale-110 transition-all duration-150">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={357}
          height={238}
          className="w-full"
        />
        <div className="flex flex-col px-4 mt-10 items-center justify-center">
          <h1 className="text-xl sm:text-lg md:text-lg  xl:text-xl font-bold">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Card;
