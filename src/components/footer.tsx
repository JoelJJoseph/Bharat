"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const [currentYear, setCurrentYear] = useState<number>(2024)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
    
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      const footer = footerRef.current
      if (!footer) return

      // Animate footer elements when they come into view
      gsap.from(footer.querySelectorAll(".footer-column"), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      })
    }
  }, [])

  return (
    <footer ref={footerRef} className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/Bharat.png"
                alt="Bharat Alternates Logo"
                width={100}
                height={100}
                className="h-8 w-8 sm:h-12 sm:w-12"
              />
              <span className="text-xl sm:text-2xl font-bold text-primary ml-2 sm:ml-3">Bharat Alternates</span>
            </Link>
            <p className="text-sm text-gray-600">
              Empowering investors with data-driven insights and expert analysis for optimal wealth creation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/our-clients" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Our Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* PMS Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">PMS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pms/what-is-pms" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  What is PMS?
                </Link>
              </li>
              <li>
                <Link href="/pms/do-you-need-pms" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Do you need PMS?
                </Link>
              </li>
              <li>
                <Link href="/pms/who-should-invest" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Who Should Invest?
                </Link>
              </li>
              <li>
                <Link href="/pms/top-pms-in-india" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Top PMSs in India
                </Link>
              </li>
            </ul>
          </div>

          {/* AIF Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">AIF</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/aif/what-is-aif" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  What is AIF?
                </Link>
              </li>
              <li>
                <Link href="/aif/do-you-need-aif" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Do you need AIF?
                </Link>
              </li>
              <li>
                <Link href="/aif/who-should-invest" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Who Should Invest?
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {currentYear} Bharat Alternates. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

