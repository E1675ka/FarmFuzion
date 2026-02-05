"use client";
import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function Mobile() {
  const { elementRef: titleRef, style: titleStyle } = useScrollReveal({
    duration: 600,
    delay: 0,
    direction: "up",
    distance: 40,
  });

  const { elementRef: buttonsRef, style: buttonsStyle } = useScrollReveal({
    duration: 600,
    delay: 200,
    direction: "up",
    distance: 40,
  });

  const { elementRef: imageRef, style: imageStyle } = useScrollReveal({
    duration: 600,
    delay: 100,
    direction: "right",
    distance: 50,
  });

  const { elementRef: descRef, style: descStyle } = useScrollReveal({
    duration: 600,
    delay: 300,
    direction: "left",
    distance: 50,
  });

  return (
    <section id="mobile" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:grid-cols-2 gap-12 items-center">
          <div className="order-1 md:order-1">
            <div ref={titleRef} style={titleStyle}>
              <h2 className="text-h2 max-w-6xl text-center  mb-6">
                Mobile-first and offline-accessible,
                <br /> FarmFuzion bridges the gap between financial and
                agronomic markets
              </h2>
            </div>

            <div
              ref={buttonsRef}
              style={buttonsStyle}
              className="flex justify-center gap-4 mt-10"
            >
              <button className="bg-farm-light-green text-white px-3 sm:px-4 md:px-6 h-6 sm:h-7 md:h-[25px] text-[10px] sm:text-xs md:text-sm rounded-full font-medium whitespace-nowrap hover:bg-green-600 transition">
                Register Now
              </button>
              <button className="bg-farm-light-green text-white px-3 sm:px-4 md:px-6 h-6 sm:h-7 md:h-[25px] text-[10px] sm:text-xs md:text-sm rounded-full font-medium whitespace-nowrap hover:bg-green-600 transition">
                Partner With Us
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center mt-8 px-4 md:px-8 lg:px-16 order-2 md:order-1">
            <div ref={imageRef} style={imageStyle}>
              <Image
                src="/images/Dashboard.svg"
                alt="Mobile App Screen"
                width={800}
                height={1200}
                className="rounded-lg w-full"
              />
            </div>

            <div ref={descRef} style={descStyle} className="flex items-center">
              <p className="leading-relaxed">
                FarmFuzion marks a transformative step for
                <br />
                smallholder farmers across Africa, harnessing
                <br />
                technology to address the everyday challenges they
                <br />
                face. The platform brings a wide range of essential
                <br />
                services and resources together into a single,
                <br />
                accessible ecosystem, designed with the realities
                <br />
                of African agriculture in mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
