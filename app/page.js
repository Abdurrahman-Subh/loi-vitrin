import AboutEvent from "@/components/about-event";
import Hero from "@/components/hero/Hero";
import SponsoredBy from "@/components/sponsored-by";

export default function Home() {
  return (
    <section>
      <Hero />
      <SponsoredBy />
      <AboutEvent />
    </section>
  );
}
