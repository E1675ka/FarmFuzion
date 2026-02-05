"use client";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function ContactInquiry() {
  // Scroll reveal for the card
  const { elementRef, style } = useScrollReveal({
    duration: 700,
    delay: 0,
    direction: "up",
    distance: 50,
  });

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div
          ref={elementRef}
          style={style}
          className="bg-[#01211F] rounded-[50px] p-8 md:p-12"
        >
          <h1 className="text-h3 font-bold text-primary-green mb-3 text-center">
            General Inquiries
          </h1>

          <div className="space-y-4">
            <div className="text-center text-gray-300">
              <p className="font-semibold text-white">
                Email: info@farmfuzion.com
              </p>
              <p className="font-semibold text-white">
                Phone/WhatsApp: +254 716 003 7925
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
