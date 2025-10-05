"use client";

export default function LatestWorks() {
  // Row 1 & 3: Small square boxes
  const smallWorks = [
    { id: 1, image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400", title: "E-commerce Platform" },
    { id: 2, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400", title: "Analytics Dashboard" },
    { id: 3, image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400", title: "Mobile App Design" },
    { id: 4, image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400", title: "Brand Identity" },
    { id: 5, image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400", title: "Web Development" },
    { id: 6, image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400", title: "UI/UX Design" },
    { id: 7, image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400", title: "Digital Marketing" },
    { id: 8, image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400", title: "Portfolio Site" },
  ];

  // Row 2: Large height boxes
  const largeWorks = [
    { id: 1, image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=800", title: "Corporate Website", category: "Web Design" },
    { id: 2, image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=800", title: "Mobile Banking App", category: "App Development" },
    { id: 3, image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=800", title: "SaaS Platform", category: "Full Stack" },
    { id: 4, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800", title: "AI Dashboard", category: "Data Science" },
    { id: 5, image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=800", title: "E-learning Platform", category: "EdTech" },
    { id: 6, image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=800", title: "Healthcare App", category: "HealthTech" },
  ];

  return (
    <section className="w-full bg-gradient-to-t from-black via-purple-950 to-black  py-20 overflow-hidden">
      <div className="mx-auto max-w-[95vw] lg:max-w-[90vw] px-1 md:px-2 lg:px-3">
        {/* Header */}
        <div className="flex items-start justify-between mb-16">
          <div>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Our Latest Works</h2>
          </div>
          <div className="max-w-lg text-left">
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              Based on the description of Metro Solver and the image provided, here is a 
              6-step process that Metro Solver uses to scale a customer's business
            </p>
          </div>
        </div>
      </div>

      {/* Row 1: Small boxes - Left to Right */}
      <div className="relative mb-8">
        <div className="flex animate-scroll-left">
          {/* First set */}
          <div className="flex gap-6 min-w-max">
            {smallWorks.map((work) => (
              <div
                key={`row1-first-${work.id}`}
                className="relative group cursor-pointer w-64 h-64 rounded-2xl overflow-hidden bg-gray-800/30 hover:scale-105 transition-all duration-300"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-sm">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex gap-6 min-w-max ml-6">
            {smallWorks.map((work) => (
              <div
                key={`row1-second-${work.id}`}
                className="relative group cursor-pointer w-64 h-64 rounded-2xl overflow-hidden bg-gray-800/30 hover:scale-105 transition-all duration-300"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-sm">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Large boxes - Right to Left */}
      <div className="relative mb-8">
        <div className="flex animate-scroll-right">
          {/* First set */}
          <div className="flex gap-6 min-w-max">
            {largeWorks.map((work) => (
              <div
                key={`row2-first-${work.id}`}
                className="relative group cursor-pointer w-80 h-[480px] rounded-2xl overflow-hidden bg-gray-800/30 hover:scale-105 transition-all duration-300"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-purple-400 text-xs font-medium mb-2 block">{work.category}</span>
                  <h3 className="text-white font-bold text-lg">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex gap-6 min-w-max ml-6">
            {largeWorks.map((work) => (
              <div
                key={`row2-second-${work.id}`}
                className="relative group cursor-pointer w-80 h-[480px] rounded-2xl overflow-hidden bg-gray-800/30 hover:scale-105 transition-all duration-300"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-purple-400 text-xs font-medium mb-2 block">{work.category}</span>
                  <h3 className="text-white font-bold text-lg">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 3: Small boxes - Left to Right */}
      <div className="relative">
        <div className="flex animate-scroll-left-delayed">
          {/* First set */}
          <div className="flex gap-6 min-w-max">
            {smallWorks.slice().reverse().map((work) => (
              <div
                key={`row3-first-${work.id}`}
                className="relative group cursor-pointer w-64 h-64 rounded-2xl overflow-hidden bg-gray-800/30 hover:scale-105 transition-all duration-300"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-sm">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex gap-6 min-w-max ml-6">
            {smallWorks.slice().reverse().map((work) => (
              <div
                key={`row3-second-${work.id}`}
                className="relative group cursor-pointer w-64 h-64 rounded-2xl overflow-hidden bg-gray-800/30 hover:scale-105 transition-all duration-300"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-sm">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}