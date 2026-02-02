"use client";

import Link from "next/link";
import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function Footer() {
  // Scroll reveal for the whole footer (background)
  const { elementRef: footerRef, style: footerStyle } = useScrollReveal({
    duration: 800,
    delay: 0,
    direction: "up",
    distance: 40,
  });

  const { elementRef: topRef, style: topStyle } = useScrollReveal({
    duration: 700,
    delay: 200,
    direction: "up",
    distance: 20,
  });

  const { elementRef: rightRef, style: rightStyle } = useScrollReveal({
    duration: 700,
    delay: 400,
    direction: "up",
    distance: 20,
  });

  const { elementRef: bottomRef, style: bottomStyle } = useScrollReveal({
    duration: 700,
    delay: 600,
    direction: "up",
    distance: 20,
  });

  // Social icons array
  const socialIcons = [
    {
      name: "Facebook",
      src: "/icons/social/Facebook.png",
      link: "https://facebook.com",
    },
    { name: "X", src: "/icons/social/x.png", link: "https://x.com" },
    {
      name: "LinkedIn",
      src: "/icons/social/Linkedin.png",
      link: "https://linkedin.com",
    },
    {
      name: "Instagram",
      src: "/icons/social/Instagram.png",
      link: "https://instagram.com",
    },
  ];

  return (
    <div className="flex justify-center px-4 py-16">
      <footer
        ref={footerRef}
        style={footerStyle}
        className="w-full max-w-7xl bg-[#0A3D3A] text-white rounded-[50px] pt-12 pb-6 px-6 md:px-12"
      >
        <div className="mx-auto px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
            {/* Left Section */}
            <div ref={topRef} style={topStyle}>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/icons/farmFuzionlogofooter.png"
                  alt="FarmFuzion Logo"
                  width={36}
                  height={36}
                />
                <h3 className="font-bold text-[22px] text-[#B8FF57]">
                  FarmFuzion
                </h3>
              </div>

              <div className="text-sm text-white space-y-0.5 mb-6">
                <p className="font-bold text-base mb-1">Head Office:</p>
                <p className="text-sm leading-relaxed">Westgate Towers, 8th Floor, Suite 809</p>
                <p className="text-sm leading-relaxed">Mithithi Road, Westlands</p>
                <p className="text-sm leading-relaxed">Nairobi, Kenya</p>
              </div>
            </div>

            {/* Right Section */}
            <div
              ref={rightRef}
              style={rightStyle}
              className="grid grid-cols-2 gap-8"
            >
              {/* Useful Links */}
              <div>
                <h4 className="font-bold text-base mb-3">Useful Links</h4>
                <ul className="space-y-2 text-sm text-white">
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-[#B8FF57] font-normal transition inline-flex items-center gap-1"
                    >
                      About Us ↗
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/explore"
                      className="hover:text-[#B8FF57] font-normal transition inline-flex items-center gap-1"
                    >
                      Features ↗
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-[#B8FF57] font-normal transition inline-flex items-center gap-1"
                    >
                      Contact Us ↗
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social */} 
              <div>
                <h4 className="font-bold text-base mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {socialIcons.map((social, i) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      // smaller circular button, consistent padding, focus ring for accessibility
                      className="w-8 h-8 bg-[#B8FF57] rounded-md flex items-center justify-center hover:opacity-90 transition p-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8FF57]/40"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <Image
                        src={social.src}
                        alt={social.name}
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Section */}
          <div
            ref={bottomRef}
            style={bottomStyle}
            className="border-t border-[#0D4D49] pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-sm text-[#B8FF57]">©FarmFuzion 2025</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-[#B8FF57] text-[#0A3D3A] px-8 h-[30px] rounded-[50px] font-semibold text-sm hover:opacity-90 transition flex items-center justify-center">
                Register Now
              </button>

              <button className="bg-[#B8FF57]/20 border-2 border-[#B8FF57] text-[#B8FF57] px-6 h-[30px] rounded-[50px] font-normal text-sm hover:bg-[#B8FF57] hover:text-[#0A3D3A] transition flex items-center justify-center">
                Subscribe To Our Newsletter
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}