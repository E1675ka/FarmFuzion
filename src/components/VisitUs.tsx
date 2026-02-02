"use client";
import useScrollReveal from "@/hooks/useScrollReveal";
import { useState } from "react";

export default function VisitUs() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Scroll reveal for heading
  const { elementRef: headingRef, style: headingStyle } = useScrollReveal({
    duration: 700,
    delay: 0,
    direction: "up",
    distance: 40,
  });

  // Scroll reveal for map
  const { elementRef: mapRef, style: mapStyle } = useScrollReveal({
    duration: 700,
    delay: 200,
    direction: "up",
    distance: 40,
  });

  const handleExpand = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          ref={headingRef}
          style={headingStyle}
          className="text-6xl font-bold text-gray-900 text-center mb-12"
        >
          Visit Us
        </h2>

        {/* Map */}
        <div ref={mapRef} style={mapStyle}>
          <div
            className={`w-full overflow-hidden shadow-lg transition-all duration-500 ease-in-out cursor-pointer ${
              isExpanded ? "h-[600px] rounded-lg" : "h-[350px] rounded-md"
            }`}
            onClick={handleExpand}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.52634821695!2d36.0655!3d-0.3031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829087a9b7f8d45%3A0x8b5b1e3e6b3a8e3f!2sNakuru%2C%20Kenya!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}