import { type NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { Newsletter } from "@/lib/models/newsletter"
import { isAdmin } from "@/lib/auth"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase()

    const newsletter = await Newsletter.findById(params.id)

    if (!newsletter) {
      return NextResponse.json({ error: "Newsletter not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: newsletter })
  } catch (error) {
    console.error("Error fetching newsletter:", error)
    return NextResponse.json({ error: "Failed to fetch newsletter" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Check if user is admin
    if (!isAdmin()) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await connectToDatabase()

    const data = await request.json()
    const newsletter = await Newsletter.findByIdAndUpdate(params.id, data, { new: true, runValidators: true })

    if (!newsletter) {
      return NextResponse.json({ error: "Newsletter not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: newsletter })
  } catch (error) {
    console.error("Error updating newsletter:", error)
    return NextResponse.json({ error: "Failed to update newsletter" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Check if user is admin
    if (!isAdmin()) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await connectToDatabase()

    const newsletter = await Newsletter.findByIdAndDelete(params.id)

    if (!newsletter) {
      return NextResponse.json({ error: "Newsletter not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: {} })
  } catch (error) {
    console.error("Error deleting newsletter:", error)
    return NextResponse.json({ error: "Failed to delete newsletter" }, { status: 500 })
  }
}
