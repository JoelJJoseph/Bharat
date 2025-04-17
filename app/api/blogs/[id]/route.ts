import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { isAdmin } from "@/lib/auth"
import { ObjectId } from "mongodb"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid blog ID" },
        { status: 400 }
      )
    }
    
    const client = await clientPromise
    const db = client.db("BharatA")
    
    const blog = await db.collection("blogs").findOne(
      { _id: new ObjectId(id) }
    )
    
    if (!blog) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      )
    }
    
    return NextResponse.json(blog)
  } catch (error) {
    console.error("Error fetching blog:", error)
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Check if user is admin
    const admin = await isAdmin()
    if (!admin) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }
    
    const id = params.id
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid blog ID" },
        { status: 400 }
      )
    }
    
    const blogData = await request.json()
    
    const client = await clientPromise
    const db = client.db("BharatA")
    
    // Remove _id if present to avoid MongoDB error
    if (blogData._id) delete blogData._id
    
    const result = await db.collection("blogs").updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: {
          ...blogData,
          updatedAt: new Date()
        } 
      }
    )
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      )
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error updating blog:", error)
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Check if user is admin
    const admin = await isAdmin()
    if (!admin) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }
    
    const id = params.id
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid blog ID" },
        { status: 400 }
      )
    }
    
    const client = await clientPromise
    const db = client.db("BharatA")
    
    const result = await db.collection("blogs").deleteOne(
      { _id: new ObjectId(id) }
    )
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      )
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting blog:", error)
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    )
  }
} 