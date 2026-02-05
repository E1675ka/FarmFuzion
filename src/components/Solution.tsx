"use client";

import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function Solution() {
  // Left content animation
  const { elementRef: contentRef, style: contentStyle } = useScrollReveal({
    duration: 700,
    delay: 0,
    direction: "up",
    distance: 40,
  });

  // Right image animation
  const { elementRef: imageRef, style: imageStyle } = useScrollReveal({
    duration: 700,
    delay: 200,
    direction: "up",
    distance: 50,
  });

  return (
    <section className="relative  px-4 bg-[#F4F9EC] rounded-xl mx-8">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center">
          {/* Left Content */}
          <div
            ref={contentRef}
            style={contentStyle}
            className="self-center mt-16 md:mt-0"
          >
            <h2 className="text-h3   mb-6">
              FarmFuzion was built to answer those questions. We're here to
              connect the dots across regions, services, and people to unlock
              the full potential of African agriculture.
            </h2>

            <div className="flex gap-4">
              <button className="bg-farm-light-green font-bold text-white px-4 sm:px-6 md:px-8 h-8 sm:h-9 md:h-[30px] text-xs sm:text-sm md:text-base rounded-[50px] hover:bg-green-600 font-regular flex items-center whitespace-nowrap">
                Register Now
              </button>
              <button
                type="button"
                className="group bg-transparent hover:bg-transparent inline-flex items-center gap-2 text-xs sm:text-sm md:text-[15px] font-semibold text-[#0A3D3A] hover:opacity-80 transition whitespace-nowrap"
              >
                <span className="underline underline-offset-4 decoration-2">
                  Partner With Us
                </span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="mt-16">
            <Image
              src="/images/phone.png"
              alt="Solution Illustration"
              width={250}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
