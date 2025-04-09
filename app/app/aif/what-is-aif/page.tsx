"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { ArrowRight, BarChart3, Shield, TrendingUp, Users, Briefcase, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PieChart3D from "@/components/charts/pie-chart-3d"
import { PulseButton } from "@/components/pulse-button"

export default function WhatIsAIFPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)
  const comparisonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate the hero section
    gsap.from(".hero-content", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    })

    // Animate the categories section
    gsap.from(categoriesRef.current?.querySelectorAll(".category-card"), {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: categoriesRef.current,
        start: "top 80%",
      },
    })

    // Animate the comparison table
    gsap.from(comparisonRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: comparisonRef.current,
        start: "top 80%",
      },
    })
  }, [])

  // Sample data for pie chart
  const aifAllocationData = [
    { label: "Private Equity", value: 35, color: "#3b82f6" },
    { label: "Venture Capital", value: 25, color: "#10b981" },
    { label: "Hedge Funds", value: 20, color: "#f59e0b" },
    { label: "Real Estate", value: 15, color: "#8b5cf6" },
    { label: "Others", value: 5, color: "#6b7280" },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Diversification",
      description: "Exposure to alternative asset classes beyond traditional equity and debt.",
    },
    {
      icon: Users,
      title: "Higher Returns Potential",
      description: "Access to high-growth investment opportunities not available in public markets.",
    },
    {
      icon: Shield,
      title: "Expert Management",
      description: "Managed by industry experts with a deep understanding of alternative assets.",
    },
    {
      icon: Briefcase,
      title: "Regulatory Oversight",
      description: "Regulated by SEBI, providing investor protection and transparency.",
    },
    {
      icon: BarChart3,
      title: "Lower Correlation",
      description: "Often has lower correlation with traditional markets, providing portfolio stability.",
    },
    {
      icon: LineChart,
      title: "Tax Efficiency",
      description: "Certain AIF categories offer tax pass-through benefits for investors.",
    },
  ]

  return (
    <div ref={pageRef}>
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-20 text-white md:py-28 lg:py-36">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="hero-content text-4xl font-bold md:text-5xl lg:text-6xl">
              Alternative Investment Funds (AIF)
            </h1>
            <p className="hero-content mt-6 text-lg text-slate-300 md:text-xl">
              Sophisticated investment vehicles that collect funds from investors for investing in diverse asset classes
              beyond traditional markets.
            </p>
            <div className="hero-content mt-8 flex flex-wrap justify-center gap-4">
              <PulseButton href="/contact">Get Started</PulseButton>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
                asChild
              >
                <Link href="/aif/faqs">Learn More</Link>
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

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                What are Alternative Investment Funds (AIF)?
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Alternative Investment Funds (AIFs) are privately pooled investment vehicles that collect funds from
                  sophisticated investors for investing in diverse asset classes, such as venture capital, hedge funds,
                  and private equity.
                </p>
                <p>
                  AIFs are regulated by the Securities and Exchange Board of India (SEBI) under the SEBI (Alternative
                  Investment Funds) Regulations, 2012. These regulations provide a framework for the registration and
                  regulation of various types of AIFs.
                </p>
                <p>
                  With a minimum investment requirement of ₹1 crore, AIFs are designed for high-net-worth individuals
                  and institutional investors looking to diversify beyond traditional investment options.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Key Characteristics of AIFs</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Pooled Investment Vehicle</span> – Funds from multiple investors are
                      pooled together for investment.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">High Minimum Investment</span> – Requires a minimum investment of ₹1
                      crore.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Regulatory Oversight</span> – Regulated by SEBI, providing investor
                      protection.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Diverse Investment Strategies</span> – Invests in a wide range of
                      alternative assets.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="rounded-lg overflow-hidden mb-8">
                <img
                  src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Alternative Investments"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Sample AIF Allocation</h3>
                <PieChart3D data={aifAllocationData} height={300} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={categoriesRef} className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Types of AIFs</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              SEBI has classified AIFs into three categories based on their investment strategy
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="category-card overflow-hidden hover-lift">
              <CardHeader className="bg-primary pb-8 pt-6 text-white">
                <CardTitle>Category I AIF</CardTitle>
                <CardDescription className="text-primary-foreground">Positive impact on the economy</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Category I AIFs invest in start-ups, early-stage ventures, social ventures, SMEs, infrastructure, or
                  other sectors which the government or regulators consider socially or economically desirable.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Includes:</h4>
                  <ul className="ml-5 list-disc space-y-1 text-muted-foreground">
                    <li>Venture Capital Funds</li>
                    <li>Angel Funds</li>
                    <li>Social Venture Funds</li>
                    <li>SME Funds</li>
                    <li>Infrastructure Funds</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/aif/top-cat-1-aifs">Explore Category I AIFs</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="category-card overflow-hidden hover-lift">
              <CardHeader className="bg-slate-800 pb-8 pt-6 text-white">
                <CardTitle>Category II AIF</CardTitle>
                <CardDescription className="text-slate-300">Diverse investment strategies</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Category II AIFs are funds that do not fall under Category I or III and do not undertake leverage or
                  borrowing other than to meet day-to-day operational requirements.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Includes:</h4>
                  <ul className="ml-5 list-disc space-y-1 text-muted-foreground">
                    <li>Private Equity Funds</li>
                    <li>Debt Funds</li>
                    <li>Fund of Funds</li>
                    <li>Real Estate Funds</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/aif/top-cat-2-aifs">Explore Category II AIFs</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="category-card overflow-hidden hover-lift">
              <CardHeader className="bg-slate-700 pb-8 pt-6 text-white">
                <CardTitle>Category III AIF</CardTitle>
                <CardDescription className="text-slate-300">Complex trading strategies</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Category III AIFs employ diverse or complex trading strategies and may employ leverage including
                  through investment in listed or unlisted derivatives.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Includes:</h4>
                  <ul className="ml-5 list-disc space-y-1 text-muted-foreground">
                    <li>Hedge Funds</li>
                    <li>PIPE Funds</li>
                    <li>Long-Short Equity Funds</li>
                    <li>Multi-Strategy Funds</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/aif/top-cat-3-aifs">Explore Category III AIFs</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Benefits of AIFs</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Why sophisticated investors choose Alternative Investment Funds
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section ref={comparisonRef} className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">PMS vs. AIF</h2>
            <p className="mt-4 text-lg text-muted-foreground">Understanding the key differences between PMS and AIF</p>
          </div>
          <div className="mt-12 overflow-hidden rounded-lg border bg-white shadow-sm">
            <div className="grid grid-cols-3 border-b">
              <div className="border-r p-4 font-medium">Feature</div>
              <div className="border-r p-4 font-medium">PMS</div>
              <div className="p-4 font-medium">AIF</div>
            </div>
            {[
              {
                feature: "Minimum Investment",
                pms: "₹50 Lakhs",
                aif: "₹1 Crore",
              },
              {
                feature: "Customization",
                pms: "High",
                aif: "Low to Medium",
              },
              {
                feature: "Regulatory Framework",
                pms: "SEBI PMS Regulations",
                aif: "SEBI AIF Regulations",
              },
              {
                feature: "Investment Structure",
                pms: "Individual Accounts",
                aif: "Pooled Investment",
              },
              {
                feature: "Asset Classes",
                pms: "Primarily Listed Securities",
                aif: "Diverse Alternative Assets",
              },
              {
                feature: "Liquidity",
                pms: "Medium to High",
                aif: "Low to Medium",
              },
              {
                feature: "Taxation",
                pms: "Individual Transaction Level",
                aif: "Depends on Category",
              },
              {
                feature: "Reporting",
                pms: "Detailed & Frequent",
                aif: "Periodic",
              },
            ].map((row, index) => (
              <div key={index} className={`grid grid-cols-3 ${index !== 7 ? "border-b" : ""}`}>
                <div className="border-r p-4">{row.feature}</div>
                <div className="border-r p-4">{row.pms}</div>
                <div className="p-4">{row.aif}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">AIF Taxation in India</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Understanding the tax implications of investing in AIFs
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden hover-lift">
              <CardHeader>
                <CardTitle>Category I & II AIFs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Category I and II AIFs enjoy pass-through taxation status, which means:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>Income is taxed in the hands of the investor, not at the fund level.</div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>Long-term capital gains are taxed at 10% without indexation.</div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>Short-term capital gains are taxed as per the investor's income tax slab.</div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>Business income is taxed as per the investor's applicable tax rate.</div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-lift">
              <CardHeader>
                <CardTitle>Category III AIFs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Category III AIFs have a different taxation structure:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      Income is taxed at the fund level with a flat rate of 42.74% (inclusive of surcharge and cess).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      For listed equity investments, short-term capital gains are taxed at 15% and long-term capital
                      gains above ₹1 lakh are taxed at 10%.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      For non-equity investments, short-term capital gains are taxed at the maximum marginal rate and
                      long-term capital gains are taxed at 20% with indexation.
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
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to Explore Alternative Investments?</h2>
            <p className="mt-4 text-lg opacity-90">
              Schedule a consultation with our investment experts to discuss how our AIF solutions can help you
              diversify your portfolio and achieve your financial goals.
            </p>
            <div className="mt-8">
              <PulseButton href="/contact" variant="white">
                Contact Us Today
              </PulseButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

