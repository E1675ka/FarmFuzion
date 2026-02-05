"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Using inline SVGs for icons since lucide-react might not be installed

export default function RegistrationPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="min-h-screen w-full flex text-primary-dark">
            {/* Left Panel - Form */}
            {/* Reduced vertical padding (py-12 -> py-6) to reduce scrolling */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-6 overflow-y-auto h-screen">
                {/* Logo - Using the requested SVG */}
                <div className="mb-6">
                    <div className="relative w-32 h-10">
                        <Image
                            src="/images/FF LOGO BLACK.svg"
                            alt="FarmFuzion Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </div>

                {/* Compact Headings */}
                <h1 className="text-3xl font-heading font-bold mb-1">
                    Create an account
                </h1>
                <p className="text-gray-600 mb-6 font-sans text-sm">
                    Sign up and get 30 day free trial
                </p>

                {/* Form - Reduced spacing (space-y-5 -> space-y-3) */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
                    {/* Full Name */}
                    <div className="space-y-1">
                        <input
                            type="text"
                            id="fullname"
                            placeholder="Full name"
                            className="w-full bg-[#f0f2f5] border-none rounded-xl px-4 py-3 text-sm text-gray-800 focus:ring-2 focus:ring-primary-green outline-none font-sans"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="w-full bg-[#f0f2f5] border-none rounded-xl px-4 py-3 text-sm text-gray-800 focus:ring-2 focus:ring-primary-green outline-none font-sans"
                        />
                    </div>

                    {/* Phone Number - Spans full width */}
                    <div className="space-y-1 md:col-span-2">
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Phone Number"
                            className="w-full bg-[#f0f2f5] border-none rounded-xl px-4 py-3 text-sm text-gray-800 focus:ring-2 focus:ring-primary-green outline-none font-sans"
                        />
                    </div>

                    {/* Password */}
                    <div className="space-y-1 relative">
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Password"
                                className="w-full bg-[#f0f2f5] border-none rounded-xl px-4 py-3 text-sm text-gray-800 focus:ring-2 focus:ring-primary-green outline-none font-sans pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 bg-transparent p-1 w-auto h-auto"
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-1 relative">
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                className="w-full bg-[#f0f2f5] border-none rounded-xl px-4 py-3 text-sm text-gray-800 focus:ring-2 focus:ring-primary-green outline-none font-sans pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 bg-transparent p-1 w-auto h-auto"
                            >
                                {showConfirmPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full md:col-span-2  rounded-full py-1 transition-all mt-2 font-sans font-bold text-sm h-auto"
                    >
                        Submit
                    </button>

                    <div className="md:col-span-2 grid grid-cols-2 gap-3 mt-1">
                        <div className="flex items-center justify-center">
                            <p className="text-gray-500 font-medium">Or</p>
                        </div>
                        <button
                            type="button"
                            className="flex items-center justify-center gap-2 border border-gray-300 rounded-full py-2.5 hover:bg-gray-50 transition bg-transparent h-auto text-gray-700"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.24.81-.6z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 4.61c1.62 0 3.09.56 4.23 1.64l3.15-3.15C17.45 1.19 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                />
                            </svg>
                            <span className="font-medium font-sans text-sm">Google</span>
                        </button>
                    </div>
                </form>

            </div>

            {/* Right Panel - Image & Cards */}
            <div className="hidden lg:flex w-1/2 relative bg-gray-900 items-center justify-center p-8 overflow-hidden m-4 rounded-3xl rounded-tr-[3rem]">
                <Image
                    src="/images/HAND TABLET IMAGE.png"
                    alt="Farm collaboration"
                    fill
                    className="object-cover opacity-80"
                />

                {/* Decorative Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-green/80 to-primary-dark/40" />

                <div className="relative w-full max-w-lg h-full max-h-[600px] flex flex-col justify-center pointer-events-none">

                    {/* Effectiveness/Stats Card - Upper Left */}
                    <div className="absolute top-24 -left-4 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-2xl w-72 transform -rotate-3 animate-float-slow">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="bg-green-500/20 p-1.5 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#4ade80" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                                    </svg>
                                </div>
                                <span className="text-sm font-semibold text-white">Crop Yield</span>
                            </div>
                            <span className="text-green-400 font-bold text-sm">+24%</span>
                        </div>

                        {/* Mock Chart/Graph */}
                        <div className="flex items-end gap-1 h-12 w-full px-1">
                            {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                                <div key={i} className="flex-1 bg-green-400/30 rounded-t-sm hover:bg-green-400/50 transition" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                        <div className="mt-3 flex justify-between text-[10px] text-white/50">
                            <span>Oct 24</span>
                            <span>Oct 30</span>
                        </div>
                    </div>

                    {/* Testimonial Card - Bottom Right */}
                    <div className="absolute bottom-32 -right-4 bg-white/95 p-5 rounded-2xl shadow-2xl w-80 transform rotate-2">
                        <div className="flex items-start gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                                {/* Placeholder Avatar */}
                                <Image src="/images/FARMER.png" alt="Farmer" fill className="object-cover" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">John D.</h4>
                                <p className="text-xs text-primary-green font-medium">Cooperative Leader</p>
                            </div>
                            <div className="ml-auto text-yellow-500 flex text-xs">★★★★★</div>
                        </div>
                        <p className="text-gray-600 text-xs italic leading-relaxed">
                            "FarmFuzion transformed how we manage our cooperative. The real-time data inputs and tracking are exactly what we needed."
                        </p>
                    </div>
                </div>

                {/* Close Button Mockup */}
                <button data-variant="circular" className="absolute top-8 right-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm shadow-lg transition text-white border border-white/20">
                    <Link href="/" className="w-full h-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </Link>
                </button>
            </div>
        </div>
    );
}
