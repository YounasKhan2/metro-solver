"use client";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gradient-to-t from-black via-purple-950 to-black py-20 overflow-hidden">
      <div className="mx-auto max-w-[95vw] lg:max-w-[90vw] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          
          {/* Top - Text Content */}
          <div className="relative z-10 text-center lg:text-left">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Why You<br />
              Choose Metro<br />
              Solver?
            </h2>
            
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              We are constantly growing or learning and improving. Enter your 
              personal real estate sanctuary, where finding the ideal home is 
              effortless and comfortable with our assistance.
            </p>
            
            {/* Book Now Button */}
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                ✦
              </span>
              Book Now
            </button>
            
            {/* Floating Features - Responsive */}
                        {/* Floating Features - Responsive */}
            <div className="hidden md:block">
              {/* Cancel Anytime */}
              <div className="absolute -top-4 right-20 md:right-36 bg-black backdrop-blur-sm text-white px-4 md:px-8 py-3 md:py-5 rounded-full text-lg md:text-2xl lg:text-4xl font-bold transform -rotate-11">
                Cancel Anytime
              </div>
              
              {/* 24/7 Customer Service */}
              <div className="absolute top-16 md:top-25 right-16 md:right-36 bg-gradient-to-r from-purple-600 via-black to-purple-600 backdrop-blur-sm text-white px-4 md:px-8 py-3 md:py-5 rounded-full text-lg md:text-2xl lg:text-4xl font-bold transform rotate-8 shadow-lg shadow-purple-500/25">
                24/7 Customer Service
              </div>
              
              {/* Refers & Earn */}
              <div className="absolute top-36 md:top-58 right-20 md:right-36 bg-black backdrop-blur-sm text-white px-4 md:px-8 py-3 md:py-5 rounded-full text-lg md:text-2xl lg:text-4xl font-bold transform -rotate-11">
                Refers & Earn
              </div>
              
              {/* Money Back Guarantee */}
              <div className="absolute top-56 md:top-84 right-16 md:right-36 bg-black backdrop-blur-sm text-white px-4 md:px-8 py-3 md:py-5 rounded-full text-lg md:text-2xl lg:text-4xl font-bold">
                Money Back Guarantee
              </div>
            </div>
            
            {/* Mobile Floating Features - Visible only on small screens */}
            <div className="md:hidden mt-8 grid grid-cols-2 gap-3">
              <div className="bg-black backdrop-blur-sm text-white px-3 py-2 rounded-full text-center text-xs font-medium transform -rotate-2">
                Cancel Anytime
              </div>
              <div className="bg-gradient-to-r from-purple-600 via-black to-purple-600 backdrop-blur-sm text-white px-3 py-2 rounded-full text-center text-xs font-medium transform rotate-2 shadow-lg shadow-purple-500/25">
                24/7 Service
              </div>
              <div className="bg-black backdrop-blur-sm text-white px-3 py-2 rounded-full text-center text-xs font-medium transform -rotate-1">
                Refers & Earn
              </div>
              <div className="bg-black backdrop-blur-sm text-white px-3 py-2 rounded-full text-center text-xs font-medium transform rotate-1">
                Money Back
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/3 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
}