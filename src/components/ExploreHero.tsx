"use client";

import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function ExploreHero() {
  // Image animation
  const { elementRef: imageRef, style: imageStyle } = useScrollReveal({
    duration: 700,
    delay: 0,
    direction: "up",
    distance: 50,
  });

  // Heading animation
  const { elementRef: headingRef, style: headingStyle } = useScrollReveal({
    duration: 700,
    delay: 200,
    direction: "up",
    distance: 40,
  });

  // Paragraph animation
  const { elementRef: paragraphRef, style: paragraphStyle } = useScrollReveal({
    duration: 700,
    delay: 400,
    direction: "up",
    distance: 30,
  });

  return (
    <section className="pt-24 pb-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Image */}
        <div
          ref={imageRef}
          style={imageStyle}
          className="rounded-2xl p-6 md:p-8 mb-8"
        >
          <Image
            src="/images/fhero.png"
            alt="Farmer Illustration"
            width={1600}
            height={900}
            className="w-full h-auto rounded-xl object-cover"
            priority
          />
        </div>

        {/* Heading */}
        <div
          ref={headingRef}
          style={headingStyle}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl max-w-[800px] md:text-5xl text-center font-bold text-gray-600 mb-4">
            Tailored Tools for Everyone in the Agricultural Ecosystem
          </h1>
        </div>

        {/* Divider / Paragraph */}
        <div ref={paragraphRef} style={paragraphStyle}>
          <p className=" text-gray-700 font-regular text-[16px] tracking-wider mt-10">
            ----------------------------------------------------
            &nbsp;&nbsp;&nbsp; FOR FARMERS &nbsp;&nbsp;&nbsp;
            ------------------------------------------------------
          </p>
        </div>
      </div>
    </section>
  );
}
