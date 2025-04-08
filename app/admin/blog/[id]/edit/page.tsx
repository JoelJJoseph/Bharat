import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { isAdmin } from "@/lib/auth"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"
import { BlogForm } from "@/components/admin/blog-form"

export const metadata: Metadata = {
  title: "Edit Blog Post | Admin Dashboard",
  description: "Edit an existing blog post",
}

async function getBlog(id: string) {
  try {
    if (!ObjectId.isValid(id)) {
      return null
    }

    const client = await clientPromise
    const db = client.db("BharatA")

    const blog = await db.collection("blogs").findOne({ _id: new ObjectId(id) })

    if (!blog) {
      return null
    }

    return JSON.parse(JSON.stringify(blog))
  } catch (error) {
    console.error("Failed to fetch blog:", error)
    return null
  }
}

export default async function EditBlogPage({ params }: { params: { id: string } }) {
  // Check if user is admin
  if (!isAdmin()) {
    redirect("/auth/login")
  }

  const blog = await getBlog(params.id)

  if (!blog) {
    redirect("/admin/blog")
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Edit Blog Post</h1>
      <BlogForm blogId={params.id} defaultValues={blog} />
    </div>
  )
}
