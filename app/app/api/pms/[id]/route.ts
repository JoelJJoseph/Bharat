import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { connectToDatabase } from "@/lib/mongodb"
import { PMS } from "@/lib/models/pms"

// Helper function to verify admin token
async function verifyAdminToken(request: NextRequest) {
  const authHeader = request.headers.get("authorization")
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null
  }

  const token = authHeader.split(" ")[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string; isAdmin: boolean }
    if (!decoded.isAdmin) {
      return null
    }
    return decoded
  } catch (error) {
    return null
  }
}

// Helper function to verify user token
async function verifyUserToken(request: NextRequest) {
  const authHeader = request.headers.get("authorization")
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null
  }

  const token = authHeader.split(" ")[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string }
    return decoded
  } catch (error) {
    return null
  }
}

// GET - Get a single PMS by ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase()

    const pms = await PMS.findById(params.id)

    if (!pms) {
      return NextResponse.json({ error: "PMS not found" }, { status: 404 })
    }

    // Check if PMS is active or if admin is requesting
    if (!pms.isActive) {
      const isAdmin = await verifyAdminToken(request)
      if (!isAdmin) {
        return NextResponse.json({ error: "PMS not found" }, { status: 404 })
      }
    }

    // Check if logged in user is requesting
    const isUser = await verifyUserToken(request)
    const isAdmin = await verifyAdminToken(request)

    // If not logged in, limit the data shown
    if (!isUser && !isAdmin) {
      // Return limited data
      const limitedData = {
        _id: pms._id,
        name: pms.name,
        provider: pms.provider,
        strategy: pms.strategy,
        aum: pms.aum,
        minInvestment: pms.minInvestment,
        riskProfile: pms.riskProfile,
        // Only include 1-year returns for non-logged in users
        returns: {
          oneYear: pms.returns.oneYear,
        },
        restricted: true,
      }

      return NextResponse.json(limitedData)
    }

    return NextResponse.json({
      ...pms.toObject(),
      restricted: false,
    })
  } catch (error) {
    console.error("Error fetching PMS:", error)
    return NextResponse.json({ error: "Failed to fetch PMS" }, { status: 500 })
  }
}

// PUT - Update a PMS
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Verify admin token
    const admin = await verifyAdminToken(request)
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await connectToDatabase()

    const pmsData = await request.json()

    // Check if PMS exists
    const existingPMS = await PMS.findById(params.id)
    if (!existingPMS) {
      return NextResponse.json({ error: "PMS not found" }, { status: 404 })
    }

    // Update the PMS
    const updatedPMS = await PMS.findByIdAndUpdate(
      params.id,
      { ...pmsData, updatedAt: new Date() },
      { new: true, runValidators: true },
    )

    return NextResponse.json(updatedPMS)
  } catch (error) {
    console.error("Error updating PMS:", error)
    return NextResponse.json({ error: "Failed to update PMS" }, { status: 500 })
  }
}

// DELETE - Delete a PMS
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Verify admin token
    const admin = await verifyAdminToken(request)
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await connectToDatabase()

    // Check if PMS exists
    const existingPMS = await PMS.findById(params.id)
    if (!existingPMS) {
      return NextResponse.json({ error: "PMS not found" }, { status: 404 })
    }

    // Delete the PMS
    await PMS.findByIdAndDelete(params.id)

    return NextResponse.json({ message: "PMS deleted successfully" })
  } catch (error) {
    console.error("Error deleting PMS:", error)
    return NextResponse.json({ error: "Failed to delete PMS" }, { status: 500 })
  }
}
