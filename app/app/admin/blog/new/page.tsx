import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { isAdmin } from "@/lib/auth"
import { BlogForm } from "@/components/admin/blog-form"

export const metadata: Metadata = {
  title: "Create Blog Post | Admin Dashboard",
  description: "Create a new blog post for Bharat Alternates",
}

export default async function NewBlogPage() {
  // Check if user is admin
  const admin = await isAdmin()
  if (!admin) {
    redirect("/auth/login")
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Create New Blog Post</h1>
      <BlogForm />
    </div>
  )
}
