"use client"

import Link from "next/link"
import { MobileMenuTrigger } from "@/components/sidebar-navigation"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { gsap } from "gsap"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Animation
    gsap.fromTo(".header-content", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex h-16 items-center justify-between header-content">
        <div className="flex items-center">
          <MobileMenuTrigger />
        </div>

        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">PMS Expert</span>
          </Link>
        </div>

        <div className="hidden lg:block">
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Empty div to balance the layout on mobile */}
        <div className="w-10 lg:hidden"></div>
      </div>
    </header>
  )
}

