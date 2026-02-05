"use client";
import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

const offerings = [
  {
    title: "Financial Access",
    description:
      "Credit, savings, and insurance tools built around farming cycles, helping farmers grow confidently while enabling SACCOs and institutions to lend, insure, and scale with less risk.",
    icon: "/images/Wallet.svg",
  },
  {
    title: "Agronomy & Veterinary Advisory",
    description:
      "Centralized tools for agronomists and vets to deliver tailored support, monitor field activity, and reach more clients with verified records and reduced admin overhead.",
    icon: "/images/FOOTPRINT.svg",
  },
  {
    title: "Logistics & Market Linkage",
    description:
      "End-to-end tools for inventory, storage, transport, and fulfillment connecting producers to trusted buyers with real-time traceability and fewer losses.",
    icon: "/images/TRACTOR.svg",
  },
  {
    title: "Virtual Market - eCommerce",
    description:
      "A digital marketplace to list, price, and sell directly, reducing middlemen, speeding up payments, and giving buyers access to traceable supply at scale.",
    icon: "/images/SALE TAG.svg",
  },
  {
    title: "Digital Payments & Identity",
    description:
      "Secure, mobile-first payments with full recordkeeping. Institutions and farmers can transact, reconcile, and build digital financial identities across the agri-chain.",
    icon: "/images/DOLLAR SIGN.svg",
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
          <h2 className="text-h2   text-center mb-12">
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
              <h3 className="text-body-lg font-bold text-gray-900 mb-2">
                {offering.title}
              </h3>
              <p className="font-normal text-sm text-center">
                {offering.description}
              </p>
            </div>
          ))}
          <div
            ref={buttonRef}
            style={buttonStyle}
            className="mt-12 items-center justify-center flex flex-col gap-4"
          >
            <button className="mr-16"
            data-variant="circular">
              <Image
                src="/icons/move-right.png"
                alt="Explore Services"
                width={32}
                height={32}
              />
            </button>
            <p className="text-h3 underline">Explore Our<br/>Services</p>
          </div>
        </div>
      </div>
    </section>
  );
}
