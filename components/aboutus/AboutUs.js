import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      {" "}
      <section class=" lg:py-20 font-poppins">
        <div class="max-w-6xl mx-auto lg:py-6 md:px-6">
          <div class="flex flex-wrap ">
            <div class="w-full mb-10 lg:w-1/2 lg:mb-0 ">
              <div class="lg:max-w-md">
                <div class="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                  <span class="text-sm text-gray-600 uppercase">
                    Hizmetlerimiz
                  </span>
                  <h1 class="mt-2 text-2xl font-black text-gray-700 md:text-5xl">
                    LOİ Vitrin: Sergi Deneyiminizi Özelleştirin
                  </h1>
                </div>
                <p class="px-4 mb-2 sm:mb-8 text-base leading-7 text-gray-500">
                  Sanat eserlerinin, antik değerlerin ve tarihi eserlerin
                  sergilenmesi için özgün tasarımlı vitrinler ve sergileme
                  çözümleri sunuyoruz. Her eser için en uygun sunum ortamını
                  oluşturmak için tasarım ve üretimdeki uzmanlığımızı
                  kullanıyoruz.
                </p>
                <p class="px-4 mb-2 sm:mb-8 text-base leading-7 text-gray-500">
                  Müşterilerimizin özel ihtiyaçlarına uygun olarak
                  özelleştirilmiş vitrinler sunuyoruz. Ayrıca, müze düzenlemesi,
                  yerleştirme ve sergi konsepti gibi konularda danışmanlık
                  hizmeti sağlıyoruz.
                </p>
                <p class="px-4 mb-2 sm:mb-8 text-base leading-7 text-gray-500">
                  Loi Vitrin olarak, müşterilerimize kültürel mirasın en iyi
                  şekilde sergilenmesi için eksiksiz ve özelleştirilmiş çözümler
                  sunuyoruz. Müşteri memnuniyetini ve kaliteyi ön planda
                  tutarak, sektörde öncü hizmetler sunmaktan gurur duyuyoruz.
                </p>
              </div>
            </div>
            <div className="w-full min-h-[400px] max-h-[600px] relative mx-4 sm:mx-0 mb-10 lg:w-1/2 lg:mb-0">
              <Image
                src="/main-5.jpeg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="relative z-40 object-cover w-full h-full rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
