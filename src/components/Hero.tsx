"use client";
import Image from "next/image";
import Link from "next/link";
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
    <section className="pt-24 pb-12 px-4 bg-surface-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div ref={titleRef} style={titleStyle}>
              {/* Using your defined h1 typography scale and heading font */}
              <h1 className="text-h2 font-heading text-primary-dark leading-tight mb-6">
                We connect farmers, cooperatives and service-providers through
                one platform
              </h1>
            </div>
            <div ref={descRef} style={descStyle}>
              {/* Using your body-lg typography scale and sans font */}
              <p className="text-body-lg font-sans text-primary-dark/70 mb-8">
                FarmFuzion makes you more sustainable and profitable through one
                connected ecosystem for managing credit, insurance, sourcing,
                commodity, and technical information.
              </p>
            </div>
            <div ref={buttonsRef} style={buttonsStyle} className="flex gap-4">
              {/* Using default button styles from your global.css */}
              <Link href="/registration">
                <button className="px-4 text-white h-[25px] rounded-full">
                  Register Now
                </button>
              </Link>
              <button className="px-4 text-white h-[25px] rounded-full">
                Partner With Us
              </button>
            </div>
          </div>

          <div className="relative ml-16 mr-8 mt-8">
            <Image
              src="/images/FARMER_IMAGE.png"
              alt="Farmer with tablet"
              width={510}
              height={150}
            />

            {/* Available Balance Card */}
            <div
              className="absolute top-[100px] left-[-50px] w-[260px] bg-surface-white rounded-[12px] p-4 shadow-[0_12px_30px_rgba(3,37,18,0.10)]"
              aria-hidden={false}
            >
              <div className="flex items-start gap-3 mb-3">
                {/* wallet / logo */}
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0">
                  {/* simple wallet SVG — white on green */}
                  <Image
                    src="/images/wallet_foreground.svg"
                    alt="Wallet Icon"
                    width={24}
                    height={24}
                  />
                </div>

                {/* text block - using heading font for numbers */}
                <div className="flex-1 min-w-0">
                  <div className="text-[20px] font-heading font-bold leading-[22px] text-primary-dark truncate">
                    ${formattedBalance}
                  </div>
                  <div className="text-[11px] font-sans text-primary-dark/50 leading-[12px] mt-1">Available Balance</div>
                </div>
              </div>

              {/* divider + footer */}
              <div className="mt-2 pt-3   ">
                <div className="text-[11px] font-sans text-primary-dark/50 mb-0">Your Limit</div>
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sm font-heading font-semibold text-primary-dark">${formattedLimit}</div>

                  <button
                    type="button"
                    className="text-[12px] px-4 h-[18px] rounded-full"
                  >
                    Apply Loan
                  </button>
                </div>
              </div>
            </div>

            {/* Transaction Complete Badge */}
            <div className="absolute bottom-16 flex-col right-[-34px] bg-surface-white rounded-xl shadow-lg p-2 flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary-green rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-surface-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-[10px] text-secondary-green font-heading font-semibold leading-tight pr-1 text-center">
                <div>Transaction</div>
                <div>Complete</div>
              </div>

            </div>

            {/* Scroll Button */}
            <button data-variant="circular"
              className="absolute bottom-0 left-[230px] transform -translate-x-1/2 translate-y-1/2 rounded-full p-3 shadow-lg"
            >
              <Image
                src="/images/ARROW.svg"
                alt="Dashboard Icon"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-28">
          <div
            ref={icon1Ref}
            style={icon1Style}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16  flex items-center justify-center">
              <Image
                src="/images/icon 1.svg"
                alt="Dashboard Icon"
                width={42}
                height={42}
              />
            </div>
            <p className="text-h6 text-secondary-green">
              One-Simple Dashboard
            </p>
          </div>

          <div
            ref={icon2Ref}
            style={icon2Style}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16  flex items-center justify-center">
              <Image
                src="/images/icon 2.svg"
                alt="Insights Icon"
                width={42}
                height={42}
              />
            </div>
            <p className="text-h6  text-secondary-green">
              Real-time Insights
            </p>
          </div>

          <div
            ref={icon3Ref}
            style={icon3Style}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16  flex items-center justify-center ">
              <Image
                src="/images/icon 3.svg"
                alt="Support Icon"
                width={42}
                height={42}
              />
            </div>
            <p className="text-h6 text-secondary-green">
              No middlemen Needed
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}