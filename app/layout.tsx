import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { SidebarProvider } from "@/components/ui/sidebar"
import { MainSidebar } from "@/components/main-sidebar"
import { GlassmorphicHeader } from "@/components/glassmorphic-header"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bharat Alternates | Leading PMS & AIF Investment Platform in India",
  description:
    "India's most trusted platform for Portfolio Management Services (PMS) and Alternative Investment Funds (AIF). Our vision is to empower investors with data-driven insights, expert analysis, and seamless investment solutions that maximize wealth creation.",
  keywords: [
    "PMS India",
    "AIF Investment",
    "Portfolio Management Services",
    "Alternative Investment Funds",
    "Wealth Management India",
    "HNI Investment",
    "Investment Management",
    "Best PMS in India",
    "Top AIF Funds",
    "Investment Advisory",
    "Bharat Alternates",
    "Financial Services",
  ].join(", "),
  authors: [{ name: "Bharat Alternates" }],
  creator: "Bharat Alternates",
  publisher: "Bharat Alternates",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bharatalternates.com",
    title: "Bharat Alternates | Leading PMS & AIF Investment Platform in India",
    description:
      "India's most trusted platform for Portfolio Management Services (PMS) and Alternative Investment Funds (AIF).",
    siteName: "Bharat Alternates",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat Alternates | Leading PMS & AIF Investment Platform in India",
    description:
      "India's most trusted platform for Portfolio Management Services (PMS) and Alternative Investment Funds (AIF).",
    creator: "@bharatalternates",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider defaultOpen={false}>
          <div className="flex">
            <MainSidebar />
            <div className="flex min-h-screen w-full flex-col">
              <GlassmorphicHeader />
              <main className="flex-1 pt-16">{children}</main>
              <Footer />
            </div>
          </div>
        </SidebarProvider>
        <Toaster />

        {/* GSAP Scripts */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="beforeInteractive" />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}



import './globals.css'