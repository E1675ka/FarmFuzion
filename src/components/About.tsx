"use client";
import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function About() {
  const { elementRef: titleRef, style: titleStyle } = useScrollReveal({
    duration: 600,
    delay: 0,
    direction: "up",
    distance: 40,
  });

  const { elementRef: contentRef, style: contentStyle } = useScrollReveal({
    duration: 600,
    delay: 200,
    direction: "up",
    distance: 40,
  });

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("mobile");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-16 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto relative z-10 px-8">

        <div
          ref={titleRef}
          style={titleStyle}
          className=" z-10 h-40 rounded-xl p-12 text-white mb-8 relative"
        >
          <div className="absolute  h-40 inset-0">
            <Image
              src="/images/FIELDS.png"
              alt="Fields"
              fill
              className="object-cover object-center rounded-[38px]"
              priority
            />
          </div>

          <button onClick={scrollToAbout}
            data-variant="circular"
            className="absolute flex left-1/2 -mt-16 mb-4">
            <Image
              src="/icons/chevron-down.png"
              alt="Chevron Down"
              width={42}
              height={42}
              className="bg-farm-light-green p-1.5 rounded-full"
            />
          </button>

          <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-h2 text-white text-center">
            About FarmFuzion
          </h2>


        </div>

        <div
          ref={contentRef}
          style={contentStyle}
          className="bg-[#F4F9EC] rounded-[28px] p-8 -mt-20"
        >
          <p className="text-gray-700 text-lg font-medium leading-relaxed mb-6 mt-10">
            FarmFuzion is a digital infrastructure layer for agriculture,
            embedding bank-grade financial services directly into the agri-value
            chain. We provide financial services, commodity price information,
            weather forecasting, technical information into one integrable
            ecosystem.
          </p>
          <p className="text-gray-700 text-lg font-medium leading-relaxed">
            Built for scale, FarmFuzion supports near-time settlements, dynamic
            risk scoring, and alternative credit profiling through agronomic
            data, enabling institutions to extend capital, underwrite risk, and
            streamline service delivery to hard-to-reach markets.
          </p>
        </div>
      </div>
    </section>
  );
}
