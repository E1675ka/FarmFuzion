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
    <section className="py-8 px-8 bg-white mt-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center md:justify-items-start">
          {/* Left Title */}
          <div ref={titleRef} style={titleStyle} 
          className="self-center md:self-start">
            <h2 className="left-0  text-h2 ">
              We saw a gap and<br/> an opportunity
            </h2>
          </div>
 
          {/* Right Content */}
          <div ref={contentRef} style={contentStyle}>
            <div className="">
              {questions.map((text, i) => (
                <div key={i}>
                  {/* Question */}
                  <div ref={itemRefs[i].elementRef} style={itemRefs[i].style}>
                    <h3 className="font-medium text-gray-600 mb-2">{text}</h3>
                  </div>

                  {/* Divider */}
                  {i < questions.length - 1 && (
                    <div ref={itemRefs[i].elementRef} style={itemRefs[i].style}>
                      <hr className="border-[#b4e977] pt-2" />
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
