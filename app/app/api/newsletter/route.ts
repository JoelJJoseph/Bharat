import { type NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { Newsletter } from "@/lib/models/newsletter"
import { isAdmin } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase()

    const { searchParams } = new URL(request.url)
    const type = searchParams.get("type")

    const query = type ? { type } : {}
    const newsletters = await Newsletter.find(query).sort({ publishDate: -1 })

    return NextResponse.json({ success: true, data: newsletters })
  } catch (error) {
    console.error("Error fetching newsletters:", error)
    return NextResponse.json({ error: "Failed to fetch newsletters" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check if user is admin
    if (!isAdmin()) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await connectToDatabase()

    const data = await request.json()
    const newsletter = new Newsletter(data)
    await newsletter.save()

    // In a real application, you would send emails to subscribers here

    return NextResponse.json({ success: true, data: newsletter }, { status: 201 })
  } catch (error) {
    console.error("Error creating newsletter:", error)
    return NextResponse.json({ error: "Failed to create newsletter" }, { status: 500 })
  }
}
