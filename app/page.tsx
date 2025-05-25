"use client"

import { useState } from "react"
import Header from "@/components/header"
import HomePage from "@/components/home-page"
import CreatorsPage from "@/components/creators-page"
import BrandsPage from "@/components/brands-page"
import SellersPage from "@/components/sellers-page"
import StoryPage from "@/components/story-page"

export default function VortexWebsite() {
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" && <HomePage />}
      {currentPage === "creators" && <CreatorsPage />}
      {currentPage === "brands" && <BrandsPage />}
      {currentPage === "sellers" && <SellersPage />}
      {currentPage === "story" && <StoryPage />}
    </div>
  )
}
