"use client"

export default function SellersPage() {
  return (
    <div className="relative min-h-screen">
      {/* Sellers Gradient Background - Same as Creators */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-800 -z-10" />

      <div className="flex justify-center items-center min-h-screen px-4 pt-20">
        <div className="w-full max-w-2xl">
          <div className="glass-effect p-8 rounded-3xl">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Request a Quote
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    className="w-full p-4 glass-effect rounded-xl text-white placeholder-gray-400 border border-pink-500/20 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Last Name *</label>
                  <input
                    type="text"
                    className="w-full p-4 glass-effect rounded-xl text-white placeholder-gray-400 border border-pink-500/20 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Email *</label>
                <input
                  type="email"
                  className="w-full p-4 glass-effect rounded-xl text-white placeholder-gray-400 border border-pink-500/20 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full p-4 glass-effect rounded-xl text-white placeholder-gray-400 border border-pink-500/20 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Phone Number</label>
                <div className="flex gap-3">
                  <select className="p-4 glass-effect rounded-xl text-white border border-pink-500/20 focus:border-pink-400 focus:outline-none transition-colors duration-300">
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+86">🇨🇳 +86</option>
                  </select>
                  <input
                    type="tel"
                    className="flex-1 p-4 glass-effect rounded-xl text-white placeholder-gray-400 border border-pink-500/20 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Service Type *</label>
                <select
                  className="w-full p-4 glass-effect rounded-xl text-white border border-pink-500/20 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                  required
                >
                  <option value="">Choose a service</option>
                  <option value="tiktok-marketing">TikTok Marketing</option>
                  <option value="content-creation">Content Creation</option>
                  <option value="influencer-partnerships">Influencer Partnerships</option>
                  <option value="live-streaming">Live Streaming</option>
                  <option value="e-commerce">E-commerce Solutions</option>
                  <option value="consulting">Consulting</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Project Details</label>
                <textarea
                  className="w-full h-32 p-4 glass-effect rounded-xl text-white placeholder-gray-400 border border-pink-500/20 focus:border-pink-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full tiktok-button text-white py-4 rounded-xl font-semibold border-none cursor-pointer"
              >
                Request Quote
              </button>

              <div className="flex gap-4 justify-center pt-4">
                <button
                  type="button"
                  className="glass-effect border border-pink-400/50 text-pink-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-pink-400/10"
                >
                  💬 Live Chat
                </button>
                <button
                  type="button"
                  className="glass-effect border border-cyan-400/50 text-cyan-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-cyan-400/10"
                >
                  📞 Call Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
