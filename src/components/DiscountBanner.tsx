"use client";

import { useState } from "react";

export default function DiscountBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-black">
      <div className="relative ml-24">
        {/* Discount Button */}
        <button className="bg-black text-white px-10 py-6 rounded-lg flex items-center gap-3 transition-all duration-300 ring-1 ring-white/10 hover:ring-white/20">
          <span className="text-sm font-medium">Get My 15% OFF</span>
        </button>
        
        {/* Close button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 h-6 w-6 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
        >
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}