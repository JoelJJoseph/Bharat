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

// GET - Get all PMS or search PMS
export async function GET(request: NextRequest) {
  try {
    await connectToDatabase()

    const { searchParams } = new URL(request.url)
    const search = searchParams.get("search")
    const riskProfile = searchParams.get("riskProfile")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const page = Number.parseInt(searchParams.get("page") || "1")
    const skip = (page - 1) * limit

    const query: any = { isActive: true }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { provider: { $regex: search, $options: "i" } },
        { strategy: { $regex: search, $options: "i" } },
      ]
    }

    if (riskProfile) {
      query.riskProfile = riskProfile
    }

    // Check if admin is requesting
    const isAdmin = await verifyAdminToken(request)
    if (isAdmin) {
      // Admin can see all PMS including inactive
      delete query.isActive
    }

    // Check if logged in user is requesting
    const isUser = await verifyUserToken(request)

    // Get PMS data
    const pmsData = await PMS.find(query).sort({ aum: -1 }).skip(skip).limit(limit)

    const total = await PMS.countDocuments(query)

    // If not logged in, limit the data shown
    if (!isUser && !isAdmin) {
      // Only show first 3 PMS with limited data
      const limitedData = pmsData.slice(0, 3).map((pms) => ({
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
      }))

      return NextResponse.json({
        pmsData: limitedData,
        restricted: true,
        pagination: {
          total,
          page,
          limit,
          pages: Math.ceil(total / limit),
        },
      })
    }

    return NextResponse.json({
      pmsData,
      restricted: false,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching PMS data:", error)
    return NextResponse.json({ error: "Failed to fetch PMS data" }, { status: 500 })
  }
}

// POST - Create a new PMS
export async function POST(request: NextRequest) {
  try {
    // Verify admin token
    const admin = await verifyAdminToken(request)
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await connectToDatabase()

    const pmsData = await request.json()

    const pms = new PMS(pmsData)
    await pms.save()

    return NextResponse.json(pms)
  } catch (error) {
    console.error("Error creating PMS:", error)
    return NextResponse.json({ error: "Failed to create PMS" }, { status: 500 })
  }
}
