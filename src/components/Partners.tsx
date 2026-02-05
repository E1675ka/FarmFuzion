"use client";

import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

const partners = [
  { name: "UniPesa", logo: "/images/unipesa.svg" },
  { name: "M-Pesa", logo: "/images/M-pesa.svg" },
  { name: "Mastercard", logo: "/images/mastercard.svg" },
  { name: "Apollo Agriculture", logo: "/images/apollo.svg" },
  { name: "Verve", logo: "/images/verve.svg" },
];

export default function Partners() {
  const { elementRef: titleRef, style: titleStyle } = useScrollReveal({
    duration: 600,
    delay: 0,
    direction: "up",
    distance: 40,
  });

  const { elementRef: partnersRef, style: partnersStyle } = useScrollReveal({
    duration: 600,
    delay: 200,
    direction: "up",
    distance: 40,
  });

  return (
    <section className="py-12 bg-white">
      <div className=" mx-auto ">
        <div ref={titleRef} style={titleStyle}>
          <h2 className="text-h2 text-center  mb-12">
            Our Partners in Business
          </h2>
        </div>

        <div
          ref={partnersRef}
          style={partnersStyle}
          className="bg-gray-100 rounded-lg p-8 w-full"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <div className="flex items-center justify-center p-3 hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={100}
                    height={48}
                    className="object-contain  hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
