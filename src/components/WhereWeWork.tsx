"use client";

import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function WhereWeWork() {
  // Left content animation (title + paragraph + buttons)
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
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={contentRef} style={contentStyle}>
            <h2 className="text-h2  mb-2">Where We Work</h2>
            <p className="mb-8">
              FarmFuzion is already active across
              <br />
              Kenya, Uganda, DRC, and Zambia with
              <br />
              partners and onboarding pipelines in
              <br />
              more countries across
              <br />
              East,Southern and Western Africa.
            </p>

            <div className="mt-16 text-left">
              <h3 className="text-h2   mb-8">
                Ready to Join
                <br /> the Transformation?
              </h3>
              <div className="flex justify-left gap-4">
                <div className="flex justify-left gap-4">
                  <button className="bg-farm-light-green text-white px-4 sm:px-6 md:px-8 h-8 sm:h-9 md:h-[30px] text-xs sm:text-sm md:text-base rounded-[24px] hover:bg-green-600 font-medium whitespace-nowrap">
                    Register Now
                  </button>
                  <button className="bg-farm-light-green text-white px-4 sm:px-6 md:px-8 h-8 sm:h-9 md:h-[30px] text-xs sm:text-sm md:text-base rounded-[24px] hover:bg-green-600 font-medium whitespace-nowrap">
                    Partner With Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            ref={imageRef}
            style={imageStyle}
            className="flex justify-center self-start"
          >
            <div className="md:block hidden w-full h-80 rounded-lg flex items-center justify-start">
              <Image
                src="/images/map.svg"
                alt="Africa Map"
                width={400}
                height={320}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
