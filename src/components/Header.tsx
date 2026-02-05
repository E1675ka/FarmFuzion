"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function Header() {
  // Hamburger menu state
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Close menu on navigation (mobile)
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      ref={headerRef}
      style={headerStyle}
      className="fixed w-full bg-white shadow-md z-50 pr-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition"
            onClick={handleNavClick}
          >
            <Image
              src="/images/FF LOGO black.svg"
              alt="FarmFuzion Logo"
              width={150}
              height={150}
            />
          </Link>

          {/* Desktop Nav + Button */}
          <div
            ref={navRef}
            style={navStyle}
            className="hidden md:flex items-center space-x-6"
          >
            <nav className="flex items-center space-x-8 mr-8">
              <Link
                href="/about"
                className="text-[12px] font-semibold text-gray-700 hover:text-gray-900 transition"
              >
                About Us
              </Link>
              <Link
                href="/explore"
                className="text-[12px] font-semibold text-gray-700 hover:text-gray-900 transition"
              >
                Features
              </Link>
              <Link
                href="/contact"
                className="text-[12px] font-semibold text-gray-700 hover:text-gray-900 transition"
              >
                Contact Us
              </Link>
            </nav>
            <Link href="/registration">
              <button className="border border-gray-800 px-4 py-1 rounded-md font-semibold text-gray-800 hover:bg-gray-100 transition">
                Register Now
              </button>
            </Link>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <button
            className={`md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none rounded-md transition-colors ${menuOpen ? "bg-farm-green" : ""}`}
            aria-label="Open menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`block w-6 h-0.5 ${menuOpen ? "bg-white" : "bg-gray-800"} mb-1 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 ${menuOpen ? "bg-white" : "bg-gray-800"} mb-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 ${menuOpen ? "bg-white" : "bg-gray-800"} transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-50 flex justify-end md:hidden"
          onClick={handleNavClick}
        >
          <div
            className="w-3/4 max-w-xs bg-white h-full shadow-lg p-8 flex flex-col space-y-8 animate-slide-in border-4 border-farm-green"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="self-end w-10 h-10  text-white rounded-full flex items-center justify-center hover:bg-green-700 transition"
              aria-label="Close menu"
              onClick={handleNavClick}
            >
              ✕
            </button>
            <nav className="flex flex-col bg-slate-100 rounded-xl space-y-6 p-9">
              <Link
                href="/about"
                className="text-base font-semibold text-gray-700 hover:text-gray-900 transition"
                onClick={handleNavClick}
              >
                About Us
              </Link>
              <Link
                href="/explore"
                className="text-base font-semibold text-gray-700 hover:text-gray-900 transition"
                onClick={handleNavClick}
              >
                Features
              </Link>
              <Link
                href="/contact"
                className="text-base font-semibold text-gray-700 hover:text-gray-900 transition"
                onClick={handleNavClick}
              >
                Contact Us
              </Link>
            </nav>
            <Link href="/registration" onClick={handleNavClick}>
              <button className="w-full py-2 px-4 text-farm-green rounded-md font-semibold hover:bg-green-500 transition">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
