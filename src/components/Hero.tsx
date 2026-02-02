"use client";
import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function Hero() {
  const { elementRef: titleRef, style: titleStyle } = useScrollReveal({
    duration: 600,
    delay: 0,
    direction: "up",
    distance: 40,
  });

  const { elementRef: descRef, style: descStyle } = useScrollReveal({
    duration: 600,
    delay: 200,
    direction: "up",
    distance: 40,
  });

  const { elementRef: buttonsRef, style: buttonsStyle } = useScrollReveal({
    duration: 600,
    delay: 400,
    direction: "up",
    distance: 40,
  });

  const { elementRef: imageRef, style: imageStyle } = useScrollReveal({
    duration: 600,
    delay: 300,
    direction: "right",
    distance: 50,
  });

  const { elementRef: icon1Ref, style: icon1Style } = useScrollReveal({
    duration: 600,
    delay: 0,
    direction: "up",
    distance: 40,
  });

  const { elementRef: icon2Ref, style: icon2Style } = useScrollReveal({
    duration: 600,
    delay: 100,
    direction: "up",
    distance: 40,
  });

  const { elementRef: icon3Ref, style: icon3Style } = useScrollReveal({
    duration: 600,
    delay: 200,
    direction: "up",
    distance: 40,
  });

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const balance = 123322122, limit = 9000.2

  const formattedBalance = new Intl.NumberFormat('en-US').format(balance);
  const formattedLimit = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(limit);


  return (
    <section className="pt-24 pb-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div ref={titleRef} style={titleStyle}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                We connect farmers, cooperatives and service-providers through
                one platform
              </h1>
            </div>
            <div ref={descRef} style={descStyle}>
              <p className="text-gray-600 text-lg mb-8 font-medium">
                FarmFuzion makes you more sustainable and profitable through one
                connected ecosystem for managing credit, insurance, sourcing,
                commodity, and technical information.
              </p>
            </div>
            <div ref={buttonsRef} style={buttonsStyle} className="flex gap-4">
              <button className="bg-farm-light-green text-white px-8 h-[30px] rounded-full hover:bg-green-600 font-bold">
                Register Now
              </button>
              <button className="bg-farm-light-green text-white px-8 h-[30px] rounded-full hover:bg-green-600 font-bold">
                Partner With Us
              </button>
            </div>
          </div>

          <div className="relative ml-16 mr-8 mt-8">
            <Image
              src="/images/farmerTabletinhand.png"
              alt="Farmer with tablet"
              width={510}
              height={150}
            />

            {/* Available Balance Card */}
            <div
              className="absolute  top-[100px] left-[-50px] w-[260px] bg-white rounded-[12px] p-4 shadow-[0_12px_30px_rgba(3,37,18,0.10)]"
              aria-hidden={false}
            >
              <div className="flex items-start gap-3 mb-3">
                {/* wallet / logo */}
                <div className="w-9 h-9 bg-[#7FB539] rounded-lg flex items-center justify-center flex-shrink-0">
                  {/* simple wallet SVG — white on green */}
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M3 7.5C3 6.119 4.119 5 5.5 5h13C19.881 5 21 6.119 21 7.5v9c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 19 3 17.881 3 16.5v-9z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 12.5a.9.9 0 11-1.8 0 .9.9 0 011.8 0z" fill="white" />
                  </svg>
                </div>

                {/* text block */}
                <div className="flex-1 min-w-0">
                  <div className="text-[20px] font-extrabold leading-[22px] text-[#08341a] truncate">
                    ${formattedBalance}
                  </div>
                  <div className="text-[11px] text-gray-500 leading-[12px]">Available Balance</div>
                </div>
              </div>

              {/* divider + footer */}
              <div className="mt-2 pt-3 border-t border-gray-100">
                <div className="text-[11px] text-gray-500 mb-0">Your Limit</div>
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sm font-semibold text-[#08341a]">${formattedLimit}</div>

                  <button
                    type="button"
                    disabled
                    className="bg-[#7FB539] hover:bg-[#6FA02F] text-white text-[12px] font-medium px-4 h-[18px] rounded-full transition-shadow"
                  >
                    Apply Loan
                  </button>
                </div>
              </div>
            </div>

            {/* Transaction Complete Badge */}
            <div className="absolute bottom-16 flex-col right-[-34px] bg-white rounded-xl shadow-lg p-2 flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-[10px] font-semibold leading-tight pr-1">
                <div>Transaction</div>
                <div>Complete</div>
              </div>
            </div>

            {/* Scroll Button */}
            <button disabled
              className="absolute bottom-0 left-[230px] transform -translate-x-1/2 translate-y-1/2 bg-farm-light-green rounded-full p-3 hover:bg-green-600 transition shadow-lg"
            >
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-28">
          <div
            ref={icon1Ref}
            style={icon1Style}
            className="flex flex-col items-center text-center"
          >
            <div className="w-10 h-10 bg-[#00331B] rounded-full flex items-center justify-center mb-3">
              <Image
                src="/icons/b.png"
                alt="Dashboard Icon"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-sm font-semibold text-farm-light-green">
              One-Simple Dashboard
            </h3>
          </div>

          <div
            ref={icon2Ref}
            style={icon2Style}
            className="flex flex-col items-center text-center"
          >
            <div className="w-10 h-10 bg-[#00331B] rounded-full flex items-center justify-center mb-3">
              <Image
                src="/icons/V.png"
                alt="Insights Icon"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-sm font-semibold text-farm-light-green">
              Real-time Insights
            </h3>
          </div>

          <div
            ref={icon3Ref}
            style={icon3Style}
            className="flex flex-col items-center text-center"
          >
            <div className="w-10 h-10 bg-[#00331B] rounded-full flex items-center justify-center mb-3">
              <Image
                src="/icons/X.png"
                alt="Support Icon"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-sm font-semibold text-farm-light-green">
              No middlemen Needed
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}
