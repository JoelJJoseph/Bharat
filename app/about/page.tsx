"use client"

import React from "react"
import { ArrowRight, TrendingUp, Shield, Users, Briefcase, BarChart2, LineChart } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Import components from the main app
import AnimationWrapper from "@/components/animation-wrapper"
import TextReveal from "@/components/text-reveal"

// Types for the AnimatedButton component
interface AnimatedButtonProps {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "default" | "lg"
  className?: string
  showArrow?: boolean
}

// Memoized AnimatedButton component for better performance
const AnimatedButton = React.memo(function AnimatedButton({
  href,
  children,
  variant = "primary",
  size = "default",
  className = "",
  showArrow = true,
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  const baseStyles =
    "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 overflow-hidden"

  const sizeStyles = {
    default: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  }

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25",
    secondary: "bg-white text-blue-600 hover:bg-blue-50",
    outline: "border-2 border-white text-white hover:bg-white/10",
  }

  return (
    <Link
      href={href}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], "group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Button content */}
      <span className="relative z-10 flex items-center">
        {children}
        {showArrow && (
          <ArrowRight
            className={cn("ml-2 h-4 w-4 transition-transform duration-300", isHovered ? "translate-x-1" : "")}
          />
        )}
      </span>

      {/* Animated background */}
      <span
        className={cn(
          "absolute inset-0 z-0 rounded-full transition-all duration-300",
          variant === "primary" && "bg-blue-700 opacity-0 group-hover:opacity-100",
          variant === "secondary" && "bg-blue-50 opacity-0 group-hover:opacity-100",
          variant === "outline" && "bg-white opacity-0 group-hover:opacity-10",
        )}
      />

      {/* Glow effect */}
      <span
        className={cn(
          "absolute inset-0 -z-10 rounded-full opacity-0 blur transition-opacity duration-300 group-hover:opacity-50",
          variant === "primary" && "bg-blue-600",
          variant === "secondary" && "bg-blue-200",
          variant === "outline" && "bg-white",
        )}
      />

      {/* Ripple effect - only render when hovered for better performance */}
      {isHovered && (
        <span className="absolute inset-0 z-0">
          <span className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-10 animate-ripple"></span>
        </span>
      )}
    </Link>
  )
})

// Values data - moved outside component to prevent recreation on each render
const valuesData = [
  {
    title: "Excellence",
    description:
      "We pursue excellence in every aspect of our operations, from investment research to client service. Our team is committed to continuous learning and improvement to deliver exceptional results.",
    icon: "🏆",
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Integrity",
    description:
      "We operate with unwavering integrity and transparency in all our dealings. Our clients' interests always come first, and we maintain the highest ethical standards in the industry.",
    icon: "⚖️",
    color: "from-indigo-500 to-indigo-700",
  },
  {
    title: "Innovation",
    description:
      "We constantly innovate to stay ahead of market trends and provide cutting-edge investment solutions. Our proprietary research methodologies and technology platforms give our clients a competitive edge.",
    icon: "💡",
    color: "from-purple-500 to-purple-700",
  },
]

// Team data - moved outside component to prevent recreation on each render
const teamData = [
  {
    name: "Rajiv Sharma",
    position: "Founder & CEO",
    bio: "Former Head of Equity at a leading asset management company with over 20 years of experience in Indian capital markets.",
    image: "bg-gradient-to-br from-blue-400 to-blue-600",
  },
  {
    name: "Priya Mehta",
    position: "Chief Investment Officer",
    bio: "Ex-Portfolio Manager with 15+ years of experience managing multi-billion dollar portfolios across various market cycles.",
    image: "bg-gradient-to-br from-indigo-400 to-indigo-600",
  },
  {
    name: "Vikram Desai",
    position: "Head of Research",
    bio: "Renowned market analyst with expertise in quantitative research methodologies and alternative investment strategies.",
    image: "bg-gradient-to-br from-purple-400 to-purple-600",
  },
]

