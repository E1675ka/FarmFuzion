"use client";

import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function WhoWeAre() {
  // Image reveal
  const { elementRef: imageRef, style: imageStyle } = useScrollReveal({
    duration: 700,
    delay: 0,
    direction: "up",
    distance: 50,
  });

  // Title reveal
  const { elementRef: titleRef, style: titleStyle } = useScrollReveal({
    duration: 700,
    delay: 150,
    direction: "up",
    distance: 40,
  });

  // Text reveal
  const { elementRef: textRef, style: textStyle } = useScrollReveal({
    duration: 700,
    delay: 300,
    direction: "up",
    distance: 40,
  });

  return (
    <section className="py-16 px-4 bg-green-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div ref={imageRef} style={imageStyle}>
            <div className="rounded-lg h-80 flex items-center justify-center">
              <Image
                src="/images/farmers.png"
                alt="Who We Are"
                width={400}
                height={320}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div ref={titleRef} style={titleStyle}>
              <h2 className="text-4xl font-bold text-gray-600 mb-6">
                Who We Are
              </h2>
            </div>

            <div
              ref={textRef}
              style={textStyle}
              className="font-medium space-y-4 text-gray-700"
            >
              <p>
                FarmFuzion was created to advance one of the most persistent
                challenges in African agriculture: fragmentation.
              </p>
              <p>
                For decades, farmers have had to navigate disconnected systems
                seeking for loans to expand, getting advisories around inputs,
                selling through middlemen.
              </p>
              <p>
                Later-on, cooperatives, banks, and buyers struggle with a lack
                of visibility, data, and trust in the supply chain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
