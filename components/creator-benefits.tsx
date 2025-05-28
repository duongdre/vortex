"use client"

export default function CreatorBenefits() {
  const benefits = [
    {
      icon: "💰",
      title: "Zero Commission Structure",
      description: "Keep 100% of your earnings while we get paid directly by TikTok based on your success",
    },
    {
      icon: "🎯",
      title: "Priority Brand Access",
      description: "First access to premium brand partnerships and exclusive campaign opportunities",
    },
    {
      icon: "📈",
      title: "Advanced Analytics Dashboard",
      description: "Real-time performance insights and optimization recommendations powered by AI",
    },
    {
      icon: "🎬",
      title: "Professional Studio Access",
      description: "State-of-the-art filming facilities and equipment in major metropolitan areas",
    },
    {
      icon: "👥",
      title: "Dedicated Success Manager",
      description: "Personal coaching and strategic guidance from industry experts",
    },
    {
      icon: "🚀",
      title: "Viral Content Framework",
      description: "Proven strategies and trending format access that consistently drive engagement",
    },
    {
      icon: "🛡️",
      title: "Legal & Contract Support",
      description: "Professional contract review and legal protection for all brand partnerships",
    },
    {
      icon: "🌟",
      title: "Creator Community Network",
      description: "Connect with 4,000+ successful creators for collaboration and knowledge sharing",
    },
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent">
          Exclusive Creator Advantages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass-effect-vortex p-6 rounded-2xl modern-card group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass-effect-vortex p-8 rounded-3xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Creative Career?</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of creators who've already discovered the VORTEX advantage
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="vortex-button text-white px-6 py-3 rounded-full font-semibold border-none cursor-pointer">
                Apply Now
              </button>
              <button className="glass-effect-vortex border border-sky-400/50 text-sky-400 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-sky-400/10">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
