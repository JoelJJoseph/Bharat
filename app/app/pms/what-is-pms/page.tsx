"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { ArrowRight, BarChart3, Shield, TrendingUp, Users, Briefcase, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import PieChart3D from "@/components/charts/pie-chart-3d"
import { PulseButton } from "@/components/pulse-button"

export default function WhatIsPMSPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const comparisonRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

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

    // Animate the features section
    gsap.from(featuresRef.current?.querySelectorAll(".feature-card"), {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: featuresRef.current,
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

    // Animate the FAQ section
    gsap.from(faqRef.current?.querySelectorAll(".faq-item"), {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: faqRef.current,
        start: "top 80%",
      },
    })
  }, [])

  // Sample data for pie chart
  const pmsAllocationData = [
    { label: "Large Cap Equity", value: 40, color: "#3b82f6" },
    { label: "Mid Cap Equity", value: 25, color: "#10b981" },
    { label: "Small Cap Equity", value: 15, color: "#f59e0b" },
    { label: "Debt Instruments", value: 10, color: "#8b5cf6" },
    { label: "Cash & Equivalents", value: 10, color: "#6b7280" },
  ]

  const features = [
    {
      icon: TrendingUp,
      title: "Personalized Investment Strategy",
      description: "Customized investment plans based on an individual's risk profile and financial goals.",
    },
    {
      icon: Users,
      title: "Professional Management",
      description: "Managed by experienced portfolio managers with in-depth market knowledge.",
    },
    {
      icon: Shield,
      title: "Higher Transparency",
      description: "Investors receive detailed reports on portfolio performance and holdings.",
    },
    {
      icon: Briefcase,
      title: "Diversification",
      description: "Investment across different asset classes to minimize risks.",
    },
    {
      icon: BarChart3,
      title: "Customized Risk Management",
      description: "Tailored risk management strategies based on individual risk tolerance.",
    },
    {
      icon: LineChart,
      title: "Performance-Based Fee Structure",
      description: "Aligns the interests of the portfolio manager with the investor's goals.",
    },
  ]

  const faqs = [
    {
      question: "What is the minimum investment required for PMS?",
      answer: "The minimum investment required for Portfolio Management Services in India is INR 50 lakhs.",
    },
    {
      question: "How is PMS different from mutual funds?",
      answer:
        "Unlike mutual funds, PMS offers customized investment strategies, allowing investors more control over their portfolios. PMS also has a higher minimum investment requirement.",
    },
    {
      question: "Are PMS returns guaranteed?",
      answer:
        "No, PMS returns are market-linked and not guaranteed. However, they are managed by experienced professionals aiming for long-term wealth creation.",
    },
    {
      question: "Can NRIs invest in PMS?",
      answer: "Yes, Non-Resident Indians (NRIs) can invest in PMS through NRE/NRO accounts as per RBI guidelines.",
    },
    {
      question: "How are PMS investments taxed?",
      answer:
        "PMS investments are taxed as per capital gains taxation laws in India. Short-term gains are taxed at 15%, while long-term gains (beyond one year) are taxed at 10%.",
    },
    {
      question: "What types of PMS are available in India?",
      answer:
        "There are three types of PMS in India: Discretionary PMS (portfolio manager has full control), Non-Discretionary PMS (investor makes final decisions), and Advisory PMS (investor receives recommendations but executes trades independently).",
    },
    {
      question: "How often will I receive reports on my PMS investments?",
      answer:
        "Most PMS providers send monthly performance reports and quarterly detailed portfolio reviews. Many also offer real-time portfolio tracking through online dashboards.",
    },
    {
      question: "Can I withdraw my PMS investments anytime?",
      answer:
        "Yes, PMS investments can generally be withdrawn anytime, though some providers may have a lock-in period or exit fees. The liquidation process typically takes 3-7 working days.",
    },
  ]

  return (
    <div ref={pageRef}>
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-20 text-white md:py-28 lg:py-36">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="hero-content text-4xl font-bold md:text-5xl lg:text-6xl">
              Portfolio Management Services (PMS)
            </h1>
            <p className="hero-content mt-6 text-lg text-slate-300 md:text-xl">
              Professional investment services designed for high-net-worth individuals seeking customized portfolio
              strategies to achieve their financial goals.
            </p>
            <div className="hero-content mt-8 flex flex-wrap justify-center gap-4">
              <PulseButton href="/contact">Get Started</PulseButton>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
                asChild
              >
                <Link href="/pms/faqs">Learn More</Link>
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
                What is Portfolio Management Services (PMS)?
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Portfolio Management Services (PMS) is a professional investment service designed for high-net-worth
                  individuals (HNIs) and institutional investors who seek customized portfolio strategies to achieve
                  their financial goals.
                </p>
                <p>
                  Unlike mutual funds, PMS offers tailored solutions, allowing investors to have a personalized and
                  actively managed investment portfolio. The portfolio manager has the expertise to make investment
                  decisions based on the client's financial objectives and risk tolerance.
                </p>
                <p>
                  With a minimum investment requirement of ₹50 lakhs, PMS is specifically designed for sophisticated
                  investors looking for personalized wealth management solutions.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Types of PMS in India</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Discretionary PMS</span> – The portfolio manager has full control
                      over investment decisions, making trades on behalf of the client.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Non-Discretionary PMS</span> – The portfolio manager provides
                      investment advice, but the final decision rests with the investor.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Advisory PMS</span> – Investors receive investment recommendations
                      but execute trades on their own.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="rounded-lg overflow-hidden mb-8">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Portfolio Management"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Sample PMS Allocation</h3>
                <PieChart3D data={pmsAllocationData} height={300} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={featuresRef} className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Benefits of PMS</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Why high-net-worth individuals choose Portfolio Management Services
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="feature-card overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Top PMS Providers in India</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              India has a thriving PMS ecosystem, with several reputed firms offering high-quality portfolio management
              services
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Motilal Oswal PMS",
                description:
                  "Known for their 'Buy Right, Sit Tight' investment philosophy focusing on quality businesses.",
                image:
                  "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
              },
              {
                name: "ASK PMS",
                description:
                  "Focuses on long-term wealth creation through high-quality businesses with strong growth potential.",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
              },
              {
                name: "Marcellus PMS",
                description:
                  "Specializes in identifying companies with strong competitive advantages and consistent growth.",
                image:
                  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                name: "Alchemy PMS",
                description:
                  "Employs a research-driven approach to identify undervalued companies with strong fundamentals.",
                image:
                  "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80",
              },
              {
                name: "Abakkus PMS",
                description:
                  "Founded by Sunil Singhania, focuses on identifying emerging opportunities across market caps.",
                image:
                  "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                name: "Sundaram PMS",
                description:
                  "Leverages the Sundaram Group's extensive research capabilities to deliver consistent returns.",
                image:
                  "https://images.unsplash.com/photo-1642543348745-775d77351ac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
            ].map((provider, index) => (
              <Card key={index} className="overflow-hidden hover-lift">
                <div className="h-48 overflow-hidden">
                  <img
                    src={provider.image || "/placeholder.svg"}
                    alt={provider.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{provider.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{provider.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="#">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section ref={comparisonRef} className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">PMS vs. Mutual Funds</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Understanding the key differences between PMS and mutual funds
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-lg border bg-white shadow-sm">
            <div className="grid grid-cols-3 border-b">
              <div className="border-r p-4 font-medium">Feature</div>
              <div className="border-r p-4 font-medium">PMS</div>
              <div className="p-4 font-medium">Mutual Funds</div>
            </div>
            {[
              {
                feature: "Minimum Investment",
                pms: "₹50 lakhs",
                mf: "As low as ₹500",
              },
              {
                feature: "Customization",
                pms: "High",
                mf: "Low",
              },
              {
                feature: "Investment Control",
                pms: "Investor & Manager",
                mf: "Fund Manager",
              },
              {
                feature: "Transparency",
                pms: "High (direct ownership)",
                mf: "Medium (pooled ownership)",
              },
              {
                feature: "Fees Structure",
                pms: "Fixed & Performance-Based",
                mf: "Expense Ratio-Based",
              },
              {
                feature: "Tax Implications",
                pms: "Individual transaction level",
                mf: "At redemption",
              },
              {
                feature: "Reporting",
                pms: "Detailed & Frequent",
                mf: "Standardized",
              },
              {
                feature: "Suitability",
                pms: "HNIs & Sophisticated Investors",
                mf: "All Investor Types",
              },
            ].map((row, index) => (
              <div key={index} className={`grid grid-cols-3 ${index !== 7 ? "border-b" : ""}`}>
                <div className="border-r p-4">{row.feature}</div>
                <div className="border-r p-4">{row.pms}</div>
                <div className="p-4">{row.mf}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={faqRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Frequently Asked Questions (FAQs)</h2>
            <p className="mt-4 text-lg text-muted-foreground">Common questions about Portfolio Management Services</p>
          </div>
          <div className="mt-12 mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="faq-item">
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-bg text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Start Your PMS Investment Journey?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Schedule a consultation with our investment experts to discuss how our PMS solutions can help you achieve
              your financial goals.
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
