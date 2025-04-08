"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export default function DeleteBlogPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/blog/${params.id}`, {
        method: "DELETE",
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to delete blog post")
      }

      toast({
        title: "Blog post deleted",
        description: "The blog post has been deleted successfully.",
      })

      router.push("/admin/blog")
      router.refresh()
    } catch (error) {
      toast({
        title: "Failed to delete blog post",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Delete Blog Post</CardTitle>
          <CardDescription>
            Are you sure you want to delete this blog post? This action cannot be undone.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Deleting this blog post will permanently remove it from the database and it will no longer be accessible to
            users.
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/admin/blog">Cancel</Link>
          </Button>
          <Button variant="destructive" onClick={handleDelete} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Deleting...
              </>
            ) : (
              "Delete Blog Post"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
