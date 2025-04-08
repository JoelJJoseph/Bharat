"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, X } from "lucide-react"

const blogSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
  content: z.string().min(50, "Content must be at least 50 characters"),
  coverImage: z.string().url("Please enter a valid URL"),
  author: z.string().min(2, "Author name must be at least 2 characters"),
  category: z.string().min(2, "Category must be at least 2 characters"),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  published: z.boolean().default(false),
})

type BlogFormValues = z.infer<typeof blogSchema>

interface BlogFormProps {
  blogId?: string
  defaultValues?: Partial<BlogFormValues>
}

export function BlogForm({ blogId, defaultValues }: BlogFormProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [tagInput, setTagInput] = useState("")

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: defaultValues?.title || "",
      excerpt: defaultValues?.excerpt || "",
      content: defaultValues?.content || "",
      coverImage: defaultValues?.coverImage || "",
      author: defaultValues?.author || "",
      category: defaultValues?.category || "",
      tags: defaultValues?.tags || [],
      published: defaultValues?.published || false,
    },
  })

  const tags = watch("tags")
  const published = watch("published")

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setValue("tags", [...tags, tagInput.trim()])
      setTagInput("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setValue(
      "tags",
      tags.filter((tag) => tag !== tagToRemove),
    )
  }

  const onSubmit = async (data: BlogFormValues) => {
    setIsLoading(true)
    try {
      const url = blogId ? `/api/blog/${blogId}` : "/api/blog"
      const method = blogId ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || `Failed to ${blogId ? "update" : "create"} blog post`)
      }

      toast({
        title: `Blog post ${blogId ? "updated" : "created"} successfully`,
        description: `Your blog post has been ${blogId ? "updated" : "created"} and is ${
          data.published ? "now published" : "saved as a draft"
        }.`,
      })

      // Redirect to blog list
      router.push("/admin/blog")
      router.refresh()
    } catch (error) {
      toast({
        title: `Failed to ${blogId ? "update" : "create"} blog post`,
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader>
          <CardTitle>{blogId ? "Edit Blog Post" : "Create New Blog Post"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter blog title"
              {...register("title")}
              className={errors.title ? "border-red-500" : ""}
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              placeholder="Enter a short excerpt (will be displayed in blog cards)"
              {...register("excerpt")}
              className={errors.excerpt ? "border-red-500" : ""}
              rows={3}
            />
            {errors.excerpt && <p className="text-red-500 text-sm">{errors.excerpt.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              placeholder="Enter blog content"
              {...register("content")}
              className={errors.content ? "border-red-500" : ""}
              rows={10}
            />
            {errors.content && <p className="text-red-500 text-sm">{errors.content.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverImage">Cover Image URL</Label>
            <Input
              id="coverImage"
              placeholder="Enter cover image URL"
              {...register("coverImage")}
              className={errors.coverImage ? "border-red-500" : ""}
            />
            {errors.coverImage && <p className="text-red-500 text-sm">{errors.coverImage.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                placeholder="Enter author name"
                {...register("author")}
                className={errors.author ? "border-red-500" : ""}
              />
              {errors.author && <p className="text-red-500 text-sm">{errors.author.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                placeholder="Enter blog category"
                {...register("category")}
                className={errors.category ? "border-red-500" : ""}
              />
              {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <div className="flex gap-2">
              <Input
                id="tagInput"
                placeholder="Add a tag"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    addTag()
                  }
                }}
              />
              <Button type="button" onClick={addTag}>
                Add
              </Button>
            </div>
            {errors.tags && <p className="text-red-500 text-sm">{errors.tags.message}</p>}

            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag) => (
                <div key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="published" checked={published} onCheckedChange={(checked) => setValue("published", checked)} />
            <Label htmlFor="published">Publish this blog post</Label>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" type="button" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
              </>
            ) : blogId ? (
              "Update Blog Post"
            ) : (
              "Create Blog Post"
            )}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
