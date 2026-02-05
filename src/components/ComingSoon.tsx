"use client";

import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";


const platforms = [
  {
    label: "USSD",
    icon: "/images/hashtag.svg",
  },
  {
    label: "iOS App",
    icon: "/images/ios.svg",
  },
  {
    label: "Android App",
    icon: "/images/ANDROID.svg",
  },
  {
    label: "Mobile Web App",
    icon: "/images/MOBILE WEB APP.svg",
  },
  {
    label: "PWA Progressive App",
    icon: "/images/PWA.svg",
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
    <section className="">
      <div className="max-w-full mx-auto">
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
              <div className="w-20 h-20 rounded-lg flex items-center justify-center group ">
                <Image
                  src={platform.icon}
                  alt={platform.label}
                  width={32}
                  height={32}
                  className="object-contain transition-transform group-hover:scale-110"
                />
              </div>

              {/* Label */}
              <span className="font-semibold text-center">
                {platform.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
