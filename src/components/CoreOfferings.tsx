"use client";
import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

const offerings = [
  {
    title: "Financial Access",
    description:
      "Credit, savings, management and alternative investment solutions",
    icon: "/icons/Wallet.png",
  },
  {
    title: "Agronomy & Veterinary Advice",
    description: "Expert guidance for crop and livestock management",
    icon: "/icons/veterinary.png",
  },
  {
    title: "Logistics & Market Linkage",
    description: "Connect directly to markets, manage supply chain",
    icon: "/icons/logistics.png",
  },
  {
    title: "Virtual Market - eCommerce",
    description: "A digital marketplace to buy and sell agricultural products",
    icon: "/icons/tag.png",
  },
  {
    title: "Digital Payments & Identity",
    description:
      "Secure, seamless transactions and digital identity management",
    icon: "/icons/stackedcoins.png",
  },
];

export default function CoreOfferings() {
  const { elementRef: titleRef, style: titleStyle } = useScrollReveal({
    duration: 600,
    delay: 0,
    direction: "up",
    distance: 40,
  });

  const offeringRefs = offerings.map((_, index) =>
    useScrollReveal({
      duration: 600,
      delay: index * 100,
      direction: "up",
      distance: 40,
    }),
  );

  const { elementRef: buttonRef, style: buttonStyle } = useScrollReveal({
    duration: 600,
    delay: offerings.length * 100,
    direction: "up",
    distance: 40,
  });

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div ref={titleRef} style={titleStyle}>
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Core Offerings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, i) => (
            <div
              key={i}
              ref={offeringRefs[i].elementRef}
              style={offeringRefs[i].style}
              className="bg-[#F4F9EC] rounded-[24px] p-8 hover:shadow-lg flex flex-col items-center transition-shadow"
            >
              <div className="w-12 h-12 bg-[#00331B] rounded-full flex justify-center mb-4">
                <Image
                  src={offering.icon}
                  alt={offering.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {offering.title}
              </h3>
              <p className="text-gray-600 text-center">
                {offering.description}
              </p>
            </div>
          ))}
          <div
            ref={buttonRef}
            style={buttonStyle}
            className="mt-12 items-center justify-center flex flex-col gap-4"
          >
            <button className="bg-farm-light-green text-white px-4 py-4 rounded-[50%] hover:bg-green-600">
              <Image
                src="/icons/move-right.png"
                alt="Explore Services"
                width={32}
                height={32}
              />
            </button>
            <p className="text-[20px] font-semibold">Explore Our Services</p>
          </div>
        </div>
      </div>
    </section>
  );
}
