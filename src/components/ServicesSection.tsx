"use client";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: "🎨",
      title: "Graphic Design",
      description: "We are constantly growing or learning and improving Enter your personal real estate sanctf uary, where finding the ideal home is",
      featured: false
    },
    {
      id: 2,
      icon: "💻",
      title: "Web & Software Development", 
      description: "We are constantly growing or learning and improving Enter your personal real estate sanctf uary, where finding the ideal home is",
      featured: true
    },
    {
      id: 3,
      icon: "🎬",
      title: "Multimedia & Video Editing",
      description: "We are constantly growing or learning and improving Enter your personal real estate sanctf uary, where finding the ideal home is",
      featured: false
    },
    {
      id: 4,
      icon: "📱",
      title: "Digital Marketing",
      description: "We are constantly growing or learning and improving Enter your personal real estate sanctf uary, where finding the ideal home is",
      featured: false
    },
    {
      id: 5,
      icon: "💡",
      title: "Creative Writing Solution",
      description: "We are constantly growing or learning and improving Enter your personal real estate sanctf uary, where finding the ideal home is",
      featured: false
    },
    {
      id: 6,
      icon: "🔍",
      title: "SEO",
      description: "We are constantly growing or learning and improving Enter your personal real estate sanctf uary, where finding the ideal home is",
      featured: false
    },
    {
      id: 7,
      icon: "🎯",
      title: "3D Animation & Visualisation",
      description: "We are constantly growing or learning and improving Enter your personal real estate sanctf uary, where finding the ideal home is",
      featured: false
    },
    {
      id: 8,
      icon: "🛒",
      title: "E-Commerce Solution",
      description: "We are constantly growing or learning and improving Enter your personal real estate sanctf uary, where finding the ideal home is",
      featured: false
    },
    {
      id: 9,
      icon: "💰",
      title: "Accounting",
      description: "We are constantly growing or learning and improving Enter your personal real estate sanctf uary, where finding the ideal home is",
      featured: false
    },
    {
      id: 10,
      icon: "⚙️",
      title: "Special Combo",
      description: "We are constantly growing or learning and improving Enter your personal real estate sanctf uary, where finding the ideal home is",
      featured: false
    },
    {
      id: 11,
      icon: "🌐",
      title: "Premium Website",
      description: "We are constantly growing or learning and improving Enter your personal real estate sanctf uary, where finding the ideal home is",
      featured: false
    },
    {
      id: 12,
      icon: "🔗",
      title: "Premium Domains",
      description: "We are constantly growing or learning and improving Enter your personal real estate sanctf uary, where finding the ideal home is",
      featured: false
    },
    {
      id: 13,
      icon: "🔄",
      title: "Proxy",
      description: "We are constantly growing or learning and improving Enter your personal real estate sanctf uary, where finding the ideal home is",
      featured: false
    },
    {
      id: 14,
      icon: "👕",
      title: "Merchandise",
      description: "We are constantly growing or learning and improving Enter your personal real estate sanctf uary, where finding the ideal home is",
      featured: false
    },
    {
      id: 15,
      icon: "🎓",
      title: "Academy",
      description: "We are constantly growing or learning and improving Enter your personal real estate sanctf uary, where finding the ideal home is",
      featured: false
    }
  ];

  return (
    <section className="w-full px-4 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-white text-4xl md:text-6xl font-bold mb-6 tracking-tight">Our Services</h2>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Enter your personal real estate sanctuary, where finding the ideal 
            home is effortless and comfortable with our assistance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] cursor-pointer min-h-[320px] flex flex-col justify-between backdrop-blur-sm bg-white/[0.03] ring-1 ring-white/[0.08] hover:bg-gradient-to-br hover:from-violet-600/25 hover:to-fuchsia-600/25 hover:ring-violet-400/40 hover:shadow-2xl hover:shadow-violet-500/20"
            >
              {/* Background glow for featured item */}
              {service.featured && (
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 blur-xl" />
              )}
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 group-hover:bg-violet-500/30 group-hover:ring-violet-400/50 transition-all duration-500">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-white text-xl font-bold mb-4 group-hover:text-white transition-colors leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/50 text-sm leading-relaxed mb-6 group-hover:text-white/70 transition-colors flex-1">
                    {service.description}
                  </p>

                  {/* Read More Link */}
                  <button className="text-violet-400 hover:text-violet-300 text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all self-start">
                    Read More
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}