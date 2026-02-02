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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={contentRef} style={contentStyle}>
            <h2 className="text-[48px] font-regular text-gray-900 mb-6">
              Where We Work
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              FarmFuzion is already active across countries: Uganda, DRC, and
              Zambia with partners and investors also operating across East,
              Southern and Western Africa.
            </p>

            <div className="mt-12 text-left">
              <h3 className="text-[48px] font-regular text-gray-900 mb-8">
                Ready to Join the Transformation?
              </h3>
              <div className="flex justify-left gap-4">
                <div className="flex justify-left gap-4">
                  <button className="bg-farm-light-green text-white px-8 h-[30px] rounded-[24px] hover:bg-green-600 font-medium">
                    Register Now
                  </button>
                  <button className="bg-farm-light-green text-white px-8 h-[30px] rounded-[24px] hover:bg-green-600 font-medium">
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
            className="flex justify-center"
          >
            <div className="w-full h-80 rounded-lg flex items-center justify-center">
              <Image
                src="/images/africa.png"
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
