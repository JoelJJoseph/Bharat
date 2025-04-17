"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import type { Blog } from "@/components/admin/blog-form"

export default function AdminBlogPage() {
  const router = useRouter()
  const [posts, setPosts] = useState<Blog[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/blogs")
      if (!response.ok) {
        throw new Error("Failed to fetch blog posts")
      }
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      toast.error("Failed to fetch blog posts")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) {
      return
    }

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete blog post")
      }

      toast.success("Blog post deleted successfully")
      fetchPosts()
    } catch (error) {
      toast.error("Failed to delete blog post")
      console.error(error)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Management</h1>
        <Button onClick={() => router.push("/admin/blog/new")}>Create New Post</Button>
      </div>

      {isLoading ? (
        <div className="text-center py-10">Loading blog posts...</div>
      ) : posts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 mb-4">No blog posts found</p>
          <Button onClick={() => router.push("/admin/blog/new")}>Create your first blog post</Button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post._id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  By {post.author} • {new Date(post.publishedAt).toLocaleDateString()}
                </p>
                {post.coverImage && (
                  <div className="mt-4 aspect-video relative overflow-hidden rounded-md">
                    <img src={post.coverImage} alt={post.title} className="object-cover" />
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => router.push(`/admin/blog/${post._id}/edit`)}
                >
                  Edit
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => handleDelete(post._id as string)}
                >
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
