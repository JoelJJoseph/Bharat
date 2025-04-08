"use client"

import { Phone } from "lucide-react"
import { useEffect, useState } from "react"

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false)
  const whatsappNumber = "918527512552" // Format for WhatsApp API
  const callNumber = "+918527512552" // Format for tel: protocol

  // Show buttons after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Set visible by default on mobile
    if (window.innerWidth < 768) {
      setIsVisible(true)
    }

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed left-4 z-50 flex flex-col gap-4 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ bottom: "calc(5vh + 80px)" }}
    >
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:bg-[#20ba59] hover:scale-110 relative"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 md:h-8 md:w-8"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute -top-2 -right-2 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-red-500 text-[8px] md:text-[10px] font-bold shadow-lg">
          1
        </span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${callNumber}`}
        className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl transition-all duration-300 hover:bg-blue-700 hover:scale-110"
        aria-label="Call Us"
      >
        <Phone className="h-6 w-6 md:h-7 md:w-7" />
      </a>
    </div>
  )
}
