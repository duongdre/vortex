"use client"

import Image from "next/image"

interface HeaderProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 glass-effect-vortex border-b border-pink-500/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* VORTEX Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/vortex-icon.png"
            alt="VORTEX Logo"
            width={40}
            height={40}
            className="rounded-full animate-modernPulse"
          />
          <div className="text-xl font-bold bg-gradient-to-r from-pink-400 via-sky-400 to-pink-400 bg-clip-text text-transparent">
            VORTEX
          </div>
        </div>

        <nav className="hidden md:flex gap-2">
          {[
            { id: "home", label: "Home" },
            { id: "creators", label: "Creators" },
            { id: "brands", label: "Brands" },
            { id: "sellers", label: "Sellers" },
            { id: "story", label: "Story" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`px-4 py-2 rounded-xl transition-all duration-300 border-none cursor-pointer ${
                currentPage === item.id
                  ? "bg-gradient-to-r from-pink-500 to-sky-500 text-white shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button className="vortex-button px-6 py-2 rounded-xl text-white font-semibold border-none cursor-pointer flex items-center gap-2">
          <Image src="/images/tiktok-logo.png" alt="TikTok" width={20} height={20} />
          Login
        </button>
      </div>
    </header>
  )
}
