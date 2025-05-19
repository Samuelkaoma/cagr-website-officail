"use client"

import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function ScrollDownButton() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Hide the button when scrolled down
      if (window.scrollY > 200) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about-section")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <button
      onClick={scrollToNextSection}
      className={`animate-bounce mx-auto h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Scroll down"
    >
      <ChevronDown className="h-6 w-6" />
    </button>
  )
}
