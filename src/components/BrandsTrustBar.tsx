"use client";

export default function BrandsTrustBar() {
  const brands = [
    { name: "luminus", logo: "luminus" },
    { name: "brembo", logo: "brembo" },
    { name: "motorola", logo: "motorola" },
    { name: "luminus", logo: "luminus" },
    { name: "brembo", logo: "brembo" },
    { name: "motorola", logo: "motorola" },
  ];

  return (
    <div className="w-full md:py-5 bg-black relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 via-purple-900/15 to-violet-900/20 -z-10"></div>
      <div className="relative overflow-hidden">
        {/* Infinite scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of brands */}
          <div className="flex items-center gap-8 md:gap-12 lg:gap-16 min-w-max px-4">
            {brands.map((brand, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center h-10 md:h-16 px-8 md:px-12 bg-white/4 backdrop-blur-sm rounded-2xl transition-all duration-300 min-w-[180px] md:min-w-[220px]"
              >
                {brand.logo === "luminus" && (
                  <div className="flex items-center gap-3">
                    {/* Luminus logo - star/flower icon */}
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
                    </svg>
                    <span className="text-white font-medium text-lg">luminus</span>
                  </div>
                )}
                
                {brand.logo === "brembo" && (
                  <div className="flex items-center gap-3">
                    {/* Brembo logo - circular brake disc icon */}
                    <div className="relative">
                      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="6" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="2" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-white font-medium text-lg">brembo</span>
                  </div>
                )}
                
                {brand.logo === "motorola" && (
                  <div className="flex items-center gap-3">
                    {/* Motorola logo - M icon */}
                    <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">M</span>
                    </div>
                    <span className="text-white font-medium text-lg">motorola</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-8 md:gap-12 lg:gap-16 min-w-max px-4">
            {brands.map((brand, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center h-10 md:h-16 px-8 md:px-12 bg-white/4 backdrop-blur-sm rounded-2xl transition-all duration-300 min-w-[180px] md:min-w-[220px]"
              >
                {brand.logo === "luminus" && (
                  <div className="flex items-center gap-3">
                    {/* Luminus logo - star/flower icon */}
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
                    </svg>
                    <span className="text-white font-medium text-lg">luminus</span>
                  </div>
                )}
                
                {brand.logo === "brembo" && (
                  <div className="flex items-center gap-3">
                    {/* Brembo logo - circular brake disc icon */}
                    <div className="relative">
                      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="6" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="2" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-white font-medium text-lg">brembo</span>
                  </div>
                )}
                
                {brand.logo === "motorola" && (
                  <div className="flex items-center gap-3">
                    {/* Motorola logo - M icon */}
                    <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">M</span>
                    </div>
                    <span className="text-white font-medium text-lg">motorola</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}