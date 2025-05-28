"use client"

import AnimatedCounter from "./animated-counter"

export default function BrandsPage() {
  return (
    <div className="relative">
      {/* Brands Lighter Vortex Blue-Pink Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 -z-10" />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-5xl animate-fadeInUp">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-sky-200 to-pink-200 bg-clip-text text-transparent">
            ALL-IN-ONE TIKTOK SHOP SOLUTIONS
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            We provide a variety of services to help boost your business on TikTok with modern, data-driven strategies
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <button className="vortex-button text-white px-8 py-4 rounded-full font-semibold border-none cursor-pointer">
              Get a Free Strategy Plan
            </button>
            <button className="glass-effect-vortex border border-sky-400/50 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-sky-400/10 hover:border-sky-400">
              Book an Appointment
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent">
            TikTok Shop Partnership Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Affiliation Management",
                description:
                  "We create powerful marketing strategies with precision. Boost affiliate success with our network of top-tier influencers.",
                gradient: "from-sky-500 to-cyan-500",
              },
              {
                icon: "📈",
                title: "Ads Promotion",
                description:
                  "We design magnetic advertising campaigns that create viral content. Our ads generate conversation and drive sales.",
                gradient: "from-cyan-400 to-sky-500",
              },
              {
                icon: "📺",
                title: "Live Streaming Services",
                description:
                  "We provide livestream with a full package service, offering customized solutions and premium content creation.",
                gradient: "from-sky-400 to-pink-400",
              },
              {
                icon: "✨",
                title: "Content Creation",
                description:
                  "Our experienced team specializes in creating viral content that sparks engagement in your industry niche.",
                gradient: "from-pink-500 to-sky-500",
              },
            ].map((service, index) => (
              <div key={index} className="glass-effect-vortex p-8 rounded-3xl modern-card group">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Our Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: 30000, label: "Creators", gradient: "from-sky-500 to-cyan-500", suffix: "+" },
              { number: 25000, label: "Videos", gradient: "from-cyan-400 to-sky-500", suffix: "+" },
              { number: 53, label: "GMV", gradient: "from-sky-400 to-pink-400", suffix: "M+" },
            ].map((stat, index) => (
              <div key={index} className="glass-effect-vortex p-8 rounded-3xl modern-card">
                <div
                  className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                >
                  <AnimatedCounter end={stat.number} duration={5000} suffix={stat.suffix} />
                </div>
                <div className="text-xl text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-16 bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent">
            Our Clients
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-6">
            {[
              "GNC",
              "Brookstone",
              "CROCS",
              "Zimba",
              "Glitzkoin",
              "MOFT",
              "DREO",
              "CIDER",
              "OSEE",
              "OLIVE",
              "AER",
              "ESR",
              "Urban Division",
              "PACSUN",
              "Sensei",
            ].map((client, index) => (
              <div
                key={index}
                className="glass-effect-vortex p-4 rounded-2xl h-20 flex items-center justify-center text-sm font-semibold text-gray-300 hover:text-white hover:bg-sky-500/10 transition-all duration-300 modern-card border border-sky-500/20"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
