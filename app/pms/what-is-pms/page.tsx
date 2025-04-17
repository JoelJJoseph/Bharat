import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Briefcase, Shield, Users, ArrowRight, TrendingUp, LineChart } from "lucide-react"

export const metadata: Metadata = {
  title: "What is PMS? | Portfolio Management Services Explained",
  description:
    "Learn about Portfolio Management Services (PMS), types of PMS, minimum investment requirements, and how they differ from mutual funds.",
}

export default function WhatIsPMSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 lg:py-36">
        {/* Animated Bubbles - Reduced quantity and slower animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative w-full h-full">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute rounded-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm animate-floating-${(i % 3) + 1}`}
                style={{
                  width: `${Math.floor(Math.random() * 80 + 40)}px`,
                  height: `${Math.floor(Math.random() * 80 + 40)}px`,
                  top: `${Math.floor(Math.random() * 100)}%`,
                  left: `${Math.floor(Math.random() * 100)}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Stable Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900" />

        {/* Content Container with improved stability */}
        <div className="container relative z-20 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="relative mb-8">
              {/* Decorative Lines - Reduced animation speed */}
              <div className="absolute -left-4 -top-4 h-20 w-20 animate-spin-slow opacity-20">
                <div className="h-full w-full border-l-2 border-t-2 border-white"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-20 w-20 animate-spin-slow opacity-20">
                <div className="h-full w-full border-b-2 border-r-2 border-white"></div>
              </div>

              <h1 className="relative text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                What is Portfolio Management Service?
              </h1>
            </div>

            {/* Paragraph with enhanced visibility and stability */}
            <div className="relative z-20 backdrop-blur-sm bg-navy-900/50 rounded-lg p-6 mb-12 shadow-lg">
              <p className="text-lg text-white md:text-xl font-normal leading-relaxed">
                Discover how professional portfolio managers can help you achieve your financial goals with customized
                investment strategies.
              </p>
            </div>

            <div className="relative flex flex-wrap justify-center gap-6">
              <Button
                size="lg"
                className="relative group bg-gradient-to-r from-white to-blue-50 text-navy-900 hover:to-white px-8 py-6 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 rounded-xl"
                asChild
              >
                <Link href="/contact" className="relative flex items-center gap-2">
                  <span className="relative z-10 font-semibold text-lg">Book a Call</span>
                  <div className="relative z-10 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="relative bg-white border-0 text-navy-900 px-8 py-6 rounded-xl hover:bg-gray-50"
                asChild
              >
                <Link href="/pms/who-should-invest" className="relative flex items-center gap-2">
                  <span className="font-semibold text-lg">Is PMS Right for You?</span>
                  <div className="w-6 h-6 rounded-full bg-navy-900 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Subtle Floating Elements */}
        <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-30">
          <div className="absolute left-1/4 top-1/4 h-40 w-40 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute right-1/4 bottom-1/4 h-40 w-40 rounded-full bg-white/5 blur-3xl"></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Understanding PMS Section */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-white shadow-xl">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 md:p-8">
                <div className="max-w-xl">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Understanding PMS</h2>
                  <p className="text-slate-600 text-lg mb-8">
                    Portfolio Management Services (PMS) is a professional investment service where expert portfolio
                    managers handle your investments. They create and manage a customized portfolio based on your
                    financial goals and risk appetite.
                  </p>

                  <div className="space-y-6">
                    <div className="group bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-500 transition-colors duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                          <Briefcase className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-lg mb-1">Professional Management</h4>
                          <p className="text-slate-600">Expert portfolio managers with deep market knowledge</p>
                        </div>
                      </div>
                    </div>

                    <div className="group bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-500 transition-colors duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                          <TrendingUp className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-lg mb-1">Customized Strategy</h4>
                          <p className="text-slate-600">Tailored investment approach for your needs</p>
                        </div>
                      </div>
                    </div>

                    <div className="group bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-500 transition-colors duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                          <Shield className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-lg mb-1">Risk Management</h4>
                          <p className="text-slate-600">Advanced techniques to protect and grow wealth</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[300px] bg-gradient-to-br from-navy-900/50 to-blue-900/50 rounded-xl overflow-hidden">
                <Image
                  src="/images/investment-management.png"
                  alt="Portfolio Management"
                  width={600}
                  height={400}
                  className="object-contain w-full h-full p-4"
                  priority
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Types of PMS Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Types of Portfolio Management Services</h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Understanding the different types of PMS to choose the management style that best suits your investment
              preferences and involvement level
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Discretionary PMS */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl transform transition-transform group-hover:scale-[1.02] group-hover:rotate-1"></div>
              <Card className="relative bg-white h-full transform transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 mb-4 relative">
                    <div className="absolute inset-0 bg-blue-100 rounded-full transform transition-transform group-hover:scale-110"></div>
                    <Briefcase className="w-8 h-8 text-blue-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">Discretionary PMS</CardTitle>
                  <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                    Full Authority
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-slate-600 text-center">
                      Portfolio manager has complete authority to make investment decisions on behalf of the client,
                      based on their investment objectives.
                    </p>
                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Expert decision making</span>
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Quick execution of trades</span>
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Hands-off approach for investors</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3">Best For:</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• Investors who prefer minimal involvement</li>
                        <li>• Those who trust expert judgment</li>
                        <li>• Busy professionals lacking time for active management</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Non-Discretionary PMS */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl transform transition-transform group-hover:scale-[1.02] group-hover:rotate-1"></div>
              <Card className="relative bg-white h-full transform transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 mb-4 relative">
                    <div className="absolute inset-0 bg-indigo-100 rounded-full transform transition-transform group-hover:scale-110"></div>
                    <Users className="w-8 h-8 text-indigo-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">Non-Discretionary PMS</CardTitle>
                  <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
                    Shared Control
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-slate-600 text-center">
                      Portfolio manager provides recommendations, but the final investment decisions rest with the
                      client, offering a balanced approach to portfolio management.
                    </p>
                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Expert guidance and recommendations</span>
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Client retains decision control</span>
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Collaborative investment approach</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3">Best For:</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• Investors who want active involvement</li>
                        <li>• Those seeking expert validation</li>
                        <li>• Experienced investors wanting guidance</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Advisory PMS */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl transform transition-transform group-hover:scale-[1.02] group-hover:rotate-1"></div>
              <Card className="relative bg-white h-full transform transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 mb-4 relative">
                    <div className="absolute inset-0 bg-purple-100 rounded-full transform transition-transform group-hover:scale-110"></div>
                    <LineChart className="w-8 h-8 text-purple-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">Advisory PMS</CardTitle>
                  <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
                    Guidance Only
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-slate-600 text-center">
                      Portfolio manager acts purely as an advisor, providing investment advice and recommendations while
                      leaving all execution decisions to the client.
                    </p>
                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Professional market insights</span>
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Complete client control</span>
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Flexible consultation model</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3">Best For:</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• Self-directed investors</li>
                        <li>• Those seeking market expertise</li>
                        <li>• Experienced traders wanting insights</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Get answers to common questions about Portfolio Management Services
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Basic Questions */}
            <div className="lg:col-span-2">
              <Card className="bg-white h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">Basic Understanding</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">What is PMS?</h4>
                      <p className="text-slate-700">
                        Portfolio Management Service (PMS) is a professional investment service where expert managers
                        handle your investment portfolio. They create and manage a customized portfolio based on your
                        financial goals and risk appetite.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">What is equity PMS?</h4>
                      <p className="text-slate-700">
                        Equity PMS focuses on investing in stocks and equity-related instruments. Portfolio managers
                        select stocks based on thorough research and market analysis to generate higher returns over the
                        long term.
                      </p>
                      <ul className="mt-2 space-y-1 text-slate-600">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>Active stock selection and monitoring</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>Higher return potential with managed risk</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">What is debt PMS?</h4>
                      <p className="text-slate-700">
                        Debt PMS invests in fixed-income securities like bonds, government securities, and other debt
                        instruments. It aims to provide steady returns with lower risk compared to equity investments.
                      </p>
                      <ul className="mt-2 space-y-1 text-slate-600">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>Regular income generation</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>Lower volatility than equity</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Investment Requirements */}
            <div>
              <Card className="bg-white h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">Investment Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">What is the minimum investment?</h4>
                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-700 font-medium">Starting from</span>
                        <span className="text-blue-600 font-bold">₹50 Lakhs</span>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full w-1/2"></div>
                      </div>
                    </div>
                    <p className="text-slate-700">
                      The minimum investment amount typically ranges from ₹50 lakh to ₹1 crore, depending on the
                      portfolio manager and strategy.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Who can invest in PMS?</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                        <span>High Net Worth Individuals (HNIs)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                        <span>Corporate entities and institutions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                        <span>NRIs (subject to FEMA regulations)</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Questions */}
            <div className="lg:col-span-3">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">Additional Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">What are the tax implications?</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• Long-term capital gains: 10% above ₹1 lakh</li>
                        <li>• Short-term capital gains: 15%</li>
                        <li>• Dividends taxed at applicable slab rates</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">What are the risks involved?</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• Market volatility risk</li>
                        <li>• Concentration risk</li>
                        <li>• Manager-specific risk</li>
                        <li>• Liquidity risk</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">
                        How is PMS different from mutual funds?
                      </h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• Customized portfolio</li>
                        <li>• Direct ownership of securities</li>
                        <li>• Higher minimum investment</li>
                        <li>• More personalized service</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Start Your PMS Journey?</h2>
            <p className="mb-6 text-lg">
              Let our expert portfolio managers help you create a customized investment strategy aligned with your
              financial goals.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" className="button-glow" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10" asChild>
                <Link href="/pms/who-should-invest">Learn Who Should Invest</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
