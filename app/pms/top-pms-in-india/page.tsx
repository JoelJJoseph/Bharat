"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Star, TrendingUp, BarChart3, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TopPMSInIndiaPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate the page content
    gsap.from(pageRef.current?.querySelectorAll(".animate-card"), {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: pageRef.current,
        start: "top 80%",
      },
    })
  }, [])

  return (
    <div ref={pageRef}>
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-20 text-white md:py-28 lg:py-36">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Top PMS Providers in India</h1>
            <p className="mt-6 text-lg text-slate-300 md:text-xl">
              Discover India's leading Portfolio Management Services with exceptional track records and investment
              strategies
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Expert Advice</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
                asChild
              >
                <Link href="/pms/what-is-pms">Learn About PMS</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-20">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 100V0l100 100H0z" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4F46E5" />
                <stop offset="1" stopColor="#0F172A" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
              Leading PMS Providers in India
            </h2>
            <p className="mt-4 text-lg text-navy-900">
              India has a thriving PMS ecosystem with several reputed firms offering high-quality portfolio management
              services
            </p>
          </div>

          <Tabs defaultValue="equity" className="animate-card">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="equity">Equity PMS</TabsTrigger>
              <TabsTrigger value="multi-asset">Multi-Asset PMS</TabsTrigger>
              <TabsTrigger value="thematic">Thematic PMS</TabsTrigger>
            </TabsList>

            <TabsContent value="equity">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Motilal Oswal PMS",
                    strategy: "Value Strategy",
                    description:
                      "Focuses on 'Buy Right, Sit Tight' philosophy with investments in quality businesses at reasonable valuations.",
                    returns: "18.5% CAGR (5Y)",
                    minInvestment: "₹50 Lakhs",
                    rating: 5,
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "ASK Investment Managers",
                    strategy: "Growth Strategy",
                    description:
                      "Invests in high-quality businesses with strong growth potential and sustainable competitive advantages.",
                    returns: "17.2% CAGR (5Y)",
                    minInvestment: "₹50 Lakhs",
                    rating: 5,
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Marcellus Investment Managers",
                    strategy: "Consistent Compounders",
                    description:
                      "Focuses on companies with strong competitive advantages and consistent growth in difficult times.",
                    returns: "19.8% CAGR (5Y)",
                    minInvestment: "₹50 Lakhs",
                    rating: 5,
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Alchemy Capital Management",
                    strategy: "Alchemy High Growth",
                    description: "Research-driven approach to identify undervalued companies with strong fundamentals.",
                    returns: "16.9% CAGR (5Y)",
                    minInvestment: "₹50 Lakhs",
                    rating: 4,
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Abakkus Asset Manager",
                    strategy: "Abakkus Growth Portfolio",
                    description:
                      "Founded by Sunil Singhania, focuses on identifying emerging opportunities across market caps.",
                    returns: "18.1% CAGR (5Y)",
                    minInvestment: "₹50 Lakhs",
                    rating: 4,
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Sundaram Alternates",
                    strategy: "Sundaram India Premier",
                    description:
                      "Leverages the Sundaram Group's extensive research capabilities to deliver consistent returns.",
                    returns: "15.8% CAGR (5Y)",
                    minInvestment: "₹50 Lakhs",
                    rating: 4,
                    image: "/placeholder.svg?height=200&width=300",
                  },
                ].map((provider, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={provider.image || "/placeholder.svg"}
                        alt={provider.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-navy-900">{provider.name}</CardTitle>
                      <p className="text-sm font-medium text-primary">{provider.strategy}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-navy-900 mb-4">{provider.description}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium text-navy-900">Returns</p>
                          <p className="text-lg font-bold text-navy-900">{provider.returns}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-navy-900">Min Investment</p>
                          <p className="text-lg font-bold text-navy-900">{provider.minInvestment}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < provider.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                            />
                          ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/contact">
                          Get Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="multi-asset">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "ICICI Prudential PMS",
                    strategy: "Multi-Asset Portfolio",
                    description:
                      "Diversified strategy across equity, debt, and alternative investments for balanced returns.",
                    returns: "14.2% CAGR (5Y)",
                    minInvestment: "₹50 Lakhs",
                    rating: 4,
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Kotak PMS",
                    strategy: "Special Situations Value Strategy",
                    description:
                      "Invests across asset classes with focus on special situations and value opportunities.",
                    returns: "15.1% CAGR (5Y)",
                    minInvestment: "₹50 Lakhs",
                    rating: 4,
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Aditya Birla Capital",
                    strategy: "Core & Satellite",
                    description:
                      "Combines core long-term holdings with tactical allocations across multiple asset classes.",
                    returns: "13.8% CAGR (5Y)",
                    minInvestment: "₹50 Lakhs",
                    rating: 4,
                    image: "/placeholder.svg?height=200&width=300",
                  },
                ].map((provider, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={provider.image || "/placeholder.svg"}
                        alt={provider.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-navy-900">{provider.name}</CardTitle>
                      <p className="text-sm font-medium text-primary">{provider.strategy}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-navy-900 mb-4">{provider.description}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium text-navy-900">Returns</p>
                          <p className="text-lg font-bold text-navy-900">{provider.returns}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-navy-900">Min Investment</p>
                          <p className="text-lg font-bold text-navy-900">{provider.minInvestment}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < provider.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                            />
                          ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/contact">
                          Get Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="thematic">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "SageOne Investment",
                    strategy: "Small & Mid Cap Portfolio",
                    description:
                      "Focuses on small and mid-cap companies with high growth potential and strong fundamentals.",
                    returns: "21.3% CAGR (5Y)",
                    minInvestment: "₹50 Lakhs",
                    rating: 5,
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Quantum Advisors",
                    strategy: "India Responsible Returns",
                    description:
                      "ESG-focused strategy investing in companies with strong environmental and governance practices.",
                    returns: "16.2% CAGR (5Y)",
                    minInvestment: "₹50 Lakhs",
                    rating: 4,
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "White Oak Capital",
                    strategy: "India Pioneers",
                    description:
                      "Invests in innovative companies leading technological and sectoral transformations in India.",
                    returns: "19.5% CAGR (5Y)",
                    minInvestment: "₹50 Lakhs",
                    rating: 5,
                    image: "/placeholder.svg?height=200&width=300",
                  },
                ].map((provider, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={provider.image || "/placeholder.svg"}
                        alt={provider.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-navy-900">{provider.name}</CardTitle>
                      <p className="text-sm font-medium text-primary">{provider.strategy}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-navy-900 mb-4">{provider.description}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium text-navy-900">Returns</p>
                          <p className="text-lg font-bold text-navy-900">{provider.returns}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-navy-900">Min Investment</p>
                          <p className="text-lg font-bold text-navy-900">{provider.minInvestment}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < provider.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                            />
                          ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/contact">
                          Get Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
              How to Select the Right PMS Provider
            </h2>
            <p className="mt-4 text-lg text-navy-900">
              Key factors to consider when choosing a Portfolio Management Service
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                title: "Track Record",
                description:
                  "Evaluate historical performance across different market cycles, not just during bull markets.",
              },
              {
                icon: BarChart3,
                title: "Investment Philosophy",
                description:
                  "Ensure the PMS provider's investment approach aligns with your financial goals and risk tolerance.",
              },
              {
                icon: Shield,
                title: "Risk Management",
                description:
                  "Assess how the PMS handles downside protection and manages risk during market volatility.",
              },
              {
                icon: Award,
                title: "Team Expertise",
                description: "Research the experience and expertise of the fund management team and their stability.",
              },
              {
                icon: Star,
                title: "Transparency",
                description: "Look for clear communication, detailed reporting, and transparency in fee structures.",
              },
              {
                icon: ArrowRight,
                title: "Customization",
                description: "Consider the level of personalization offered to meet your specific investment needs.",
              },
            ].map((factor, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <factor.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-navy-900">{factor.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-900">{factor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-bg text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Need Help Selecting the Right PMS Provider?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Our experts can help you navigate the PMS landscape and find the right portfolio management service that
              aligns with your financial goals.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

