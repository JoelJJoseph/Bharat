"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { NewsletterForm } from "@/components/admin/newsletter-form"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export default function EditNewsletterPage() {
  const params = useParams()
  const { toast } = useToast()
  const [newsletter, setNewsletter] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

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

  if (isLoading) {
    return (
      <div className="container mx-auto py-10 flex justify-center items-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Edit Newsletter</h1>
      {newsletter && <NewsletterForm initialData={newsletter} isEditing />}
    </div>
  )
}
