"use client";

import { useState } from "react";
import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

const tools = [
  {
    id: 1,
    title: "Affordable Credit & Savings",
    description:
      "Access loans and save to build assets secured against crop insurance. Get quick access to farming without complex paperwork or unrealistic repayment terms.",
    image: "/explore/credit.png",
    color: "bg-green-100",
  },
  {
    id: 2,
    title: "Agronomy Services",
    description:
      "Get expert guidance on soil health, crop rotation, and sustainable practices to improve yield and resilience.",
    image: "/explore/TRACTOR.png",
    color: "bg-blue-100",
  },
  {
    id: 3,
    title: "Veterinary Support",
    description:
      "Protect livestock health with timely access to veterinary care and remote animal health advice.",
    image: "/explore/vet.png",
    color: "bg-red-100",
  },
  {
    id: 4,
    title: "Market Access & Virtual Markets",
    description:
      "Sell directly to buyers through the international marketplace. List your products, review offers, and close deals from your phone.",
    image: "/explore/MARKET ACCESS.png",
    color: "bg-purple-100",
  },
  {
    id: 5,
    title: "Insurance Services",
    description:
      "Protect your crops, livestock, and income with insurance products that respond to real farm risks.",
    image: "/explore/insurance card.png",
    color: "bg-yellow-100",
  },
  {
    id: 6,
    title: "Real-Time Market & Weather Data",
    description:
      "Make smarter decisions with access to up-to-date market prices and localized weather alerts.",
    image: "/explore/data.png",
    color: "bg-cyan-100",
  },
  {
    id: 7,
    title: "Seed Input & Inventory Management",
    description:
      "Track inputs, monitor storage, and reduce post-harvest losses using digital tools.",
    image: "/explore/FARMING INPUTS.png",
    color: "bg-lime-100",
  },
  {
    id: 8,
    title: "Digital Payments",
    description:
      "Send and receive money, pay for inputs, repay loans, and settle bills in one platform.",
    image: "/explore/PAYMENTS.png",
    color: "bg-orange-100",
  },
  {
    id: 9,
    title: "Farm Activity Support",
    description:
      "Plan, manage, and record your season’s activities in one place.",
    image: "/explore/FARM ACTIVITIES.png",
    color: "bg-indigo-100",
  },
];

export default function ExploreTools() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(tools.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedTools = tools.slice(startIndex, startIndex + itemsPerPage);

  // Create scroll reveal refs for each tool card
  const toolRefs = displayedTools.map((_, i) =>
    useScrollReveal({
      duration: 700,
      delay: i * 150, // stagger each card by 150ms
      direction: "up",
      distance: 50,
    }),
  );

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedTools.map((tool, i) => (
            <div
              key={tool.id}
              ref={toolRefs[i].elementRef}
              style={toolRefs[i].style}
              className="group flex flex-col cursor-pointer rounded-2xl p-6 mb-10 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`${tool.color} rounded-2xl h-32 sm:h-40 w-3/4 sm:w-full flex items-center justify-center mb-9 mx-auto group-hover:scale-105 transition-transform`}
              >
                <Image
                  src={tool.image}
                  alt={tool.title}
                  width={384}
                  height={256}
                  className="object-contain w-full h-auto"
                />
              </div>

              <h3 className="text-primary-green  mt-10 mb-2 ml-2">
                {tool.title}
              </h3>

              <p className="text-sm ml-2">{tool.description}</p>
            </div>
          ))}
        </div>

        {/* Green CTA Button */}
        <div className="flex justify-center">
          <button className="bg-farm-light-green text-white font-bold px-8 py-3 rounded-md hover:bg-green-600 transition">
            More
          </button>
        </div>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row justify-end items-center gap-4 mb-8">
          <span className="text-gray-600 text-sm">
            Showing results{" "}
            <span className="font-semibold">
              {startIndex + 1}–
              {Math.min(startIndex + itemsPerPage, tools.length)}
            </span>
          </span>

          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-40"
            >
              ←
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-farm-light-green text-white"
                    : "border border-gray-300 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-40"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
