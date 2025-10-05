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
    <section className="w-full py-16 md:py-24 px-4">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Enter your personal real estate sanctuary, where finding the ideal 
            home is effortless and comfortable with our assistance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer ${
                service.featured 
                  ? 'bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 ring-1 ring-violet-500/30 hover:ring-violet-400/50' 
                  : 'bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20'
              }`}
            >
              {/* Background glow for featured item */}
              {service.featured && (
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 blur-xl" />
              )}
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${
                    service.featured ? 'bg-violet-500/20' : 'bg-white/10'
                  }`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed mb-4 group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>

                {/* Read More Link */}
                <button className="text-violet-400 hover:text-violet-300 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}