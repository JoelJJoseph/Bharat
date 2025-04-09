import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import clientPromise from "@/lib/mongodb"
import { formatDistanceToNow, format } from "date-fns"
import { ChevronLeft, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface BlogPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug)

  if (!blog) {
    return {
      title: "Blog Post Not Found | Bharat Alternates",
      description: "The requested blog post could not be found",
    }
  }

  return {
    title: `${blog.title} | Bharat Alternates Blog`,
    description: blog.excerpt,
    keywords: blog.tags.join(", "),
    authors: [{ name: blog.author }],
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.publishedAt,
      authors: [blog.author],
      tags: blog.tags,
    },
  }
}

async function getBlogBySlug(slug: string) {
  try {
    const client = await clientPromise
    const db = client.db("BharatA")

    const blog = await db.collection("blogs").findOne({
      slug,
      published: true,
    })

    if (!blog) {
      return null
    }

    return JSON.parse(JSON.stringify(blog))
  } catch (error) {
    console.error("Failed to fetch blog:", error)
    return null
  }
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const blog = await getBlogBySlug(params.slug)

  if (!blog) {
    notFound()
  }

  // Get author initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  // Format dates
  const publishedDate = new Date(blog.publishedAt)
  const formattedDate = format(publishedDate, "MMMM d, yyyy")
  const timeAgo = formatDistanceToNow(publishedDate, { addSuffix: true })

  return (
    <div className="container mx-auto py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/resources/blog" className="flex items-center text-muted-foreground hover:text-foreground">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to all articles
            </Link>
          </Button>

          <Badge className="mb-4">{blog.category}</Badge>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">{blog.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={`/placeholder-user.jpg`} alt={blog.author} />
                <AvatarFallback>{getInitials(blog.author)}</AvatarFallback>
              </Avatar>
              <span className="text-sm">
                <User className="inline h-4 w-4 mr-1 opacity-70" />
                {blog.author}
              </span>
            </div>

            <div className="flex items-center text-sm">
              <Calendar className="inline h-4 w-4 mr-1 opacity-70" />
              <span title={formattedDate}>{timeAgo}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag: string) => (
                <Link
                  key={tag}
                  href={`/resources/blog?tag=${encodeURIComponent(tag)}`}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  <Tag className="inline h-3 w-3 mr-1" />
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {blog.coverImage && (
          <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={blog.coverImage || "/placeholder.svg"}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          {/* Render blog content - in a real app, you might use a markdown renderer here */}
          <div dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, "<br />") }} />
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-4">Share this article</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Share on Twitter
            </Button>
            <Button variant="outline" size="sm">
              Share on LinkedIn
            </Button>
            <Button variant="outline" size="sm">
              Share on Facebook
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
