import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { connectToDatabase } from "@/lib/mongodb"
import { Blog } from "@/lib/models/blog"

// Helper function to verify admin token
async function verifyAdminToken(request: NextRequest) {
  const authHeader = request.headers.get("authorization")
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null
  }

  const token = authHeader.split(" ")[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string; isAdmin: boolean }
    if (!decoded.isAdmin) {
      return null
    }
    return decoded
  } catch (error) {
    return null
  }
}

// GET - Get a single blog by ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase()

    const blog = await Blog.findById(params.id).populate("author", "username fullName")

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 })
    }

    // Check if blog is published or if admin is requesting
    if (!blog.isPublished) {
      const isAdmin = await verifyAdminToken(request)
      if (!isAdmin) {
        return NextResponse.json({ error: "Blog not found" }, { status: 404 })
      }
    }

    return NextResponse.json(blog)
  } catch (error) {
    console.error("Error fetching blog:", error)
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 })
  }
}

// PUT - Update a blog
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Verify admin token
    const admin = await verifyAdminToken(request)
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await connectToDatabase()

    const blogData = await request.json()

    // Check if blog exists
    const existingBlog = await Blog.findById(params.id)
    if (!existingBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 })
    }

    // Set published date if publishing for the first time
    if (blogData.isPublished && !existingBlog.isPublished) {
      blogData.publishedAt = new Date()
    }

    // Update the blog
    const updatedBlog = await Blog.findByIdAndUpdate(
      params.id,
      { ...blogData, updatedAt: new Date() },
      { new: true, runValidators: true },
    )

    return NextResponse.json(updatedBlog)
  } catch (error) {
    console.error("Error updating blog:", error)
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 })
  }
}

// DELETE - Delete a blog
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Verify admin token
    const admin = await verifyAdminToken(request)
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await connectToDatabase()

    // Check if blog exists
    const existingBlog = await Blog.findById(params.id)
    if (!existingBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 })
    }

    // Delete the blog
    await Blog.findByIdAndDelete(params.id)

    return NextResponse.json({ message: "Blog deleted successfully" })
  } catch (error) {
    console.error("Error deleting blog:", error)
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 })
  }
}
