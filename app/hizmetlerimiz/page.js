import React from "react";

export const metadata = {
  title: "Hizmetlerimiz",
  description:
    "Loi Vitrin olarak, müze vitrin tasarımı, özelleştirme ve satış sonrası destek gibi geniş bir hizmet yelpazesi sunmaktayız, kültürel mirasın en iyi şekilde sergilenmesine odaklanıyoruz",
  canonical: "/hizmetlerimiz",
  openGraph: {
    title: "Hizmetlerimiz",
    description:
      "Loi Vitrin olarak, müze vitrin tasarımı, özelleştirme ve satış sonrası destek gibi geniş bir hizmet yelpazesi sunmaktayız, kültürel mirasın en iyi şekilde sergilenmesine odaklanıyoruz",
    url: "/hizmetlerimiz",
    type: "website",
    images: [
      {
        url: "/images/loi-vitrin-hizmetlerimiz.jpg",
        width: 1200,
        height: 630,
        alt: "Hizmetlerimiz",
      },
    ],
  },
};

const Service = () => {
  return (
    <section className="pb-12 pt-28 lg:pb-[90px] lg:pt-[120px] px-2">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Hizmetlerimiz
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] sm:text-4xl md:text-[40px]">
                Ne Sunuyoruz?
              </h2>
              <p className="text-base text-body-color">
                Loi Vitrin olarak, müze vitrin tasarımı, özelleştirme ve satış
                sonrası destek gibi geniş bir hizmet yelpazesi sunmaktayız,
                kültürel mirasın en iyi şekilde sergilenmesine odaklanıyoruz
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Yenileyici Tasarım"
            details="Nitelik, hizmet, bütünlük ve estetik unsurları önemseyen seçkin müşterilerle çalışmaktan keyif alıyoruz. İhtiyaçlarınızı göz önünde bulundurarak yenilikçi ve estetik tasarımlar sunuyoruz."
          />
          <ServiceCard
            title="Özenli Müşteri İlişkileri"
            details="Müşteri memnuniyetini esas alarak, özenli ve samimi bir ilişki kuruyoruz. Hizmetlerimizi ihtiyaçlarınıza yönelik şekillendirerek size en iyi deneyimi sunmayı amaçlıyoruz."
          />
          <ServiceCard
            title="Kalite Odaklı Hizmet"
            details="Kaliteyi her aşamada ön planda tutarak, hizmetlerimizi ve ürünlerimizi en üst seviyede sunmayı hedefliyoruz. Detaylara önem vererek kaliteli çözümler üretiyoruz."
          />
          <ServiceCard
            title="Estetik Yaklaşım"
            details="Müşterilerimizin beklentilerini karşılamak adına estetik açıdan zengin ve göz alıcı çözümler sunuyoruz. Tasarımlarımızda estetiği ve işlevselliği bir arada buluşturuyoruz."
          />
          <ServiceCard
            title="Profesyonel Hizmet Anlayışı"
            details="Profesyonellik, dürüstlük ve müşteri odaklı yaklaşımımızla, işlerinizi en iyi şekilde gerçekleştirmek için çalışıyoruz. Her adımda profesyonel hizmet sunmaya özen gösteriyoruz."
          />
          <ServiceCard
            title="Tasarımın Gücü"
            details="Kaliteli tasarımlarla fark yaratıyor, müşterilerimizin beklentilerini aşmayı hedefliyoruz. Tasarımın gücüyle etkileyici ve özgün çözümler sunuyoruz."
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
          <h4 className="mb-[14px] text-2xl font-semibold">{title}</h4>
          <p className="text-body-color">{details}</p>
        </div>
      </div>
    </>
  );
};
