"use client";

import Image from "next/image";

type NavbarProps = {
  active?: "home" | "about" | "services" | "white-label" | "contact";
};

export default function Navbar({ active = "home" }: NavbarProps) {
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
          <button aria-label="Cart" className="h-16 w-16 rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition" />
          <div className="h-16 w-16 rounded-full ring-1 ring-white/15 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-br from-amber-300 to-pink-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
