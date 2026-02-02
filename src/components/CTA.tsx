"use client";

import useScrollReveal from "@/hooks/useScrollReveal";

export default function CTA() {
  // Title animation
  const { elementRef: titleRef, style: titleStyle } = useScrollReveal({
    duration: 600,
    delay: 0,
    direction: "up",
    distance: 40,
  });

  // Buttons animation
  const { elementRef: buttonsRef, style: buttonsStyle } = useScrollReveal({
    duration: 600,
    delay: 200,
    direction: "up",
    distance: 40,
  });

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center px-8">
        {/* Title */}
        <div ref={titleRef} style={titleStyle}>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Ready to Revolutionize How You Farm, Finance, or Source?
          </h2>
        </div>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          style={buttonsStyle}
          className="flex justify-center gap-4"
        >
          <button className="bg-farm-light-green text-white px-8 h-[30px] rounded-full hover:bg-green-600 font-medium">
            Register Now
          </button>
          <button className="border-2 border-farm-light-green text-farm-light-green px-8 h-[30px] rounded-full hover:bg-green-50 font-medium">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
}
