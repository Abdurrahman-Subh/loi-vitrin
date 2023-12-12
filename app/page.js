import AboutEvent from "@/components/about-event";
import AboutUs from "@/components/aboutus/AboutUs";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
        <section className="px-4">
          <AboutEvent />
          <AboutUs />
        </section>
      </section>
    </>
  );
}
