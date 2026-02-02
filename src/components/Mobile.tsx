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
    <section id="mobile" className="py-16 px-4 bg-gray-50" >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:grid-cols-2 gap-12 items-center">
          <div className="order-1 md:order-1">
            <div ref={titleRef} style={titleStyle}>
              <h2 className="text-4xl max-w-6xl text-center font-bold text-gray-900 mb-6">
                Mobile-first and offline-accessible,<br/> FarmFuzion bridges the gap
                between financial and agronomic markets
              </h2>
            </div>

            <div
              ref={buttonsRef}
              style={buttonsStyle}
              className="flex justify-center gap-4 mt-10"
            >
              <button className="bg-farm-light-green text-white px-8 h-[30px] rounded-[30px] hover:bg-green-600 font-medium">
                Register Now
              </button>
              <button className="bg-farm-light-green text-white px-8 h-[30px]  rounded-[30px] hover:bg-green-600 font-medium">
                Partner With Us
              </button>
            </div>
          </div>
          <div className="w-full mt-8 flex gap-8 items-center order-2 md:order-1">
            <div ref={imageRef} style={imageStyle} className="flex-1">
              <Image
                src="/images/farmFuzion.png"
                alt="Mobile App Screen"
                width={800}
                height={1200}
                className="rounded-lg w-full"
              />
            </div>

            <div ref={descRef} style={descStyle} className="flex-1 ">
              <p className="text-slate-700 text-lg font-bold leading-relaxed">
                FarmFuzion makes a transformative leap for smallholder farmers
                across Africa, harnessing technology to address their everyday
                challenges they face. The platform brings a wide range of
                essential services and resources together into a single,
                accessible ecosystem, designed with the realities of African
                agriculture in mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
