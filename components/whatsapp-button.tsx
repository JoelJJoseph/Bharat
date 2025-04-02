"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"

export default function WhatsappButton() {
  const [isVisible, setIsVisible] = useState(false)
  const phoneNumber = "918527512552" // Format for WhatsApp API

  // Show button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-4 right-4 z-50 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:bg-green-600 ${
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      }`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5 sm:h-7 sm:w-7" />
      <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-red-500 text-[10px] sm:text-xs font-bold">
        1
      </span>
    </a>
  )
}

