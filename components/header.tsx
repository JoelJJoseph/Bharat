"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavItem {
  title: string
  href: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "PMS",
    href: "#",
    children: [
      { title: "What is PMS?", href: "/pms/what-is-pms" },
      { title: "Who should invest?", href: "/pms/who-should-invest" },
      { title: "Do you need PMS?", href: "/pms/do-you-need-pms" },
      { title: "Top PMS in India", href: "/pms/top-pms-in-india" },
      { title: "PMS FAQ", href: "/pms/pms-faq" },
    ],
  },
  {
    title: "AIF",
    href: "#",
    children: [
      { title: "What is AIF?", href: "/aif/what-is-aif" },
      { title: "Do you need AIF?", href: "/aif/do-you-need-aif" },
    ],
  },
  { title: "Why Choose Us", href: "/why-choose-us" },
  { title: "Our Clients", href: "/our-clients" },
  {
    title: "Resources",
    href: "#",
    children: [
      { title: "Blog", href: "/resources/blog" },
      { title: "Newsletters", href: "/resources/newsletters" },
      { title: "Nifty PE Ratio", href: "/resources/nifty-pe-ratio" },
    ],
  },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const handleDropdownEnter = (title: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = null
    }
    setActiveDropdown(title)
  }

  const handleDropdownLeave = () => {
    // Increase the timeout to 800ms to give users more time to navigate to dropdown items
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 800)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold">Bharat Alternates</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => item.children && handleDropdownEnter(item.title)}
              onMouseLeave={handleDropdownLeave}
            >
              {item.children ? (
                <>
                  <button
                    className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                      pathname.startsWith(item.href) ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveDropdown(activeDropdown === item.title ? null : item.title)
                    }}
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === item.title && (
                    <div className="absolute left-0 top-full mt-2 w-48 rounded-md border bg-background shadow-lg">
                      <div className="p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <div key={item.title} className="relative">
                {item.children ? (
                  <>
                    <button
                      className={`flex items-center justify-between w-full text-sm font-medium transition-colors hover:text-primary ${
                        pathname.startsWith(item.href) ? "text-primary" : "text-muted-foreground"
                      }`}
                      onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                    >
                      <span>{item.title}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {activeDropdown === item.title && (
                      <div className="mt-2 ml-4 space-y-2">
                        {item.children.map((child) => (
                          <Link key={child.title} href={child.href} className="block py-1 text-sm hover:text-primary">
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname === item.href ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
