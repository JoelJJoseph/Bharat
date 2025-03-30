"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Why Choose Us",
    href: "/why-choose-us",
  },
  {
    name: "PMS",
    href: "#",
    dropdown: [
      { name: "What is PMS?", href: "/pms/what-is-pms" },
      { name: "Do you need PMS?", href: "/pms/do-you-need-pms" },
      { name: "Who Should Invest in PMS?", href: "/pms/who-should-invest" },
      { name: "Top PMSs in India", href: "/pms/top-pms-in-india" },
    ],
  },
  {
    name: "AIF",
    href: "#",
    dropdown: [
      { name: "What is AIF?", href: "/aif/what-is-aif" },
      { name: "Do you need AIF?", href: "/aif/do-you-need-aif" },
      { name: "Who should invest in AIF?", href: "/aif/who-should-invest" },
      { name: "Top AIFs in India", href: "/aif/top-aifs" },
    ],
  },
  {
    name: "Resources",
    href: "#",
    dropdown: [
      { name: "Blog", href: "/resources/blog" },
      { name: "Newsletter", href: "/resources/newsletter" },
      { name: "Market Insights", href: "/resources/market-insights" },
    ],
  },
  {
    name: "Our Clients",
    href: "/our-clients",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
]

export function GlassmorphicHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="header-content flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bharat-zC2hPgOFzzzRjedBBBJtAJS2teHkGF.png"
              alt="Bharat Alternates Logo"
              width={48}
              height={48}
              className="h-10 w-10 sm:h-12 sm:w-12"
            />
            <span className="text-xl sm:text-2xl font-bold text-blue-600">Bharat Alternates</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center gap-1">
                        {item.name} <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      {item.dropdown.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.name} asChild>
                          <Link href={dropdownItem.href}>{dropdownItem.name}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }

              return (
                <Button key={item.name} variant="ghost" asChild>
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              )
            })}
          </nav>

          {/* Get Started Button */}
          <div className="flex items-center">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.name} className="py-2">
                      <div className="px-3 py-2 text-base font-medium text-gray-700">
                        {item.name}
                      </div>
                      <div className="pl-4">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

