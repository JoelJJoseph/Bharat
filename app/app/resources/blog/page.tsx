import type { Metadata } from "next"
import { BlogList } from "@/components/blog/blog-list"

export const metadata: Metadata = {
  title: "Blog | Bharat Alternates",
  description:
    "Insights, analysis, and expert opinions on Portfolio Management Services (PMS) and Alternative Investment Funds (AIF) in India",
  keywords: [
    "PMS blog",
    "AIF blog",
    "Investment insights",
    "Portfolio management blog",
    "Alternative investments blog",
    "Indian investment blog",
    "Wealth management blog",
    "Investment analysis",
    "Market insights",
    "Financial blog India",
  ].join(", "),
}

export default function BlogPage() {
  return (
    <div className="container mx-auto py-16">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Investment Insights & Analysis</h1>
        <p className="text-lg text-muted-foreground">
          Expert perspectives on Portfolio Management Services, Alternative Investment Funds, and wealth creation
          strategies
        </p>
      </div>

      <BlogList />
    </div>
  )
}
