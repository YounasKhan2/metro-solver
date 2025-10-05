import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="font-sans text-white">
      {/* Top Benefits Bar */}
      <div className="w-full border-b border-white/5 bg-[#0b0713]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0b0713]/60">
        <div className="mx-auto max-w-7xl px-4 md:py-3.5 text-xs sm:text-sm text-white/80">
          <ul className="flex flex-wrap items-center justify-between gap-3">
            <li className="flex items-center gap-2"><span className="opacity-90">Budget friendly</span><span className="opacity-30 hidden sm:inline">•</span></li>
            <li className="opacity-90">No. 1 in Europe</li>
            <li className="flex items-center gap-2"><span className="opacity-90">On your first order</span>
              <span className="text-black font-semibold rounded-full bg-gradient-to-r from-[#ff5a68] to-[#ff976a] px-3 py-1">30% OFF</span>
              <span className="opacity-30 hidden sm:inline">•</span>
            </li>
            <li className="opacity-90 hidden md:block">For all products buy now get the offer</li>
            <li className="opacity-90">User Friendly</li>
            <li className="opacity-90">24/7 Service</li>
          </ul>
        </div>
      </div>

      {/* Hero Section: left text, right video (no overlap) */}
  <main className="relative py-6 md:py-8 min-h-[820px] md:min-h-[900px] lg:min-h-[980px] overflow-hidden">
        {/* Transparent Navbar floating above hero */}
        <Navbar active="home" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1600px] px-2 sm:px-3 md:px-4">
          <div className="grid grid-cols-12 gap-5 md:gap-7 lg:gap-8 items-center">
            {/* Left: Text */}
            <div className="col-span-12 md:col-span-6 max-w-[820px]">
              <h1 className="text-[48px] sm:text-[60px] md:text-[74px] lg:text-[84px] font-semibold leading-[1.05] tracking-tight">
                <span className="block">Expert to</span>
                <span className="block">Digitalise Your</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500">Growth</span>
              </h1>
              <p className="mt-6 max-w-[680px] text-white/75 text-sm sm:text-base">
                We are constantly growing or learning and improving. Enter your the
                personal real estate sanctf uary, where finding the ideal home is
              </p>
              <div className="mt-9">
                <a href="#" className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-base sm:text-lg font-medium text-white bg-gradient-to-r from-[#6d31ff] via-[#8a2be2] to-[#b026ff] shadow-[0_0_36px_-10px_#8a2be2] ring-1 ring-white/10">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/10">✦</span>
                  Explore Now
                </a>
              </div>
            </div>

            {/* Right: Animation constrained to right side */}
            <div className="col-span-12 md:col-span-6 md:justify-self-end relative">
              <div className="absolute -inset-10 -z-10 rounded-[40px] opacity-40 blur-2xl bg-[radial-gradient(800px_360px_at_75%_55%,rgba(168,85,247,0.18),transparent_60%)]" />
              <div className="w-full md:w-[700px] lg:w-[820px] xl:w-[900px]">
                <div className="overflow-hidden rounded-[28px]">
                  {/* Prefer transparent GIF if available */}
                  <img
                    src="/material/Comp%201_4.gif"
                    alt="Hero animation"
                    className="h-full w-full object-contain aspect-[16/10]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating chat button */}
      <a
        href="#"
        aria-label="Chat"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full grid place-items-center bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_10px_30px_-10px_#a855f7] ring-1 ring-white/15"
      >
        <span className="text-2xl">🤖</span>
      </a>
    </div>
  );
}