// Expertise data - moved outside component to prevent recreation on each render
const expertiseData = [
  {
    title: "Portfolio Management Services",
    description:
      "Our PMS offerings are designed to deliver consistent alpha through disciplined investment processes, rigorous risk management, and active portfolio monitoring. We specialize in equity-focused strategies that capitalize on India's growth story.",
  },
  {
    title: "Alternative Investment Funds",
    description:
      "Our AIF platform provides access to sophisticated investment strategies including private equity, venture capital, real estate, and structured credit opportunities that offer diversification beyond traditional asset classes.",
  },
  {
    title: "Research & Analytics",
    description:
      "Our proprietary research framework combines fundamental analysis with quantitative models to identify investment opportunities across market cycles, sectors, and themes.",
  },
  {
    title: "Wealth Advisory",
    description:
      "Beyond investment management, we provide comprehensive wealth advisory services including financial planning, tax optimization, and estate planning to help clients achieve their holistic financial objectives.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-blue-900 to-blue-800 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-900 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-700 rounded-full opacity-20 transform translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-1/4 left-0 w-1/4 h-1/4 bg-blue-700 rounded-full opacity-20 transform -translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-4xl text-center mb-16">
              <TextReveal
                as="h1"
                className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
                stagger={0.03}
              >
                <span style={{ wordSpacing: "0.2em" }}>About Bharat Alternates</span>
              </TextReveal>
              <p className="mt-6 text-xl text-blue-100 italic">
                Your trusted partner in Portfolio Management Services and Alternative Investment Funds
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <AnimationWrapper animation="slide-in-right" delay={0.1}>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-40"></div>
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-blue-800 mb-6">Our Journey</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Bharat Alternates was born from a vision to transform how high-net-worth individuals access
                      India's premium investment opportunities. Founded in 2015 by a team of seasoned investment
                      professionals with backgrounds from India's top financial institutions, we set out to create a
                      platform that combines deep market expertise with technological innovation.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      What began as a boutique advisory firm has evolved into one of India's most respected investment
                      platforms, managing over ₹5,000 crores in assets for more than 1,200 families across the country.
                      Our journey reflects our commitment to excellence, integrity, and the relentless pursuit of
                      superior returns for our clients.
                    </p>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slide-in-left" delay={0.1}>
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-6 transform hover:translate-y-[-8px] transition-all duration-500 border-l-4 border-blue-600">
                  <h2 className="text-xl font-bold text-blue-800 mb-3">Our Vision</h2>
                  <p className="text-gray-700 italic leading-relaxed">
                    "To be India's most trusted and comprehensive platform for Portfolio Management Services (PMS) and
                    Alternative Investment Funds (AIF), empowering investors with data-driven insights, expert analysis,
                    and seamless investment solutions that maximize wealth creation."
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 transform hover:translate-y-[-8px] transition-all duration-500 border-l-4 border-blue-600">
                  <h2 className="text-xl font-bold text-blue-800 mb-3">Our Mission</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our mission is to empower high-net-worth individuals to achieve their financial goals through expert
                    portfolio management and personalized investment strategies.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    We are committed to delivering superior risk-adjusted returns while maintaining the highest
                    standards of integrity, transparency, and client service.
                  </p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in" delay={0.1}>
            <div className="text-center mb-12">
              <TextReveal as="h2" className="text-3xl font-bold text-blue-800 mb-8" stagger={0.03}>
                Our Core Values
              </TextReveal>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
            {valuesData.map((value, index) => (
              <AnimationWrapper key={index} animation="scale-in" delay={0.1 + index * 0.1}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 group h-full">
                  <div className={`h-2 w-full bg-gradient-to-r ${value.color}`}></div>
                  <div className="p-6">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-center text-blue-800 mb-3">{value.title}</h3>
                    <p className="text-gray-700 text-center leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in" delay={0.1}>
            <div className="text-center mb-12">
              <TextReveal as="h2" className="text-3xl font-bold text-blue-800 mb-4" stagger={0.03}>
                Leadership Team
              </TextReveal>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Our team brings together decades of experience from India's premier financial institutions, combining
                deep market knowledge with innovative thinking.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {teamData.map((member, index) => (
              <AnimationWrapper key={index} animation="slide-up" delay={0.1 + index * 0.1}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:translate-y-[-8px] transition-all duration-500 h-full">
                  <div className={`h-32 ${member.image} flex items-center justify-center`}>
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-blue-800">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in" delay={0.1}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 max-w-6xl mx-auto">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-blue-800 mb-4 md:mb-0">Our Expertise</h2>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-200"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {expertiseData.map((item, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in" delay={0.1}>
            <div className="text-center mb-12">
              <TextReveal as="h2" className="text-3xl font-bold text-blue-800 mb-4" stagger={0.03}>
                Why Choose Bharat Alternates
              </TextReveal>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We combine deep market expertise with personalized strategies to deliver exceptional value to our
                clients.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Consistent Performance",
                description:
                  "Our strategies have consistently outperformed market benchmarks with 18-22% CAGR over the long term.",
                color: "from-blue-500 to-blue-700",
              },
              {
                icon: Shield,
                title: "Risk Management",
                description:
                  "Sophisticated risk management techniques to protect and grow your wealth in all market conditions.",
                color: "from-indigo-500 to-indigo-700",
              },
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "Seasoned investment professionals with decades of combined experience across various market cycles.",
                color: "from-purple-500 to-purple-700",
              },
              {
                icon: Briefcase,
                title: "Customized Solutions",
                description:
                  "Tailored investment strategies aligned with your financial goals, risk appetite, and time horizon.",
                color: "from-teal-500 to-teal-700",
              },
              {
                icon: BarChart2,
                title: "Transparent Reporting",
                description:
                  "Comprehensive performance reports with complete transparency on fees and investment decisions.",
                color: "from-cyan-500 to-cyan-700",
              },
              {
                icon: LineChart,
                title: "Research-Driven",
                description:
                  "In-depth research and analysis driving our investment decisions for optimal portfolio construction.",
                color: "from-sky-500 to-sky-700",
              },
            ].map((feature, index) => (
              <AnimationWrapper key={index} animation="scale-in" delay={0.1 + index * 0.1}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 group h-full">
                  <div className={`h-2 w-full bg-gradient-to-r ${feature.color}`}></div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-center text-blue-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-700 text-center leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in" delay={0.1}>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Investment Journey?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                Schedule a consultation with our investment experts to discuss how we can help you achieve your
                financial goals.
              </p>
              <AnimatedButton href="/contact" variant="secondary" size="lg">
                Schedule a Consultation
              </AnimatedButton>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </>
  )
}

