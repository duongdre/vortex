"use client"

import { useState } from "react"

export default function EnhancedFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "What makes Ash Davis and VORTEX different from other creator agencies?",
      answer:
        "Ash built VORTEX on a revolutionary principle: creators keep 100% of their earnings. Unlike traditional agencies that take 20-50% commissions, VORTEX is paid directly by platforms based on creator success. This means we only win when you win. Plus, Ash's personal involvement in creator development and our transparent partnership model sets us apart from faceless corporate agencies.",
    },
    {
      question: "How quickly can I start earning with VORTEX?",
      answer:
        "Most creators see initial revenue within their first 2-4 weeks of joining our program. Our fast-track onboarding includes immediate access to Ash's proven content strategies, priority placement in brand campaigns, and dedicated coaching. Your earning potential scales with your engagement and commitment to our proven methodologies.",
    },
    {
      question: "Does Ash Davis personally work with creators?",
      answer:
        "Ash maintains personal involvement with creator development through monthly strategy sessions, quarterly reviews, and direct access via our creator portal. While day-to-day support comes from our expert team (all former creators themselves), Ash personally reviews every creator's progress and provides strategic guidance for major decisions.",
    },
    {
      question: "What level of creative control do I maintain?",
      answer:
        "Complete creative autonomy is fundamental to Ash's philosophy. VORTEX provides strategic guidance, trend insights, and optimization suggestions, but all content decisions remain entirely yours. We believe authentic creativity drives the best results, so we never compromise your unique voice or style. You own your content, your brand, and your creative direction.",
    },
    {
      question: "How does the zero-commission model actually work?",
      answer:
        "VORTEX receives payment directly from TikTok, YouTube, and brand partners based on creator performance metrics—not from creator earnings. This revolutionary model means you keep 100% of your direct revenue while we're incentivized to maximize your success. The better you perform, the more successful VORTEX becomes. It's true partnership.",
    },
    {
      question: "What support do I get beyond just brand partnerships?",
      answer:
        "VORTEX offers comprehensive creator development including: content strategy coaching, trend analysis, technical support, legal contract review, tax guidance, mental health resources, networking events, and access to professional studios. Ash believes in supporting the whole creator, not just their content.",
    },
    {
      question: "Can I leave VORTEX anytime, or am I locked into a contract?",
      answer:
        "Ash's philosophy is built on choice, not contracts. We offer a 14-day trial period with no commitments. After that, either party can end the partnership with 30 days' notice. We believe if we're not adding value to your creator journey, you should be free to explore other options. Most creators stay because they see genuine results and support.",
    },
    {
      question: "Do I need to be located in a specific city to work with VORTEX?",
      answer:
        "While our flagship studios are in major cities, VORTEX supports creators globally through our hybrid model. Remote creators receive comprehensive digital support, virtual coaching sessions with Ash's team, and access to our full brand partnership network. Location is never a barrier to success in our community.",
    },
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-effect-vortex rounded-2xl overflow-hidden modern-card">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full p-6 text-left hover:bg-sky-500/5 transition-colors duration-300 border-none cursor-pointer bg-transparent"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <span
                    className={`text-sky-400 text-xl transition-transform duration-300 ${openFAQ === index ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass-effect-vortex p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              Ash Davis and the VORTEX team are here to help. Get personalized answers to your specific situation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="vortex-button text-white px-6 py-3 rounded-full font-semibold border-none cursor-pointer">
                Schedule Call with Ash
              </button>
              <button className="glass-effect-vortex border border-sky-400/50 text-sky-400 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-sky-400/10">
                Join Creator Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
