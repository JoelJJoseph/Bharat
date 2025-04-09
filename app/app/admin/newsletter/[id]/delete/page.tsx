"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export default function DeleteNewsletterPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [newsletter, setNewsletter] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const fetchNewsletter = async () => {
      try {
        const response = await fetch(`/api/newsletter/${params.id}`)
        if (!response.ok) {
          throw new Error("Failed to fetch newsletter")
        }
        const data = await response.json()
        setNewsletter(data.data)
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load newsletter",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    if (params.id) {
      fetchNewsletter()
    }
  }, [params.id, toast])

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      const response = await fetch(`/api/newsletter/${params.id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete newsletter")
      }

      toast({
        title: "Newsletter deleted",
        description: "The newsletter has been deleted successfully",
      })

      router.push("/admin/newsletter")
      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="container mx-auto py-10 flex justify-center items-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Delete Newsletter</CardTitle>
          <CardDescription>
            Are you sure you want to delete this newsletter? This action cannot be undone.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {newsletter && (
            <div className="space-y-2">
              <p>
                <strong>Title:</strong> {newsletter.title}
              </p>
              <p>
                <strong>Type:</strong> {newsletter.type}
              </p>
              <p>
                <strong>Publish Date:</strong> {new Date(newsletter.publishDate).toLocaleDateString()}
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Deleting...
              </>
            ) : (
              "Delete Newsletter"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
