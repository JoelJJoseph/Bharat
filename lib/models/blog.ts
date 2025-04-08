import type { ObjectId } from "mongodb"

export interface BlogPost {
  _id?: ObjectId
  title: string
  content: string
  excerpt: string
  slug: string
  author: string
  featuredImage?: string
  tags: string[]
  status: "draft" | "published"
  createdAt: Date
  updatedAt: Date
}

export interface BlogPostInput {
  title: string
  content: string
  excerpt: string
  slug: string
  author: string
  featuredImage?: string
  tags: string[]
  status: "draft" | "published"
} 