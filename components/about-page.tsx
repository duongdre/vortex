"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function AboutPage() {
  const [currentCard, setCurrentCard] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % 4)
    }, 4000) // Change card every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % 4)
  }

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + 4) % 4)
  }
  return (
    <div className="relative">
      <div className="fixed inset-0 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 -z-10" />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInFromLeft">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
              Meet Ash Davis
            </h1>
            <h2 className="text-2xl lg:text-3xl text-sky-400 mb-6 font-semibold">Founder & CEO of VORTEX</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From a small-town dreamer to the visionary behind the world's most creator-friendly agency, Ash Davis has
              redefined what it means to support digital talent in the modern era.
            </p>
            <div className="flex gap-4">
              <button className="vortex-button text-white px-6 py-3 rounded-full font-semibold border-none cursor-pointer">
                Watch Ash's Story
              </button>
              <button className="glass-effect-vortex border border-sky-400/50 text-sky-400 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-sky-400/10">
                Connect on LinkedIn
              </button>
            </div>
          </div>

          <div className="animate-slideInFromRight flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Card Carousel Container */}
              <div className="overflow-hidden rounded-3xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentCard * 100}%)` }}
                >
                  {/* Card 1: Personal Profile */}
                  <div className="w-full flex-shrink-0">
                    <div className="w-full h-96 glass-effect-vortex rounded-3xl p-6 transform hover:scale-105 transition-transform duration-500">
                      <div className="w-full h-full bg-gradient-to-br from-sky-500/20 to-pink-500/20 rounded-2xl flex flex-col items-center justify-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-sky-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-4xl">👨‍💼</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Ash Davis</h3>
                        <p className="text-sky-400 mb-4">Founder & CEO</p>
                        <p className="text-gray-300 text-sm text-center px-4">
                          Visionary entrepreneur who revolutionized the creator economy
                        </p>
                        <div className="flex justify-center gap-2 mt-4">
                          <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse"></div>
                          <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-100"></div>
                          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: TikTok Journey */}
                  <div className="w-full flex-shrink-0">
                    <div className="w-full h-96 glass-effect-vortex rounded-3xl p-6 transform hover:scale-105 transition-transform duration-500">
                      <div className="w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl flex flex-col items-center justify-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Image src="/images/tiktok-logo.png" alt="TikTok" width={40} height={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">TikTok Pioneer</h3>
                        <p className="text-pink-400 mb-4">2018 - Present</p>
                        <p className="text-gray-300 text-sm text-center px-4">
                          Discovered TikTok's potential early and built the first creator-first agency
                        </p>
                        <div className="mt-4 text-center">
                          <div className="text-lg font-bold text-white">4,000+</div>
                          <div className="text-xs text-gray-400">Creators Managed</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Business Innovation */}
                  <div className="w-full flex-shrink-0">
                    <div className="w-full h-96 glass-effect-vortex rounded-3xl p-6 transform hover:scale-105 transition-transform duration-500">
                      <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex flex-col items-center justify-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-4xl">💡</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Zero Commission</h3>
                        <p className="text-cyan-400 mb-4">Revolutionary Model</p>
                        <p className="text-gray-300 text-sm text-center px-4">
                          Created the industry's first 0% commission model for creators
                        </p>
                        <div className="mt-4 text-center">
                          <div className="text-lg font-bold text-white">$50M+</div>
                          <div className="text-xs text-gray-400">Creator Earnings</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Industry Impact */}
                  <div className="w-full flex-shrink-0">
                    <div className="w-full h-96 glass-effect-vortex rounded-3xl p-6 transform hover:scale-105 transition-transform duration-500">
                      <div className="w-full h-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex flex-col items-center justify-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-4xl">🏆</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Industry Leader</h3>
                        <p className="text-yellow-400 mb-4">Award Winner</p>
                        <p className="text-gray-300 text-sm text-center px-4">
                          Named "Creator Economy Innovator of the Year" by TikTok
                        </p>
                        <div className="mt-4 text-center">
                          <div className="text-lg font-bold text-white">500M+</div>
                          <div className="text-xs text-gray-400">Total Views</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCard(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 border-none cursor-pointer ${
                      currentCard === index
                        ? "bg-gradient-to-r from-sky-400 to-pink-400"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevCard}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 glass-effect-vortex rounded-full flex items-center justify-center text-white hover:bg-sky-500/20 transition-colors duration-300 border-none cursor-pointer"
              >
                ←
              </button>
              <button
                onClick={nextCard}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 glass-effect-vortex rounded-full flex items-center justify-center text-white hover:bg-sky-500/20 transition-colors duration-300 border-none cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ash's Journey */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent">
            The Journey to VORTEX
          </h2>

          <div className="space-y-16">
            {[
              {
                year: "2018",
                title: "The Spark",
                description:
                  "Ash discovered TikTok as a college student and immediately saw its potential. While others saw dancing videos, Ash saw the future of digital marketing and creator economy.",
                icon: "💡",
                side: "left",
              },
              {
                year: "2019",
                title: "First Success",
                description:
                  "Started helping local businesses create TikTok content. Within months, Ash's strategies were generating millions of views and real revenue for small business owners.",
                icon: "🚀",
                side: "right",
              },
              {
                year: "2020",
                title: "The Breakthrough",
                description:
                  "Launched the first iteration of VORTEX with just 10 creators. The zero-commission model was revolutionary - creators kept 100% of their earnings while Ash built sustainable partnerships.",
                icon: "⚡",
                side: "left",
              },
              {
                year: "2021",
                title: "Scaling Success",
                description:
                  "VORTEX grew to 500+ creators. Ash's focus on genuine relationships over quick profits attracted top talent and premium brand partnerships.",
                icon: "📈",
                side: "right",
              },
              {
                year: "2022",
                title: "Industry Recognition",
                description:
                  "Named 'Creator Economy Innovator of the Year' by TikTok. VORTEX became the go-to agency for creators who wanted authentic partnerships and real growth.",
                icon: "🏆",
                side: "left",
              },
              {
                year: "2024",
                title: "The VORTEX Empire",
                description:
                  "Today, Ash leads a community of 4,000+ creators, has facilitated over $50M in creator earnings, and continues to innovate in the creator economy space.",
                icon: "👑",
                side: "right",
              },
            ].map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 ${milestone.side === "right" ? "flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <div
                    className={`glass-effect-vortex p-8 rounded-3xl modern-card ${milestone.side === "right" ? "text-right" : ""}`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">{milestone.icon}</div>
                      <div>
                        <div className="text-2xl font-bold text-sky-400">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-gradient-to-r from-sky-500 to-pink-500 rounded-full flex-shrink-0"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ash's Philosophy */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Ash's Philosophy
          </h2>

          <div className="glass-effect-vortex p-12 rounded-3xl modern-card">
            <div className="text-6xl mb-8">💭</div>
            <blockquote className="text-2xl lg:text-3xl text-white font-light leading-relaxed mb-8 italic">
              "Success isn't about taking from creators—it's about giving them everything they need to succeed. When
              creators win, everyone wins."
            </blockquote>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Ash believes that the creator economy should be built on trust, transparency, and genuine partnership.
                That's why VORTEX operates on a zero-commission model—creators keep 100% of what they earn.
              </p>
              <p>
                "I've seen too many talented creators get burned by agencies that promise the world but deliver nothing.
                VORTEX exists to be different—to be the agency I wish existed when I was starting out."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Side */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent">
            Beyond Business
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎮",
                title: "Gaming Enthusiast",
                description:
                  "When not building VORTEX, Ash loves exploring virtual worlds and understanding how gaming communities create authentic connections.",
              },
              {
                icon: "📚",
                title: "Continuous Learner",
                description:
                  "Reads 50+ books per year on business, psychology, and technology. Believes that learning never stops, especially in the fast-moving creator economy.",
              },
              {
                icon: "🌱",
                title: "Mentor & Teacher",
                description:
                  "Regularly speaks at universities and conferences, sharing insights about entrepreneurship and the creator economy with the next generation.",
              },
              {
                icon: "🏃‍♂️",
                title: "Fitness Advocate",
                description:
                  "Starts every day with a 5AM workout. Believes that physical health directly impacts mental clarity and business performance.",
              },
              {
                icon: "🎵",
                title: "Music Producer",
                description:
                  "Creates electronic music in spare time. Understanding audio production has given unique insights into TikTok's algorithm and viral content.",
              },
              {
                icon: "🌍",
                title: "Global Thinker",
                description:
                  "Has traveled to 30+ countries, studying how different cultures approach social media and digital creativity.",
              },
            ].map((interest, index) => (
              <div key={index} className="glass-effect-vortex p-6 rounded-2xl modern-card">
                <div className="text-4xl mb-4">{interest.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{interest.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
