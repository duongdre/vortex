"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Ash" },
    { id: "creators", label: "Creators" },
    { id: "brands", label: "Brands" },
    { id: "testimonials", label: "Success Stories" },
    { id: "story", label: "Our Journey" },
  ]

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId)
    setIsMobileMenuOpen(false)

    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 w-full z-50 glass-effect-vortex border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* VORTEX Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => {
            handleNavClick("home")
          }}
        >
          <Image
            src="/images/vortex-icon.png"
            alt="VORTEX Logo"
            width={40}
            height={40}
            className="rounded-full animate-modernPulse"
          />
          <div className="text-xl font-bold bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent">
            VORTEX
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-2 rounded-xl transition-all duration-300 border-none cursor-pointer ${
                currentPage === item.id
                  ? "bg-gradient-to-r from-sky-500 to-pink-500 text-white shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Tablet Navigation - Smaller buttons */}
        <nav className="hidden md:flex lg:hidden gap-1">
          {navigationItems.slice(0, 4).map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3 py-2 rounded-lg text-sm transition-all duration-300 border-none cursor-pointer ${
                currentPage === item.id
                  ? "bg-gradient-to-r from-sky-500 to-pink-500 text-white shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right side - Contact button and Mobile menu toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick("sellers")}
            className="vortex-button px-4 lg:px-6 py-2 rounded-xl text-white font-semibold border-none cursor-pointer flex items-center gap-2 text-sm lg:text-base"
          >
            <Image src="/images/tiktok-logo.png" alt="TikTok" width={16} height={16} className="lg:w-5 lg:h-5" />
            <span className="hidden sm:inline">Contact Ash</span>
            <span className="sm:hidden">📞</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden glass-effect-vortex p-2 rounded-lg border border-sky-500/20 text-white hover:bg-sky-500/10 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-sky-500/20 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="px-4 py-4 space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 border-none cursor-pointer ${
                currentPage === item.id
                  ? "bg-gradient-to-r from-sky-500 to-pink-500 text-white shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  )
}
