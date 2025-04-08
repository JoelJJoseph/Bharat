import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import type { LoginInput } from "@/lib/models/user"
import bcrypt from "bcryptjs"
import { SignJWT } from "jose"

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LoginInput

    // Validate the request body
    if (!body.email || !body.password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("BharatA")

    // Find the user
    const user = await db.collection("users").findOne({ email: body.email })
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(body.password, user.password)
    if (!isValidPassword) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Create JWT token
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key")
    const token = await new SignJWT({
      userId: user._id,
      role: user.role,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("24h")
      .sign(secret)

    // Return user data and token
    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    })
  } catch (error) {
    console.error("Error logging in:", error)
    return NextResponse.json({ error: "Failed to log in" }, { status: 500 })
  }
}
