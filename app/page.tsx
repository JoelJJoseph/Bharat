"use client"

import HeroSection from "@/components/hero-section"
import { InteractiveTable } from "@/components/interactive-table"
import { CalendlyButton } from "@/components/calendly-button"
import { ContactFloat } from "@/components/contact-float"
import {
  TrendingUp,
  Shield,
  Users,
  Briefcase,
  BarChart2,
  LineChart,
  PlusCircle,
  Search,
  FileText,
  Zap,
  ClipboardCheck,
  Building2,
  Percent,
  BadgeCheck,
  MousePointer,
  MoveUpRight,
  LayoutGrid,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ParallaxSection } from "@/components/parallax-section"
import AnimationWrapper from "@/components/animation-wrapper"
import TextReveal from "@/components/text-reveal"
import { StrategyTimeline } from "@/components/strategy-timeline"
import LogoSlider from "@/components/logo-slider"
import { useCounter } from "./hooks/useCounter"
import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import SimplePieChart from "@/components/charts/simple-pie-chart"

// Types for the table data
interface TableData {
  id: string
  name: string
  returns: string
  risk: string
  minInvestment: string
}

export default function Home() {
  // Initialize interactive charts with JavaScript
  useEffect(() => {
    // Set up event listeners for Historical Performance Trend chart
    const setupHistoricalChart = () => {
      const chart = document.getElementById('historical-performance-chart');
      if (!chart) return;
      
      // Strategy path highlighting
      const strategyPaths = document.querySelectorAll('.strategy-path');
      const legendItems = document.querySelectorAll('[data-highlight]');
      
      legendItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          const targetId = item.getAttribute('data-highlight');
          if (!targetId) return;
          
          // Reset all paths
          strategyPaths.forEach(path => {
            path.classList.remove('stroke-[3]');
            path.setAttribute('stroke-opacity', '0.8');
          });
          
          // Highlight selected path
          const targetPath = document.getElementById(targetId);
          if (targetPath) {
            targetPath.classList.add('stroke-[3]');
            targetPath.setAttribute('stroke-opacity', '1');
          }
        });
      });
      
      // Animation button
      const animateBtn = document.getElementById('animate-btn');
      if (animateBtn) {
        animateBtn.addEventListener('click', () => {
          const tracker = document.getElementById('animated-tracker');
          if (tracker) {
            // Reset animation
            tracker.setAttribute('opacity', '0');
            setTimeout(() => {
              const animateElements = tracker.querySelectorAll('animate');
              animateElements.forEach(el => {
                el.setAttribute('begin', '0s');
              });
            }, 50);
          }
        });
      }
    };
    
    // Set up event listeners for Risk Assessment chart
    const setupRiskChart = () => {
      const riskStrategies = document.querySelectorAll('#risk-strategies polygon');
      const riskPoints = document.querySelectorAll('.risk-point');
      const riskTooltip = document.getElementById('risk-tooltip');
      const tooltipTitle = document.getElementById('tooltip-title');
      const tooltipValue = document.getElementById('tooltip-value');
      const profileDisplay = document.getElementById('risk-profile-display');
      
      if (!riskTooltip || !tooltipTitle || !tooltipValue || !profileDisplay) return;
      
      // Strategy polygons hover effects
      riskStrategies.forEach(polygon => {
        polygon.addEventListener('mouseenter', () => {
          // Show risk profile
          if (profileDisplay) {
            profileDisplay.textContent = polygon.getAttribute('data-risk-profile') || '';
            profileDisplay.classList.remove('opacity-0');
            profileDisplay.classList.add('opacity-100');
          }
        });
        
        polygon.addEventListener('mouseleave', () => {
          // Hide risk profile
          if (profileDisplay) {
            profileDisplay.classList.remove('opacity-100');
            profileDisplay.classList.add('opacity-0');
          }
        });
      });
      
      // Risk data points hover effects
      riskPoints.forEach(point => {
        point.addEventListener('mouseenter', (e) => {
          const rect = point.getBoundingClientRect();
          const svgRect = (point as SVGElement).ownerSVGElement?.getBoundingClientRect();
          
          if (svgRect) {
            const x = rect.left - svgRect.left + rect.width/2;
            const y = rect.top - svgRect.top + rect.height/2;
            
            // Position tooltip
            riskTooltip.setAttribute('transform', `translate(${x}, ${y - 20})`);
            
            // Update tooltip content
            tooltipTitle.textContent = point.getAttribute('data-strategy') || '';
            tooltipValue.textContent = `${point.getAttribute('data-metric')}: ${point.getAttribute('data-value')}`;
            
            // Show tooltip
            riskTooltip.classList.remove('opacity-0');
            riskTooltip.classList.add('opacity-100');
          }
        });
        
        point.addEventListener('mouseleave', () => {
          // Hide tooltip
          riskTooltip.classList.remove('opacity-100');
          riskTooltip.classList.add('opacity-0');
        });
      });
      
      // Risk strategy selector buttons
      const strategyButtons = document.querySelectorAll('[id^="show-"]');
      strategyButtons.forEach(button => {
        button.addEventListener('click', () => {
          const buttonId = button.id;
          
          // Reset all polygons
          riskStrategies.forEach(polygon => {
            polygon.setAttribute('opacity', '0.6');
          });
          
          if (buttonId === 'show-all-risks') {
            // Show all polygons
            riskStrategies.forEach(polygon => {
              polygon.setAttribute('opacity', '1');
            });
          } else {
            // Show only selected strategy
            const strategyId = buttonId.replace('show-', '');
            const targetPolygon = document.getElementById(strategyId);
            if (targetPolygon) {
              targetPolygon.setAttribute('opacity', '1');
            }
          }
        });
      });
    };
    
    // Only initialize if we're in the browser
    if (typeof window !== 'undefined') {
      // Add a small delay to ensure DOM elements are loaded
      setTimeout(() => {
        setupHistoricalChart();
        setupRiskChart();
      }, 500);
    }
    
    // Cleanup event listeners on component unmount
    return () => {
      // Add any necessary cleanup
    };
  }, []);

  // Placeholder data for the table
  const tableData: TableData[] = [
    {
      id: "1",
      name: "Equity Growth Strategy",
      returns: "18-22%",
      risk: "High",
      minInvestment: "₹5,00,000",
    },
    {
      id: "2",
      name: "Balanced Portfolio",
      returns: "12-16%",
      risk: "Moderate",
      minInvestment: "₹3,00,000",
    },
    {
      id: "3",
      name: "Debt Plus Strategy",
      returns: "8-11%",
      risk: "Low",
      minInvestment: "₹2,00,000",
    },
    {
      id: "4",
      name: "Multi-Asset Allocation",
      returns: "10-14%",
      risk: "Moderate-Low",
      minInvestment: "₹5,00,000",
    },
    {
      id: "5",
      name: "Special Situations Fund",
      returns: "22-30%",
      risk: "Very High",
      minInvestment: "₹10,00,000",
    },
  ]

  // FAQ data
  const faqData = [
    {
      question: "What is the minimum investment amount for PMS?",
      answer:
        "The minimum investment required for Portfolio Management Services (PMS) in India is ₹50 lakhs as per SEBI regulations. This threshold ensures that PMS services are tailored for high-net-worth individuals who can afford the associated risks and management fees.",
    },
    {
      question: "How is PMS different from mutual funds?",
      answer:
        "Unlike mutual funds where your money is pooled with other investors, PMS offers personalized portfolio management tailored to your specific financial goals and risk appetite. PMS provides greater transparency, customization, and direct ownership of securities, while mutual funds offer standardized products with lower minimum investments.",
    },
    {
      question: "What is the minimum investment for AIF?",
      answer:
        "Alternative Investment Funds (AIFs) in India require a minimum investment of ₹1 crore as per SEBI regulations. This higher threshold reflects the sophisticated nature of these investment vehicles and their target audience of ultra-high-net-worth individuals and institutional investors.",
    },
    {
      question: "How are PMS returns calculated?",
      answer:
        "PMS returns are typically calculated on a time-weighted basis, which measures the compound rate of growth over a specific period. This method eliminates the distorting effects of cash flows into or out of the portfolio, providing a more accurate representation of the portfolio manager's performance.",
    },
  ]

  const StatCard = ({ stat, index }: { stat: any; index: number }) => {
    const count = useCounter(stat.number, 2500) // 2.5 seconds duration

    return (
      <AnimationWrapper animation="scale-in" delay={0.1 + index * 0.1}>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
          <div
            className={`relative h-[280px] p-8 rounded-2xl border border-white/10 backdrop-blur-sm bg-gradient-to-b ${stat.gradient} 
            hover:border-white/20 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden group`}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            <div className="relative z-10">
              <div
                className="w-16 h-16 rounded-full bg-gradient-to-r from-white/10 to-white/5 flex items-center justify-center mb-6 
                backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300"
              >
                <stat.icon className="h-8 w-8 text-white/90" />
              </div>
              <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {count}+
              </div>
              <p className="text-white/80 text-lg">{stat.label}</p>
            </div>
          </div>
        </div>
      </AnimationWrapper>
    )
  }

  // Active tab state
  const [activeTab, setActiveTab] = useState(0)

  // Data for the Multi-Asset Allocation chart
  const assetAllocationData = [
    { label: "Equity", value: 45, color: "#4285F4" },
    { label: "Fixed Income", value: 30, color: "#34A853" },
    { label: "Gold", value: 10, color: "#FBBC05" },
    { label: "Int'l Equity", value: 10, color: "#9C27B0" },
    { label: "REITs", value: 5, color: "#EA4335" }
  ];

  return (
    <>
      <ContactFloat />
      <HeroSection />

      {/* Introduction Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-4xl text-center">
              <div>
                <TextReveal
                  as="h2"
                  className="inline-block text-xl sm:text-2xl md:text-3xl font-bold tracking-normal text-blue-800 leading-relaxed"
                  stagger={0.05}
                >
                  <span className="whitespace-normal sm:whitespace-nowrap">
                    India's&nbsp;Leading&nbsp;Portfolio&nbsp;Management
                  </span>
                </TextReveal>
                <TextReveal
                  as="span"
                  className="inline-block text-xl sm:text-2xl md:text-3xl font-bold tracking-normal text-blue-800 leading-relaxed mt-1 md:mt-0 md:ml-2"
                  stagger={0.05}
                >
                  <span className="whitespace-normal sm:whitespace-nowrap">
                    Services&nbsp;&amp;&nbsp;Alternative&nbsp;Investment
                  </span>
                </TextReveal>
                <TextReveal
                  as="span"
                  className="inline-block text-xl sm:text-2xl md:text-3xl font-bold tracking-normal text-blue-800 leading-relaxed mt-1 md:mt-0 md:ml-2"
                  stagger={0.05}
                >
                  <span className="whitespace-normal sm:whitespace-nowrap">
                    Fund&nbsp;Platform</span>
                </TextReveal>
              </div>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-800 leading-relaxed">
                At Bharat Alternates, we specialize in providing high-net-worth individuals and ultra-high networth
                individuals and qualified investors with access to India's top-performing Portfolio Management Services
                (PMS) and Alternative Investment Funds (AIF). Our comprehensive investment platform offers expert wealth
                management solutions, data-driven market insights, and a seamless digital investment experience tailored
                to your specific financial objectives.
              </p>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-800 leading-relaxed">
                With a proven track record in wealth creation and capital appreciation, our team of SEBI-registered
                distributors guides you through the diverse landscape of alternative investments in India, helping you
                make strategic investment decisions aligned with your risk tolerance, tax planning needs, and long-term
                financial goals.
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Strategic Wealth Management Section */}
      <section className="py-16 bg-[#2a2a72]">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-4xl text-center text-white">
              <TextReveal as="h2" className="text-3xl font-bold md:text-4xl" stagger={0.05}>
                <span style={{ wordSpacing: "0.1em" }}>Strategic&nbsp;Wealth</span>
              </TextReveal>
              <TextReveal as="span" className="text-3xl font-bold md:text-4xl" stagger={0.05}>
                <span style={{ wordSpacing: "0.1em" }}>Management</span>
              </TextReveal>
              <TextReveal as="h3" className="mt-3 text-xl font-semibold md:text-2xl" stagger={0.05}>
                <span style={{ wordSpacing: "0.1em" }}>Our&nbsp;Systematic&nbsp;Investment&nbsp;Approach</span>
              </TextReveal>
              <p className="mt-4 text-base md:text-lg text-white/90 max-w-3xl mx-auto">
                A research-backed, disciplined approach to sustainable wealth creation through strategic asset
                allocation, portfolio diversification, and professional investment management
              </p>
            </div>
          </AnimationWrapper>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <AnimationWrapper animation="scale-in" delay={0.1}>
              <div className="bg-[#343483]/50 rounded-lg p-8 text-white text-center h-full">
                <div className="bg-[#4747a1] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PlusCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Personalized Financial Assessment</h3>
                <p className="text-white/80">
                  Comprehensive evaluation of your investment goals, risk profile, and time horizon
                </p>
              </div>
            </AnimationWrapper>

            {/* Card 2 */}
            <AnimationWrapper animation="scale-in" delay={0.2}>
              <div className="bg-[#343483]/50 rounded-lg p-8 text-white text-center h-full">
                <div className="bg-[#4747a1] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Strategic Asset Allocation</h3>
                <p className="text-white/80">
                  Data-driven portfolio construction across equity, debt, and alternative investments
                </p>
              </div>
            </AnimationWrapper>

            {/* Card 3 */}
            <AnimationWrapper animation="scale-in" delay={0.3}>
              <div className="bg-[#343483]/50 rounded-lg p-8 text-white text-center h-full">
                <div className="bg-[#4747a1] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Fund Selection</h3>
                <p className="text-white/80">
                  Rigorous analysis and selection of top-performing PMS schemes and AIF categories
                </p>
              </div>
            </AnimationWrapper>

            {/* Card 4 */}
            <AnimationWrapper animation="scale-in" delay={0.4}>
              <div className="bg-[#343483]/50 rounded-lg p-8 text-white text-center h-full">
                <div className="bg-[#4747a1] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Continuous Portfolio Monitoring</h3>
                <p className="text-white/80">Regular performance tracking and market-responsive rebalancing</p>
              </div>
            </AnimationWrapper>

            {/* Card 5 */}
            <AnimationWrapper animation="scale-in" delay={0.5}>
              <div className="bg-[#343483]/50 rounded-lg p-8 text-white text-center h-full">
                <div className="bg-[#4747a1] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClipboardCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Tax-Efficient Wealth Optimization</h3>
                <p className="text-white/80">Strategies to maximize returns while minimizing tax implications</p>
              </div>
            </AnimationWrapper>

            {/* Card 6 */}
            <AnimationWrapper animation="scale-in" delay={0.6}>
              <div className="bg-[#343483]/50 rounded-lg p-8 text-white text-center h-full">
                <div className="bg-[#4747a1] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Long-term Wealth Creation</h3>
                <p className="text-white/80">
                  Focus on sustainable growth and capital appreciation through market cycles
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <StrategyTimeline />

      {/* Features Section */}
      <ParallaxSection className="py-20 bg-white" speed={0.1} direction="up">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div>
              <TextReveal
                as="h2"
                className="inline-block text-xl sm:text-2xl md:text-3xl font-bold tracking-normal text-blue-800 leading-relaxed"
                stagger={0.05}
              >
                <span style={{ wordSpacing: "0.1em" }}>Why&nbsp;Choose&nbsp;Bharat&nbsp;Alternates</span>
              </TextReveal>
            </div>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-800">
              We combine deep market expertise with personalized strategies to deliver exceptional value to our clients.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                title: "Consistent Performance",
                description:
                  "Our strategies have consistently outperformed market benchmarks with 18-22% CAGR over the long term.",
                hoverClass: "hover:bg-blue-50 hover:border-blue-300",
                iconClass: "bg-blue-100 text-blue-600",
                iconHoverClass: "group-hover:bg-blue-200 group-hover:text-blue-700",
                titleClass: "text-blue-800",
                accentClass: "bg-blue-500",
              },
              {
                icon: Shield,
                title: "Risk Management",
                description:
                  "Sophisticated risk management techniques to protect and grow your wealth in all market conditions.",
                hoverClass: "hover:bg-indigo-50 hover:border-indigo-300",
                iconClass: "bg-indigo-100 text-indigo-600",
                iconHoverClass: "group-hover:bg-indigo-200 group-hover:text-indigo-700",
                titleClass: "text-indigo-800",
                accentClass: "bg-indigo-500",
              },
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "Seasoned investment professionals with decades of combined experience across various market cycles.",
                hoverClass: "hover:bg-purple-50 hover:border-purple-300",
                iconClass: "bg-purple-100 text-purple-600",
                iconHoverClass: "group-hover:bg-purple-200 group-hover:text-purple-700",
                titleClass: "text-purple-800",
                accentClass: "bg-purple-500",
              },
              {
                icon: Briefcase,
                title: "Customized Solutions",
                description:
                  "Tailored investment strategies aligned with your financial goals, risk appetite, and time horizon.",
                hoverClass: "hover:bg-teal-50 hover:border-teal-300",
                iconClass: "bg-teal-100 text-teal-600",
                iconHoverClass: "group-hover:bg-teal-200 group-hover:text-teal-700",
                titleClass: "text-teal-800",
                accentClass: "bg-teal-500",
              },
              {
                icon: BarChart2,
                title: "Transparent Reporting",
                description:
                  "Comprehensive performance reports with complete transparency on fees and investment decisions.",
                hoverClass: "hover:bg-cyan-50 hover:border-cyan-300",
                iconClass: "bg-cyan-100 text-cyan-600",
                iconHoverClass: "group-hover:bg-cyan-200 group-hover:text-cyan-700",
                titleClass: "text-cyan-800",
                accentClass: "bg-cyan-500",
              },
              {
                icon: LineChart,
                title: "Research-Driven",
                description:
                  "In-depth research and analysis driving our investment decisions for optimal portfolio construction.",
                hoverClass: "hover:bg-sky-50 hover:border-sky-300",
                iconClass: "bg-sky-100 text-sky-600",
                iconHoverClass: "group-hover:bg-sky-200 group-hover:text-sky-700",
                titleClass: "text-sky-800",
                accentClass: "bg-sky-500",
              },
            ].map((feature, index) => (
              <AnimationWrapper key={index} animation="scale-in" delay={index * 0.1}>
                <Card
                  className={`feature-card relative overflow-hidden transition-all duration-500 
                  hover:-translate-y-2 hover:shadow-xl group border border-gray-200 ${feature.hoverClass}`}
                >
                  <CardHeader className="relative z-10">
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full 
                      transition-all duration-500 group-hover:scale-110 ${feature.iconClass} ${feature.iconHoverClass}`}
                    >
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className={`transition-all duration-500 ${feature.titleClass}`}>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-800 group-hover:text-gray-900 transition-colors duration-500">
                      {feature.description}
                    </p>
                  </CardContent>
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${feature.accentClass}`}
                  ></div>
                </Card>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Interactive Table Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="slide-up">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <TextReveal
                as="h2"
                className="text-xl sm:text-2xl md:text-3xl font-bold tracking-normal text-blue-800 leading-relaxed"
                stagger={0.05}
              >
                <span style={{ wordSpacing: "0.1em" }}>High&nbsp;Performance&nbsp;Investment&nbsp;Strategies</span>
              </TextReveal>
              <p className="mt-4 text-base sm:text-lg text-gray-800">
                Explore our range of premium investment solutions designed to meet diverse financial goals and maximize
                returns
              </p>
            </div>
          </AnimationWrapper>

          <div className="mx-auto max-w-5xl">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              {/* Tabs Navigation */}
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                  <button 
                    className={`py-4 px-6 font-medium text-sm sm:text-base ${
                      activeTab === 0 
                        ? "text-blue-600 border-b-2 border-blue-500" 
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab(0)}
                  >
                    Performance Overview
                  </button>
                  <button 
                    className={`py-4 px-6 font-medium text-sm sm:text-base ${
                      activeTab === 1 
                        ? "text-blue-600 border-b-2 border-blue-500" 
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab(1)}
                  >
                    Historical Analysis
                  </button>
                  <button 
                    className={`py-4 px-6 font-medium text-sm sm:text-base ${
                      activeTab === 2 
                        ? "text-blue-600 border-b-2 border-blue-500" 
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab(2)}
                  >
                    Risk Assessment
                  </button>
                </nav>
              </div>

              {/* Main Content Area */}
              <div className="p-6 md:p-8">
                {/* Performance Overview Tab */}
                {activeTab === 0 && (
                  <>
                {/* Strategy Selection Pills */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                  {tableData.map((strategy, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        index === 0 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      {strategy.name}
                    </button>
                  ))}
                </div>
                    
                    {/* Investment Strategy Comparison */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                      <div className="col-span-1 lg:col-span-2">
                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-blue-800">Investment Strategy Comparison</h3>
                            <div className="relative">
                              <input
                                type="text"
                                placeholder="Search strategies..."
                                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                          </div>
                          <div className="overflow-x-auto">
                            <InteractiveTable
                              data={tableData as unknown as Record<string, string>[]}
                              columns={[
                                { header: "Strategy Name", accessor: "name" },
                                { header: "Historical Returns", accessor: "returns" },
                                { header: "Risk Profile", accessor: "risk" },
                                { header: "Min. Investment", accessor: "minInvestment" },
                              ]}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100 p-5 h-full">
                          <h3 className="text-lg font-semibold mb-4 text-blue-800">Strategy Highlights</h3>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <span className="text-blue-600 mr-2 mt-1 text-lg">•</span>
                              <span>
                                <strong className="text-blue-800">Equity Growth:</strong> Focused on capital appreciation
                                through carefully selected high-growth potential stocks
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-600 mr-2 mt-1 text-lg">•</span>
                              <span>
                                <strong className="text-blue-800">Balanced Portfolio:</strong> Optimal mix of equity and
                                debt instruments for moderate growth with reduced volatility
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-600 mr-2 mt-1 text-lg">•</span>
                              <span>
                                <strong className="text-blue-800">Special Situations:</strong> Targets unique investment
                                opportunities like mergers, acquisitions, and restructuring
                              </span>
                            </li>
                          </ul>
                          <div className="mt-6 text-center">
                            <button className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
                              Download detailed prospectus
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                
                {/* Interactive Performance Visualization */}
                <div className="mb-10">
                  <h3 className="text-lg font-semibold mb-6 text-blue-800 text-center">
                        Performance Comparison (2021-2024)
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Line Chart - Historical Performance */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                      <h4 className="text-sm font-medium text-gray-700 mb-4">Historical Performance Trend</h4>
                      <div className="relative h-64">
                        {/* Y-axis labels */}
                        <div className="absolute left-0 inset-y-0 flex flex-col justify-between text-xs text-gray-500 pr-2">
                          <span>30%</span>
                          <span>24%</span>
                          <span>18%</span>
                          <span>12%</span>
                          <span>6%</span>
                          <span>0%</span>
                        </div>

                        {/* Chart Area */}
                        <div className="absolute left-8 right-0 inset-y-0">
                          {/* X-axis labels */}
                          <div className="absolute bottom-0 inset-x-0 flex justify-between text-xs text-gray-500 pt-1">
                            <span>2021</span>
                            <span>2022</span>
                            <span>2023</span>
                                <span>2024</span>
                          </div>

                          {/* Grid lines */}
                          <div className="absolute inset-0 grid grid-rows-5 h-[calc(100%-20px)]">
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className="border-t border-gray-100"></div>
                            ))}
                          </div>

                          {/* SVG containing all strategy lines */}
                          <svg
                            className="absolute inset-0 h-[calc(100%-20px)]"
                            preserveAspectRatio="none"
                            viewBox="0 0 100 100"
                                id="historical-performance-chart"
                              >
                                {/* Interactive areas that highlight on hover - group these before the actual paths */}
                                <g className="interactive-areas">
                                  {/* Equity Growth highlight area */}
                                  <path
                                    d="M0,40 L20,32 L40,45 L60,25 L80,20 L100,15 L100,100 L0,100 Z"
                                    fill="rgba(59, 130, 246, 0)"
                                    stroke="none"
                                    className="hover-trigger"
                                    data-strategy="equity"
                                  />
                                  {/* Balanced Portfolio highlight area */}
                                  <path
                                    d="M0,50 L20,45 L40,40 L60,38 L80,35 L100,32 L100,100 L0,100 Z"
                                    fill="rgba(16, 185, 129, 0)"
                                    stroke="none"
                                    className="hover-trigger"
                                    data-strategy="balanced"
                                  />
                                  {/* Special Situations highlight area */}
                                  <path
                                    d="M0,35 L20,20 L40,30 L60,15 L80,10 L100,5 L100,100 L0,100 Z"
                                    fill="rgba(220, 38, 38, 0)"
                                    stroke="none"
                                    className="hover-trigger"
                                    data-strategy="special"
                                  />
                                </g>

                            {/* Equity Growth Strategy */}
                            <path
                              d="M0,40 L20,32 L40,45 L60,25 L80,20 L100,15"
                              fill="none"
                              stroke="rgba(59, 130, 246, 0.8)"
                              strokeWidth="2"
                                  className="transition-all duration-1000 hover:stroke-blue-600 hover:stroke-[3] strategy-path"
                                  id="equity-path"
                            />
                            <path
                                  d="M0,40 L20,32 L40,45 L60,25 L80,20 L100,15 L100,100 L0,100 Z"
                              fill="rgba(59, 130, 246, 0.1)"
                              stroke="none"
                                  className="transition-all duration-1000 hover:fill-blue-500/20 strategy-area"
                                  id="equity-area"
                                />
                                
                                {/* Interactive data points for Equity Growth with labels */}
                                <g className="data-points equity-points">
                                  <circle cx="0" cy="40" r="3" fill="rgb(59, 130, 246)" className="cursor-pointer hover:r-5 transition-all duration-300">
                                    <title>2021: 15.8%</title>
                                  </circle>
                                  <circle cx="20" cy="32" r="3" fill="rgb(59, 130, 246)" className="cursor-pointer hover:r-5 transition-all duration-300">
                                    <title>2022: 17.2%</title>
                                  </circle>
                                  <circle cx="40" cy="45" r="3" fill="rgb(59, 130, 246)" className="cursor-pointer hover:r-5 transition-all duration-300">
                                    <title>2023: 14.4%</title>
                                  </circle>
                                  <circle cx="60" cy="25" r="3" fill="rgb(59, 130, 246)" className="cursor-pointer hover:r-5 transition-all duration-300">
                                    <title>2024: 19.6%</title>
                                  </circle>
                                  <circle cx="80" cy="20" r="3" fill="rgb(59, 130, 246)" className="cursor-pointer hover:r-5 transition-all duration-300">
                                    <title>Q1 2024: 20.3%</title>
                                  </circle>
                                  <circle cx="100" cy="15" r="3" fill="rgb(59, 130, 246)" className="cursor-pointer hover:r-5 transition-all duration-300">
                                    <title>Q2 2024: 21.5%</title>
                                  </circle>
                                </g>
                                
                                {/* Enhanced tooltips that show on hover */}
                                <g className="tooltips hidden" id="equity-tooltips">
                                  <rect x="65" y="5" width="30" height="15" rx="2" fill="white" stroke="#3b82f6" strokeWidth="1" />
                                  <text x="80" y="15" textAnchor="middle" fontSize="10" fill="#1e40af" fontWeight="bold">21.5%</text>
                                </g>
                            
                            {/* Balanced Portfolio */}
                            <path
                              d="M0,50 L20,45 L40,40 L60,38 L80,35 L100,32"
                              fill="none"
                              stroke="rgba(16, 185, 129, 0.8)"
                              strokeWidth="2"
                                  className="transition-all duration-1000 hover:stroke-green-600 hover:stroke-[3] strategy-path"
                                  id="balanced-path"
                            />
                            
                            {/* Debt Plus Strategy */}
                              <path
                              d="M0,60 L20,58 L40,55 L60,53 L80,52 L100,58"
                              fill="none"
                              stroke="rgba(245, 158, 11, 0.8)"
                              strokeWidth="2"
                                  className="transition-all duration-1000 hover:stroke-amber-600 hover:stroke-[3] strategy-path"
                                  id="debt-path"
                            />
                            
                            {/* Multi-Asset Allocation */}
                              <path
                              d="M0,52 L20,48 L40,50 L60,45 L80,40 L100,42"
                              fill="none"
                              stroke="rgba(124, 58, 237, 0.8)"
                              strokeWidth="2"
                                  className="transition-all duration-1000 hover:stroke-purple-600 hover:stroke-[3] strategy-path"
                                  id="multi-path"
                            />
                            
                            {/* Special Situations Fund */}
                              <path
                              d="M0,35 L20,20 L40,30 L60,15 L80,10 L100,5"
                              fill="none"
                              stroke="rgba(220, 38, 38, 0.8)"
                              strokeWidth="2"
                                  className="transition-all duration-1000 hover:stroke-red-600 hover:stroke-[3] strategy-path"
                                  id="special-path"
                            />

                            {/* Benchmark line */}
                            <path
                              d="M0,50 L20,48 L40,52 L60,45 L80,42 L100,38"
                              fill="none"
                              stroke="rgba(156, 163, 175, 0.8)"
                              strokeWidth="2"
                              strokeDasharray="4"
                                  className="transition-all duration-1000 hover:stroke-gray-600 strategy-path"
                                  id="benchmark-path"
                                />

                                {/* Animation elements */}
                                <circle id="animated-tracker" r="4" fill="#3b82f6" className="opacity-0">
                                  <animate attributeName="cx" from="0" to="100" dur="3s" begin="0s" fill="freeze" />
                                  <animate attributeName="cy" values="40;32;45;25;20;15" dur="3s" begin="0s" fill="freeze" />
                                  <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0s" fill="freeze" />
                                  <animate attributeName="opacity" from="1" to="0" dur="0.3s" begin="2.7s" fill="freeze" />
                                </circle>
                          </svg>

                              {/* Interactive controls */}
                              <div className="absolute top-2 right-2 flex flex-col space-y-1">
                                <button 
                                  className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-800 px-2 py-1 rounded transition-colors duration-300"
                                  data-highlight="equity-path"
                                >
                                  Equity Growth
                                </button>
                                <button 
                                  className="text-xs bg-green-100 hover:bg-green-200 text-green-800 px-2 py-1 rounded transition-colors duration-300"
                                  data-highlight="balanced-path"
                                >
                                  Balanced
                                </button>
                                <button 
                                  className="text-xs bg-red-100 hover:bg-red-200 text-red-800 px-2 py-1 rounded transition-colors duration-300"
                                  data-highlight="special-path"
                                >
                                  Special Sit.
                                </button>
                                <button 
                                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-2 py-1 rounded transition-colors duration-300 mt-2"
                                  id="animate-btn"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  Animate
                                </button>
                              </div>
                        </div>
                      </div>

                          {/* Legend with interactive features */}
                      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs mt-2">
                            <div className="flex items-center cursor-pointer hover:bg-blue-50 px-2 py-1 rounded transition-colors" data-highlight="equity-path">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                          <span>Equity Growth</span>
                        </div>
                            <div className="flex items-center cursor-pointer hover:bg-green-50 px-2 py-1 rounded transition-colors" data-highlight="balanced-path">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                          <span>Balanced</span>
                        </div>
                            <div className="flex items-center cursor-pointer hover:bg-amber-50 px-2 py-1 rounded transition-colors" data-highlight="debt-path">
                          <div className="w-3 h-3 bg-amber-500 rounded-full mr-1"></div>
                          <span>Debt Plus</span>
                        </div>
                            <div className="flex items-center cursor-pointer hover:bg-purple-50 px-2 py-1 rounded transition-colors" data-highlight="multi-path">
                          <div className="w-3 h-3 bg-purple-500 rounded-full mr-1"></div>
                          <span>Multi-Asset</span>
                        </div>
                            <div className="flex items-center cursor-pointer hover:bg-red-50 px-2 py-1 rounded transition-colors" data-highlight="special-path">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                          <span>Special Situations</span>
                        </div>
                            <div className="flex items-center cursor-pointer hover:bg-gray-50 px-2 py-1 rounded transition-colors" data-highlight="benchmark-path">
                          <div className="w-3 h-3 bg-gray-400 rounded-full mr-1"></div>
                          <span>Benchmark (Nifty 50)</span>
                        </div>
                      </div>
                    </div>

                        {/* Line Graph - Strategy Comparison 2024 */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                          <h4 className="text-sm font-medium text-gray-700 mb-4">Strategy Comparison (2024)</h4>
                      <div className="relative h-64">
                        {/* Y-axis labels */}
                        <div className="absolute left-0 inset-y-0 flex flex-col justify-between text-xs text-gray-500 pr-2">
                              <span>35%</span>
                              <span>28%</span>
                              <span>21%</span>
                              <span>14%</span>
                              <span>7%</span>
                          <span>0%</span>
                        </div>

                        {/* Chart Area */}
                        <div className="absolute left-8 right-0 inset-y-0">
                              {/* X-axis labels */}
                              <div className="absolute bottom-0 inset-x-0 flex justify-between text-xs text-gray-500 pt-1">
                                <span>Q1 2024</span>
                                <span>Q2 2024</span>
                                <span>Q3 2024</span>
                                <span>Q4 2024</span>
                              </div>

                          {/* Grid lines */}
                          <div className="absolute inset-0 grid grid-rows-5 h-[calc(100%-20px)]">
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className="border-t border-gray-100"></div>
                            ))}
                          </div>

                              {/* SVG containing all strategy lines */}
                              <svg
                                className="absolute inset-0 h-[calc(100%-20px)]"
                                preserveAspectRatio="none"
                                viewBox="0 0 100 100"
                              >
                                {/* Equity Growth Strategy */}
                                <path
                                  d="M0,25 L33,20 L66,23 L100,15"
                                  fill="none"
                                  stroke="rgba(59, 130, 246, 0.8)"
                                  strokeWidth="2"
                                  className="transition-all duration-500 hover:stroke-blue-600 hover:stroke-[3]"
                                />
                                
                                {/* Interactive data points for Equity Growth */}
                                <circle cx="0" cy="25" r="3" fill="rgb(59, 130, 246)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q1: 25.5%</title>
                                </circle>
                                <circle cx="33" cy="20" r="3" fill="rgb(59, 130, 246)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q2: 28.0%</title>
                                </circle>
                                <circle cx="66" cy="23" r="3" fill="rgb(59, 130, 246)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q3: 26.5%</title>
                                </circle>
                                <circle cx="100" cy="15" r="3" fill="rgb(59, 130, 246)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q4: 30.5%</title>
                                </circle>
                                
                                {/* Balanced Portfolio */}
                                <path
                                  d="M0,38 L33,35 L66,40 L100,33"
                                  fill="none"
                                  stroke="rgba(16, 185, 129, 0.8)"
                                  strokeWidth="2"
                                  className="transition-all duration-500 hover:stroke-green-600 hover:stroke-[3]"
                                />
                                
                                {/* Interactive data points for Balanced */}
                                <circle cx="0" cy="38" r="3" fill="rgb(16, 185, 129)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q1: 19.5%</title>
                                </circle>
                                <circle cx="33" cy="35" r="3" fill="rgb(16, 185, 129)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q2: 21.0%</title>
                                </circle>
                                <circle cx="66" cy="40" r="3" fill="rgb(16, 185, 129)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q3: 18.0%</title>
                                </circle>
                                <circle cx="100" cy="33" r="3" fill="rgb(16, 185, 129)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q4: 22.5%</title>
                                </circle>
                                
                                {/* Debt Plus Strategy */}
                                <path
                                  d="M0,55 L33,52 L66,58 L100,50"
                                  fill="none"
                                  stroke="rgba(245, 158, 11, 0.8)"
                                  strokeWidth="2"
                                  className="transition-all duration-500 hover:stroke-amber-600 hover:stroke-[3]"
                                />
                                
                                {/* Interactive data points for Debt Plus */}
                                <circle cx="0" cy="55" r="3" fill="rgb(245, 158, 11)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q1: 15.0%</title>
                                </circle>
                                <circle cx="33" cy="52" r="3" fill="rgb(245, 158, 11)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q2: 16.0%</title>
                                </circle>
                                <circle cx="66" cy="58" r="3" fill="rgb(245, 158, 11)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q3: 14.0%</title>
                                </circle>
                                <circle cx="100" cy="50" r="3" fill="rgb(245, 158, 11)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q4: 17.0%</title>
                                </circle>
                                
                                {/* Multi-Asset Allocation */}
                                <path
                                  d="M0,42 L33,44 L66,41 L100,37"
                                  fill="none"
                                  stroke="rgba(124, 58, 237, 0.8)"
                            strokeWidth="2"
                                  className="transition-all duration-500 hover:stroke-purple-600 hover:stroke-[3]"
                                />
                                
                                {/* Interactive data points for Multi-Asset */}
                                <circle cx="0" cy="42" r="3" fill="rgb(124, 58, 237)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q1: 18.0%</title>
                                </circle>
                                <circle cx="33" cy="44" r="3" fill="rgb(124, 58, 237)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q2: 17.0%</title>
                                </circle>
                                <circle cx="66" cy="41" r="3" fill="rgb(124, 58, 237)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q3: 18.5%</title>
                                </circle>
                                <circle cx="100" cy="37" r="3" fill="rgb(124, 58, 237)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q4: 20.5%</title>
                                </circle>
                          
                          {/* Special Situations Fund */}
                                <path
                                  d="M0,18 L33,12 L66,15 L100,5"
                                  fill="none"
                            stroke="rgba(220, 38, 38, 0.8)" 
                            strokeWidth="2"
                                  className="transition-all duration-500 hover:stroke-red-600 hover:stroke-[3]"
                                />
                                
                                {/* Interactive data points for Special Situations */}
                                <circle cx="0" cy="18" r="3" fill="rgb(220, 38, 38)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q1: 29.0%</title>
                                </circle>
                                <circle cx="33" cy="12" r="3" fill="rgb(220, 38, 38)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q2: 32.0%</title>
                                </circle>
                                <circle cx="66" cy="15" r="3" fill="rgb(220, 38, 38)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q3: 30.5%</title>
                                </circle>
                                <circle cx="100" cy="5" r="3" fill="rgb(220, 38, 38)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q4: 35.0%</title>
                                </circle>

                                {/* Benchmark line */}
                                <path
                                  d="M0,48 L33,45 L66,46 L100,42"
                                  fill="none"
                                  stroke="rgba(156, 163, 175, 0.8)"
                            strokeWidth="2"
                            strokeDasharray="4"
                                  className="transition-all duration-500 hover:stroke-gray-600"
                          />
                                
                                {/* Interactive circle for Benchmark */}
                                <circle cx="100" cy="42" r="3" fill="rgb(156, 163, 175)" className="cursor-pointer hover:r-4 transition-all duration-300">
                                  <title>Q4: 17.5%</title>
                                </circle>
                        </svg>
                              
                              {/* Interactive overlay buttons to highlight specific lines */}
                              <div className="absolute top-2 right-2 flex flex-col space-y-1">
                                <button className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-800 px-2 py-1 rounded transition-colors duration-300" 
                                        onMouseOver={() => {/* Highlight line logic would go here */}}>
                                  Equity Growth
                                </button>
                                <button className="text-xs bg-green-100 hover:bg-green-200 text-green-800 px-2 py-1 rounded transition-colors duration-300">
                                  Balanced
                                </button>
                                <button className="text-xs bg-amber-100 hover:bg-amber-200 text-amber-800 px-2 py-1 rounded transition-colors duration-300">
                                  Debt Plus
                                </button>
                                <button className="text-xs bg-purple-100 hover:bg-purple-200 text-purple-800 px-2 py-1 rounded transition-colors duration-300">
                                  Multi-Asset
                                </button>
                                <button className="text-xs bg-red-100 hover:bg-red-200 text-red-800 px-2 py-1 rounded transition-colors duration-300">
                                  Special Sit.
                                </button>
                                        </div>
                                      </div>
                                      </div>
                        
                        {/* Legend */}
                          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs mt-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                            <span>Equity Growth</span>
                          </div>
                          <div className="flex items-center">
                              <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                              <span>Balanced</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-amber-500 rounded-full mr-1"></div>
                            <span>Debt Plus</span>
                          </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-purple-500 rounded-full mr-1"></div>
                              <span>Multi-Asset</span>
                        </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                              <span>Special Situations</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-gray-400 rounded-full mr-1"></div>
                              <span>Benchmark (Nifty 50)</span>
                      </div>
                    </div>
                    
                          {/* Performance metrics below the chart */}
                          <div className="mt-4 grid grid-cols-5 gap-2 text-xs text-center">
                            <div className="rounded-md bg-blue-50 p-2">
                              <div className="font-semibold text-blue-700">Equity Growth</div>
                              <div className="text-blue-900 font-bold text-sm mt-1">28.5%</div>
                              <div className="text-blue-600 mt-1">+11.3% vs benchmark</div>
                                </div>
                            <div className="rounded-md bg-green-50 p-2">
                              <div className="font-semibold text-green-700">Balanced</div>
                              <div className="text-green-900 font-bold text-sm mt-1">21.2%</div>
                              <div className="text-green-600 mt-1">+4.0% vs benchmark</div>
                              </div>
                            <div className="rounded-md bg-amber-50 p-2">
                              <div className="font-semibold text-amber-700">Debt Plus</div>
                              <div className="text-amber-900 font-bold text-sm mt-1">16.7%</div>
                              <div className="text-amber-600 mt-1">-0.5% vs benchmark</div>
                            </div>
                            <div className="rounded-md bg-purple-50 p-2">
                              <div className="font-semibold text-purple-700">Multi-Asset</div>
                              <div className="text-purple-900 font-bold text-sm mt-1">19.8%</div>
                              <div className="text-purple-600 mt-1">+2.6% vs benchmark</div>
                            </div>
                            <div className="rounded-md bg-red-50 p-2">
                              <div className="font-semibold text-red-700">Special Sit.</div>
                              <div className="text-red-900 font-bold text-sm mt-1">32.3%</div>
                              <div className="text-red-600 mt-1">+15.1% vs benchmark</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Risk Assessment Tab */}
                {activeTab === 1 && (
                  <>
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-blue-800 text-center">
                        Historical Performance Analysis (2020-2024)
                      </h3>
                      <p className="text-gray-600 text-center max-w-4xl mx-auto mb-8">
                        Comprehensive analysis of our investment strategies' performance over recent years, focusing on post-pandemic recovery and current market conditions.
                      </p>
                      
                      {/* Removed the Long-term Performance Trajectory chart */}
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* CAGR Comparison */}
                        <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                          <h4 className="font-medium text-gray-800 mb-4">CAGR Comparison (2020-2024)</h4>
                          <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                              <thead>
                                <tr>
                                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Strategy</th>
                                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">1-Year</th>
                                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">3-Year</th>
                                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">5-Year (Post-COVID)</th>
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50">
                                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Equity Growth</td>
                                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">28.7%</td>
                                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">23.8%</td>
                                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">20.9%</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Balanced Portfolio</td>
                                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">20.3%</td>
                                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">17.5%</td>
                                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">16.2%</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Special Situations</td>
                                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">33.6%</td>
                                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">26.2%</td>
                                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">24.5%</td>
                                </tr>
                                <tr className="hover:bg-gray-50 bg-gray-50">
                                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Benchmark</td>
                                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">16.8%</td>
                                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">14.8%</td>
                                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">12.1%</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        
                        {/* Strategy Performance Distribution */}
                        <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                          <h4 className="font-medium text-gray-800 mb-4">Post-Pandemic Recovery Analysis</h4>
                          <div className="h-64 relative">
                            <svg className="w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
                              {/* Background grid */}
                              <g className="grid">
                                {[0, 50, 100, 150, 200].map((y, i) => (
                                  <line key={i} x1="0" y1={y} x2="300" y2={y} stroke="#f1f5f9" strokeWidth="1" />
                                ))}
                                {[0, 60, 120, 180, 240, 300].map((x, i) => (
                                  <line key={i} x1={x} y1="0" x2={x} y2="200" stroke="#f1f5f9" strokeWidth="1" />
                                ))}
                              </g>
                              
                              {/* Recovery paths from 2020 lows */}
                              {/* X-axis represents time from COVID bottom, Y-axis is % recovery */}
                            <path 
                                d="M0,180 L60,120 L120,90 L180,70 L240,50 L300,30" 
                                fill="none"
                                stroke="rgba(59,130,246,0.8)" 
                                strokeWidth="2"
                              />
                              
                            <path 
                                d="M0,180 L60,140 L120,110 L180,95 L240,80 L300,65" 
                                fill="none"
                                stroke="rgba(16,185,129,0.8)" 
                                strokeWidth="2"
                              />
                              
                            <path 
                                d="M0,180 L60,110 L120,80 L180,55 L240,35 L300,20" 
                                fill="none"
                                stroke="rgba(220,38,38,0.8)" 
                                strokeWidth="2"
                              />
                              
                            <path 
                                d="M0,180 L60,150 L120,130 L180,110 L240,100 L300,85" 
                                fill="none"
                                stroke="rgba(148,163,184,0.8)" 
                                strokeWidth="2"
                                strokeDasharray="4,2"
                              />
                              
                              {/* Recovery milestones */}
                              <line x1="60" y1="0" x2="60" y2="200" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4,2" />
                              <line x1="180" y1="0" x2="180" y2="200" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4,2" />
                              <line x1="300" y1="0" x2="300" y2="200" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4,2" />
                              
                              {/* X-axis labels */}
                              <text x="0" y="195" textAnchor="middle" fontSize="10" fill="#64748b">COVID</text>
                              <text x="60" y="195" textAnchor="middle" fontSize="10" fill="#64748b">+6M</text>
                              <text x="120" y="195" textAnchor="middle" fontSize="10" fill="#64748b">+12M</text>
                              <text x="180" y="195" textAnchor="middle" fontSize="10" fill="#64748b">+24M</text>
                              <text x="240" y="195" textAnchor="middle" fontSize="10" fill="#64748b">+36M</text>
                              <text x="300" y="195" textAnchor="middle" fontSize="10" fill="#64748b">+48M</text>
                              
                              {/* Data points */}
                              <circle cx="0" cy="180" r="3" fill="rgba(59,130,246,0.9)" />
                              <circle cx="300" cy="30" r="3" fill="rgba(59,130,246,0.9)" />
                              
                              <circle cx="0" cy="180" r="3" fill="rgba(220,38,38,0.9)" />
                              <circle cx="300" cy="20" r="3" fill="rgba(220,38,38,0.9)" />
                              
                              {/* Benchmark recovery level */}
                              <line x1="0" y1="100" x2="300" y2="100" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2,2" />
                              <text x="5" y="100" textAnchor="start" fontSize="8" fill="#64748b">Pre-COVID Level</text>
                        </svg>
                            
                            <div className="absolute top-0 left-0 text-xs text-gray-500">Recovery %</div>
                            <div className="absolute bottom-0 w-full text-center text-xs text-gray-500">Time from 2020 Bottom</div>
                      </div>
                          <div className="mt-2 flex justify-center space-x-4">
                            <div className="flex items-center">
                              <span className="block w-3 h-3 bg-blue-500 rounded-full mr-1"></span>
                              <span className="text-xs text-gray-600">Equity Growth</span>
                    </div>
                            <div className="flex items-center">
                              <span className="block w-3 h-3 bg-emerald-500 rounded-full mr-1"></span>
                              <span className="text-xs text-gray-600">Balanced Portfolio</span>
                  </div>
                            <div className="flex items-center">
                              <span className="block w-3 h-3 bg-red-500 rounded-full mr-1"></span>
                              <span className="text-xs text-gray-600">Special Situations</span>
                        </div>
                            <div className="flex items-center">
                              <span className="block w-6 h-0.5 bg-gray-400 border-dashed mr-1"></span>
                              <span className="text-xs text-gray-600">Benchmark</span>
                          </div>
                                    </div>
                                  </div>
                                  </div>
                      
                      {/* Disclaimer */}
                      <div className="text-sm text-gray-600 text-center">
                        <p>
                          * Data covers the period from March 2020 to June 2024, focusing on performance during and after the COVID-19 pandemic.
                          Past performance is not indicative of future results. Investment strategies are subject to market risks.
                        </p>
                            </div>
                          </div>
                  </>
                )}

                {/* Risk Assessment Tab */}
                {activeTab === 2 && (
                  <div className="space-y-8">
                    <h3 className="text-lg font-semibold text-blue-800 text-center">
                      Comprehensive Risk Analysis (2024)
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Advanced Radar Chart for Risk Metrics */}
                      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                        <div className="mb-4">
                          <h4 className="text-base font-medium text-gray-900 mb-1">Multi-Dimensional Risk Profile</h4>
                          <p className="text-sm text-gray-600">Key risk metrics across different investment strategies</p>
                          </div>

                        <div className="relative h-80 flex items-center justify-center">
                          {/* SVG Radar Chart */}
                          <svg width="100%" height="100%" viewBox="-125 -125 250 250" className="risk-assessment-chart">
                            {/* Background circles and grid */}
                            <circle cx="0" cy="0" r="100" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />
                            <circle cx="0" cy="0" r="80" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />
                            <circle cx="0" cy="0" r="60" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />
                            <circle cx="0" cy="0" r="40" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />
                            <circle cx="0" cy="0" r="20" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />
                            
                            {/* Axis lines */}
                            <line x1="0" y1="-100" x2="0" y2="100" stroke="#e5e7eb" strokeWidth="1" />
                            <line x1="-100" y1="0" x2="100" y2="0" stroke="#e5e7eb" strokeWidth="1" />
                            <line x1="-70.7" y1="-70.7" x2="70.7" y2="70.7" stroke="#e5e7eb" strokeWidth="1" />
                            <line x1="-70.7" y1="70.7" x2="70.7" y2="-70.7" stroke="#e5e7eb" strokeWidth="1" />
                            <line x1="0" y1="-100" x2="0" y2="100" stroke="#e5e7eb" strokeWidth="1" />
                            
                            {/* Axis labels */}
                            <text x="0" y="-110" textAnchor="middle" fontSize="10" fill="#6b7280">Volatility</text>
                            <text x="110" y="0" textAnchor="start" fontSize="10" fill="#6b7280">Returns</text>
                            <text x="0" y="110" textAnchor="middle" fontSize="10" fill="#6b7280">Liquidity Risk</text>
                            <text x="-110" y="0" textAnchor="end" fontSize="10" fill="#6b7280">Concentration</text>
                            <text x="75" y="-75" textAnchor="middle" fontSize="10" fill="#6b7280">Drawdown</text>
                            
                            {/* Scale labels */}
                            <text x="0" y="-20" textAnchor="middle" fontSize="8" fill="#9ca3af">20%</text>
                            <text x="0" y="-40" textAnchor="middle" fontSize="8" fill="#9ca3af">40%</text>
                            <text x="0" y="-60" textAnchor="middle" fontSize="8" fill="#9ca3af">60%</text>
                            <text x="0" y="-80" textAnchor="middle" fontSize="8" fill="#9ca3af">80%</text>
                            <text x="0" y="-100" textAnchor="middle" fontSize="8" fill="#9ca3af">100%</text>
                            
                            {/* Strategy Polygons */}
                            {/* Equity Growth Strategy */}
                            <polygon 
                              points="0,-80 90,10 0,60 -40,0 60,-70" 
                              fill="rgba(59, 130, 246, 0.2)" 
                              stroke="rgba(59, 130, 246, 0.8)"
                              strokeWidth="2"
                              className="transition-all duration-300 hover:fill-blue-500/30 hover:stroke-blue-600"
                            />
                            
                            {/* Balanced Portfolio */}
                            <polygon 
                              points="0,-50 50,5 0,40 -30,0 30,-40" 
                              fill="rgba(16, 185, 129, 0.2)" 
                              stroke="rgba(16, 185, 129, 0.8)"
                              strokeWidth="2"
                              className="transition-all duration-300 hover:fill-green-500/30 hover:stroke-green-600"
                            />
                            
                            {/* Debt Plus Strategy */}
                            <polygon 
                              points="0,-40 45,5 0,30 -25,0 30,-30" 
                              fill="rgba(245, 158, 11, 0.2)" 
                              stroke="rgba(245, 158, 11, 0.8)"
                              strokeWidth="2"
                              className="transition-all duration-300 hover:fill-amber-500/30 hover:stroke-amber-600"
                            />
                            
                            {/* Special Situations Fund */}
                            <polygon 
                              points="0,-95 95,20 0,80 -60,0 80,-85" 
                              fill="rgba(220, 38, 38, 0.2)" 
                              stroke="rgba(220, 38, 38, 0.8)" 
                              strokeWidth="2"
                              className="transition-all duration-300 hover:fill-red-500/30 hover:stroke-red-600"
                            />
                            
                            {/* Data points with tooltips */}
                            <g className="data-points">
                              {/* Equity Growth - Volatility */}
                              <circle cx="0" cy="-80" r="4" fill="#3b82f6" className="opacity-80 hover:opacity-100 cursor-pointer">
                                <title>Volatility: 80%</title>
                              </circle>
                              {/* Equity Growth - Returns */}
                              <circle cx="90" cy="10" r="4" fill="#3b82f6" className="opacity-80 hover:opacity-100 cursor-pointer">
                                <title>Returns: 90%</title>
                              </circle>
                              
                              {/* Special Situations - Returns */}
                              <circle cx="95" cy="20" r="4" fill="#dc2626" className="opacity-80 hover:opacity-100 cursor-pointer">
                                <title>Returns: 95%</title>
                              </circle>
                              {/* Special Situations - Volatility */}
                              <circle cx="0" cy="-95" r="4" fill="#dc2626" className="opacity-80 hover:opacity-100 cursor-pointer">
                                <title>Volatility: 95%</title>
                              </circle>
                            </g>
                          </svg>

                      {/* Legend */}
                          <div className="absolute bottom-4 left-0 right-0 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
                            <div className="flex items-center px-2 py-1 rounded bg-white shadow-sm">
                              <div className="w-3 h-3 bg-blue-500 rounded-full mr-1.5"></div>
                          <span>Equity Growth</span>
                        </div>
                            <div className="flex items-center px-2 py-1 rounded bg-white shadow-sm">
                              <div className="w-3 h-3 bg-green-500 rounded-full mr-1.5"></div>
                          <span>Balanced</span>
                        </div>
                            <div className="flex items-center px-2 py-1 rounded bg-white shadow-sm">
                              <div className="w-3 h-3 bg-amber-500 rounded-full mr-1.5"></div>
                          <span>Debt Plus</span>
                        </div>
                            <div className="flex items-center px-2 py-1 rounded bg-white shadow-sm">
                              <div className="w-3 h-3 bg-red-500 rounded-full mr-1.5"></div>
                              <span>Special Sit.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                      {/* Volatility & Drawdown Analysis */}
                      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                        <div className="mb-4">
                          <h4 className="text-base font-medium text-gray-900 mb-1">Volatility & Maximum Drawdown</h4>
                          <p className="text-sm text-gray-600">Analysis of downside risk characteristics (2020-2024)</p>
                </div>

                        <div className="relative h-80">
                          {/* SVG Chart for Volatility & Drawdown */}
                          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                            {/* Grid lines */}
                            <g className="grid-lines">
                              {[...Array(6)].map((_, i) => (
                                <line 
                                  key={`h-${i}`}
                                  x1="0" 
                                  y1={i * 20} 
                                  x2="100" 
                                  y2={i * 20} 
                                  stroke="#e5e7eb" 
                                  strokeWidth="1"
                                />
                              ))}
                              {[...Array(6)].map((_, i) => (
                                <line 
                                  key={`v-${i}`}
                                  x1={i * 20} 
                                  y1="0" 
                                  x2={i * 20} 
                                  y2="100" 
                                  stroke="#e5e7eb" 
                                  strokeWidth="1"
                                />
                              ))}
                            </g>
                            
                            {/* X and Y axis */}
                            <line x1="0" y1="100" x2="100" y2="100" stroke="#6b7280" strokeWidth="1.5" />
                            <line x1="0" y1="0" x2="0" y2="100" stroke="#6b7280" strokeWidth="1.5" />
                            
                            {/* Axis labels */}
                            <text x="50" y="110" textAnchor="middle" fontSize="4" fill="#6b7280">Volatility (%)</text>
                            <text x="-40" y="50" textAnchor="middle" fontSize="4" fill="#6b7280" transform="rotate(-90 -40 50)">Max Drawdown (%)</text>
                            
                            {/* Scale labels - X axis */}
                            <text x="20" y="105" textAnchor="middle" fontSize="3" fill="#9ca3af">10</text>
                            <text x="40" y="105" textAnchor="middle" fontSize="3" fill="#9ca3af">20</text>
                            <text x="60" y="105" textAnchor="middle" fontSize="3" fill="#9ca3af">30</text>
                            <text x="80" y="105" textAnchor="middle" fontSize="3" fill="#9ca3af">40</text>
                            <text x="100" y="105" textAnchor="middle" fontSize="3" fill="#9ca3af">50</text>
                            
                            {/* Scale labels - Y axis */}
                            <text x="-3" y="80" textAnchor="end" fontSize="3" fill="#9ca3af">10</text>
                            <text x="-3" y="60" textAnchor="end" fontSize="3" fill="#9ca3af">20</text>
                            <text x="-3" y="40" textAnchor="end" fontSize="3" fill="#9ca3af">30</text>
                            <text x="-3" y="20" textAnchor="end" fontSize="3" fill="#9ca3af">40</text>
                            <text x="-3" y="0" textAnchor="end" fontSize="3" fill="#9ca3af">50</text>
                            
                            {/* Risk zones */}
                            <rect x="0" y="0" width="30" height="40" fill="rgba(16, 185, 129, 0.1)" />
                            <rect x="30" y="0" width="40" height="60" fill="rgba(59, 130, 246, 0.1)" />
                            <rect x="70" y="0" width="30" height="100" fill="rgba(220, 38, 38, 0.1)" />
                            
                            <text x="15" y="35" textAnchor="middle" fontSize="3.5" fill="rgba(16, 185, 129, 0.8)">Low Risk</text>
                            <text x="50" y="55" textAnchor="middle" fontSize="3.5" fill="rgba(59, 130, 246, 0.8)">Moderate Risk</text>
                            <text x="85" y="90" textAnchor="middle" fontSize="3.5" fill="rgba(220, 38, 38, 0.8)">High Risk</text>
                            
                            {/* Strategy data points */}
                            {/* Coordinates: (volatility%, drawdown%) */}
                            <circle cx="18" cy="65" r="4" fill="#10b981" stroke="white" strokeWidth="1">
                              <title>Balanced Portfolio: Volatility 9%, Max Drawdown 17.5%</title>
                            </circle>
                            <circle cx="32" cy="42" r="4" fill="#3b82f6" stroke="white" strokeWidth="1">
                              <title>Equity Growth: Volatility 16%, Max Drawdown 29%</title>
                            </circle>
                            <circle cx="12" cy="75" r="4" fill="#f59e0b" stroke="white" strokeWidth="1">
                              <title>Debt Plus: Volatility 6%, Max Drawdown 12.5%</title>
                            </circle>
                            <circle cx="50" cy="25" r="4" fill="#dc2626" stroke="white" strokeWidth="1">
                              <title>Special Situations: Volatility 25%, Max Drawdown 37.5%</title>
                            </circle>
                            <circle cx="24" cy="56" r="4" fill="#6b7280" stroke="white" strokeWidth="1">
                              <title>Benchmark (Nifty 50): Volatility 12%, Max Drawdown 22%</title>
                            </circle>
                            
                            {/* Strategy labels */}
                            <text x="18" y="60" textAnchor="middle" fontSize="3" fill="#10b981">BP</text>
                            <text x="32" y="37" textAnchor="middle" fontSize="3" fill="#3b82f6">EG</text>
                            <text x="12" y="70" textAnchor="middle" fontSize="3" fill="#f59e0b">DP</text>
                            <text x="50" y="20" textAnchor="middle" fontSize="3" fill="#dc2626">SS</text>
                            <text x="24" y="51" textAnchor="middle" fontSize="3" fill="#6b7280">BM</text>
                          </svg>
                    </div>
                  </div>
                </div>

                    {/* Risk Metrics Table */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                      <div className="p-4 border-b border-gray-200">
                        <h4 className="text-base font-medium text-gray-900">Key Risk Metrics (2024)</h4>
                        <p className="text-sm text-gray-600 mt-1">Detailed risk analytics across all strategies</p>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Strategy</th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volatility</th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max Drawdown</th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sharpe Ratio</th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sortino Ratio</th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Beta</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-800">Equity Growth Strategy</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">16.0%</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-29.0%</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.28</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.65</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.20</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-800">Balanced Portfolio</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9.0%</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-17.5%</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.42</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.83</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">0.75</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-800">Debt Plus Strategy</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">6.0%</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-12.5%</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.16</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.38</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">0.40</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-800">Special Situations Fund</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">25.0%</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-37.5%</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.35</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.58</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.65</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Benchmark (Nifty 50)</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">12.0%</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-22.0%</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">0.96</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.12</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.00</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Slider Section - Added above FAQ */}
      <LogoSlider
        title="Elite Portfolio Management Partners"
        subtitle="Partnering with India's premier SEBI-registered portfolio managers and alternative investment funds to deliver exceptional investment opportunities and wealth creation strategies."
      />

      {/* FAQ Section */}
      <ParallaxSection className="py-24 bg-gray-50" speed={0.1} direction="up">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <TextReveal as="h2" className="text-3xl font-bold tracking-tight text-blue-900 md:text-4xl">
                <span style={{ wordSpacing: "0.1em" }}>Frequently&nbsp;Asked&nbsp;Questions</span>
              </TextReveal>
              <p className="mt-6 text-lg text-gray-900">
                Find answers to common questions about our investment services
              </p>
            </div>
          </AnimationWrapper>

          <div className="mx-auto max-w-3xl">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`border-b border-gray-100 ${index === faqData.length - 1 ? "border-b-0" : ""}`}
                >
                  <button className="flex justify-between items-center w-full px-8 py-6 text-left focus:outline-none group hover:bg-blue-50 transition-colors duration-300">
                    <span className="text-lg font-medium text-blue-800">{item.question}</span>
                    <svg
                      className="w-6 h-6 text-blue-600 transform transition-transform duration-300 group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="px-8 pb-6">
                    <p className="text-gray-800 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Statistics Section */}
      <section className="relative py-24 bg-[#020b1c] text-white overflow-hidden">
        {/* Background gradient and blur effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020b1c] to-[#041633] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>

        {/* Floating orbs/glass elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="inline-block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-6"
              style={{ backdropFilter: "blur(4px)" }}
            >
              How Bharat Alternates Is Transforming India's Wealth Management Landscape?
            </h2>
            <p className="text-blue-100/90 max-w-3xl mx-auto text-lg">
              Our platform brings together India's most comprehensive network of portfolio managers, investment schemes,
              and asset management companies.
            </p>
            <div className="w-32 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8 rounded-full opacity-70"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                number: 800,
                label: "Portfolio manager's in India",
                icon: Users,
                gradient: "from-blue-400/20 to-blue-600/20",
              },
              {
                number: 500,
                label: "Portfolio management schemes in India",
                icon: Briefcase,
                gradient: "from-indigo-400/20 to-indigo-600/20",
              },
              {
                number: 300,
                label: "Alternative Investment funds in India",
                icon: BarChart2,
                gradient: "from-purple-400/20 to-purple-600/20",
              },
              {
                number: 2500,
                label: "Mutual fund schemes in India",
                icon: LineChart,
                gradient: "from-pink-400/20 to-pink-600/20",
              },
              {
                number: 40,
                label: "Asset management companies in India",
                icon: Building2,
                gradient: "from-cyan-400/20 to-cyan-600/20",
              },
            ].map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-3xl text-center">
              <TextReveal as="h2" className="text-3xl font-bold tracking-tight md:text-4xl" stagger={0.05}>
                <span style={{ wordSpacing: "0.2em" }}>Ready to Start Your Investment Journey?</span>
              </TextReveal>
              <p className="mt-4 text-lg opacity-90">
                Schedule a consultation with our investment experts to discuss how our solutions can help you achieve
                your financial goals.
              </p>
              <div className="mt-10">
                <CalendlyButton variant="secondary" size="lg" showArrow>
                  Book a call
                </CalendlyButton>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </>
  )
}
