import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { isAdmin } from "@/lib/auth"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("BharatA")
    
    const blogs = await db.collection("blogs").find({}).sort({ publishedAt: -1 }).toArray()
    
    return NextResponse.json(blogs)
  } catch (error) {
    console.error("Error fetching blogs:", error)
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    // Check if user is admin
    const admin = await isAdmin()
    if (!admin) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }
    
    const blogData = await request.json()
    
    // Add validation here if needed
    
    const client = await clientPromise
    const db = client.db("BharatA")
    
    const result = await db.collection("blogs").insertOne({
      ...blogData,
      publishedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    
    return NextResponse.json({ 
      success: true, 
      _id: result.insertedId 
    }, { status: 201 })
  } catch (error) {
    console.error("Error creating blog:", error)
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    )
  }
} 