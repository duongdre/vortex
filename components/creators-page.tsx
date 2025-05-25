"use client"

import Image from "next/image"

export default function CreatorsPage() {
  return (
    <div className="relative">
      {/* Creators Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-800 -z-10" />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInFromLeft">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/images/vortex-icon.png"
                alt="VORTEX Logo"
                width={50}
                height={50}
                className="rounded-full animate-modernPulse"
              />
              <Image src="/images/tiktok-logo.png" alt="TikTok" width={40} height={40} />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              TikTok Livestream Creator Program
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              As TikTok Live's <span className="text-pink-400 font-semibold">official partner</span>, NBCN helps
              creators livestream on their TikTok account in our{" "}
              <span className="text-cyan-400 font-semibold">LA content studio</span>, grow a following, and monetize
              their talent with our <span className="text-pink-400 font-semibold">FREE creator partnership</span>.
            </p>
            <button className="tiktok-button text-white px-8 py-4 rounded-full text-lg font-semibold border-none cursor-pointer flex items-center gap-3">
              <Image src="/images/vortex-icon.png" alt="VORTEX" width={24} height={24} className="rounded-full" />
              Program Overview
            </button>
          </div>

          <div className="animate-slideInFromRight flex justify-center">
            <div className="relative">
              <div className="w-80 h-[600px] glass-effect rounded-[3rem] p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-b from-pink-500 to-red-600 rounded-[2.5rem] relative overflow-hidden">
                  <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-tiktokPulse">
                    LIVE
                  </div>
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto overflow-hidden">
                      <Image
                        src="/images/vortex-icon.png"
                        alt="VORTEX"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                    <h3 className="text-white text-xl font-bold">New Beginnings</h3>
                    <p className="text-white/80">Creator Network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-2xl text-gray-400 flex items-center justify-center gap-3">
              <Image src="/images/tiktok-logo.png" alt="TikTok" width={30} height={30} />
              TikTok LIVE Creator Partnership
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                number: "01",
                title: "Livestream on TikTok",
                description:
                  "Personal team + professional studio. Guiding creators through everything they need to know about TikTok Live.",
                gradient: "from-pink-500 to-red-500",
                icon: <Image src="/images/tiktok-logo.png" alt="TikTok" width={24} height={24} />,
              },
              {
                number: "02",
                title: "Exclusive Events",
                description:
                  "Get exclusive traffic boosts and access to TikTok LIVE's official campaigns to maximize reach.",
                gradient: "from-cyan-400 to-teal-400",
                icon: (
                  <Image src="/images/vortex-icon.png" alt="VORTEX" width={24} height={24} className="rounded-full" />
                ),
              },
              {
                number: "03",
                title: "Monetization Assistance",
                description: "NBCN helps creators align their content with TikTok LIVE's monetization models.",
                gradient: "from-pink-400 to-cyan-400",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                ),
              },
              {
                number: "04",
                title: "Content Guidance",
                description:
                  "Creators will receive personalized guidance on content production teams to help with logistics.",
                gradient: "from-cyan-500 to-pink-500",
                icon: (
                  <Image src="/images/vortex-icon.png" alt="VORTEX" width={24} height={24} className="rounded-full" />
                ),
              },
            ].map((feature, index) => (
              <div key={index} className="glass-effect p-8 rounded-3xl modern-card group">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            FAQ
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "What's in it for me? Do you take a cut of my profits?",
                answer:
                  "You keep 100% of what you make on the platform. TikTok pays us directly proportional to what our streamers make. So, the bigger you are and the better you perform in your streams, the better it is for us :)",
              },
              {
                question: "Can I leave the NBCN anytime I want or am I stuck in a contract?",
                answer:
                  "This partnership is completely voluntary. We offer a 14-day trial period with the option to remove yourself from our roster. After the 14 days, either party can remove themselves from the partnership.",
              },
              {
                question: "What if I don't live in Los Angeles?",
                answer:
                  "We welcome creators from all locations! While our main studio is in LA, we provide remote support and guidance for creators worldwide.",
              },
            ].map((faq, index) => (
              <div key={index} className="glass-effect rounded-2xl overflow-hidden modern-card">
                <div className="p-6 cursor-pointer hover:bg-pink-500/5 transition-colors duration-300">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <span className="text-pink-400 text-xl">+</span>
                  </div>
                  <p className="text-gray-300 mt-4 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
