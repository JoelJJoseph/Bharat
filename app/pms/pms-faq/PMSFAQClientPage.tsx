"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Phone, HelpCircle, BookOpen, BarChart2, PieChart, ShieldCheck } from "lucide-react"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

// Card hover animation
const cardHoverVariants = {
  hover: {
    y: -5,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
}

// Accordion animation
const accordionVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}

export default function PMSFAQClientPage() {
  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <motion.section initial="hidden" animate="visible" variants={containerVariants} className="mb-16 text-center">
        <motion.div variants={itemVariants} className="relative inline-block mb-6">
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-30 blur-lg"
            />
            <HelpCircle className="relative w-16 h-16 mx-auto text-blue-600 mb-4" />
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full"
          />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700"
        >
          Frequently Asked Questions about PMS
        </motion.h1>
        <motion.p variants={itemVariants} className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground">
          Find answers to common questions about Portfolio Management Services, including types, benefits, tax
          implications, and more.
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> Schedule a Consultation
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-blue-600 text-blue-600 hover:bg-blue-50 shadow-sm"
            >
              <Link href="/pms/what-is-pms" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Learn About PMS
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* FAQ Categories */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="mb-16"
      >
        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-auto mb-6 p-1 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
            <TabsTrigger
              value="basics"
              className="py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300"
            >
              <BarChart2 className="w-4 h-4 mr-2" /> Basics
            </TabsTrigger>
            <TabsTrigger
              value="investment"
              className="py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300"
            >
              <PieChart className="w-4 h-4 mr-2" /> Investment
            </TabsTrigger>
            <TabsTrigger
              value="comparison"
              className="py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Comparisons
            </TabsTrigger>
            <TabsTrigger
              value="technical"
              className="py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300"
            >
              <BookOpen className="w-4 h-4 mr-2" /> Technical
            </TabsTrigger>
          </TabsList>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <TabsContent value="basics" className="mt-6">
              <motion.div whileHover="hover" variants={cardHoverVariants}>
                <Card className="border-0 shadow-md overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-blue-400 to-indigo-600"></div>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is PMS?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            <p className="mb-2">
                              Portfolio Management Services (PMS) is a tailored investment solution where professional
                              portfolio managers manage your investments based on your financial goals, risk appetite,
                              and investment horizon. PMS allows for customized investment strategies across equity,
                              debt, and other asset classes.
                            </p>
                            <p>
                              Unlike mutual funds, PMS offers personalized attention to your portfolio, with investment
                              strategies specifically designed for your unique financial situation and objectives.
                            </p>
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-2" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is equity PMS?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            Equity PMS is a service where a portfolio manager invests your money primarily in equities
                            (stocks) to generate high returns. It is ideal for investors looking to gain exposure to the
                            stock market with professional management. Equity PMS typically aims for capital
                            appreciation over the long term and is suitable for investors with a higher risk appetite.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-3" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is debt PMS?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            Debt PMS focuses on investing in fixed-income instruments like bonds, debentures, and other
                            debt securities. It's a safer investment option compared to equity PMS, offering steady
                            returns with lower risk. Debt PMS is suitable for conservative investors who prioritize
                            capital preservation and regular income over high growth.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-4" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is the Minimum ticket size in PMS?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            The minimum ticket size in PMS typically ranges from ₹50 lakh to ₹1 crore, depending on the
                            portfolio manager's strategy and client needs. It is higher compared to mutual funds, making
                            PMS suitable for high-net-worth individuals (HNIs). This higher minimum investment allows
                            portfolio managers to create truly customized strategies for their clients.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-5" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          How many types of PMSs are there?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            <p>There are three primary types of PMS:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                              <li>Discretionary PMS: Portfolio manager has full control over investments.</li>
                              <li>
                                <strong>Non-Discretionary PMS:</strong> The investor makes the final decision on
                                investments, while the portfolio manager offers advice.
                              </li>
                              <li>
                                Advisory PMS: The portfolio manager offers advice, but the client makes the decisions.
                              </li>
                            </ul>
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-6" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is discretionary PMS?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            Discretionary PMS allows the portfolio manager to make all investment decisions on behalf of
                            the investor, based on the investor's objectives and risk profile. The manager has complete
                            authority to buy, sell, or hold securities without consulting the client for each
                            transaction, making it ideal for investors who prefer a hands-off approach to their
                            investments.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-7" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is Non-Discretionary PMS?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            In Non-Discretionary PMS, the portfolio manager provides investment advice and
                            recommendations, but the final decision rests with the investor. This gives the investor
                            more control over their portfolio. The manager cannot execute trades without the client's
                            explicit approval, making it suitable for investors who want to be actively involved in
                            investment decisions.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <TabsContent value="investment" className="mt-6">
              <motion.div whileHover="hover" variants={cardHoverVariants}>
                <Card className="border-0 shadow-md overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-blue-400 to-indigo-600"></div>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          Who can invest in a PMS?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            High-net-worth individuals (HNIs), corporates, and family offices with a minimum investment
                            amount (usually ₹50 lakh) can invest in Portfolio Management Services (PMS). Investors
                            should also have a moderate to high risk tolerance and a long-term investment horizon to
                            benefit from PMS strategies.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-2" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          Who should invest in a PMS?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            PMS is ideal for investors who have a higher risk appetite, a long-term investment horizon
                            (3-5 years or more), and can commit a minimum investment of ₹50 lakh to ₹1 crore. It is
                            suited for those seeking professional portfolio management and customized investment
                            strategies tailored to their specific financial goals and risk profile.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-3" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What are the tax implications of PMSs?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            PMS tax implications are similar to direct equity investments. Long-term capital gains
                            (LTCG) are taxed at 12.5% (above ₹1.25 lakh), while short-term capital gains (STCG) are
                            taxed at 20%. Dividends are also taxed as per applicable income tax slabs. Each investor
                            receives individual tax statements as securities are held in their name.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-4" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          Can NRIs Invest in a PMS?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            Yes, NRIs can invest in PMS in India. They need to fulfill the KYC requirements and comply
                            with FEMA regulations. They can also invest in both equity PMS and debt PMS. NRIs need to
                            open an NRO/NRE account and obtain Portfolio Investment Scheme (PIS) permission from their
                            bank to invest in PMS.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-5" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          Can USA NRIs invest in a PMS?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            Yes, USA-based NRIs can invest in PMS. However, they must comply with U.S. tax laws, and
                            it's essential to consult a tax advisor to understand any tax implications in the USA. Some
                            PMS providers may have additional requirements or restrictions for US-based investors due to
                            FATCA compliance.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-6" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          Can Middle East NRIs invest in a PMS?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            Yes, Middle East NRIs are eligible to invest in PMS in India, subject to compliance with
                            Indian regulations and KYC requirements. The process is similar to other NRIs, requiring an
                            NRO/NRE account and PIS permission. Many PMS providers offer specialized services for Middle
                            East NRIs to facilitate their investments.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <TabsContent value="comparison" className="mt-6">
              <motion.div whileHover="hover" variants={cardHoverVariants}>
                <Card className="border-0 shadow-md overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-blue-400 to-indigo-600"></div>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What are the benefits of PMS over mutual funds?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            <p>PMS offers several advantages over mutual funds:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                              <li>
                                <strong>Customization:</strong> PMS offers personalized investment strategies tailored
                                to your specific needs.
                              </li>
                              <li>
                                <strong>Higher returns potential:</strong> PMS focuses on high-net-worth clients and can
                                invest directly in stocks with concentrated positions.
                              </li>
                              <li>
                                <strong>Group of informed Investors:</strong> Generally, the clients who are/have
                                investing in PMS are more experienced and come in a group of informed investors.
                              </li>
                              <li>
                                <strong>Transparency:</strong> PMS offers more transparency as every client has an
                                individual portfolio that is easy to track, and the underlying stocks are held in the
                                client's name.
                              </li>
                            </ul>
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-2" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          If you have 1Cr should you invest in PMS or AIF? Why?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            With ₹1 crore, both PMS and AIF can be suitable. PMS offers customized investment
                            management, ideal for equity-focused strategies, while AIF provides exposure to alternative
                            assets like private equity or real estate. The choice depends on your risk appetite and
                            investment goals. You can schedule a call with us, and we will help you take a more rational
                            decision with your money based on your specific financial situation.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-3" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          Which is the best performing PMS in India?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            The best-performing PMS in India varies annually based on market conditions. It's crucial to
                            compare PMS track records, risk profiles, and strategies before choosing the best one. Some
                            consistently top-performing PMS providers include Marcellus, ASK Investment Managers, and
                            Motilal Oswal. You can schedule a call with us, and we will help you take a more rational
                            decision with your money.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-4" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is the difference between PMS and mutual funds?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            PMS offers personalized investment strategies, while mutual funds pool money from various
                            investors to invest in a diversified portfolio. PMS is ideal for high-net-worth individuals
                            (HNIs) seeking customized management and potentially higher returns. Other key differences
                            include minimum investment amount, fee structure, transparency, and level of customization.
                            Want to explore personalized investment options? Schedule a call with us today to discuss
                            the best strategy for your financial goals.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-5" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          Is PMS a better investment option than mutual funds?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            PMS can outperform mutual funds for HNIs who prefer tailored strategies and direct market
                            exposure. Unlike mutual funds, PMS offers customization and professional management, leading
                            to potentially higher returns. However, it requires a higher minimum investment and may
                            involve higher fees. The "better" option depends on your investment amount, goals, and
                            involvement preference. Curious about how PMS can benefit you? Let's talk and find out how
                            we can create a personalized portfolio for you.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-6" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          SIF vs AIF: Which is Better for You?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            Specialized Investment Funds (SIFs) and Alternative Investment Funds (AIFs) share
                            similarities but cater to different investment strategies. AIFs provide a broader investment
                            range, including hedge funds, private equity, and venture capital, targeting a wide array of
                            asset classes. SIFs, however, focus solely on specific, specialized markets, offering more
                            targeted investment strategies. While AIFs offer more diverse options, SIFs can be a better
                            choice for those looking for high-growth opportunities in niche areas like infrastructure or
                            real estate. Looking for niche investment opportunities? Contact us today to learn if a
                            Specialized Investment Fund (SIF) suits your investment strategy.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <TabsContent value="technical" className="mt-6">
              <motion.div whileHover="hover" variants={cardHoverVariants}>
                <Card className="border-0 shadow-md overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-blue-400 to-indigo-600"></div>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is the fee structure in PMS?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            <p>The PMS fee structure typically includes:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                              <li>
                                <strong>Management Fees:</strong> Fixed percentage of assets under management (AUM),
                                typically ranging from 1% to 2.5% per annum.
                              </li>
                              <li>
                                <strong>Performance Fees:</strong> A fee based on the returns generated above a certain
                                benchmark, usually 10-20% of profits above the hurdle rate.
                              </li>
                              <li>
                                <strong>Exit Load:</strong> A fee for withdrawing the investment before a specified
                                time, typically 1-3% if withdrawn within 1-3 years.
                              </li>
                            </ul>
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-2" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is Fixed Fee in PMS?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            A fixed fee in PMS is a constant percentage charged on the total assets managed. This fee is
                            typically charged quarterly and ranges from 1% to 2.5% per annum of the assets under
                            management. The fixed fee covers the cost of managing the portfolio, research, and
                            administrative expenses, regardless of the portfolio's performance.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-3" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is variable/performance fee in PMS?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            A variable or performance fee is charged based on the returns generated above a predefined
                            benchmark. It incentivizes the portfolio manager to perform well. Typically, this fee ranges
                            from 10% to 20% of the returns generated above the hurdle rate (which could be a fixed
                            percentage or a market index). This aligns the interests of the portfolio manager with those
                            of the investor.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-4" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is better Fixed fee or performance fee/Variable fee?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            It depends on your investment strategy. A performance fee aligns the manager's interests
                            with yours, as they only earn when the portfolio performs well. However, a fixed fee
                            provides predictable costs, regardless of performance. A balanced approach with a lower
                            fixed fee combined with a performance fee is often considered optimal, as it ensures the
                            manager has skin in the game while covering basic operational costs.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-5" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          Do we have PMSs which charge a fee only on performance?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            Yes, some PMS providers charge a fee only on the performance (success fee) once the returns
                            surpass a set benchmark, making it performance-driven. These are less common but can be
                            attractive for investors who want to ensure they only pay when they receive above-benchmark
                            returns. However, these structures may have higher performance fees to compensate for the
                            absence of a fixed fee.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-6" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          Is PMS safe in India?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            PMS in India is regulated by SEBI (Securities and Exchange Board of India), which ensures
                            investor protection. However, like any investment, there are market risks involved. PMS
                            providers must follow strict regulatory guidelines, maintain transparency, and provide
                            regular reports to clients. The securities are held in the client's name, adding an extra
                            layer of safety compared to some other investment vehicles.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-7" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          When was the first PMS started in India?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            The first PMS in India was launched in 1993, offering professional management of portfolios
                            to high-net-worth individuals. The PMS industry has evolved significantly since then, with
                            SEBI introducing comprehensive regulations in 1996 and further refining them over the years
                            to enhance investor protection and transparency.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                      <AccordionItem value="item-8" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is the return of PMS over 10 years?
                        </AccordionTrigger>
                        <motion.div variants={accordionVariants}>
                          <AccordionContent className="text-gray-700">
                            PMS returns vary depending on the portfolio and strategy. As the Indian Markets in the past
                            two decades have done pretty well, there are some very good boutique fund houses which have
                            done well. India's growth story remains intact considering the global market scenario,
                            though it's important to remember that past performance is not always indicative of future
                            results. Top-performing PMS strategies have delivered 15-20% CAGR over 10-year periods.
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </motion.div>
        </Tabs>
      </motion.section>

      {/* More FAQ Questions */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mb-16"
      >
        <h2 className="mb-8 text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
          More Questions About PMS
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-lg">
                <CardTitle className="flex items-center text-blue-700">
                  <BarChart2 className="w-5 h-5 mr-2" /> Portfolio Management
                </CardTitle>
                <CardDescription>Questions about portfolio managers and management</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b border-blue-100">
                    <AccordionTrigger className="hover:text-blue-700 transition-colors duration-200">
                      What are Specialized Investment Funds (SIF)?
                    </AccordionTrigger>
                    <motion.div variants={accordionVariants}>
                      <AccordionContent className="text-gray-700">
                        Specialized Investment Funds (SIF) focus on niche markets or asset classes, such as real estate,
                        infrastructure, or private equity. They offer diversification beyond traditional asset classes
                        like stocks and bonds. SIFs allow investors to access specialized investment opportunities that
                        may not be available through conventional investment vehicles.
                      </AccordionContent>
                    </motion.div>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-b border-blue-100">
                    <AccordionTrigger className="hover:text-blue-700 transition-colors duration-200">
                      Who is a portfolio manager?
                    </AccordionTrigger>
                    <motion.div variants={accordionVariants}>
                      <AccordionContent className="text-gray-700">
                        A portfolio manager is a professional responsible for managing and overseeing the investments in
                        a client's portfolio, tailoring strategies to meet the client's financial goals and risk
                        profile. They make investment decisions, monitor market conditions, and adjust the portfolio as
                        needed to optimize returns while managing risk.
                      </AccordionContent>
                    </motion.div>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-b border-blue-100">
                    <AccordionTrigger className="hover:text-blue-700 transition-colors duration-200">
                      What is the organizational structure of PMS in India?
                    </AccordionTrigger>
                    <motion.div variants={accordionVariants}>
                      <AccordionContent className="text-gray-700">
                        In India, PMS firms typically have a CEO, CIO (Chief Investment Officer), Principal Officer,
                        research analysts, and relationship managers who work together to provide tailored investment
                        strategies for clients. The structure is designed to ensure specialized expertise at each level,
                        from investment decision-making to client relationship management.
                      </AccordionContent>
                    </motion.div>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-b border-blue-100">
                    <AccordionTrigger className="hover:text-blue-700 transition-colors duration-200">
                      What are the general responsibilities of a Portfolio Manager?
                    </AccordionTrigger>
                    <motion.div variants={accordionVariants}>
                      <AccordionContent className="text-gray-700">
                        A portfolio manager's responsibilities include asset allocation, stock selection, risk
                        management, performance tracking, and regular reporting to clients. They conduct research,
                        analyze market trends, make investment decisions, monitor portfolio performance, and communicate
                        with clients to ensure the investment strategy remains aligned with their goals.
                      </AccordionContent>
                    </motion.div>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-t-lg">
                <CardTitle className="flex items-center text-indigo-700">
                  <PieChart className="w-5 h-5 mr-2" /> Investment Strategy
                </CardTitle>
                <CardDescription>Questions about investment approaches and strategies</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b border-indigo-100">
                    <AccordionTrigger className="hover:text-indigo-700 transition-colors duration-200">
                      Why is asset allocation Important in PMS?
                    </AccordionTrigger>
                    <motion.div variants={accordionVariants}>
                      <AccordionContent className="text-gray-700">
                        Asset allocation is vital in PMS because it helps diversify investments across different asset
                        classes, balancing risk and maximizing returns based on the client's goals and market
                        conditions. It is often considered the primary determinant of portfolio performance, helping to
                        reduce volatility while capturing growth opportunities across various market segments.
                      </AccordionContent>
                    </motion.div>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-b border-indigo-100">
                    <AccordionTrigger className="hover:text-indigo-700 transition-colors duration-200">
                      How does correlation across asset classes impact Portfolio Performance?
                    </AccordionTrigger>
                    <motion.div variants={accordionVariants}>
                      <AccordionContent className="text-gray-700">
                        Understanding correlation between asset classes helps a portfolio manager reduce risk and
                        improve returns. Low correlation between assets can offer better diversification, reducing
                        portfolio volatility. When assets move independently of each other, losses in one area can be
                        offset by gains in another, leading to more stable overall portfolio performance.
                      </AccordionContent>
                    </motion.div>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-b border-indigo-100">
                    <AccordionTrigger className="hover:text-indigo-700 transition-colors duration-200">
                      What is portfolio rebalancing and why is it important?
                    </AccordionTrigger>
                    <motion.div variants={accordionVariants}>
                      <AccordionContent className="text-gray-700">
                        Portfolio rebalancing involves adjusting the portfolio to maintain the desired asset allocation.
                        It's essential to ensure the portfolio aligns with the investor's objectives and risk tolerance
                        over time. Regular rebalancing helps manage risk by preventing any single asset class from
                        dominating the portfolio due to market movements, and can potentially enhance returns by
                        systematically buying low and selling high.
                      </AccordionContent>
                    </motion.div>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-b border-indigo-100">
                    <AccordionTrigger className="hover:text-indigo-700 transition-colors duration-200">
                      How does a portfolio manager administer an investor's portfolio?
                    </AccordionTrigger>
                    <motion.div variants={accordionVariants}>
                      <AccordionContent className="text-gray-700">
                        A portfolio manager administers the portfolio by continuously monitoring the market, making
                        strategic adjustments, and rebalancing the portfolio based on the client's risk profile and
                        market conditions. They conduct regular reviews, provide performance reports, and communicate
                        with clients about strategy changes or market developments that may impact their investments.
                      </AccordionContent>
                    </motion.div>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Additional Questions */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mb-16"
      >
        <h2 className="mb-8 text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
          Additional Questions
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-lg">
                <CardTitle className="flex items-center text-blue-700">
                  <ShieldCheck className="w-5 h-5 mr-2" /> Risk and Selection
                </CardTitle>
                <CardDescription>Questions about risks and selecting the right PMS</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b border-blue-100">
                    <AccordionTrigger className="hover:text-blue-700 transition-colors duration-200">
                      How to choose the best PMS provider in India?
                    </AccordionTrigger>
                    <motion.div variants={accordionVariants}>
                      <AccordionContent className="text-gray-700">
                        When choosing a PMS provider in India, consider factors like track record, performance
                        consistency, management fees, investment strategies, and the level of personalization. Research
                        and compare providers to find the one that aligns with your financial goals. It's also important
                        to evaluate the experience of the portfolio management team and their risk management approach.
                        Need help selecting the right PMS for you? Book a consultation with our experts for tailored
                        advice.
                      </AccordionContent>
                    </motion.div>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-b border-blue-100">
                    <AccordionTrigger className="hover:text-blue-700 transition-colors duration-200">
                      What are the risks associated with investing in PMS?
                    </AccordionTrigger>
                    <motion.div variants={accordionVariants}>
                      <AccordionContent className="text-gray-700">
                        The main risks in PMS include market volatility, investment concentration, and management risk.
                        Since PMS involves active stock picking, there's also a risk of underperformance compared to
                        passive strategies like mutual funds. Other risks include liquidity risk (especially in
                        small-cap stocks), strategy risk, and regulatory changes that may impact investment approaches.
                        Want to understand these risks better? Talk to our experts to assess your risk tolerance and
                        make informed decisions.
                      </AccordionContent>
                    </motion.div>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-b border-blue-100">
                    <AccordionTrigger className="hover:text-blue-700 transition-colors duration-200">
                      Can a beginner invest in PMS?
                    </AccordionTrigger>
                    <motion.div variants={accordionVariants}>
                      <AccordionContent className="text-gray-700">
                        While PMS is typically suited for high-net-worth individuals (HNIs), beginners can invest if
                        they have the necessary capital and a long-term investment horizon. However, it's recommended to
                        consult a financial advisor before diving into PMS for tailored guidance. Beginners should have
                        a good understanding of investment basics and be comfortable with the higher minimum investment
                        requirement and potential market volatility. Thinking about getting started with PMS? Book a
                        call with us, and we'll guide you through the process.
                      </AccordionContent>
                    </motion.div>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-b border-blue-100">
                    <AccordionTrigger className="hover:text-blue-700 transition-colors duration-200">
                      What are the cost, expenses & fee in PMS?
                    </AccordionTrigger>
                    <motion.div variants={accordionVariants}>
                      <AccordionContent className="text-gray-700">
                        The costs in PMS include management fees, performance fees, brokerage charges, and taxes. These
                        are structured according to the portfolio's size and strategy. Management fees typically range
                        from 1-2.5% annually, while performance fees can be 10-20% of returns above a hurdle rate.
                        Additional expenses include custodian fees, transaction costs, and audit fees. It's important to
                        understand the total expense ratio and how it impacts your net returns.
                      </AccordionContent>
                    </motion.div>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-t-lg">
                <CardTitle className="flex items-center text-indigo-700">
                  <HelpCircle className="w-5 h-5 mr-2" /> Specialized Questions
                </CardTitle>
                <CardDescription>Other important questions about PMS</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b border-indigo-100">
                    <AccordionTrigger className="hover:text-indigo-700 transition-colors duration-200">
                      What is a Specialized Investment Fund (SIF)?
                    </AccordionTrigger>
                    <motion.div variants={accordionVariants}>
                      <AccordionContent className="text-gray-700">
                        A Specialized Investment Fund (SIF) is an investment vehicle designed to target specific niche
                        markets or asset classes such as real estate, private equity, or infrastructure. Unlike
                        traditional funds, SIFs focus on high-growth opportunities that are not widely available in
                        conventional investment avenues. These funds allow investors to diversify their portfolios with
                        specialized assets that align with specific investment goals.
                      </AccordionContent>
                    </motion.div>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-b border-indigo-100">
                    <AccordionTrigger className="hover:text-indigo-700 transition-colors duration-200">
                      How to choose between Fixed fee and Performance fee?
                    </AccordionTrigger>
                    <motion.div variants={accordionVariants}>
                      <AccordionContent className="text-gray-700">
                        When choosing between fixed and performance fees, consider your investment goals and risk
                        tolerance. Fixed fees provide predictability but may not align the manager's interests with
                        yours. Performance fees create better alignment but can lead to higher costs in strong markets.
                        A hybrid structure with a lower fixed fee plus a performance fee often provides the best
                        balance, ensuring the manager has incentive to perform while covering basic operational costs.
                      </AccordionContent>
                    </motion.div>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-b border-indigo-100">
                    <AccordionTrigger className="hover:text-indigo-700 transition-colors duration-200">
                      What is the difference between PMS and AIF?
                    </AccordionTrigger>
                    <motion.div variants={accordionVariants}>
                      <AccordionContent className="text-gray-700">
                        PMS offers personalized portfolio management with direct ownership of securities, while AIFs are
                        pooled investment vehicles like mutual funds but with more flexibility. PMS has a minimum
                        investment of ₹50 lakhs, while AIFs typically require ₹1 crore. PMS focuses primarily on listed
                        securities, while AIFs can invest in a wider range of assets including unlisted securities, real
                        estate, and private equity. The regulatory framework and fee structures also differ between the
                        two.
                      </AccordionContent>
                    </motion.div>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-b border-indigo-100">
                    <AccordionTrigger className="hover:text-indigo-700 transition-colors duration-200">
                      How is PMS regulated in India?
                    </AccordionTrigger>
                    <motion.div variants={accordionVariants}>
                      <AccordionContent className="text-gray-700">
                        PMS in India is regulated by the Securities and Exchange Board of India (SEBI) under the SEBI
                        (Portfolio Managers) Regulations. Portfolio managers must obtain a certificate of registration
                        from SEBI and comply with strict operational, disclosure, and reporting requirements. SEBI has
                        increased the minimum investment amount to ₹50 lakhs and mandates regular performance reporting
                        and fee disclosures to enhance transparency and investor protection.
                      </AccordionContent>
                    </motion.div>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="rounded-lg overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] mix-blend-overlay opacity-10"
        ></motion.div>
        <div className="relative p-8 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 text-3xl font-bold"
            >
              Still Have Questions About PMS?
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 text-lg"
            >
              Our team of expert advisors is ready to answer all your questions and help you determine if PMS is the
              right investment option for you.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-center gap-4 sm:flex-row"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Schedule a Consultation
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white hover:bg-white/10 border-white shadow-lg"
                  asChild
                >
                  <Link href="/pms/top-pms-in-india" className="flex items-center gap-2">
                    <BarChart2 className="w-4 h-4" /> Explore Top PMS in India
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
