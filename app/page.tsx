"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import HomePage from "@/components/home-page"
import AboutPage from "@/components/about-page"
import CreatorsPage from "@/components/creators-page"
import BrandsPage from "@/components/brands-page"
import SellersPage from "@/components/sellers-page"
import StoryPage from "@/components/story-page"
import TestimonialsPage from "@/components/testimonials-page"

export default function VortexWebsite() {
  const [currentPage, setCurrentPage] = useState("home")

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [currentPage])

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === "about" && <AboutPage />}
      {currentPage === "creators" && <CreatorsPage />}
      {currentPage === "brands" && <BrandsPage />}
      {currentPage === "sellers" && <SellersPage />}
      {currentPage === "story" && <StoryPage />}
      {currentPage === "testimonials" && <TestimonialsPage />}
    </div>
  )
}
