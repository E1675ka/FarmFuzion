"use client";

import Link from "next/link";
import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function Header() {
  // Scroll reveal for the whole header
  const { elementRef: headerRef, style: headerStyle } = useScrollReveal({
    duration: 800,
    delay: 0,
    direction: "down",
    distance: 30,
  });

  // Scroll reveal for nav + button
  const { elementRef: navRef, style: navStyle } = useScrollReveal({
    duration: 700,
    delay: 200,
    direction: "up",
    distance: 20,
  });

  return (
    <header
      ref={headerRef}
      style={headerStyle}
      className="fixed w-full bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition"
          >
            <Image
              src="/icons/farmFuzionlogo.png"
              alt="FarmFuzion Logo"
              width={40}
              height={40}
            />
            <span className="ml-2 text-xl font-black ">
              FarmFuzion
            </span>
          </Link>

          {/* Nav + Button */}
          <div
            ref={navRef}
            style={navStyle}
            className="hidden md:flex items-center space-x-6"
          >
            <nav className="flex items-center space-x-8 mr-8">
              <Link
                href="/about"
                className="text-[12px] font-semibold text-gray-700 hover:text-farm-green transition"
              >
                About Us
              </Link>

              <Link
                href="/explore"
                className="text-[12px] font-semibold text-gray-700 hover:text-farm-green transition"
              >
                Features
              </Link>

              <Link
                href="/contact"
                className="text-[12px] font-semibold text-gray-700 hover:text-farm-green transition"
              >
                Contact Us
              </Link>
            </nav>


            <button className="bg-farm-light-green h-[25px] text-bold  text-white px-6  rounded-[50px] hover:bg-green-600 font-medium">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
