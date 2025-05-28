"use client"

import Image from "next/image"
import AnimatedCounter from "./animated-counter"

export default function TestimonialsPage() {
  return (
    <div className="relative">
      <div className="fixed inset-0 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 -z-10" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
            Creator Success Stories
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Real creators, real results. See how Ash Davis and VORTEX have transformed lives and careers across the
            globe.
          </p>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Sarah Chen",
                handle: "@sarahcreates",
                followers: "2.3M",
                earnings: "$180K",
                story: "From struggling art student to TikTok sensation",
                quote:
                  "Ash didn't just help me grow my following—he helped me build a sustainable business around my passion for art.",
                image: "🎨",
                category: "Art & Design",
              },
              {
                name: "Marcus Johnson",
                handle: "@fitnesswithmarc",
                followers: "1.8M",
                earnings: "$220K",
                story: "Personal trainer to fitness empire builder",
                quote:
                  "VORTEX's zero-commission model meant I could reinvest everything back into my content and equipment. Game changer!",
                image: "💪",
                category: "Fitness",
              },
              {
                name: "Luna Rodriguez",
                handle: "@cookingwithluna",
                followers: "3.1M",
                earnings: "$350K",
                story: "Home cook to culinary influencer",
                quote:
                  "Ash saw potential in my cooking videos when I only had 1,000 followers. Now I have my own cookbook deal!",
                image: "👩‍🍳",
                category: "Food & Cooking",
              },
            ].map((creator, index) => (
              <div key={index} className="glass-effect-vortex p-8 rounded-3xl modern-card">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-sky-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{creator.image}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{creator.name}</h3>
                  <p className="text-sky-400">{creator.handle}</p>
                  <p className="text-sm text-gray-400">{creator.category}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">{creator.followers}</div>
                    <div className="text-sm text-gray-400">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sky-400">{creator.earnings}</div>
                    <div className="text-sm text-gray-400">Annual Earnings</div>
                  </div>
                </div>

                <p className="text-gray-300 italic mb-4 text-center">"{creator.quote}"</p>
                <p className="text-sm text-gray-400 text-center">{creator.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent">
            Hear From Our Creators
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "From Zero to Hero",
                creator: "Alex Thompson",
                views: "2.1M views",
                thumbnail: "📱",
              },
              {
                title: "My VORTEX Journey",
                creator: "Emma Wilson",
                views: "1.8M views",
                thumbnail: "🌟",
              },
              {
                title: "Why I Chose VORTEX",
                creator: "David Kim",
                views: "3.2M views",
                thumbnail: "🎯",
              },
            ].map((video, index) => (
              <div
                key={index}
                className="glass-effect-vortex rounded-2xl overflow-hidden modern-card group cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-sky-500/20 to-pink-500/20 flex items-center justify-center relative">
                  <span className="text-6xl">{video.thumbnail}</span>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">▶️</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{video.title}</h3>
                  <p className="text-sky-400 mb-2">{video.creator}</p>
                  <p className="text-sm text-gray-400">{video.views}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            The Numbers Don't Lie
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "Average Growth",
                value: 340,
                description: "Follower increase in first 6 months",
                icon: "📈",
                suffix: "%",
              },
              {
                metric: "Creator Retention",
                value: 94,
                description: "Creators stay with VORTEX long-term",
                icon: "🤝",
                suffix: "%",
              },
              {
                metric: "Brand Partnerships",
                value: 2500,
                description: "Successful collaborations facilitated",
                icon: "🎯",
                suffix: "+",
              },
              {
                metric: "Average Earnings",
                value: 85,
                description: "Annual creator income increase",
                icon: "💰",
                prefix: "$",
                suffix: "K",
              },
            ].map((stat, index) => (
              <div key={index} className="glass-effect-vortex p-8 rounded-3xl modern-card text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    duration={5000}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix || ""}
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{stat.metric}</h3>
                <p className="text-sm text-gray-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent">
            Success Across All Niches
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { category: "Gaming", icon: "🎮", count: 450 },
              { category: "Beauty", icon: "💄", count: 380 },
              { category: "Fitness", icon: "💪", count: 320 },
              { category: "Food", icon: "🍳", count: 290 },
              { category: "Comedy", icon: "😂", count: 410 },
              { category: "Education", icon: "📚", count: 180 },
              { category: "Music", icon: "🎵", count: 220 },
              { category: "Fashion", icon: "👗", count: 350 },
              { category: "Tech", icon: "💻", count: 160 },
              { category: "Travel", icon: "✈️", count: 140 },
              { category: "Art", icon: "🎨", count: 200 },
              { category: "Lifestyle", icon: "🌟", count: 380 },
            ].map((niche, index) => (
              <div key={index} className="glass-effect-vortex p-6 rounded-2xl modern-card text-center">
                <div className="text-3xl mb-3">{niche.icon}</div>
                <h3 className="text-sm font-bold text-white mb-1">{niche.category}</h3>
                <p className="text-xs text-sky-400">
                  <AnimatedCounter end={niche.count} duration={5000} suffix="+" /> creators
                </p>
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
              Your Success Story Starts Here
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators who've transformed their passion into profit with Ash Davis and VORTEX.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="vortex-button text-white px-8 py-4 rounded-full font-semibold border-none cursor-pointer flex items-center gap-3">
                <Image src="/images/vortex-icon.png" alt="VORTEX" width={24} height={24} className="rounded-full" />
                Apply Now
              </button>
              <button className="glass-effect-vortex border border-sky-400/50 text-sky-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-sky-400/10">
                Schedule a Call with Ash
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
