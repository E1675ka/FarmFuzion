"use client";

import useScrollReveal from "@/hooks/useScrollReveal";

export default function ExploreCTA() {
  // Scroll reveal for heading
  const { elementRef: headingRef, style: headingStyle } = useScrollReveal({
    duration: 700,
    delay: 0,
    direction: "up",
    distance: 40,
  });

  // Scroll reveal for buttons
  const { elementRef: buttonsRef, style: buttonsStyle } = useScrollReveal({
    duration: 700,
    delay: 200,
    direction: "up",
    distance: 30,
  });

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2
          ref={headingRef}
          style={headingStyle}
          className="text-5xl font-regular text-gray-600 mb-8"
        >
          One platform. One login. Infinite possibilities.
        </h2>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          style={buttonsStyle}
          className="flex justify-center gap-4"
        >
          <button className="bg-farm-light-green text-white px-8 h-[30px] rounded-[50px]  hover:bg-green-600 font-medium transition">
            Register Now
          </button>
          <button className="bg-farm-light-green text-white px-8 h-[30px] rounded-[50px] hover:bg-green-600 font-medium transition">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
}
