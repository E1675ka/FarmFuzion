import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Mobile from "@/components/Mobile";
import CoreOfferings from "@/components/CoreOfferings";
import CTA from "@/components/CTA";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Partners />
      <About />
      <Mobile />
      <CoreOfferings />
      <CTA />
      <ComingSoon />
      <Footer />
    </main>
  );
}
