import { type NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { User } from "@/lib/models/user"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Connect to the database
    await connectToDatabase()

    // Check if user exists
    const user = await User.findOne({ email })

    // For security reasons, always return success even if user doesn't exist
    // This prevents email enumeration attacks

    if (user) {
      // In a real application, you would:
      // 1. Generate a reset token
      // 2. Store it in the database with an expiration
      // 3. Send an email with a reset link

      // For now, we'll just log that we found the user
      console.log(`Password reset requested for user: ${user.email}`)
    }

    return NextResponse.json({
      success: true,
      message: "If an account with that email exists, a password reset link has been sent.",
    })
  } catch (error) {
    console.error("Forgot password error:", error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
