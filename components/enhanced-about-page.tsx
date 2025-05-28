"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import AnimatedCounter from "./animated-counter"

export default function EnhancedAboutPage() {
  const [currentCard, setCurrentCard] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const totalCards = 4

  // Auto-advance functionality with 3-second intervals
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % totalCards)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, totalCards])

  // Smooth navigation functions
  const nextCard = useCallback(() => {
    setIsAutoPlaying(false)
    setCurrentCard((prev) => (prev + 1) % totalCards)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }, [totalCards])

  const prevCard = useCallback(() => {
    setIsAutoPlaying(false)
    setCurrentCard((prev) => (prev - 1 + totalCards) % totalCards)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }, [totalCards])

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

      {/* Hero Section with Personal Story */}
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
              <span className="text-sky-400 font-semibold text-lg">How It All Began</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
              Meet Ash Davis
            </h1>
            <h2 className="text-2xl lg:text-3xl text-sky-400 mb-6 font-semibold">
              The College Student Who Changed Everything
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From a small dorm room to managing 4,000+ creators worldwide, Ash Davis didn't just build a business—he
              started a revolution that put creators first and changed the industry forever.
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
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent animate-pulse" />
                          </div>

                          <div className="relative z-10 text-center">
                            <div
                              className={`w-24 h-24 bg-gradient-to-r ${card.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                            >
                              {card.icon ? <span className="text-4xl">{card.icon}</span> : card.iconComponent}
                            </div>

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

                            <p className="text-gray-300 text-sm text-center px-4 mb-4 leading-relaxed">
                              {card.description}
                            </p>

                            {card.metric && (
                              <div className="mt-4 text-center">
                                <div className="text-lg font-bold text-white">
                                  <AnimatedCounter
                                    end={Number.parseInt(card.metric.replace(/[^0-9]/g, ""))}
                                    suffix="+"
                                  />
                                </div>
                                <div className="text-xs text-gray-400">{card.metricLabel}</div>
                              </div>
                            )}

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

              <div className="absolute top-4 right-4">
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-gray-500"
                  }`}
                />
              </div>

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

      {/* Personal Story Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-100 to-sky-100 flex items-center justify-center">
              <div className="text-center">
                {/* Cute Chibi TikTok Live Stream */}
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="w-64 h-96 bg-black rounded-[2.5rem] p-4 shadow-2xl">
                    {/* Screen */}
                    <div className="w-full h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-[2rem] relative overflow-hidden">
                      {/* Live Badge */}
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        LIVE
                      </div>

                      {/* Viewer Count */}
                      <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                        👁️ 1.2K
                      </div>

                      {/* Chibi Character */}
                      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                        <div className="text-6xl animate-bounce">🧑‍💻</div>
                      </div>

                      {/* Chat Messages */}
                      <div className="absolute bottom-4 left-2 right-2 space-y-1">
                        <div className="bg-black/30 text-white text-xs px-2 py-1 rounded-lg">💖 Amazing content!</div>
                        <div className="bg-black/30 text-white text-xs px-2 py-1 rounded-lg">🔥 Love this stream!</div>
                      </div>

                      {/* Floating Hearts */}
                      <div className="absolute right-2 bottom-16 space-y-2">
                        <div className="text-red-500 animate-bounce">❤️</div>
                        <div className="text-pink-500 animate-bounce delay-100">💕</div>
                        <div className="text-red-400 animate-bounce delay-200">💖</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-6 right-6 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-vortexPulse">
              LIVE
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/images/tiktok-logo.png" alt="TikTok" width={30} height={30} />
              <span className="text-sky-400 font-semibold">The Journey</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">From College Dorm to Creator Empire</h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">My journey began during college,</strong> when I was working part-time as
                a social media manager for local businesses. I started going live on TikTok just for fun—as a way to
                unwind and connect with others. At the time, I had no idea how TikTok worked, but I was fascinated by
                the authentic connections people were making through short-form content.
              </p>

              <p>
                <strong className="text-sky-400">
                  What started as casual experimentation quickly became an obsession.
                </strong>{" "}
                I spent countless hours studying the platform, understanding what made content go viral, and most
                importantly, what made creators successful. I noticed a disturbing pattern: talented creators were being
                exploited by agencies that promised everything but delivered nothing.
              </p>

              <p>
                <strong className="text-pink-400">
                  That's when I realized my true calling wasn't just creating content—it was empowering other creators.
                </strong>{" "}
                I started helping fellow students optimize their TikTok strategies, and within months, I was seeing
                incredible results. My friends were gaining thousands of followers and actually making money from their
                passion projects.
              </p>

              <p>
                <strong className="text-cyan-400">
                  The breakthrough moment came when I developed the zero-commission model.
                </strong>{" "}
                Instead of taking a cut from creators' earnings like traditional agencies, I found a way to get paid
                directly by platforms and brands based on creator success metrics. This meant creators could keep 100%
                of their earnings while still getting professional support and guidance.
              </p>

              <p>
                <strong className="text-white">From that small dorm room experiment, VORTEX was born.</strong> What
                started as helping a few college friends has now grown into a global network of over 4,000 creators
                who've collectively earned more than $50 million. But the mission remains the same: put creators first,
                always.
              </p>
            </div>

            <button className="vortex-button text-white px-8 py-4 rounded-full font-semibold border-none cursor-pointer mt-8">
              Apply Here
            </button>
          </div>
        </div>
      </section>

      {/* Goals & Achievement Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Identify Your Goals & Achieve Them</h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              <strong className="text-sky-400">Every creator's journey is unique,</strong> and that's exactly how it
              should be. At VORTEX, we don't believe in one-size-fits-all solutions. Instead, we work closely with each
              creator to understand their individual goals, strengths, and vision for success.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you're looking to build a personal brand, launch a product line, or simply turn your passion into
              a sustainable income stream, our team of experts will develop a customized strategy tailored specifically
              to your needs. We provide the tools, resources, and guidance you need to transform your creative vision
              into measurable results.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              <strong className="text-pink-400">Our proven framework has helped thousands of creators</strong> achieve
              their dreams while maintaining complete creative control. From content strategy and audience development
              to brand partnerships and revenue optimization, we're with you every step of the way.
            </p>

            <button className="vortex-pink-button text-white px-8 py-4 rounded-full font-semibold border-none cursor-pointer">
              Apply to Join
            </button>
          </div>

          <div className="space-y-6">
            {/* Welcome to VORTEX Video */}
            <div className="relative w-full h-80 rounded-3xl overflow-hidden group cursor-pointer shadow-xl">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/placeholder.svg?height=320&width=400&text=Welcome+to+VORTEX"
              >
                <source src="/videos/welcome-to-vortex.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                  <h3 className="text-white font-bold">Welcome to VORTEX</h3>
                  <p className="text-gray-300 text-sm">Discover the VORTEX difference</p>
                </div>
              </div>
            </div>

            {/* Cute Chibi TikTok Live Success */}
            <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
              <div className="text-center">
                {/* Success Scene */}
                <div className="relative">
                  {/* Multiple Phones showing success */}
                  <div className="flex gap-4 items-center justify-center">
                    {/* Phone 1 */}
                    <div className="w-20 h-32 bg-black rounded-xl p-1 transform rotate-12">
                      <div className="w-full h-full bg-gradient-to-b from-green-400 to-emerald-400 rounded-lg flex flex-col items-center justify-center">
                        <div className="text-xs text-white font-bold">LIVE</div>
                        <div className="text-lg">😊</div>
                        <div className="text-xs text-white">5.2K</div>
                      </div>
                    </div>

                    {/* Phone 2 - Center */}
                    <div className="w-24 h-36 bg-black rounded-xl p-1">
                      <div className="w-full h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-lg flex flex-col items-center justify-center">
                        <div className="text-xs text-white font-bold bg-red-500 px-2 rounded">LIVE</div>
                        <div className="text-2xl animate-bounce">🎉</div>
                        <div className="text-xs text-white">12.8K</div>
                        <div className="flex gap-1 mt-1">
                          <span className="text-xs">💰</span>
                          <span className="text-xs">🎯</span>
                          <span className="text-xs">🚀</span>
                        </div>
                      </div>
                    </div>

                    {/* Phone 3 */}
                    <div className="w-20 h-32 bg-black rounded-xl p-1 transform -rotate-12">
                      <div className="w-full h-full bg-gradient-to-b from-blue-400 to-cyan-400 rounded-lg flex flex-col items-center justify-center">
                        <div className="text-xs text-white font-bold">LIVE</div>
                        <div className="text-lg">🌟</div>
                        <div className="text-xs text-white">8.7K</div>
                      </div>
                    </div>
                  </div>

                  {/* Success Elements */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="text-2xl animate-bounce">🎊</div>
                  </div>

                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">SUCCESS!</div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold">Living the Creator Life</p>
                <p className="text-gray-300 text-sm">Building dreams, one creator at a time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Application Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect-vortex p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-8">
              <Image src="/images/tiktok-logo.png" alt="TikTok" width={40} height={40} />
              <h2 className="text-3xl font-bold text-white">Eligibility Check</h2>
            </div>

            <p className="text-gray-300 mb-8">To be eligible to join, you must meet the following criteria:</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                <span className="text-gray-300">Be 18 or over</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                <span className="text-gray-300">Live in an eligible region (contact us for details)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                <span className="text-gray-300">Willing to follow community guidelines</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                <span className="text-gray-300">Committed to consistent content creation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                <span className="text-gray-300">Have access to reliable internet and recording equipment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                <span className="text-gray-300">Passionate about building authentic audience connections</span>
              </div>
            </div>

            <div className="text-center">
              <button className="vortex-button text-white px-8 py-4 rounded-full font-semibold border-none cursor-pointer">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the existing sections... */}
      {/* Ash's Journey Timeline */}
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
