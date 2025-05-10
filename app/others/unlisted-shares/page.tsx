import { GlassmorphicHeader } from "@/components/glassmorphic-header"
import { CTASection } from "@/components/cta-section"
import { TrendingUp, AlertTriangle, DollarSign, Briefcase, Shield, LineChart, BarChart } from "lucide-react"
import Image from "next/image"

export default function UnlistedSharesPage() {
  return (
    <main className="min-h-screen">
      <GlassmorphicHeader
        title="Unlisted Shares"
        subtitle="Access exclusive investment opportunities before they go public"
        imageUrl="/placeholder.svg?height=600&width=1200"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Briefcase className="mr-2 h-8 w-8 text-primary" />
              What are Unlisted Shares?
            </h2>
            <p className="text-lg mb-4">
              Unlisted shares are equity shares of companies that are not listed on stock exchanges like NSE or BSE.
              These shares are traded privately between buyers and sellers in the over-the-counter (OTC) market.
            </p>
            <p className="text-lg">
              Investing in unlisted shares gives you an opportunity to become an early investor in promising companies
              before they go public through an IPO (Initial Public Offering). This can potentially offer significant
              returns if the company performs well and eventually lists on the stock exchange.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Unlisted Shares Concept"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Why Invest in Unlisted Shares"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <TrendingUp className="mr-2 h-8 w-8 text-primary" />
              Why Invest in Unlisted Shares?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                  <TrendingUp className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <span className="font-semibold">High Growth Potential:</span> Early investment in promising companies
                  can yield substantial returns when they go public or are acquired.
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                  <BarChart className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <span className="font-semibold">Portfolio Diversification:</span> Access to companies in emerging
                  sectors that may not be represented in public markets.
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                  <DollarSign className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <span className="font-semibold">Lower Volatility:</span> Less affected by short-term market
                  fluctuations compared to listed shares.
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                  <Shield className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <span className="font-semibold">Exclusive Opportunities:</span> Access to companies that may be
                  difficult to invest in after they go public due to high valuations.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <AlertTriangle className="mr-2 h-8 w-8 text-primary" />
            Key Considerations for Unlisted Share Investments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <LineChart className="mr-2 h-5 w-5 text-primary" />
                Liquidity Constraints
              </h3>
              <p>
                Unlisted shares have limited liquidity as they cannot be easily sold on stock exchanges. Finding buyers
                may take time, and you should be prepared for a longer investment horizon.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-primary" />
                Valuation Challenges
              </h3>
              <p>
                Determining the fair value of unlisted shares can be difficult due to limited information and the
                absence of market-determined prices. Thorough research is essential.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Shield className="mr-2 h-5 w-5 text-primary" />
                Regulatory Aspects
              </h3>
              <p>
                Unlisted shares are subject to different regulatory requirements compared to listed securities.
                Understanding these regulations is important for compliance and tax purposes.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Briefcase className="mr-2 h-8 w-8 text-primary" />
            Our Unlisted Shares Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                Bharat Alternates provides comprehensive services for investors interested in unlisted shares. Our team
                conducts thorough due diligence on potential investment opportunities, analyzing company financials,
                business models, management teams, and growth prospects.
              </p>
              <p className="text-lg mb-4">
                We facilitate the entire transaction process, from identifying suitable opportunities to executing the
                purchase and managing the necessary documentation. Our expertise ensures that you invest in quality
                unlisted shares with strong growth potential.
              </p>
              <p className="text-lg">
                We also provide regular updates on your investments and assist with exit strategies when you decide to
                sell your unlisted shares.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Bharat Alternates Unlisted Shares Services"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-6 mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <AlertTriangle className="mr-2 h-6 w-6 text-amber-500" />
            Risk Disclosure
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
              </span>
              <div>
                Investments in unlisted shares involve a high degree of risk and may not be suitable for all investors.
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
              </span>
              <div>
                The value of unlisted shares can be volatile, and there is no guarantee of returns or liquidity.
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
              </span>
              <div>
                Investors should conduct their own research and consider seeking advice from independent financial
                advisors before investing.
              </div>
            </li>
          </ul>
        </div>
      </section>

      <CTASection
        title="Interested in Unlisted Share Opportunities?"
        description="Speak with our investment specialists to explore exclusive unlisted share opportunities that align with your investment goals."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </main>
  )
}
