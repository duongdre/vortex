"use client"

import Image from "next/image"

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section with Responsive Neon Tunnel Background */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 relative neon-tunnel-responsive">
        {/* Simple dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 -z-10" />

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

          <h1 className="text-6xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-pink-200 to-cyan-200 bg-clip-text text-transparent animate-textShimmer bg-[length:200%_auto] drop-shadow-2xl">
            VORTEX
          </h1>
          <h2 className="text-2xl lg:text-4xl mb-8 text-white font-light drop-shadow-lg flex items-center justify-center gap-3">
            <Image src="/images/tiktok-logo.png" alt="TikTok" width={40} height={40} />
            TikTok Creator Network
          </h2>
          <p className="max-w-4xl text-lg lg:text-xl leading-relaxed text-gray-200 mb-12 drop-shadow-lg">
            VORTEX was founded with the vision of helping TikTok CREATORS thrive in the digital landscape. Our
            ever-expanding community is home to over 4,000+ vibrant creators, each making waves in the TikTok universe.
            With a clear-cut mission to empower creators, we help TikTok creators and shop partners amplify audience
            reach, elevate content quality, and turn passions into profitable ventures.
          </p>
          <button className="tiktok-button text-white px-8 py-4 rounded-full text-lg font-semibold border-none cursor-pointer shadow-2xl flex items-center gap-3 mx-auto">
            <Image src="/images/vortex-icon.png" alt="VORTEX" width={24} height={24} className="rounded-full" />
            Get Started
          </button>
          <div className="mb-8 flex justify-center"></div>
        </div>
      </section>

      {/* All other sections with Creators gradient background */}
      <div className="bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-800">
        {/* Achievements Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Our Achievements
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="glass-effect p-8 rounded-3xl modern-card group">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Image src="/images/tiktok-logo.png" alt="TikTok" width={32} height={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">TikTok Live Achievement</h3>
                <p className="text-gray-300 leading-relaxed">
                  Leading the industry with unprecedented live streaming success rates and audience engagement metrics.
                </p>
              </div>

              <div className="glass-effect p-8 rounded-3xl modern-card group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Image src="/images/vortex-icon.png" alt="VORTEX" width={32} height={32} className="rounded-full" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">TikTok E-commerce Achievement</h3>
                <p className="text-gray-300 leading-relaxed">
                  Driving millions in revenue through innovative e-commerce strategies and creator partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Image src="/images/tiktok-logo.png" alt="TikTok" width={32} height={32} />,
                  title: "TikTok Creators",
                  features: [
                    "Content Enhancement",
                    "Live Traffic Support",
                    "Monetization Strategies",
                    "Official Events",
                  ],
                  gradient: "from-pink-500 to-red-500",
                  bgClass: "service-card-purple",
                },
                {
                  icon: (
                    <Image src="/images/vortex-icon.png" alt="VORTEX" width={32} height={32} className="rounded-full" />
                  ),
                  title: "TikTok Live Talent Agents",
                  features: [
                    "Earn Lifetime Commissions",
                    "Grow Your Own Business",
                    "Monetize Your Passion",
                    "Professional Development",
                  ],
                  gradient: "from-cyan-400 to-teal-400",
                  bgClass: "service-card-cyan",
                },
                {
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ),
                  title: "For Brands",
                  features: ["Influencer Affiliation", "Ads Management", "Content Production", "Live Event Promotions"],
                  gradient: "from-pink-400 to-cyan-400",
                  bgClass: "service-card-brand",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-3xl modern-card group overflow-hidden ${service.bgClass}`}
                >
                  {/* Dynamic Background Effects */}
                  <div className="absolute inset-0 opacity-20 -z-10">
                    <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent animate-pulse" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">{service.title}</h3>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-gray-200">
                          <div className="w-2 h-2 bg-gradient-to-r from-white to-gray-300 rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <button className="w-full bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-black/70 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Talk with us for more opportunities
            </h2>

            <div className="flex flex-wrap gap-6 justify-center mb-16">
              {["TikTok Livestream Partnership", "TikTok Live Agents", "Brands and E-commerce"].map((item, index) => (
                <button
                  key={index}
                  className={`${
                    index % 2 === 0 ? "tiktok-button" : "tiktok-cyan-button"
                  } px-8 py-4 rounded-full text-white font-semibold border-none cursor-pointer flex items-center gap-3`}
                >
                  {index === 0 && <Image src="/images/tiktok-logo.png" alt="TikTok" width={20} height={20} />}
                  {index === 1 && (
                    <Image src="/images/vortex-icon.png" alt="VORTEX" width={20} height={20} className="rounded-full" />
                  )}
                  {index === 2 && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  )}
                  {item}
                </button>
              ))}
            </div>

            <div className="glass-effect rounded-3xl overflow-hidden max-w-5xl mx-auto mb-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.3357072386!2d-118.65047425848816!3d34.02016144783647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1647891234567!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            <p className="text-gray-400 mb-8">📍 Located in the heart of Los Angeles, California</p>

            <div className="flex gap-4 justify-center">
              {[
                { icon: "📧", title: "Email", href: "mailto:contact@nbcn.com" },
                {
                  icon: <Image src="/images/tiktok-logo.png" alt="TikTok" width={20} height={20} />,
                  title: "TikTok",
                  href: "#tiktok",
                },
                { icon: "📱", title: "Telegram", href: "#telegram" },
                { icon: "📷", title: "Instagram", href: "#instagram" },
                {
                  icon: (
                    <Image src="/images/vortex-icon.png" alt="VORTEX" width={20} height={20} className="rounded-full" />
                  ),
                  title: "VORTEX",
                  href: "#vortex",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-14 h-14 glass-effect rounded-2xl flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:bg-pink-500/20 border border-pink-500/30"
                  title={social.title}
                >
                  {typeof social.icon === "string" ? social.icon : social.icon}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
