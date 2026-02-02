"use client";

import useScrollReveal from "@/hooks/useScrollReveal";

export default function GapAndOpportunity() {
  // Left heading
  const { elementRef: titleRef, style: titleStyle } = useScrollReveal({
    duration: 700,
    delay: 0,
    direction: "up",
    distance: 50,
  });

  // Right container
  const { elementRef: contentRef, style: contentStyle } = useScrollReveal({
    duration: 700,
    delay: 150,
    direction: "up",
    distance: 40,
  });

  const questions = [
    "What if every service a farmer needs could be accessed from one platform?",
    "What if lenders and insurers could make decisions based on real-food data, not guesswork?",
    "What if agri-exporters could trace and verify back to source and engage directly with farmer groups?",
  ];

  // Question + divider reveals (staggered)
  const itemRefs = questions.map((_, index) =>
    useScrollReveal({
      duration: 600,
      delay: 300 + index * 180,
      direction: "up",
      distance: 30,
    }),
  );

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Title */}
          <div ref={titleRef} style={titleStyle} className="relative">
            <h2 className=" absolute top-[-160px] left-0 text-[48px] font-bold text-gray-600">
              We saw a gap and an opportunity
            </h2>
          </div>


          {/* Right Content */}
          <div ref={contentRef} style={contentStyle}>
            <div className="space-y-8">
              {questions.map((text, i) => (
                <div key={i}>
                  {/* Question */}
                  <div ref={itemRefs[i].elementRef} style={itemRefs[i].style}>
                    <h3 className="font-medium text-gray-600 mb-4">{text}</h3>
                  </div>

                  {/* Divider */}
                  {i < questions.length - 1 && (
                    <div ref={itemRefs[i].elementRef} style={itemRefs[i].style}>
                      <hr className="border-[#b4e977] p-3" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
