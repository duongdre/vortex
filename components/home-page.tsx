"use client"

import Image from "next/image"
import AnimatedCounter from "./animated-counter"

interface HomePageProps {
  setCurrentPage: (page: string) => void
}

export default function HomePage({ setCurrentPage }: HomePageProps) {
  const handlePageNavigation = (page: string) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="relative">
      {/* Hero Section with Responsive Neon Tunnel Background */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 relative neon-tunnel-responsive">
        <div className="absolute inset-0 bg-black/40 -z-10" />

        <div className="hero-content text-center z-10 max-w-6xl animate-fadeInUp">
          {/* Hero Logo */}
          <div className="mt-48 mb-8 flex justify-center">
            <Image
              src="/images/vortex-icon.png"
              alt="VORTEX Logo"
              width={150}
              height={150}
              className="animate-modernPulse drop-shadow-2xl"
            />
          </div>

          <h1 className="text-6xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-300 to-pink-200 bg-clip-text text-transparent animate-textShimmer bg-[length:200%_auto] drop-shadow-2xl">
            VORTEX
          </h1>
          <h2 className="text-2xl lg:text-4xl mb-8 text-white font-light drop-shadow-lg">
            <a
              href="https://www.tiktok.com/@ash.vortex"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row items-center justify-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Image src="/images/tiktok-logo.png" alt="TikTok" width={40} height={40} className="mb-2 sm:mb-0" />
              <span>Where Creators Become Legends</span>
            </a>
          </h2>
          <p className="max-w-4xl text-lg lg:text-xl leading-relaxed text-gray-200 mb-8 drop-shadow-lg">
            Founded by visionary entrepreneur <span className="text-sky-400 font-semibold">Ash Davis</span>, VORTEX has
            revolutionized the creator economy. From humble beginnings to managing 4,000+ elite creators, Ash's journey
            proves that with the right vision, passion, and relentless dedication, anyone can transform the digital
            landscape.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={() => handlePageNavigation("about")}
              className="vortex-button text-white px-8 py-4 rounded-full text-lg font-semibold border-none cursor-pointer shadow-2xl flex items-center gap-3"
            >
              <Image src="/images/vortex-icon.png" alt="VORTEX" width={24} height={24} className="rounded-full" />
              Meet Ash Davis
            </button>
            <button
              onClick={() => handlePageNavigation("creators")}
              className="glass-effect-vortex border border-sky-400/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-sky-400/10 hover:border-sky-400"
            >
              Join Our Network
            </button>
          </div>
        </div>
      </section>

      {/* All other sections with Lighter Vortex blue-pink gradient background */}
      <div className="bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700">
        {/* Ash's Vision Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slideInFromLeft">
                <h2 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent">
                  The Ash Davis Vision
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  "I didn't just want to create another agency. I wanted to build a movement that puts creators first,
                  where success is shared, not hoarded."
                </p>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Ash Davis saw the broken promises in the creator economy and decided to fix them. With zero commission
                  fees, transparent partnerships, and genuine care for creator success, VORTEX became the agency
                  creators actually wanted to join.
                </p>
                <button
                  onClick={() => handlePageNavigation("story")}
                  className="vortex-pink-button text-white px-6 py-3 rounded-full font-semibold border-none cursor-pointer"
                >
                  Read Our Full Story
                </button>
              </div>

              <div className="animate-slideInFromRight">
                <div className="glass-effect-vortex p-8 rounded-3xl modern-card">
                  <div className="w-full h-80 bg-gradient-to-br from-sky-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-sky-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">👨‍💼</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Ash Davis</h3>
                      <p className="text-sky-400">Founder & CEO</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-300 italic">
                      "Every creator deserves a partner who believes in their potential as much as they do."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              The VORTEX Impact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: 4000, label: "Active Creators", icon: "👥", suffix: "+" },
                { number: 50, label: "Creator Earnings", icon: "💰", prefix: "$", suffix: "M+" },
                { number: 500, label: "Total Views", icon: "👁️", suffix: "M+" },
                { number: 0, label: "Commission Fees", icon: "🎯", suffix: "%" },
              ].map((stat, index) => (
                <div key={index} className="glass-effect-vortex p-8 rounded-3xl modern-card text-center">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter
                      end={stat.number}
                      duration={5000}
                      prefix={stat.prefix || ""}
                      suffix={stat.suffix || ""}
                    />
                  </div>
                  <div className="text-xl text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent">
              How We Transform Creators
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Image src="/images/tiktok-logo.png" alt="TikTok" width={32} height={32} />,
                  title: "TikTok LIVE Mastery",
                  description: "Advanced streaming strategies that turn viewers into loyal fans and revenue streams.",
                  cta: "For Creators",
                  page: "creators",
                },
                {
                  icon: "🤝",
                  title: "Brand Partnerships",
                  description: "Connect with premium brands through our exclusive network of trusted partners.",
                  cta: "For Brands",
                  page: "brands",
                },
                {
                  icon: "⭐",
                  title: "Success Stories",
                  description: "Real creators, real results. See how VORTEX has changed lives and careers.",
                  cta: "Read Stories",
                  page: "testimonials",
                },
              ].map((service, index) => (
                <div key={index} className="glass-effect-vortex p-8 rounded-3xl modern-card group">
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {typeof service.icon === "string" ? <span className="text-2xl">{service.icon}</span> : service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                  <button
                    onClick={() => handlePageNavigation(service.page)}
                    className="w-full bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-black/70 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    {service.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Join the VORTEX Family?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Whether you're a creator looking to scale, a brand seeking authentic partnerships, or someone with a story
              to tell, Ash Davis and the VORTEX team are here to help you succeed.
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <button
                onClick={() => handlePageNavigation("creators")}
                className="vortex-button px-8 py-4 rounded-full text-white font-semibold border-none cursor-pointer flex items-center gap-3"
              >
                <Image src="/images/tiktok-logo.png" alt="TikTok" width={20} height={20} />
                Apply as Creator
              </button>
              <button
                onClick={() => handlePageNavigation("brands")}
                className="vortex-pink-button px-8 py-4 rounded-full text-white font-semibold border-none cursor-pointer flex items-center gap-3"
              >
                <span className="text-xl">🤝</span>
                Partner with Us
              </button>
              <button
                onClick={() => handlePageNavigation("sellers")}
                className="glass-effect-vortex border border-sky-400/50 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-sky-400/10 hover:border-sky-400"
              >
                Contact Ash Directly
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
