"use client";

import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

const platforms = [
  {
    label: "USSD",
    icon: "/icons/hash.png",
  },
  {
    label: "iOS App",
    icon: "/icons/Symbol.png",
  },
  {
    label: "Android App",
    icon: "/icons/android.png",
  },
  {
    label: "Mobile Web App",
    icon: "/icons/mobile.png",
  },
  {
    label: "PWA Progressive App",
    icon: "/icons/PWA.png",
  },
];

export default function ComingSoon() {
  // Title reveal
  const { elementRef: titleRef, style: titleStyle } = useScrollReveal({
    duration: 600,
    delay: 0,
    direction: "up",
    distance: 40,
  });

  // Platform item reveals (staggered)
  const platformRefs = platforms.map((_, index) =>
    useScrollReveal({
      duration: 600,
      delay: index * 100,
      direction: "up",
      distance: 30,
    }),
  );

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div ref={titleRef} style={titleStyle}>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-8 bg-[#F0F0F0] w-full py-6 rounded-lg text-center">
            Coming Soon to More Devices
          </h2>
        </div>

        {/* Platforms */}
        <div className="flex  justify-around mt-16 items-center gap-6 flex-wrap mx-16">
          {platforms.map((platform, index) => (
            <div
              key={index}
              ref={platformRefs[index].elementRef}
              style={platformRefs[index].style}
              className="flex flex-col items-center gap-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-lg flex items-center justify-center group ">
                <Image
                  src={platform.icon}
                  alt={platform.label}
                  width={28}
                  height={28}
                  className="object-contain transition-transform group-hover:scale-110"
                />
              </div>

              {/* Label */}
              <span className="text-bold text-md text-gray-600 text-center">
                {platform.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
