"use client";

import useScrollReveal from "@/hooks/useScrollReveal";
import Link from "next/link";

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
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center px-8">
        {/* Title */}
        <div ref={titleRef} style={titleStyle}>
          <h2 className="text-h2 mb-8">
            Ready to Revolutionize How You Farm, Finance, or Source?
          </h2>
        </div>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          style={buttonsStyle}
          className="flex justify-center gap-4"
        >
          <Link href="/registration">
            <button className="bg-farm-light-green text-white px-3 sm:px-4 md:px-6 h-6 sm:h-7 md:h-[25px] text-[10px] sm:text-xs md:text-sm rounded-full font-medium whitespace-nowrap hover:bg-green-600 transition">
              Register Now
            </button>
          </Link>
          <button className="bg-farm-light-green text-white px-3 sm:px-4 md:px-6 h-6 sm:h-7 md:h-[25px] text-[10px] sm:text-xs md:text-sm rounded-full font-medium whitespace-nowrap hover:bg-green-600 transition">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
}
