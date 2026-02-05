"use client";

import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function AboutHero() {
  // Image reveal
  const { elementRef: imageRef, style: imageStyle } = useScrollReveal({
    duration: 700,
    delay: 0,
    direction: "up",
    distance: 50,
  });

  // Text reveal
  const { elementRef: textRef, style: textStyle } = useScrollReveal({
    duration: 700,
    delay: 200,
    direction: "up",
    distance: 40,
  });

  return (
    <section className="pt-24 pb-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center px-8">
        {/* Image */}
        <div
          ref={imageRef}
          style={imageStyle}
          className="flex justify-center "
        >
          <div className="rounded-lg p-6 w-full max-w-2xl">
            <Image
              src="/images/tech display.svg"
              alt="About Hero Illustration"
              width={800}
              height={540}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Heading */}
        <div ref={textRef} style={textStyle}>
          <h1 className="text-h2 mb-6">
            We exist to build a more rewarding, reliable, and future-ready
            agricultural ecosystem
          </h1>
        </div>
      </div>
    </section>
  );
}
