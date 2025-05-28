"use client"

import Image from "next/image"

export default function CreatorsPage() {
  return (
    <div className="relative">
      <div className="fixed inset-0 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 -z-10" />

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
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
              Join Ash's Elite Creator Network
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience the <span className="text-sky-400 font-semibold">Ash Davis difference</span>—where creators
              aren't just clients, they're family. As TikTok's{" "}
              <span className="text-pink-400 font-semibold">most trusted partner</span>, VORTEX provides exclusive
              access to Ash's proven strategies, premium brand collaborations, and
              <span className="text-sky-400 font-semibold">zero-commission earnings</span> that put your success first.
            </p>
            <button className="vortex-button text-white px-8 py-4 rounded-full text-lg font-semibold border-none cursor-pointer flex items-center gap-3">
              <Image src="/images/vortex-icon.png" alt="VORTEX" width={24} height={24} className="rounded-full" />
              Apply to Join Ash's Network
            </button>
          </div>

          <div className="animate-slideInFromRight flex justify-center">
            <div className="relative">
              <div className="w-80 h-[600px] glass-effect-vortex rounded-[3rem] p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-b from-sky-500 to-cyan-600 rounded-[2.5rem] relative overflow-hidden">
                  <div className="absolute top-6 right-6 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-vortexPulse">
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
                    <h3 className="text-white text-xl font-bold">VORTEX Creator</h3>
                    <p className="text-white/80">Ash Davis Network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Ash Offers Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent">
              The Ash Davis Advantage
            </h2>
            <p className="text-2xl text-gray-400 flex items-center justify-center gap-3">
              <Image src="/images/tiktok-logo.png" alt="TikTok" width={30} height={30} />
              Personal mentorship from a proven industry leader
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                number: "01",
                title: "Direct Access to Ash",
                description:
                  "Unlike other agencies where you never meet the founder, Ash personally reviews every creator application and provides ongoing strategic guidance. Monthly one-on-one sessions ensure you're always on the right track.",
                gradient: "from-sky-500 to-cyan-500",
                icon: (
                  <Image src="/images/vortex-icon.png" alt="VORTEX" width={24} height={24} className="rounded-full" />
                ),
              },
              {
                number: "02",
                title: "Zero Commission Promise",
                description:
                  "Ash's revolutionary model means you keep 100% of your earnings. VORTEX gets paid by platforms and brands based on your success, creating true partnership where everyone wins when you win.",
                gradient: "from-pink-500 to-rose-500",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                ),
              },
              {
                number: "03",
                title: "Exclusive Brand Network",
                description:
                  "Access Ash's personal relationships with premium brands built over years of trust and results. Get first priority on high-value campaigns that align with your content and values.",
                gradient: "from-sky-400 to-pink-400",
                icon: <Image src="/images/tiktok-logo.png" alt="TikTok" width={24} height={24} />,
              },
              {
                number: "04",
                title: "Proven Success Framework",
                description:
                  "Learn the exact strategies Ash used to build VORTEX and help 4,000+ creators succeed. From content optimization to audience psychology, get insider knowledge that actually works.",
                gradient: "from-cyan-500 to-sky-500",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div key={index} className="glass-effect-vortex p-8 rounded-3xl modern-card group">
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

      {/* Application Process */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            How to Join Ash's Network
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Submit Application",
                description: "Complete our creator application with your content samples and goals",
                icon: "📝",
              },
              {
                step: "02",
                title: "Ash's Review",
                description: "Ash personally reviews every application within 48 hours",
                icon: "👨‍💼",
              },
              {
                step: "03",
                title: "Strategy Call",
                description: "Qualified creators get a personal strategy session with Ash's team",
                icon: "📞",
              },
              {
                step: "04",
                title: "Welcome to VORTEX",
                description: "Start your journey with immediate access to all creator resources",
                icon: "🚀",
              },
            ].map((step, index) => (
              <div key={index} className="glass-effect-vortex p-6 rounded-2xl modern-card text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-2xl font-bold text-sky-400 mb-2">{step.step}</div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Creator FAQ
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "What's in it for me? Do you take a cut of my profits?",
                answer:
                  "You keep 100% of what you make on the platform. Ash built VORTEX on a revolutionary model where we get paid directly by TikTok and brand partners based on your success metrics. The bigger you grow and the better you perform, the more successful we become together.",
              },
              {
                question: "Can I leave VORTEX anytime or am I stuck in a contract?",
                answer:
                  "Ash believes in choice, not contracts. We offer a 14-day trial period with complete freedom to leave. After that, either party can end the partnership with 30 days' notice. We believe if we're not adding massive value to your creator journey, you should be free to explore other options.",
              },
              {
                question: "Do I get to actually work with Ash Davis personally?",
                answer:
                  "Ash maintains personal involvement through monthly strategy sessions, quarterly business reviews, and direct access via our creator portal. While day-to-day support comes from our expert team, Ash personally guides major strategic decisions and creator development.",
              },
              {
                question: "What if I don't live near your studios?",
                answer:
                  "VORTEX supports creators globally! While our flagship studios are in major cities, remote creators receive comprehensive digital support, virtual coaching with Ash's team, and full access to our brand partnership network. Location never limits your potential with us.",
              },
            ].map((faq, index) => (
              <div key={index} className="glass-effect-vortex rounded-2xl overflow-hidden modern-card">
                <div className="p-6 cursor-pointer hover:bg-sky-500/5 transition-colors duration-300">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <span className="text-sky-400 text-xl">+</span>
                  </div>
                  <p className="text-gray-300 mt-4 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect-vortex p-12 rounded-3xl modern-card">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Work with Ash?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the exclusive network of creators who work directly with industry visionary Ash Davis. Your success
              story starts with one application.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="vortex-button text-white px-8 py-4 rounded-full font-semibold border-none cursor-pointer flex items-center gap-3">
                <Image src="/images/vortex-icon.png" alt="VORTEX" width={24} height={24} className="rounded-full" />
                Apply Now
              </button>
              <button className="glass-effect-vortex border border-sky-400/50 text-sky-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-sky-400/10">
                Schedule Call with Ash
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
