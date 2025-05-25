"use client"

export default function StoryPage() {
  return (
    <div className="relative">
      {/* TikTok Background */}
      <div className="fixed inset-0 bg-black -z-10" />
      <div className="fixed inset-0 tiktok-bg-pattern -z-10" />

      {/* Floating Elements */}
      <div className="fixed top-32 left-20 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-xl animate-gentleFloat -z-10" />
      <div
        className="fixed bottom-40 right-32 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-full blur-xl animate-gentleFloat -z-10"
        style={{ animationDelay: "3s" }}
      />

      {/* Hero Images */}
      <section className="pt-32 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-64 glass-effect rounded-3xl modern-card bg-gradient-to-br from-pink-500/20 to-cyan-500/20 flex items-center justify-center"
            >
              <span className="text-4xl">📸</span>
            </div>
          ))}
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 pb-24 space-y-16">
        {/* Our Story */}
        <section className="glass-effect p-8 rounded-3xl modern-card">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Our Story
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              We're Belle and Chufan, founders of NBCN - and we're on a mission to disrupt the status quo. As women of
              color, we've had to break through barrier after barrier in this industry. Mansplaining clients who ignored
              our expertise. Sexist investors who doubted our ambition. Close-minded networks resistant to fresh
              perspectives.
            </p>
            <p className="text-center text-xl font-semibold text-pink-400">
              Well, we're calling BS on the old way of doing things. ⚡
            </p>
          </div>
        </section>

        {/* Brand Introduction */}
        <section className="glass-effect p-8 rounded-3xl modern-card">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            INTRODUCING...
          </h2>
          <div className="text-center mb-8">
            <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              ⚡ New Beginnings Creator Network
            </div>
          </div>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              A bold, <span className="text-pink-400 font-semibold">vibrant</span> community where ALL creators can
              thrive on their terms. Picture an agency where your age, gender, skin color have ZERO impact on
              opportunities. A place where fresh voices are amplified, not silenced. Where investing in each other takes
              us higher than playing it safe ever could.
            </p>
            <div className="text-center space-y-2">
              <p>
                This is our <span className="text-orange-400 font-bold">vision</span>.
              </p>
              <p>
                Our <span className="text-pink-400 font-bold">passion</span>.
              </p>
              <p>
                Our <span className="text-cyan-400 font-bold">rebellion</span> against the notion that being 'different'
                means being less. 🔥
              </p>
            </div>
          </div>
        </section>

        {/* Our Rules */}
        <section className="glass-effect p-8 rounded-3xl modern-card">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            At New Beginnings Creator Network, we're writing our own rules:
          </h2>
          <div className="space-y-4">
            {[
              "Your talent speaks louder than any label.",
              "Progress demands welcoming new views.",
              "Sisterhood is our superpower.",
            ].map((rule, index) => (
              <div key={index} className="glass-effect p-6 rounded-2xl border-l-4 border-pink-400 modern-card">
                <p className="text-gray-300">
                  <span className="text-pink-400 font-bold">{index + 1}.</span> {rule}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Message */}
        <section className="glass-effect p-8 rounded-3xl modern-card text-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-3xl font-bold text-white">We won't stay quiet.</p>
              <p className="text-3xl font-bold text-white">We won't dim our light.</p>
              <p className="text-3xl font-bold text-white">
                We won't <span className="text-pink-400">STOP</span> until real change comes.
              </p>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>Who's with us? If you're a creator ready to show your shine, join our squad!</p>
              <p>The future is bright, bold, and beautiful. Let's seize it together. 🔥⚡</p>
            </div>

            <p className="italic text-gray-400">Founders, New Beginnings Creator Network</p>
          </div>
        </section>
      </div>

      {/* Contact Button */}
      <button className="fixed bottom-8 right-8 tiktok-button text-white p-4 rounded-full shadow-2xl border-none cursor-pointer z-50 animate-tiktokPulse">
        Contact Us
      </button>
    </div>
  )
}
