"use client";
import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function ContactHero() {
  // Scroll reveal for icon
  const { elementRef: iconRef, style: iconStyle } = useScrollReveal({
    duration: 700,
    delay: 0,
    direction: "up",
    distance: 40,
  });

  // Scroll reveal for heading
  const { elementRef: headingRef, style: headingStyle } = useScrollReveal({
    duration: 700,
    delay: 200,
    direction: "up",
    distance: 40,
  });

  // Scroll reveal for paragraph
  const { elementRef: textRef, style: textStyle } = useScrollReveal({
    duration: 700,
    delay: 400,
    direction: "up",
    distance: 30,
  });

  return (
    <section className="pt-32 pb-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div
          ref={iconRef}
          style={iconStyle}
          className="mb-8 flex justify-center"
        >
          <div className="w-16 h-16  rounded-full flex items-center justify-center text-4xl">
            <Image
              src="/icons/help.png"
              alt="Contact Icon"
              width={68}
              height={68}
            />
          </div>
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          style={headingStyle}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Have a Question, Partnership Idea, or Need Help Getting Started?
        </h1>

        {/* Paragraph */}
        <p
          ref={textRef}
          style={textStyle}
          className="text-[24px] text-farm-light-green mt-16 font-semibold"
        >
          We'd love to hear from you.
        </p>
      </div>
    </section>
  );
}
