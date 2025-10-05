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
    <section className="w-full px-1 md:px-2 lg:px-3 bg-gradient-to-t from-black via-purple-950 to-black py-20 overflow-hidden">
      <div className="mx-auto max-w-[95vw] lg:max-w-[90vw]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Services</h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Enter your personal real estate sanctuary, where finding the ideal 
            home is effortless and comfortable with our assistance.
          </p>
        </div>

        {/* Services Grid - Exactly 3 columns on medium+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl p-10 lg:p-12 transition-all duration-300 cursor-pointer h-[350px] lg:h-[400px] flex flex-col justify-between bg-gray-800/50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-500/25"
            >
              
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-xl bg-white/10 transition-all duration-300">
                    <span className="text-3xl lg:text-4xl">{service.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-white text-xl lg:text-2xl font-semibold mb-4 lg:mb-5 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Read More Link */}
                  <button className="text-blue-400 hover:text-blue-300 text-base lg:text-lg font-medium flex items-center gap-2 transition-all self-start">
                    Read More →
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