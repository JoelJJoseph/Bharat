import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import type { BlogPost, BlogPostInput } from "@/lib/models/blog"
import { getToken } from "next-auth/jwt"
import { NextRequest } from "next/server"

// GET all blog posts
export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise
    const db = client.db("BharatA")

    const posts = await db
      .collection("blog_posts")
      .find({ status: "published" })
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    )
  }
}

// POST new blog post (admin only)
export async function POST(request: NextRequest) {
  try {
    const token = await getToken({ req: request })
    if (!token || token.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const body = (await request.json()) as BlogPostInput

    // Validate the request body
    if (!body.title || !body.content || !body.excerpt || !body.slug) {
      return NextResponse.json(
        { error: "Title, content, excerpt, and slug are required" },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("BharatA")

    // Check if slug already exists
    const existingPost = await db
      .collection("blog_posts")
      .findOne({ slug: body.slug })
    if (existingPost) {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 400 }
      )
    }

    // Create the blog post
    const result = await db.collection("blog_posts").insertOne({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      id: result.insertedId,
    })
  } catch (error) {
    console.error("Error creating blog post:", error)
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    )
  }
} 