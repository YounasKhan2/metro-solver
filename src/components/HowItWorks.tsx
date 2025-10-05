"use client";

export default function HowItWorks() {
  return (
    <section className="w-full bg-gradient-to-t from-black via-purple-950 to-black py-20 overflow-hidden">
      <div className="mx-auto max-w-[95vw] lg:max-w-[90vw] px-4 md:px-6 lg:px-8">
        {/* How it Works Section */}
        <div className="relative py-20">
          {/* Central Circle with "How it Works?" */}
          <div className="relative flex items-center justify-center">
            {/* Main Circle */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
              {/* Circle Border with Purple Gradient */}
              <div className="absolute inset-0 rounded-full border-4 border-purple-500 bg-gradient-to-br from-purple-900/30 via-black/60 to-purple-900/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    How<br />
                    <span className="text-purple-300">to Works?</span>
                  </h3>
                </div>
              </div>

              {/* Number indicators on circle border */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">01</div>
              <div className="absolute top-30 -right-1 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">02</div>
              <div className="absolute bottom-30 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">03</div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">04</div>
              <div className="absolute bottom-30 -left-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">05</div>
              <div className="absolute top-30 -left-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">06</div>

              {/* Service Pills */}
              
              {/* 01 - Book a Call - Top */}
              <div className="absolute -top-25 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 backdrop-blur-sm border border-slate-600/30 rounded-3xl px-6 py-4 flex items-center gap-3 shadow-xl min-w-[200px]">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.27-.27.35-.68.24-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium text-sm">Book a Call</span>
                </div>
              </div>

              {/* 02 - Requirement Analysis - Top Right */}
              <div className="absolute -top-8 -right-48 md:-right-56">
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 backdrop-blur-sm border border-slate-600/30 rounded-3xl px-6 py-4 flex items-center gap-3 shadow-xl min-w-[220px]">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium text-sm">Requirement Analysis</span>
                </div>
              </div>

              {/* 03 - Service Customisation - Bottom Right */}
              <div className="absolute bottom-15 -right-30 md:-right-56">
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 backdrop-blur-sm border border-slate-600/30 rounded-3xl px-6 py-4 flex items-center gap-3 shadow-xl min-w-[220px]">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium text-sm">Service Customisation</span>
                </div>
              </div>

              {/* 04 - Implement & Develop - Bottom */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 backdrop-blur-sm border border-slate-600/30 rounded-3xl px-6 py-4 flex items-center gap-3 shadow-xl min-w-[220px]">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium text-sm">Implement & Develop</span>
                </div>
              </div>

              {/* 05 - Quality Assurance - Bottom Left */}
              <div className="absolute bottom-4 -left-48 md:-left-56">
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 backdrop-blur-sm border border-slate-600/30 rounded-3xl px-6 py-4 flex items-center gap-3 shadow-xl min-w-[200px]">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium text-sm">Quality Assurance</span>
                </div>
              </div>

              {/* 06 - Delivery and Support - Top Left */}
              <div className="absolute -top-8 -left-48 md:-left-56">
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 backdrop-blur-sm border border-slate-600/30 rounded-3xl px-6 py-4 flex items-center gap-3 shadow-xl min-w-[220px]">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20,8H4V6C4,4.89 4.89,4 6,4H18A2,2 0 0,1 20,6V8M20,19H4V10H20V19Z"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium text-sm">Delivery and Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Current Clients */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-700/30">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                150<span className="text-yellow-400">+</span>
              </div>
              <div className="text-white/70 text-lg">Current Clients</div>
            </div>

            {/* Completed Projects */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-700/30">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                25k<span className="text-yellow-400">+</span>
              </div>
              <div className="text-white/70 text-lg">Completed Projects</div>
            </div>

            {/* Metro Solver Teams */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-700/30">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                90<span className="text-yellow-400">+</span>
              </div>
              <div className="text-white/70 text-lg">Metro Solver Teams</div>
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