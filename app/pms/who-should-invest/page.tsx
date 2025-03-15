"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, CheckCircle, XCircle, Users, Briefcase, BarChart3, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WhoShouldInvestInPMSPage() {
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
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Who Should Invest in PMS?</h1>
            <p className="mt-6 text-lg text-slate-300 md:text-xl">
              Understanding if Portfolio Management Services are the right investment avenue for you
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
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
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
                Ideal Investor Profile for PMS
              </h2>
              <div className="mt-6 space-y-4 text-navy-900">
                <p>
                  Portfolio Management Services (PMS) are designed for high-net-worth individuals who seek personalized
                  investment strategies and professional management of their wealth. While PMS offers numerous
                  advantages, it's important to determine if it aligns with your financial situation and investment
                  goals.
                </p>
                <p>
                  The ideal PMS investor typically has specific characteristics that make this investment avenue
                  particularly suitable for their needs.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-navy-900">Key Characteristics</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-navy-900">
                      <span className="font-medium">High Net Worth</span> – Individuals with significant investable
                      assets (minimum ₹50 lakhs)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-navy-900">
                      <span className="font-medium">Long-Term Outlook</span> – Investors focused on wealth creation over
                      3+ years
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-navy-900">
                      <span className="font-medium">Moderate to High Risk Tolerance</span> – Comfortable with market
                      volatility for potentially higher returns
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-navy-900">
                      <span className="font-medium">Desire for Personalization</span> – Seeking tailored investment
                      strategies rather than standardized products
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Ideal PMS Investor"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Investor Categories for PMS</h2>
            <p className="mt-4 text-lg text-navy-900">PMS is particularly well-suited for these investor profiles</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="animate-card hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-navy-900">High-Net-Worth Individuals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-navy-900 mb-4">
                  Individuals with significant investable assets who seek professional management of their wealth.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-navy-900">Minimum ₹50 lakhs available for investment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-navy-900">Looking for wealth creation beyond traditional options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-navy-900">Value personalized investment strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-card hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-navy-900">Busy Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-navy-900 mb-4">
                  Successful professionals who lack the time to actively manage their investments but have substantial
                  assets.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-navy-900">Time-constrained executives and entrepreneurs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-navy-900">Prefer delegating investment decisions to experts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-navy-900">Value regular reporting and transparency</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-card hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-navy-900">Experienced Investors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-navy-900 mb-4">
                  Investors with market knowledge who appreciate professional expertise and research-backed strategies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-navy-900">Understand market dynamics and investment principles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-navy-900">Seeking alpha through professional management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-navy-900">Appreciate detailed investment analysis and rationale</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-card hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-navy-900">Retirement Planners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-navy-900 mb-4">
                  Individuals planning for retirement who need professional management to build a substantial corpus.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-navy-900">Long-term investment horizon (5+ years)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-navy-900">Focus on wealth preservation with growth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-navy-900">Need for professional risk management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-card hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-navy-900">NRIs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-navy-900 mb-4">
                  Non-Resident Indians looking to invest in the Indian markets with professional management.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-navy-900">Seeking exposure to Indian growth story</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-navy-900">Need local expertise and market knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-navy-900">Value digital access and remote management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-card hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-navy-900">Family Offices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-navy-900 mb-4">
                  Family offices seeking professional management for a portion of their overall portfolio.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-navy-900">Looking for specialized expertise in specific sectors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-navy-900">Need for portfolio diversification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-navy-900">Value comprehensive reporting and analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
              Who May Not Be Suited for PMS
            </h2>
            <p className="mt-4 text-lg text-navy-900">PMS may not be the right investment avenue for everyone</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="animate-card">
              <CardHeader>
                <CardTitle className="text-xl text-navy-900">Not Ideal For</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <div className="text-navy-900">
                      <span className="font-medium">Small Investors</span> – Those with less than ₹50 lakhs to invest
                    </div>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <div className="text-navy-900">
                      <span className="font-medium">Short-Term Traders</span> – Individuals looking for quick profits or
                      daily trading
                    </div>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <div className="text-navy-900">
                      <span className="font-medium">Very Conservative Investors</span> – Those with very low risk
                      tolerance seeking guaranteed returns
                    </div>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <div className="text-navy-900">
                      <span className="font-medium">Investors Needing High Liquidity</span> – Those who may need
                      immediate access to their funds
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-card">
              <CardHeader>
                <CardTitle className="text-xl text-navy-900">Alternative Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-navy-900 mb-4">If PMS isn't suitable for you, consider these alternatives:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div className="text-navy-900">
                      <span className="font-medium">Mutual Funds</span> – Lower minimum investment with professional
                      management
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div className="text-navy-900">
                      <span className="font-medium">ETFs</span> – Low-cost, passive investment options
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div className="text-navy-900">
                      <span className="font-medium">Fixed Deposits</span> – For very conservative investors seeking
                      guaranteed returns
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div className="text-navy-900">
                      <span className="font-medium">Direct Equity</span> – For those who prefer self-management of
                      investments
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-bg text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to Explore if PMS is Right for You?</h2>
            <p className="mt-4 text-lg opacity-90">
              Schedule a consultation with our investment experts to discuss your financial goals and determine if PMS
              aligns with your needs.
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

