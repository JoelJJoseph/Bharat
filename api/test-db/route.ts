import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("BharatA")

    // Test the connection
    await db.command({ ping: 1 })

    // Get some basic stats
    const collections = await db.listCollections().toArray()
    const collectionNames = collections.map((c) => c.name)

    return NextResponse.json({
      success: true,
      message: "MongoDB connection successful",
      database: "BharatA",
      collections: collectionNames,
    })
  } catch (error) {
    console.error("MongoDB connection error:", error)
    return NextResponse.json(
      { error: "Failed to connect to MongoDB", details: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    )
  }
}

