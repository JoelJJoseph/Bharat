import { type NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import type { InquiryInput } from "@/lib/models/inquiry"

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as InquiryInput

    // Validate the request body
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("BharatA")

    // Insert the inquiry into the database
    const result = await db.collection("inquiries").insertOne({
      ...body,
      createdAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      id: result.insertedId,
    })
  } catch (error) {
    console.error("Error submitting inquiry:", error)
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("BharatA")

    // Simple connection test
    await db.command({ ping: 1 })

    return NextResponse.json({
      success: true,
      message: "MongoDB connection successful",
    })
  } catch (error) {
    console.error("MongoDB connection error:", error)
    return NextResponse.json({ error: "Failed to connect to MongoDB" }, { status: 500 })
  }
}

