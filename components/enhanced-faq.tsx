"use client"

export default function EnhancedFAQ() {
  const faqs = [
    {
      question: "What makes VORTEX different from other creator agencies?",
      answer:
        "VORTEX operates on a creator-first philosophy with zero commission fees. Unlike traditional agencies, we're paid directly by TikTok based on your success, creating a true partnership where your growth directly benefits us both. Plus, our proprietary LIVE streaming technology and exclusive brand network give you competitive advantages unavailable elsewhere.",
    },
    {
      question: "How quickly can I start earning with VORTEX?",
      answer:
        "Most creators see initial revenue within their first 2 weeks of joining our program. Our fast-track onboarding includes immediate access to our professional studios, dedicated coaching, and priority placement in brand campaigns. Your earning potential scales with your engagement and commitment to our proven strategies.",
    },
    {
      question: "Do I need to be located in a specific city to join?",
      answer:
        "While our flagship studios are located in major cities, VORTEX supports creators globally through our hybrid model. Remote creators receive comprehensive digital support, virtual coaching sessions, and access to our brand partnership network. Location is never a barrier to success in our community.",
    },
    {
      question: "What level of creative control do I maintain?",
      answer:
        "Complete creative autonomy is fundamental to our partnership. VORTEX provides strategic guidance and optimization suggestions, but all content decisions remain entirely yours. We believe authentic creativity drives the best results, so we never compromise your unique voice or style.",
    },
    {
      question: "How does the application process work?",
      answer:
        "Our streamlined application takes less than 5 minutes to complete. After submission, our team reviews your profile within 48 hours. Qualified candidates receive an invitation to a brief video interview, followed by immediate onboarding for approved creators. We prioritize speed without sacrificing quality in our selection process.",
    },
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Creator Success FAQ
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-effect-vortex rounded-2xl overflow-hidden modern-card">
              <div className="p-6 cursor-pointer hover:bg-sky-500/5 transition-colors duration-300">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-white pr-4 mb-4">{faq.question}</h3>
                  <span className="text-sky-400 text-xl flex-shrink-0">+</span>
                </div>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="vortex-button text-white px-8 py-4 rounded-full text-lg font-semibold border-none cursor-pointer flex items-center gap-3 mx-auto">
            <Image src="/images/vortex-icon.png" alt="VORTEX" width={24} height={24} className="rounded-full" />
            Start Your Creator Journey
          </button>
        </div>
      </div>
    </section>
  )
}
