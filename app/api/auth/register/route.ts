import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import type { UserInput } from "@/lib/models/user"
import bcrypt from "bcryptjs"

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as UserInput

    // Validate the request body
    if (!body.email || !body.password || !body.name) {
      return NextResponse.json(
        { error: "Email, password, and name are required" },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("BharatA")

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email: body.email })
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      )
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(body.password, 10)

    // Create the user
    const result = await db.collection("users").insertOne({
      ...body,
      password: hashedPassword,
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      id: result.insertedId,
    })
  } catch (error) {
    console.error("Error registering user:", error)
    return NextResponse.json(
      { error: "Failed to register user" },
      { status: 500 }
    )
  }
} 