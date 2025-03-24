"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
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
    <footer ref={footerRef} className="bg-navy-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="footer-column">
            <h3 className="mb-4 text-xl font-bold text-white">Bharat Alternates</h3>
            <p className="mb-4 text-white">
              Professional Portfolio Management Services and Alternative Investment Funds for high-net-worth
              individuals.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-blue-400 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-blue-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white hover:text-blue-400 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="footer-column">
            <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-white">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pms/what-is-pms" className="hover:text-blue-400 transition-colors duration-300">
                  What is PMS?
                </Link>
              </li>
              <li>
                <Link href="/aif/what-is-aif" className="hover:text-blue-400 transition-colors duration-300">
                  What is AIF?
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="hover:text-blue-400 transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="mb-4 text-lg font-semibold text-white">Contact Information</h4>
            <ul className="space-y-3 text-white">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-blue-400" />
                <span>71/48 Prem Nagar, Janakpuri, New Delhi 110058</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-blue-400" />
                <span>+91 85275 12552</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-blue-400" />
                <span>Bharatalternates@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="mb-4 text-lg font-semibold text-white">Subscribe to Newsletter</h4>
            <p className="mb-4 text-white">Stay updated with the latest investment insights and opportunities.</p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-navy-800 text-white border-blue-900 focus-visible:ring-blue-400"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-900 pt-8 text-center text-sm text-white">
          <p>© {new Date().getFullYear()} Bharat Alternates. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy-policy" className="text-white hover:text-blue-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-white hover:text-blue-400 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="text-white hover:text-blue-400 transition-colors duration-300">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

