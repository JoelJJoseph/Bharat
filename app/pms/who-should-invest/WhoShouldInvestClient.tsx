"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ChevronRight,
  Phone,
  CheckCircle2,
  Users,
  TrendingUp,
  ShieldCheck,
  Building,
  User,
  Briefcase,
  BarChart2,
  LineChart,
  Clock,
  Target,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function WhoShouldInvestClient() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section with Website Theme */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative container mx-auto px-4 py-24"
        >
          <div className="text-center space-y-8">
            <motion.div variants={itemVariants} className="relative">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Who Should Invest in PMS?</h1>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow-400" />
            </motion.div>
            <motion.p variants={itemVariants} className="text-xl text-white/90 max-w-3xl mx-auto">
              Portfolio Management Services (PMS) is designed for high-net-worth individuals seeking professional
              management of their investment portfolio. Let's explore if PMS is the right choice for you.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="relative z-10 bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Book a Call
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="relative z-10 border-2 border-white text-white bg-blue-600/50 hover:bg-blue-600/70"
              >
                <Link href="/pms/what-is-pms" className="flex items-center gap-2">
                  Learn About PMS <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Understanding PMS Investment</h2>
            <p className="text-lg text-gray-700">
              Portfolio Management Services (PMS) offers personalized investment strategies tailored to individual
              financial goals. However, it's not suitable for everyone. Understanding who should invest in PMS is
              crucial for making informed investment decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                <Target className="w-5 h-5 mr-2" /> Minimum Investment Requirements
              </h3>
              <p className="text-gray-700 mb-4">
                SEBI regulations mandate a minimum investment of ₹50 lakhs for PMS. This threshold ensures that PMS is
                accessible primarily to high-net-worth individuals who can afford the associated risks and fees.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Minimum investment of ₹50 lakhs as per SEBI regulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Higher entry barrier compared to mutual funds</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                <Clock className="w-5 h-5 mr-2" /> Investment Horizon
              </h3>
              <p className="text-gray-700 mb-4">
                PMS is designed for investors with a long-term investment horizon, typically 3-5 years or more. This
                timeframe allows portfolio managers to implement strategies that can weather market volatility.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Recommended investment horizon of 3-5 years or longer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Patience to ride out market cycles and volatility</span>
                </li>
              </ul>
            </Card>
          </div>
        </motion.section>

        {/* Ideal Investor Profile Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <Card className="bg-white shadow-lg border-0 p-8 mb-12 hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Ideal Investor Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={itemVariants}
                className="space-y-4 p-6 rounded-lg bg-gradient-to-b from-blue-50 to-blue-100/50 border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex justify-center">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900">High Net Worth Individuals</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Minimum investment capacity of ₹50 lakhs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Seeking personalized portfolio management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Looking for tailored investment strategies</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-4 p-6 rounded-lg bg-gradient-to-b from-purple-50 to-purple-100/50 border border-purple-200 hover:border-purple-300 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex justify-center">
                  <TrendingUp className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900">Long-term Investors</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Focus on long-term wealth creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Understanding of market cycles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Patience to wait for investment strategies to play out</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-4 p-6 rounded-lg bg-gradient-to-b from-indigo-50 to-indigo-100/50 border border-indigo-200 hover:border-indigo-300 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex justify-center">
                  <ShieldCheck className="w-12 h-12 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900">Risk-Aware Investors</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Understanding of market risks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Comfortable with market volatility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Ability to withstand temporary market downturns</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </Card>
        </motion.section>

        {/* Who Can Invest Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <Card className="bg-white shadow-lg border-0 p-8 mb-12 hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Who Can Invest in PMS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={itemVariants}
                className="space-y-4 p-6 rounded-lg bg-gradient-to-b from-blue-50 to-blue-100/50 border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex justify-center">
                  <User className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900">Individual Investors</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">HNIs and Ultra HNIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">NRI investors (subject to regulations)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Professionals with high disposable income</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-4 p-6 rounded-lg bg-gradient-to-b from-purple-50 to-purple-100/50 border border-purple-200 hover:border-purple-300 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex justify-center">
                  <Building className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900">Corporate Investors</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Companies with surplus funds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Corporate treasury management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Businesses looking for strategic investments</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-4 p-6 rounded-lg bg-gradient-to-b from-indigo-50 to-indigo-100/50 border border-indigo-200 hover:border-indigo-300 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex justify-center">
                  <Briefcase className="w-12 h-12 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900">Institutional Investors</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Trust funds and endowments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Family offices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Pension funds with specific mandates</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </Card>
        </motion.section>

        {/* Benefits and Considerations Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Benefits & Considerations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100/30 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                <BarChart2 className="w-5 h-5 mr-2" /> Benefits of PMS Investment
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Personalized Strategy:</strong> Tailored investment approach based on your financial goals
                    and risk profile
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Professional Management:</strong> Access to experienced portfolio managers and research
                    teams
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Transparency:</strong> Direct ownership of securities with complete visibility of your
                    portfolio
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Flexibility:</strong> Ability to customize your portfolio and exclude specific sectors or
                    stocks
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100/30 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                <LineChart className="w-5 h-5 mr-2" /> Key Considerations
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Higher Fees:</strong> Management and performance fees can impact overall returns
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Market Risk:</strong> Subject to market volatility and potential capital loss
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Lock-in Period:</strong> Some PMS providers have lock-in periods or exit loads
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Manager Risk:</strong> Performance depends on the expertise of the portfolio manager
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative text-center space-y-6 bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-xl text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold">Ready to Start Your Investment Journey?</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Take the first step towards professional portfolio management. Our experts are here to guide you through
              the process and help you determine if PMS is the right choice for your financial goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button
                asChild
                size="lg"
                className="relative z-10 bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Schedule a Consultation
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="relative z-10 border-2 border-white text-white bg-blue-600/50 hover:bg-blue-600/70"
              >
                <Link href="/pms/what-is-pms" className="flex items-center gap-2">
                  Learn More About PMS <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
