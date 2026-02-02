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
    <section className="relative py-16 px-4 bg-[#F4F9EC] rounded-xl mx-8">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative">
          {/* Left Content */}
          <div ref={contentRef} style={contentStyle} className="relative z-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              FarmFuzion was built to answer those questions. We're here to
              connect the dots across regions, services, and people to unlock
              the full potential of African agriculture.
            </h2>

            <div className="flex gap-4">
              <button className="bg-farm-light-green font-bold text-white px-8 h-[30px] rounded-[50px] hover:bg-green-600 font-regular flex items-center">
                Register Now
              </button>
              <button
                type="button"
                className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#0A3D3A] hover:opacity-80 transition"
              >
                <span className="underline underline-offset-4 decoration-2">
                  Partner With Us
                </span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="absolute top-16 bottom-0 right-0 md:w-1/2 h-full">
            <Image
              src="/images/greencard.png"
              alt="Solution Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>

  );
}
