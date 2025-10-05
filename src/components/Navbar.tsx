"use client";

import Image from "next/image";
import { useState } from "react";

type NavbarProps = {
  active?: "home" | "about" | "services" | "white-label" | "contact";
};

export default function Navbar({ active = "home" }: NavbarProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
  <div className="relative z-10 mx-auto max-w-[1600px] px-3 sm:px-6 pt-2 md:pt-2">
      <div className="flex items-center justify-between">
        {/* Logo (GIF) with no background */}
        <a href="/" className="relative flex items-center gap-4">
          <div className="h-[112px] w-[112px] grid place-items-center">
            <Image
              src="/material/Frame_1.gif"
              alt="Metro Solver Logo"
              width={96}
              height={96}
              unoptimized
              className="h-24 w-24 object-contain"
              priority
            />
          </div>
          <span className="sr-only">Metro Solver</span>
        </a>

        {/* Centered nav pills - fully transparent background */}
        <nav className="flex-1 flex items-center justify-center">
          <div className="rounded-full ring-1 ring-white/10 px-3.5 sm:px-5 py-2.5 bg-transparent">
            <ul className="flex items-center gap-2 sm:gap-3 text-[15px] sm:text-[16px] text-white/80">
              <li>
                <a
                  className={`inline-block rounded-full px-7 py-3.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] ${
                    active === "home" ? "bg-white/10 text-white" : "hover:text-white"
                  }`}
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a className="inline-block px-7 py-3.5 hover:text-white" href="#">About us</a>
              </li>
              <li className="relative group">
                <a className="inline-block px-7 py-3.5 hover:text-white" href="#">Services ▾</a>
              </li>
              <li>
                <a className="inline-block px-7 py-3.5 hover:text-white" href="#">White label</a>
              </li>
              <li>
                <a className="inline-block px-7 py-3.5 hover:text-white" href="#">Contact us</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-5">
          <button aria-label="Cart" className="relative h-16 w-16 rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition flex items-center justify-center">
            {/* Shopping cart icon */}
            <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            {/* Red notification badge */}
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#ff4757] text-white text-xs font-bold flex items-center justify-center">
              7
            </span>
          </button>
          <div className="relative">
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="h-16 w-16 rounded-full ring-1 ring-white/15 overflow-hidden hover:ring-white/25 transition-all"
            >
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face"
                alt="Profile"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </button>

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <>
                {/* Backdrop */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsProfileOpen(false)}
                />
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 top-[72px] z-50 w-[280px] bg-[#1a1625] rounded-2xl ring-1 ring-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] p-6">
                  {/* Profile Header */}
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="h-16 w-16 rounded-full ring-2 ring-white/15 overflow-hidden mb-3">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face"
                        alt="Albert Flores"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="text-white text-lg font-semibold">Albert Flores</h3>
                    <p className="text-white/60 text-sm">baker@example.com</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mb-6">
                    <button className="flex-1 bg-gradient-to-r from-[#6d31ff] via-[#8a2be2] to-[#b026ff] text-white text-sm font-medium py-2.5 px-4 rounded-lg">
                      Website
                    </button>
                    <button className="flex-1 bg-white/10 text-white/80 text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-white/15 transition">
                      Dashboard
                    </button>
                  </div>

                  {/* Menu Items */}
                  <div className="space-y-1">
                    <button className="w-full flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/5 p-3 rounded-lg transition group">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-sm font-medium">User Profile</span>
                    </button>

                    <button className="w-full flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/5 p-3 rounded-lg transition group">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-sm font-medium">Referrals</span>
                    </button>

                    <button className="w-full flex items-center justify-between text-white/80 hover:text-white hover:bg-white/5 p-3 rounded-lg transition group">
                      <div className="flex items-center gap-3">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                        <span className="text-sm font-medium">Rewards</span>
                      </div>
                      <span className="bg-[#ff4757] text-white text-xs font-bold px-2.5 py-1 rounded-full">468 Points</span>
                    </button>

                    <button className="w-full flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/5 p-3 rounded-lg transition group">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      <span className="text-sm font-medium">Log out</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
