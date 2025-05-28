"use client"

export default function StoryPage() {
  return (
    <div className="relative">
      <div className="fixed inset-0 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 -z-10" />

      {/* Hero Section */}
      <section className="pt-32 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
            The VORTEX Story
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            How one person's vision to fix the broken creator economy became a movement that changed thousands of lives.
          </p>
        </div>
      </section>

      {/* Story Content */}
      <div className="max-w-4xl mx-auto px-4 pb-24 space-y-16">
        {/* Chapter 1 */}
        <section className="glass-effect-vortex p-8 rounded-3xl modern-card">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent">
            Chapter 1: The Problem
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              In 2018, Ash Davis was just another college student scrolling through TikTok. But while everyone else saw
              entertainment, Ash saw opportunity—and more importantly, saw a problem.
            </p>
            <p className="text-center text-xl font-semibold text-sky-400">
              "Creators were getting screwed, and everyone just accepted it as normal." 💔
            </p>
            <p>
              Traditional talent agencies were taking 20-50% commissions. Creators were locked into contracts that
              favored agencies. Promises were broken. Dreams were crushed. The very people creating the content that
              drove billions in revenue were seeing the smallest slice of the pie.
            </p>
            <p>
              Ash watched talented creators burn out, give up, or worse—get trapped in exploitative contracts. Something
              had to change.
            </p>
          </div>
        </section>

        {/* Chapter 2 */}
        <section className="glass-effect-vortex p-8 rounded-3xl modern-card">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Chapter 2: The Experiment
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Instead of complaining, Ash decided to experiment. What if there was a different way? What if an agency
              could succeed by putting creators first?
            </p>
            <div className="bg-black/30 p-6 rounded-2xl border-l-4 border-sky-400">
              <p className="italic">
                "I started with a simple question: What would I want if I were a creator? The answer was obvious—keep my
                earnings, maintain creative control, and have genuine support."
              </p>
              <p className="text-right text-sky-400 mt-2">— Ash Davis</p>
            </div>
            <p>
              The first VORTEX creator was actually Ash's roommate, who was struggling to monetize his gaming content.
              Ash helped him optimize his content strategy, connected him with a gaming peripheral brand, and took...
              zero commission.
            </p>
            <p>Within three months, the roommate's income had tripled. Word spread quickly.</p>
          </div>
        </section>

        {/* Chapter 3 */}
        <section className="glass-effect-vortex p-8 rounded-3xl modern-card">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent">
            Chapter 3: The Breakthrough
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              By 2020, VORTEX had 50 creators. But Ash faced a critical decision: scale the traditional way (start
              taking commissions) or find a revolutionary approach.
            </p>
            <p>
              The breakthrough came when Ash realized that TikTok and brands would pay agencies based on creator success
              metrics—not commissions. This meant VORTEX could be profitable while creators kept 100% of their direct
              earnings.
            </p>
            <div className="text-center space-y-2">
              <p className="text-2xl font-bold text-white">The VORTEX Model Was Born:</p>
              <p className="text-sky-400 font-bold">✅ Creators keep 100% of their earnings</p>
              <p className="text-pink-400 font-bold">✅ VORTEX gets paid by platforms for creator success</p>
              <p className="text-cyan-400 font-bold">✅ Everyone wins when creators win</p>
            </div>
            <p>This wasn't just a business model—it was a philosophy. Success should be shared, not hoarded.</p>
          </div>
        </section>

        {/* Chapter 4 */}
        <section className="glass-effect-vortex p-8 rounded-3xl modern-card">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Chapter 4: The Movement
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Word about VORTEX spread like wildfire. Creators who had been burned by other agencies found hope. New
              creators found a partner who believed in their potential.
            </p>
            <p>
              But growth brought challenges. How do you maintain personal relationships with thousands of creators? How
              do you scale genuine care?
            </p>
            <p>
              Ash's solution was revolutionary: instead of hiring traditional account managers, VORTEX hired former
              creators who understood the journey. Every VORTEX team member had walked in their creators' shoes.
            </p>
            <div className="bg-gradient-to-r from-sky-500/20 to-pink-500/20 p-6 rounded-2xl">
              <p className="text-center text-xl font-semibold text-white">
                "We don't manage creators. We empower them." 🚀
              </p>
            </div>
          </div>
        </section>

        {/* Chapter 5 */}
        <section className="glass-effect-vortex p-8 rounded-3xl modern-card">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent">
            Chapter 5: The Impact
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Today, VORTEX represents over 4,000 creators across every imaginable niche. These aren't just
              numbers—they're lives changed, dreams realized, and families supported.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/30 p-4 rounded-xl">
                <h4 className="text-sky-400 font-bold mb-2">Sarah's Story</h4>
                <p className="text-sm">Art student → $200K/year creator → Published author</p>
              </div>
              <div className="bg-black/30 p-4 rounded-xl">
                <h4 className="text-pink-400 font-bold mb-2">Marcus's Journey</h4>
                <p className="text-sm">Unemployed trainer → Fitness influencer → Gym owner</p>
              </div>
              <div className="bg-black/30 p-4 rounded-xl">
                <h4 className="text-cyan-400 font-bold mb-2">Luna's Transformation</h4>
                <p className="text-sm">Home cook → Food creator → Cookbook deal</p>
              </div>
              <div className="bg-black/30 p-4 rounded-xl">
                <h4 className="text-sky-400 font-bold mb-2">David's Success</h4>
                <p className="text-sm">Tech student → Edu-creator → Course business</p>
              </div>
            </div>
            <p>
              But the real impact goes beyond individual success. VORTEX has proven that ethical business practices
              aren't just morally right—they're more profitable in the long run.
            </p>
          </div>
        </section>

        {/* Chapter 6 */}
        <section className="glass-effect-vortex p-8 rounded-3xl modern-card">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Chapter 6: The Future
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Ash's vision extends far beyond TikTok. VORTEX is expanding into YouTube, Instagram, and emerging
              platforms. The goal isn't just to grow—it's to set a new standard for how creator agencies should operate.
            </p>
            <p>
              "We're not just building a business," Ash says. "We're building a movement that puts creators first,
              always and forever."
            </p>
            <div className="text-center space-y-4">
              <p className="text-2xl font-bold text-white">The VORTEX Promise:</p>
              <p className="text-lg text-sky-400">🌟 Creators will always keep 100% of their earnings</p>
              <p className="text-lg text-pink-400">🤝 Partnerships will always be transparent and fair</p>
              <p className="text-lg text-cyan-400">🚀 Success will always be shared, never hoarded</p>
            </div>
            <p>
              The story of VORTEX is still being written. Every new creator who joins adds another chapter. Every
              success story proves that there's a better way to do business in the creator economy.
            </p>
          </div>
        </section>

        {/* Epilogue */}
        <section className="glass-effect-vortex p-8 rounded-3xl modern-card text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent">
            Your Chapter Starts Now
          </h2>
          <div className="space-y-6">
            <p className="text-xl text-gray-300">
              This isn't just Ash's story or VORTEX's story. It's the story of everyone who believes that creators
              deserve better, that success should be shared, and that the future of digital content should be built on
              trust and transparency.
            </p>
            <p className="text-lg text-sky-400 font-semibold">What will your chapter look like?</p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <button className="vortex-button text-white px-8 py-4 rounded-full font-semibold border-none cursor-pointer">
                Start Your Story
              </button>
              <button className="glass-effect-vortex border border-sky-400/50 text-sky-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-sky-400/10">
                Meet Ash Davis
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
