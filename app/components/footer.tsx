"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
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
    <footer ref={footerRef} className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="footer-column space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold">
                <span className="text-primary">Bharat </span>
                <span style={{ color: "#020b1c" }}> Alternates</span>
              </span>
            </Link>
            <div className="space-y-3">
              <p className="text-gray-800 font-bold text-base leading-relaxed border-l-4 border-primary pl-3 py-1">
                Your trusted partner in Portfolio Management Services and Alternative Investment Funds.
              </p>
              <p className="text-sm text-gray-500">Empowering investors with data-driven insights.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/our-clients" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Contact Us
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
                <Link
                  href="/pms/do-you-need-pms"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Do you need PMS?
                </Link>
              </li>
              <li>
                <Link
                  href="/pms/who-should-invest"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Who Should Invest?
                </Link>
              </li>
              <li>
                <Link
                  href="/pms/top-pms-in-india"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Top PMSs in India
                </Link>
              </li>
              <li>
                <Link href="/pms/pms-faq" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  PMS FAQ
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
                <Link
                  href="/aif/do-you-need-aif"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Do you need AIF?
                </Link>
              </li>
              <li>
                <Link
                  href="/aif/who-should-invest"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Who Should Invest?
                </Link>
              </li>
              <li>
                <Link href="/aif/faqs" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  AIF FAQ
                </Link>
              </li>
              <li>
                <Link href="/aif/top-cat-1-aifs" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Top CAT 1 AIFs
                </Link>
              </li>
              <li>
                <Link href="/aif/top-cat-2-aifs" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Top CAT 2 AIFs
                </Link>
              </li>
              <li>
                <Link href="/aif/top-cat-3-aifs" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Top CAT 3 AIFs
                </Link>
              </li>
              <li>
                <Link
                  href="/aif/gift-city-funds"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Gift City Funds
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-8 pt-8 border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">For NRIs</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/nri" className="text-sm text-gray-600 hover:text-primary transition-colors">
                    NRI Investment Options
                  </Link>
                </li>
                <li>
                  <Link
                    href="/aif/gift-city-funds"
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    Gift City Funds
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="mt-8 pt-8 border-t">
          <div className="text-sm text-gray-600 mb-8">
            <h4 className="font-semibold mb-2">RISK DISCLAIMER:</h4>
            <p className="leading-relaxed">
              Investments in Bharat Alternates are subject to market-related risks. The content provided on this
              platform is for general informational purposes only and should not be construed as a recommendation or
              investment advice. Investors must perform their own analysis and make decisions based on their risk
              appetite. Only those investors with a suitable aptitude and attitude towards risk should consider
              investment options in Alternates (PMS & AIFs).
            </p>
            <p className="leading-relaxed mt-2">
              Past performance may or may not be indicative of future results and should not be used for comparison with
              other investments. We strongly recommend reading the disclosure documents thoroughly before making any
              investment decisions. PMS & AIF products are market-linked and do not offer any guaranteed or assured
              returns. These are higher-risk investments and come with the possibility of losing the principal amount.
              As such, investors must make informed and prudent decisions.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Bharat Alternates. All rights reserved.
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
