"use client";

import { Card, CardBody, Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";
import React from "react";
import Image from "next/image";

const EVENT_INFO = [
  {
    title: "Cutting-Edge Insights!",
    description:
      "Gain deep insights into the latest AI trends, developments, and applications that are reshaping industries worldwide. ",
    subTitle: "Presentation",
    image: "main-1.jpeg"
  },
  {
    title: "Practical Knowledge!",
    description:
      "Attend workshops and hands-on sessions to acquire practical skills that you can apply immediately.",
    subTitle: "Workshops",
    image: "main-2.jpeg"
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h6" className="text-center mb-2 text-orange-500" >
      Misyonumuz
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray">
      LOİ Vitrin Sanatın İncelikli Sunumu
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
      Loi Vitrin olarak misyonumuz; müzelerin, sergi mekânlarının ve kültürel mirasın korunması ve sergilenmesinde en iyi ekipmanları ve çözümleri sunmak, her adımda kaliteyi ve yeniliği hedeflemektedir. Müşteri memnuniyetini merkeze alarak, sektörde öncü ve güvenilir bir firma olmayı sürdürmekteyiz.
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
      {/* <Card shadow={false} style={{
      backgroundImage: "url('/main-1.jpeg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}
    className="w-full rounded-md ">
      <CardBody className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl">
      </CardBody>
    </Card>
    <Card shadow={false} style={{
      backgroundImage: "url('/main-2.jpeg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}
    className="w-full rounded-md">
      <CardBody className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl">
      </CardBody>
    </Card>
    <Card shadow={false} style={{
      backgroundImage: "url('/main-3.jpeg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}
    className="w-full rounded-md">
      <CardBody className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl">
      </CardBody>
    </Card>
    <Card shadow={false} style={{
      backgroundImage: "url('/main-4.jpeg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}
    
    className="w-full rounded-md">
      <CardBody className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl">
      </CardBody>
    </Card> */}
    
    <div className="w-full min-h-[400px] max-h-[600px] relative mb-10  lg:mb-0">
    <Image
                src="/main-1.jpeg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="relative z-40 object-cover w-full h-full rounded"
              />
      </div>
      <div className="w-full min-h-[400px] max-h-[600px] relative mb-10  lg:mb-0">
    <Image
                src="/main-2.jpeg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="relative z-40 object-cover w-full h-full rounded"
              />
      </div>
      <div className="w-full min-h-[400px] max-h-[600px] relative mb-10 lg:mb-0">
    <Image
                src="/main-3.jpeg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="relative z-40 object-cover w-full h-full rounded"
              />
      </div>
        <div className="w-full min-h-[400px] max-h-[600px] relative mb-10  lg:mb-0">
    <Image
                src="/main-4.jpeg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="relative z-40 object-cover w-full h-full rounded"
              />
      </div>
      </div>
    </section>
  );
}

export default AboutEvent;
