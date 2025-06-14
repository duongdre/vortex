"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

export default function AboutPage() {
  const [currentCard, setCurrentCard] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const totalCards = 4

  // Auto-advance functionality with 2-second intervals
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % totalCards)
    }, 2000) // Changed to 2 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, totalCards])

  // Smooth navigation functions
  const nextCard = useCallback(() => {
    setIsAutoPlaying(false)
    setCurrentCard((prev) => (prev + 1) % totalCards)
    // Resume auto-play after 5 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }, [totalCards])

  const prevCard = useCallback(() => {
    setIsAutoPlaying(false)
    setCurrentCard((prev) => (prev - 1 + totalCards) % totalCards)
    // Resume auto-play after 5 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }, [totalCards])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const cardData = [
    {
      id: 0,
      title: "Ash Davis",
      subtitle: "Founder & CEO",
      description: "Visionary entrepreneur who revolutionized the creator economy",
      icon: "👨‍💼",
      gradient: "from-sky-500 to-pink-500",
      bgGradient: "from-sky-500/20 to-pink-500/20",
      metric: null,
      metricLabel: null,
    },
    {
      id: 1,
      title: "TikTok Pioneer",
      subtitle: "2018 - Present",
      description: "Discovered TikTok's potential early and built the first creator-first agency",
      icon: null,
      iconComponent: <Image src="/images/tiktok-logo.png" alt="TikTok" width={40} height={40} />,
      gradient: "from-pink-500 to-purple-500",
      bgGradient: "from-pink-500/20 to-purple-500/20",
      metric: "4,000+",
      metricLabel: "Creators Managed",
    },
    {
      id: 2,
      title: "Zero Commission",
      subtitle: "Revolutionary Model",
      description: "Created the industry's first 0% commission model for creators",
      icon: "💡",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-500/20 to-blue-500/20",
      metric: "$50M+",
      metricLabel: "Creator Earnings",
    },
    {
      id: 3,
      title: "Industry Leader",
      subtitle: "Award Winner",
      description: "Named 'Creator Economy Innovator of the Year' by TikTok",
      icon: "🏆",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
      metric: "500M+",
      metricLabel: "Total Views",
    },
  ]

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
              <div
                className="relative overflow-hidden rounded-3xl"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Cards Container */}
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${currentCard * 100}%)`,
                    willChange: "transform",
                  }}
                >
                  {cardData.map((card) => (
                    <div key={card.id} className="w-full flex-shrink-0">
                      <div className="w-full h-96 glass-effect-vortex rounded-3xl p-6 transform hover:scale-105 transition-transform duration-300">
                        <div
                          className={`w-full h-full bg-gradient-to-br ${card.bgGradient} rounded-2xl flex flex-col items-center justify-center relative overflow-hidden`}
                        >
                          {/* Background Animation */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent animate-pulse" />
                          </div>

                          {/* Content */}
                          <div className="relative z-10 text-center">
                            {/* Icon */}
                            <div
                              className={`w-24 h-24 bg-gradient-to-r ${card.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                            >
                              {card.icon ? <span className="text-4xl">{card.icon}</span> : card.iconComponent}
                            </div>

                            {/* Title and Subtitle */}
                            <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                            <p
                              className={`mb-4 font-medium ${
                                card.id === 0
                                  ? "text-sky-400"
                                  : card.id === 1
                                    ? "text-pink-400"
                                    : card.id === 2
                                      ? "text-cyan-400"
                                      : "text-yellow-400"
                              }`}
                            >
                              {card.subtitle}
                            </p>

                            {/* Description */}
                            <p className="text-gray-300 text-sm text-center px-4 mb-4 leading-relaxed">
                              {card.description}
                            </p>

                            {/* Metric */}
                            {card.metric && (
                              <div className="mt-4 text-center">
                                <div className="text-lg font-bold text-white">{card.metric}</div>
                                <div className="text-xs text-gray-400">{card.metricLabel}</div>
                              </div>
                            )}

                            {/* Animated Dots for first card */}
                            {card.id === 0 && (
                              <div className="flex justify-center gap-2 mt-4">
                                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse"></div>
                                <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-100"></div>
                                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevCard}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-12 h-12 glass-effect-vortex rounded-full flex items-center justify-center text-white hover:bg-sky-500/20 transition-all duration-300 border-none cursor-pointer shadow-lg hover:scale-110"
                aria-label="Previous card"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button
                onClick={nextCard}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 glass-effect-vortex rounded-full flex items-center justify-center text-white hover:bg-sky-500/20 transition-all duration-300 border-none cursor-pointer shadow-lg hover:scale-110"
                aria-label="Next card"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                </svg>
              </button>

              {/* Auto-play Indicator */}
              <div className="absolute top-4 right-4">
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-gray-500"
                  }`}
                />
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-2 left-6 right-6">
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-400 to-pink-400 rounded-full transition-all duration-700 ease-linear"
                    style={{
                      width: `${((currentCard + 1) / totalCards) * 100}%`,
                    }}
                  />
                </div>
              </div>
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
                    <div className={`flex items-center gap-4 mb-4 ${milestone.side === "right" ? "justify-end" : ""}`}>
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
